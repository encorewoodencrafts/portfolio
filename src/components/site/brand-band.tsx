"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useBrand, type BrandName } from "@/components/site/brand-provider";

// A full-width statement band that paints the brand's signature gradient
// (the warm wood / cool aluminium backgrounds from the brand palette). It
// switches with the toggle, so the chosen range's colour is unmistakable.
const BAND: Record<
  BrandName,
  { line: string; sub: string; href: string; cta: string }
> = {
  wood: {
    line: "Warm, solid, made to last.",
    sub: "Custom wooden doors and railings, made and fitted by our own team in Hyderabad.",
    href: "/products/wooden-doors",
    cta: "See wooden doors",
  },
  aluminium: {
    line: "Slim, precise, built to fit.",
    sub: "Aluminium and glass doors, engineered and installed by our own team in Hyderabad.",
    href: "/products/aluminium-doors",
    cta: "See aluminium doors",
  },
};

export function BrandBand() {
  const { brand } = useBrand();
  const b = BAND[brand];

  return (
    <section
      className="relative overflow-hidden text-cream transition-[background] duration-700"
      style={{ background: "var(--brand-hero)" }}
    >
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-[50%]"
        style={{
          background:
            "radial-gradient(45% 50% at 10% 30%, var(--brand-glow), transparent 70%)",
        }}
      />
      {/* ghosted brand initial */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-2 select-none font-light italic leading-none text-cream/[0.06]"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(12rem,26vw,26rem)" }}
      >
        {brand === "wood" ? "W" : "A"}
      </span>
      <div className="relative z-10 mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 py-16 sm:py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              className="font-mono text-[0.65rem] uppercase tracking-[0.28em]"
              style={{ color: "var(--brand-accent-light)" }}
            >
              Encore {brand}
            </p>
            <h2 className="mt-4 display text-3xl sm:text-4xl md:text-5xl font-light leading-[1.05]">
              {b.line}
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-cream/80">
              {b.sub}
            </p>
          </div>
          <Link
            href={b.href}
            className="group inline-flex flex-none items-center gap-3 border border-cream/40 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-charcoal"
          >
            {b.cta}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
