import { use } from "react";
import type { Metadata } from "next";
import type { Props } from "./props";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/code-block";
import Basic from "@flowui/react/basic";
import Data from "@flowui/react/data";
import Feedback from "@flowui/react/feedback";
import Forms from "@flowui/react/forms";
import Icons from "@flowui/react/icons";
import Layout from "@flowui/react/layout";

export default function DocsPage({ params }: Props) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));

  if (page === null) {
    notFound();
  }

  return (
    <MDXRemote
      source={page.content}
      components={
        {
          CodeBlock,
          ...Basic,
          ...Data,
          ...Feedback,
          ...Forms,
          ...Icons,
          ...Layout,
        } as any
      }
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDocPageContent(params.catSlug, params.pageSlug);

  return {
    title: page?.meta?.title ?? "Not Found",
    description: page?.meta?.description,
  };
}
