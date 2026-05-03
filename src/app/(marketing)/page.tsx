import { Hero } from "@/components/site/hero";
import { NewsRail } from "@/components/site/news-rail";
import { ProductOverview } from "@/components/site/product-overview";
import { FeaturedSpotlights } from "@/components/site/featured-spotlights";
import { AddOnsGrid } from "@/components/site/addons-grid";
import { ProjectsRail } from "@/components/site/projects-rail";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { ArchitectsCTA } from "@/components/site/architects-cta";
import { PartnersTeaser } from "@/components/site/partners-teaser";
import { AboutTeaser } from "@/components/site/about-teaser";
import { FaqTeaser } from "@/components/site/faq-teaser";
import { BlogTeaser } from "@/components/site/blog-teaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsRail />
      <ProductOverview />
      <FeaturedSpotlights />
      <AddOnsGrid />
      <ProjectsRail />
      <Testimonials />
      <Process />
      <ArchitectsCTA />
      <PartnersTeaser />
      <AboutTeaser />
      <FaqTeaser />
      <BlogTeaser />
    </>
  );
}
