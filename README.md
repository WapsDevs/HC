# HC, contribution humaine

### [→ Visiter le site HC / Visit the HC website](https://wapsdevs.github.io/HC/)

HC est une proposition ouverte pour indiquer la place de l'humain dans la création d'une œuvre. Trois niveaux, HC−, HC et HC+, décrivent la contribution humaine, jamais la qualité de l'œuvre.

HC is an open proposal to show how much of a creative work was made by people. Three levels, HC−, HC and HC+, describe human contribution, never the quality of the work.

> HC est une proposition exploratoire et indépendante. Elle est libre d'être discutée, critiquée, reprise ou utilisée comme point de départ pour d'autres initiatives par les acteurs du secteur. Ce n'est ni une norme officielle ni une certification.
>
> HC is an independent, exploratory proposal. People in the creative industries are free to discuss it, criticise it, reuse it or use it as a starting point for other initiatives. It is not an official standard or a certification.

**Accès rapide / Quick links :** [Les niveaux / Levels](https://wapsdevs.github.io/HC/#/fr/levels) · [Méthode / Method](https://wapsdevs.github.io/HC/#/fr/method) · [Démo streaming / Streaming demo](https://wapsdevs.github.io/HC/#/fr/demo) · [Présentation (PDF)](https://wapsdevs.github.io/HC/docs/HC_presentation.pdf)

## Participer / Contributing

Le dépôt reste ouvert aux critiques, aux cas réels et aux propositions, par une [Issue](https://github.com/WapsDevs/HC/issues) ou une Pull Request. Leur intégration reste à la discrétion de l'auteur du projet. Si le projet vous semble utile, une étoile sur le dépôt aide à le faire connaître.

The repository remains open to criticism, real-world cases and proposals, through an [Issue](https://github.com/WapsDevs/HC/issues) or a Pull Request. Whether they are included is up to the project's author. If you find the project useful, starring the repository helps others find it.

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
