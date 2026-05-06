"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";

// The home-page catalogue overview. Renders one editorial row per family
// (wooden / glass / railings), with the sub-types listed alongside the
// hero image as a tabular sub-menu. The order follows the Shopify nav.
const FAMILY_ORDER = ["wooden-doors", "glass-doors", "railings"] as const;

export function ProductOverview() {
  return (
    <section
      id="products"
      className="border-t border-line bg-paper-2/40"
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">the encore catalogue</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2 className="display text-4xl md:text-6xl font-light tracking-tight text-ink leading-tight">
                three families,
                <br />
                <span className="italic">one atelier.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
                wooden doors in five finish families, aluminium-framed glass
                sliders in five hardware variants, and architectural railings
                in wood, glass and metal — every product made-to-measure in
                our hyderabad workshop.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {FAMILY_ORDER.map((slug, i) => {
            const product = products.find((p) => p.slug === slug);
            if (!product) return null;
            return (
              <FamilyRow
                key={slug}
                product={product}
                flipped={i % 2 === 1}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FamilyRow({
  product,
  flipped,
  index,
}: {
  product: (typeof products)[number];
  flipped: boolean;
  index: number;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-6 lg:gap-12 items-center",
        flipped && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="col-span-12 lg:col-span-7">
        <ClipReveal>
          <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-stone">
            <Image
              src={product.hero}
              alt={product.name}
              fill
              sizes="(min-width:1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-walnut">
            {String(index + 1).padStart(2, "0")} · {product.code}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink leading-[0.95]">
            {product.name}
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 italic text-ink-2 text-lg">{product.tagline}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-ink-2 leading-relaxed max-w-md">
            {product.excerpt}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <ul className="mt-8 divide-y divide-line border-t border-b border-line max-w-md">
            {product.subTypes.map((s) => (
              <li
                key={s.slug}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="display text-base text-ink">{s.name}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-2">
                  custom-made
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.18}>
          <Link
            href={`/products/${product.slug}`}
            className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            see {product.name}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
