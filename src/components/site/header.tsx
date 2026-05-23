"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { ThemePicker } from "@/components/site/theme-picker";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { SearchTrigger } from "@/components/site/search";
import { navigation, type NavItem } from "@/data/site";
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
            className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10"
          >
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              if (item.children && item.children.length > 0) {
                return (
                  <DesktopDropdown
                    key={item.href}
                    item={item}
                    active={active}
                    transparent={transparent}
                    currentPath={pathname}
                  />
                );
              }
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
                "lg:hidden inline-flex h-10 w-10 items-center justify-center transition-colors",
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
        <div className="fixed inset-0 z-[60] bg-paper lg:hidden overflow-y-auto">
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

// Desktop dropdown panel — opens on hover or keyboard focus. The wrapping
// container intentionally uses `group` so both the trigger and the panel
// share a single hover surface (preventing the panel from snapping shut
// when the pointer crosses the gap between them).
function DesktopDropdown({
  item,
  active,
  transparent,
  currentPath,
}: {
  item: NavItem;
  active: boolean;
  transparent: boolean;
  currentPath: string;
}) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);
  const closeSoon = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  React.useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) closeSoon();
      }}
    >
      <Link
        href={item.href}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 font-sans text-[0.78rem] tracking-tight transition-colors",
          transparent
            ? active
              ? "text-cream"
              : "text-cream/75 hover:text-cream"
            : active
              ? "text-ink"
              : "text-ink-2 hover:text-ink",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.6}
          aria-hidden
        />
      </Link>

      {open && (
        <div
          role="menu"
          // pt-2 so the panel doesn't visually butt against the nav text;
          // the wrapping element keeps hover events contiguous.
          className="absolute left-0 top-full pt-3 z-50"
        >
          <ul
            className={cn(
              "min-w-[14rem] border bg-paper py-2 shadow-[0_18px_48px_-24px_rgba(0,0,0,0.25)]",
              "border-line",
            )}
          >
            {item.children?.map((child) => {
              const isActive = currentPath === child.href;
              return (
                <li key={child.href} role="none">
                  <Link
                    href={child.href}
                    role="menuitem"
                    onClick={closeSoon}
                    className={cn(
                      "block px-4 py-2.5 text-[0.78rem] tracking-tight transition-colors",
                      isActive
                        ? "text-ink bg-paper-2"
                        : "text-ink-2 hover:text-ink hover:bg-paper-2",
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// Mobile drawer nav item — for entries with children, renders the parent
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
          <li key={child.href}>
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
