import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { QuoteForm } from "@/components/site/quote-form";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { faqItems } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "contact",
  description:
    "request a quote, ask the atelier, or visit our hyderabad workshop. encore replies within one working day.",
};

const offices = [
  {
    region: "atelier · headquarters",
    city: "hyderabad, telangana",
    body: `${site.address.line2}\n${site.address.city}, ${site.address.region} ${site.address.postal}\n${site.address.country}`,
    email: site.email,
    phone: site.phone,
  },
  {
    region: "south india studio",
    city: "bengaluru, karnataka",
    body: "no. 24, 100-foot road\nindiranagar, bengaluru 560038\nkarnataka",
    email: "bengaluru@encorewoodcrafts.in",
    phone: "+91 91234 56781",
  },
  {
    region: "middle east office",
    city: "dubai, uae",
    body: "office 1209, jumeirah lake towers\ndubai\nuae",
    email: "dubai@encorewoodcrafts.in",
    phone: "+971 4 555 0344",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="talk to the atelier"
        title={
          <>
            request a
            <br />
            <span className="italic">quote.</span>
          </>
        }
        description="every encore opening is a bespoke commission. share what you are dreaming of and we will reply within five working days with an initial proposal."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">direct contact</p>
            <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
              speak to us
            </h2>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail
                  className="h-3.5 w-3.5 text-walnut"
                  strokeWidth={1.4}
                />
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink hover:text-walnut transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-3.5 w-3.5 text-walnut"
                  strokeWidth={1.4}
                />
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="text-ink hover:text-walnut transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-3.5 w-3.5 text-walnut mt-0.5"
                  strokeWidth={1.4}
                />
                <span className="text-ink-2">
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.region}
                </span>
              </li>
            </ul>
            <p className="mt-10 text-xs text-ink-2 leading-relaxed">
              for general enquiries, please use the form. for press and
              journalism, write to{" "}
              <span className="text-ink">press@encorewoodcrafts.in</span>.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">before you write</p>
              <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight leading-[0.95]">
                often-asked
                <br />
                <span className="italic">first.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-ink-2 text-sm md:text-base leading-relaxed">
                a few of the most common architect questions answered up
                front. see the{" "}
                <Link
                  href="/faq"
                  className="text-ink underline underline-offset-4 hover:text-walnut"
                >
                  full faq
                </Link>{" "}
                for more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-9 lg:col-start-2">
              <FaqAccordion items={faqItems.slice(0, 4)} defaultOpen={null} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20 bg-paper-2/40">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <p className="eyebrow">offices</p>
            <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
              find us
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {offices.map((o) => (
              <li
                key={o.region}
                className="bg-paper p-8 md:p-10"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
                  {o.region}
                </p>
                <h3 className="mt-2 display text-2xl font-light tracking-tight">
                  {o.city}
                </h3>
                <p className="mt-4 text-sm text-ink-2 whitespace-pre-line leading-relaxed">
                  {o.body}
                </p>
                <div className="mt-5 space-y-1.5 text-sm">
                  <p>
                    <a
                      href={`mailto:${o.email}`}
                      className="text-ink hover:text-walnut transition-colors"
                    >
                      {o.email}
                    </a>
                  </p>
                  <p className="text-ink-2">{o.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
