/**
 * Lightweight CSRF protection via Origin header check.
 *
 * Browsers send the Origin header on cross-origin requests and on
 * same-origin POST requests. Since all our forms POST JSON via fetch,
 * the CORS preflight blocks cross-origin requests — this adds defense
 * in depth by rejecting requests with a mismatched Origin.
 */
export function isValidOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");

  // No Origin header = same-origin navigation or server-to-server
  if (!origin) return true;

  return (
    origin === "https://idi.edu" ||
    origin === "https://www.idi.edu" ||
    origin.includes("localhost") ||
    /^https:\/\/idi-edu(-[a-z0-9-]+)?\.vercel\.app$/.test(origin)
  );
}
