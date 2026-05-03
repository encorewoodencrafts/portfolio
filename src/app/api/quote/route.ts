import { NextResponse } from "next/server";
import { z } from "zod";
import { spamCheck, stripSpamFields } from "@/lib/spam-check";
import { escapeHtml, escapeHtmlMultiline } from "@/lib/escape-html";
import { env } from "@/lib/env";

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

  const data = parsed.data;

  if (!env.resendApiKey) {
    // Avoid PII in logs: redact identifying fields, keep only the
    // diagnostic shape so we can confirm the route fired in dev.
    console.warn(
      "[quote] RESEND_API_KEY not set — lead dropped after capture",
      { system: data.system, country: data.country }
    );
    return NextResponse.json({ ok: true, channel: "logs" });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(env.resendApiKey);
    // CRITICAL: every interpolated value is user-controlled — escape before
    // composing HTML, otherwise a quote submission can deliver markup or
    // tracking pixels straight into the studio inbox.
    const html = `
      <h3>new quote request — ${escapeHtml(data.system)}</h3>
      <p><strong>${escapeHtml(data.name)}</strong> · ${escapeHtml(data.email)} · ${escapeHtml(data.phone ?? "—")}</p>
      <p>practice: ${escapeHtml(data.practice ?? "—")} · ${escapeHtml(data.country)}</p>
      <p>budget: ${escapeHtml(data.budget ?? "—")} · timeline: ${escapeHtml(data.timeline ?? "—")}</p>
      <hr />
      <p>${escapeHtmlMultiline(data.message)}</p>
    `;
    const result = await resend.emails.send({
      from: env.fromEmail,
      to: env.quotesToEmail,
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
