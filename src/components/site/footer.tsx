"use client";

import * as React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { SocialIcon } from "@/components/site/social-icon";

const footerLinks = [
  {
    title: "explore",
    items: [
      { label: "products", href: "/products" },
      { label: "add-ons", href: "/add-ons" },
      { label: "reference works", href: "/projects" },
      { label: "around the world", href: "/partners" },
    ],
  },
  {
    title: "atelier",
    items: [
      { label: "about us", href: "/about" },
      { label: "news", href: "/news" },
      { label: "blog · timber views", href: "/blog" },
      { label: "careers", href: "/about#careers" },
    ],
  },
  {
    title: "support",
    items: [
      { label: "architects info", href: "/architects" },
      { label: "faq", href: "/faq" },
      { label: "request a quote", href: "/contact" },
      { label: "press & architecture", href: "/architects#press" },
      { label: "privacy & cookies", href: "/legal/privacy" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setEmail("");
  };

  return (
    <footer className="relative mt-24 border-t border-line bg-paper-2 text-ink">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">newsletter</p>
            <h3 className="mt-4 display text-3xl md:text-5xl tracking-tight max-w-md">
              the latest from the atelier
            </h3>
            <p className="mt-4 max-w-md text-ink-2 leading-relaxed">
              quarterly dispatches on new projects, materials and craft.
              no marketing.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-6 flex max-w-md items-end gap-3 border-b border-line pb-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                className="flex-1 bg-transparent py-2 text-ink placeholder:text-ink-2/60 focus:outline-none"
              />
              <button
                type="submit"
                className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink hover:text-walnut transition-colors"
              >
                {submitted ? "thank you ·" : "subscribe →"}
              </button>
            </form>
            <div className="mt-10 flex items-center gap-5">
              <a
                href={site.social.instagram}
                aria-label="instagram"
                target="_blank"
                rel="noreferrer"
                className="text-ink-2 hover:text-ink transition-colors"
              >
                <SocialIcon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                className="text-ink-2 hover:text-ink transition-colors"
              >
                <SocialIcon name="linkedin" className="h-4 w-4" />
              </a>
              <a
                href={site.social.youtube}
                aria-label="youtube"
                target="_blank"
                rel="noreferrer"
                className="text-ink-2 hover:text-ink transition-colors"
              >
                <SocialIcon name="youtube" className="h-4 w-4" />
              </a>
              <a
                href={site.social.pinterest}
                aria-label="pinterest"
                target="_blank"
                rel="noreferrer"
                className="text-ink-2 hover:text-ink transition-colors"
              >
                <SocialIcon name="pinterest" className="h-4 w-4" />
              </a>
              <a
                href={site.social.vimeo}
                aria-label="vimeo"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-2 hover:text-ink"
              >
                vimeo
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-ink-2 hover:text-ink text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-2">
          <div className="space-y-1">
            <p className="font-mono uppercase tracking-[0.18em]">
              encore atelier
            </p>
            <p>
              {site.address.line2}, {site.address.city}, {site.address.region}
            </p>
            <p>{site.email}</p>
          </div>
          <div className="md:text-center">
            <p className="font-mono uppercase tracking-[0.18em]">
              global headquarters
            </p>
            <p className="mt-1">
              {site.address.country.toUpperCase()} ·{" "}
              <span className="text-ink">{site.phone}</span>
            </p>
          </div>
          <div className="md:text-right">
            <div className="flex md:justify-end items-center gap-4">
              <LanguageSwitcher />
              <span>© {new Date().getFullYear()} encore wood crafts llp.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
