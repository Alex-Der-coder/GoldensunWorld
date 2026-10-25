#!/usr/bin/env node
// Import du contenu de v3.goldensun-world.com vers content/ + public/
// À lancer depuis ta machine :  npm run import
//
// Trois types de ressources :
//   - pages du layout (contiennent td.yield) -> content/pages/<slug>.md (HTML brut, raw: true)
//   - pages autonomes (popups, vieilles pages .htm, soluce GS1...) -> public/ à l'identique
//   - fichiers (sauvegardes .sgm, images, zip...) -> public/ au même chemin
//
// Options (variables d'environnement) :
//   GSW_ONLY=gs2_soluce,gs1_boss   point(s) de départ (défaut : tout le menu)
//   GSW_NEWS=1                     importe aussi les news (/news/N)
//   GSW_NEWS_MAX=182               id max des news
//   GSW_DELAY=800                  pause entre requêtes (ms)
//   GSW_CRAWL=0                    ne pas suivre les liens internes
//   GSW_FORCE=1                    réimporter même ce qui existe déjà

import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const BASE = process.env.GSW_BASE ?? "https://v3.goldensun-world.com";
const SELECTOR = process.env.GSW_SELECTOR || "td.yield";
const DELAY = Number(process.env.GSW_DELAY ?? 800);
const ONLY = (process.env.GSW_ONLY ?? "").split(",").map((s) => s.trim()).filter(Boolean);
const CRAWL = process.env.GSW_CRAWL !== "0";
const FORCE = !!process.env.GSW_FORCE;
const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const HOST = new URL(BASE).host;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { headers: { "User-Agent": "GSW-LAN-archive/1.0" } };

// Pages dynamiques à ne pas aspirer (gérées par l'app, ou propres à Cloudflare)
const SKIP = /^(news|users|dialbox|box|list_membre|list_membre_attente|maj-archives|home|site_juke|site_jukeflash|cable|assets|legacy|cdn-cgi)(\/|$)/;
const FILE_EXT = /\.(zip|rar|7z|sav|sgm|srm|sps|gsv|gba|ips|mp3|ogg|mid|midi|wav|wma|pdf|png|jpe?g|gif|bmp|ico|swf|txt|doc|exe|avi|wmv|mpe?g|mp4|flv)$/i;

const exists = async (p) => { try { await fs.access(p); return true; } catch { return false; } };
const write = async (dest, data) => { await fs.mkdir(path.dirname(dest), { recursive: true }); await fs.writeFile(dest, data); };
const fm = (obj) => "---\n" + Object.entries(obj).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n") + "\n---\n\n";

