"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/site/reveal";

export function BlogTeaser() {
  return (
    <section className="border-t border-line py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">the latest from our atelier blog</p>
            <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1]">
              atelier views
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-ink hover:text-walnut transition-colors flex-none"
          >
            view more →
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {blogPosts.slice(0, 4).map((post, i) => (
            <li key={post.slug} className="bg-paper">
              <Reveal delay={(i % 4) * 0.04}>
                <Link href={`/blog/${post.slug}`} className="group block p-6 md:p-8 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-walnut">
                    {post.series} · {post.index}
                  </p>
                  <h3 className="mt-2 display text-xl md:text-2xl font-light tracking-tight text-ink leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2 group-hover:text-walnut transition-colors">
                    read
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
