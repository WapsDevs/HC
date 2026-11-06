// Études de cas : œuvres réelles, faits publiés, classification HYPOTHÉTIQUE.
// Aucune de ces œuvres n'a été déclarée ou évaluée selon HC.
// level : 'minus' | 'base' | 'plus' ; range : niveau alternatif plausible.

export const CASES = [
  {
    id: 'spiderverse',
    title: 'Spider-Man: Into the Spider-Verse',
    meta: { fr: 'Film d’animation · 2018 · Sony Pictures Animation', en: 'Animated film · 2018 · Sony Pictures Animation' },
    level: 'plus',
    facts: {
      fr: [
        'Les traits d’encrage sur les visages devaient être ajustés image par image.',
        'Le studio d’effets Imageworks a construit un outil d’apprentissage automatique pour prédire ces traits d’une image à l’autre.',
        'L’outil a été entraîné sur des traits dessinés par les artistes, qui corrigeaient ensuite ses résultats.',
      ],
      en: [
        'Ink lines on faces had to be adjusted frame by frame.',
        'The Imageworks team built a machine-learning tool to predict those lines from one frame to the next.',
        'The tool was trained on lines drawn by the artists, who then corrected its output.',
      ],
    },
    reasoning: {
      fr: 'L’outil reproduit le style de l’équipe pour une tâche répétitive. Les décisions et le dessin de référence restent humains.',
      en: 'The tool reproduces the team’s own style for a repetitive task. Decisions and reference drawings stay human.',
    },
    limits: {
      fr: 'Cas limite entre assistance et génération. Les sources décrivent une partie du pipeline seulement.',
      en: 'An edge case between assistance and generation. The sources only describe part of the pipeline.',
    },
    sources: ['spiderverseFx', 'spiderverseBa'],
  },
  {
    id: 'secret-invasion',
    title: 'Secret Invasion',
    meta: { fr: 'Série · 2023 · Marvel Studios', en: 'Series · 2023 · Marvel Studios' },
    level: 'plus',
    part: { level: 'base', fr: 'Générique d’ouverture', en: 'Opening title sequence' },
    facts: {
      fr: [
        'Le générique d’ouverture a été réalisé par Method Studios avec des outils d’IA générative.',
        'Le studio indique que des artistes ont travaillé à chaque étape : storyboard, illustration, animation 2D et 3D, compositing.',
      ],
      en: [
        'The opening titles were made by Method Studios using generative AI tools.',
        'The studio says artists worked on every step: storyboard, illustration, 2D and 3D animation, compositing.',
      ],
    },
    reasoning: {
      fr: 'Le générique est un élément court et distinct. Il peut recevoir son propre niveau sans changer celui de la série.',
      en: 'The title sequence is short and distinct. It can get its own level without changing the series’ level.',
    },
    limits: {
      fr: 'Le niveau de la série suppose une production classique pour le reste, ce que les sources ne détaillent pas.',
      en: 'The series level assumes conventional production elsewhere, which the sources do not detail.',
    },
    sources: ['secretInvasionThr', 'secretInvasionTc'],
  },
  {
    id: 'late-night',
    title: 'Late Night with the Devil',
    meta: { fr: 'Film · 2023 · Cameron et Colin Cairnes', en: 'Film · 2023 · Cameron and Colin Cairnes' },
    level: 'plus',
    facts: {
      fr: [
        'Les réalisateurs ont indiqué avoir utilisé l’IA générative pour trois images fixes.',
        'Ces images apparaissent quelques secondes, comme cartons de transition, et ont été retravaillées par l’équipe graphique.',
      ],
      en: [
        'The directors said they used generative AI for three still images.',
        'These images appear for a few seconds as interstitial cards, and were reworked by the graphics team.',
      ],
    },
    reasoning: {
      fr: 'L’usage est localisé et secondaire par rapport au film. C’est la définition même de HC+.',
      en: 'The use is localised and secondary to the film. That is exactly what HC+ describes.',
    },
    limits: {
      fr: 'Repose sur la déclaration des réalisateurs. Montre qu’un usage minime peut susciter un débat : d’où l’intérêt d’une déclaration claire.',
      en: 'Based on the directors’ statement. Shows that even minor use can spark debate, which is why a clear declaration helps.',
    },
    sources: ['devilFilmStories'],
  },
  {
    id: 'zarya',
    title: 'Zarya of the Dawn',
    meta: { fr: 'Bande dessinée · 2022 · Kris Kashtanova', en: 'Comic · 2022 · Kris Kashtanova' },
    level: 'minus',
    range: 'base',
    facts: {
      fr: [
        'Le texte a été écrit par l’auteur. Les images ont été produites avec Midjourney.',
        'En 2023, le Copyright Office américain a protégé le texte ainsi que le choix et l’agencement des images, mais pas les images elles-mêmes.',
      ],
      en: [
        'The text was written by the author. The images were produced with Midjourney.',
        'In 2023 the US Copyright Office protected the text and the selection and arrangement of images, but not the images themselves.',
      ],
    },
    reasoning: {
      fr: 'Dans une bande dessinée, les images pèsent lourd. Ici elles sont générées ; l’écriture, le tri et la mise en page sont humains.',
      en: 'Images carry a lot of weight in a comic. Here they are generated; writing, selection and layout are human.',
    },
    limits: {
      fr: 'L’ampleur des retouches sur les images est discutée, d’où l’hésitation avec HC. Une décision de droit d’auteur n’est pas un niveau HC.',
      en: 'How much the images were edited is debated, hence the hesitation with HC. A copyright decision is not an HC level.',
    },
    sources: ['zaryaUsco', 'zaryaCc'],
  },
  {
    id: 'holidays',
    title: 'Holidays Are Coming (Coca-Cola)',
    meta: { fr: 'Publicité · 2024 · Secret Level, Silverside AI, Wild Card', en: 'Commercial · 2024 · Secret Level, Silverside AI, Wild Card' },
    level: 'minus',
    facts: {
      fr: [
        'Trois versions d’un spot de 1995 ont été recréées avec des outils de vidéo générative.',
        'Selon la presse spécialisée, le projet a demandé environ 10 000 images et 5 000 vidéos générées pour aboutir aux plans finaux.',
        'Les studios ont combiné plusieurs outils de génération, dont Leonardo, Luma, Runway et Kling.',
      ],
      en: [
        'Three versions of a 1995 commercial were recreated with generative video tools.',
        'According to trade press, the project took around 10,000 generated frames and 5,000 generated videos to reach the final shots.',
        'The studios combined several generation tools, including Leonardo, Luma, Runway and Kling.',
      ],
    },
    reasoning: {
      fr: 'Les images à l’écran sont générées. Le travail humain porte sur le concept, la direction, la sélection et le montage.',
      en: 'The on-screen images are generated. Human work covers the concept, direction, selection and editing.',
    },
    limits: {
      fr: 'Chaque version a été faite par un studio différent et mériterait sa propre fiche. Détails issus de la presse.',
      en: 'Each version was made by a different studio and would deserve its own sheet. Details come from press reports.',
    },
    sources: ['cocaColaTi', 'cocaColaDecoder'],
  },
  {
    id: 'arc-raiders',
    title: 'Arc Raiders',
    meta: { fr: 'Jeu vidéo · 2025 · Embark Studios', en: 'Video game · 2025 · Embark Studios' },
    level: 'plus',
    range: 'base',
    facts: {
      fr: [
        'La page Steam du jeu signale l’usage d’outils d’IA.',
        'Le studio utilise la synthèse vocale pour certaines répliques, à partir de voix de comédiens rémunérés pour cette licence.',
        'Après la sortie, le studio a remplacé une partie de ces répliques par des enregistrements de comédiens.',
      ],
      en: [
        'The game’s Steam page discloses the use of AI tools.',
        'The studio uses text-to-speech for some lines, based on actors paid to license their voices.',
        'After launch, the studio replaced part of those lines with recordings by actors.',
      ],
    },
    reasoning: {
      fr: 'Les voix générées concernent surtout des répliques courtes. Le design, l’art et le code sont décrits comme faits par l’équipe.',
      en: 'Generated voices mostly cover short lines. Design, art and code are described as made by the team.',
    },
    limits: {
      fr: 'Le niveau dépend de la version du jeu et de la part réelle des voix générées, que les sources ne chiffrent pas.',
      en: 'The level depends on the game version and on the actual share of generated voices, which the sources do not quantify.',
    },
    sources: ['arcRaidersPcg', 'arcRaidersVice'],
  },
]
