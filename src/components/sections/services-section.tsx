import {
  Bot,
  Boxes,
  Cloud,
  Code2,
  Database,
  Workflow,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type ServicesSectionProps = {
  className?: string;
};

const serviceIcons: Record<string, ServiceIcon> = {
  "ai-consulting": Bot,
  "erp-architecture": Database,
  "cloud-solutions": Cloud,
  "saas-development": Boxes,
  "full-stack-engineering": Code2,
  "system-integration": Workflow,
};

const serviceIconTones: Record<string, string> = {
  "ai-consulting": "bg-tech-muted text-tech",
  "erp-architecture": "bg-primary-muted text-primary",
  "cloud-solutions": "bg-architecture-muted text-architecture",
  "saas-development": "bg-premium-muted text-premium",
  "full-stack-engineering": "bg-muted text-foreground",
  "system-integration": "bg-surface-muted text-muted-foreground",
};

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Services"
            title="Enterprise technology services"
            description="Focused consulting and engineering services for organizations that need durable architecture, reliable delivery, and systems that scale."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.id];

              return (
                <Card
                  key={service.id}
                  className="flex h-full flex-col transition-colors hover:border-border-strong"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl",
                        serviceIconTones[service.id],
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {service.focusAreas.map((focusArea) => (
                        <Badge key={focusArea} variant="neutral">
                          {focusArea}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
