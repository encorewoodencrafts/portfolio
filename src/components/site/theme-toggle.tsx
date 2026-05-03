"use client";

import { useTheme } from "@/components/site/theme-provider";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedMode, toggleMode } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={`switch to ${resolvedMode === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:text-ink hover:border-ink/40",
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
