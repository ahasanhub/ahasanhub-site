import { roadmapItems, type RoadmapItem } from "@/data/products";
import { cn } from "@/lib/utils";
import { Container, Card } from "@/components/ui";

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
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Future Roadmap
          </p>
          <h2
            id="product-roadmap-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            From validated concepts to a scalable product ecosystem
          </h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative mt-16 border-l-2 border-border/80 ml-2 pl-6 sm:ml-4 sm:pl-8 md:pl-12 space-y-10">
          {items.map((item, index) => (
            <div 
              key={item.phase} 
              className="relative [animation:fade-up_600ms_ease-out_both] [animation-delay:calc(var(--index)*120ms)]"
              style={{ "--index": index } as React.CSSProperties}
            >
              {/* Timeline Bullet Node centered on parent border */}
              <div className="absolute -left-[36px] sm:-left-[44px] md:-left-[60px] top-1.5 flex size-6 items-center justify-center rounded-full border-2 border-primary bg-background shadow-xs">
                <div className="size-2 rounded-full bg-primary" />
              </div>

              {/* Roadmap Content Card */}
              <Card className="rounded-2xl border border-border/80 bg-surface/50 p-6 shadow-xs hover:border-border-strong hover:bg-surface hover:shadow-md transition-all duration-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.phase}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground tracking-tight sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-3xl">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
