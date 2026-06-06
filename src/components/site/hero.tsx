"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useBrand, type BrandName } from "@/components/site/brand-provider";
import { cn } from "@/lib/cn";

// Imagery is served from the atelier's Shopify CDN (whitelisted in
// next.config.ts). The fallback image doubles as the <video> poster, so a
// slow / failed / reduced-motion load always shows the right brand visual.
const SHOPIFY = "https://steel-doors-2.myshopify.com/cdn/shop";

// Brand hero clips live in /public/video (door footage under the Mixkit
// free licence). Swap the files in place to change the videos — keep the
// same paths.
const BRAND_HERO: Record<
  BrandName,
  {
    image: string;
    video: string;
    eyebrowLong: string;
    eyebrowShort: string;
    line1: string;
    line2: string;
    intro: string;
    alt: string;
  }
> = {
  wood: {
    image: `${SHOPIFY}/files/Fill_the_white_space_on_side_with_out_disturbing_t_delpmaspu.jpg`,
    video: "/video/wood-doors.mp4",
    eyebrowLong: "Est. 2014 · Hyderabad · Wooden doors & railings",
    eyebrowShort: "Est. 2014 · Hyderabad",
    line1: "Wooden doors,",
    line2: "beautifully made.",
    intro:
      "Custom wooden doors and railings, made and fitted by our own team in Hyderabad.",
    alt: "Encore custom wooden door with warm grain and deep shadow",
  },
  aluminium: {
    image: `${SHOPIFY}/files/Fill_the_white_space_in_the_image_with_out_stretch_delpmaspu.jpg`,
    video: "/video/aluminium-doors.mp4",
    eyebrowLong: "Est. 2014 · Hyderabad · Aluminium & glass doors",
    eyebrowShort: "Est. 2014 · Hyderabad",
    line1: "Aluminium & glass,",
    line2: "precisely framed.",
    intro:
      "Aluminium and glass doors, engineered and installed by our own team in Hyderabad.",
    alt: "Encore aluminium-framed glass sliding door in a modern interior",
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { brand } = useBrand();
  const b = BRAND_HERO[brand];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // Cursor "light rake": a soft specular highlight that follows the pointer
  // across the footage — light grazing real grain / brushed metal. Spring-
  // smoothed so it trails the cursor with a touch of weight. Desktop +
  // motion-allowed only; the gradient is built reactively with a template.
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(35);
  const rakeX = useSpring(rawX, { stiffness: 120, damping: 24, mass: 0.6 });
  const rakeY = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.6 });
  const rake = useMotionTemplate`radial-gradient(34rem 34rem at ${rakeX}% ${rakeY}%, rgba(255,255,255,0.22), rgba(255,255,255,0.05) 28%, transparent 60%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (prefersReduced || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={ref}
      onPointerMove={handlePointerMove}
      aria-label="encore hero"
      // bg-charcoal + text-cream are FIXED colours that never theme-shift —
      // the hero is always a dark surface with cream text on top. Kept at
      // 88svh on phones (rather than 100svh) so the "what's new" block below
      // crests above the fold and signals scroll.
      className="relative h-[88svh] md:h-[100svh] w-full overflow-hidden bg-charcoal text-cream"
    >
      <motion.div
        style={prefersReduced ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        {/* Fallback image — stays mounted under the video so a slow / failed
            / reduced-motion load always shows the right brand visual. */}
        <Image
          key={b.image}
          src={b.image}
          alt={b.alt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover"
        />
        {/* Brand background video — keyed on brand so switching the toggle
            loads the correct clip. Hidden when the visitor prefers reduced
            motion (the image fallback shows instead). */}
        {!prefersReduced && (
          <video
            key={b.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={b.image}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={b.video} type="video/mp4" />
          </video>
        )}

        {/* warm/cool brand tint — very light, just enough to colour-match
            the brand without dimming the footage. */}
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-700"
          style={{ background: "var(--brand-hero)" }}
        />
        {/* Copy scrim: an even, full-width wash anchored to the bottom — where
            all the copy sits — so the headline keeps strong contrast over
            bright footage (e.g. the light aluminium clip) from the very first
            paint, not only after scrolling. The upper ~40% of the frame stays
            clear so the video reads. A soft bottom-left radial adds depth. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,7,5,0.82)_0%,rgba(8,7,5,0.46)_26%,rgba(8,7,5,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_100%_at_10%_100%,rgba(8,7,5,0.5)_0%,rgba(8,7,5,0)_55%)]" />
      </motion.div>

      {/* cursor light-rake — sits above the media, below the copy. Mounted on
          desktop only; on touch / reduced-motion it simply never updates. */}
      {!prefersReduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] hidden mix-blend-soft-light md:block"
          style={{ background: rake }}
        />
      )}

      <Bracket
        className="absolute top-20 left-5 md:top-24 md:left-8 lg:left-12 h-8 md:h-10 w-8 md:w-10 text-cream/35"
        side="tl"
      />
      <Bracket
        className="absolute bottom-6 right-5 md:right-8 lg:right-12 h-8 md:h-10 w-8 md:w-10 text-cream/35"
        side="br"
      />

      <motion.div
        style={
          prefersReduced ? undefined : { opacity: contentOpacity, y: contentY }
        }
        className="relative z-10 mx-auto flex h-full max-w-[1640px] flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24"
      >
        <motion.p
          key={`${brand}-eyebrow`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          className="flex items-center gap-3 font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-cream/85"
        >
          <span
            className="inline-block h-px w-6 sm:w-12"
            style={{ background: "var(--brand-accent-light)" }}
          />
          <span className="truncate">
            <span className="hidden sm:inline">{b.eyebrowLong}</span>
            <span className="sm:hidden">{b.eyebrowShort}</span>
          </span>
        </motion.p>

        <h1
          key={`${brand}-headline`}
          className="mt-4 sm:mt-5 display-tight text-[clamp(2rem,9vw,8rem)] leading-[0.98] font-light text-cream"
          style={{ textShadow: "0 2px 28px rgba(0,0,0,0.72)" }}
        >
          <MaskLine
            text={b.line1}
            baseDelay={0.3}
            reduced={!!prefersReduced}
          />
          <MaskLine
            text={b.line2}
            italic
            baseDelay={0.45}
            reduced={!!prefersReduced}
          />
        </h1>

        <motion.p
          key={`${brand}-intro`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
          className="mt-5 sm:mt-7 max-w-md sm:max-w-2xl text-sm md:text-lg leading-relaxed text-cream/90"
          style={{ textShadow: "0 1px 18px rgba(0,0,0,0.72)" }}
        >
          {b.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: easeOut }}
          className="mt-8 md:mt-16 flex items-end justify-between gap-6"
        >
          <a
            href="#products"
            className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
            aria-label="scroll to products"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 group-hover:border-cream/70 transition-colors">
              <ArrowDown
                className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform"
                strokeWidth={1.5}
              />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em]">
              scroll
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            <Stat value="4" label="product families" />
            <Stat value="22" label="reference designs" />
            <Stat value="2014" label="atelier est." />
          </div>
        </motion.div>
      </motion.div>

      {/* slim top scrim — only enough to keep the nav bar legible, so the
          upper half of the video stays clear. */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-charcoal/70 to-transparent pointer-events-none" />
    </section>
  );
}

// One headline line, revealed word-by-word: each word rides up from behind
// a clipped mask so the line "rises into place" like set type. Under
// reduced-motion the words render plainly with no transform.
function MaskLine({
  text,
  italic,
  baseDelay,
  reduced,
}: {
  text: string;
  italic?: boolean;
  baseDelay: number;
  reduced: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-flex overflow-hidden align-bottom"
        >
          <motion.span
            className={cn("inline-block", italic && "italic")}
            initial={reduced ? false : { y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: baseDelay + i * 0.09,
              ease: easeOut,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-cream">
      <div className="display text-3xl md:text-4xl font-light leading-none">
        {value}
      </div>
      <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cream/70">
        {label}
      </div>
    </div>
  );
}

function Bracket({
  className,
  side,
}: {
  className?: string;
  side: "tl" | "br";
}) {
  if (side === "tl") {
    return (
      <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
        <path d="M40 1H1v39" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path d="M0 39h39V0" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
