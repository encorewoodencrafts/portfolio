/**
 * Escapes a plain string so it can be safely interpolated into HTML.
 *
 * Used for transactional email templates (server-side) where user input
 * would otherwise become live HTML — that's at minimum a malformed-mail
 * vector, and at worst a way to slip tracking pixels or links into the
 * studio's inbox via a quote-form submission.
 *
 * Note: this is for interpolation into PCDATA / attribute values, not
 * URLs. For URL contexts use `encodeURIComponent` instead.
 */
export function escapeHtml(input: unknown): string {
  if (input === null || input === undefined) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Escapes a multi-line string for HTML and converts newlines to `<br />`.
 * Suitable for free-form user message bodies in email templates.
 */
export function escapeHtmlMultiline(input: unknown): string {
  return escapeHtml(input).replace(/\r?\n/g, "<br />");
}
