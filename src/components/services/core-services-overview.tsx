import { Container } from "@/components/ui";
import { services } from "@/data/services";

export function CoreServicesOverview() {
  return (
    <section
      className="bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="core-services-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
              Core services overview
            </p>
            <h2
              id="core-services-title"
              className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
            >
              A focused service system for modern enterprise delivery.
            </h2>
          </div>
          <p className="text-base leading-7 text-muted-foreground lg:pt-10">
            Each capability supports strategy, architecture, implementation, and
            future platform growth without forcing unnecessary complexity into
            the first release.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid gap-5 py-6 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.7fr_1fr_0.8fr]"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {service.summary}
              </p>
              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {service.focusAreas.map((focusArea) => (
                  <li
                    key={focusArea}
                    className="rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {focusArea}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
