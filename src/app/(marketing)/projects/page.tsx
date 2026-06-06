import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "reference works",
  description:
    "Selected projects featuring our wooden doors, glass doors, aluminium doors and railings.",
};

const layouts = [
  "lg:col-span-7 lg:row-span-2 aspect-[4/5]",
  "lg:col-span-5 aspect-[4/3]",
  "lg:col-span-5 aspect-[1/1]",
  "lg:col-span-12 aspect-[16/9]",
  "lg:col-span-7 aspect-[4/3]",
  "lg:col-span-5 lg:row-span-2 aspect-[3/5]",
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="no.03 · selected works"
        eyebrow="projects gallery"
        index="03"
        title={
          <>
            reference
            <br />
            <span className="italic">works.</span>
          </>
        }
        description="Selected projects featuring our doors, sliders and railings."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>projects shown</span>
              <span className="text-ink font-mono text-xs">{projects.length}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>photographed by</span>
              <span className="text-ink font-mono text-xs">studio teams</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>archive total</span>
              <span className="text-ink font-mono text-xs">240+</span>
            </li>
          </ul>
        }
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <ul className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
            {projects.map((p, i) => (
              <li
                key={p.slug}
                data-brand-tag={p.brand}
                className={`${layouts[i % layouts.length]} relative`}
              >
                <ClipReveal className="h-full">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full overflow-hidden bg-stone">
                      <Image
                        src={p.hero}
                        alt={p.title}
                        fill
                        sizes="(min-width:1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/0 via-charcoal/0 to-charcoal/75 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                      {/* corner index numeral */}
                      <span className="absolute top-5 left-5 md:top-6 md:left-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/70">
                        no.{(i + 1).toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
                      </span>
                      {/* hover-only "view project" pill */}
                      <span className="absolute top-5 right-5 md:top-6 md:right-6 inline-flex items-center gap-1 rounded-full bg-cream/15 backdrop-blur-md px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        view →
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream transition-transform duration-500 group-hover:-translate-y-1">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/80">
                          {p.location} · {p.year}
                        </p>
                        <h3 className="mt-2 display text-2xl md:text-3xl font-light tracking-tight leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-cream/85">
                          {p.architect}
                        </p>
                        {/* slide-up reveal */}
                        <p className="mt-3 text-xs text-cream/0 max-h-0 overflow-hidden transition-all duration-500 group-hover:text-cream/80 group-hover:max-h-12">
                          read the case study →
                        </p>
                      </div>
                    </div>
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
