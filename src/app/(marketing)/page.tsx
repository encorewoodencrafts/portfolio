import { Hero } from "@/components/site/hero";
import { NewsRail } from "@/components/site/news-rail";
import { ProductOverview } from "@/components/site/product-overview";
import { AddOnsGrid } from "@/components/site/addons-grid";
import { ProjectsRail } from "@/components/site/projects-rail";
import { ArchitectsCTA } from "@/components/site/architects-cta";
import { PartnersTeaser } from "@/components/site/partners-teaser";
import { AboutTeaser } from "@/components/site/about-teaser";
import { BlogTeaser } from "@/components/site/blog-teaser";

// Home page intentionally mirrors panoramah's nine-section editorial flow:
// hero → news → products → add-ons → reference works → architects info →
// across the world → about → blog. Decorative sections (testimonials,
// process, marquees, dark spotlights, faq teaser) live on their own pages
// to keep the mobile scroll calm and focused.
export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="news" className="scroll-mt-24" />
      <NewsRail />
      <ProductOverview />
      <AddOnsGrid />
      <ProjectsRail />
      <ArchitectsCTA />
      <PartnersTeaser />
      <AboutTeaser />
      <BlogTeaser />
    </>
  );
}
