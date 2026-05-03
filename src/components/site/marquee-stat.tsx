"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parseValue(value: string): { num: number | null; suffix: string; prefix: string } {
  const match = value.match(/^(\D*?)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: null, suffix: value, prefix: "" };
  return {
    prefix: match[1] || "",
    num: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

export function StatCounter({
  value,
  duration = 1500,
}: {
  value: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const { num, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = React.useState(num === null ? value : `${prefix}0${suffix}`);

  React.useEffect(() => {
    if (!inView || num === null) return;
    let frame = 0;
    if (prefersReduced) {
      // Snap to final value on the next frame — avoids a synchronous setState
      // in the effect body (lint: react-hooks/set-state-in-effect).
      frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }
    const start = performance.now();
    const animate = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const current = Math.round(num * eased * 100) / 100;
      const formatted = num % 1 === 0 ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, num, prefix, suffix, duration, value, prefersReduced]);

  return <span ref={ref}>{display}</span>;
}
