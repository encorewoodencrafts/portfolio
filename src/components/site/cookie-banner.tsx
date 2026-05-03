"use client";

import * as React from "react";
import { X } from "lucide-react";
import Link from "next/link";

const STORAGE = "encore-cookies";

export function CookieBanner() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const v = localStorage.getItem(STORAGE);
    if (!v) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: "accept" | "reject") => {
    localStorage.setItem(
      STORAGE,
      JSON.stringify({ choice, ts: Date.now() })
    );
    window.dispatchEvent(new Event("encore-cookie-consent"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="cookie consent"
      className="fixed inset-x-3 sm:inset-x-6 bottom-3 sm:bottom-6 z-[55] sm:max-w-md sm:left-6 sm:right-auto"
    >
      <div className="anim-fade-up bg-paper border border-line rounded-sm shadow-2xl ring-soft p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
            cookies
          </p>
          <button
            type="button"
            onClick={() => decide("reject")}
            aria-label="dismiss"
            className="inline-flex h-7 w-7 items-center justify-center text-ink-2 hover:text-ink"
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
        <p className="text-sm text-ink-2 leading-relaxed">
          we use a small set of cookies to remember your theme, language and to
          measure how the site is used. nothing is shared with advertisers.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => decide("accept")}
            className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-paper bg-ink rounded-sm px-4 py-2 hover:bg-walnut transition-colors"
          >
            accept all
          </button>
          <button
            type="button"
            onClick={() => decide("reject")}
            className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            essentials only
          </button>
          <Link
            href="/legal/privacy"
            className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2 hover:text-ink transition-colors ml-auto"
          >
            privacy policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
