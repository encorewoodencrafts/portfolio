"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { ThemePicker } from "@/components/site/theme-picker";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { SearchTrigger } from "@/components/site/search";
import { navigation } from "@/data/site";
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
        <div className="mx-auto flex h-16 max-w-[1640px] items-center justify-between px-5 md:px-8 lg:px-12">
          <Logo
            tone={transparent ? "light" : "dark"}
            className="transition-colors"
          />

          <nav
            aria-label="primary"
            className="hidden xl:flex items-center gap-5 2xl:gap-7"
          >
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-sans text-[0.78rem] tracking-tight transition-colors",
                    transparent
                      ? active
                        ? "text-cream"
                        : "text-cream/75 hover:text-cream"
                      : active
                        ? "text-ink"
                        : "text-ink-2 hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <SearchTrigger
              className={cn(
                "h-9 w-9 inline-flex items-center justify-center",
                transparent
                  ? "text-cream/75 hover:text-cream"
                  : "text-ink-2 hover:text-ink"
              )}
            />
            <Link
              href="/login"
              aria-label="architects login"
              className={cn(
                "hidden md:inline-flex h-9 items-center gap-1.5 px-2 transition-colors",
                transparent
                  ? "text-cream/75 hover:text-cream"
                  : "text-ink-2 hover:text-ink"
              )}
            >
              <User className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="hidden lg:inline font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                log-in
              </span>
            </Link>
            <LanguageSwitcher
              className="hidden md:block"
              tone={transparent ? "light" : "dark"}
            />
            <ThemePicker
              className="hidden sm:block"
              tone={transparent ? "light" : "dark"}
            />
            <ThemeToggle tone={transparent ? "light" : "dark"} />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "xl:hidden inline-flex h-10 w-10 items-center justify-center transition-colors",
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
        <div className="fixed inset-0 z-[60] bg-paper xl:hidden overflow-y-auto">
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
            aria-label="mobile primary"
            className="flex flex-col gap-1 px-5 md:px-8 py-8"
          >
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{ animationDelay: `${i * 40}ms` }}
                className="anim-fade-up py-3 display text-2xl sm:text-3xl text-ink hairline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={closeMenu}
              className="anim-fade-up py-3 display text-2xl sm:text-3xl text-ink-2 hairline"
              style={{ animationDelay: `${navigation.length * 40}ms` }}
            >
              architects log-in
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
      )}
    </>
  );
}
