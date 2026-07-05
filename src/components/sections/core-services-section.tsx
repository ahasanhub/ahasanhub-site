import {
  Bot,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  Layers3,
  Network,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type CoreServicesSectionProps = {
  className?: string;
};

const serviceIcons: Record<string, ServiceIcon> = {
  "ai-system-development": Bot,
  "erp-architecture-integration": DatabaseZap,
  "cloud-infrastructure-devops": CloudCog,
  "saas-platform-engineering": Layers3,
  "full-stack-application-development": Code2,
  "software-architecture-consulting": Network,
  "digital-transformation-strategy": Compass,
};

const serviceIconTones: Record<string, string> = {
  "ai-system-development": "bg-tech-muted text-tech",
  "erp-architecture-integration": "bg-primary-muted text-primary",
  "cloud-infrastructure-devops": "bg-architecture-muted text-architecture",
  "saas-platform-engineering": "bg-premium-muted text-premium",
  "full-stack-application-development": "bg-muted text-foreground",
  "software-architecture-consulting": "bg-surface-muted text-muted-foreground",
  "digital-transformation-strategy": "bg-architecture-muted text-architecture",
};

export function CoreServicesSection({ className }: CoreServicesSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
      aria-labelledby="core-services-heading"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="core-services-heading"
            eyebrow="Core services"
            title="Enterprise technology services for scalable systems."
            description="Focused architecture, engineering, and transformation services for organizations that need durable platforms, reliable delivery, and credible execution."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.id];

              return (
                <Card
                  key={service.id}
                  className="group flex h-full flex-col transition-colors hover:border-border-strong"
                >
                  <CardHeader className="gap-5">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-lg transition-colors group-hover:bg-surface-elevated",
                        serviceIconTones[service.id],
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-base">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.summary}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
