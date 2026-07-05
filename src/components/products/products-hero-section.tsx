import { cn } from "@/lib/utils";

export type ProductsHeroSectionProps = {
  className?: string;
};

export function ProductsHeroSection({ className }: ProductsHeroSectionProps) {
  return (
    <section
      aria-labelledby="products-hero-title"
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,var(--tech-muted),transparent_30%),radial-gradient(circle_at_82%_20%,var(--primary-muted),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Products
          </p>
          <h1
            id="products-hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Digital Products &amp; SaaS Systems Built for Enterprise Workflows
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            AhasanHub product concepts focus on AI automation, ERP extensions,
            SaaS platforms, and cloud-ready business systems for serious
            operational outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
