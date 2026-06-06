import { Hero } from "@/components/site/hero";
import { NewsRail } from "@/components/site/news-rail";
import { ProductOverview } from "@/components/site/product-overview";
import { MaterialsStrip } from "@/components/site/materials-strip";
import { BrandBand } from "@/components/site/brand-band";

// The home page is intentionally simple: a brand-aware hero, the products
// for the selected range, the material/finish palette for that range, a
// colour band in the range's signature tone, and the news for that range.
// Everything else (reference works, architects info, partners, about, blog,
// add-ons) lives on its own page and is reached from the hamburger menu.
// Whatever range the visitor picks in the header toggle, every section here
// stays on that range.
//   hero → products → materials → brand band → news
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductOverview />
      <MaterialsStrip />
      <BrandBand />
      <div id="news" className="scroll-mt-24" />
      <NewsRail />
    </>
  );
}
