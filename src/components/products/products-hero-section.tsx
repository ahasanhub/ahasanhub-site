import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";

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
      {/* Subtle Background Mesh & Gradient Grid */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 pointer-events-none select-none">
        {/* Ambient background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-surface-muted/50" />

        {/* Soft glowing mesh circles */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 size-[36rem] rounded-full bg-tech/15 blur-[120px] dark:bg-tech/10" />
        <div className="absolute top-0 right-1/4 translate-x-1/2 size-[36rem] rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10" />
        
        {/* Fine technical grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
      </div>

      <Container>
        <div className="max-w-5xl [animation:fade-up_600ms_ease-out_both]">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Products
          </p>
          <h1
            id="products-hero-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Digital Products &amp; Enterprise SaaS Solutions
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
