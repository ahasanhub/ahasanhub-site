import { ArrowRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { InsightListItem } from "@/types/insights";
import { CategoryBadge } from "./CategoryBadge";

export type InsightCardProps = {
  insight: InsightListItem;
};

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card className="group flex h-full flex-col transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_9%,transparent)]">
      <article className="flex h-full flex-col">
        {insight.image ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-border bg-surface-muted">
            <Image
              src={insight.image}
              alt={insight.imageAlt ?? insight.title}
              fill
              className="object-contain p-8 transition duration-200 group-hover:scale-[1.02]"
              sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : null}

        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={insight.category} />
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Clock3 aria-hidden="true" className="size-3.5" />
              {insight.readingTime}
            </span>
          </div>

          <CardTitle className="text-xl leading-7 tracking-tight">
            <Link
              href={`/insights/${insight.slug}`}
              className="transition-colors group-hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {insight.title}
            </Link>
          </CardTitle>

          <CardDescription>{insight.description}</CardDescription>
        </CardHeader>

        <CardContent className="mt-auto">
          <Link
            href={`/insights/${insight.slug}`}
            aria-label={`Read ${insight.title}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Read insight
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </CardContent>
      </article>
    </Card>
  );
}
