/**
 * Lightweight anti-spam check for public form endpoints.
 *
 * Two passive defences:
 *   - honeypot: a hidden field bots tend to fill in. Real users never see it.
 *   - min-time: the form's mount-to-submit duration. Bots submit instantly.
 *
 * No external infra required. For higher-volume traffic, layer a real
 * rate limiter (e.g. @upstash/ratelimit) on top.
 */

const MIN_FORM_TIME_MS = 2500;
const MAX_FORM_TIME_MS = 1000 * 60 * 60 * 24;

export const HONEYPOT_FIELD = "_hp" as const;
export const TIMESTAMP_FIELD = "_t" as const;

export type SpamCheckResult =
  | { ok: true }
  | { ok: false; reason: "honeypot" | "too-fast" | "stale" };

export function spamCheck(body: Record<string, unknown>): SpamCheckResult {
  const honeypot = body[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { ok: false, reason: "honeypot" };
  }

  const t = body[TIMESTAMP_FIELD];
  if (typeof t === "number" && Number.isFinite(t)) {
    const elapsed = Date.now() - t;
    if (elapsed < MIN_FORM_TIME_MS) return { ok: false, reason: "too-fast" };
    if (elapsed > MAX_FORM_TIME_MS) return { ok: false, reason: "stale" };
  }

  return { ok: true };
}

export function stripSpamFields<T extends Record<string, unknown>>(body: T): T {
  const copy = { ...body };
  delete copy[HONEYPOT_FIELD];
  delete copy[TIMESTAMP_FIELD];
  return copy;
}
