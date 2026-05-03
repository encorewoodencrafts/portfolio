import { site } from "@/data/site";
import { products } from "@/data/products";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    legalName: "encore wood crafts",
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line2,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: "IN",
    },
    sameAs: Object.values(site.social),
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.name,
        description: p.excerpt,
        url: `${site.url}/products/${p.slug}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
