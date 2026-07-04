import type { BadgeProps } from "@/components/ui";
import { Badge } from "@/components/ui";

export type CategoryBadgeProps = Omit<BadgeProps, "variant"> & {
  category: string;
};

function getCategoryVariant(
  category: string,
): NonNullable<BadgeProps["variant"]> {
  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("ai") || normalizedCategory.includes("erp")) {
    return "primary";
  }

  if (normalizedCategory.includes("cloud")) {
    return "architecture";
  }

  if (normalizedCategory.includes("saas")) {
    return "tech";
  }

  if (normalizedCategory.includes("architecture")) {
    return "premium";
  }

  return "neutral";
}

export function CategoryBadge({
  category,
  children,
  ...props
}: CategoryBadgeProps) {
  return (
    <Badge variant={getCategoryVariant(category)} {...props}>
      {children ?? category}
    </Badge>
  );
}
