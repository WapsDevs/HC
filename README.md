# HC, contribution humaine

### [→ Visiter le site HC / Visit the HC website](https://wapsdevs.github.io/HC/)

HC est une proposition ouverte pour indiquer la place de l'humain dans la création d'une œuvre. Trois niveaux, HC−, HC et HC+, décrivent la contribution humaine, jamais la qualité de l'œuvre.

HC is an open proposal to show how much of a creative work was made by people. Three levels, HC−, HC and HC+, describe human contribution, never the quality of the work.

> Proposition exploratoire. HC n'est ni une norme officielle ni une certification.
> Exploratory proposal. HC is not an official standard or a certification.

**Accès rapide / Quick links :** [Les niveaux / Levels](https://wapsdevs.github.io/HC/#/fr/levels) · [Méthode / Method](https://wapsdevs.github.io/HC/#/fr/method) · [Démo streaming / Streaming demo](https://wapsdevs.github.io/HC/#/fr/demo) · [Document de travail v0.1 (PDF)](public/docs/HC_document_de_travail_v0_1.pdf)

## Participer / Contributing

Critiques, cas réels et propositions sont les bienvenus : ouvrez une [Issue](https://github.com/WapsDevs/HC/issues) ou une Pull Request. Si le projet vous semble utile, une étoile sur le dépôt aide à le faire connaître.

Criticism, real-world cases and proposals are welcome: open an [Issue](https://github.com/WapsDevs/HC/issues) or a Pull Request. If you find the project useful, starring the repository helps others find it.

## Développement / Development

React, Vite et Tailwind CSS. Node 20.19 ou plus.

```bash
npm install
npm run dev      # http://localhost:5173/HC/
npm run build    # génère dist/
```

Le contenu des pages est dans `src/pages/` et `src/content/` (sources, secteurs, études de cas). Le catalogue de la démo est dans `src/demo/catalog.js`.

Les affiches de la démo, dans `public/posters/`, sont dans le domaine public et proviennent de Wikimedia Commons. Les affiches des œuvres récentes ne sont pas reproduites : la démo renvoie vers leur source.

La publication sur GitHub Pages passe par `.github/workflows/deploy.yml`.
