import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, blogBySlug } from "@/data/blog";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · timber views`,
      description: post.excerpt,
      images: [{ url: post.image, width: 1800, height: 1200 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
              timber views · {post.index}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 display-tight text-[clamp(2.4rem,6.5vw,5.6rem)] font-light text-ink leading-[0.98]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 flex items-center gap-4 text-sm text-ink-2 font-mono uppercase tracking-[0.18em] text-[0.65rem]">
              <span>
                {new Date(post.date).toLocaleDateString("en", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </Reveal>
        </div>

        <ClipReveal className="mt-12 mb-12">
          <div className="relative aspect-[16/9] w-full bg-stone">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>

        <div className="mx-auto max-w-prose px-5 md:px-8 space-y-8 pb-20">
          <p className="display text-xl md:text-2xl text-ink leading-snug italic">
            {post.excerpt}
          </p>
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-ink text-base md:text-lg leading-[1.85]">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="border-t border-line py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            all timber views
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            specify a system
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <p className="eyebrow">further reading</p>
          <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
            related essays
          </h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width:640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-walnut">
                    {p.series} · {p.index}
                  </p>
                  <h3 className="mt-2 display text-lg font-light tracking-tight">
                    {p.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
