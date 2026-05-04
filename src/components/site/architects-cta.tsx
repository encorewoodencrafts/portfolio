"use client";

import Link from "next/link";
import { ArrowUpRight, FileDown, Library } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export function ArchitectsCTA() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="mb-14">
          <p className="eyebrow">all the encore goodies</p>
          <h2 className="mt-3 display text-4xl md:text-6xl font-light tracking-tight">
            architects info
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
          <Reveal>
            <Link
              href="/architects#catalogues"
              className="group flex h-full flex-col justify-between gap-12 bg-paper p-10 md:p-14 hover:bg-paper-2 transition-colors"
            >
              <FileDown
                className="h-8 w-8 text-walnut"
                strokeWidth={1.2}
              />
              <div>
                <h3 className="display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
                  catalogues &<br />
                  product overviews
                </h3>
                <p className="mt-6 text-ink-2 text-sm max-w-md leading-relaxed">
                  download printable monographs and per-system technical
                  overviews — pdf, 12 mb each.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink group-hover:text-walnut transition-colors">
                  view documents
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <Link
              href="/architects#cad-library"
              className="group flex h-full flex-col justify-between gap-12 bg-paper p-10 md:p-14 hover:bg-paper-2 transition-colors"
            >
              <Library
                className="h-8 w-8 text-walnut"
                strokeWidth={1.2}
              />
              <div>
                <h3 className="display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
                  encore CAD<br />library
                </h3>
                <p className="mt-6 text-ink-2 text-sm max-w-md leading-relaxed">
                  registration is required to access our extensive library of
                  CAD details — sections, plans, isometric assemblies for every
                  system in the encore catalogue.
                </p>
                <span className="mt-8 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink">
                  <span className="border-b border-ink pb-1 group-hover:text-walnut group-hover:border-walnut transition-colors">
                    registration
                  </span>
                  <span className="text-ink-2">·</span>
                  <span className="border-b border-ink pb-1 group-hover:text-walnut group-hover:border-walnut transition-colors">
                    view library
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
