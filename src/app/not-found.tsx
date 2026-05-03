import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/site/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <header className="px-5 md:px-8 lg:px-12 py-6 flex items-center justify-between border-b border-line">
        <Logo />
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-2 hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          home
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-5 md:px-8 py-16">
        <div className="text-center max-w-md">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
            404 · this opening leads nowhere
          </p>
          <h1 className="mt-6 display-tight text-7xl md:text-9xl font-light text-ink leading-none">
            not<br />
            <span className="italic">found.</span>
          </h1>
          <p className="mt-6 text-ink-2 leading-relaxed">
            the page you were looking for does not exist — or has been moved to
            a new home in the encore atelier.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            return to the atelier →
          </Link>
        </div>
      </main>
    </div>
  );
}
