import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "premium" | "tech" | "architecture" | "neutral";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeVariants: Record<BadgeVariant, string> = {
  primary: "bg-primary-muted text-primary",
  premium: "bg-premium-muted text-premium",
  tech: "bg-tech-muted text-tech",
  architecture: "bg-architecture-muted text-architecture",
  neutral: "bg-muted text-muted-foreground",
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
