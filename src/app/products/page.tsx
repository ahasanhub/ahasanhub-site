import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products | AhasanHub",
  description: "Discover future AhasanHub products and digital offerings.",
};

export default function ProductsPage() {
  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Products"
          description="Placeholder page for future SaaS products, digital tools, and reusable business systems."
        />
      </Container>
    </section>
  );
}
