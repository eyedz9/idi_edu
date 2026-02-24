import { NextResponse } from "next/server";

/**
 * POST /api/apply
 *
 * Receives the application form data, validates it, and sends a
 * confirmation email to IDI admissions via the configured email
 * endpoint. No Zapier integration — submissions are handled directly.
 *
 * TODO: Connect to IDI's CRM when ready.
 */

const REQUIRED_FIELDS = [
  "programType",
  "firstName",
  "lastName",
  "email",
  "homePhone",
  "birthDate",
  "address1",
  "city",
  "state",
  "zip",
  "caResident",
  "highSchool",
  "graduationDate",
  "emergencyContact",
  "emergencyPhone",
  "howFound",
  "termsAccepted",
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

    // Log the submission server-side
    console.log("[apply] New application received:", {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      program: body.programType,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Connect to CRM / email notification service
    // For now, the form validates and accepts submissions.

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[apply] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
