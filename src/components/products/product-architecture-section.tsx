import { cn } from "@/lib/utils";

export type ProductArchitectureSectionProps = {
  className?: string;
};

const layers = [
  "Product experience",
  "Workflow engine",
  "API layer",
  "ERP integrations",
  "Cloud infrastructure",
  "Data & AI layer",
];

export function ProductArchitectureSection({
  className,
}: ProductArchitectureSectionProps) {
  return (
    <section
      aria-labelledby="product-architecture-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-page-x sm:px-page-x-sm lg:grid-cols-[0.9fr_1.1fr] lg:px-page-x-lg">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
            Architecture & system design
          </p>
          <h2
            id="product-architecture-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Product architecture designed for SaaS growth and enterprise fit.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Each product direction is structured around secure access, workflow
            orchestration, cloud operations, integration boundaries, and
            data-driven automation.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
          <div className="grid gap-3">
            {layers.map((layer, index) => (
              <div
                key={layer}
                className="grid gap-3 rounded-xl border border-border bg-surface p-4 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {layer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
