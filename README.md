# Golden Sun World v3.3 — archive LAN (Next.js + Tailwind + MDX)

Reproduction à l'identique de la v3.3 : même layout en tableaux (760 px), mêmes images de découpe, mêmes classes CSS et feuille de style d'origine. Le contenu importé est conservé en HTML pour un rendu fidèle. Les pages écrites à la main restent en MDX.

## Installation (PowerShell)

```powershell
npm install
npm run assets                       # CSS + images du layout -> public\legacy
$env:GSW_ONLY = "gs1_boss"; npm run import   # test sur une page
npm run dev                          # http://localhost:3000/gs1_boss
```

Si `/gs1_boss` est identique à l'original, importe tout :

```powershell
Remove-Item Env:GSW_ONLY
npm run import                       # toutes les pages du menu
$env:GSW_NEWS = "1"; npm run import  # + les news (/news/1 à 182)
```

Puis supprime les news d'exemple : `content\news\example-*.mdx`.

Production sur le LAN : `npm run build` puis `npm start` (écoute sur 0.0.0.0:3000).

## Fonctionnement

- `scripts/fetch-assets.mjs` télécharge le CSS d'origine et les images `/assets/layer/*`, retire les hash des noms (`top-<hash>.jpg` → `layer/top.jpg`) et réécrit les `url()` du CSS.
- `scripts/import.mjs` récupère le contenu de `td.yield` de chaque page, télécharge ses images dans `public/legacy/`, convertit les popups `window.open()` en liens `data-popup`, et écrit `content/pages/<slug>.md` avec `raw: true`.
- `app/layout.tsx` reprend le tableau principal ; `components/LeftMenu.tsx` et `RightColumn.tsx` reprennent les colonnes ; `components/NewsBlock.tsx` reprend les blocs `title_maj` / `title_news`.
- Tailwind est chargé sans preflight pour ne pas écraser le CSS d'origine.

## Pas encore fonctionnel

Connexion, Dialbox, Jukebox, livre d'or et commentaires sont visuellement identiques mais statiques : il faut une base de données (idéalement le dump SQL du site).
