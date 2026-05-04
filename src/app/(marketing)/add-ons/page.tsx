import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { addOns } from "@/data/addons";
import { AddOnIcon } from "@/components/site/addon-icons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "add-ons",
  description:
    "nine accessories engineered to integrate invisibly with the encore family — insect screens, motorisation, security, soft close, pivot, drainage, silence kit, hurricane, ultra-light.",
};

export default function AddOnsPage() {
  return (
    <>
      <PageHero
        kicker="no.02 · accessories"
        eyebrow="expanding the system"
        index="02"
        title={
          <>
            add-ons,
            <br />
            <span className="italic">never afterthoughts.</span>
          </>
        }
        description="nine accessories engineered to integrate invisibly with the encore family. none alter the sightlines."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>accessories</span>
              <span className="text-ink font-mono text-xs">{addOns.length}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>compatibility</span>
              <span className="text-ink font-mono text-xs">every system</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>added at</span>
              <span className="text-ink font-mono text-xs">spec time</span>
            </li>
          </ul>
        }
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {addOns.map((a, i) => (
              <li
                key={a.slug}
                id={a.slug}
                className="bg-paper hover:bg-paper-2 transition-colors scroll-mt-24"
              >
                <Reveal delay={(i % 3) * 0.04}>
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-walnut">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <AddOnIcon
                        type={a.icon}
                        className="h-16 w-16 text-ink/70"
                      />
                    </div>
                    <h3 className="mt-12 display text-2xl md:text-3xl font-light tracking-tight text-ink leading-tight">
                      {a.name}
                    </h3>
                    <p className="mt-2 italic text-ink-2 text-sm">
                      {a.subtitle}
                    </p>
                    <p className="mt-5 text-sm text-ink-2 leading-relaxed">
                      {a.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink hover:text-walnut transition-colors"
                    >
                      enquire about {a.name}
                      <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-cream py-20 md:py-24 mt-12">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/70">
              specify your add-ons
            </p>
            <h2 className="mt-4 display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
              every accessory we make
              <br />
              <span className="italic">disappears into the architecture.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors"
            >
              talk to the atelier
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
