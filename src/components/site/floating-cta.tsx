"use client";

import * as React from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function FloatingCTA() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const telUrl = `tel:${site.phone.replace(/\s+/g, "")}`;

  return (
    <div
      className={cn(
        "fixed z-[60] right-4 sm:right-6 bottom-4 sm:bottom-6 flex flex-col items-end gap-3 transition-all duration-500",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {open && (
        <div
          role="dialog"
          aria-label="contact options"
          className="bg-paper border border-line rounded-sm shadow-2xl ring-soft p-5 w-[min(20rem,calc(100vw-2rem))] anim-fade-up"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
                talk to the atelier
              </p>
              <p className="mt-2 display text-lg text-ink leading-snug">
                pick the channel
                <br />
                <span className="italic text-ink-2 text-base">that suits you.</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="close contact options"
              className="inline-flex h-7 w-7 items-center justify-center text-ink-2 hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-sm border border-line px-3 py-2.5 hover:border-ink/40 hover:bg-stone/30 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppGlyph className="h-4 w-4 text-walnut" />
                  <span>
                    <span className="block text-ink">whatsapp</span>
                    <span className="text-[0.7rem] text-ink-2">
                      typical reply · 30 minutes
                    </span>
                  </span>
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-2 group-hover:text-walnut">
                  open →
                </span>
              </a>
            </li>
            <li>
              <a
                href={telUrl}
                className="group flex items-center justify-between gap-3 rounded-sm border border-line px-3 py-2.5 hover:border-ink/40 hover:bg-stone/30 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-walnut" strokeWidth={1.4} />
                  <span>
                    <span className="block text-ink">{site.phone}</span>
                    <span className="text-[0.7rem] text-ink-2">
                      mon–sat · 10:00–19:00 ist
                    </span>
                  </span>
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-2 group-hover:text-walnut">
                  call →
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between gap-3 rounded-sm border border-line px-3 py-2.5 hover:border-ink/40 hover:bg-stone/30 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle
                    className="h-4 w-4 text-walnut"
                    strokeWidth={1.4}
                  />
                  <span>
                    <span className="block text-ink truncate max-w-[12rem]">
                      {site.email}
                    </span>
                    <span className="text-[0.7rem] text-ink-2">
                      reply within one working day
                    </span>
                  </span>
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-2 group-hover:text-walnut">
                  email →
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "close contact options" : "talk to encore atelier"}
        aria-expanded={open}
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full text-cream shadow-2xl ring-soft transition-all duration-500",
          "bg-walnut hover:bg-charcoal hover:scale-105"
        )}
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.6} />
        ) : (
          <WhatsAppGlyph className="h-6 w-6" />
        )}
        <span
          aria-hidden
          className={cn(
            "absolute inline-flex rounded-full opacity-50",
            "bg-walnut animate-ping",
            open ? "h-0 w-0" : "h-14 w-14"
          )}
        />
      </button>
    </div>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2.003c-5.5 0-9.96 4.46-9.96 9.96 0 1.756.46 3.48 1.34 5l-1.42 5.18 5.32-1.4a9.94 9.94 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96a9.93 9.93 0 0 0-2.92-7.06A9.93 9.93 0 0 0 12.04 2zm0 18.16h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.26 8.26 0 0 1-1.27-4.39c0-4.57 3.72-8.28 8.3-8.28a8.27 8.27 0 0 1 8.28 8.3c0 4.57-3.72 8.27-8.27 8.27zm4.55-6.19c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23a7.55 7.55 0 0 1-1.39-1.73c-.15-.25-.02-.39.11-.51.11-.12.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}
