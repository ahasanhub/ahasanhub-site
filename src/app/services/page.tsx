import type { Metadata } from "next";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { EngagementModelsSection } from "@/components/services/engagement-models-section";
import { ProcessSection } from "@/components/services/process-section";
import { ServiceDetailSection } from "@/components/services/service-detail-section";
import { ServicesCTASection } from "@/components/services/services-cta-section";
import { ServicesHeroSection } from "@/components/services/services-hero-section";
import { TechStackSection } from "@/components/services/TechStackSection";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <CoreServicesSection />
      <ServiceDetailSection />
      <ProcessSection />
      <TechStackSection />
      <EngagementModelsSection />
      <ServicesCTASection />
    </main>
  );
}
