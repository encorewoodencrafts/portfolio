"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PartnerMap } from "@/components/site/partner-map";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/data/site";

export function PartnersTeaser() {
  return (
    <section className="border-t border-line bg-paper-2/40 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">meet our chain of partners</p>
            <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1]">
              across the world
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed">
                a network of partners <em>to bring you encore anywhere</em> you
                are in the globe — fully experienced technicians supporting
                glazing consulting, installation and long-term maintenance.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <PartnerMap />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-walnut">
              encore atelier · headquarters
            </p>
            <p className="mt-3 display text-2xl text-ink capitalize">
              {site.address.city}, {site.address.country}
            </p>
            <p className="mt-2 text-sm text-ink-2 leading-relaxed">
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-ink transition-colors"
              >
                {site.email}
              </a>
              <br />
              <span className="text-ink">{site.phone}</span>
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end items-end">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              the full partner network
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
