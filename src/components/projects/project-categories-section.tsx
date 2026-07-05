import {
  Bot,
  Building2,
  Cloud,
  Code2,
  Layers3,
  Network,
  type LucideIcon,
} from "lucide-react";
import {
  projectCategories,
  type ProjectCategory,
  type ProjectCategoryIcon,
} from "@/data/project-categories";
import { cn } from "@/lib/utils";

export type ProjectCategoriesSectionProps = {
  className?: string;
  categories?: ProjectCategory[];
};

const categoryIcons: Record<ProjectCategoryIcon, LucideIcon> = {
  ai: Bot,
  erp: Building2,
  cloud: Cloud,
  saas: Layers3,
  fullStack: Code2,
  architecture: Network,
};

export function ProjectCategoriesSection({
  className,
  categories = projectCategories,
}: ProjectCategoriesSectionProps) {
  return (
    <section
      aria-labelledby="project-categories-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-premium">
            Project categories
          </p>
          <h2
            id="project-categories-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Case studies organized by enterprise capability.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            AhasanHub frames project work around the systems, platforms, and
            architecture capabilities that shape durable business outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];

            return (
              <article
                key={category.name}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-architecture transition-colors group-hover:text-primary">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
