import type { Metadata } from "next";
import {
  CoreServicesOverview,
  DetailedServicesBreakdown,
  EngagementModelsSection,
  ServicesCTASection,
  ServicesHeroSection,
  TechnologyStackSection,
  WorkProcessSection,
} from "@/components/services";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <CoreServicesOverview />
      <DetailedServicesBreakdown />
      <WorkProcessSection />
      <TechnologyStackSection />
      <EngagementModelsSection />
      <ServicesCTASection />
    </main>
  );
}
