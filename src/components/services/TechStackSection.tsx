import {
  Bot,
  CloudCog,
  Code2,
  DatabaseZap,
  Layers3,
  MonitorCog,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Container, SectionHeading } from "@/components/ui";
import { technologyStackGroups } from "@/data/services";
import { cn } from "@/lib/utils";
import { TechCategoryCard } from "./TechCategoryCard";

type TechStackIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type TechStackSectionProps = {
  className?: string;
};

const categoryIcons: Record<string, TechStackIcon> = {
  "frontend-engineering": MonitorCog,
  "backend-enterprise-development": Code2,
  "cloud-infrastructure": CloudCog,
  "enterprise-systems": DatabaseZap,
  "ai-machine-learning": Bot,
  "saas-platform-engineering": Layers3,
};

export function TechStackSection({ className }: TechStackSectionProps) {
  return (
    <section
      className={cn(
        "border-y border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
      aria-labelledby="tech-stack-title"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              id="tech-stack-title"
              eyebrow="Technology stack"
              title="Enterprise technology capability across AI, ERP, cloud, and SaaS."
              description="AhasanHub combines Microsoft ecosystem depth, AWS and Azure cloud architecture, applied AI systems, and full-stack engineering into a consulting-grade delivery model."
            />
            <p className="text-base leading-7 text-muted-foreground lg:pb-1">
              The stack is selected for production reliability, integration
              strength, and long-term maintainability, not for trend-chasing tool
              lists.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {technologyStackGroups.map((group) => (
              <TechCategoryCard
                key={group.id}
                category={group.category}
                description={group.description}
                technologies={group.technologies}
                icon={categoryIcons[group.id]}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
