"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, type ProductFamily } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";

// The three core product families this atelier sells. Each tile uses the
// representative product's hero image, so changing the product hero in
// `src/data/products.ts` flows through automatically.
const FAMILIES: {
  family: ProductFamily;
  representativeSlug: string;
  index: string;
  label: string;
  italic: string;
  excerpt: string;
  hrefHash: string;
}[] = [
  {
    family: "wood-door",
    representativeSlug: "encore-pd",
    index: "01",
    label: "wood",
    italic: "doors.",
    excerpt:
      "monolithic solid-timber entrance and pivot doors — oversized leaves, concealed hinges, biometric-ready.",
    hrefHash: "wood-doors",
  },
  {
    family: "aluminium",
    representativeSlug: "encore-aw",
    index: "02",
    label: "aluminium",
    italic: "windows.",
    excerpt:
      "thermally-broken slim-frame windows in any RAL or anodised tone — fixed, casement, tilt-and-turn, corner-less mitres.",
    hrefHash: "aluminium",
  },
  {
    family: "aluminium",
    representativeSlug: "encore-ad",
    index: "03",
    label: "aluminium",
    italic: "doors.",
    excerpt:
      "lift-and-slide and bifold aluminium doors — single panels up to 4 m wide, flush threshold, motorisation ready.",
    hrefHash: "aluminium",
  },
];

export function FamiliesSpotlight() {
  return (
    <section
      id="families"
      aria-label="wood doors and aluminium systems"
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
                wood doors,
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                aluminium windows
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="italic">&amp; doors.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base text-ink-2 leading-relaxed">
                three product lines, one atelier. solid-wood entrance &amp;
                pivot doors, thermally-broken aluminium windows and matching
                aluminium sliding / bifold doors — engineered, machined and
                finished in-house.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {FAMILIES.map((f, i) => {
            const product = products.find(
              (p) => p.slug === f.representativeSlug
            );
            if (!product) return null;
            return (
              <li
                key={f.representativeSlug}
                className="bg-paper hover:bg-paper-2/60 transition-colors"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <ClipReveal delay={i * 0.06}>
                    {/* On phones we show a wider, less tall image so all
                        three tiles + their captions stay scrollable in a
                        reasonable distance. md+ goes back to portrait. */}
                    <div className="relative aspect-[16/10] sm:aspect-[3/2] md:aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={product.hero}
                        alt={`${f.label} ${f.italic.replace(".", "")}`}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent" />
                      <span className="absolute top-4 left-4 md:top-5 md:left-5 font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] md:tracking-[0.22em] text-cream/85">
                        {f.index} / 03
                      </span>
                      <div className="absolute bottom-5 left-4 right-4 md:bottom-6 md:left-5 md:right-5">
                        <h3 className="display text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-cream leading-[0.95]">
                          {f.label}
                          <br />
                          <span className="italic">{f.italic}</span>
                        </h3>
                      </div>
                    </div>
                  </ClipReveal>
                  <Reveal delay={i * 0.06 + 0.08}>
                    <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5">
                      <p className="text-sm md:text-[0.95rem] text-ink-2 leading-relaxed">
                        {f.excerpt}
                      </p>
                      <div className="flex items-center justify-between gap-3 pt-2 border-t border-line">
                        <span className="font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink truncate">
                          {product.name} · {product.code}
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
              looking for our timber-clad sliding window systems? they sit
              within the same atelier, below.
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
