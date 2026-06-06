"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useBrand, type BrandName } from "@/components/site/brand-provider";
import { cn } from "@/lib/cn";

// A segmented "material switch": one spring-driven thumb slides between the
// two ranges, and the thumb itself is finished in the active material — warm
// wood grain for Wood, brushed metal for Aluminium — with a light sweep that
// rakes across on every switch. Inactive labels keep their brand colour so
// both ranges read as two distinct tones at all times.
const OPTIONS: {
  id: BrandName;
  label: string;
  color: string;
  colorLight: string;
  thumb: string;
}[] = [
  {
    id: "wood",
    label: "Wood",
    color: "#9c845a",
    colorLight: "#d8c3a0",
    thumb: "linear-gradient(135deg, #b08d57 0%, #8a6a3f 52%, #6b4423 100%)",
  },
  {
    id: "aluminium",
    label: "Aluminium",
    color: "#8b9ea8",
    colorLight: "#c2d4dc",
    thumb: "linear-gradient(135deg, #8c9aa3 0%, #647079 52%, #424d55 100%)",
  },
];

const SPRING = { type: "spring", stiffness: 360, damping: 30, mass: 0.8 } as const;

export function BrandToggle({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { brand, setBrand } = useBrand();
  const reduced = useReducedMotion();

  return (
    <div
      role="group"
      aria-label="choose product range"
      className={cn(
        "relative inline-flex shrink-0 items-center rounded-full p-0.5 backdrop-blur-md",
        tone === "light"
          ? "border border-cream/25 bg-cream/10"
          : "border border-line bg-paper-2/70",
        className,
      )}
    >
      {OPTIONS.map((opt) => {
        const active = brand === opt.id;
        return (
          <motion.button
            key={opt.id}
            type="button"
            onClick={() => setBrand(opt.id)}
            aria-pressed={active}
            whileTap={reduced ? undefined : { scale: 0.95 }}
            className={cn(
              "relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:px-3.5",
              "outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-1",
              tone === "light"
                ? "focus-visible:ring-offset-transparent"
                : "focus-visible:ring-offset-paper",
            )}
          >
            {active && (
              <motion.span
                layoutId="brand-thumb"
                aria-hidden
                transition={reduced ? { duration: 0 } : SPRING}
                className="absolute inset-0 overflow-hidden rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.25)]"
                style={{ background: opt.thumb }}
              >
                <ThumbTexture brand={opt.id} />
                {!reduced && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 w-1/2"
                    initial={{ x: "-160%", opacity: 0 }}
                    animate={{ x: "260%", opacity: [0, 0.7, 0] }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                    }}
                  />
                )}
              </motion.span>
            )}

            <MaterialIcon
              brand={opt.id}
              className={cn(
                "relative z-10 hidden h-3.5 w-3.5 sm:block transition-colors",
              )}
              style={{
                color: active
                  ? "#faf7f2"
                  : tone === "light"
                    ? opt.colorLight
                    : opt.color,
              }}
            />

            <span
              className={cn(
                "relative z-10 font-mono text-[0.58rem] uppercase tracking-[0.16em] transition-colors sm:text-[0.62rem] sm:tracking-[0.2em]",
                active && "text-cream",
              )}
              style={
                active
                  ? undefined
                  : { color: tone === "light" ? opt.colorLight : opt.color }
              }
            >
              {opt.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

// Texture finish that rides on the sliding thumb: faint timber grain for
// wood, a brushed-metal highlight band for aluminium.
function ThumbTexture({ brand }: { brand: BrandName }) {
  if (brand === "wood") {
    return (
      <span
        aria-hidden
        className="absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(96deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0) 2px, rgba(255,255,255,0.16) 4px, rgba(0,0,0,0) 6px)",
        }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className="absolute inset-0 opacity-70 mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 65%), repeating-linear-gradient(100deg, rgba(255,255,255,0.06) 0px, rgba(0,0,0,0.06) 2px)",
      }}
    />
  );
}

// Tiny themed glyphs: a grained plank for wood, a framed panel for aluminium.
function MaterialIcon({
  brand,
  className,
  style,
}: {
  brand: BrandName;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (brand === "wood") {
    return (
      <svg
        viewBox="0 0 16 16"
        className={className}
        style={style}
        fill="none"
        aria-hidden
      >
        <rect
          x="1.5"
          y="3"
          width="13"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M3.5 6.2c2-.8 7-.8 9 0M3.5 8c2.4.7 6.6.7 9 0M3.5 9.8c2-.8 7-.8 9 0"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={style}
      fill="none"
      aria-hidden
    >
      <rect
        x="1.5"
        y="2"
        width="13"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M8 2v12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
