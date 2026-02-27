/**
 * In-memory sliding-window rate limiter.
 *
 * 5 requests per IP per route per 60 seconds by default.
 * Resets on serverless cold start — acceptable for a low-traffic school site.
 */

const map = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  ip: string,
  route: string = "default",
  limit = 5,
  windowMs = 60_000,
): boolean {
  const key = `${route}:${ip}`;
  const now = Date.now();
  const entry = map.get(key);

  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return true; // allowed
  }

  if (entry.count < limit) {
    entry.count++;
    return true; // allowed
  }

  return false; // rate limited
}
