import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Receives the contact form data and forwards it to a Zapier webhook.
 * The webhook URL is stored in ZAPIER_CONTACT_WEBHOOK_URL env var.
 *
 * Zapier then handles:
 *  - Sending to IDI's CRM
 *  - Sending email notifications to staff
 *  - Auto-reply to the inquirer
 */

const REQUIRED_FIELDS = [
  "howFound",
  "firstName",
  "lastName",
  "contactMethod",
  "email",
  "phone",
  "address",
] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const missing = REQUIRED_FIELDS.filter((f) => !body[f]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.ZAPIER_CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("[contact] ZAPIER_CONTACT_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable. Please call (949) 675-4451 or email contact@idi.edu." },
        { status: 503 },
      );
    }

    // Forward to Zapier
    const zapierRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        submittedAt: new Date().toISOString(),
        source: "idi.edu-contact-form",
      }),
    });

    if (!zapierRes.ok) {
      console.error("[contact] Zapier webhook failed:", zapierRes.status);
      return NextResponse.json(
        { error: "Submission failed. Please try again or call (949) 675-4451." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
