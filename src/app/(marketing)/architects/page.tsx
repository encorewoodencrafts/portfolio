import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { products } from "@/data/products";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { CadRegisterForm } from "@/components/site/cad-register-form";

export const metadata: Metadata = {
  title: "architects info",
  description:
    "specification sheets, monograph and a fully indexed CAD library for encore wooden doors, glass doors and railings. for architects, specifiers and consultants.",
};

const catalogues = [
  {
    title: "encore monograph",
    subtitle: "256 pages · 240 mm × 320 mm · oak / walnut binding",
    file: "encore-monograph-2026.pdf",
    size: "84 mb",
  },
  {
    title: "product overview",
    subtitle: "every family · technical summary",
    file: "encore-overview.pdf",
    size: "12 mb",
  },
  {
    title: "wooden doors · spec sheet",
    subtitle: "veneer · laminated · solid panel · skin · paint",
    file: "encore-wooden-doors.pdf",
    size: "9 mb",
  },
  {
    title: "glass doors · spec sheet",
    subtitle: "centre · lift-slide · multi-track · corner · bifold",
    file: "encore-glass-doors.pdf",
    size: "9 mb",
  },
  {
    title: "railings · spec sheet",
    subtitle: "wood · frameless glass · metal balustrades",
    file: "encore-railings.pdf",
    size: "7 mb",
  },
  {
    title: "customised collection",
    subtitle: "22 reference designs · large-format catalogue",
    file: "encore-customised-collection.pdf",
    size: "14 mb",
  },
  {
    title: "sustainability report",
    subtitle: "forest-to-facade pledge · 2026",
    file: "encore-sustainability-2026.pdf",
    size: "6 mb",
  },
];

export default function ArchitectsPage() {
  return (
    <>
      <PageHero
        kicker="no.04 · for architects"
        eyebrow="all the encore goodies"
        index="04"
        title={
          <>
            architects
            <br />
            <span className="italic">info.</span>
          </>
        }
        description="specification sheets, the encore monograph, and a fully indexed CAD library — sections, plans and isometric assemblies for every wooden door, glass slider hardware variant and railing system in our catalogue. registration is required to access the CAD library."
        meta={
          <ul className="space-y-3 text-sm text-ink-2">
            <li className="flex justify-between gap-4">
              <span>catalogues</span>
              <span className="text-ink font-mono text-xs">
                {catalogues.length}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span>cad blocks</span>
              <span className="text-ink font-mono text-xs">240+</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>formats</span>
              <span className="text-ink font-mono text-xs">dwg · pdf · 3dm</span>
            </li>
          </ul>
        }
      />

      <section
        id="catalogues"
        className="py-16 md:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <p className="eyebrow">catalogues & spec sheets</p>
            <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
              view documents
            </h2>
          </div>
          <ul className="divide-y divide-line border-t border-b border-line">
            {catalogues.map((c, i) => (
              <li key={c.file}>
                <Reveal delay={(i % 4) * 0.04}>
                  <a
                    href="#"
                    className="group flex items-center justify-between gap-6 py-5 hover:bg-paper-2 transition-colors -mx-3 px-3 rounded-sm"
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <FileText
                        className="h-5 w-5 flex-none text-walnut"
                        strokeWidth={1.2}
                      />
                      <div className="min-w-0">
                        <p className="display text-lg md:text-xl font-light tracking-tight truncate">
                          {c.title}
                        </p>
                        <p className="text-xs text-ink-2 truncate">
                          {c.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-none">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                        pdf · {c.size}
                      </span>
                      <Download
                        className="h-4 w-4 text-ink group-hover:text-walnut transition-colors"
                        strokeWidth={1.4}
                      />
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="cad-library"
        className="border-t border-line py-16 md:py-24 bg-paper-2/40 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">encore CAD library</p>
            <h2 className="mt-3 display text-4xl md:text-5xl font-light tracking-tight leading-[0.95]">
              register to
              <br />
              <span className="italic">access details.</span>
            </h2>
            <p className="mt-6 max-w-md text-ink-2 leading-relaxed">
              our CAD library contains horizontal and vertical sections, plan
              details, isometric assemblies and threshold drawings for every
              encore family — in dwg, rvt and ifc.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-ink-2">
              {products.map((p) => (
                <li key={p.slug} className="flex items-center gap-3">
                  <span className="inline-block h-px w-4 bg-walnut" />
                  <span>{p.name} — sections, plans, ifc</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="inline-block h-px w-4 bg-walnut" />
                <span>customisation options — sections per accessory</span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <CadRegisterForm />
          </div>
        </div>
      </section>

      <section
        id="press"
        className="border-t border-line py-16 md:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow">press & architecture platforms</p>
            <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
              for editors,
              <br />
              <span className="italic">writers, curators.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
              press kits, hi-resolution photography, and project credit listings
              are available on request to journalists and editors.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              press contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
