import { cn } from "@/lib/cn";

/**
 * A slow, hypnotic horizontal marquee — used as a section divider on long pages.
 *
 * The component renders the phrase array twice in sequence so the css animation
 * (which translates by -50%) tiles seamlessly. It is decorative; the children
 * are aria-hidden.
 */
export function Marquee({
  phrases,
  separator = "·",
  reverse = false,
  className,
  size = "md",
  tone = "ink",
}: {
  phrases: string[];
  separator?: string;
  reverse?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  /** "ink" theme-aware, "cream" for use on dark surfaces, "walnut" accent */
  tone?: "ink" | "cream" | "walnut";
}) {
  const sizes = {
    sm: "text-3xl md:text-5xl",
    md: "text-5xl md:text-7xl",
    lg: "text-6xl md:text-8xl lg:text-[9rem]",
  } as const;

  const tones = {
    ink: "text-ink",
    cream: "text-cream",
    walnut: "text-walnut",
  } as const;

  // Render the loop content as two identical halves
  const Content = () => (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {phrases.map((p, i) => (
        <span key={i} className="flex items-center">
          <span>{p}</span>
          <span
            className="mx-8 md:mx-12 inline-block h-[0.6em] w-px bg-current opacity-30 align-middle"
            aria-hidden
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden marquee-mask py-6 md:py-10 select-none",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-0 anim-marquee will-change-transform",
          reverse && "[animation-direction:reverse]",
          "display font-light tracking-tight italic",
          sizes[size],
          tones[tone]
        )}
      >
        <Content />
        <Content />
      </div>
    </div>
  );
}
