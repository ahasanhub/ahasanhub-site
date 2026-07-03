import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="AhasanHub"
          title="Home"
          description="Placeholder page for the AhasanHub home experience."
        />
      </Container>
    </section>
  );
}
