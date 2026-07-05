import {
  Badge,
  Card,
  CardContent,
  Container,
  SectionHeading,
} from "@/components/ui";
import { serviceDetailSections } from "@/data/services";
import { cn } from "@/lib/utils";

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
                    "flex min-h-72 flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8",
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

                <Card className="flex h-full items-end bg-surface-muted shadow-none">
                  <CardContent className="p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Business value
                    </p>
                    <p className="mt-4 text-lg leading-8 text-foreground">
                      {service.businessValue}
                    </p>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
