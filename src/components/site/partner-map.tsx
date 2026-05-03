"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { mapDots } from "@/data/partners";
import { cn } from "@/lib/cn";

const CONTINENTS = [
  // North America
  "M138 80 L210 70 L242 92 L268 96 L290 130 L264 160 L234 180 L210 196 L182 200 L168 184 L146 168 L132 142 L120 122 L122 102 Z",
  // South America
  "M242 200 L284 196 L298 222 L292 254 L274 282 L260 290 L246 270 L240 240 Z",
  // Europe
  "M412 90 L470 78 L480 110 L470 132 L450 148 L432 160 L412 158 L398 140 L394 116 Z",
  // Africa
  "M470 158 L532 150 L548 172 L548 218 L530 252 L504 268 L488 256 L482 220 L470 198 Z",
  // Asia
  "M482 70 L640 68 L702 92 L730 132 L720 162 L688 174 L654 168 L612 178 L578 168 L548 152 L516 138 L488 110 Z",
  // SE Asia / Oceania
  "M650 192 L700 188 L730 208 L740 226 L726 250 L702 252 L676 240 L654 218 Z",
  // Australia
  "M712 224 L770 220 L786 244 L778 268 L744 274 L716 264 L704 248 Z",
];

export function PartnerMap({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 800 320"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="encore global partner network"
        className="w-full h-auto"
      >
        <defs>
          <pattern
            id="encore-dots"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="var(--ink)" opacity="0.18" />
          </pattern>
          <radialGradient id="dot-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="var(--walnut)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--walnut)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {CONTINENTS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="url(#encore-dots)"
            stroke="var(--ink)"
            strokeOpacity="0.18"
            strokeWidth="0.5"
            strokeDasharray="1.5 2"
          />
        ))}

        {mapDots.map((dot, i) => {
          const isActive = hovered === i;
          return (
            <g
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {!prefersReduced && (
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r={3}
                  fill="url(#dot-glow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 3.5 : 1.6,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <motion.circle
                cx={dot.cx}
                cy={dot.cy}
                r={isActive ? 2.4 : 1.6}
                fill="var(--walnut)"
                initial={prefersReduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: prefersReduced ? 0 : 0.5 + (i % 12) * 0.04,
                  duration: 0.4,
                }}
              />
              {isActive && !compact && (
                <g pointerEvents="none">
                  <rect
                    x={dot.cx + 6}
                    y={dot.cy - 14}
                    width={dot.city.length * 4.6 + 8}
                    height="14"
                    rx="2"
                    fill="var(--ink)"
                  />
                  <text
                    x={dot.cx + 10}
                    y={dot.cy - 4}
                    fontSize="7"
                    fontFamily="var(--font-mono)"
                    fill="var(--paper)"
                    style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    {dot.city}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
