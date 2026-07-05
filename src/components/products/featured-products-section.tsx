import { featuredProducts, type FeaturedProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export type FeaturedProductsSectionProps = {
  className?: string;
  products?: FeaturedProduct[];
};

export function FeaturedProductsSection({
  className,
  products = featuredProducts,
}: FeaturedProductsSectionProps) {
  return (
    <section
      aria-labelledby="featured-products-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Featured products & SaaS tools
          </p>
          <h2
            id="featured-products-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Product concepts shaped around enterprise adoption.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-architecture">
                  {product.category}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {product.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {product.description}
              </p>
              <p className="mt-auto pt-6 text-sm font-medium leading-6 text-foreground">
                {product.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
