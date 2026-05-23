"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

// The atelier's primary marketing banner from the Shopify storefront —
// the hero pairs warm wood tones with deep shadow so the headline + nav
// always read on first paint. Served from the steel-doors-2.myshopify.com
// CDN, whitelisted in next.config.ts.
const HERO_IMAGE =
  "https://steel-doors-2.myshopify.com/cdn/shop/files/Fill_the_white_space_on_side_with_out_disturbing_t_delpmaspu.jpg";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      aria-label="encore woodcrafts hero"
      // bg-charcoal + text-cream are FIXED colours that never theme-shift —
      // the hero is always a dark image with cream text on top. Kept at
      // 88svh on phones (rather than 100svh) so the panoramah-style
      // "what's new" block below crests above the fold and signals scroll.
      className="relative h-[88svh] md:h-[100svh] w-full overflow-hidden bg-charcoal text-cream"
    >
      <motion.div
        style={prefersReduced ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="encore atelier wooden craft door with warm grain and deep shadow"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        {/* base wash so even the brightest hero photo lands legible */}
        <div className="absolute inset-0 bg-charcoal/55" />
        {/* soft directional gradient — top + bottom both heavier */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal/85" />
        {/* warm side glow for atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,rgba(176,141,87,0.18),transparent_55%)]" />
      </motion.div>

      <Bracket
        className="absolute top-20 left-5 md:top-24 md:left-8 lg:left-12 h-8 md:h-10 w-8 md:w-10 text-cream/35"
        side="tl"
      />
      <Bracket
        className="absolute bottom-6 right-5 md:right-8 lg:right-12 h-8 md:h-10 w-8 md:w-10 text-cream/35"
        side="br"
      />

      <motion.div
        style={
          prefersReduced ? undefined : { opacity: contentOpacity, y: contentY }
        }
        className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          className="flex items-center gap-3 font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-cream/85"
        >
          <span className="inline-block h-px w-6 sm:w-12 bg-cream/60" />
          <span className="truncate">
            <span className="hidden sm:inline">
              est. 2014 · hyderabad · wooden doors · glass doors · railings
            </span>
            <span className="sm:hidden">est. 2014 · hyderabad</span>
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.32, ease: easeOut }}
          className="mt-4 sm:mt-5 display-tight text-[clamp(2rem,9vw,8rem)] leading-[0.98] font-light text-cream"
        >
          wooden doors,
          <br />
          <span className="italic font-light text-cream">
            beautifully made.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
          className="mt-5 sm:mt-7 max-w-md sm:max-w-2xl text-sm md:text-lg leading-relaxed text-cream/90"
        >
          an indian atelier crafting bespoke wooden doors, aluminium-framed
          glass sliding doors and architectural railings — engineered,
          finished and installed by one in-house team in hyderabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: easeOut }}
          className="mt-8 md:mt-16 flex items-end justify-between gap-6"
        >
          <a
            href="#products"
            className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
            aria-label="scroll to products"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 group-hover:border-cream/70 transition-colors">
              <ArrowDown
                className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform"
                strokeWidth={1.5}
              />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em]">
              scroll
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            <Stat value="4" label="product families" />
            <Stat value="22" label="reference designs" />
            <Stat value="2014" label="atelier est." />
          </div>
        </motion.div>
      </motion.div>

      {/* extra-strong top scrim ensures the nav bar reads well immediately */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-charcoal/85 via-charcoal/40 to-transparent pointer-events-none" />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-cream">
      <div className="display text-3xl md:text-4xl font-light leading-none">
        {value}
      </div>
      <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/70">
        {label}
      </div>
    </div>
  );
}

function Bracket({
  className,
  side,
}: {
  className?: string;
  side: "tl" | "br";
}) {
  if (side === "tl") {
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
        <path d="M40 1H1v39" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path d="M0 39h39V0" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
