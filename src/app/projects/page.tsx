import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects | AhasanHub",
  description: "Review selected AhasanHub projects and case studies.",
};

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
