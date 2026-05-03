import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "news",
  description: "the latest from the encore atelier — new products, projects and events.",
};

export default function NewsPage() {
  const [featured, ...rest] = news;
  return (
    <>
      <PageHero
        eyebrow="what's new at encore"
        title={
          <>
            news.
          </>
        }
        description="dispatches from the atelier — new products, completed projects, events and announcements."
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <Link href={`/news/${featured.slug}`} className="group block">
            <ClipReveal>
              <div className="relative aspect-[16/9] overflow-hidden bg-stone">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
                />
              </div>
            </ClipReveal>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-walnut">
                  {featured.kicker}
                </p>
                <p className="mt-2 text-xs text-ink-2">
                  {new Date(featured.date).toLocaleDateString("en", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="display text-3xl md:text-5xl font-light tracking-tight text-ink leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-3xl text-ink-2 leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {rest.map((n, i) => (
              <li key={n.slug}>
                <Reveal delay={(i % 3) * 0.05}>
                  <Link href={`/news/${n.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={n.image}
                        alt={n.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 space-y-1.5">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-walnut">
                        {n.kicker}
                      </p>
                      <h3 className="display text-xl md:text-2xl font-light tracking-tight text-ink leading-snug">
                        {n.title}
                      </h3>
                      <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
                        {n.excerpt}
                      </p>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                        {new Date(n.date).toLocaleDateString("en", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
