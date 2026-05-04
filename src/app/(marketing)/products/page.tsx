import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products, type ProductFamily } from "@/data/products";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { Marquee } from "@/components/site/marquee";

export const metadata: Metadata = {
  title: "products",
  description:
    "timber sliding window systems, solid-wood entrance doors and a thermally-broken aluminium window & door suite — engineered in-house at the encore atelier.",
};

const FAMILY_LABELS: Record<ProductFamily, string> = {
  "timber-window": "timber windows · sliding systems",
  "wood-door": "wood doors · pivot & hinged",
  aluminium: "aluminium · windows & doors",
};

const FAMILY_ORDER: ProductFamily[] = [
  "wood-door",
  "aluminium",
  "timber-window",
];

export default function ProductsPage() {
  const totalSystems = products.length;
  return (
    <>
      <PageHero
        kicker="no.01 · the encore family"
        eyebrow="encore systems"
        index="01"
        title={
          <>
            timber, wood doors
            <br />
            <span className="italic">&amp; aluminium.</span>
          </>
        }
        description="three families, one atelier: slim sliding timber window systems, monolithic solid-wood entrance doors and a thermally-broken aluminium window & door suite — every line engineered, machined and finished in-house."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>systems shipped</span>
              <span className="text-ink font-mono text-xs">
                {totalSystems}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>families</span>
              <span className="text-ink font-mono text-xs">
                timber · wood · aluminium
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>min sightline</span>
              <span className="text-ink font-mono text-xs">15 mm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>uw-value (best)</span>
              <span className="text-ink font-mono text-xs">0.78 W/m²K</span>
            </li>
          </ul>
        }
      />

      <Marquee
        phrases={[
          "encore SW · solid wood",
          "encore NM · noble materials",
          "encore 60 · passivhaus",
          "encore 38 · structural glass",
          "encore UM · ultra-minimal",
          "encore PD · pivot doors",
          "encore AW · aluminium windows",
          "encore AD · aluminium doors",
        ]}
        size="md"
        tone="walnut"
      />

      <section className="py-12 md:py-16 border-t border-line">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-20 md:space-y-24">
          {(() => {
            const nodes: React.ReactNode[] = [];
            let displayIdx = 0;
            FAMILY_ORDER.forEach((family, familyIdx) => {
              const items = products.filter((p) => p.family === family);
              if (items.length === 0) return;
              nodes.push(
                <Reveal key={`heading-${family}`}>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2 pt-4">
                    <span className="font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-walnut">
                      {String(familyIdx + 1).padStart(2, "0")} ·{" "}
                      {FAMILY_LABELS[family]}
                    </span>
                    <span className="order-3 sm:order-none w-full sm:w-auto h-px flex-1 bg-line hidden sm:block" />
                    <span className="block sm:hidden h-px w-12 bg-line" />
                    <span className="font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-ink-2 ml-auto sm:ml-0">
                      {items.length} system{items.length === 1 ? "" : "s"}
                    </span>
                  </div>
                </Reveal>
              );
              items.forEach((p) => {
                const i = displayIdx;
                displayIdx += 1;
                nodes.push(
                  <article
                    key={p.slug}
                    className="grid grid-cols-12 gap-6 lg:gap-12 items-stretch"
                  >
              <div className="col-span-12 lg:col-span-7">
                <ClipReveal>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group block relative aspect-[4/3] overflow-hidden bg-stone"
                  >
                    <Image
                      src={p.hero}
                      alt={p.name}
                      fill
                      sizes="(min-width:1024px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                    />
                    {/* corner index */}
                    <span className="absolute top-5 left-5 md:top-6 md:left-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/85 mix-blend-difference">
                      {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                    </span>
                    {/* hover view pill */}
                    <span className="absolute bottom-5 left-5 md:bottom-6 md:left-6 inline-flex items-center gap-1 rounded-full bg-cream/20 backdrop-blur-md px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      view {p.code} →
                    </span>
                  </Link>
                </ClipReveal>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <Reveal>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-walnut">
                    {String(i + 1).padStart(2, "0")} · {p.code}
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink leading-[0.95]">
                    {p.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-3 italic text-ink-2 text-lg">{p.tagline}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-ink-2 leading-relaxed max-w-md">
                    {p.excerpt}
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <ul className="mt-6 space-y-1.5 text-sm text-ink">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-2 inline-block h-px w-4 bg-walnut" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.18}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors w-fit"
                  >
                    see {p.name}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </Reveal>
              </div>
                  </article>
                );
              });
            });
            return nodes;
          })()}
        </div>
      </section>
    </>
  );
}
