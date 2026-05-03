import { NextResponse } from "next/server";
import { z } from "zod";
import { spamCheck, stripSpamFields } from "@/lib/spam-check";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  practice: z.string().optional(),
  country: z.string().min(2),
  system: z.string().min(2),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20),
  consent: z.literal(true),
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

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[quote] RESEND_API_KEY not set — lead captured in logs only:",
      { name: data.name, email: data.email, system: data.system }
    );
    return NextResponse.json({ ok: true, channel: "logs" });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const to =
      process.env.ENCORE_QUOTES_EMAIL ?? "studio@encorewoodcrafts.in";
    const html = `
      <h3>new quote request — ${data.system}</h3>
      <p><strong>${data.name}</strong> · ${data.email} · ${data.phone ?? "—"}</p>
      <p>practice: ${data.practice ?? "—"} · ${data.country}</p>
      <p>budget: ${data.budget ?? "—"} · timeline: ${data.timeline ?? "—"}</p>
      <hr />
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `;
    const result = await resend.emails.send({
      from: process.env.ENCORE_FROM_EMAIL ?? "studio@encorewoodcrafts.in",
      to,
      replyTo: data.email,
      subject: `[encore] quote request — ${data.system} · ${data.country}`,
      html,
    });
    if (result.error) {
      console.error("[quote] resend error", result.error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[quote] resend exception", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, channel: "email" });
}
