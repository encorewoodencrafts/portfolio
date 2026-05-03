import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "frequently asked",
  description:
    "answers to the questions architects most often ask before specifying encore woodcrafts — lead times, materials, warranty, pricing, install and service.",
};

const categories: { id: string; label: string }[] = [
  { id: "lead-time", label: "lead time" },
  { id: "materials", label: "materials" },
  { id: "warranty", label: "warranty" },
  { id: "pricing", label: "pricing" },
  { id: "install", label: "install" },
  { id: "service", label: "service" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="for architects · for owners"
        title={
          <>
            things people
            <br />
            <span className="italic">ask the atelier.</span>
          </>
        }
        description="lead times, materials, warranty, pricing, install and aftercare. if you don't see your question, write to studio@encorewoodcrafts.in or message us on whatsapp."
      />

      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <aside className="hidden lg:block lg:col-span-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-2 mb-4">
                browse by topic
              </p>
              <ul className="space-y-1 sticky top-24">
                {categories.map((c) => {
                  const count = faqItems.filter(
                    (f) => f.category === c.id
                  ).length;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="flex items-baseline justify-between gap-3 py-2 border-b border-line text-ink hover:text-walnut transition-colors"
                      >
                        <span className="display text-base">{c.label}</span>
                        <span className="font-mono text-[0.6rem] text-ink-2">
                          {count.toString().padStart(2, "0")}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div className="col-span-12 lg:col-span-9">
              {categories.map((c) => {
                const items = faqItems.filter((f) => f.category === c.id);
                if (!items.length) return null;
                return (
                  <section key={c.id} id={c.id} className="mb-14 scroll-mt-32">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut mb-3">
                      {c.label}
                    </p>
                    <FaqAccordion items={items} defaultOpen={null} />
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/40 py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow">still have a question?</p>
          <h2 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight">
            speak to the atelier directly.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-ink-2">
            we reply to every architect within one working day. for urgent
            questions, whatsapp is the fastest channel.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper bg-ink rounded-sm px-5 py-3 hover:bg-walnut transition-colors"
            >
              start a conversation →
            </Link>
            <a
              href="https://wa.me/919123456780"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              whatsapp the atelier
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
