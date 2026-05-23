"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { customDesigns } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";

// The 22 reference designs in the "customised collection" are pitched here
// as the atelier's most distinctive selling point: any design, any size,
// in any of the four families. We surface six representative pieces
// across the four families.
const FEATURE_SLUGS = [
  "encore-d01", // wooden — solid teak
  "encore-d04", // wooden — laminated white-oak
  "encore-d11", // glass — multi-track
  "encore-d14", // glass — corner mitre
  "encore-d19", // railings — frameless glass
  "encore-d22", // railings — teak + bronze
];

export function FeaturedSpotlights() {
  const features = FEATURE_SLUGS.map((slug) =>
    customDesigns.find((d) => d.slug === slug),
  ).filter((d): d is (typeof customDesigns)[number] => Boolean(d));

  if (features.length === 0) return null;

  return (
    <section
      aria-label="customised collection feature"
      className="relative border-t border-line bg-charcoal text-cream overflow-hidden"
    >
      {/* oversized index numeral as a graphic */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -bottom-10 select-none display text-cream/[0.04] font-light leading-none text-[28rem] md:text-[40rem]"
      >
        02
      </div>

      <div className="relative z-10 mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-cream/65">
              02 · the customised collection
            </p>
            <div className="mt-3 h-px w-12 bg-cream/40" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="display-tight text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[0.95] text-cream">
                22 reference{" "}
                <span className="italic text-cream/85">designs.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 max-w-xl text-cream/75 leading-relaxed">
                browse our customised collection — twenty-two reference
                designs across wooden doors, glass sliders and railings.
                every piece is built-to-order; bring us a sketch, a finish or
                an entire spec, and we produce a tailored quote within five
                working days.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {features.map((d, i) => (
            <li key={d.slug}>
              <ClipReveal delay={i * 0.05}>
                <Link
                  href={`/products/${d.family}#design-${d.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-charcoal/50">
                    <Image
                      src={d.image}
                      alt={`${d.code} — ${d.caption}`}
                      fill
                      sizes="(min-width:768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                    <span className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-cream/85">
                      {d.code}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <p className="font-mono text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-cream/70">
                        {familyLabel(d.family)}
                      </p>
                      <p className="mt-1 text-cream text-xs md:text-sm leading-snug">
                        {d.caption}
                      </p>
                    </div>
                  </div>
                </Link>
              </ClipReveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.18}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-sm text-cream/70 max-w-md">
              the full collection is browsable inside each family page, with
              filters by sub-type, finish and material.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors w-fit"
            >
              browse all 22 designs
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function familyLabel(family: (typeof customDesigns)[number]["family"]): string {
  switch (family) {
    case "wooden-doors":
      return "wooden door";
    case "glass-doors":
      return "glass slider";
    case "aluminium-doors":
      return "aluminium door";
    case "railings":
      return "railing";
  }
}
