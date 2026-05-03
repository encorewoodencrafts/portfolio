import type { AddOn } from "@/data/addons";

const baseProps = {
  viewBox: "0 0 80 80",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AddOnIcon({
  type,
  className,
}: {
  type: AddOn["icon"];
  className?: string;
}) {
  switch (type) {
    case "screen":
      return (
        <svg {...baseProps} className={className}>
          <rect x="14" y="14" width="52" height="52" />
          <path d="M14 26h52M14 38h52M14 50h52M14 62h52M26 14v52M38 14v52M50 14v52M62 14v52" />
          <rect x="14" y="14" width="52" height="52" strokeWidth={1.5} />
        </svg>
      );
    case "motor":
      return (
        <svg {...baseProps} className={className}>
          <circle cx="40" cy="40" r="22" />
          <circle cx="40" cy="40" r="10" />
          <path d="M40 18v8M40 54v8M18 40h8M54 40h8M24.5 24.5l5.7 5.7M49.8 49.8l5.7 5.7M24.5 55.5l5.7-5.7M49.8 30.2l5.7-5.7" />
        </svg>
      );
    case "lock":
      return (
        <svg {...baseProps} className={className}>
          <rect x="22" y="36" width="36" height="30" />
          <path d="M30 36V26a10 10 0 0120 0v10" />
          <circle cx="40" cy="50" r="3.5" />
          <path d="M40 53.5v6" />
        </svg>
      );
    case "softclose":
      return (
        <svg {...baseProps} className={className}>
          <rect x="14" y="22" width="36" height="36" />
          <rect x="50" y="22" width="16" height="36" />
          <path d="M44 38h22" />
          <path d="M58 32l8 6-8 6" />
        </svg>
      );
    case "pivot":
      return (
        <svg {...baseProps} className={className}>
          <rect x="14" y="12" width="52" height="56" />
          <path d="M40 12v56" />
          <path d="M28 26a18 18 0 0124 0" strokeDasharray="2 2" />
          <circle cx="40" cy="40" r="2" fill="currentColor" />
        </svg>
      );
    case "drain":
      return (
        <svg {...baseProps} className={className}>
          <rect x="14" y="32" width="52" height="16" />
          <path d="M14 38h52M14 42h52" />
          <path d="M22 32v16M30 32v16M38 32v16M46 32v16M54 32v16M62 32v16" />
          <path d="M40 50v6" />
          <path d="M37 56l3 4 3-4" />
        </svg>
      );
    case "silence":
      return (
        <svg {...baseProps} className={className}>
          <path d="M22 32h10l12-10v36L32 48H22z" />
          <path d="M52 30c4 4 4 16 0 20" />
          <path d="M58 26c7 7 7 21 0 28" />
          <path d="M50 26l16 28M66 26L50 54" strokeDasharray="1 3" />
        </svg>
      );
    case "hurricane":
      return (
        <svg {...baseProps} className={className}>
          <circle cx="40" cy="40" r="24" />
          <path d="M40 16c-8 8-8 16 0 24s8 16 0 24" />
          <path d="M16 40c8-8 16-8 24 0s16 8 24 0" />
          <circle cx="40" cy="40" r="4" />
        </svg>
      );
    case "feather":
      return (
        <svg {...baseProps} className={className}>
          <path d="M22 58l30-30a14 14 0 1116 16L40 72l-18 4 4-18z" />
          <path d="M22 58l18-2 2-18M30 50l16-2 2-16" />
        </svg>
      );
  }
}
