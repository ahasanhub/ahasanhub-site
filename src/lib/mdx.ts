import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import type { Insight, InsightFrontmatter } from "@/types/insights";

const insightsDirectory = path.join(
  process.cwd(),
  "src",
  "content",
  "insights",
);

const WORDS_PER_MINUTE = 200;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function calculateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const minutes = Math.max(1, Math.ceil(words.length / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}

function parseInsightFrontmatter(
  data: Record<string, unknown>,
  filePath: string,
  content: string,
): InsightFrontmatter {
  const {
    title,
    description,
    date,
    category,
    tags,
    slug,
    readingTime,
    featured,
    image,
    imageAlt,
  } = data;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof date !== "string" ||
    typeof category !== "string" ||
    !isStringArray(tags) ||
    typeof slug !== "string" ||
    (readingTime !== undefined && typeof readingTime !== "string") ||
    typeof featured !== "boolean" ||
    (image !== undefined && typeof image !== "string") ||
    (imageAlt !== undefined && typeof imageAlt !== "string")
  ) {
    throw new Error(`Invalid insight frontmatter: ${filePath}`);
  }

  return {
    title,
    description,
    date,
    category,
    tags,
    slug,
    readingTime: readingTime ?? calculateReadingTime(content),
    featured,
    image,
    imageAlt,
  };
}

function getInsightFileNames() {
  return fs
    .readdirSync(insightsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));
}

function readInsightFile(fileName: string): Insight {
  const filePath = path.join(insightsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  const frontmatter = parseInsightFrontmatter(data, filePath, content);

  return {
    ...frontmatter,
    content,
  };
}

export const getAllInsights = cache(function getAllInsights(): Insight[] {
  return getInsightFileNames()
    .map(readInsightFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getInsightBySlug = cache(function getInsightBySlug(
  slug: string,
): Insight | null {
  const directFileName = `${slug}.mdx`;
  const directFilePath = path.join(insightsDirectory, directFileName);

  if (fs.existsSync(directFilePath)) {
    const insight = readInsightFile(directFileName);

    return insight.slug === slug ? insight : null;
  }

  return getAllInsights().find((insight) => insight.slug === slug) ?? null;
});

export const getRelatedInsights = cache(function getRelatedInsights(
  currentInsight: Insight,
  limit = 3,
): Insight[] {
  const currentTags = new Set(currentInsight.tags);

  return getAllInsights()
    .filter((insight) => insight.slug !== currentInsight.slug)
    .map((insight) => ({
      insight,
      matchingTagCount: insight.tags.filter((tag) => currentTags.has(tag))
        .length,
    }))
    .filter(({ matchingTagCount }) => matchingTagCount > 0)
    .sort((a, b) => {
      if (b.matchingTagCount !== a.matchingTagCount) {
        return b.matchingTagCount - a.matchingTagCount;
      }

      return (
        new Date(b.insight.date).getTime() -
        new Date(a.insight.date).getTime()
      );
    })
    .slice(0, limit)
    .map(({ insight }) => insight);
});

export const getFeaturedInsights = cache(function getFeaturedInsights(
  limit = 3,
): Insight[] {
  return getAllInsights()
    .filter((insight) => insight.featured)
    .slice(0, limit);
});
