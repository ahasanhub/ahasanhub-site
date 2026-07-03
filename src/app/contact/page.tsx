import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description="Placeholder page for consulting inquiries, partnerships, and project conversations."
        />
      </Container>
    </section>
  );
}
