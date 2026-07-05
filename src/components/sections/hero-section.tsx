import { ArrowRight, Network } from "lucide-react";
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
  eyebrow = "AI-First Enterprise Transformation & Systems Engineering",
  title = (
    <>
      <span className="inline-block bg-gradient-to-r from-architecture via-tech to-primary bg-clip-text text-transparent">
        AI-Powered
      </span>{" "}
      <span className="inline-block">Enterprise Systems</span>
      <br />
      <span className="inline-block">That Think, Adapt &amp; </span>
      <span className="inline-block bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
        Automate
      </span>
      <br />
      <span className="inline-block">Modernize Everything Behind Your Business</span>
    </>
  ),
  description = "AhasanHub designs and engineers AI-integrated enterprise systems that connect legacy infrastructure, ERP platforms, and modern applications into intelligent, automated business ecosystems.",
  primaryCta = { label: "Start AI Transformation", href: "/contact" },
  secondaryCta = { label: "Explore Capabilities", href: "/services" },
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
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,color-mix(in_srgb,var(--architecture)_16%,transparent),transparent_28%),radial-gradient(circle_at_80%_16%,color-mix(in_srgb,var(--tech)_16%,transparent),transparent_25%),radial-gradient(circle_at_52%_82%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_30%),linear-gradient(135deg,var(--background),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_12%_18%,color-mix(in_srgb,var(--architecture)_20%,transparent),transparent_30%),radial-gradient(circle_at_80%_16%,color-mix(in_srgb,var(--tech)_18%,transparent),transparent_26%),radial-gradient(circle_at_52%_82%,color-mix(in_srgb,var(--primary)_14%,transparent),transparent_32%),linear-gradient(135deg,var(--background),var(--surface-muted))]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 -z-10 size-72 rounded-full bg-architecture/12 blur-3xl dark:bg-architecture/16"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-8 -z-10 size-80 rounded-full bg-tech/14 blur-3xl dark:bg-tech/16"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_62%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_62%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] opacity-45 [mask-image:radial-gradient(circle_at_50%_26%,black,transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle,color-mix(in_srgb,var(--architecture)_30%,transparent)_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.08]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-3xl text-center [animation:fade-up_600ms_ease-out_both] lg:mx-0 lg:text-left">
            <Badge
              variant="neutral"
              className="gap-3 rounded-full border border-tech/20 bg-surface/82 px-4 py-2.5 text-sm font-bold text-foreground shadow-[0_16px_36px_color-mix(in_srgb,var(--tech)_14%,transparent)] backdrop-blur-xl dark:border-tech/20 dark:bg-surface/60 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-tech-muted text-sm font-extrabold text-tech"
              >
                <Network className="size-5" />
              </span>
              <span>{eyebrow}</span>
            </Badge>
            <h1 className="mt-8 text-[2.55rem] font-extrabold leading-[1.02] text-foreground min-[375px]:text-[2.9rem] sm:text-[4rem] lg:text-[4.15rem] xl:text-[4.8rem]">
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
