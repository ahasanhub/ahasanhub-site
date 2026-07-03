import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Insights | AhasanHub",
  description: "Read AhasanHub insights on technology, AI, ERP, and architecture.",
};

export default function InsightsPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Insights"
          description="Placeholder page for articles, technical notes, and strategic technology perspectives."
        />
      </Container>
    </section>
  );
}
