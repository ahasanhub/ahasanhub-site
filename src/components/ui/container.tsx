import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "md" | "lg" | "xl" | "full";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

const containerSizes: Record<ContainerSize, string> = {
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  className,
  size = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-page-x sm:px-page-x-sm lg:px-page-x-lg",
        containerSizes[size],
        className,
      )}
      {...props}
    />
  );
}
