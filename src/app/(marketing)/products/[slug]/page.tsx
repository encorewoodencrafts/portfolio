import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { products, productBySlug } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { WoodSpeciesSelector } from "@/components/site/wood-species-selector";
import { SightlineDiagram } from "@/components/site/sightline-diagram";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.excerpt,
    openGraph: {
      title: `${product.name} · encore`,
      description: product.excerpt,
      images: [{ url: product.detailHero, width: 2400, height: 1500 }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 4);

  const familyEyebrow =
    product.family === "wood-door"
      ? "encore wood door system"
      : product.family === "aluminium"
        ? "encore aluminium system"
        : "encore window system";

  return (
    <>
      <section className="relative h-[88svh] w-full overflow-hidden bg-charcoal text-cream">
        <ClipReveal className="absolute inset-0">
          <Image
            src={product.detailHero}
            alt={product.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/15 to-charcoal/80" />
        </ClipReveal>
        <div className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-cream/80 anim-fade-up">
            {product.code} series · {familyEyebrow}
          </p>
          <h1
            className="mt-4 display-tight text-[clamp(3rem,9vw,9rem)] font-light text-cream leading-none anim-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            {product.name}
          </h1>
          <p
            className="mt-6 max-w-2xl text-cream/85 text-base md:text-lg leading-relaxed anim-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {product.tagline}
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">overview</p>
            <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
              {product.tagline}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-12">
            <Reveal>
              <p className="text-ink text-lg md:text-xl leading-[1.7] max-w-3xl">
                {product.description}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
                {product.features.map((f) => (
                  <li key={f.title} className="bg-paper p-6 md:p-8">
                    <h3 className="display text-xl text-ink">{f.title}</h3>
                    <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                      {f.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">technical drawing</p>
            <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
              the <span className="italic">{product.sightline}</span> sightline
            </h2>
            <p className="mt-4 max-w-md text-ink-2 leading-relaxed text-sm">
              the vertical interface between two adjacent panels — measured at
              the meeting stile. encore {product.code} reduces this to{" "}
              <span className="text-ink">{product.sightline}</span>, the slimmest
              in its class.
            </p>
            <Reveal delay={0.08}>
              <div className="mt-10">
                <SightlineDiagram
                  sightline={product.sightline}
                  code={product.code}
                />
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow">specifications</p>
            <div className="mt-3 space-y-10">
              {product.specs.map((g) => (
                <Reveal key={g.title}>
                  <div>
                    <h3 className="display text-xl text-ink">{g.title}</h3>
                    <dl className="mt-4 divide-y divide-line border-t border-line">
                      {g.rows.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 py-3 text-sm"
                        >
                          <dt className="text-ink-2">{row.label}</dt>
                          <dd className="text-ink font-mono text-[0.8rem] break-words">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              ))}
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors w-fit"
              >
                <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
                download {product.code} spec sheet (pdf)
              </a>
            </div>
          </div>
        </div>
      </section>

      {product.species && product.species.length > 0 ? (
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
            <WoodSpeciesSelector species={product.species} />
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <p className="eyebrow">gallery</p>
          <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight max-w-3xl">
            {product.name} <span className="italic">in situ.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ClipReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src={product.imageA}
                  alt={`${product.name} interior`}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ClipReveal>
            <ClipReveal delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone md:mt-24">
                <Image
                  src={product.imageB}
                  alt={`${product.name} exterior`}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-charcoal text-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/70">
              specify {product.name}
            </p>
            <h2 className="mt-4 display text-4xl md:text-6xl font-light tracking-tight leading-[0.95]">
              ready to design
              <br />
              <span className="italic">your opening?</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-cream/80 leading-relaxed max-w-md">
              our atelier produces a tailored quote within five working days,
              based on your drawings, climate and timber preferences.
            </p>
          </div>
          <div className="col-span-12 mt-10 flex flex-wrap gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream border-b border-cream/60 pb-1 hover:text-brass hover:border-brass transition-colors"
            >
              request a quote
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/architects"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/80 border-b border-cream/40 pb-1 hover:text-cream hover:border-cream transition-colors"
            >
              architects info & cad library
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">explore the encore family</p>
              <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
                other systems
              </h2>
            </div>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                    <Image
                      src={p.hero}
                      alt={p.name}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-3 display text-xl font-light tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-2">{p.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
