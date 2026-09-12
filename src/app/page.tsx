import type { Metadata } from "next";
import {
  ContactCTASection,
  CoreServicesSection,
  HeroSection,
  HomeProductsSection,
  InsightsSection,
  ProjectsSection,
} from "@/components/sections";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeProductsSection />
      <CoreServicesSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactCTASection />
    </>
  );
}
