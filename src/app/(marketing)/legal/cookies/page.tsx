import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "cookies",
  description:
    "the cookies and local-storage entries used on encorewoodcrafts.in.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "3 may 2026";

const cookies = [
  {
    name: "encore-theme",
    type: "local storage",
    purpose: "remembers your preferred theme (light / dark / sepia).",
    duration: "until you clear your browser data",
  },
  {
    name: "encore-mode",
    type: "local storage",
    purpose:
      "remembers whether you chose light mode, dark mode, or system default.",
    duration: "until you clear your browser data",
  },
  {
    name: "encore-locale",
    type: "local storage",
    purpose: "remembers your preferred site language.",
    duration: "until you clear your browser data",
  },
];

const analytics = [
  {
    name: "vercel analytics",
    purpose:
      "anonymous, cookieless pageview counts, referrer and country detection. runs on every visit by default. no personal identifiers, no cross-site tracking, no cookies set.",
  },
  {
    name: "vercel speed insights",
    purpose:
      "real-user core web vitals (lcp, inp, cls) sampled on every visit by default. fully anonymised and aggregated; no personal identifiers.",
  },
];

export default function CookiesPage() {
  return (
    <div className="space-y-10 text-ink-2 leading-relaxed">
      <header>
        <p className="eyebrow">notice</p>
        <h1 className="display-tight mt-3 text-4xl md:text-5xl text-ink leading-tight">
          cookies notice
        </h1>
        <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-2">
          last updated · {LAST_UPDATED}
        </p>
      </header>

      <section className="space-y-4">
        <p>
          we keep cookies and tracking to a deliberate minimum. we use only
          what is needed to remember your preferences (stored locally in your
          browser, never on our servers) and to understand how the site is
          used in aggregate. our analytics is anonymous and cookieless — no
          personal identifiers are set. we do not use advertising cookies or
          cross-site tracking.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">browser storage we set</h2>
        <div className="border border-line">
          <div className="grid grid-cols-12 gap-4 border-b border-line bg-paper-2 px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2">
            <span className="col-span-3">name</span>
            <span className="col-span-2">type</span>
            <span className="col-span-5">purpose</span>
            <span className="col-span-2">duration</span>
          </div>
          {cookies.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-12 gap-4 border-b border-line px-4 py-4 last:border-b-0 text-sm"
            >
              <span className="col-span-3 font-mono text-ink">{c.name}</span>
              <span className="col-span-2">{c.type}</span>
              <span className="col-span-5">{c.purpose}</span>
              <span className="col-span-2">{c.duration}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">
          analytics & performance monitoring
        </h2>
        <div className="border border-line">
          {analytics.map((a) => (
            <div
              key={a.name}
              className="border-b border-line p-5 last:border-b-0"
            >
              <p className="font-mono text-sm text-ink">{a.name}</p>
              <p className="mt-2 text-sm">{a.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">third-party embeds</h2>
        <p>
          we use google fonts (fraunces, inter, jetbrains mono) loaded from
          fonts.gstatic.com. when you visit the site your browser exchanges a
          minimal request with google to fetch the font files; no cookies are
          set by us through this exchange.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">how to opt out</h2>
        <p>
          you can clear our local-storage entries from your browser&rsquo;s
          site-data settings at any time. to opt out of analytics and speed
          insights, enable do-not-track in your browser, use a privacy
          extension (uBlock Origin, Privacy Badger, Brave Shields), or block
          requests to <code className="font-mono">/_vercel/insights/</code>{" "}
          on this domain. the site, forms and product pages will continue to
          work normally with analytics blocked.
        </p>
      </section>
    </div>
  );
}
