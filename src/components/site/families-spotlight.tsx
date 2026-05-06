"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";

// The three product families this atelier sells. Each tile pulls its image
// and copy directly from the family record in `src/data/products.ts`, so any
// edit to that file flows through automatically.
const FAMILY_ORDER = ["wooden-doors", "glass-doors", "railings"] as const;

const FAMILY_DECORATIONS: Record<
  (typeof FAMILY_ORDER)[number],
  { index: string; label: string; italic: string }
> = {
  "wooden-doors": { index: "01", label: "wooden", italic: "doors." },
  "glass-doors": { index: "02", label: "glass", italic: "doors." },
  railings: { index: "03", label: "atelier", italic: "railings." },
};

export function FamiliesSpotlight() {
  return (
    <section
      id="families"
      aria-label="encore product families"
      className="relative border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">what we make</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="display text-[2rem] leading-[1.05] sm:text-4xl md:text-6xl md:leading-tight font-light tracking-tight text-ink">
                wooden doors,
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                glass doors
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="italic">&amp; railings.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base text-ink-2 leading-relaxed">
                three product families, one atelier. solid-wood entrance and
                pivot doors; aluminium-framed sliding glass doors in five
                hardware variants; balcony, staircase and terrace railings in
                wood, glass and metal — engineered, finished and installed by
                the same in-house team.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {FAMILY_ORDER.map((slug, i) => {
            const product = products.find((p) => p.slug === slug);
            if (!product) return null;
            const dec = FAMILY_DECORATIONS[slug];
            return (
              <li
                key={slug}
                className="bg-paper hover:bg-paper-2/60 transition-colors"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <ClipReveal delay={i * 0.06}>
                    {/* Phones get a wider, less-tall image so all three
                        tiles stay scrollable; md+ goes back to portrait. */}
                    <div className="relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={product.hero}
                        alt={`${dec.label} ${dec.italic.replace(".", "")}`}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent" />
                      <span className="absolute top-4 left-4 md:top-5 md:left-5 font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] md:tracking-[0.22em] text-cream/85">
                        {dec.index} / 03
                      </span>
                      <div className="absolute bottom-5 left-4 right-4 md:bottom-6 md:left-5 md:right-5">
                        <h3 className="display text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-cream leading-[0.95]">
                          {dec.label}
                          <br />
                          <span className="italic">{dec.italic}</span>
                        </h3>
                      </div>
                    </div>
                  </ClipReveal>
                  <Reveal delay={i * 0.06 + 0.08}>
                    <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5">
                      <p className="text-sm md:text-[0.95rem] text-ink-2 leading-relaxed">
                        {product.excerpt}
                      </p>
                      <div className="flex items-center justify-between gap-3 pt-2 border-t border-line">
                        <span className="font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink truncate">
                          {product.subTypes.length} sub-types · code{" "}
                          {product.code}
                        </span>
                        <span className="inline-flex flex-none items-center gap-1 font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] text-ink group-hover:text-walnut transition-colors">
                          discover
                          <ArrowUpRight
                            className="h-3.5 w-3.5"
                            strokeWidth={1.5}
                          />
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </Link>
              </li>
            );
          })}
        </ul>

        <Reveal delay={0.18}>
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 sm:gap-6">
            <p className="text-sm text-ink-2 max-w-md">
              every door, slider and railing is custom-made — choose from 22
              reference designs in our customised collection or send us your
              own drawing.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors w-fit"
            >
              the full catalogue
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
