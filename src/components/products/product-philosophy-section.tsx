import { cn } from "@/lib/utils";

export type ProductPhilosophySectionProps = {
  className?: string;
};

const principles = [
  "Business workflow first",
  "Architecture-led product design",
  "Enterprise integration readiness",
  "Scalable SaaS foundations",
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
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-page-x sm:px-page-x-sm lg:grid-cols-[0.9fr_1.1fr] lg:px-page-x-lg">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-tech">
            Product philosophy
          </p>
          <h2
            id="product-philosophy-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Products are designed as enterprise systems, not isolated tools.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The AhasanHub ecosystem is built around durable workflows,
            integration depth, automation potential, and long-term operational
            value.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <p className="text-base font-semibold text-foreground">
                {principle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
