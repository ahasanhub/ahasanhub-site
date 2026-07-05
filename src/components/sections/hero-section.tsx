import { ArrowRight, Network } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { HeroBackground } from "./hero-background";
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
      <span className="block">
        <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
          AI-Powered
        </span>{" "}
        Enterprise Systems
      </span>
      <span className="mt-2 block">
        That Think, Adapt &amp;{" "}
        <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
          Automate
        </span>
      </span>
      <span className="mx-auto mt-4 block max-w-4xl text-[0.58em] font-bold leading-[1.1]">
        Modernize Everything Behind Your Business
      </span>
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
        "relative isolate overflow-hidden border-b border-border bg-background pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-section-y-lg lg:pt-20",
        className,
      )}
    >
      <HeroBackground />

      <Container>
        <div className="mx-auto max-w-5xl text-center [animation:fade-up_600ms_ease-out_both]">
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
          <h1 className="mx-auto mt-8 max-w-5xl text-[2.05rem] font-extrabold leading-[1.04] text-foreground min-[375px]:text-[2.25rem] sm:text-[3.1rem] lg:text-[3.5rem] xl:text-[3.9rem]">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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

        <div className="mx-auto mt-12 max-w-3xl [animation:fade-up_700ms_120ms_ease-out_both] sm:mt-14 lg:mt-16">
          <HeroVisualCard />
        </div>
      </Container>
    </section>
  );
}
