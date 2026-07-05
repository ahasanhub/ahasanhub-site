import type { Metadata } from "next";
import { AboutFounderSection } from "@/components/about/about-founder-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { AboutIdentitySection } from "@/components/about/about-identity-section";
import { ExpertiseSection } from "@/components/about/expertise-section";
import { AboutTimelineSection } from "@/components/about/about-timeline-section";
import { CorePrinciplesSection } from "@/components/about/core-principles-section";
import { AboutCTASection } from "@/components/about/about-cta-section";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutFounderSection />
      <MissionVisionSection />
      <AboutIdentitySection />
      <ExpertiseSection />
      <AboutTimelineSection />
      <CorePrinciplesSection />
      <AboutCTASection />
    </main>
  );
}
