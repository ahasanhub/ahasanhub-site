import { productUseCases, type ProductUseCase } from "@/data/products";
import { cn } from "@/lib/utils";
import { Container, Card } from "@/components/ui";

export type ProductUseCasesSectionProps = {
  className?: string;
  useCases?: ProductUseCase[];
};

export function ProductUseCasesSection({
  className,
  useCases = productUseCases,
}: ProductUseCasesSectionProps) {
  return (
    <section
      aria-labelledby="product-use-cases-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech">
            Use Cases
          </p>
          <h2
            id="product-use-cases-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Built for the workflows where enterprise teams lose speed
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {useCases.map((useCase, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={useCase.title}
                className="grid gap-8 items-start lg:grid-cols-2 lg:gap-16 lg:items-center"
              >
                {/* Text specs */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-tech">
                      0{index + 1} &mdash; Core Scenario
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {useCase.title}
                    </h3>
                  </div>

                  <div className="space-y-3 border-l-2 border-destructive/30 pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-destructive">
                      The Challenge
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {useCase.problem}
                    </p>
                  </div>

                  <div className="space-y-3 border-l-2 border-architecture/30 pl-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-architecture">
                      The Solution
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {useCase.solution}
                    </p>
                  </div>
                </div>

                {/* Key Impact Card */}
                <div className={cn("flex flex-col justify-center", isEven ? "lg:order-last" : "lg:order-first")}>
                  <Card className="rounded-2xl border border-border/80 bg-surface/50 p-6 sm:p-8 shadow-xs hover:border-border-strong hover:bg-surface hover:shadow-md transition-all duration-200">
                    <span className="text-xs font-semibold uppercase tracking-wider text-premium block mb-3">
                      Proven Impact
                    </span>
                    <p className="text-lg font-bold text-foreground sm:text-xl leading-8">
                      &ldquo;{useCase.impact}&rdquo;
                    </p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
