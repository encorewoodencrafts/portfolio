"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2800&q=85";

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-paper"
    >
      <motion.div
        style={prefersReduced ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="timber-framed window opening onto a forest at golden hour"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/70" />
      </motion.div>

      <motion.div
        style={prefersReduced ? undefined : { opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-20 md:pb-28 text-paper"
      >
        <div className="anim-fade-up max-w-5xl">
          <p
            className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-paper/80"
            style={{ animationDelay: "200ms" }}
          >
            est. 2014 · hyderabad · bespoke timber windows & doors
          </p>
          <h1
            className="mt-5 display-tight text-[clamp(2.4rem,7.5vw,7.8rem)] font-light text-paper"
            style={{ animationDelay: "300ms" }}
          >
            the warmth of
            <br />
            <span className="italic font-light text-paper">bespoke timber.</span>
          </h1>
          <p
            className="mt-7 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-paper/85"
            style={{ animationDelay: "500ms" }}
          >
            encore woodcrafts is india&rsquo;s atelier for minimalist
            wood-clad windows and doors. we machine, join, glaze and finish the
            main components of our systems in-house — timber profiles up to 9
            metres, delivered across the subcontinent and beyond.
          </p>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6 anim-fade-up">
          <div className="flex items-center gap-3 text-paper/80">
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em]">
              scroll to enter
            </span>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <Stat value="12+" label="cities served" />
            <Stat value="9 m" label="max panel" />
            <Stat value="2014" label="atelier est." />
          </div>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ink/40 to-transparent pointer-events-none" />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-paper">
      <div className="display text-3xl md:text-4xl font-light leading-none">
        {value}
      </div>
      <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-paper/70">
        {label}
      </div>
    </div>
  );
}
