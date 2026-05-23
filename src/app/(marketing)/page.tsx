import { Hero } from "@/components/site/hero";
import { NewsRail } from "@/components/site/news-rail";
import { ProductOverview } from "@/components/site/product-overview";
import { AddOnsGrid } from "@/components/site/addons-grid";
import { ProjectsRail } from "@/components/site/projects-rail";
import { ArchitectsCTA } from "@/components/site/architects-cta";
import { PartnersTeaser } from "@/components/site/partners-teaser";
import { AboutTeaser } from "@/components/site/about-teaser";
import { BlogTeaser } from "@/components/site/blog-teaser";

// Home page editorial flow: products lead (the headline business), then
// news, then everything else. We keep the panoramah-style minimal section
// pattern but put the products section above the fold-spillover so mobile
// users land on what we sell first, news second.
//   hero → products → news → add-ons → reference works → architects info
//   → across the world → about → blog.
// Decorative sections (testimonials, process, marquees, dark spotlights,
// faq teaser) live on their own pages to keep the mobile scroll calm.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductOverview />
      <div id="news" className="scroll-mt-24" />
      <NewsRail />
      <AddOnsGrid />
      <ProjectsRail />
      <ArchitectsCTA />
      <PartnersTeaser />
      <AboutTeaser />
      <BlogTeaser />
    </>
  );
}
