import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "pt-32 md:pt-40 pb-12 md:pb-20 border-b border-line",
        className
      )}
    >
      <div className="mx-auto max-w-[1640px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-tight text-[clamp(2.5rem,7vw,7rem)] font-light text-ink leading-[0.95]">
              {title}
            </h1>
            {description && (
              <p className="mt-8 max-w-2xl text-ink-2 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
