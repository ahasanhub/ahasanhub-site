import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services | AhasanHub",
  description: "Explore AhasanHub consulting and engineering services.",
};

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
