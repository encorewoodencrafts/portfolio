import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { products, productBySlug } from "@/data/products";
import { ClipReveal, Reveal } from "@/components/site/reveal";
import { WoodSpeciesSelector } from "@/components/site/wood-species-selector";

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

  const otherFamilies = products.filter((p) => p.slug !== slug);

  const familyEyebrow =
    product.family === "wooden-doors"
      ? "encore wooden door programme"
      : product.family === "glass-doors"
        ? "encore glass door programme"
        : product.family === "aluminium-doors"
          ? "encore aluminium door programme"
          : "encore railings programme";

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
            {product.code} · {familyEyebrow}
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

      <section className="border-t border-line py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">overview</p>
            <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
              {product.tagline}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-12">
            <Reveal>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
                {product.features.map((f, i) => (
                  <li key={f.title} className="border-t border-line pt-5">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-brand-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 display text-lg font-light tracking-tight text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                      {f.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="sub-types"
        className="border-t border-line bg-paper-2/40 py-12 sm:py-16 md:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow">sub-types</p>
              <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight leading-[0.95]">
                {product.subTypes.length === 5 ? "five" : product.subTypes.length === 3 ? "three" : product.subTypes.length}{" "}
                <span className="italic">variations.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-ink-2 leading-relaxed max-w-md md:ml-auto md:text-right">
                Mix sub-types, hardware and finishes into one bespoke piece.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {product.subTypes.map((s, i) => (
              <li key={s.slug}>
                <ClipReveal delay={(i % 5) * 0.05}>
                  <article className="group bg-paper border border-line h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-3">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-walnut">
                        {String(i + 1).padStart(2, "0")} ·{" "}
                        {String(product.subTypes.length).padStart(2, "0")}
                      </p>
                      <h3 className="display text-2xl font-light tracking-tight text-ink">
                        {s.name}
                      </h3>
                      <p className="text-sm text-ink-2 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </article>
                </ClipReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow">key facts</p>
            <h2 className="mt-3 display text-3xl md:text-4xl font-light tracking-tight">
              built for <span className="italic">indian living</span>
            </h2>
            <p className="mt-4 max-w-md text-ink-2 leading-relaxed text-sm">
              Engineered for Indian homes and weather, with one finish palette
              across every range.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="border-t border-line pt-3">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                  range
                </dt>
                <dd className="mt-1 display text-2xl text-ink">
                  {product.sightline}
                </dd>
              </div>
              <div className="border-t border-line pt-3">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
                  max size
                </dt>
                <dd className="mt-1 display text-2xl text-ink">
                  {product.maxPanel}
                </dd>
              </div>
            </dl>
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
        <section className="border-t border-line py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
            <WoodSpeciesSelector species={product.species} />
          </div>
        </section>
      ) : null}

      <section
        className="relative overflow-hidden border-t border-line text-cream py-12 sm:py-16 md:py-24 transition-[background] duration-700"
        style={{ background: "var(--brand-cta)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 right-0 h-[120%] w-[60%]"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 20%, var(--brand-glow), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream/70">
              specify {product.name}
            </p>
            <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1]">
              ready to design
              <br />
              <span className="italic">your opening?</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-cream/80 leading-relaxed max-w-md">
              We&rsquo;ll send a tailored quote based on your drawings and
              finishes.
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
              architects info & spec library
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <p className="eyebrow">explore the encore family</p>
              <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
                other families
              </h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherFamilies.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                    <Image
                      src={p.hero}
                      alt={p.name}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-3 display text-2xl font-light tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-2">{p.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
