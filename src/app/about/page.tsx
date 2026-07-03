import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | AhasanHub",
  description: "Learn about AhasanHub and its consulting focus.",
};

export default function AboutPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="About AhasanHub"
          description="Placeholder page for the AhasanHub story, positioning, and expertise."
        />
      </Container>
    </section>
  );
}
