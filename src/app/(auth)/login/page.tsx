import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, KeyRound } from "lucide-react";
import { Logo } from "@/components/site/logo";

export const metadata: Metadata = {
  title: "log-in",
  description:
    "personal area for architects, partners and journalists. access the encore CAD library, press kits and partner portal.",
};

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-paper">
      <header className="px-5 md:px-8 lg:px-12 py-6 flex items-center justify-between border-b border-line">
        <Logo />
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-2 hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          back to site
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 md:px-8 py-16">
        <div className="w-full max-w-md">
          <div className="text-center">
            <KeyRound
              className="h-7 w-7 mx-auto text-walnut"
              strokeWidth={1.2}
            />
            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
              encore log-in
            </p>
            <h1 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight leading-[1]">
              your personal
              <br />
              <span className="italic">area.</span>
            </h1>
            <p className="mt-4 text-ink-2 text-sm leading-relaxed">
              for architects, partners, journalists and clients with active
              commissions.
            </p>
          </div>

          <form className="mt-12 space-y-5 border border-line p-8 md:p-10 bg-paper">
            <div>
              <label className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2 mb-2">
                email
              </label>
              <input
                type="email"
                placeholder="you@practice.com"
                className="w-full bg-transparent border-b border-line py-2 text-ink placeholder:text-ink-2/60 focus:outline-none focus:border-ink"
              />
            </div>
            <div>
              <label className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2 mb-2">
                password
              </label>
              <input
                type="password"
                className="w-full bg-transparent border-b border-line py-2 text-ink focus:outline-none focus:border-ink"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              log-in
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <div className="pt-3 flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-ink-2">
              <Link
                href="/login#forgot"
                className="hover:text-ink"
              >
                forgot password?
              </Link>
              <Link
                href="/architects#cad-library"
                className="hover:text-ink"
              >
                create account →
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-xs text-ink-2 leading-relaxed">
            this is a stub for the personal area. authentication is not yet
            implemented.
            <br />
            for cad library access,{" "}
            <Link
              href="/architects#cad-library"
              className="text-ink underline-offset-4 hover:underline"
            >
              register here
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="border-t border-line px-5 md:px-8 lg:px-12 py-5 text-xs text-ink-2 flex items-center justify-between">
        <span>© {new Date().getFullYear()} encore wood crafts llp.</span>
        <Link href="/legal/privacy" className="hover:text-ink">
          privacy & cookie policy
        </Link>
      </footer>
    </div>
  );
}
