import { notFound } from "next/navigation";
import NewsBlock from "@/components/NewsBlock";
import { getNews, listNews } from "@/lib/content";

export const generateStaticParams = () => listNews().map((n) => ({ id: n.id }));

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = getNews(id);
  if (!news) notFound();
  return (
    <center>
      <br />
      <NewsBlock news={news} kind={news.data.kind === "news" ? "news" : "maj"} showLink={false} />
    </center>
  );
}
