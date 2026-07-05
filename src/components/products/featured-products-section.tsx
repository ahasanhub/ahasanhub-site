import { featuredProducts, type FeaturedProduct } from "@/data/products";
import { cn } from "@/lib/utils";
import { Container, Badge, Card } from "@/components/ui";

export type FeaturedProductsSectionProps = {
  className?: string;
  products?: FeaturedProduct[];
};

export function FeaturedProductsSection({
  className,
  products = featuredProducts,
}: FeaturedProductsSectionProps) {
  return (
    <section
      aria-labelledby="featured-products-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Featured Products &amp; SaaS Systems
          </p>
          <h2
            id="featured-products-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Product concepts engineered for operational outcomes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const userBadgeVariant = 
              product.targetUsers === "Enterprise"
                ? "premium"
                : product.targetUsers === "Developers"
                ? "tech"
                : "primary";

            return (
              <Card
                key={product.name}
                className="flex h-full flex-col rounded-2xl border border-border/80 bg-surface/50 p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:bg-surface hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {product.category}
                  </span>
                  <Badge variant={userBadgeVariant}>
                    {product.targetUsers}
                  </Badge>
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground tracking-tight">
                  {product.name}
                </h3>
                
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>

                {/* Use Case Box */}
                <div className="mt-5 rounded-xl border border-border bg-background/50 p-4 text-xs leading-5">
                  <span className="font-semibold text-foreground block mb-1">Use Case:</span>
                  <span className="text-muted-foreground">{product.useCase}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-auto pt-6 border-t border-border/40">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center rounded-md border border-border bg-surface-muted px-2 py-0.5 text-xs text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
