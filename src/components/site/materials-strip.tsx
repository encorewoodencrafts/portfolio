"use client";

import * as React from "react";
import { Reveal } from "@/components/site/reveal";
import { type BrandName } from "@/components/site/brand-provider";
import { productBySlug } from "@/data/products";
import { cn } from "@/lib/cn";

// A single tactile swatch in the strip.
interface Material {
  name: string;
  meta: string;
  note: string;
  hue: string;
  // "wood" draws a faint grain; "metal" draws a brushed sheen.
  surface: "wood" | "metal";
}

// Wood materials are pulled from the real wooden-doors species palette so the
// home page and the product detail stay in sync. Aluminium has no species
// list in the data, so we present its signature anodised / coated finishes.
function materialsFor(brand: BrandName): Material[] {
  if (brand === "wood") {
    const species = productBySlug("wooden-doors")?.species ?? [];
    return species.map((s) => ({
      name: s.name,
      meta: s.origin,
      note: s.description,
      hue: s.hue,
      surface: "wood",
    }));
  }
  return ALUMINIUM_FINISHES;
}

const ALUMINIUM_FINISHES: Material[] = [
  {
    name: "natural anodised",
    meta: "matte silver",
    note: "the architectural default — a fine satin grey that disappears into glass and resists coastal corrosion.",
    hue: "#b8c2c8",
    surface: "metal",
  },
  {
    name: "champagne",
    meta: "warm metallic",
    note: "a soft golden-grey anodise that warms a façade without the weight of bronze — favoured for residential entrances.",
    hue: "#c9bfa6",
    surface: "metal",
  },
  {
    name: "bronze anodised",
    meta: "deep amber",
    note: "rich, low-sheen amber-brown — ages gracefully and pairs with warm stone and timber interiors.",
    hue: "#6e5538",
    surface: "metal",
  },
  {
    name: "matte black",
    meta: "fine-texture powder",
    note: "a dead-flat powder coat with a faint tooth — the sharpest sightline for minimal, gallery-grade openings.",
    hue: "#24272a",
    surface: "metal",
  },
  {
    name: "graphite",
    meta: "metallic charcoal",
    note: "a cool gunmetal with a subtle sparkle — reads almost black indoors, silver-grey in direct sun.",
    hue: "#43484d",
    surface: "metal",
  },
];

const COPY: Record<BrandName, { eyebrow: string; line: string; sub: string }> = {
  wood: {
    eyebrow: "The material",
    line: "Choose your wood.",
    sub: "Every door is built in the species you specify. Hover to feel the grain and read where each one comes from.",
  },
  aluminium: {
    eyebrow: "The finish",
    line: "Choose your finish.",
    sub: "Each frame is anodised or powder-coated to order. Hover to see how each finish reads in light.",
  },
};

// Both ranges' strips are rendered and the global [data-brand] CSS reveals
// only the active one. Each strip owns its own open-panel state. Rendering
// brand-stable markup — rather than branching on client state — keeps the
// server and client trees identical and avoids a hydration mismatch.
export function MaterialsStrip() {
  return (
    <>
      <MaterialsSection brand="wood" />
      <MaterialsSection brand="aluminium" />
    </>
  );
}

function MaterialsSection({ brand }: { brand: BrandName }) {
  const materials = materialsFor(brand);
  const copy = COPY[brand];
  const [active, setActive] = React.useState(0);

  if (materials.length === 0) return null;

  return (
    <section
      data-brand-tag={brand}
      className="relative overflow-hidden border-t border-line"
      style={{ background: "var(--brand-surface)" }}
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
        <header className="mb-8 md:mb-12 max-w-2xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="mt-2 display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-ink leading-[1.02]">
            {copy.line}
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-2 leading-relaxed">
            {copy.sub}
          </p>
        </header>

        <Reveal>
          {/* Expanding panels: each blade flex-grows when hovered/focused,
              squeezing its neighbours and revealing the longer note. The
              active index is also driven by hover/focus so keyboard and
              touch users get the same reveal on focus/tap. */}
          <div className="flex h-[300px] sm:h-[360px] md:h-[420px] gap-1.5 sm:gap-2">
            {materials.map((m, i) => (
              <MaterialPanel
                key={m.name}
                material={m}
                index={i}
                active={active === i}
                onActivate={() => setActive(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MaterialPanel({
  material,
  index,
  active,
  onActivate,
}: {
  material: Material;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-expanded={active}
      className={cn(
        "group relative h-full min-w-0 overflow-hidden rounded-sm text-left",
        "transition-[flex-grow] duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2",
        active ? "grow-[3.2]" : "grow"
      )}
      style={{ flexBasis: 0, background: material.hue }}
    >
      <Surface surface={material.surface} active={active} />

      {/* readability scrim anchored to the bottom where the label sits */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
      />

      {/* index numeral, always visible top-left */}
      <span className="absolute left-3 top-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
        <p
          className={cn(
            "font-mono text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.2em] text-white/70",
            "transition-opacity duration-500",
            active ? "opacity-100" : "opacity-0"
          )}
        >
          {material.meta}
        </p>
        <h3
          className={cn(
            "display font-light tracking-tight text-white leading-tight capitalize",
            // collapsed panels keep the name vertical-ish & small; the active
            // panel scales it up to a confident heading.
            active
              ? "mt-1 text-xl sm:text-2xl md:text-3xl"
              : "text-xs sm:text-sm whitespace-nowrap [writing-mode:vertical-rl] absolute bottom-4 left-1/2 -translate-x-1/2 rotate-180 sm:[writing-mode:horizontal-tb] sm:static sm:bottom-auto sm:left-auto sm:translate-x-0 sm:rotate-0"
          )}
        >
          {material.name}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-white/85",
            "transition-all duration-500",
            active
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-2"
          )}
        >
          {material.note}
        </p>
      </div>
    </button>
  );
}

// Texture overlays: wood gets soft horizontal grain lines + a top sheen;
// metal gets a diagonal brushed highlight band that drifts on hover.
function Surface({
  surface,
  active,
}: {
  surface: Material["surface"];
  active: boolean;
}) {
  if (surface === "wood") {
    return (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(95deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0) 3px, rgba(255,255,255,0.12) 6px, rgba(0,0,0,0) 9px)",
        }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]",
        active ? "translate-x-[12%]" : "translate-x-0"
      )}
      style={{
        backgroundImage:
          "linear-gradient(105deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0) 62%), repeating-linear-gradient(100deg, rgba(255,255,255,0.05) 0px, rgba(0,0,0,0.05) 2px)",
      }}
    />
  );
}
