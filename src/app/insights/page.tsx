import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.insights);

export default function InsightsPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Insights"
          headingLevel="h1"
          description="Placeholder page for articles, technical notes, and strategic technology perspectives."
        />
      </Container>
    </section>
  );
}
