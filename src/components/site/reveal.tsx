"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
}

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ClipReveal is the dramatic "wipe from the top" reveal we use for
// hero-style imagery. The previous implementation used
// `clipPath: inset(0 0 100% 0)` as its initial state, which fully hid
// the wrapper. On mobile that broke next/image's IntersectionObserver:
// the lazy image inside thought it was off-screen, never started
// loading, and the figure stayed empty (visible bg-stone placeholder).
//
// The current implementation preserves the visual effect — a soft
// vertical wipe — but always keeps the content technically visible to
// the layout engine: the initial clip is `inset(0 0 60% 0)` (40 %
// visible) plus opacity 0, so the bounding box and the lazy-loaded
// image inside both stay alive even before the reveal triggers.
export function ClipReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={
        prefersReduced ? false : { clipPath: "inset(0 0 60% 0)", opacity: 0 }
      }
      whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
