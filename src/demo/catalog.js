// Catalogue de la démo : œuvres réelles.
// Affiches : uniquement des fichiers du domaine public, copiés depuis Wikimedia Commons.
// Pour les œuvres récentes, l'affiche n'est pas réutilisable : on renvoie vers une page officielle ou une source.
// Les niveaux HC sont des HYPOTHÈSES du projet HC ; aucune de ces œuvres n'a fait de déclaration HC.

export const CATEGORIES = {
  family: { fr: 'En famille', en: 'For the family' },
  animation: { fr: 'Animation', en: 'Animation' },
  adventure: { fr: 'Aventure', en: 'Adventure' },
  documentary: { fr: 'Documentaires', en: 'Documentaries' },
  scifi: { fr: 'Science-fiction', en: 'Science fiction' },
}

export const KINDS = {
  film: { fr: 'Film', en: 'Film' },
  short: { fr: 'Court métrage', en: 'Short film' },
  series: { fr: 'Série', en: 'Series' },
}

const s = (fr, en) => ({ fr, en })
const commons = (file) => `https://commons.wikimedia.org/wiki/File:${file}`

// Résumé commun aux films muets : antérieurs de près d'un siècle aux outils génératifs.
const classic = (year) => ({
  level: 'plus',
  summary: s(
    `Œuvre de ${year}, bien antérieure aux outils d’IA générative. Toute la création est humaine.`,
    `Made in ${year}, long before generative AI tools existed. All of the creative work is human.`,
  ),
  limits: s(
    'Le niveau porte sur l’œuvre d’origine, pas sur d’éventuelles restaurations récentes.',
    'The level covers the original work, not any recent restoration.',
  ),
})

