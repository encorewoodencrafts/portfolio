import { NextResponse } from "next/server";
import { z } from "zod";
import { spamCheck, stripSpamFields } from "@/lib/spam-check";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://encorewoodcrafts.in";

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
    return NextResponse.json({ ok: true });
  }

  const parsed = schema.safeParse(stripSpamFields(body));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.format() },
      { status: 400 }
    );
  }

  const { email, name, practice, country } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[cad-register] RESEND_API_KEY not set — lead captured in logs only:",
      { email, name, practice, country }
    );
    return NextResponse.json({ ok: true, channel: "logs" });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: process.env.ENCORE_FROM_EMAIL ?? "studio@encorewoodcrafts.in",
      to: email,
      subject: "your encore CAD library access",
      html: `
        <p>hello ${name},</p>
        <p>thank you for registering to access the encore CAD library. you can sign in here:</p>
        <p><a href="${SITE_URL}/login?email=${encodeURIComponent(email)}">access the library →</a></p>
        <p>our regional partner for ${country} will be in touch within two working days.</p>
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
