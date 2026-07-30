import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
  animated?: boolean;
}

export function LogoMark({
  className,
  animated = false,
}: LogoMarkProps) {
  return (
    <Image
      src="/encore-mark.svg"
      width={100}
      height={100}
      alt=""
      aria-hidden="true"
      unoptimized
      className={cn(
        "h-7 w-7 select-none",
        animated && "anim-fade-up",
        className
      )}
    />
  );
}

interface LogoProps {
  className?: string;
  variant?: "default" | "stacked" | "mark";
  /** controls the colour against header background ('light' over the dark hero, 'dark' on paper) */
  tone?: "light" | "dark";
}

export function Logo({ className, variant = "default", tone = "dark" }: LogoProps) {
  const imageTone =
    tone === "light" ? "brightness-0 invert" : "logo-on-paper";

  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="Encore — home"
        className={cn("inline-flex items-center", className)}
      >
        <LogoMark className={cn("h-9 w-9", imageTone)} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Encore — home"
      className={cn(
        "inline-flex shrink-0 items-center",
        className
      )}
    >
      <Image
        src="/encore-logo.svg"
        width={684}
        height={202}
        alt=""
        aria-hidden="true"
        unoptimized
        className={cn(
          "h-auto select-none transition-opacity duration-300 hover:opacity-80",
          variant === "stacked"
            ? "w-[11rem] sm:w-[13rem]"
            : "w-[8.25rem] sm:w-[10.5rem]",
          imageTone
        )}
      />
    </Link>
  );
}
