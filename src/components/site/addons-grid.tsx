"use client";

import Link from "next/link";
import { addOns } from "@/data/addons";
import { AddOnIcon } from "@/components/site/addon-icons";
import { Reveal } from "@/components/site/reveal";

export function AddOnsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section
      id="add-ons"
      className="border-t border-line bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        {heading && (
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">expanding the system</p>
              <h2 className="mt-3 display text-4xl md:text-6xl font-light tracking-tight text-ink leading-[0.95]">
                add-ons
              </h2>
            </div>
            <p className="hidden md:block max-w-md text-ink-2 text-sm leading-relaxed">
              nine accessories engineered to integrate invisibly with the
              encore family — none alter the sightlines.
            </p>
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {addOns.map((a, i) => (
            <li
              key={a.slug}
              id={a.slug}
              className="bg-paper hover:bg-paper-2 transition-colors"
            >
              <Reveal delay={(i % 3) * 0.04}>
                <Link
                  href={`/add-ons#${a.slug}`}
                  className="group block p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-walnut">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <AddOnIcon
                      type={a.icon}
                      className="h-16 w-16 text-ink/70 transition-transform duration-700 group-hover:scale-110 group-hover:text-walnut"
                    />
                  </div>
                  <h3 className="mt-12 display text-2xl md:text-3xl font-light tracking-tight text-ink leading-tight">
                    {a.name}
                  </h3>
                  <p className="mt-2 italic text-ink-2 text-sm">
                    {a.subtitle}
                  </p>
                  <p className="mt-5 text-sm text-ink-2 leading-relaxed">
                    {a.description}
                  </p>
                  <span className="mt-8 inline-block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink group-hover:text-walnut transition-colors">
                    see {a.name} →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
