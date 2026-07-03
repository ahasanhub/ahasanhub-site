import {
  ArrowRight,
  Bot,
  Cloud,
  Database,
  GitBranch,
  Network,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

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

const architectureItems = [
  {
    label: "AI Workflow",
    value: "LLM-ready",
    icon: Bot,
    tone: "text-tech",
  },
  {
    label: "ERP Core",
    value: "Business aligned",
    icon: Database,
    tone: "text-primary",
  },
  {
    label: "Cloud Platform",
    value: "Azure scale",
    icon: Cloud,
    tone: "text-architecture",
  },
  {
    label: "Delivery Flow",
    value: "Composable",
    icon: GitBranch,
    tone: "text-premium",
  },
];

export function HeroSection({
  eyebrow = "Enterprise technology consulting",
  title = "Build intelligent systems that connect strategy, software, and operations.",
  description = "AhasanHub helps modern businesses design AI-enabled workflows, ERP architecture, cloud platforms, and maintainable full-stack systems with a premium engineering standard.",
  primaryCta = { label: "Start a Project", href: "/contact" },
  secondaryCta = { label: "Explore Services", href: "/services" },
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-3xl">
            <Badge variant="primary">{eyebrow}</Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {primaryCta.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-surface px-5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-6">
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Architecture Control Layer
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Strategy to delivery visibility
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                  <ShieldCheck aria-hidden="true" className="size-3.5" />
                  Stable
                </span>
              </div>

              <div className="grid gap-3 py-4 sm:grid-cols-2">
                {architectureItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border bg-surface p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex size-9 items-center justify-center rounded-lg bg-surface-muted",
                            item.tone,
                          )}
                        >
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {item.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-architecture-muted text-architecture">
                    <Network aria-hidden="true" className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Integrated technology map
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      AI, ERP, cloud, product delivery, and governance connected
                      through a practical architecture model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
