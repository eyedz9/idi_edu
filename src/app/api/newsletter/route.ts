import { NextResponse } from "next/server";
import { z } from "zod";
import { isValidOrigin } from "@/lib/origin-check";
import { rateLimit } from "@/lib/rate-limit";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

/**
 * POST /api/newsletter
 *
 * Validates newsletter signup email with Zod, then forwards to Zapier.
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
    if (!rateLimit(ip, "newsletter")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Zod validation
    const result = newsletterSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Invalid data";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const webhookUrl = process.env.ZAPIER_NEWSLETTER_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("[newsletter] ZAPIER_NEWSLETTER_WEBHOOK_URL is not configured");
      return NextResponse.json(
        {
          error:
            "Newsletter signup is temporarily unavailable. Please try again later.",
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
        source: "idi.edu-newsletter",
      }),
    });

    if (!zapierRes.ok) {
      console.error("[newsletter] Zapier webhook failed:", zapierRes.status);
      return NextResponse.json(
        {
          error: "Signup failed. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
