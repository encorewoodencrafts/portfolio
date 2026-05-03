"use client";

import { Reveal } from "@/components/site/reveal";

const steps = [
  {
    n: "01",
    title: "first conversation",
    duration: "week 0",
    body: "site brief by call or whatsapp. we share an initial system match and a fee envelope before any drawings change hands.",
  },
  {
    n: "02",
    title: "site survey",
    duration: "week 1–2",
    body: "our india lead visits the site (we cover all flights). reveal sizes are laser-measured and orientations recorded.",
  },
  {
    n: "03",
    title: "design & specification",
    duration: "week 2–4",
    body: "shop drawings, sightline diagrams, glass spec, hardware schedule. each iteration is signed off by the architect.",
  },
  {
    n: "04",
    title: "atelier production",
    duration: "week 5–14",
    body: "machined timber, laminated glass, finished metal — all in our hyderabad atelier. weekly photo updates by whatsapp.",
  },
  {
    n: "05",
    title: "site installation",
    duration: "week 15–17",
    body: "our travelling install crew (4–6 people) arrives with the panels. typical install is 4 days for a full villa.",
  },
  {
    n: "06",
    title: "service & care",
    duration: "year 1+",
    body: "complimentary service visits at six months, two years and ten years to inspect, re-oil and re-tune. lifetime structural warranty.",
  },
];

export function Process() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="mb-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">how we work</p>
            <h2 className="mt-3 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
              site to
              <br />
              <span className="italic">façade.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed">
                a typical encore commission runs sixteen to eighteen weeks from
                first call to handover. every step is documented; every panel
                is followed up at six-month, two-year and ten-year intervals.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {steps.map((step, i) => (
            <li key={step.n} className="bg-paper">
              <Reveal delay={(i % 3) * 0.05}>
                <article className="p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display text-5xl font-light text-walnut leading-none">
                      {step.n}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-8 display text-2xl text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm text-ink-2 leading-relaxed flex-1">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
