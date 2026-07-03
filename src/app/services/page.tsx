import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Services"
          description="Placeholder page for consulting, architecture, AI, cloud, ERP, and software delivery services."
        />
      </Container>
    </section>
  );
}
