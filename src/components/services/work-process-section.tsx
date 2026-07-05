import { Container } from "@/components/ui";
import { workProcessSteps } from "@/data/services";

export function WorkProcessSection() {
  return (
    <section
      className="bg-surface-muted py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-process-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-tech">
              Process
            </p>
            <h2
              id="services-process-title"
              className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
            >
              How we work: clear decisions before heavy delivery.
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {workProcessSteps.map((processStep) => (
              <div
                key={processStep.step}
                className="grid gap-4 py-6 sm:grid-cols-[5rem_1fr]"
              >
                <p className="text-sm font-semibold text-primary">
                  {processStep.step}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {processStep.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {processStep.description}
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
