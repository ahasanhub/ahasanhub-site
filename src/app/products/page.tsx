import type { Metadata } from "next";
import { CommercialOptionsSection } from "@/components/products/commercial-options-section";
import { FeaturedProductsSection } from "@/components/products/featured-products-section";
import { ProductComparisonSection } from "@/components/products/product-comparison-section";
import { ProductEcosystemSection } from "@/components/products/product-ecosystem-section";
import { ProductPortfolioSection } from "@/components/products/product-portfolio-section";
import { ProductsCTASection } from "@/components/products/products-cta-section";
import { ProductsHeroSection } from "@/components/products/products-hero-section";
import { WhyProductsSection } from "@/components/products/why-products-section";
import { pageSeo } from "@/data/seo";
import { softwareProducts } from "@/data/products";
import { site } from "@/data/site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.products);

export default function ProductsPage() {
  const productsCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AhasanHub Enterprise Software Platforms",
    description: pageSeo.products.description,
    url: new URL("/products", site.url).toString(),
    itemListElement: softwareProducts.map((product, index) => ({
      "@type": "SoftwareApplication",
      position: index + 1,
      name: product.name,
      headline: product.headline,
      description: product.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web-based, Linux, Windows",
      url: new URL(`/products/${product.slug}`, site.url).toString(),
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsCatalogJsonLd) }}
      />
      <ProductsHeroSection />
      <ProductPortfolioSection />
      <ProductComparisonSection />
      <CommercialOptionsSection />
      <WhyProductsSection />
      <ProductEcosystemSection />
      <FeaturedProductsSection />
      <ProductsCTASection />
    </main>
  );
}
