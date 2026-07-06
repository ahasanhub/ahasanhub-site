import { Container, SectionHeading } from "@/components/ui";
import { workProcessSteps } from "@/data/services";

export function ProcessSection() {
  return (
    <section
      className="bg-surface-muted py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="process-section-title"
    >
      <Container>
        <div className="grid gap-10">
          <SectionHeading
            id="process-section-title"
            eyebrow="Process"
            title="A clear path from consultation to scalable launch."
            description="The workflow keeps strategy, architecture, engineering, and production readiness connected without adding unnecessary delivery weight."
          />

          <ol className="grid gap-4">
            {workProcessSteps.map((processStep) => (
              <li
                key={processStep.step}
                className="relative flex flex-col rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-start sm:gap-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-sm font-semibold text-primary">
                  {processStep.step}
                </span>

                <div className="mt-6 sm:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-foreground">
                    {processStep.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {processStep.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
