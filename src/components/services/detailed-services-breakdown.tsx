import { Container } from "@/components/ui";
import { serviceDetails } from "@/data/services";

export function DetailedServicesBreakdown() {
  return (
    <section
      id="service-breakdown"
      className="border-y border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-breakdown-title"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
            Detailed services breakdown
          </p>
          <h2
            id="services-breakdown-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
          >
            What each service is designed to produce.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The focus is not isolated deliverables. It is measurable movement
            from strategy to operating capability.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <div className="hidden grid-cols-[0.75fr_1fr_1fr] border-b border-border bg-surface-muted px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:grid">
            <span>Service</span>
            <span>Outcomes</span>
            <span>Best fit</span>
          </div>
          <div className="divide-y divide-border">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                className="grid gap-5 bg-surface px-5 py-6 md:grid-cols-[0.75fr_1fr_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground md:hidden">
                    Service
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground md:mt-0">
                    {service.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground md:hidden">
                    Outcomes
                  </p>
                  <ul className="mt-2 space-y-2 md:mt-0">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-sm leading-6 text-muted-foreground"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground md:hidden">
                    Best fit
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-0">
                    {service.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
