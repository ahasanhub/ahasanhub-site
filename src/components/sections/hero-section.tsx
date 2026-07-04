import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { HeroVisualCard } from "./hero-visual-card";

type HeroCta = {
  label: string;
  href: string;
};

export type HeroSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
};

export function HeroSection({
  eyebrow = "Premium technology consulting for scalable systems",
  title = (
    <>
      <span className="inline-block whitespace-nowrap">Connect. Create.</span>
      <br />
      <span className="inline-block whitespace-nowrap">Grow with</span>
      <br />
      <span className="inline-block bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
        modern
      </span>
      <br />
      <span className="inline-block bg-gradient-to-r from-premium via-architecture to-tech bg-clip-text text-transparent">
        software.
      </span>
    </>
  ),
  description = "AhasanHub designs and builds AI automation, ERP platforms, cloud-ready SaaS products, and full-stack business systems with a clean enterprise-grade delivery approach.",
  primaryCta = { label: "Start Project", href: "/contact" },
  secondaryCta = { label: "View Services", href: "/services" },
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,var(--primary-muted),transparent_28%),radial-gradient(circle_at_84%_14%,var(--tech-muted),transparent_24%),radial-gradient(circle_at_58%_78%,var(--premium-muted),transparent_26%),linear-gradient(135deg,var(--background),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_18%_18%,color-mix(in_srgb,var(--primary)_24%,transparent),transparent_30%),radial-gradient(circle_at_84%_14%,color-mix(in_srgb,var(--tech)_22%,transparent),transparent_24%),radial-gradient(circle_at_58%_78%,color-mix(in_srgb,var(--premium)_18%,transparent),transparent_28%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 -z-10 size-72 rounded-full bg-tech/20 blur-3xl dark:bg-tech/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-8 -z-10 size-80 rounded-full bg-premium/25 blur-3xl dark:bg-premium/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_72%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_72%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-3xl text-center [animation:fade-up_600ms_ease-out_both] lg:mx-0 lg:text-left">
            <Badge
              variant="neutral"
              className="gap-3 rounded-full border border-white/70 bg-surface/82 px-4 py-2.5 text-sm font-bold text-foreground shadow-[0_16px_36px_color-mix(in_srgb,var(--foreground)_12%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/60 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-tech-muted text-sm font-extrabold text-tech"
              >
                AI
              </span>
              <span>{eyebrow}</span>
            </Badge>
            <h1 className="mt-8 text-[2.25rem] font-extrabold leading-[0.99] tracking-tight text-foreground min-[375px]:text-[2.65rem] sm:text-[3.95rem] lg:text-[4.05rem] xl:text-[4.75rem]">
              {title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9 lg:mx-0">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={primaryCta.href}
                aria-label={`${primaryCta.label} with AhasanHub`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_color-mix(in_srgb,var(--primary)_28%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_22px_46px_color-mix(in_srgb,var(--primary)_34%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {primaryCta.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href={secondaryCta.href}
                aria-label={`${secondaryCta.label} from AhasanHub`}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/50 bg-surface/70 px-5 text-base font-semibold text-foreground shadow-[0_14px_34px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:border-white/10 dark:bg-surface/55 dark:hover:bg-surface/75"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="[animation:fade-up_700ms_120ms_ease-out_both]">
            <HeroVisualCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
