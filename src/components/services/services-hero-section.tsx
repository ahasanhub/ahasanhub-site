import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export type ServicesHeroSectionProps = {
  className?: string;
};

export function ServicesHeroSection({ className }: ServicesHeroSectionProps) {
  return (
    <section
      aria-labelledby="services-hero-title"
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,var(--primary-muted),transparent_30%),radial-gradient(circle_at_82%_18%,var(--tech-muted),transparent_26%),radial-gradient(circle_at_50%_88%,var(--premium-muted),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_18%_20%,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_30%),radial-gradient(circle_at_82%_18%,color-mix(in_srgb,var(--tech)_20%,transparent),transparent_26%),radial-gradient(circle_at_50%_88%,color-mix(in_srgb,var(--premium)_16%,transparent),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_65%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Badge
            variant="neutral"
            className="border border-white/60 bg-surface/75 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/55"
          >
            AhasanHub Services
          </Badge>

          <h1
            id="services-hero-title"
            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enterprise Technology Services That Scale Businesses
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            AhasanHub delivers AI systems, ERP architecture, cloud
            infrastructure, SaaS platforms, and full-stack engineering solutions
            for modern enterprises.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              aria-label="Discuss an enterprise service need"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Discuss a service need
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#service-details"
              aria-label="Explore AhasanHub service capabilities"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/60 bg-surface/75 px-5 text-base font-semibold text-foreground shadow-sm backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:border-white/10 dark:bg-surface/55"
            >
              Explore capabilities
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
