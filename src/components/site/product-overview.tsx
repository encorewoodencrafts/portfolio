import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Reveal } from "@/components/site/reveal";

// The products section shows the families for the selected range as a row of
// cards — image on top, then code, name, a short line and a "See …" link. On
// phones the cards stack one per row; from `sm` up they sit in the same row.
//
// Both ranges' grids are rendered and the global [data-brand] CSS reveals
// only the active one (railings appears under both). Rendering brand-stable
// markup — rather than branching on client state — keeps the server and
// client trees identical and avoids a hydration mismatch.
const FAMILIES_BY_BRAND: Record<"wood" | "aluminium", string[]> = {
  wood: ["wooden-doors", "railings"],
  aluminium: ["glass-doors", "aluminium-doors", "railings"],
};

export function ProductOverview() {
  return (
    <section id="products" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
        <header className="mb-8 md:mb-16">
          <p className="eyebrow">Our products</p>
          <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1]">
            Products
          </h2>
        </header>

        {(["wood", "aluminium"] as const).map((brand) => (
          <div
            key={brand}
            data-brand-tag={brand}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {FAMILIES_BY_BRAND[brand].map((slug, i) => {
              const product = products.find((p) => p.slug === slug);
              if (!product) return null;
              return <FamilyCard key={slug} product={product} index={i} />;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function FamilyCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group flex h-full flex-col">
        <Link
          href={`/products/${product.slug}`}
          className="block relative aspect-[4/3] overflow-hidden bg-stone"
        >
          <Image
            src={product.hero}
            alt={product.name}
            fill
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            quality={75}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          />
        </Link>
        <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-brand-accent">
          {String(index + 1).padStart(2, "0")} · {product.code}
        </p>
        <h3 className="mt-1.5 display text-2xl sm:text-3xl font-light tracking-tight text-ink leading-[1.05] capitalize">
          {product.name}
        </h3>
        <p className="mt-2 text-ink-2 leading-relaxed text-sm">
          {product.excerpt}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center self-start font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
        >
          See {product.name}
        </Link>
      </article>
    </Reveal>
  );
}
