import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  products,
  customDesigns,
} from "@/data/products";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { Marquee } from "@/components/site/marquee";

export const metadata: Metadata = {
  title: "products",
  description:
    "wooden doors, aluminium-framed glass sliding doors and architectural railings — three product families and twenty-two customised reference designs from the encore atelier in hyderabad.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="no.01 · the encore catalogue"
        eyebrow="encore products"
        index="01"
        title={
          <>
            wooden doors, glass doors
            <br />
            <span className="italic">&amp; railings.</span>
          </>
        }
        description="three product families, one in-house atelier. wooden doors in five finish families, aluminium-framed sliding glass doors in five hardware variants, and architectural railings in wood, glass and metal — every product made-to-measure in our hyderabad workshop, with twenty-two customised reference designs to start from."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>product families</span>
              <span className="text-ink font-mono text-xs">
                {products.length}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>reference designs</span>
              <span className="text-ink font-mono text-xs">
                {customDesigns.length}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>sub-types</span>
              <span className="text-ink font-mono text-xs">
                {products.reduce((n, p) => n + p.subTypes.length, 0)}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>delivery</span>
              <span className="text-ink font-mono text-xs">all-india</span>
            </li>
          </ul>
        }
      />

      <Marquee
        phrases={[
          "wooden doors — five finishes",
          "glass doors — five sliding systems",
          "railings — wood, glass & metal",
          "22 customised reference designs",
          "made-to-measure",
          "installed across india",
        ]}
        size="md"
        tone="walnut"
      />

      <section
        id="families"
        className="py-12 md:py-16 border-t border-line scroll-mt-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-20 md:space-y-24">
          {products.map((p, i) => (
            <article
              key={p.slug}
              className="grid grid-cols-12 gap-6 lg:gap-12 items-start"
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
                    <span className="absolute top-5 left-5 md:top-6 md:left-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/85 mix-blend-difference">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(products.length).padStart(2, "0")}
                    </span>
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
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow">customised collection</p>
              <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
                twenty-two reference{" "}
                <span className="italic">designs.</span>
              </h2>
              <p className="mt-5 max-w-xl text-ink-2 leading-relaxed">
                browse the customised collection — every design in this gallery
                is a starting point. bring us your size, finish, hardware and
                project context, and we will quote a one-of-one piece.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {customDesigns.map((d, i) => (
              <li key={d.slug} id={`design-${d.slug}`} className="scroll-mt-32">
                <ClipReveal delay={(i % 8) * 0.04}>
                  <Link
                    href={`/products/${d.family}#design-${d.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                      <Image
                        src={d.image}
                        alt={`${d.code} — ${d.caption}`}
                        fill
                        sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-3">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-walnut">
                        {d.code}
                      </p>
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink-2">
                        {familyLabel(d.family)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-ink leading-snug">
                      {d.caption}
                    </p>
                  </Link>
                </ClipReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function familyLabel(family: (typeof customDesigns)[number]["family"]): string {
  switch (family) {
    case "wooden-doors":
      return "wooden door";
    case "glass-doors":
      return "glass slider";
    case "railings":
      return "railing";
  }
}
