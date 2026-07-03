import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Products"
          headingLevel="h1"
          description="Placeholder page for future SaaS products, digital tools, and reusable business systems."
        />
      </Container>
    </section>
  );
}
