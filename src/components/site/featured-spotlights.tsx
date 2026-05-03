"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export function FeaturedSpotlights() {
  const spotlights = products.slice(1);
  return (
    <section className="border-t border-line">
      {spotlights.map((p) => (
        <article
          key={p.slug}
          className="relative h-[80svh] md:h-[88svh] overflow-hidden bg-ink text-paper"
        >
          <ClipReveal className="absolute inset-0">
            <Image
              src={p.detailHero}
              alt={p.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </ClipReveal>
          <div className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24">
            <Reveal>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-paper/80">
                {p.code} series
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-4 display-tight text-[clamp(2.6rem,7vw,7.2rem)] font-light text-paper leading-none">
                {p.name}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-paper/85 leading-relaxed">
                {p.excerpt}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href={`/products/${p.slug}`}
                className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper border-b border-paper/60 pb-1 hover:text-walnut hover:border-walnut transition-colors w-fit"
              >
                discover more
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
