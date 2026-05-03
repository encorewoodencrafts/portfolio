import { NextResponse } from "next/server";
import { z } from "zod";
import { spamCheck, stripSpamFields } from "@/lib/spam-check";
import { escapeHtml } from "@/lib/escape-html";
import { env } from "@/lib/env";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  practice: z.string().optional(),
  country: z.string().min(2),
  consent: z.literal(true),
  newsletter: z.boolean().optional(),
});

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const body = raw as Record<string, unknown>;
  const spam = spamCheck(body);
  if (!spam.ok) {
    // Return 200 OK to keep bots in the dark — they can't tell their
    // submission was discarded.
    return NextResponse.json({ ok: true });
  }

  const parsed = schema.safeParse(stripSpamFields(body));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.format() },
      { status: 400 }
    );
  }

  const { email, name, country } = parsed.data;

  if (!env.resendApiKey) {
    console.warn(
      "[cad-register] RESEND_API_KEY not set — lead dropped after capture",
      { country }
    );
    return NextResponse.json({ ok: true, channel: "logs" });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(env.resendApiKey);
    // The link is a URL context (not HTML), so the email itself is encoded
    // with `encodeURIComponent`. The greeting + country are HTML PCDATA, so
    // they go through the HTML escaper.
    const safeName = escapeHtml(name);
    const safeCountry = escapeHtml(country);
    const loginUrl = `${env.siteUrl}/login?email=${encodeURIComponent(email)}`;
    const result = await resend.emails.send({
      from: env.fromEmail,
      to: email,
      subject: "your encore CAD library access",
      html: `
        <p>hello ${safeName},</p>
        <p>thank you for registering to access the encore CAD library. you can sign in here:</p>
        <p><a href="${loginUrl}">access the library →</a></p>
        <p>our regional partner for ${safeCountry} will be in touch within two working days.</p>
        <p>— the encore atelier</p>
      `,
    });
    if (result.error) {
      console.error("[cad-register] resend error", result.error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[cad-register] resend exception", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, channel: "email" });
}
