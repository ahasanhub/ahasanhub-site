import { Container, SectionHeading } from "@/components/ui";
import { workProcessSteps } from "@/data/services";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section
      className="bg-surface-muted py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="process-section-title"
    >
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.75fr_1.25fr] xl:gap-14">
          <SectionHeading
            id="process-section-title"
            eyebrow="Process"
            title="A clear path from consultation to scalable launch."
            description="The workflow keeps strategy, architecture, engineering, and production readiness connected without adding unnecessary delivery weight."
          />

          <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0">
            {workProcessSteps.map((processStep, index) => {
              const isLast = index === workProcessSteps.length - 1;

              return (
                <li
                  key={processStep.step}
                  className="relative flex min-h-64 flex-col rounded-lg border border-border bg-surface p-5 xl:rounded-none xl:border-l-0 xl:first:rounded-l-lg xl:first:border-l xl:last:rounded-r-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-sm font-semibold text-primary">
                      {processStep.step}
                    </span>
                    <span
                      className={cn(
                        "hidden h-px flex-1 bg-border xl:block",
                        isLast && "xl:hidden",
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-base font-semibold leading-6 text-foreground">
                      {processStep.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {processStep.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
