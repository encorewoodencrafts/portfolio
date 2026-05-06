import { cn } from "@/lib/cn";
import { Reveal } from "@/components/site/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-2 display text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
