"use client";

import { useBrand, type BrandName } from "@/components/site/brand-provider";
import { cn } from "@/lib/cn";

// Each range carries its own signature colour (the warm wood tone and the
// cool aluminium tone from the brand palette), so both buttons read as two
// distinct colours at all times — not just the active one.
const OPTIONS: { id: BrandName; label: string; color: string }[] = [
  { id: "wood", label: "Wood", color: "#9c845a" },
  { id: "aluminium", label: "Aluminium", color: "#8b9ea8" },
];

export function BrandToggle({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { brand, setBrand } = useBrand();

  return (
    <div
      role="group"
      aria-label="choose product range"
      className={cn(
        "inline-flex shrink-0 items-center border",
        tone === "light" ? "border-cream/30" : "border-line",
        className,
      )}
    >
      {OPTIONS.map((opt) => {
        const active = brand === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setBrand(opt.id)}
            aria-pressed={active}
            className="px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-[0.62rem] sm:tracking-[0.22em]"
            style={
              active
                ? { backgroundColor: opt.color, color: "#faf7f2" }
                : { color: opt.color }
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
