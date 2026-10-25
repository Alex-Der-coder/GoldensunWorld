import Link from "next/link";
import { formatDate, listNews } from "@/lib/content";

export default function Archives() {
  return (
    <>
      <center><b>ARCHIVES</b></center>
      <br />
      {listNews().map((n) => (
        <div key={n.id}>
          <span className="raquo"><b>&raquo;</b></span>{" "}
          <Link href={`/news/${n.id}`}>{formatDate(n.date)} par {n.author}</Link>
          {n.data.title ? <> — {n.data.title}</> : null}
        </div>
      ))}
    </>
  );
}
