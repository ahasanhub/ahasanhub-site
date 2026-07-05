import { Badge, Container } from "@/components/ui";
import { HeroBackground } from "@/components/sections/hero-background";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
    >
      <HeroBackground />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Badge
            variant="neutral"
            className="border border-white/60 bg-surface/75 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/55"
          >
            About AhasanHub
          </Badge>
          <h1
            id="about-hero-title"
            className="mt-7 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
              Intelligent Systems
            </span>{" "}
            That Power Modern Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            AhasanHub is a technology consulting brand focused on AI systems,
            ERP architecture, cloud platforms, SaaS engineering, and enterprise
            digital transformation.
          </p>
        </div>
      </Container>
    </section>
  );
}
