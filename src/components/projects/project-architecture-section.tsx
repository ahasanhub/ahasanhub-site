import { cn } from "@/lib/utils";

export type ArchitectureLayer = {
  name: string;
  stack: string;
  description: string;
};

export type ProjectArchitectureSectionProps = {
  className?: string;
  layers?: ArchitectureLayer[];
};

const architectureLayers: ArchitectureLayer[] = [
  {
    name: "Frontend",
    stack: "Next.js / React / TypeScript",
    description:
      "Responsive application surfaces, admin portals, dashboards, and customer-facing SaaS interfaces.",
  },
  {
    name: "Backend",
    stack: ".NET / Node.js / APIs",
    description:
      "Service boundaries, enterprise APIs, business rules, integrations, and clean application logic.",
  },
  {
    name: "Cloud",
    stack: "AWS / Azure / DevOps",
    description:
      "Deployment environments, CI/CD pipelines, observability, infrastructure governance, and scale planning.",
  },
  {
    name: "Database",
    stack: "SQL / PostgreSQL / Data Models",
    description:
      "Transactional data models, reporting structures, tenant data strategy, and operational persistence.",
  },
  {
    name: "AI & Automation",
    stack: "LLM / Workflows / Prediction",
    description:
      "Automation layers, intelligent workflows, decision support, and AI-assisted enterprise operations.",
  },
];

const diagramBlocks = [
  "Client portal",
  "Admin console",
  "API gateway",
  "ERP integration",
  "Cloud services",
  "Data platform",
  "AI workflows",
  "Observability",
];

export function ProjectArchitectureSection({
  className,
  layers = architectureLayers,
}: ProjectArchitectureSectionProps) {
  return (
    <section
      aria-labelledby="project-architecture-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-page-x sm:px-page-x-sm lg:grid-cols-[0.9fr_1.1fr] lg:px-page-x-lg">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-tech">
            Architecture & system breakdown
          </p>
          <h2
            id="project-architecture-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Technical depth behind enterprise-grade delivery.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Projects are structured around clear system boundaries, integration
            paths, cloud readiness, and automation layers that can scale beyond
            the first release.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {diagramBlocks.map((block) => (
                <div
                  key={block}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {block}
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="my-5 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">
                Secure access
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-semibold uppercase tracking-wide text-architecture">
                Service contracts
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-semibold uppercase tracking-wide text-tech">
                Delivery pipeline
              </div>
            </div>
          </div>
        </div>

        <ol className="space-y-3">
          {layers.map((layer, index) => (
            <li
              key={layer.name}
              className="grid gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:grid-cols-[4rem_1fr]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    {layer.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {layer.stack}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {layer.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
