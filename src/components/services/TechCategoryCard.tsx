import type { ComponentType, SVGProps } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

export type TechCategoryCardProps = {
  category: string;
  description: string;
  technologies: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
};

export function TechCategoryCard({
  category,
  description,
  technologies,
  icon: Icon,
  className,
}: TechCategoryCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col rounded-2xl shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-md",
        className,
      )}
    >
      <CardHeader className="gap-5">
        <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-muted text-architecture transition-colors group-hover:bg-background">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div className="space-y-3">
          <CardTitle className="text-lg">{category}</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="mt-auto">
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${category} technologies`}
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-border-strong"
            >
              {technology}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
