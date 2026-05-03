import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Reveal } from "@/components/site/reveal";

export function FaqTeaser() {
  const featured = faqItems.slice(0, 5);
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">questions, answered</p>
            <h2 className="mt-3 display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
              before you
              <br />
              <span className="italic">specify encore.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <Reveal>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed">
                lead times, materials, warranty and pricing — the questions
                most often asked by architects who haven&rsquo;t worked with us
                before.
              </p>
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
              >
                read the full faq
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <FaqAccordion items={featured} defaultOpen={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
