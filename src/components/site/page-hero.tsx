"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** A short index, e.g. "01" or "no.04". Renders large in the side rail. */
  index?: string;
  /** A small breadcrumb / category label */
  kicker?: string;
  /** A right-side meta block (e.g. a list of facts) */
  meta?: React.ReactNode;
  className?: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  description,
  index,
  kicker,
  meta,
  className,
}: PageHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className={cn(
        "relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 border-b border-line overflow-hidden",
        className
      )}
    >
      {/* atmospheric edge ornaments */}
      <Bracket
        className="absolute top-24 right-5 md:right-8 lg:right-12 h-10 w-10 text-line"
        side="tr"
      />
      <Bracket
        className="absolute bottom-6 left-5 md:left-8 lg:left-12 h-10 w-10 text-line"
        side="bl"
      />

      <div className="relative mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        {/* meta row */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 sm:mb-10 md:mb-14"
        >
          {kicker && (
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-walnut">
              {kicker}
            </span>
          )}
          {eyebrow && (
            <span className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-2">
              <span className="inline-block h-px w-8 bg-line" />
              {eyebrow}
            </span>
          )}
        </motion.div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* index numeral / decorative rail */}
          <div className="hidden lg:flex col-span-2 flex-col items-start pt-3">
            {index && (
              <motion.span
                initial={prefersReduced ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
                className="display text-[clamp(4rem,8vw,8rem)] font-light leading-[0.85] text-walnut/15 select-none"
                aria-hidden
              >
                {index}
              </motion.span>
            )}
            <span className="mt-6 inline-block h-24 w-px bg-line" />
            <span className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.32em] text-ink-2">
              encore woodcrafts
              <br />
              hyderabad · india
            </span>
          </div>

          {/* title block */}
          <div className="col-span-12 lg:col-span-10">
            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: easeOut }}
              className="display-tight text-[clamp(2rem,8vw,7.4rem)] font-light text-ink leading-[1]"
            >
              {title}
            </motion.h1>

            <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-12 gap-6 lg:gap-12">
              <div className="col-span-12 md:col-span-7">
                {description && (
                  <motion.p
                    initial={
                      prefersReduced ? false : { opacity: 0, y: 16 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.32,
                      ease: easeOut,
                    }}
                    className="max-w-2xl text-ink-2 text-sm md:text-lg leading-relaxed"
                  >
                    {description}
                  </motion.p>
                )}
                <motion.a
                  initial={prefersReduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55,
                    ease: easeOut,
                  }}
                  href="#main"
                  className="mt-6 sm:mt-8 md:mt-10 group inline-flex items-center gap-3 text-ink-2 hover:text-ink transition-colors"
                  aria-label="scroll to next section"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:border-ink/40 transition-colors">
                    <ArrowDown
                      className="h-3 w-3 group-hover:translate-y-0.5 transition-transform"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em]">
                    continue
                  </span>
                </motion.a>
              </div>
              {meta && (
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                    ease: easeOut,
                  }}
                  className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-line"
                >
                  {meta}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <span id="main" className="absolute bottom-0" />
    </section>
  );
}

function Bracket({
  className,
  side,
}: {
  className?: string;
  side: "tl" | "tr" | "bl" | "br";
}) {
  const paths: Record<typeof side, string> = {
    tl: "M40 1H1v39",
    tr: "M0 1h39v39",
    bl: "M40 39H1V0",
    br: "M0 39h39V0",
  };
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path d={paths[side]} stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
