import type { Metadata } from "next";
import {
  ContactCTASection,
  HeroSection,
  InsightsSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/sections";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactCTASection />
    </>
  );
}
