import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/marquee-stat";
import { Testimonials } from "@/components/site/testimonials";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "about us",
  description:
    "encore is a bespoke timber atelier founded in 2014. we machine, join, glaze and finish every component of our windows in-house.",
};

const carpenters = [
  {
    name: "ananya iyer",
    role: "managing partner",
    bio: "third-generation cabinet-maker. trained at the rhode island school of design before returning to lead encore woodcrafts from hyderabad in 2014.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "vikram reddy",
    role: "head of joinery",
    bio: "twenty years at the indian plywood industries research institute. specialist in tropical-climate timber lamination and dimensional stability.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "fatima sheikh",
    role: "glass & glazing programme",
    bio: "led structural glazing at saint-gobain india for over a decade. now leads encore UM and large-format laminated glass at the atelier.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
  },
];

const stages = [
  {
    n: "01",
    title: "the forest",
    body: "every plank we receive can be traced to a single forest. we partner with fsc-certified mills across the western ghats, north-eastern india, and accoya from new zealand. all teak is plantation-grown.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "02",
    title: "the kiln",
    body: "boards are kiln-dried in three controlled stages over twelve weeks. moisture content is monitored to ±0.5% and recorded in our atelier log alongside the species' provenance — critical for india's monsoon-to-summer humidity swings.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "03",
    title: "the bench",
    body: "machined timber profiles are bonded to the aluminium spine on a vacuum bench. each glue line is x-rayed before the section leaves the joinery hall in our hyderabad atelier.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1800&q=80",
  },
  {
    n: "04",
    title: "the facade",
    body: "finished panels are delivered across india by our travelling install crew and overseen by a certified site lead. we follow up at six months, two years and ten years to inspect, re-oil and re-tune.",
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
            an indian timber atelier,
            <br />
            <span className="italic">verticalised since 2014.</span>
          </>
        }
        description="encore wood crafts llp is the only manufacturer of minimalist timber windows in india that processes and manufactures the main components of its systems in-house — wood, aluminium spine, glass and hardware. having full accountability turns a once-risky craft into a routine task."
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

      <section className="border-t border-line py-20 md:py-28 bg-paper-2/40">
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

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">the atelier</p>
            <h2 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight leading-[0.95]">
              all that<br />
              <span className="italic">wood.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-12 space-y-8 max-w-3xl">
            <Reveal>
              <p className="text-ink text-base md:text-lg leading-[1.8]">
                when we founded encore in 2014, every component of a minimalist
                window — the timber profile, the aluminium spine, the laminated
                glass, the multipoint locking — came from a different supplier
                in a different country. we spent the first three years
                bringing every step of that supply chain in-house.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-ink-2 text-base md:text-lg leading-[1.8]">
                today our 9,400 m² atelier on the outskirts of hyderabad houses
                an in-line cnc joinery hall, a glass lamination line, a metal
                finishing studio, and a hardware shop — supported by a
                materials laboratory and a moisture-controlled drying yard.
                everything we ship has been touched by our team.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink-2 text-base md:text-lg leading-[1.8]">
                this matters because windows live for a century. the certainty
                that the timber, glue, gasket and lock all came from the same
                hand — and will be supported by the same hand for fifty years —
                is what allows our clients to commit a façade to wood.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">sustainability</p>
              <h2 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight leading-[0.95]">
                from forest
                <br />
                <span className="italic">to facade.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="text-ink-2 text-base md:text-lg leading-relaxed">
                  every plank that enters our atelier is traceable to a single
                  hillside, certified by FSC, PEFC or equivalent. we plant one
                  tree for every panel we manufacture, in partnership with the
                  european reforestation initiative.
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

      <section className="border-t border-line py-20 md:py-28 bg-paper-2/40">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <p className="eyebrow">the people</p>
              <h2 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight leading-[0.95]">
                master carpenters
                <br />
                <span className="italic">& glaziers.</span>
              </h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carpenters.map((c, i) => (
              <li key={c.name}>
                <Reveal delay={i * 0.05}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone grayscale">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-walnut">
                      {c.role}
                    </p>
                    <h3 className="mt-2 display text-2xl font-light tracking-tight">
                      {c.name}
                    </h3>
                    <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                      {c.bio}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section
        id="careers"
        className="border-t border-line py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow">careers</p>
            <h2 className="mt-3 display text-4xl md:text-6xl font-light tracking-tight leading-[0.95]">
              join the atelier.
            </h2>
            <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
              we hire cabinet-makers, glaziers, metalworkers, engineers,
              architects and operations leaders. we do not hire by cv alone —
              every position begins with three days at the bench.
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
