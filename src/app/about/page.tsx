import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="About AhasanHub"
          headingLevel="h1"
          description="Placeholder page for the AhasanHub story, positioning, and expertise."
        />
      </Container>
    </section>
  );
}
