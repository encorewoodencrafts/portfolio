"use client";

import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { Reveal } from "@/components/site/reveal";
import { useBrand } from "@/components/site/brand-provider";

export function NewsRail() {
  const { brand } = useBrand();
  // Only show news for the selected range; "both" items always appear.
  const items = news
    .filter((n) => n.brand === brand || n.brand === "both")
    .slice(0, 4);

  return (
    <section className="border-t border-line py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="eyebrow">What&rsquo;s new at encore</p>
            <h2 className="mt-2 display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1]">
              News
            </h2>
          </div>
          <Link
            href="/news"
            className="font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-ink hover:text-brand-accent transition-colors flex-none"
          >
            See more →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.06}>
              <Link href={`/news/${n.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 space-y-1.5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                    {n.kicker}
                  </p>
                  <h3 className="display text-xl md:text-2xl font-light tracking-tight text-ink leading-snug">
                    {n.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed line-clamp-2">
                    {n.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
