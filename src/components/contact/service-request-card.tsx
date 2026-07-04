import type { ComponentType, SVGProps } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

type ServiceRequestCardProps = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function ServiceRequestCard({
  title,
  description,
  icon: Icon,
}: ServiceRequestCardProps) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
      <CardHeader className="gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-architecture-muted text-architecture">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
