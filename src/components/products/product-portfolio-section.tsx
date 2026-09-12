import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge, Card, Container } from "@/components/ui";
import { softwareProducts, type SoftwareProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export type ProductPortfolioSectionProps = {
  className?: string;
  products?: SoftwareProduct[];
};

export function ProductPortfolioSection({
  className,
  products = softwareProducts,
}: ProductPortfolioSectionProps) {
  return (
    <section
      id="products-portfolio"
      aria-labelledby="products-portfolio-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Real Software Platforms
          </p>
          <h2
            id="products-portfolio-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Production-Ready Platforms Engineered for Core Operations
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            AhasanHub offers real, deployable enterprise platforms designed around structured
            data integrity, operational governance, and extensibility. Available for live demonstration,
            source customization, and tailored organization deployment.
          </p>
        </div>

        {/* 3 Large Horizontal Product Panels */}
        <div className="mt-12 space-y-10 lg:space-y-12">
          {products.map((product) => {

            const accentBadgeVariant =
              product.accentColor === "primary"
                ? "primary"
                : product.accentColor === "tech"
                ? "tech"
                : "premium";

            const accentBorderColor =
              product.accentColor === "primary"
                ? "hover:border-primary/50"
                : product.accentColor === "tech"
                ? "hover:border-tech/50"
                : "hover:border-premium/50";

            return (
              <Card
                key={product.slug}
                className={cn(
                  "overflow-hidden rounded-3xl border border-border/90 bg-surface/60 p-6 shadow-sm transition-all duration-300 sm:p-8 lg:p-10",
                  accentBorderColor,
                )}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
                  {/* Left Column: Product Information & Value */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant={accentBadgeVariant}>{product.category}</Badge>
                      <span className="rounded-md border border-border bg-background/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                        {product.commercialStatus}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-base font-semibold text-foreground/90 sm:text-lg">
                        {product.headline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {product.description}
                      </p>
                    </div>

                    {/* Operational Workflow Visual Pipeline */}
                    <div className="rounded-2xl border border-border/80 bg-background/80 p-4 sm:p-5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                        Operational Workflow Sequence
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        {product.workflowSteps.map((step, sIdx) => (
                          <div key={step} className="inline-flex items-center gap-1.5">
                            <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono font-medium text-foreground">
                              {step}
                            </span>
                            {sIdx < product.workflowSteps.length - 1 ? (
                              <ChevronRight className="size-3.5 text-muted-foreground/60 shrink-0" />
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={product.primaryCta.href}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {product.primaryCta.label}
                        <ArrowRight className="size-4" />
                      </Link>
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        View {product.displayName}
                        <ExternalLink className="size-4 text-muted-foreground" />
                      </Link>
                      <Link
                        href={product.secondaryCta.href}
                        className="inline-flex h-11 items-center justify-center px-4 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
                      >
                        Request Pricing
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Capabilities & Architecture */}
                  <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-background/50 p-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Core Operational Capabilities
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {product.previewCapabilities.map((capability) => (
                          <li key={capability} className="flex items-start gap-2.5 text-xs leading-5 text-foreground/90 sm:text-sm">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-muted text-primary border border-border mt-0.5">
                              <Check className="size-3" />
                            </span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 border-t border-border/80">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                        Architecture &amp; Characteristics
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.architectureTags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono font-medium text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
