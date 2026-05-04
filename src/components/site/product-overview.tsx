"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, type ProductFamily } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";

const FAMILY_LABELS: Record<ProductFamily, string> = {
  "timber-window": "timber windows · sliding systems",
  "wood-door": "wood doors · pivot & hinged",
  aluminium: "aluminium · windows & doors",
};

// Order intentionally puts the new core business (wood doors + aluminium)
// ahead of the legacy timber-clad sliding windows on the home page. The
// `/products` page mirrors the same order so the catalogue scroll flows
// the same way.
const FAMILY_ORDER: ProductFamily[] = [
  "wood-door",
  "aluminium",
  "timber-window",
];

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
                timber, wood doors
                <br />
                <span className="italic">&amp; aluminium.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
                three families, one atelier: slim sliding window systems clad
                in solid timber, monolithic wood entrance doors, and a matching
                thermally-broken aluminium suite for projects that prefer a
                metallic line.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {(() => {
            // Build a flat ordered render list so the system index reads
            // 01 → 08 in scroll order (regardless of the underlying data
            // array order).
            const nodes: React.ReactNode[] = [];
            let displayIndex = 0;
            FAMILY_ORDER.forEach((family, familyIndex) => {
              const items = products.filter((p) => p.family === family);
              if (items.length === 0) return;
              nodes.push(
                <FamilyDivider
                  key={`divider-${family}`}
                  label={FAMILY_LABELS[family]}
                  index={familyIndex}
                />
              );
              items.forEach((p) => {
                const idx = displayIndex;
                displayIndex += 1;
                nodes.push(
                  <ProductRow
                    key={p.slug}
                    product={p}
                    flipped={idx % 2 === 1}
                    index={idx}
                  />
                );
              });
            });
            return nodes;
          })()}
        </div>
      </div>
    </section>
  );
}

function FamilyDivider({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2 pt-4">
        <span className="font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-walnut">
          {String(index + 1).padStart(2, "0")} · {label}
        </span>
        <span className="hidden sm:block h-px flex-1 bg-line" />
        <span className="block sm:hidden h-px w-12 bg-line" />
      </div>
    </Reveal>
  );
}

function ProductRow({
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
        flipped && "lg:[&>*:first-child]:order-2"
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
          <dl className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            <div className="border-t border-line pt-3">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                vertical sightline
              </dt>
              <dd className="mt-1 display text-2xl text-ink">
                {product.sightline}
              </dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                max panel
              </dt>
              <dd className="mt-1 display text-2xl text-ink">
                {product.maxPanel}
              </dd>
            </div>
          </dl>
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
