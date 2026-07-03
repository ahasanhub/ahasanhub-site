import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";
import { insights, type InsightCategory } from "@/data/insights";
import { cn } from "@/lib/utils";

export type InsightsSectionProps = {
  className?: string;
};

const categoryVariants: Record<
  InsightCategory,
  "tech" | "primary" | "architecture"
> = {
  AI: "tech",
  ERP: "primary",
  Cloud: "architecture",
};

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function InsightsSection({ className }: InsightsSectionProps) {
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
              title="Strategic technology thinking"
              description="SEO-friendly article previews covering AI, ERP, and cloud architecture for enterprise decision makers."
            />
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all insights
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {insights.map((insight) => (
              <Card
                key={insight.id}
                className="flex h-full flex-col transition-colors hover:border-border-strong"
              >
                <article className="flex h-full flex-col">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={categoryVariants[insight.category]}>
                        {insight.category}
                      </Badge>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock3 aria-hidden="true" className="size-3.5" />
                        {insight.readingTime}
                      </span>
                    </div>
                    <CardTitle>
                      <Link
                        href={insight.href}
                        className="transition-colors hover:text-primary"
                      >
                        {insight.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{insight.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                      <time
                        dateTime={insight.publishedAt}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <CalendarDays aria-hidden="true" className="size-3.5" />
                        {formatPublishedDate(insight.publishedAt)}
                      </time>
                      <Link
                        href={insight.href}
                        aria-label={`Read ${insight.title}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Read
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
