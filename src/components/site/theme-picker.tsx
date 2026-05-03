"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";
import { useTheme, themes, type ThemeName } from "@/components/site/theme-provider";
import { cn } from "@/lib/cn";

export function ThemePicker({
  className,
  variant = "compact",
  tone = "dark",
}: {
  className?: string;
  variant?: "compact" | "full";
  tone?: "light" | "dark";
}) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (variant === "full") {
    return (
      <ul
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line",
          className
        )}
      >
        {themes.map((t) => (
          <li key={t.id} className="bg-paper">
            <ThemeCard
              name={t.id}
              label={t.label}
              description={t.description}
              swatches={t.swatches}
              active={theme === t.id}
              onSelect={() => setTheme(t.id)}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="change theme"
        aria-expanded={open}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
          tone === "light"
            ? "border-cream/30 text-cream/75 hover:text-cream hover:border-cream/70"
            : "border-line text-ink-2 hover:text-ink hover:border-ink/40"
        )}
      >
        <Palette className="h-3.5 w-3.5" strokeWidth={1.4} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-3 w-72 rounded-sm border border-line bg-paper shadow-2xl ring-soft z-50 overflow-hidden"
        >
          <div className="px-4 py-3 border-b border-line">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-2">
              theme
            </p>
            <p className="mt-1 text-xs text-ink-2 leading-relaxed">
              choose a palette · all four shipped for the demo
            </p>
          </div>
          <ul role="none" className="py-1">
            {themes.map((t) => (
              <li key={t.id} role="none">
                <button
                  role="menuitemradio"
                  aria-checked={theme === t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-stone/40",
                    theme === t.id && "bg-stone/30"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Swatches swatches={t.swatches} />
                    <div className="min-w-0">
                      <p className="display text-base text-ink leading-tight truncate">
                        {t.label}
                      </p>
                      <p className="text-[0.7rem] text-ink-2 truncate">
                        {t.description.split(" · ").slice(0, 2).join(" · ")}
                      </p>
                    </div>
                  </div>
                  {theme === t.id && (
                    <Check
                      className="h-3.5 w-3.5 flex-none text-walnut"
                      strokeWidth={1.6}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Swatches({
  swatches,
}: {
  swatches: { paper: string; ink: string; walnut: string; brass: string };
}) {
  return (
    <div className="flex h-7 w-7 flex-none rounded-full overflow-hidden border border-line">
      <span className="w-1/4 h-full block" style={{ background: swatches.paper }} />
      <span className="w-1/4 h-full block" style={{ background: swatches.ink }} />
      <span className="w-1/4 h-full block" style={{ background: swatches.walnut }} />
      <span className="w-1/4 h-full block" style={{ background: swatches.brass }} />
    </div>
  );
}

function ThemeCard({
  name,
  label,
  description,
  swatches,
  active,
  onSelect,
}: {
  name: ThemeName;
  label: string;
  description: string;
  swatches: { paper: string; ink: string; walnut: string; brass: string };
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-theme={name}
      className={cn(
        "group block w-full text-left p-8 transition-colors",
        "bg-[var(--paper)] text-[var(--ink)]",
        active && "ring-2 ring-walnut ring-inset"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em]"
          style={{ color: swatches.walnut }}
        >
          {label}
        </p>
        {active && (
          <span
            className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
            style={{ color: swatches.walnut }}
          >
            · active
          </span>
        )}
      </div>
      <h3
        className="mt-6 display text-3xl font-light tracking-tight leading-[0.95]"
        style={{ color: swatches.ink }}
      >
        {label}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: swatches.ink, opacity: 0.7 }}
      >
        {description}
      </p>
      <div className="mt-8 flex items-center gap-2">
        <span
          className="h-8 w-8 rounded-full border"
          style={{
            background: swatches.paper,
            borderColor: "rgba(0,0,0,0.1)",
          }}
        />
        <span
          className="h-8 w-8 rounded-full"
          style={{ background: swatches.ink }}
        />
        <span
          className="h-8 w-8 rounded-full"
          style={{ background: swatches.walnut }}
        />
        <span
          className="h-8 w-8 rounded-full"
          style={{ background: swatches.brass }}
        />
      </div>
    </button>
  );
}
