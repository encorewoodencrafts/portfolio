import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { news, newsBySlug } from "@/data/news";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: `${item.title} · encore news`,
      description: item.excerpt,
      images: [{ url: item.image, width: 1800, height: 1200 }],
    },
  };
}

export default async function NewsItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsBySlug(slug);
  if (!item) notFound();
  const related = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
              {item.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 display-tight text-[clamp(2.4rem,6.5vw,5.6rem)] font-light text-ink leading-[0.98]">
              {item.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-ink-2 text-base">
              {new Date(item.date).toLocaleDateString("en", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </Reveal>
        </div>

        <ClipReveal className="mt-8 mb-8 md:mt-12 md:mb-12">
          <div className="relative aspect-[16/9] w-full bg-stone">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>

        <div className="mx-auto max-w-3xl px-5 md:px-8 space-y-7 pb-20">
          <p className="display text-xl md:text-2xl text-ink leading-snug italic">
            {item.excerpt}
          </p>
          {item.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-ink text-base md:text-lg leading-[1.8]">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="border-t border-line py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            all news
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            talk to the atelier
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <p className="eyebrow">further reading</p>
          <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
            related news
          </h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((n) => (
              <li key={n.slug}>
                <Link href={`/news/${n.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      sizes="(min-width:640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-3 display text-lg font-light tracking-tight">
                    {n.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink-2 line-clamp-2">
                    {n.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
