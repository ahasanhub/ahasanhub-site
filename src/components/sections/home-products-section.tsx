import Link from "next/link";
import { ArrowRight, Check, Database, Bot, ShoppingCart, Sparkles } from "lucide-react";
import { Badge, Card, Container, SectionHeading } from "@/components/ui";
import { softwareProducts } from "@/data/products";
import { cn } from "@/lib/utils";

export type HomeProductsSectionProps = {
  className?: string;
};

const productIcons = {
  "custom-erp-ai-enabled": Database,
  "custom-crm-ai-enabled": Bot,
  "ecommerce-with-ai-agent": ShoppingCart,
};

const productTones = {
  "custom-erp-ai-enabled": {
    badge: "primary" as const,
    border: "group-hover:border-primary/40",
    bgMuted: "bg-primary-muted text-primary",
    lightGlow: "group-hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--primary)_10%,transparent)]",
    bullet: "bg-primary",
  },
  "custom-crm-ai-enabled": {
    badge: "tech" as const,
    border: "group-hover:border-tech/40",
    bgMuted: "bg-tech-muted text-tech",
    lightGlow: "group-hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--tech)_10%,transparent)]",
    bullet: "bg-tech",
  },
  "ecommerce-with-ai-agent": {
    badge: "premium" as const,
    border: "group-hover:border-premium/40",
    bgMuted: "bg-premium-muted text-premium",
    lightGlow: "group-hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--premium)_10%,transparent)]",
    bullet: "bg-premium",
  },
};

export function HomeProductsSection({ className }: HomeProductsSectionProps) {
  return (
    <section
      id="software-products"
      aria-labelledby="home-products-heading"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-12 sm:gap-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              id="home-products-heading"
              eyebrow="Software Platforms"
              title="Enterprise Software Built for Real Business Operations"
              description="In addition to custom engineering services, AhasanHub licenses and deploys modular, AI-integrated software platforms designed to run core operational lifecycles."
              className="max-w-3xl"
            />
            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* 3 Core Product Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {softwareProducts.map((product) => {
              const Icon = productIcons[product.slug];
              const tone = productTones[product.slug];

              return (
                <Card
                  key={product.slug}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-background p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-background",
                    tone.border,
                    tone.lightGlow,
                  )}
                >
                  <div className="space-y-6">
                    {/* Header bar */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={cn(
                          "flex size-11 items-center justify-center rounded-xl",
                          tone.bgMuted,
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <Badge variant={tone.badge} className="text-xs font-semibold">
                        {product.category.split("•")[0].trim()}
                      </Badge>
                    </div>

                    {/* Product Name & Positioning */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-foreground">
                        {product.displayName}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {product.shortPositioning}
                      </p>
                    </div>

                    {/* Operational Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-border/70">
                      <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Key Capabilities
                      </p>
                      <ul className="space-y-2 text-xs text-foreground/90 font-medium">
                        {product.previewCapabilities.slice(0, 4).map((cap) => (
                          <li key={cap} className="flex items-start gap-2">
                            <Check className="size-3.5 text-tech shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Feature Pill */}
                    <div className="rounded-xl border border-border/80 bg-surface-muted/60 p-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                        <Sparkles className="size-3.5 text-tech shrink-0" />
                        <span>AI Integration</span>
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {product.keyCapabilities.find((c) =>
                          c.toLowerCase().includes("ai"),
                        ) || "Embedded AI agents and automated reasoning workflows."}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-border/70 flex items-center gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 text-xs font-semibold text-background shadow-xs transition duration-200 hover:bg-foreground/90"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <Link
                      href={product.primaryCta.href}
                      className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-surface px-3.5 text-xs font-semibold text-foreground transition duration-200 hover:bg-surface-muted"
                    >
                      <span>Demo</span>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom Trust & Architecture Matrix Callout */}
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground">
                Need Custom Platform Architecture or Source Code Licensing?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Every platform offers dedicated multi-tenant or single-tenant cloud deployment, full data sovereignty, and API-first extensibility.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/products#product-comparison"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-surface px-4 text-xs font-semibold text-foreground transition duration-200 hover:bg-surface-muted"
              >
                Compare Platforms
              </Link>
              <Link
                href="/contact?intent=custom"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow-xs transition duration-200 hover:bg-primary/90"
              >
                <span>Request Custom Build</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
