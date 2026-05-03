"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/marquee-stat";
import { site } from "@/data/site";

export function AboutTeaser() {
  return (
    <section className="border-t border-line py-20 md:py-32">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">why we build encore</p>
            <h2 className="mt-3 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
              all that<br />
              <span className="italic">wood.</span>
            </h2>
            <Reveal delay={0.1}>
              <div className="mt-12 relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
                  alt="master carpenter at the encore atelier workbench"
                  fill
                  sizes="(min-width:1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:pl-12">
            <div className="space-y-10 max-w-2xl">
              <Reveal>
                <div>
                  <h3 className="display text-2xl text-ink leading-snug">
                    the importance of timber in minimalist windows
                  </h3>
                  <p className="mt-4 text-ink-2 leading-[1.75] text-base">
                    when you commit a façade to glass, the frame becomes the
                    architecture. encore frames are timber: a living material
                    that records its origin in every grain, its drying in every
                    silvering, its century in every patina. minimalism in our
                    hands is not the absence of material — it is its discipline.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div>
                  <h3 className="display text-2xl text-ink leading-snug">
                    enhancing transformation capacity
                  </h3>
                  <p className="mt-4 text-ink-2 leading-[1.75] text-base">
                    to keep up with new challenges, encore verticalised its
                    industrial activity in 2014. by continuously investing in
                    cnc joinery, glass lamination and metal finishing in our
                    hyderabad atelier, we became one of india&rsquo;s most
                    integrated bespoke timber-window manufacturers — capable
                    of double and triple glazed units up to 29 m² in a single
                    panel.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h3 className="display text-2xl text-ink leading-snug">
                    control over the manufacturing process
                  </h3>
                  <p className="mt-4 text-ink-2 leading-[1.75] text-base">
                    encore is the only manufacturer of minimalist timber windows
                    that processes and manufactures the main components of its
                    systems — wood, aluminium spine, glass, hardware. having
                    full accountability over the entire process turns a
                    once-risky, complex craft into a routine task.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <h3 className="display text-2xl text-ink leading-snug">
                    pan-india &amp; international support
                  </h3>
                  <p className="mt-4 text-ink-2 leading-[1.75] text-base">
                    encore now serves over twelve indian cities and exports to
                    the gulf, southeast asia and beyond — every project
                    delivered by certified partners and our travelling
                    install crew. we follow up at six months, two years and
                    ten years to inspect and re-oil.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-line">
                  {site.stats.map((s) => (
                    <div key={s.label}>
                      <div className="display text-3xl md:text-4xl font-light tracking-tight text-ink">
                        <StatCounter value={s.value} />
                      </div>
                      <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
                >
                  about the atelier
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
