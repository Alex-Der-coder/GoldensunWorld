#!/usr/bin/env bash
# Télécharge toutes les images du dossier /img/icone/ utilisées sur
# https://v3.goldensun-world.com/gs1_reliques2
# en conservant l'arborescence (img/icone/... et img/icone/reliques/...).
# Usage : bash download_icones_reliques2.sh [dossier_cible]

set -euo pipefail

BASE="https://v3.goldensun-world.com"
DEST="${1:-.}"

ICONES=(
  # Icônes élémentaires
  img/icone/psy_terre.gif
  img/icone/psy_feu.gif
  img/icone/psy_eau.gif
  img/icone/psy_air.gif

  # En-tête de colonne
  img/icone/reliques/objet.gif

  # Armures
  img/icone/reliques/armureesprit.gif
  img/icone/reliques/ecailledragon.gif
  img/icone/reliques/plateabyssale.gif
  img/icone/reliques/platedashura.gif
  img/icone/reliques/harnois.gif

  # Vêtements
  img/icone/reliques/aquaveste.gif
  img/icone/reliques/paratonnerre.gif
  img/icone/reliques/kimono.gif
  img/icone/reliques/shinobishojoku.gif

  # Robes
  img/icone/reliques/robechinoise.gif
  img/icone/reliques/robedesoiree.gif
  img/icone/reliques/robebenie.gif
  img/icone/reliques/soutanemagique.gif

  # Boucliers
  img/icone/reliques/boucliermiroir.gif
  img/icone/reliques/dracobouclier.gif
  img/icone/reliques/boucliergaia.gif

  # Gants
  img/icone/reliques/vambrace.gif
  img/icone/reliques/gantsdefer.gif
  img/icone/reliques/gantsmystere.gif

  # Bracelets
  img/icone/reliques/braceletethere.gif
  img/icone/reliques/braceletsaint.gif

  # Heaume
  img/icone/reliques/casqueacornes.gif

  # Couronnes
  img/icone/reliques/couronneornee.gif
  img/icone/reliques/chapeauchance.gif
  img/icone/reliques/couronnefoudre.gif
  img/icone/reliques/chapeauleurre.gif

  # Tiares
  img/icone/reliques/tiaremythril.gif

  # Chemises
  img/icone/reliques/giletmythril.gif
  img/icone/reliques/chemisedesoie.gif
  img/icone/reliques/chemisesport.gif

  # Bottes
  img/icone/reliques/hyperbottes.gif
  img/icone/reliques/bottesdehate.gif
  img/icone/reliques/bottesfourrees.gif
  img/icone/reliques/bottestortue.gif

  # Anneaux
  img/icone/reliques/anneaudesoin.gif
  img/icone/reliques/anneaulicorne.gif
  img/icone/reliques/anneauguerrier.gif
  img/icone/reliques/anneaumystique.gif
  img/icone/reliques/anneaufeerique.gif
  img/icone/reliques/anneaurepos.gif
  img/icone/reliques/anneauclerical.gif
)

ok=0; ko=0
for path in "${ICONES[@]}"; do
  if curl -fsS --create-dirs -o "$DEST/$path" "$BASE/$path"; then
    echo "OK  $path"; ok=$((ok+1))
  else
    echo "ERR $path"; ko=$((ko+1))
  fi
done

echo
echo "Terminé : $ok téléchargées, $ko en échec (sur ${#ICONES[@]})."
