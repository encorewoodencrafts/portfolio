import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/marquee-stat";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "about us",
  description:
    "Encore is an Indian atelier founded in 2014, making wooden doors, glass doors, aluminium doors and railings under one roof.",
};

const stages = [
  {
    n: "01",
    title: "the forest",
    body: "Every plank is traceable to a single forest, from FSC-certified mills. All teak is plantation-grown.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "02",
    title: "the kiln",
    body: "Boards are kiln-dried over twelve weeks and moisture-checked — vital for India's humidity swings.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "03",
    title: "the bench",
    body: "Timber leaves and aluminium frames are joined, finished and checked on adjacent benches before they ship.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "04",
    title: "the install",
    body: "Our crew installs across India and follows up at six months, two years and ten years.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="no.06 · the studio"
        eyebrow="why we build encore"
        index="06"
        title={
          <>
            an indian door & railings atelier,
            <br />
            <span className="italic">verticalised since 2014.</span>
          </>
        }
        description="An Indian atelier since 2014. We make wooden doors, glass doors, aluminium doors and railings under one roof — sourced, machined and finished in-house."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>founded</span>
              <span className="text-ink font-mono text-xs">2014</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>atelier floor</span>
              <span className="text-ink font-mono text-xs">9,400 m²</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>headcount</span>
              <span className="text-ink font-mono text-xs">110+</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>fsc-certified</span>
              <span className="text-ink font-mono text-xs">98%</span>
            </li>
          </ul>
        }
      />

      <section className="border-t border-line py-12 sm:py-16 md:py-24 bg-paper-2/40">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {site.stats.map((s) => (
              <Reveal key={s.label}>
                <div>
                  <div className="display-tight text-5xl md:text-7xl font-light text-ink leading-none">
                    <StatCounter value={s.value} />
                  </div>
                  <div className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">the atelier</p>
            <h2 className="mt-3 display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1]">
              all that<br />
              <span className="italic">wood.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-12 max-w-3xl">
            <Reveal>
              <p className="text-ink text-base md:text-lg leading-[1.8]">
                When we started in 2014, a door, a glass slider and a railing
                came from three different suppliers. We brought every step into
                one Hyderabad workshop — so the same team makes, finishes and
                supports everything we ship.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-8 md:mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">sustainability</p>
              <h2 className="mt-3 display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1]">
                from forest
                <br />
                <span className="italic">to facade.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="text-ink-2 text-base md:text-lg leading-relaxed">
                  Every plank is traceable and FSC/PEFC certified, and we plant
                  a tree for every door we make.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="space-y-12 md:space-y-20">
            {stages.map((s, i) => (
              <li
                key={s.n}
                className={`grid grid-cols-12 gap-6 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="col-span-12 lg:col-span-7">
                  <ClipReveal>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(min-width:1024px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </ClipReveal>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <Reveal>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-walnut">
                      stage {s.n}
                    </p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h3 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
                      {s.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="mt-5 text-ink-2 leading-relaxed max-w-md">
                      {s.body}
                    </p>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="careers"
        className="border-t border-line py-12 sm:py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow">careers</p>
            <h2 className="mt-3 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1]">
              join the atelier.
            </h2>
            <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
              We hire makers, glaziers, engineers and operations leaders. Every
              role starts with three days at the bench.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              open positions
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
