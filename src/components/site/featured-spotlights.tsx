"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productBySlug } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";

// the four metal finishes that encore NM pairs with timber. fixed swatches —
// they sit on the always-dark feature surface so we use literal hex values
// (theme tokens like `walnut` would shift across themes and break the look).
const METALS: { name: string; tone: string; swatch: string }[] = [
  { name: "architectural bronze", tone: "patina · 7 levels", swatch: "#7a5a3a" },
  { name: "blackened steel", tone: "satin · oxidised", swatch: "#2a2622" },
  { name: "burnished brass", tone: "hand-rubbed · warm", swatch: "#b08d57" },
  { name: "brushed stainless", tone: "matte · cool", swatch: "#9aa0a4" },
];

export function FeaturedSpotlights() {
  // anchor the feature on encore NM — the noble-materials story that the
  // (now-removed) 4-up spotlight wall was trying, redundantly, to tell.
  const nm = productBySlug("encore-nm");
  if (!nm) return null;

  return (
    <section
      aria-label="noble materials feature"
      className="relative border-t border-line bg-charcoal text-cream overflow-hidden"
    >
      {/* oversized index numeral as a graphic — fills the dead space the old
          design left, anchored to the bottom-right of the section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-10 select-none display text-cream/[0.04] font-light leading-none text-[28rem] md:text-[40rem]"
      >
        02
      </div>

      <div className="relative z-10 mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
        {/* eyebrow row */}
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-cream/65">
              02 · the atelier
            </p>
            <div className="mt-3 h-px w-12 bg-cream/40" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="display-tight text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[0.95] text-cream">
                noble <span className="italic text-cream/85">materials.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 max-w-xl text-cream/75 leading-relaxed">
                {nm.description}
              </p>
            </Reveal>
          </div>
        </div>

        {/* main editorial grid — image, then a metals palette card */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* left: portrait image of the NM hybrid */}
          <div className="col-span-12 lg:col-span-7">
            <ClipReveal>
              <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden">
                <Image
                  src={nm.detailHero}
                  alt={`${nm.name} timber + bronze hybrid`}
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                {/* photo caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-cream/70">
                    {nm.code} series · {nm.tagline}
                  </p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-cream/55 hidden md:block">
                    plate · 02 / 04
                  </p>
                </div>
              </div>
            </ClipReveal>
          </div>

          {/* right: dense card stack — metals palette + secondary image + cta */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* metals palette */}
            <Reveal>
              <div className="border border-cream/15 p-6 md:p-7 bg-cream/[0.02] backdrop-blur-[1px]">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-cream/55">
                  the metals palette
                </p>
                <ul className="mt-5 divide-y divide-cream/10">
                  {METALS.map((m, i) => (
                    <li
                      key={m.name}
                      className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span
                        aria-hidden
                        className="block h-9 w-9 shrink-0 rounded-full border border-cream/20"
                        style={{ background: m.swatch }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="display text-base text-cream truncate">
                          {m.name}
                        </p>
                        <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/55 truncate">
                          {m.tone}
                        </p>
                      </div>
                      <span className="font-mono text-[0.6rem] tracking-[0.18em] text-cream/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* secondary atmospheric image — bronze + timber detail */}
            <ClipReveal delay={0.05}>
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={nm.imageA}
                  alt={`${nm.name} bronze detail`}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-cream/75">
                  bronze · hand-finished in atelier
                </p>
              </div>
            </ClipReveal>

            {/* spec strip + cta */}
            <Reveal delay={0.08}>
              <div className="border-t border-cream/15 pt-6 flex flex-wrap items-end justify-between gap-6">
                <dl className="flex flex-wrap gap-x-8 gap-y-3">
                  <div>
                    <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/55">
                      vertical sightline
                    </dt>
                    <dd className="mt-1 display text-xl text-cream">
                      {nm.sightline}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/55">
                      max panel
                    </dt>
                    <dd className="mt-1 display text-xl text-cream">
                      {nm.maxPanel}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/products/${nm.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors"
                >
                  discover {nm.name}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
