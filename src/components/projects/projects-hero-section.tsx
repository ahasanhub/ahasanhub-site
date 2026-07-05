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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,var(--primary-muted),transparent_30%),radial-gradient(circle_at_82%_18%,var(--tech-muted),transparent_26%),linear-gradient(135deg,var(--background),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_18%_20%,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_30%),radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--tech)_20%,transparent),transparent_26%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Projects
          </p>
          <h1
            id="projects-hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enterprise Systems &amp; Real-World Engineering Solutions
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
