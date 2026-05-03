"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const [active, setActive] = React.useState("en");
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="select language"
        className="inline-flex h-9 items-center gap-1 px-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-2 hover:text-ink transition-colors"
      >
        {active.toUpperCase()}
        <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
      </button>
      {open && (
        <ul
          className="absolute right-0 top-full mt-2 min-w-[5rem] rounded-sm border border-line bg-paper py-1 shadow-md ring-soft z-50"
          role="listbox"
        >
          {site.locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setActive(l.code);
                  setOpen(false);
                }}
                className={cn(
                  "block w-full px-3 py-1.5 text-left font-mono text-[0.7rem] uppercase tracking-[0.18em] hover:bg-stone/40",
                  active === l.code ? "text-ink" : "text-ink-2"
                )}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
