import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroBackground } from "@/components/sections/hero-background";
import { Badge, Container } from "@/components/ui";
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
      <HeroBackground />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Badge
            variant="neutral"
            className="border border-white/60 bg-surface/75 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/55"
          >
            AhasanHub Products
          </Badge>

          <h1
            id="products-hero-title"
            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
              Products
            </span>{" "}
            &amp; Enterprise SaaS Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            AhasanHub builds intelligent software products, SaaS platforms,
            automation tools, and enterprise-grade digital systems for modern businesses.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              aria-label="Discuss an enterprise product need"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Discuss a product need
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#featured-products-title"
              aria-label="Explore AhasanHub product systems"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/60 bg-surface/75 px-5 text-base font-semibold text-foreground shadow-sm backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:border-white/10 dark:bg-surface/55"
            >
              Explore products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
