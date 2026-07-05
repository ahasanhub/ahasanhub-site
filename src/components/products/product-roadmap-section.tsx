import { roadmapItems, type RoadmapItem } from "@/data/products";
import { cn } from "@/lib/utils";

export type ProductRoadmapSectionProps = {
  className?: string;
  items?: RoadmapItem[];
};

export function ProductRoadmapSection({
  className,
  items = roadmapItems,
}: ProductRoadmapSectionProps) {
  return (
    <section
      aria-labelledby="product-roadmap-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Future roadmap
          </p>
          <h2
            id="product-roadmap-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            From validated concepts to a scalable product ecosystem.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.phase}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {item.phase}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
