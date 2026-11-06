# HC — Contribution humaine / Human Contribution

**Site : https://wapsdevs.github.io/HC/**

HC est une proposition ouverte pour indiquer la place de l'humain dans la création d'une œuvre. Trois niveaux, HC−, HC et HC+, décrivent la contribution humaine, jamais la qualité de l'œuvre.

HC is an open proposal to show how much of a creative work was made by people. Three levels, HC−, HC and HC+, describe human contribution, never the quality of the work.

> Proposition exploratoire. HC n'est ni une norme officielle ni une certification.
> Exploratory proposal. HC is not an official standard or a certification.

- [Les niveaux / Levels](https://wapsdevs.github.io/HC/#/fr/levels)
- [Méthode / Method](https://wapsdevs.github.io/HC/#/fr/method)
- [Démo streaming / Streaming demo](https://wapsdevs.github.io/HC/#/fr/demo)
- [Document de travail v0.1 (PDF)](public/docs/HC_document_de_travail_v0_1.pdf)

## Participer / Contributing

Critiques, cas réels et propositions sont les bienvenus : ouvrez une [Issue](https://github.com/WapsDevs/HC/issues) ou une Pull Request.

Criticism, real-world cases and proposals are welcome: open an [Issue](https://github.com/WapsDevs/HC/issues) or a Pull Request.

## Développement / Development

React, Vite et Tailwind CSS. Node 20.19 ou plus.

```bash
npm install
npm run dev      # http://localhost:5173/HC/
npm run build    # génère dist/
```

Le contenu des pages est dans `src/pages/` et `src/content/` (sources, secteurs, études de cas). Le catalogue fictif de la démo est dans `src/demo/catalog.js`.

La publication sur GitHub Pages passe par `.github/workflows/deploy.yml`.
