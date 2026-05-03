/**
 * Server-only environment accessors.
 *
 * Centralises every `process.env.*` read used by API routes so:
 *   - The defaults for missing values live in one place.
 *   - Routes can't accidentally typo a key (they go through these helpers).
 *   - We have a single hook-point for env validation if we later add it.
 *
 * This file must NEVER be imported from a `"use client"` module — these
 * values are intended for server runtimes only. Anything truly public
 * should be `NEXT_PUBLIC_*` and read directly where needed.
 */

import "server-only";

const FALLBACK_FROM = "studio@encorewoodcrafts.in";
const FALLBACK_QUOTES_TO = "studio@encorewoodcrafts.in";
const FALLBACK_SITE_URL = "https://encorewoodcrafts.in";

export const env = {
  /** Public canonical site URL — also exposed to the client. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL,
  /** Resend API key. Absent in dev → routes log the lead instead of mailing. */
  resendApiKey: process.env.RESEND_API_KEY ?? null,
  /** From-address shown on outgoing mail. Must be a verified Resend domain. */
  fromEmail: process.env.ENCORE_FROM_EMAIL ?? FALLBACK_FROM,
  /** Where quote-form leads are delivered. */
  quotesToEmail: process.env.ENCORE_QUOTES_EMAIL ?? FALLBACK_QUOTES_TO,
} as const;
