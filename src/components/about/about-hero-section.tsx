import { Badge, Container } from "@/components/ui";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,var(--primary-muted),transparent_30%),radial-gradient(circle_at_82%_18%,var(--tech-muted),transparent_26%),radial-gradient(circle_at_52%_88%,var(--premium-muted),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_18%_20%,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_30%),radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--tech)_20%,transparent),transparent_26%),radial-gradient(circle_at_52%_88%,color-mix(in_srgb,var(--premium)_16%,transparent),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <Container>
        <div className="max-w-4xl">
          <Badge
            variant="neutral"
            className="border border-white/60 bg-surface/75 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/55"
          >
            About AhasanHub
          </Badge>
          <h1
            id="about-hero-title"
            className="mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enterprise technology consulting for connected, scalable systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            AhasanHub helps modern businesses connect operations, create durable
            platforms, and grow with AI, ERP, cloud, SaaS, and full-stack
            engineering foundations.
          </p>
        </div>
      </Container>
    </section>
  );
}
