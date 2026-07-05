import { productCategories, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export type ProductCategoriesSectionProps = {
  className?: string;
  categories?: ProductCategory[];
};

export function ProductCategoriesSection({
  className,
  categories = productCategories,
}: ProductCategoriesSectionProps) {
  return (
    <section
      aria-labelledby="product-categories-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-premium">
            Product categories
          </p>
          <h2
            id="product-categories-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            A focused ecosystem for digital business systems.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
