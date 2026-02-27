import { NextResponse } from "next/server";
import { registrationSchema, PAYMENT_AMOUNTS } from "@/lib/schemas";
import { isValidOrigin } from "@/lib/origin-check";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/register
 *
 * 1. Origin check + rate limit
 * 2. Zod validate with registrationSchema
 * 3. Charge card via Clover REST API using cloverToken
 * 4. If charge fails → return error
 * 5. If charge succeeds → forward to Zapier with charge ID
 * 6. Return success + charge confirmation
 */
export async function POST(request: Request) {
  try {
    // Origin check (CSRF protection)
    if (!isValidOrigin(request)) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 },
      );
    }

    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (!rateLimit(ip, "register")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Strip SSN formatting before validation
    if (typeof body.ssn === "string") {
      body.ssn = body.ssn.replace(/\D/g, "");
    }

    // Zod validation
    const result = registrationSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Invalid data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;
    const amountInCents = PAYMENT_AMOUNTS[data.paymentTier];

    if (!amountInCents) {
      return NextResponse.json(
        { error: "Invalid payment tier." },
        { status: 400 },
      );
    }

    // ── Charge via Clover ─────────────────────────────────────────────
    const cloverToken = process.env.CLOVER_API_TOKEN;
    if (!cloverToken) {
      console.error("[register] CLOVER_API_TOKEN is not configured");
      return NextResponse.json(
        {
          error:
            "Payment processing is temporarily unavailable. Please call (949) 675-4451.",
        },
        { status: 503 },
      );
    }

    // TODO: Switch to https://api.clover.com/v1/charges for production
    const chargeRes = await fetch("https://scl.clover.com/v1/charges", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cloverToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInCents,
        currency: "usd",
        source: data.cloverToken,
      }),
    });

    const chargeData = await chargeRes.json().catch(() => null);

    if (!chargeRes.ok || !chargeData?.id) {
      console.error("[register] Clover charge failed:", chargeRes.status, chargeData);
      const userMsg =
        chargeData?.error?.message ??
        "Payment failed. Please check your card details and try again.";
      return NextResponse.json({ error: userMsg }, { status: 402 });
    }

    // ── Log submission — NEVER log SSN ────────────────────────────────
    console.log("[register] Registration + charge success:", {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      program: data.programType,
      tier: data.paymentTier,
      chargeId: chargeData.id,
      submittedAt: new Date().toISOString(),
    });

    // ── Forward to Zapier ─────────────────────────────────────────────
    const webhookUrl = process.env.ZAPIER_REGISTER_WEBHOOK_URL;

    if (webhookUrl) {
      // Strip sensitive fields before forwarding
      const { ssn: _ssn, cloverToken: _token, ...safePayload } = data;

      const zapierRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...safePayload,
          ssn: data.ssn, // SSN included for CRM — sent over HTTPS to Zapier
          chargeId: chargeData.id,
          amountCharged: amountInCents / 100,
          cardLast4: chargeData.source?.last4 ?? "****",
          submittedAt: new Date().toISOString(),
          source: "idi.edu-registration",
        }),
      });

      if (!zapierRes.ok) {
        // Charge succeeded but webhook failed — log but don't fail the user
        console.error(
          "[register] Zapier webhook failed (charge already processed):",
          zapierRes.status,
        );
      }
    } else {
      console.warn("[register] ZAPIER_REGISTER_WEBHOOK_URL not configured — skipping webhook");
    }

    return NextResponse.json({
      success: true,
      chargeId: chargeData.id,
      amount: amountInCents / 100,
    });
  } catch (err) {
    console.error("[register] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
