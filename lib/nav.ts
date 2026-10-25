// Menus latéraux, dans l'ordre et avec les images d'en-tête du site d'origine.
export type NavLink = {
  label: string;
  href?: string;          // absent = libellé seul (ex: "Trucages par :")
  bold?: boolean;
  wiki?: boolean;         // lien "Voir le Wiki" (gras + souligné, interligne 24px)
  blank?: boolean;        // target="_blank"
  disabled?: boolean;     // classe "disabled" d'origine
  right?: boolean;        // sous-lien aligné à droite (Trucages)
  spaceAfter?: boolean;   // <br><br> après le lien
};
export type NavSection = { id: string; header: string; headerHeight?: number; links: NavLink[] };

const wiki = (href: string, spaceAfter = false): NavLink => ({ label: "Voir le Wiki", href, wiki: true, blank: true, disabled: true, spaceAfter });
const l = (label: string, href: string, opts: Partial<NavLink> = {}): NavLink => ({ label, href, ...opts });

export const leftNav: NavSection[] = [
  {
    id: "goldensun3",
    header: "topleft_05.gif",
    links: [
      wiki("http://wiki.goldensun-world.com/index.php/Golden_Sun_:_Obscure_Aurore", true),
      l("Personnages", "/gs3_personnages", { disabled: true }),
    ],
  },
  {
    id: "goldensun2",
    header: "topleft_02.gif",
    headerHeight: 32,
    links: [
      wiki("http://wiki.goldensun-world.com/index.php/Golden_Sun_:_l%27%C3%82ge_Perdu"),
      l("Test / Infos Jeu", "/gs2_info"),
      l("Histoire", "/gs2_histoire"),
      l("Personnage", "/gs2_personnages"),
      l("Soluce", "/gs2_soluce", { bold: true }),
      l("Quête des animaux ", "/gs2_quetedesanimaux", { bold: true }),
      l("Maîtres Elém.", "/gs2_liste_maitres_elem", { bold: true }),
      l("Guide tactique", "/guide_tactique", { bold: true }),
      l("Psynergie", "/gs2_psynergie"),
      l("Astuces", "/gs2_cheatcode"),
      l("Game Shark / AR", "/gs2_gameshark"),
      l("Invocations", "/gs2_invocation"),
      l("Djinn", "/gs2_djinn_list"),
      l("Classes", "/gs2_classes"),
      l("Item Classes", "/gs2_items_classes"),
      l("Shop", "/gs2_shop"),
      l("Objets", "/gs2_item"),
      l("Objets fontaine", "/gs2_fontaine"),
      l("Armes", "/gs2_armes"),
      l("Armures", "/gs2_armures"),
      l("Reliques", "/gs2_reliques"),
      l("Le Forgeron", "/gs2_forgeron"),
      l("Marais de Taopo", "/gs2_marais_taopo"),
      l("Meilleur Equipement", "/gs2_meilleur_equipement"),
      l("Carte du Monde", "/gs2_carte"),
      l("Boss", "/gs2_boss"),
      l("Code de Sauvegarde", "/gs2_codeacces"),
      l("Cinématiques", "/gs2_cinematique"),
      l("FAQ", "/gs2_faq"),
    ],
  },
  {
    id: "goldensun",
    header: "topleft_01.gif",
    headerHeight: 32,
    links: [
      wiki("http://wiki.goldensun-world.com/index.php/Golden_Sun_:_le_Sceau_Bris%C3%A9"),
      l("Histoire", "/gs1_histoire"),
      l("Info Jeu", "/gs1_info"),
      l("Personnages", "/gs1_perso"),
      l("Soluce", "/gs1_soluce", { bold: true, blank: true }),
      l("Île aux pirates", "/gs1_ileauxpirates", { bold: true }),
      l("Master Files", "/files/vlad", { blank: true }),
      l("Psynergie", "/gs2_psynergie"),
      l("Astuces", "/gs1_cheatcode"),
      l("Game Shark / AR", "/gs1_gameshark"),
      l("Invocations", "/gs2_invocation"),
      l("Djinn", "/gs1_djinn_tuto"),
      l("Classes", "/gs1_classes"),
      l("Shop", "/gs1_shop"),
      l("Objets", "/gs1_item"),
      l("Armes", "/gs1_armes"),
      l("Armures", "/gs1_armures"),
      l("Reliques (armes)", "/gs1_reliques"),
      l("Reliques (armures)", "/gs1_reliques2"),
      l("Reliques (anneaux)", "/gs1_reliques2#anneaux"),
      l("Meilleur Equipmnt", "/gs1_meilleur_equipement"),
      l("Carte du Monde", "/gs1_carte"),
      l("Boss", "/gs1_boss"),
      l("Code Sauvegarde", "/gs1_codeacces"),
      l("Box Art", "/gs1_boxart"),
    ],
  },
  {
    id: "myuluchimedia",
    header: "topleft_03.gif",
    headerHeight: 32,
    links: [
      l("Golden Sun Editor", "http://udanworld.free.fr/GSE/wtf.php"),
      l("Wallpaper", "/art/wallpaper"),
      l("Artworks", "/art/artwork"),
      l("Backgrounds GS1", "/gs1_decors"),
      l("Backgrounds GS2", "/gs2_decors"),
      l("Icones MSN/AIM", "/art/msn"),
      l("Soundtrack", "/art/soundtrack"),
      l("Vidéo", "/art/video"),
      l("Sauvegardes GS1", "/gs1_save"),
      l("Sauvegardes GS2", "/gs2_save"),
      { label: "Trucages par :" },
      l("Cristali", "/art/trucages", { right: true }),
      l("Darthange", "/art/trucages2", { right: true }),
      l("Crush40", "/art/trucages3", { right: true }),
      l("Yarma", "/art/trucages4", { right: true }),
      l("Skywalker", "/art/trucages5", { right: true }),
    ],
  },
  {
    id: "saito",
    header: "topleft_04.gif",
    headerHeight: 32,
    links: [
      l("Fan Art", "/art/fanart", { disabled: true }),
      l("Fan Fic", "/art/fanfic", { disabled: true }),
      l("Dialbox", "/dialbox", { blank: true }),
      l("Chan", "#", { disabled: true }),
      l("Livre d'Or", "/site/guestbook", { disabled: true }),
      l("Awards", "/site/awards", { disabled: true }),
      l("Les Webmasters", "/site/ekip", { disabled: true }),
      l("Les Modérateurs", "/site/ekip_modo", { disabled: true }),
      l("Remerciements", "/site/ekip_remerciement", { disabled: true }),
    ],
  },
];

const isInternal = (h?: string) => !!h && h.startsWith("/");

// Toutes les pages internes (script d'import + generateStaticParams)
export const allInternalSlugs = Array.from(
  new Set(
    leftNav
      .flatMap((s) => s.links)
      .filter((x) => isInternal(x.href))
      .map((x) => x.href!.replace(/^\//, "").split("#")[0]),
  ),
);
