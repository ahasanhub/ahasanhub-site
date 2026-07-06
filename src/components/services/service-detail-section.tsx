import {
  Badge,
  Card,
  CardContent,
  Container,
  SectionHeading,
} from "@/components/ui";
import type { ServiceDetailSection as ServiceDetailSectionData } from "@/data/services";
import { serviceDetailSections } from "@/data/services";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  CircleDotDashed,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const valueFlowSteps: Array<{
  key: keyof ServiceDetailSectionData["valueFlow"];
  label: string;
  icon: LucideIcon;
  tone: string;
}> = [
  {
    key: "trigger",
    label: "Business pressure",
    icon: CircleDotDashed,
    tone: "border-primary/25 bg-primary-muted text-primary",
  },
  {
    key: "delivery",
    label: "Delivery system",
    icon: Workflow,
    tone: "border-tech/25 bg-tech-muted text-tech",
  },
  {
    key: "outcome",
    label: "Measurable outcome",
    icon: CheckCircle2,
    tone: "border-premium/30 bg-premium-muted text-premium",
  },
];

export function ServiceDetailSection() {
  return (
    <section
      id="service-details"
      className="border-y border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="service-details-title"
    >
      <Container>
        <SectionHeading
          id="service-details-title"
          eyebrow="Service details"
          title="Focused capabilities with clear business value."
          description="Each service is structured around practical execution: what gets built, how it supports the operating model, and why it matters to the business."
        />

        <div className="mt-14 space-y-10">
          {serviceDetailSections.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                className="grid items-stretch gap-5 lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div
                  className={cn(
                    "flex min-h-72 flex-col rounded-lg border border-border bg-surface p-6 sm:p-8",
                    isReversed && "lg:order-last",
                  )}
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-lg border border-border bg-surface-muted p-4">
                      <p className="text-sm font-semibold text-foreground">
                        Delivery scope
                      </p>
                      <dl className="mt-4 grid gap-3">
                        {service.deliveryScope.map((item) => (
                          <div
                            key={item.label}
                            className="grid gap-1"
                          >
                            <dt className="text-xs font-semibold uppercase tracking-wide text-architecture">
                              {item.label}
                            </dt>
                            <dd className="text-sm leading-6 text-muted-foreground">
                              {item.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="rounded-lg border border-border bg-background p-4">
                      <p className="text-sm font-semibold text-foreground">
                        Expected outcomes
                      </p>
                      <ul className="mt-4 grid gap-3">
                        {service.expectedOutcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <CheckCircle2
                              aria-hidden="true"
                              className="mt-1 size-4 shrink-0 text-success"
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-foreground">
                      Key features
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.keyFeatures.map((feature) => (
                        <li key={feature}>
                          <Badge variant="neutral">{feature}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <BusinessValueCard service={service} />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function BusinessValueCard({
  service,
}: {
  service: ServiceDetailSectionData;
}) {
  return (
    <Card className="h-full overflow-hidden bg-surface-muted shadow-none transition duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg focus-within:border-border-strong focus-within:shadow-lg">
      <details className="group h-full" open>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 outline-none transition-colors hover:bg-surface/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring sm:p-8 [&::-webkit-details-marker]:hidden">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Business value
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {service.title} impact path
            </p>
          </div>

          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary transition duration-200 group-open:rotate-90">
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        </summary>

        <CardContent className="space-y-6 p-6 pt-0 sm:p-8 sm:pt-0">
          <ol className="grid gap-3" aria-label={`${service.title} value flow`}>
            {valueFlowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === valueFlowSteps.length - 1;

              return (
                <li key={step.key} className="relative">
                  {!isLast ? (
                    <span
                      className="absolute left-5 top-12 h-[calc(100%-1.5rem)] w-px bg-border transition-colors group-hover:bg-border-strong"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative flex gap-4 rounded-lg border border-border bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-background">
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg border",
                        step.tone,
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </span>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {step.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        {service.valueFlow[step.key]}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="rounded-lg border border-border bg-background p-4 text-base leading-7 text-foreground">
            {service.businessValue}
          </p>
        </CardContent>
      </details>
    </Card>
  );
}
