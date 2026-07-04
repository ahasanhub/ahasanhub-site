import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InsightCard } from "@/components/insights/InsightCard";
import { Container, SectionHeading } from "@/components/ui";
import { getFeaturedInsights } from "@/lib/mdx";
import { cn } from "@/lib/utils";

export type InsightsSectionProps = {
  className?: string;
};

export function InsightsSection({ className }: InsightsSectionProps) {
  const featuredInsights = getFeaturedInsights(3);

  return (
    <section
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Featured technology insights"
              description="Selected AhasanHub perspectives on AI, ERP, cloud architecture, and SaaS systems for enterprise decision makers."
            />
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all insights
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          {featuredInsights.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredInsights.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
