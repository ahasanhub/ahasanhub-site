import { featuredProducts, type FeaturedProduct } from "@/data/products";
import { cn } from "@/lib/utils";
import { Container, Card } from "@/components/ui";

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
      id="product-labs"
      aria-labelledby="product-labs-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Research &amp; Engineering Labs
          </p>
          <h2
            id="product-labs-title"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Product Labs &amp; Platform Capabilities
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            In addition to our core commercial platforms (Custom ERP AI Enabled, Custom CRM AI Enabled, Ecommerce with AI Agent), AhasanHub
            maintains reusable architectural blueprints, automation toolkits, and infrastructure
            accelerators to support custom client implementations.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="flex h-full flex-col justify-between rounded-xl border border-border/70 bg-background/60 p-5 shadow-xs transition duration-200 hover:border-border-strong hover:bg-background"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-medium text-muted-foreground uppercase">
                    {product.category}
                  </span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border">
                    {product.targetUsers}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-foreground">
                  {product.name}
                </h3>
                
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-3 rounded-lg border border-border/60 bg-surface/50 p-3 text-[11px] leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-0.5">Focus:</span>
                  {product.useCase}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1">
                {product.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center rounded border border-border/60 bg-surface-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
