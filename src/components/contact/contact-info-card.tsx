import type { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

export type ContactInfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
};

export function ContactInfoCard({
  icon,
  title,
  description,
  children,
}: ContactInfoCardProps) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_8%,transparent)]">
      <CardHeader>
        <div className="flex size-11 items-center justify-center rounded-xl bg-surface-muted text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  );
}
