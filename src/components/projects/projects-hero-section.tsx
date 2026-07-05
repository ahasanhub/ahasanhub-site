import { HeroBackground } from "@/components/sections/hero-background";
import { cn } from "@/lib/utils";

export type ProjectsHeroSectionProps = {
  className?: string;
};

export function ProjectsHeroSection({ className }: ProjectsHeroSectionProps) {
  return (
    <section
      aria-labelledby="projects-hero-title"
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Projects
          </p>
          <h1
            id="projects-hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enterprise{" "}
            <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
              Systems
            </span>{" "}
            &amp; Real-World Engineering Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A showcase of AI systems, ERP platforms, cloud architectures, SaaS
            products, and enterprise-grade software solutions built by
            AhasanHub.
          </p>
        </div>
      </div>
    </section>
  );
}
