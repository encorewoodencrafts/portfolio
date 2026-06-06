"use client";

import * as React from "react";

export type BrandName = "wood" | "aluminium";

interface BrandContextValue {
  brand: BrandName;
  setBrand: (b: BrandName) => void;
}

const BrandContext = React.createContext<BrandContextValue | undefined>(
  undefined,
);

const STORAGE_BRAND = "encore-brand";
// Custom event so writes from setBrand in this tab notify
// useSyncExternalStore subscribers (the native `storage` event only fires
// in *other* tabs).
const BRAND_CHANGE_EVENT = "encore-brand-change";

const DEFAULT_BRAND: BrandName = "wood";

function isBrandName(v: string | null): v is BrandName {
  return v === "wood" || v === "aluminium";
}

function readBrand(): BrandName {
  if (typeof window === "undefined") return DEFAULT_BRAND;
  try {
    const v = localStorage.getItem(STORAGE_BRAND);
    return isBrandName(v) ? v : DEFAULT_BRAND;
  } catch {
    return DEFAULT_BRAND;
  }
}

function subscribeBrandChange(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onChange);
  window.addEventListener(BRAND_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(BRAND_CHANGE_EVENT, onChange);
  };
}

function applyToDom(brand: BrandName) {
  document.documentElement.dataset.brand = brand;
}

export function BrandProvider({ children }: { children: React.ReactNode }) {
  // Brand is external state (localStorage); useSyncExternalStore avoids the
  // setState-in-effect bootstrap cascade and gives a correct SSR snapshot.
  const brand = React.useSyncExternalStore(
    subscribeBrandChange,
    readBrand,
    () => DEFAULT_BRAND,
  );

  // The no-flash inline script paints the first frame; this keeps the DOM
  // dataset in step for runtime changes.
  React.useEffect(() => {
    applyToDom(brand);
  }, [brand]);

  const setBrand = React.useCallback((b: BrandName) => {
    try {
      localStorage.setItem(STORAGE_BRAND, b);
    } catch {
      // localStorage may be unavailable in sandboxed iframes — still
      // dispatch so in-memory subscribers re-read (and fall back to default).
    }
    window.dispatchEvent(new Event(BRAND_CHANGE_EVENT));
  }, []);

  const value = React.useMemo(() => ({ brand, setBrand }), [brand, setBrand]);

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = React.useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within BrandProvider");
  return ctx;
}

/** No-flash inline script — applied in <head> before hydration. */
export const brandInitScript = `
(function() {
  try {
    var b = localStorage.getItem('${STORAGE_BRAND}');
    if (b !== 'wood' && b !== 'aluminium') b = '${DEFAULT_BRAND}';
    document.documentElement.dataset.brand = b;
  } catch (e) {
    document.documentElement.dataset.brand = '${DEFAULT_BRAND}';
  }
})();
`;
