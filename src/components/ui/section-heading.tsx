import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingAlign = "left" | "center";
type SectionHeadingLevel = "h1" | "h2";

export type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: SectionHeadingAlign;
  headingLevel?: SectionHeadingLevel;
};

const alignments: Record<SectionHeadingAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  headingLevel = "h2",
  ...props
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <div
      className={cn("flex max-w-3xl flex-col gap-stack-sm", alignments[align], className)}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
