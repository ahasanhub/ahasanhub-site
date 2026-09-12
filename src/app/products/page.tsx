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
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <main>
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
