import { NextResponse } from "next/server";
import { z } from "zod";

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
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.format() },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const to =
        process.env.ENCORE_QUOTES_EMAIL ?? "studio@encorewoodcrafts.com";
      const html = `
        <h3>new quote request — ${data.system}</h3>
        <p><strong>${data.name}</strong> · ${data.email} · ${data.phone ?? "—"}</p>
        <p>practice: ${data.practice ?? "—"} · ${data.country}</p>
        <p>budget: ${data.budget ?? "—"} · timeline: ${data.timeline ?? "—"}</p>
        <hr />
        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `;
      await resend.emails.send({
        from: process.env.ENCORE_FROM_EMAIL ?? "studio@encorewoodcrafts.com",
        to,
        replyTo: data.email,
        subject: `[encore] quote request — ${data.system} · ${data.country}`,
        html,
      });
    } catch (err) {
      console.error("[quote] resend error", err);
    }
  } else {
    console.info("[quote] new lead", data);
  }

  return NextResponse.json({ ok: true });
}
