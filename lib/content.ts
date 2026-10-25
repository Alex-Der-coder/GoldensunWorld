import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content");

export type Doc = {
  slug: string;
  format: "md" | "mdx";
  data: Record<string, any>;
  body: string;
};

function readDoc(dir: string, slug: string): Doc | null {
  for (const format of ["mdx", "md"] as const) {
    const file = path.join(ROOT, dir, `${slug}.${format}`);
    if (fs.existsSync(file)) {
      const { data, content } = matter(fs.readFileSync(file, "utf8"));
      return { slug, format, data, body: content };
    }
  }
  return null;
}

function listDocs(dir: string): string[] {
  const base = path.join(ROOT, dir);
  if (!fs.existsSync(base)) return [];
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.mdx?$/.test(e.name)) out.push(path.relative(base, p).replace(/\.mdx?$/, "").split(path.sep).join("/"));
    }
  };
  walk(base);
  return out;
}

// Pages (soluces, listes, etc.) — content/pages/<slug>.mdx ; slug peut contenir des "/" (ex: art/fanart)
export const getPage = (slug: string) => readDoc("pages", slug);
export const listPages = () => listDocs("pages");

// News — content/news/<id>.mdx avec frontmatter { title?, date: "YYYY-MM-DD", author, comments? }
const toIso = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ""));

export type News = Doc & { id: string; date: string; author: string };
export function listNews(): News[] {
  return listDocs("news")
    .map((id) => readDoc("news", id)!)
    .map((d) => ({ ...d, id: d.slug, date: toIso(d.data.date), author: String(d.data.author ?? "") }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
export const getNews = (id: string) => listNews().find((n) => n.id === id) ?? null;

export function formatDate(iso: string) {
  // Format d'origine : JJ/MM/AA
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y.slice(2)}` : iso;
}
