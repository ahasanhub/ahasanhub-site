import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/about/about-cta-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { BrandIdentitySection } from "@/components/about/brand-identity-section";
import { CorePrinciplesSection } from "@/components/about/core-principles-section";
import { ExpertiseAreasSection } from "@/components/about/expertise-areas-section";
import { JourneyTimelineSection } from "@/components/about/journey-timeline-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <MissionVisionSection />
      <BrandIdentitySection />
      <ExpertiseAreasSection />
      <JourneyTimelineSection />
      <CorePrinciplesSection />
      <AboutCtaSection />
    </main>
  );
}
