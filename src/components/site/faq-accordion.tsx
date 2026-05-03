"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems, type FaqItem } from "@/data/faq";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";

export function FaqAccordion({
  items = faqItems,
  className,
  defaultOpen = 0,
}: {
  items?: FaqItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = React.useState<number | null>(defaultOpen);
  return (
    <ul className={cn("border-t border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line">
            <Reveal delay={Math.min(i * 0.04, 0.2)}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left transition-colors hover:text-walnut"
              >
                <span className="flex-1">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-2 block mb-2">
                    {item.category}
                  </span>
                  <span className="display text-lg md:text-2xl text-ink leading-snug group-hover:text-walnut transition-colors">
                    {item.q}
                  </span>
                </span>
                <span className="flex-none mt-1.5">
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-walnut" strokeWidth={1.4} />
                  ) : (
                    <Plus className="h-5 w-5 text-ink-2 group-hover:text-walnut transition-colors" strokeWidth={1.4} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 md:pb-8 pr-12 max-w-prose text-ink-2 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
