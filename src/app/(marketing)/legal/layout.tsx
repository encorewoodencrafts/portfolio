import Link from "next/link";

const sections = [
  { href: "/legal/privacy", label: "privacy policy" },
  { href: "/legal/cookies", label: "cookies" },
  { href: "/legal/terms", label: "terms of use" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="pt-32 md:pt-40 pb-24 border-b border-line">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <aside className="col-span-12 lg:col-span-3">
            <p className="eyebrow mb-6">legal</p>
            <ul className="space-y-1 lg:sticky lg:top-24">
              {sections.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block py-2 border-b border-line display text-base text-ink hover:text-walnut transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-ink-2 leading-relaxed">
              questions about how we handle your data? write to{" "}
              <a
                href="mailto:studio@encorewoodcrafts.in"
                className="underline underline-offset-2"
              >
                studio@encorewoodcrafts.in
              </a>
              .
            </p>
          </aside>

          <article className="col-span-12 lg:col-span-9 max-w-3xl">
            {children}
          </article>
        </div>
      </div>
    </section>
  );
}
