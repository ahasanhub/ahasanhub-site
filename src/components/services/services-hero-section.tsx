import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

const serviceSignals = [
  {
    label: "AI",
    description: "Applied automation, LLM systems, and decision support.",
  },
  {
    label: "ERP",
    description: "Dynamics 365, Business Central, NAV, and integrations.",
  },
  {
    label: "Cloud",
    description: "Azure foundations, DevOps, reliability, and scale.",
  },
];

export function ServicesHeroSection() {
  return (
    <section
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-hero-title"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              AhasanHub Services
            </p>
            <h1
              id="services-hero-title"
              className="mt-7 max-w-5xl text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Enterprise Technology Services That Scale Businesses
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              AhasanHub delivers AI systems, ERP architecture, cloud
              infrastructure, SaaS platforms, and full-stack engineering
              solutions for modern enterprises.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Discuss a service need
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="#service-breakdown"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-transparent px-5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Explore capabilities
              </Link>
            </div>
          </div>

          <div className="border-l border-border pl-6">
            <p className="text-sm font-semibold leading-6 text-foreground">
              Structured for enterprise teams that need architecture clarity,
              implementation quality, and systems that remain maintainable after
              launch.
            </p>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {serviceSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="grid gap-3 py-5 sm:grid-cols-[5rem_1fr]"
                >
                  <dt className="text-2xl font-semibold text-foreground">
                    {signal.label}
                  </dt>
                  <dd className="text-sm leading-6 text-muted-foreground">
                    {signal.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
