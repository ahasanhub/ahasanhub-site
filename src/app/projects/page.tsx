import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.projects);

export default function ProjectsPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Placeholder page for selected projects, delivery outcomes, and future case studies."
        />
      </Container>
    </section>
  );
}
