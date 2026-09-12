import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Card, Container } from "@/components/ui";
import { commercialOptions } from "@/data/products";
import { cn } from "@/lib/utils";

export type CommercialOptionsSectionProps = {
  className?: string;
};

export function CommercialOptionsSection({
  className,
}: CommercialOptionsSectionProps) {
  return (
    <section
      id="commercial-options"
      aria-labelledby="commercial-options-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-premium">
            Engagement Models
          </p>
          <h2
            id="commercial-options-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Flexible Ways to Adopt AhasanHub Products
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Whether you need a focused technical demonstration, complete enterprise implementation,
            custom connector engineering, or commercial software licensing, we provide transparent paths forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commercialOptions.map((opt) => (
            <Card
              key={opt.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface/50 p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:bg-surface hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="neutral">{opt.badge}</Badge>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {opt.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-primary">
                  {opt.tagline}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {opt.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60">
                <Link
                  href={opt.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {opt.actionLabel}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
