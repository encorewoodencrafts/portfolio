// Central brand-content mapping. Shared by server components, the header/
// footer and the brand route guard so "what belongs to wood vs aluminium"
// is defined in exactly one place.

export type Brand = "wood" | "aluminium";
// A piece of content either belongs to one range or to "both" (e.g. railings,
// range-wide news), in which case it always shows regardless of the toggle.
export type BrandTag = Brand | "both";

// Which product families each range surfaces. Railings sit under both.
export const FAMILIES_BY_BRAND: Record<Brand, string[]> = {
  wood: ["wooden-doors", "railings"],
  aluminium: ["glass-doors", "aluminium-doors", "railings"],
};

/** The brand a product family belongs to (railings → "both"). */
export function familyBrandTag(family: string): BrandTag {
  if (family === "wooden-doors") return "wood";
  if (family === "glass-doors" || family === "aluminium-doors")
    return "aluminium";
  return "both";
}

/** Does a tagged item show for the selected brand? */
export function matchesBrand(tag: BrandTag, brand: Brand): boolean {
  return tag === "both" || tag === brand;
}
