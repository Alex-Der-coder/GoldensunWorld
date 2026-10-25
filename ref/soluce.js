window.ChangeUrl = (formulaire) => {
  if (formulaire.ListeUrl.selectedIndex != 0) {
    location.href = formulaire.ListeUrl.options[formulaire.ListeUrl.selectedIndex].value;
  }
};
