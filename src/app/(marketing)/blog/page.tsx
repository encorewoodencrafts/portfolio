import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/site/page-hero";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "blog · atelier views",
  description:
    "atelier views — long-form essays from the encore atelier on craft, materials, hardware and the philosophy of the wooden door, glass slider, aluminium door and railing.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="long form · monthly blog"
        eyebrow="the atelier blog"
        index="08"
        title={
          <>
            atelier
            <br />
            <span className="italic">views.</span>
          </>
        }
        description="long-form essays from the encore atelier on craft, materials, hardware and the philosophy of the wooden door, glass slider, aluminium door and railing. one new entry each month."
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-16 md:space-y-24">
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              className={`grid grid-cols-12 gap-6 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="col-span-12 lg:col-span-6">
                <ClipReveal>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width:1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                  </Link>
                </ClipReveal>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Reveal>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-walnut">
                    {post.series} · {post.index}
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 display text-3xl md:text-5xl font-light tracking-tight text-ink leading-[1.05]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-walnut transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-md text-ink-2 leading-relaxed text-base md:text-lg italic">
                    {post.excerpt}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-6 flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                    <span>
                      {new Date(post.date).toLocaleDateString("en", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.16}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
                  >
                    read the essay →
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
