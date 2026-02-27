import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isValidOrigin } from "@/lib/origin-check";
import { rateLimit } from "@/lib/rate-limit";

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

/**
 * POST /api/upload
 *
 * Accepts multipart/form-data with a single file field.
 * Validates type + size, stores to Vercel Blob, returns { url }.
 */
export async function POST(request: Request) {
  try {
    // Origin check
    if (!isValidOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (!rateLimit(ip, "upload")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided." },
        { status: 400 },
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "File type not allowed. Please upload PDF, JPG, PNG, DOC, or DOCX." },
        { status: 400 },
      );
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10 MB." },
        { status: 400 },
      );
    }

    // Sanitize filename — extract extension only, ignore user-provided name
    const extMatch = file.name.match(/\.[a-zA-Z0-9]+$/);
    const ext = extMatch ? extMatch[0].toLowerCase() : "";
    const safeName = `${Date.now()}${ext}`;

    // Upload to Vercel Blob
    const blob = await put(`diplomas/${safeName}`, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("[upload] Unexpected error:", err);
    return NextResponse.json(
      { error: "Upload failed. Please try again." },
      { status: 500 },
    );
  }
}
