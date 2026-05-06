import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { continents } from "@/data/partners";
import { PageHero } from "@/components/site/page-hero";
import { PartnerMap } from "@/components/site/partner-map";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "around the world",
  description:
    "the encore global partner network — certified glaziers, cabinet-makers and fenestration specialists in 30+ countries on six continents.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        kicker="no.05 · global network"
        eyebrow="meet our chain of partners"
        index="05"
        title={
          <>
            around the
            <br />
            <span className="italic">world.</span>
          </>
        }
        description="a certified network of cabinet-makers, glaziers and fenestration specialists who have been inducted into the encore atelier programme — bringing the same standard wherever you build."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>countries</span>
              <span className="text-ink font-mono text-xs">30+</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>cities</span>
              <span className="text-ink font-mono text-xs">35+</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>email</span>
              <span className="text-ink font-mono text-xs truncate">{site.email}</span>
            </li>
          </ul>
        }
      />

      <section className="py-10 sm:py-14 md:py-20 border-b border-line">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <PartnerMap />
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-20">
          {continents.map((c) => (
            <div key={c.name}>
              <div className="flex items-end justify-between gap-6 mb-10 border-b border-line pb-6">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
                    {String(c.partners.length).padStart(2, "0")} partners
                  </p>
                  <h2 className="mt-2 display text-3xl md:text-5xl font-light tracking-tight leading-tight">
                    {c.name}
                  </h2>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
                {c.partners.map((p) => (
                  <li
                    key={`${c.name}-${p.country}-${p.city}`}
                    className="bg-paper p-6 hover:bg-paper-2 transition-colors"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
                      {p.country}
                    </p>
                    <h3 className="mt-2 display text-xl font-light tracking-tight">
                      {p.city}
                    </h3>
                    <p className="mt-1 text-sm text-ink">{p.company}</p>
                    <div className="mt-4 space-y-1.5 text-xs text-ink-2">
                      <p className="flex items-center gap-2">
                        <Mail
                          className="h-3 w-3 flex-none"
                          strokeWidth={1.5}
                        />
                        <a
                          href={`mailto:${p.email}`}
                          className="hover:text-ink truncate"
                        >
                          {p.email}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone
                          className="h-3 w-3 flex-none"
                          strokeWidth={1.5}
                        />
                        <a
                          href={`tel:${p.phone.replace(/\s+/g, "")}`}
                          className="hover:text-ink"
                        >
                          {p.phone}
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16 md:py-20 bg-charcoal text-cream">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/70">
              not in our network yet?
            </p>
            <h2 className="mt-4 display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
              we are looking for
              <br />
              <span className="italic">two new partners in 2026.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors"
            >
              partner programme →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
