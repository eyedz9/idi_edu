import { NextResponse } from "next/server";
import { tourSchema } from "@/lib/schemas";
import { isValidOrigin } from "@/lib/origin-check";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/tour
 *
 * Validates tour booking form data with Zod, then forwards to Zapier.
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
    if (!rateLimit(ip, "tour")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Zod validation
    const result = tourSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Invalid data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const webhookUrl = process.env.ZAPIER_TOUR_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("[tour] ZAPIER_TOUR_WEBHOOK_URL is not configured");
      return NextResponse.json(
        {
          error:
            "Tour booking is temporarily unavailable. Please call (949) 675-4451 or email contact@idi.edu.",
        },
        { status: 503 },
      );
    }

    // Forward to Zapier
    const zapierRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.data,
        submittedAt: new Date().toISOString(),
        source: "idi.edu-tour-form",
      }),
    });

    if (!zapierRes.ok) {
      console.error("[tour] Zapier webhook failed:", zapierRes.status);
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
    console.error("[tour] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
