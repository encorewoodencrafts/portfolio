"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { ThemePicker } from "@/components/site/theme-picker";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { BrandToggle } from "@/components/site/brand-toggle";
import { navigation, type NavItem } from "@/data/site";
import { familyBrandTag } from "@/data/brand";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile drawer on each navigation. Wired to the Link's onClick
  // handler below — driving this from a `pathname` effect would re-enter
  // render with a setState (lint: react-hooks/set-state-in-effect).
  const closeMenu = React.useCallback(() => setOpen(false), []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        data-surface={transparent ? "on-hero" : "on-paper"}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,color] duration-500",
          // when transparent, sit over the dark hero with FIXED cream text
          // (so it stays readable in dark mode + every theme); otherwise
          // the header paints itself in the active theme's paper/ink.
          transparent
            ? "border-b border-transparent text-cream"
            : "border-b border-line bg-paper/85 backdrop-blur-xl text-ink"
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-[1640px] items-center justify-between gap-2 sm:gap-3 px-5 md:px-8 lg:px-12">
          <Logo
            tone={transparent ? "light" : "dark"}
            className="shrink-0 transition-colors"
          />

          {/* The brand range switcher replaces the old link bar — it is the
              primary control on the simplified home experience. On large
              screens it is absolutely centred between the logo and controls;
              on smaller screens it sits in normal flow so it never overlaps
              the wordmark. */}
          <BrandToggle
            tone={transparent ? "light" : "dark"}
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center transition-colors",
                transparent ? "text-cream" : "text-ink"
              )}
              aria-label="open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <button
            type="button"
            aria-label="close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40"
          />
          <div className="fixed inset-y-0 right-0 z-[70] w-full sm:w-[420px] bg-paper border-l border-line overflow-y-auto">
          <div className="sticky top-0 flex h-16 items-center justify-between px-5 md:px-8 border-b border-line bg-paper z-10">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav
            aria-label="menu"
            className="flex flex-col gap-1 px-5 md:px-8 py-8"
          >
            {navigation.map((item, i) => (
              <MobileNavItem
                key={item.href}
                item={item}
                index={i}
                onNavigate={closeMenu}
              />
            ))}
            <Link
              href="/login"
              onClick={closeMenu}
              className="anim-fade-up py-3 display text-2xl sm:text-3xl text-ink-2 hairline"
              style={{ animationDelay: `${navigation.length * 40}ms` }}
            >
              Architects log-in
            </Link>
          </nav>
          <div className="px-5 md:px-8 py-6 border-t border-line space-y-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2">
                theme
              </p>
              <div className="flex items-center gap-2">
                <ThemePicker />
                <ThemeToggle />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2">
                language
              </p>
              <LanguageSwitcher />
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );
}

// Drawer nav item — for entries with children, renders the parent
// as a label and its children as an indented sub-list, all expanded by
// default. Mobile users rarely benefit from an accordion here (one extra
// tap before they can pick a product), so we keep everything visible.
function MobileNavItem({
  item,
  index,
  onNavigate,
}: {
  item: NavItem;
  index: number;
  onNavigate: () => void;
}) {
  const baseDelay = index * 40;
  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        style={{ animationDelay: `${baseDelay}ms` }}
        className="anim-fade-up py-3 display text-2xl sm:text-3xl text-ink hairline"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="hairline">
      <Link
        href={item.href}
        onClick={onNavigate}
        style={{ animationDelay: `${baseDelay}ms` }}
        className="anim-fade-up block py-3 display text-2xl sm:text-3xl text-ink"
      >
        {item.label}
      </Link>
      <ul className="pb-3 pl-4 space-y-1">
        {item.children.map((child, ci) => (
          <li
            key={child.href}
            data-brand-tag={familyBrandTag(child.href.split("/").pop() ?? "")}
          >
            <Link
              href={child.href}
              onClick={onNavigate}
              style={{ animationDelay: `${baseDelay + (ci + 1) * 30}ms` }}
              className="anim-fade-up block py-1.5 text-base text-ink-2 hover:text-ink transition-colors"
            >
              · {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
