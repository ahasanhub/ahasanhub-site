import { cn } from "@/lib/utils";
import { Container, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import { Cpu, Database, Layers, Workflow } from "lucide-react";

export type ProductPhilosophySectionProps = {
  className?: string;
};

const principles = [
  {
    title: "System-first design",
    description: "Products built as connected modules within a broader business ecosystem.",
    icon: Layers,
  },
  {
    title: "Scalability by default",
    description: "Architected on modern cloud foundations ready to handle growing scale.",
    icon: Cpu,
  },
  {
    title: "Automation-driven architecture",
    description: "Embedding intelligent workflows and background processes directly into the core.",
    icon: Workflow,
  },
  {
    title: "Enterprise integration ready",
    description: "Designed with API-first frameworks to easily sync with custom ERPs and enterprise platforms.",
    icon: Database,
  },
];

export function ProductPhilosophySection({
  className,
}: ProductPhilosophySectionProps) {
  return (
    <section
      aria-labelledby="product-philosophy-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-tech">
              Product Philosophy
            </p>
            <h2
              id="product-philosophy-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Building tools that solve real business problems, not just interfaces
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Every AhasanHub product is designed with scalability, automation, and enterprise system thinking.
              We focus on durable workflows, data depth, and long-term operational value.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={principle.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background/50 p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-background hover:shadow-md"
                >
                  <CardHeader className="p-0 gap-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-tech transition duration-200 group-hover:bg-tech-muted">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-base font-bold text-foreground">
                        {principle.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-6">
                        {principle.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
