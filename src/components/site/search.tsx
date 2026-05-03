"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { addOns } from "@/data/addons";
import { news } from "@/data/news";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/cn";

interface SearchItem {
  type: "product" | "project" | "add-on" | "news" | "blog" | "page";
  title: string;
  href: string;
  hint?: string;
}

const pageItems: SearchItem[] = [
  { type: "page", title: "products", href: "/products" },
  { type: "page", title: "add-ons", href: "/add-ons" },
  { type: "page", title: "reference works", href: "/projects" },
  { type: "page", title: "architects info", href: "/architects" },
  { type: "page", title: "around the world", href: "/partners" },
  { type: "page", title: "about us", href: "/about" },
  { type: "page", title: "news", href: "/news" },
  { type: "page", title: "blog", href: "/blog" },
  { type: "page", title: "contact", href: "/contact" },
];

const allItems: SearchItem[] = [
  ...pageItems,
  ...products.map((p) => ({
    type: "product" as const,
    title: p.name,
    href: `/products/${p.slug}`,
    hint: p.tagline,
  })),
  ...addOns.map((a) => ({
    type: "add-on" as const,
    title: a.name,
    href: `/add-ons#${a.slug}`,
    hint: a.subtitle,
  })),
  ...projects.map((p) => ({
    type: "project" as const,
    title: p.title,
    href: `/projects/${p.slug}`,
    hint: `${p.architect} · ${p.location}`,
  })),
  ...news.map((n) => ({
    type: "news" as const,
    title: n.title,
    href: `/news/${n.slug}`,
    hint: n.kicker,
  })),
  ...blogPosts.map((b) => ({
    type: "blog" as const,
    title: b.title,
    href: `/blog/${b.slug}`,
    hint: `timber views ${b.index}`,
  })),
];

export function SearchTrigger({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Single close path — resets query alongside `open`. Co-locating the reset
  // here (rather than in a `[open]` effect) keeps the lint rule
  // `react-hooks/set-state-in-effect` happy and makes intent obvious.
  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  React.useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  const filtered = React.useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems
      .filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.hint?.toLowerCase().includes(q) ||
          i.type.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="search"
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-colors",
          // header passes a per-tone text colour; fall back here for other contexts
          !className?.includes("text-") && "text-ink-2 hover:text-ink",
          className
        )}
      >
        <SearchIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
        <span className="hidden lg:inline font-mono text-[0.65rem] uppercase tracking-[0.18em]">
          ⌘K
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/40 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto mt-[10vh] max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-sm border border-line bg-paper shadow-2xl ring-soft">
              <div className="flex items-center gap-3 border-b border-line px-5 py-4">
                <SearchIcon
                  className="h-4 w-4 text-ink-2"
                  strokeWidth={1.5}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search products, projects, articles…"
                  className="flex-1 bg-transparent font-sans text-base text-ink placeholder:text-ink-2/60 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="close"
                  className="text-ink-2 hover:text-ink"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <ul className="max-h-[60vh] overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-5 py-8 text-center text-ink-2 font-mono text-xs uppercase tracking-[0.18em]">
                    no results
                  </li>
                )}
                {filtered.map((item) => (
                  <li key={`${item.type}-${item.href}`}>
                    <button
                      type="button"
                      onClick={() => {
                        close();
                        router.push(item.href);
                      }}
                      className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left hover:bg-stone/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-display text-base text-ink truncate">
                          {item.title}
                        </div>
                        {item.hint && (
                          <div className="mt-0.5 text-xs text-ink-2 truncate">
                            {item.hint}
                          </div>
                        )}
                      </div>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                        {item.type}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line px-5 py-3 flex items-center justify-between text-[0.65rem] font-mono uppercase tracking-[0.18em] text-ink-2">
                <span>↵ to navigate</span>
                <Link
                  href="/contact"
                  onClick={close}
                  className="hover:text-ink"
                >
                  request a quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
