import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
  strokeWidth?: number;
}

export function LogoMark({ className, strokeWidth = 1.6 }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="encore-mark-grain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* outer frame — the window */}
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeOpacity="0.85"
      />
      {/* inner mullion grid — the "E" */}
      <line
        x1="3.5"
        y1="13.2"
        x2="36.5"
        y2="13.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <line
        x1="3.5"
        y1="20"
        x2="26"
        y2="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <line
        x1="3.5"
        y1="26.8"
        x2="36.5"
        y2="26.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* vertical timber spine */}
      <line
        x1="11.5"
        y1="3.5"
        x2="11.5"
        y2="36.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeOpacity="0.55"
      />
      {/* accent dot — atelier signature */}
      <circle cx="32" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "stacked" | "mark";
}) {
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="encore woodcrafts"
        className={cn("inline-flex items-center text-ink", className)}
      >
        <LogoMark className="h-8 w-8" />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        aria-label="encore woodcrafts"
        className={cn(
          "inline-flex items-center gap-3 group text-ink",
          className
        )}
      >
        <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[2deg]" />
        <span className="flex flex-col leading-none">
          <span className="display text-xl font-light tracking-tight text-ink">
            encore
          </span>
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.32em] text-ink-2 mt-0.5">
            woodcrafts · india
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="encore woodcrafts"
      className={cn(
        "inline-flex items-center gap-2.5 group text-ink",
        className
      )}
    >
      <LogoMark className="h-7 w-7 transition-transform duration-500 group-hover:rotate-[2deg]" />
      <span className="display text-[1.45rem] leading-none font-light tracking-tight">
        encore
      </span>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-2 translate-y-[-2px] hidden sm:inline">
        woodcrafts
      </span>
    </Link>
  );
}
