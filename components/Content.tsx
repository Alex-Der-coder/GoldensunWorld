import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Doc } from "@/lib/content";

// Contenu importé (raw: true) = HTML d'origine rendu tel quel, pour un rendu identique.
// Contenu écrit à la main = MDX.
export default function Content({ doc }: { doc: Pick<Doc, "body" | "format" | "data"> }) {
  if (doc.data.raw) return <div dangerouslySetInnerHTML={{ __html: doc.body }} />;
  return <MDXRemote source={doc.body} options={{ mdxOptions: { format: doc.format, remarkPlugins: [remarkGfm] } }} />;
}