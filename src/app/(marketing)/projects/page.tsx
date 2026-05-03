import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "reference works",
  description:
    "selected projects featuring encore timber window systems — bespoke architecture from cabins to passivhaus chalets, photographed by leading architectural photographers.",
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
        eyebrow="projects gallery"
        title={
          <>
            reference
            <br />
            <span className="italic">works.</span>
          </>
        }
        description="six selected projects from the encore archive, photographed by the architects' chosen partners. each spans a single brief: where can timber take you?"
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <ul className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
            {projects.map((p, i) => (
              <li
                key={p.slug}
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
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70 opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-paper">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-paper/80">
                          {p.location} · {p.year}
                        </p>
                        <h3 className="mt-2 display text-2xl md:text-3xl font-light tracking-tight leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-paper/85">
                          {p.architect}
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

      <section className="border-t border-line py-20 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
                press &amp; architecture
                <br />
                <span className="italic">platforms.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
                press kits, hi-resolution photography and project credit
                listings are available to journalists and editors on request.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              press contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
