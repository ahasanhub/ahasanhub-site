import type { Metadata } from "next";
import { CaseStudyGridSection } from "@/components/projects/case-study-grid-section";
import { FeaturedCaseStudiesSection } from "@/components/projects/featured-case-studies-section";
import { ProjectArchitectureSection } from "@/components/projects/project-architecture-section";
import { ProjectCategoriesSection } from "@/components/projects/project-categories-section";
import { ProjectImpactSection } from "@/components/projects/project-impact-section";
import { ProjectsCTASection } from "@/components/projects/projects-cta-section";
import { ProjectsHeroSection } from "@/components/projects/projects-hero-section";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.projects);

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeroSection />
      <FeaturedCaseStudiesSection />
      <ProjectCategoriesSection />
      <CaseStudyGridSection />
      <ProjectArchitectureSection />
      <ProjectImpactSection />
      <ProjectsCTASection />
    </main>
  );
}
