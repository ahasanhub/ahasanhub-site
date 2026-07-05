import { productUseCases, type ProductUseCase } from "@/data/products";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-page-x sm:px-page-x-sm lg:grid-cols-[0.8fr_1.2fr] lg:px-page-x-lg">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-tech">
            Use cases
          </p>
          <h2
            id="product-use-cases-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Built for the workflows where enterprise teams lose speed.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="py-5">
              <h3 className="text-lg font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
