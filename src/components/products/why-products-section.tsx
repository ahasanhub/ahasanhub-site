import { Card, Container } from "@/components/ui";
import { whyProductPrinciples } from "@/data/products";
import { cn } from "@/lib/utils";

export type WhyProductsSectionProps = {
  className?: string;
};

export function WhyProductsSection({ className }: WhyProductsSectionProps) {
  return (
    <section
      id="why-products"
      aria-labelledby="why-products-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-architecture">
            Engineering Principles
          </p>
          <h2
            id="why-products-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Why Organizations Choose AhasanHub Software Platforms
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our products are engineered around operational rigor, strict auditability,
            and clean system boundaries rather than superficial templates.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyProductPrinciples.map((item, idx) => (
            <Card
              key={item.title}
              className="rounded-2xl border border-border/80 bg-background/50 p-5 shadow-xs transition duration-200 hover:border-border-strong hover:bg-background"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-surface-muted text-architecture border border-border shrink-0 text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
