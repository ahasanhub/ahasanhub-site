declare module "next-mdx-remote/rsc" {
  import type { ElementType, ReactElement } from "react";

  type MdxComponentMap = Record<string, ElementType>;

  export type MDXRemoteProps = {
    source: string;
    components?: MdxComponentMap;
  };

  export function MDXRemote(props: MDXRemoteProps): Promise<ReactElement>;
}
