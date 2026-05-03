import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "products",
  description:
    "five timber window systems engineered in-house at the encore atelier. solid wood, hybrid metal, ultra-minimal vacuum glass, passivhaus and structural-glass.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="encore window systems"
        title={
          <>
            five timber systems,
            <br />
            <span className="italic">one craft.</span>
          </>
        }
        description="every encore line shares the same machined-aluminium spine and solid-timber cladding. they differ only in how they read light: slim, structural, thermal, hybrid, ultra-minimal."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-20 md:space-y-24">
          {products.map((p, i) => (
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
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
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
          ))}
        </div>
      </section>
    </>
  );
}
