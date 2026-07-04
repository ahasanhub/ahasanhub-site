import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { getAllInsights } from "@/lib/mdx";
import { createSeoMetadata } from "@/lib/seo";
import { InsightsFilter } from "./insights-filter";

export const metadata: Metadata = createSeoMetadata(pageSeo.insights);

export default function InsightsPage() {
  const insights = getAllInsights().map((insight) => ({
    title: insight.title,
    description: insight.description,
    date: insight.date,
    category: insight.category,
    tags: insight.tags,
    slug: insight.slug,
    readingTime: insight.readingTime,
    featured: insight.featured,
    image: insight.image,
    imageAlt: insight.imageAlt,
  }));

  return (
    <section className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Insights"
            title="Enterprise technology insights"
            headingLevel="h1"
            description="Practical articles on AI engineering, ERP architecture, cloud systems, and SaaS product strategy for modern business platforms."
          />

          <InsightsFilter insights={insights} />
        </div>
      </Container>
    </section>
  );
}
