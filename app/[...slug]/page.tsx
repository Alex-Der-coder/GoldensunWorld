import { notFound } from "next/navigation";
import Content from "@/components/Content";
import { getPage, listPages } from "@/lib/content";
import { allInternalSlugs } from "@/lib/nav";

export const dynamicParams = true;
export const generateStaticParams = () =>
  Array.from(new Set([...listPages(), ...allInternalSlugs])).map((s) => ({ slug: s.split("/") }));

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.map(decodeURIComponent).join("/");
  const page = getPage(key);
  if (!page) {
    if (!allInternalSlugs.includes(key)) notFound();
    return (
      <center>
        <br />
        Page pas encore importée : <b>{key}</b>
        <br />
        <span style={{ fontSize: "x-small" }}>npm run import</span>
      </center>
    );
  }
  return <Content doc={page} />;
}
