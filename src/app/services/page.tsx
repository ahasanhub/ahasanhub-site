import type { Metadata } from "next";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { EngagementModelsSection } from "@/components/services/engagement-models-section";
import { ProcessSection } from "@/components/services/process-section";
import { ServiceDetailSection } from "@/components/services/service-detail-section";
import { ServicesCTASection } from "@/components/services/services-cta-section";
import { ServicesHeroSection } from "@/components/services/services-hero-section";
import { TechStackSection } from "@/components/services/TechStackSection";
import { pageSeo } from "@/data/seo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.services);

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AhasanHub Enterprise Technology Services",
    description: pageSeo.services.description,
    url: new URL("/services", site.url).toString(),
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.summary,
      serviceType: service.focusAreas.join(", "),
      url: `${new URL("/services", site.url).toString()}#${service.id}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
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
