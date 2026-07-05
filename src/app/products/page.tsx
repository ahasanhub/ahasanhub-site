import type { Metadata } from "next";
import { FeaturedProductsSection } from "@/components/products/featured-products-section";
import { ProductArchitectureSection } from "@/components/products/product-architecture-section";
import { ProductCategoriesSection } from "@/components/products/product-categories-section";
import { ProductPhilosophySection } from "@/components/products/product-philosophy-section";
import { ProductRoadmapSection } from "@/components/products/product-roadmap-section";
import { ProductUseCasesSection } from "@/components/products/product-use-cases-section";
import { ProductsCTASection } from "@/components/products/products-cta-section";
import { ProductsHeroSection } from "@/components/products/products-hero-section";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <main>
      <ProductsHeroSection />
      <ProductPhilosophySection />
      <FeaturedProductsSection />
      <ProductCategoriesSection />
      <ProductUseCasesSection />
      <ProductArchitectureSection />
      <ProductRoadmapSection />
      <ProductsCTASection />
    </main>
  );
}