export const TITLES = [
  {
    id: 'general',
    title: s('Le Mécano de la General', 'The General'),
    studio: 'Buster Keaton, United Artists',
    year: 1926, kind: 'film',
    categories: ['adventure', 'family'],
    poster: { src: 'posters/general.png', page: commons('The_General_(1926)_-_Movie_Poster.png') },
    synopsis: s(
      'Un mécanicien de locomotive part seul à la poursuite de son train, volé en pleine guerre de Sécession.',
      'A train engineer sets off alone after his locomotive, stolen in the middle of the American Civil War.',
    ),
    hc: classic(1926),
  },
  {
    id: 'voyage-lune',
    title: s('Le Voyage dans la Lune', 'A Trip to the Moon'),
    studio: 'Georges Méliès, Star Film',
    year: 1902, kind: 'short',
    categories: ['scifi', 'adventure'],
    poster: { src: 'posters/voyage-lune.jpg', page: commons('Voyage_dans_la_Lune_affiche.jpg') },
    synopsis: s(
      'Des savants partent pour la Lune dans un obus tiré par un canon géant.',
      'A group of scientists travel to the Moon inside a shell fired from a giant cannon.',
    ),
    hc: classic(1902),
  },
  {
    id: 'gertie',
    title: s('Gertie le dinosaure', 'Gertie the Dinosaur'),
    studio: 'Winsor McCay',
    year: 1914, kind: 'short',
    categories: ['animation', 'family'],
    poster: { src: 'posters/gertie.jpg', page: commons('Gertie_the_Dinosaur_poster.jpg') },
    synopsis: s(
      'Winsor McCay présente une dinosaure dessinée à la main, qui obéit… presque toujours.',
      'Winsor McCay introduces a hand-drawn dinosaur who does what she’s told… most of the time.',
    ),
    hc: classic(1914),
  },
  {
    id: 'the-kid',
    title: s('Le Kid', 'The Kid'),
    studio: 'Charles Chaplin, First National',
    year: 1921, kind: 'film',
    categories: ['family'],
    poster: { src: 'posters/the-kid.jpg', page: commons('The_Kid_(1921)_poster.jpg') },
    synopsis: s(
      'Un vagabond recueille un bébé abandonné et l’élève avec les moyens du bord.',
      'A tramp takes in an abandoned baby and raises him as best he can.',
    ),
    hc: classic(1921),
  },
  {
    id: 'nanook',
    title: s('Nanouk l’Esquimau', 'Nanook of the North'),
    studio: 'Robert J. Flaherty, Pathé',
    year: 1922, kind: 'film',
    categories: ['documentary'],
    poster: { src: 'posters/nanook.jpg', page: commons('Nanook_of_the_north.jpg') },
    synopsis: s(
      'La vie d’une famille inuit dans le nord du Canada, entre chasse, pêche et construction d’un igloo.',
      'The life of an Inuit family in northern Canada: hunting, fishing and building an igloo.',
    ),
    hc: classic(1922),
  },
  {
    id: 'peter-pan',
    title: s('Peter Pan', 'Peter Pan'),
    studio: 'Herbert Brenon, Paramount',
    year: 1924, kind: 'film',
    categories: ['family', 'adventure'],
    poster: { src: 'posters/peter-pan.jpg', page: commons('Peter_Pan_1924_poster.jpg') },
    synopsis: s(
      'Peter emmène Wendy et ses frères au Pays imaginaire, où les attend le capitaine Crochet.',
      'Peter takes Wendy and her brothers to Neverland, where Captain Hook is waiting.',
    ),
    hc: classic(1924),
  },
  {
    id: 'lost-world',
    title: s('Le Monde perdu', 'The Lost World'),
    studio: 'Harry O. Hoyt, First National',
    year: 1925, kind: 'film',
    categories: ['adventure', 'scifi'],
    poster: { src: 'posters/lost-world.jpg', page: commons('The_Lost_World_(1925)_-_film_poster.jpg') },
    synopsis: s(
      'Une expédition découvre un plateau d’Amérique du Sud où vivent encore des dinosaures, animés image par image.',
      'An expedition finds a South American plateau where dinosaurs still live, brought to life with stop-motion.',
    ),
    hc: classic(1925),
  },
  {
    id: 'gold-rush',
    title: s('La Ruée vers l’or', 'The Gold Rush'),
    studio: 'Charles Chaplin, United Artists',
    year: 1925, kind: 'film',
    categories: ['family', 'adventure'],
    poster: { src: 'posters/gold-rush.jpg', page: commons('Gold_rush_poster.jpg') },
    synopsis: s(
      'Un vagabond tente sa chance dans le Grand Nord, en pleine ruée vers l’or du Klondike.',
      'A tramp tries his luck in the far north during the Klondike gold rush.',
    ),
    hc: classic(1925),
  },
  {
    id: 'grass',
    title: s('Grass', 'Grass'),
    studio: 'Merian C. Cooper, Ernest B. Schoedsack, Marguerite Harrison, Paramount',
    year: 1925, kind: 'film',
    categories: ['documentary'],
    poster: { src: 'posters/grass.jpg', page: commons('Grass_(1925_film_poster).jpg') },
    synopsis: s(
      'Le peuple bakhtiari traverse rivières et montagnes de Perse pour mener ses troupeaux vers les pâturages.',
      'The Bakhtiari people cross the rivers and mountains of Persia to lead their herds to pasture.',
    ),
    hc: classic(1925),
  },
  {
    id: 'steamboat-bill',
    title: s('Cadet d’eau douce', 'Steamboat Bill, Jr.'),
    studio: 'Charles Reisner, Buster Keaton, United Artists',
    year: 1928, kind: 'film',
    categories: ['family'],
    poster: { src: 'posters/steamboat-bill.jpg', page: commons('Steamboat_bill_poster.jpg') },
    synopsis: s(
      'Le fils d’un capitaine de bateau à vapeur doit faire ses preuves, jusqu’à une tempête restée célèbre.',
      'A steamboat captain’s son has to prove himself, all the way to a famous storm sequence.',
    ),
    hc: classic(1928),
  },
  {
    id: 'spiderverse',
    title: s('Spider-Man : New Generation', 'Spider-Man: Into the Spider-Verse'),
    studio: 'Sony Pictures Animation',
    year: 2018, kind: 'film',
    categories: ['animation', 'adventure'],
    link: { url: 'https://www.sonypictures.com/movies/spidermanintothespiderverse', label: s('Site officiel (Sony Pictures)', 'Official site (Sony Pictures)') },
    synopsis: s(
      'Miles Morales, adolescent de Brooklyn, découvre qu’il n’est pas le seul Spider-Man.',
      'Brooklyn teenager Miles Morales finds out he is not the only Spider-Man.',
    ),
    hc: {
      level: 'plus',
      summary: s(
        'Un outil d’apprentissage automatique, entraîné sur les dessins des artistes, a aidé à placer certains traits d’encrage. Le reste est conçu et fabriqué par l’équipe.',
        'A machine-learning tool trained on the artists’ drawings helped place some ink lines. Everything else was designed and made by the team.',
      ),
      limits: s('Cas limite entre assistance et génération.', 'An edge case between assistance and generation.'),
      sources: ['spiderverseFx', 'spiderverseBa'],
    },
  },
  {
    id: 'steven-parker',
    title: s('StEvEn & Parker', 'StEvEn & Parker'),
    studio: 'Toonstar, Parker James',
    year: 2023, kind: 'series',
    categories: ['animation', 'family'],
    link: { url: 'https://ca.news.yahoo.com/interactive-animation-house-toonstar-launches-150000368.html', label: s('Article de Deadline sur la série', 'Deadline article on the series') },
    synopsis: s(
      'Série animée humoristique diffusée en ligne, construite autour du créateur Parker James.',
      'A comedy animated series released online, built around creator Parker James.',
    ),
    hc: {
      level: 'base',
      range: 'minus',
      summary: s(
        'Parker James enregistre les épisodes, et des membres de sa famille prêtent leur voix aux personnages. Toonstar les anime avec un moteur de production assisté par IA, et les versions étrangères sont doublées par IA.',
        'Parker James records the episodes, with family members voicing the characters. Toonstar animates them with an AI-assisted production engine, and foreign versions are dubbed with AI.',
      ),
      limits: s(
        'La part exacte de l’animation générée n’est pas publique, d’où l’hésitation avec HC−.',
        'The exact share of generated animation is not public, hence the hesitation with HC−.',
      ),
      sources: ['toonstarDeadline', 'toonstarEngadget'],
    },
  },
  {
    id: 'robots',
    title: s('Where the Robots Grow', 'Where the Robots Grow'),
    studio: 'AiMation Studios',
    year: 2024, kind: 'film',
    categories: ['animation', 'scifi', 'family'],
    link: { url: 'https://www.imdb.com/title/tt33098130/', label: s('Fiche IMDb', 'IMDb page') },
    synopsis: s(
      'Sur une planète lointaine, un robot fermier découvre un bébé humain et doit veiller sur lui.',
      'On a distant planet, a farming robot finds a human baby and has to look after it.',
    ),
    hc: {
      level: 'minus',
      summary: s(
        'Présenté comme un long métrage animé presque entièrement par IA, réalisé en environ 90 jours par une équipe de neuf personnes.',
        'Presented as a feature film animated almost entirely with AI, made in about 90 days by a team of nine.',
      ),
      limits: s(
        'Les chiffres viennent du studio et d’un fournisseur d’outils, pas d’une source indépendante.',
        'The figures come from the studio and a tool vendor, not from an independent source.',
      ),
      sources: ['robotsElevenLabs', 'robotsReview'],
    },
  },
  {
    id: 'frost',
    title: s('The Frost', 'The Frost'),
    studio: s('Waymark, réalisé par Josh Rubin', 'Waymark, directed by Josh Rubin'),
    year: 2023, kind: 'short',
    categories: ['scifi'],
    link: { url: 'https://www.technologyreview.com/2023/06/01/1073858/surreal-ai-generative-video-changing-film/', label: s('Présentation par MIT Technology Review', 'MIT Technology Review feature') },
    synopsis: s(
      'Court métrage de douze minutes : une équipe affronte une montagne glacée qui semble la poursuivre.',
      'A twelve-minute short: a team faces an icy mountain that seems to be hunting them.',
    ),
    hc: {
      level: 'minus',
      summary: s(
        'Le scénario est écrit par le réalisateur. Chaque plan a été généré avec DALL-E 2, puis animé avec un autre outil d’IA.',
        'The director wrote the script. Every shot was generated with DALL-E 2, then animated with another AI tool.',
      ),
      limits: s('Le montage et le son ne sont pas détaillés dans les sources.', 'Editing and sound are not detailed in the sources.'),
      sources: ['frostMit'],
    },
  },
]
