import { HeroBackground } from "@/components/sections/hero-background";
import { Container } from "@/components/ui";
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
        <div className="max-w-5xl [animation:fade-up_600ms_ease-out_both]">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Products
          </p>
          <h1
            id="products-hero-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
              Products
            </span>{" "}
            &amp; Enterprise SaaS Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            AhasanHub builds intelligent software products, SaaS platforms,
            automation tools, and enterprise-grade digital systems for modern businesses.
          </p>
        </div>
      </Container>
    </section>
  );
}
