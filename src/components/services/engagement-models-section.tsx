import { Container } from "@/components/ui";
import { engagementModels } from "@/data/services";

export function EngagementModelsSection() {
  return (
    <section
      className="bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-engagement-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Engagement models
            </p>
            <h2
              id="services-engagement-title"
              className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
            >
              Flexible models for advisory, architecture, and delivery.
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="grid gap-4 py-6 md:grid-cols-[0.75fr_1.25fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-architecture">
                    {model.fit}
                  </p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
