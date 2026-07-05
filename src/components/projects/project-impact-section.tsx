import { cn } from "@/lib/utils";

export type ProjectImpactMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ProjectImpactSectionProps = {
  className?: string;
  metrics?: ProjectImpactMetric[];
};

const impactMetrics: ProjectImpactMetric[] = [
  {
    label: "System Performance Improvement",
    value: "40%",
    detail: "Faster response paths through cleaner architecture and optimized system boundaries.",
  },
  {
    label: "Cost Reduction",
    value: "25%",
    detail: "Lower delivery and maintenance waste through scalable foundations and reduced rework.",
  },
  {
    label: "Automation Efficiency",
    value: "35%",
    detail: "Improved operational throughput with AI-assisted workflows and process automation.",
  },
  {
    label: "Scalability Gains",
    value: "2x",
    detail: "Stronger readiness for cloud growth, multi-tenant workloads, and expanding user demand.",
  },
  {
    label: "Business Process Optimization",
    value: "50%",
    detail: "Better workflow clarity across ERP, SaaS, reporting, and enterprise operations.",
  },
];

export function ProjectImpactSection({
  className,
  metrics = impactMetrics,
}: ProjectImpactSectionProps) {
  return (
    <section
      aria-labelledby="project-impact-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Impact metrics
            </p>
            <h2
              id="project-impact-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              KPI signals for enterprise system outcomes.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Projects are measured by the operational improvements they create,
              from speed and cost control to automation, scale, and process
              quality.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-4 shadow-sm sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.slice(0, 4).map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {metric.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-premium">
              Business process optimization
            </p>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-foreground">
              {metrics[4]?.value}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {metrics[4]?.label}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {metrics[4]?.detail}
            </p>
          </article>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-tech">
              Dashboard view
            </p>
            <div className="mt-5 space-y-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <span>{metric.label}</span>
                    <span className="text-foreground">{metric.value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
                    <div className="h-full w-3/4 rounded-full bg-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
