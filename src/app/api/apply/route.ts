import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schemas";
import { isValidOrigin } from "@/lib/origin-check";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/apply
 *
 * Validates application form data with Zod, then forwards to Zapier.
 * Application is FREE — no payment processing.
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
    if (!rateLimit(ip, "apply")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Strip SSN formatting (dashes) before validation
    if (typeof body.ssn === "string") {
      body.ssn = body.ssn.replace(/\D/g, "");
    }

    // Zod validation
    const result = applicationSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Invalid data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Log submission — NEVER log SSN
    const { ssn: _ssn, ...safeData } = data;
    console.log("[apply] New application received:", {
      name: `${safeData.firstName} ${safeData.lastName}`,
      email: safeData.email,
      program: safeData.programType,
      submittedAt: new Date().toISOString(),
    });

    // Forward to Zapier
    const webhookUrl = process.env.ZAPIER_APPLY_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("[apply] ZAPIER_APPLY_WEBHOOK_URL is not configured");
      return NextResponse.json(
        {
          error:
            "Application form is temporarily unavailable. Please call (949) 675-4451 or email contact@idi.edu.",
        },
        { status: 503 },
      );
    }

    // SSN included in HTTPS webhook payload — Zapier handles CRM entry
    const zapierRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...safeData,
        ssn: data.ssn,
        submittedAt: new Date().toISOString(),
        source: "idi.edu-application",
      }),
    });

    if (!zapierRes.ok) {
      console.error("[apply] Zapier webhook failed:", zapierRes.status);
      return NextResponse.json(
        {
          error:
            "Submission failed. Please try again or call (949) 675-4451.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[apply] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
