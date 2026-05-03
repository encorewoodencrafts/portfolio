import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  practice: z.string().optional(),
  country: z.string().min(2),
  consent: z.literal(true),
  newsletter: z.boolean().optional(),
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

  const { email, name, practice, country } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.ENCORE_FROM_EMAIL ?? "studio@encorewoodcrafts.com",
        to: email,
        subject: "your encore CAD library access",
        html: `
          <p>hello ${name},</p>
          <p>thank you for registering to access the encore CAD library. you can sign in here:</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://encorewoodcrafts.com"}/login?email=${encodeURIComponent(email)}">access the library →</a></p>
          <p>our regional partner for ${country} will be in touch within two working days.</p>
          <p>— the encore atelier</p>
        `,
      });
    } catch (err) {
      console.error("[cad-register] resend error", err);
    }
  } else {
    console.info("[cad-register] new lead", { email, name, practice, country });
  }

  return NextResponse.json({ ok: true });
}