async function getSlugs() {
  const src = await fs.readFile(path.join(ROOT, "lib/nav.ts"), "utf8");
  const slugs = [...src.matchAll(/\bl\("[^"]*",\s*"\/([^"#]+)/g)].map((m) => m[1]);
  return [...new Set(slugs)].filter((s) => !SKIP.test(s));
}

// "/assets/layer/x-<hash>.png" -> "legacy/layer/x.png" ; "/img/a.gif" -> "legacy/img/a.gif"
const legacyName = (p) =>
  "legacy/" + decodeURIComponent(p).replace(/^\/assets\//, "").replace(/^\/+/, "").replace(/-[0-9a-f]{32,64}(?=\.[a-z0-9]+$)/i, "");

// Télécharge une ressource du site dans public/legacy/ et renvoie son nouveau chemin
const downloaded = new Map();
async function downloadAsset(absUrl) {
  const u = new URL(absUrl);
  if (u.host !== HOST) return absUrl;
  if (downloaded.has(u.pathname)) return downloaded.get(u.pathname);
  const rel = legacyName(u.pathname);
  const dest = path.join(PUBLIC, rel);
  downloaded.set(u.pathname, "/" + rel); // avant le téléchargement : évite les boucles CSS -> CSS
  if (!(await exists(dest))) {
    try {
      const res = await fetch(u, UA);
      if (!res.ok) { console.warn(`    ! ${res.status} ${u.pathname}`); downloaded.set(u.pathname, absUrl); return absUrl; }
      if (u.pathname.endsWith(".css")) {
        // Feuille de style : on rapatrie aussi ses url() et on les réécrit
        let css = await res.text();
        const refs = [...new Set([...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map((m) => m[1]))].filter((r) => !r.startsWith("data:"));
        for (const r of refs) css = css.split(r).join(await downloadAsset(new URL(r, u).href));
        await write(dest, css);
      } else {
        await write(dest, Buffer.from(await res.arrayBuffer()));
      }
    } catch (e) { console.warn(`    ! ${u.pathname} — ${e.message}`); downloaded.set(u.pathname, absUrl); return absUrl; }
  }
  return "/" + rel;
}

// Adresses e-mail masquées par Cloudflare (data-cfemail / email-protection#hex)
function cfDecode(hex) {
  const key = parseInt(hex.slice(0, 2), 16);
  let out = "";
  for (let i = 2; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
  return out;
}
function decodeEmails($, $root) {
  $root.find("[data-cfemail]").each((_, el) => { $(el).replaceWith(cfDecode($(el).attr("data-cfemail"))); });
  $root.find('a[href*="/cdn-cgi/l/email-protection"]').each((_, el) => {
    const hex = ($(el).attr("href").split("#")[1] ?? "");
    if (hex) $(el).attr("href", "mailto:" + cfDecode(hex));
  });
  $root.find('script[src*="email-decode"]').remove();
}

// Réécrit images, médias et liens d'un fragment.
// keepScripts=false (pages du layout rendues par React) : scripts et on* retirés, popups -> data-popup
// keepScripts=true  (pages autonomes servies telles quelles) : on garde tout
// Seul module JS utile hors ligne (soluce.js d'origine : menu déroulant de chapitres)
const CHANGE_URL =
  "window.ChangeUrl=function(f){if(f.ListeUrl.selectedIndex!=0){location.href=f.ListeUrl.options[f.ListeUrl.selectedIndex].value;}};";

async function rewrite($, $root, pageUrl, { keepScripts }) {
  decodeEmails($, $root);

  if (keepScripts) {
    // Modules Rails (Turbo, ActionCable, jQuery...) : inutiles en LAN et pointent vers le site d'origine
    $root.find('script[type="importmap"], script[type="module"], link[rel="modulepreload"]').remove();
    $root.find('meta[name="csrf-param"], meta[name="csrf-token"], meta[name="action-cable-url"]').remove();
    if ($.html().includes("ChangeUrl")) $("head").append(`<script>${CHANGE_URL}</script>`);
  }

  if (!keepScripts) {
    $root.find("script, noscript").remove();
    for (const el of $root.find("[onclick]").toArray()) {
      const $el = $(el);
      const m = $el.attr("onclick").match(/window\.open\(\s*'([^']+)'\s*,\s*'([^']*)'.*?width=(\d+).*?height=(\d+)/);
      if (m && el.name === "a") $el.attr("href", m[1]).attr("target", m[2] || "_blank").attr("data-popup", `${m[3]}x${m[4]}`);
    }
    $root.find("*").each((_, el) => {
      for (const a of Object.keys(el.attribs ?? {})) if (/^on/i.test(a)) $(el).removeAttr(a);
    });
  }

  const media = [
    ["img[src]", "src"], ["[background]", "background"], ["embed[src]", "src"],
    ["object[data]", "data"], ["param[name=movie]", "value"], ["param[name=src]", "value"],
    ["link[rel=stylesheet][href]", "href"], ["script[src]", "src"], ["input[type=image][src]", "src"],
  ];
  for (const [sel, attr] of media) {
    for (const el of $root.find(sel).toArray()) {
      const v = $(el).attr(attr);
      if (!v || v.startsWith("data:")) continue;
      $(el).attr(attr, await downloadAsset(new URL(v, pageUrl).href));
    }
  }
  // Popups des pages autonomes : window.open('fichier.gif') -> on rapatrie le fichier aussi
  if (keepScripts) {
    for (const el of $root.find("[onclick]").toArray()) {
      const js = $(el).attr("onclick");
      const m = js.match(/window\.open\(\s*'([^']+)'/);
      if (m && FILE_EXT.test(m[1])) $(el).attr("onclick", js.replace(m[1], await downloadAsset(new URL(m[1], pageUrl).href)));
    }
  }

  for (const el of $root.find("a[href], area[href]").toArray()) {
    const href = $(el).attr("href");
    if (!href || /^(#|javascript:|mailto:)/.test(href)) continue;
    const u = new URL(href, pageUrl);
    if (u.host !== HOST) continue;
    if (FILE_EXT.test(u.pathname)) $(el).attr("href", await downloadAsset(u.href));
    else $(el).attr("href", u.pathname.replace(/\.php$/, "") + u.search + u.hash);
  }
}

// Liens internes vers d'autres pages ou fichiers, pour continuer l'exploration
function internalLinks($, $root, pageUrl) {
  const out = new Set();
  $root.find("a[href], area[href], frame[src], iframe[src]").each((_, a) => {
    const raw = $(a).attr("href") ?? $(a).attr("src");
    if (!raw || /^(#|javascript:|mailto:)/.test(raw)) return;
    let u;
    try { u = new URL(raw, pageUrl); } catch { return; }
    if (u.host !== HOST) return;
    const slug = decodeURIComponent(u.pathname).replace(/^\/+|\/+$/g, "").replace(/\.php$/, "");
    if (slug && !SKIP.test(slug) && !slug.startsWith("legacy/")) out.add(slug);
  });
  return out;
}

// Où écrire une page autonome : chemin d'origine s'il a une extension, sinon public/_standalone/<slug>.html
// (next.config.mjs crée une réécriture /<slug> -> /_standalone/<slug>.html pour chacune)
const standalonePath = (slug) =>
  /\.[a-z0-9]{2,5}$/i.test(slug) ? path.join(PUBLIC, slug) : path.join(PUBLIC, "_standalone", `${slug}.html`);

async function importPages() {
  const queue = ONLY.length ? [...ONLY] : await getSlugs();
  const seen = new Set(queue);
  const stats = { pages: 0, standalone: 0, files: 0, skipped: 0, failed: 0 };
  console.log(`Import depuis ${BASE} (liens internes suivis : ${CRAWL ? "oui" : "non"})`);

  const enqueue = (slugs) => { for (const s of slugs) if (!seen.has(s)) { seen.add(s); queue.push(s); } };

  while (queue.length) {
    const slug = queue.shift();
    const url = `${BASE}/${slug}`;
    const pageDest = path.join(ROOT, "content/pages", `${slug}.md`);
    const aloneDest = standalonePath(slug);
    const fileDest = path.join(PUBLIC, slug);

    try {
      // Déjà importé : on relit pour continuer à suivre les liens, sans retélécharger
      if (!FORCE) {
        for (const [p, isPage] of [[pageDest, true], [aloneDest, false]]) {
          if (await exists(p)) {
            const html = await fs.readFile(p, "utf8");
            const $ = cheerio.load(isPage ? html.replace(/^---[\s\S]*?---\s*/, "") : html);
            if (CRAWL) enqueue(internalLinks($, $.root(), url));
            stats.skipped++;
            throw "skip";
          }
        }
        if (FILE_EXT.test(slug) && (await exists(fileDest))) { stats.skipped++; continue; }
      }

      const res = await fetch(url, UA);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const type = res.headers.get("content-type") ?? "";

      // Fichier (sauvegarde, image, archive...) : copié au même chemin pour que les liens marchent tels quels
      if (!type.includes("text/html")) {
        await write(fileDest, Buffer.from(await res.arrayBuffer()));
        console.log(`  ↓ ${slug}`);
        stats.files++;
        await sleep(DELAY);
        continue;
      }

      const $ = cheerio.load(await res.text());
      const $c = $(SELECTOR).first();
      if ($c.length) {
        // Page du layout : on ne garde que le contenu central
        await rewrite($, $c, url, { keepScripts: false });
        if (CRAWL) enqueue(internalLinks($, $c, url));
        await write(pageDest, fm({ raw: true, source: url }) + ($c.html() ?? "").trim() + "\n");
        console.log(`  ✓ ${slug}`);
        stats.pages++;
      } else {
        // Page autonome : copiée entière, scripts compris
        await rewrite($, $.root(), url, { keepScripts: true });
        if (CRAWL) enqueue(internalLinks($, $.root(), url));
        await write(aloneDest, $.html());
        console.log(`  ◻ ${slug} (page autonome)`);
        stats.standalone++;
      }
      await sleep(DELAY);
    } catch (e) {
      if (e === "skip") continue;
      console.warn(`  ✗ ${slug} — ${e.message}`);
      stats.failed++;
    }
  }
  console.log(
    `Pages : ${stats.pages} · autonomes : ${stats.standalone} · fichiers : ${stats.files} · déjà présents : ${stats.skipped} · échecs : ${stats.failed}`,
  );
}

async function importNews() {
  const max = Number(process.env.GSW_NEWS_MAX ?? 182);
  console.log(`Import des news ${max} → 1`);
  for (let id = max; id >= 1; id--) {
    const url = `${BASE}/news/${id}`;
    const dest = path.join(ROOT, "content/news", `${id}.md`);
    if (!FORCE && (await exists(dest))) continue;
    try {
      const res = await fetch(url, UA);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const $ = cheerio.load(await res.text());
      const kind = $(".title_news").length && !$(".title_maj").length ? "news" : "maj";
      const head = $(".auteur").first().text().trim();
      const m = head.match(/(\d{2})\/(\d{2})\/(\d{2})\s+par\s+(.+)/i);
      const $td = $(".content_maj td, .content_news td").first();
      if (!$td.length) throw new Error("bloc de news introuvable");
      // L'habillage (image flottante, séparateur, lien commentaires) est recréé par le composant
      $td.find("img.img_flottante").remove();
      $td.children("hr").last().nextAll().remove();
      $td.children("hr").last().remove();
      await rewrite($, $td, url, { keepScripts: false });
      const data = { raw: true, date: m ? `20${m[3]}-${m[2]}-${m[1]}` : "", author: m ? m[4].trim() : "", kind, source: url };
      await write(dest, fm(data) + ($td.html() ?? "").trim() + "\n");
      console.log(`  ✓ news ${id} (${data.date} ${data.author})`);
    } catch (e) {
      console.warn(`  ✗ news ${id} — ${e.message}`);
    }
    await sleep(DELAY);
  }
}

await importPages();
if (process.env.GSW_NEWS) await importNews();
console.log("Terminé. Redémarre `npm run dev` pour prendre en compte les nouvelles pages autonomes.");
