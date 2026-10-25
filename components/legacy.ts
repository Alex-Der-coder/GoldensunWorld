// Chemin d'une image du layout rapatriée par `npm run assets`
export const L = (name: string) => `/legacy/layer/${name}`;
export const bg = (name: string) => ({ backgroundImage: `url(${L(name)})` });
