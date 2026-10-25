import Link from "next/link";
import Content from "./Content";
import { L } from "./legacy";
import { formatDate, type News } from "@/lib/content";

// Bloc de news d'origine : alterne les styles "maj" et "news"
export default function NewsBlock({ news, kind, showLink = true }: { news: News; kind: "maj" | "news"; showLink?: boolean }) {
  const comments = Number(news.data.comments ?? 0);
  return (
    <>
      <div className={`title_${kind}`}>
        <img src={L(`bas_${kind}.png`)} className={`img_flottante_${kind}`} alt="" />
        <div className="auteur"><b>{formatDate(news.date)} par {news.author}</b></div>
      </div>
      <div className={`content_${kind}`}>
        <table className="triche">
          <tbody>
            <tr>
              <td>
                <img src={L(`transparent-${kind}.png`)} className="img_flottante" alt="" />
                <Content doc={news} />
                {showLink && (
                  <>
                    <hr style={{ width: "80%" }} />
                    <Link href={`/news/${news.id}`}>Voir commentaire{comments > 1 ? "s" : ""} - [{comments}]</Link>
                    <br />
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </>
  );
}
