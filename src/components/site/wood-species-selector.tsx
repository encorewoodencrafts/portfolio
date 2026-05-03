"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductWoodSpecies } from "@/data/products";
import { cn } from "@/lib/cn";

export function WoodSpeciesSelector({
  species,
}: {
  species: ProductWoodSpecies[];
}) {
  const [active, setActive] = React.useState(0);
  const current = species[active];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line"
            style={{ background: current.hue }}
          >
            <WoodGrainSwatch hue={current.hue} />
          </motion.div>
        </AnimatePresence>
        <div className="mt-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
          <span>specimen · {String(active + 1).padStart(2, "0")}</span>
          <span>{current.origin}</span>
        </div>
      </div>

      <div>
        <p className="eyebrow">specify your wood</p>
        <h3 className="mt-4 display text-3xl md:text-4xl font-light tracking-tight">
          five species,
          <br />
          <span className="italic">infinite character.</span>
        </h3>

        <ul className="mt-8 divide-y divide-line border-t border-b border-line">
          {species.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-4 text-left transition-colors",
                  active === i ? "text-ink" : "text-ink-2 hover:text-ink"
                )}
              >
                <span className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="inline-block h-3 w-3 rounded-full ring-1 ring-line"
                    style={{ background: s.hue }}
                  />
                  <span className="display text-lg md:text-xl">{s.name}</span>
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                  {s.latin}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-ink-2 text-sm leading-relaxed max-w-md">
          {current.description}
        </p>
      </div>
    </div>
  );
}

function WoodGrainSwatch({ hue }: { hue: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={`grain-${hue}`}
          x="0"
          y="0"
          width="400"
          height="300"
          patternUnits="userSpaceOnUse"
        >
          <rect width="400" height="300" fill={hue} />
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${i * 13 + Math.sin(i) * 4} Q 100 ${
                i * 13 + 6 + Math.cos(i) * 5
              }, 200 ${i * 13 + Math.sin(i * 2) * 3} T 400 ${i * 13 + 2}`}
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth={i % 4 === 0 ? 1.4 : 0.6}
              opacity={i % 3 === 0 ? 0.5 : 0.25}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={`k-${i}`}
              cx={50 + i * 47}
              cy={150 + (i % 2 === 0 ? -40 : 40)}
              rx="3"
              ry="6"
              fill="rgba(0,0,0,0.35)"
              opacity="0.5"
            />
          ))}
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#grain-${hue})`} />
      <rect
        width="400"
        height="300"
        fill="url(#highlight-overlay)"
        opacity="0.15"
      />
      <defs>
        <linearGradient
          id="highlight-overlay"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="black" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
