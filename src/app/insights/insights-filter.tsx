"use client";

import { useMemo, useState } from "react";
import { InsightCard } from "@/components/insights/InsightCard";
import { cn } from "@/lib/utils";
import type { InsightListItem } from "@/types/insights";

type InsightsFilterProps = {
  insights: InsightListItem[];
};

const allCategoriesLabel = "All Insights";

function getUniqueValues(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function InsightsFilter({ insights }: InsightsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(allCategoriesLabel);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = useMemo(
    () => [
      allCategoriesLabel,
      ...getUniqueValues(insights.map((insight) => insight.category)),
    ],
    [insights],
  );

  const tags = useMemo(
    () => getUniqueValues(insights.flatMap((insight) => insight.tags)),
    [insights],
  );

  const filteredInsights = useMemo(() => {
    return insights.filter((insight) => {
      const matchesCategory =
        selectedCategory === allCategoriesLabel ||
        insight.category === selectedCategory;
      const matchesTag = selectedTag === null || insight.tags.includes(selectedTag);

      return matchesCategory && matchesTag;
    });
  }, [insights, selectedCategory, selectedTag]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
        <div className="flex flex-wrap gap-2" aria-label="Filter by category">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-3 text-sm font-semibold transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Filter by tag">
          {tags.map((tag) => {
            const isActive = selectedTag === tag;

            return (
              <button
                key={tag}
                type="button"
                className={cn(
                  "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isActive
                    ? "border-tech bg-tech-muted text-tech"
                    : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
                aria-pressed={isActive}
                onClick={() => setSelectedTag(isActive ? null : tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredInsights.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </div>
  );
}
