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
          className="relative h-[60svh] md:h-[72svh] overflow-hidden bg-charcoal text-cream"
        >
          <ClipReveal className="absolute inset-0">
            <Image
              src={p.detailHero}
              alt={p.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
          </ClipReveal>
          <div className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-center px-5 md:px-8 lg:px-12 py-12 md:py-16">
            <Reveal>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-cream/80">
                {p.code} series
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-4 display-tight text-[clamp(2.4rem,5.5vw,5.5rem)] font-light text-cream leading-[0.95]">
                {p.name}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-cream/85 leading-relaxed">
                {p.excerpt}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/60">
                    vertical sightline
                  </dt>
                  <dd className="mt-1 display text-xl text-cream">
                    {p.sightline}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cream/60">
                    max panel
                  </dt>
                  <dd className="mt-1 display text-xl text-cream">
                    {p.maxPanel}
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href={`/products/${p.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors w-fit"
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
