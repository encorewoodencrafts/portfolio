import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects, projectBySlug } from "@/data/projects";
import { ClipReveal, Reveal } from "@/components/site/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} · encore reference works`,
      description: project.excerpt,
      images: [{ url: project.hero, width: 2400, height: 1500 }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[88svh] w-full overflow-hidden bg-ink text-paper">
        <ClipReveal className="absolute inset-0">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        </ClipReveal>
        <div className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-paper/80 anim-fade-up">
            reference works · {project.year}
          </p>
          <h1
            className="mt-4 display-tight text-[clamp(2.6rem,8vw,7.6rem)] font-light text-paper leading-none anim-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            {project.title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-paper/85 text-base md:text-lg leading-relaxed anim-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {project.excerpt}
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <dl className="space-y-6 text-sm">
              <Field label="architect" value={project.architect} />
              <Field label="location" value={project.location} />
              <Field label="year completed" value={project.year} />
              <Field label="encore systems" value={project.system} />
              <Field label="photography" value={project.photographer} />
            </dl>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-12">
            <div className="space-y-7 max-w-2xl">
              {project.body.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-ink text-base md:text-lg leading-[1.8]">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 space-y-12">
          {project.gallery.map((src, i) => (
            <ClipReveal key={src} delay={i * 0.04}>
              <div
                className={`relative overflow-hidden bg-stone ${
                  i % 2 === 0 ? "aspect-[16/9]" : "aspect-[4/3] lg:w-3/4 lg:mx-auto"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} interior view`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </ClipReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-12 md:py-16">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            all reference works
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
          >
            specify a similar system
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
          <div className="mb-10">
            <p className="eyebrow">explore further</p>
            <h2 className="mt-3 display text-3xl md:text-5xl font-light tracking-tight">
              related projects
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image
                      src={p.hero}
                      alt={p.title}
                      fill
                      sizes="(min-width:640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-3 display text-xl font-light tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink-2">
                    {p.architect} · {p.location}
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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-3">
      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2">
        {label}
      </dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}
