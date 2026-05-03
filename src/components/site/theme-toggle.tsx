"use client";

import { useTheme } from "@/components/site/theme-provider";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { resolvedMode, toggleMode } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={`switch to ${resolvedMode === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        tone === "light"
          ? "border-cream/30 text-cream/75 hover:text-cream hover:border-cream/70"
          : "border-line text-ink-2 hover:text-ink hover:border-ink/40",
        className
      )}
    >
      {resolvedMode === "dark" ? (
        <Sun className="h-3.5 w-3.5" strokeWidth={1.4} />
      ) : (
        <Moon className="h-3.5 w-3.5" strokeWidth={1.4} />
      )}
    </button>
  );
}
