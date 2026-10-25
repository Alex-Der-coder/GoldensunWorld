#!/usr/bin/env node
// Rapatrie le CSS et les images du layout d'origine dans public/legacy/
//   /assets/layer/top-<hash>.jpg   ->  public/legacy/layer/top.jpg
//   /assets/application-<hash>.css ->  public/legacy/application.css (url() réécrites)
// Usage : npm run assets

import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const BASE = process.env.GSW_BASE ?? "https://v3.goldensun-world.com";
const PAGES = ["/home", "/gs1_boss"];
const EXTRA = ["/img/coursdejap.gif"]; // images référencées hors /assets
const OUT = path.join(process.cwd(), "public", "legacy");

// "/assets/layer/top-<64 hex>.jpg" -> "layer/top.jpg"
export function localName(urlPath) {
  return decodeURIComponent(urlPath)
    .replace(/^\/assets\//, "")
    .replace(/^\/+/, "")
    .replace(/-[0-9a-f]{32,64}(?=\.[a-z0-9]+$)/i, "");
}

const done = new Set();
async function download(absUrl) {
  const u = new URL(absUrl, BASE);
  if (u.host !== new URL(BASE).host || done.has(u.pathname)) return;
  done.add(u.pathname);
  const dest = path.join(OUT, localName(u.pathname));
  const res = await fetch(u, { headers: { "User-Agent": "GSW-LAN-archive/1.0" } });
  if (!res.ok) return console.warn(`  ✗ ${res.status} ${u.pathname}`);
  await fs.mkdir(path.dirname(dest), { recursive: true });

  if (u.pathname.endsWith(".css")) {
    let css = await res.text();
    const urls = [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map((m) => m[1]).filter((x) => !x.startsWith("data:"));
    for (const ref of urls) {
      const abs = new URL(ref, u).href;
      await download(abs);
      css = css.split(ref).join("/legacy/" + localName(new URL(abs).pathname));
    }
    await fs.writeFile(path.join(OUT, "application.css"), css);
    console.log(`  ✓ application.css (${urls.length} url() réécrites)`);
  } else {
    await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`  ✓ ${localName(u.pathname)}`);
  }
}

for (const p of PAGES) {
  const html = await (await fetch(BASE + p)).text();
  const $ = cheerio.load(html);
  const refs = new Set();
  $("link[rel=stylesheet], link[rel=icon], link[rel=apple-touch-icon]").each((_, e) => refs.add($(e).attr("href")));
  $("img[src]").each((_, e) => { const s = $(e).attr("src"); if (s.includes("/assets/")) refs.add(s); });
  $("[background]").each((_, e) => refs.add($(e).attr("background")));
  for (const r of refs) if (r) await download(r);
}
for (const e of EXTRA) await download(BASE + e);
console.log("Assets rapatriés dans public/legacy/");
