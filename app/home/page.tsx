import Link from "next/link";
import NewsBlock from "@/components/NewsBlock";
import { listNews } from "@/lib/content";

export default function Home() {
  const news = listNews().slice(0, 3);
  return (
    <center>
      <br /><br />
      <a href="https://twitter.com/GoldenSunWorld" target="_blank">Tweets by @GoldenSunWorld</a>
      <br />
      <br /><br />
      <a href="/box?type=bug">Boîte à bugs</a> - <a href="/box?type=suggestion">Boîte à suggestions</a>
      <br /><br />

      {news.map((n, i) => <NewsBlock key={n.id} news={n} kind={i % 2 === 0 ? "maj" : "news"} />)}

      <br />
      <Link href="/maj-archives"><b>ARCHIVES</b></Link>
      <br />
      <br />
      <a href="/cours_jp?page=cours_jp1" className="disabled">
        <img src="/legacy/img/coursdejap.gif" width={330} height={50} style={{ border: 1 }} alt="" />
      </a>
      <br /><br />
      <hr />
    </center>
  );
}
