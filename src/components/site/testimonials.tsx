"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const prefersReduced = useReducedMotion();

  React.useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, [paused, prefersReduced]);

  const current = testimonials[active];

  return (
    <section
      className="border-t border-line py-20 md:py-28 bg-paper-2/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="eyebrow">said about encore</p>
              <h2 className="mt-3 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
                in the words of
                <br />
                <span className="italic">our architects.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-ink-2 leading-relaxed">
                we are recommended by the architects we work with. these are
                their words — gathered from completed projects across india.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8 lg:pl-12">
            <div
              className="relative min-h-[18rem] md:min-h-[20rem]"
              aria-live="polite"
            >
              <Quote
                className="absolute -top-4 -left-2 h-12 w-12 text-walnut/30"
                strokeWidth={1}
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pt-8"
                >
                  <blockquote>
                    <p className="display text-2xl md:text-3xl lg:text-4xl font-light text-ink leading-[1.25] tracking-tight italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="inline-block h-px w-8 bg-walnut" />
                    <div>
                      <p className="display text-lg text-ink leading-tight">
                        {current.author}
                      </p>
                      <p className="text-xs text-ink-2 mt-0.5">
                        {current.role} · {current.studio} · {current.city}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`show testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      active === i
                        ? "w-10 bg-walnut"
                        : "w-4 bg-ink-2/30 hover:bg-ink-2/60"
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="previous testimonial"
                  onClick={() =>
                    setActive(
                      (a) => (a - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 hover:text-ink hover:border-ink/40 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="next testimonial"
                  onClick={() =>
                    setActive((a) => (a + 1) % testimonials.length)
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 hover:text-ink hover:border-ink/40 transition-colors"
                >
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
