import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingCTA } from "@/components/site/floating-cta";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { CookieBanner } from "@/components/site/cookie-banner";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </div>
  );
}
