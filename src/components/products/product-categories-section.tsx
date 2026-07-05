import { productCategories, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";
import { Container, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import { BrainCircuit, CloudCog, Database, Layers, Terminal } from "lucide-react";

export type ProductCategoriesSectionProps = {
  className?: string;
  categories?: ProductCategory[];
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "AI & Automation Tools": BrainCircuit,
  "ERP Systems & Integrations": Database,
  "Cloud Infrastructure Tools": CloudCog,
  "SaaS Starter Kits": Layers,
  "Developer Tools & APIs": Terminal,
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
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-premium">
            Product Categories
          </p>
          <h2
            id="product-categories-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            A focused ecosystem for digital business systems
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => {
            const Icon = categoryIcons[category.name] || Layers;
            return (
              <Card
                key={category.name}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background/50 p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-background hover:shadow-md"
              >
                <CardHeader className="p-0 gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-premium transition duration-200 group-hover:bg-premium-muted">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-base font-bold text-foreground tracking-tight">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-6">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
