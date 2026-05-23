"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Reveal } from "@/components/site/reveal";

// Mirrors panoramah's "products" section: an eyebrow + big serif heading at
// the top, then one stacked block per family — image, code, name, short
// paragraph, and a single "See …" link. No sub-type tables, no decorative
// cards. On mobile every block becomes a single column and reads
// top-to-bottom; on desktop the rows alternate image-left / image-right.
//
// We deliberately do NOT wrap the image in a clip-reveal: clipPath on the
// parent prevented the lazy-loaded next/image from triggering its
// IntersectionObserver on some mobile browsers (the wrapper measured as
// 0-height while clipped), so the figure stayed empty. A plain Reveal +
// stable aspect box keeps the image rendered immediately.
const FAMILY_ORDER = [
  "wooden-doors",
  "glass-doors",
  "aluminium-doors",
  "railings",
] as const;

export function ProductOverview() {
  return (
    <section
      id="products"
      className="border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
        <header className="mb-8 md:mb-16">
          <p className="eyebrow">encore products</p>
          <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1]">
            products
          </h2>
        </header>

        <div className="space-y-10 sm:space-y-14 md:space-y-24">
          {FAMILY_ORDER.map((slug, i) => {
            const product = products.find((p) => p.slug === slug);
            if (!product) return null;
            return (
              <FamilyBlock
                key={slug}
                product={product}
                index={i}
                flipped={i % 2 === 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FamilyBlock({
  product,
  index,
  flipped,
}: {
  product: (typeof products)[number];
  index: number;
  flipped: boolean;
}) {
  return (
    <article
      className={`grid grid-cols-12 gap-5 md:gap-10 lg:gap-14 items-center ${
        flipped ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="col-span-12 lg:col-span-7">
        <Link
          href={`/products/${product.slug}`}
          // 3:2 on phones (≈ 260px tall on a 390-wide viewport — short
          // enough that the title and copy stay above the next fold).
          className="group block relative aspect-[3/2] md:aspect-[16/10] overflow-hidden bg-stone"
        >
          <Image
            src={product.hero}
            alt={product.name}
            fill
            // First family is the closest-to-fold image; load it eagerly so
            // mobile users never see the bg-stone placeholder. The other
            // two stay lazy.
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            sizes="(min-width:1024px) 60vw, 100vw"
            quality={75}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          />
        </Link>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Reveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-walnut">
            {String(index + 1).padStart(2, "0")} · {product.code}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-2 display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-ink leading-[1.05]">
            {product.name}
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 sm:mt-4 text-ink-2 leading-relaxed text-sm sm:text-base max-w-md">
            {product.excerpt}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Link
            href={`/products/${product.slug}`}
            className="mt-5 sm:mt-6 inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            see {product.name}
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
