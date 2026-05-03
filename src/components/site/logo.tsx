import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
  strokeWidth?: number;
  /** when true, the small grain dots animate in on first render */
  animated?: boolean;
}

/**
 * The encore mark — a window architecture in miniature.
 *
 *   ┌─────┬───────┐
 *   │  ◦  │ ▍▎    │     a sparse window grid hinting at a stylised "E";
 *   │  ▍  ┼───◦   │     the off-axis dot is the atelier signature.
 *   │  ▍  │       │     stroke widths intentionally vary to feel hand-drawn.
 *   └─────┴───────┘
 */
export function LogoMark({
  className,
  strokeWidth = 1.5,
  animated = false,
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7 select-none", className)}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="encore-grain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
        <clipPath id="encore-frame">
          <rect x="3" y="3" width="38" height="38" rx="2" />
        </clipPath>
      </defs>

      {/* glass tint inside the frame */}
      <rect
        x="3"
        y="3"
        width="38"
        height="38"
        rx="2"
        fill="url(#encore-grain)"
      />

      {/* outer frame */}
      <rect
        x="3"
        y="3"
        width="38"
        height="38"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      {/* horizontal mullions — three short lines forming an 'E' */}
      <g clipPath="url(#encore-frame)" stroke="currentColor" strokeLinecap="square">
        <line x1="12" y1="14" x2="40" y2="14" strokeWidth={strokeWidth} />
        <line x1="12" y1="22" x2="32" y2="22" strokeWidth={strokeWidth} />
        <line x1="12" y1="30" x2="40" y2="30" strokeWidth={strokeWidth} />
      </g>

      {/* vertical timber spine — the left edge of the 'E' */}
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="41"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      {/* atelier signature — small accent dot */}
      <circle
        cx="36"
        cy="22"
        r="1.4"
        fill="currentColor"
        className={animated ? "[animation:encoreFadeUp_700ms_var(--ease-encore)_400ms_both]" : ""}
      />

      {/* faint grain detail — three vertical hairlines on the lower-left pane */}
      <g
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.32"
        className="hidden sm:block"
      >
        <line x1="6" y1="33" x2="6" y2="38" />
        <line x1="8" y1="33" x2="8" y2="38" />
        <line x1="10" y1="33" x2="10" y2="38" />
      </g>
    </svg>
  );
}

interface LogoProps {
  className?: string;
  variant?: "default" | "stacked" | "mark";
  /** controls the colour against header background ('light' over the dark hero, 'dark' on paper) */
  tone?: "light" | "dark";
}

export function Logo({ className, variant = "default", tone = "dark" }: LogoProps) {
  // tone="light" is used over the dark hero — must NOT theme-shift, so we
  // use the fixed cream tokens. tone="dark" sits on the active theme paper.
  const colour = tone === "light" ? "text-cream" : "text-ink";
  const subtle = tone === "light" ? "text-cream/70" : "text-ink-2";

  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="encore woodcrafts — home"
        className={cn(
          "inline-flex items-center transition-colors",
          colour,
          className
        )}
      >
        <LogoMark className="h-9 w-9" />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        aria-label="encore woodcrafts — home"
        className={cn(
          "inline-flex items-center gap-3 group transition-colors",
          colour,
          className
        )}
      >
        <LogoMark
          animated
          className="h-10 w-10 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-[3deg]"
        />
        <span className="flex flex-col leading-none">
          <span className="display text-2xl font-light tracking-tight">
            encore
          </span>
          <span
            className={cn(
              "font-mono text-[0.55rem] uppercase tracking-[0.32em] mt-1",
              subtle
            )}
          >
            woodcrafts · india
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="encore woodcrafts — home"
      className={cn(
        "inline-flex items-baseline gap-2.5 group transition-colors",
        colour,
        className
      )}
    >
      <LogoMark
        animated
        className="h-7 w-7 self-center transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-[3deg]"
      />
      <span className="display text-[1.45rem] leading-none font-light tracking-tight">
        encore
      </span>
      <span
        className={cn(
          "font-mono text-[0.6rem] uppercase tracking-[0.3em] hidden sm:inline",
          subtle
        )}
      >
        · woodcrafts
      </span>
    </Link>
  );
}
