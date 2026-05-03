import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "privacy policy",
  description:
    "how encore woodcrafts llp collects, uses and protects your personal information.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "3 may 2026";

export default function PrivacyPage() {
  return (
    <div className="prose-legal space-y-10 text-ink-2 leading-relaxed">
      <header>
        <p className="eyebrow">policy</p>
        <h1 className="display-tight mt-3 text-4xl md:text-5xl text-ink leading-tight">
          privacy policy
        </h1>
        <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-2">
          last updated · {LAST_UPDATED}
        </p>
        <div className="mt-8 border border-walnut/40 bg-walnut/5 p-5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
            working draft
          </p>
          <p className="mt-2 text-sm text-ink leading-relaxed">
            this policy describes our current data practices and is being
            finalised with legal counsel for compliance with the digital
            personal data protection act, 2023 (india) and gdpr (eu/uk). we
            will publish the final version before the public launch of
            encorewoodcrafts.in. for the most accurate up-to-date answer,
            please write to{" "}
            <a
              href="mailto:studio@encorewoodcrafts.in"
              className="underline underline-offset-2"
            >
              studio@encorewoodcrafts.in
            </a>
            .
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">who we are</h2>
        <p>
          encore woodcrafts llp (&ldquo;encore&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a limited liability partnership registered in
          india, with its atelier at no. 9, timberyard lane, jubilee hills,
          hyderabad, telangana 500033.
        </p>
        <p>
          this policy applies to information we collect when you visit our
          website, request a quote, register for the cad library, subscribe
          to our newsletter, or otherwise interact with the atelier.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">information we collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-ink">information you provide.</strong>{" "}
            name, email, phone, country, practice, project brief, budget and
            timeline — whatever you choose to share through our quote and
            cad-registration forms.
          </li>
          <li>
            <strong className="text-ink">automatic information.</strong>{" "}
            anonymised page views, performance metrics (largest contentful
            paint, etc.), referrer, country and device class — collected via
            vercel analytics and vercel speed insights. these are cookieless,
            do not set persistent identifiers and run by default; you can opt
            out via your browser&rsquo;s do-not-track signal or any privacy
            extension.
          </li>
          <li>
            <strong className="text-ink">cookies & local storage.</strong>{" "}
            we store your preferred theme and language on your device. we do
            not set advertising or cross-site tracking cookies. see our{" "}
            <a
              href="/legal/cookies"
              className="underline underline-offset-2"
            >
              cookies notice
            </a>{" "}
            for the full list.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">how we use your data</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>to respond to enquiries and prepare proposals;</li>
          <li>
            to share your details, with your consent, with the encore
            regional partner responsible for your country;
          </li>
          <li>to send the encore newsletter, if you opt in;</li>
          <li>
            to understand site usage in aggregate and improve the experience;
          </li>
          <li>to comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">third parties we work with</h2>
        <p>
          we share the minimum data necessary with the following service
          providers:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-ink">vercel inc.</strong> (united states)
            — hosting, analytics and performance monitoring.
          </li>
          <li>
            <strong className="text-ink">resend, inc.</strong> (united
            states) — transactional email delivery for quote replies and cad
            access links.
          </li>
          <li>
            <strong className="text-ink">google llc</strong> (united states)
            — fonts (google fonts) served from cdn.
          </li>
          <li>
            <strong className="text-ink">our regional partners.</strong> when
            you consent on the cad-registration form, we share your contact
            details with the encore partner for your country so they can
            support specification.
          </li>
        </ul>
        <p>
          we do not sell or rent personal information to advertisers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">retention</h2>
        <p>
          enquiry data is retained for up to seven years to satisfy
          architectural-warranty obligations and indian tax law. you may ask
          us to delete it sooner if you have no active project with us.
          newsletter subscribers can unsubscribe at any time via the link in
          every dispatch.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">your rights</h2>
        <p>
          subject to applicable law, you may request access, correction,
          deletion, restriction or portability of your personal data, and
          withdraw consent at any time. write to{" "}
          <a
            href="mailto:studio@encorewoodcrafts.in"
            className="underline underline-offset-2"
          >
            studio@encorewoodcrafts.in
          </a>{" "}
          and we will respond within thirty days.
        </p>
        <p>
          residents of india may also reach our grievance officer in
          accordance with the digital personal data protection act, 2023.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">contact</h2>
        <address className="not-italic">
          encore woodcrafts llp
          <br />
          no. 9, timberyard lane, jubilee hills
          <br />
          hyderabad, telangana 500033, india
          <br />
          <a
            href="mailto:studio@encorewoodcrafts.in"
            className="underline underline-offset-2"
          >
            studio@encorewoodcrafts.in
          </a>
        </address>
      </section>
    </div>
  );
}
