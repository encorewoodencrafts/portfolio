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
import { Marquee } from "@/components/site/marquee";

const TIMBER_VALUES = [
  "the warmth of bespoke timber",
  "minimalist · monolithic · mortised",
  "made in hyderabad",
  "9 m single panels",
  "ten-year warranty",
  "fsc-certified species",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="news" className="scroll-mt-24" />
      <NewsRail />
      <ProductOverview />
      <FeaturedSpotlights />
      <AddOnsGrid />
      <Marquee phrases={TIMBER_VALUES} size="lg" />
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
