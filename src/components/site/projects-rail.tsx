"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/site/reveal";

export function ProjectsRail() {
  return (
    <section className="border-t border-line py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="eyebrow">projects gallery</p>
            <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1]">
              reference works
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-ink hover:text-walnut transition-colors flex-none"
          >
            see more →
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto scroll-smooth">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="flex gap-6 snap-x snap-mandatory pb-2">
            {projects.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 0.05}
                className="flex-none w-[78%] sm:w-[58%] md:w-[44%] lg:w-[32%] snap-start"
              >
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                    <Image
                      src={p.hero}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 32vw, (min-width:640px) 58vw, 78vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="display text-xl md:text-2xl font-light tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-2">
                      {p.architect} · {p.location}
                    </p>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                      {p.photographer}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
