import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/mdx-components";

type InsightMdxContentProps = {
  content: string;
};

export async function InsightMdxContent({ content }: InsightMdxContentProps) {
  return <MDXRemote components={mdxComponents} source={content} />;
}
