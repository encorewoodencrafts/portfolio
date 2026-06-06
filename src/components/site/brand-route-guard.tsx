"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBrand } from "@/components/site/brand-provider";
import { productBySlug } from "@/data/products";
import { projectBySlug } from "@/data/projects";
import { blogBySlug } from "@/data/blog";
import { newsBySlug } from "@/data/news";
import { familyBrandTag, type BrandTag } from "@/data/brand";

// Returns the range a detail page belongs to, or null for brand-neutral
// routes (listings, about, contact, …) that never need a redirect.
function constraintFor(pathname: string): BrandTag | null {
  const seg = pathname.split("/").filter(Boolean);
  if (seg.length < 2) return null;
  const [section, slug] = seg;
  switch (section) {
    case "products": {
      const p = productBySlug(slug);
      return p ? familyBrandTag(p.family) : null;
    }
    case "projects":
      return projectBySlug(slug)?.brand ?? null;
    case "blog":
      return blogBySlug(slug)?.brand ?? null;
    case "news":
      return newsBySlug(slug)?.brand ?? null;
    default:
      return null;
  }
}

/**
 * Watches the brand toggle. When the visitor switches range while on a
 * detail page that belongs only to the other range (e.g. a wooden-door page
 * while switching to aluminium), it sends them home so they land on content
 * for the range they just chose. Only fires on an actual toggle change.
 */
export function BrandRouteGuard() {
  const { brand } = useBrand();
  const pathname = usePathname();
  const router = useRouter();
  const prevBrand = React.useRef(brand);

  React.useEffect(() => {
    if (prevBrand.current === brand) return;
    prevBrand.current = brand;

    const constraint = constraintFor(pathname);
    if (constraint && constraint !== "both" && constraint !== brand) {
      router.push("/");
    }
  }, [brand, pathname, router]);

  return null;
}
