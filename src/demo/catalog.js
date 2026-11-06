// Catalogue FICTIF de la démonstration. Titres, studios, déclarations et évaluateur sont inventés.
// Étapes : [nom { fr, en }, 'human' | 'shared' | 'gen', précision { fr, en }]

export const CATEGORIES = {
  family: { fr: 'En famille', en: 'For the family' },
  animation: { fr: 'Animation', en: 'Animation' },
  adventure: { fr: 'Aventure', en: 'Adventure' },
  documentary: { fr: 'Documentaires', en: 'Documentaries' },
  scifi: { fr: 'Science-fiction', en: 'Science fiction' },
}

const s = (fr, en) => ({ fr, en })

export const TITLES = [
  {
    id: 'phare',
    title: s('Le Phare des marées', 'The Tide Lighthouse'),
    kind: 'film', year: 2026, length: '1 h 32', age: 'all',
    categories: ['family', 'animation'],
    scene: 'ocean', palette: ['#0f2a47', '#3f6f8f', '#173a55', '#f4d38a', '#0b2236'],
    synopsis: s(
      'Chaque nuit, Elio rallume le vieux phare de son île. Un soir, la lumière attire un bateau que personne n’attend.',
      'Every night, Elio relights the old lighthouse on his island. One evening, its beam draws in a boat nobody expected.',
    ),
    studio: s('Atelier Brise (fictif)', 'Atelier Brise (fictional)'),
    hc: {
      level: 'plus', status: 'declared', date: '2026-03',
      summary: s(
        'Scénario, dessin et animation réalisés par l’équipe. L’IA générative a produit des textures de fond, repeintes ensuite.',
        'Script, drawing and animation by the team. Generative AI produced background textures, which were then repainted.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'human', s('Écrit par deux scénaristes', 'Written by two screenwriters')],
        [s('Storyboard', 'Storyboard'), 'human', s('Dessiné à la main', 'Hand-drawn')],
        [s('Décors', 'Backgrounds'), 'shared', s('Textures générées, repeintes par les décoratrices', 'Generated textures, repainted by the background artists')],
        [s('Animation', 'Animation'), 'human', s('Animation 2D image par image', 'Frame-by-frame 2D animation')],
        [s('Voix et musique', 'Voices and music'), 'human', s('Comédiens et orchestre de chambre', 'Actors and a chamber orchestra')],
      ],
    },
  },
  {
    id: 'cartographes',
    title: s('Les Cartographes du ciel', 'Sky Cartographers'),
    kind: 'series', year: 2025, length: s('2 saisons', '2 seasons'), age: '10',
    categories: ['scifi', 'animation'],
    scene: 'space', palette: ['#0b0d24', '#28235a', '#5a3f8f', '#f2a65a', '#1a1640'],
    synopsis: s(
      'Une équipe de jeunes navigateurs dresse la carte d’une galaxie inconnue, planète après planète.',
      'A crew of young navigators maps an unknown galaxy, one planet at a time.',
    ),
    studio: s('Studio Nadir (fictif)', 'Studio Nadir (fictional)'),
    hc: {
      level: 'base', status: 'verified', date: '2025-11',
      summary: s(
        'L’histoire et l’animation des personnages sont humaines. Les décors spatiaux et une partie de la musique viennent de l’IA générative, retravaillés par l’équipe.',
        'Story and character animation are human. Space backgrounds and part of the score come from generative AI, reworked by the team.',
      ),
      stages: [
        [s('Écriture', 'Writing'), 'human', s('Salle d’écriture de quatre personnes', 'Four-person writers’ room')],
        [s('Design des vaisseaux', 'Ship design'), 'shared', s('Concepts générés, modélisés en 3D par l’équipe', 'Generated concepts, modelled in 3D by the team')],
        [s('Décors spatiaux', 'Space backgrounds'), 'gen', s('Générés puis étalonnés', 'Generated, then colour-graded')],
        [s('Animation', 'Animation'), 'human', s('Animation 3D des personnages', '3D character animation')],
        [s('Musique', 'Music'), 'shared', s('Thèmes composés, textures sonores générées', 'Composed themes, generated sound textures')],
      ],
    },
  },
  {
    id: 'sable',
    title: s('Le Sable qui chante', 'The Singing Sands'),
    kind: 'film', year: 2025, length: '58 min', age: 'all',
    categories: ['documentary'],
    scene: 'desert', palette: ['#3a1f3d', '#d9825b', '#b85c3c', '#ffd8a0', '#7a3a2c'],
    synopsis: s(
      'Pourquoi certaines dunes émettent-elles un son grave quand le vent souffle ? Une enquête entre physique et récits de voyageurs.',
      'Why do some dunes hum when the wind blows? An investigation between physics and travellers’ tales.',
    ),
    studio: s('Production Oasis (fictif)', 'Production Oasis (fictional)'),
    hc: {
      level: 'minus', status: 'declared', date: '2025-09',
      summary: s(
        'La plupart des images sont des reconstitutions générées. Le propos, les entretiens et la vérification scientifique sont humains.',
        'Most images are generated reconstructions. The argument, the interviews and the scientific review are human.',
      ),
      stages: [
        [s('Recherche', 'Research'), 'human', s('Avec deux physiciens', 'With two physicists')],
        [s('Commentaire', 'Narration script'), 'shared', s('Premier jet généré, réécrit par la réalisatrice', 'Generated first draft, rewritten by the director')],
        [s('Images', 'Images'), 'gen', s('Reconstitutions générées, choisies plan par plan', 'Generated reconstructions, chosen shot by shot')],
        [s('Voix off', 'Voice-over'), 'gen', s('Voix de synthèse sous licence', 'Licensed synthetic voice')],
        [s('Montage', 'Editing'), 'human', s('Monteur', 'Editor')],
      ],
    },
  },
  {
    id: 'plume',
    title: s('Le Voyage de Plume', 'Plume’s Journey'),
    kind: 'film', year: 2026, length: '1 h 21', age: 'all',
    categories: ['family', 'animation', 'adventure'],
    scene: 'balloon', palette: ['#7fb7d9', '#f4e3c3', '#6f9a5b', '#e2574c', '#3e6b3a'],
    synopsis: s(
      'Une jeune aéronaute part retrouver son grand-père à bord d’une montgolfière rapiécée.',
      'A young balloonist sets off to find her grandfather aboard a patched-up hot-air balloon.',
    ),
    studio: s('Les Films du Vent (fictif)', 'Les Films du Vent (fictional)'),
    hc: {
      level: 'minus', status: 'verified', date: '2026-01',
      summary: s(
        'Les images animées sont générées à partir des dessins et des indications de l’équipe. Le scénario, la musique et les voix sont humains.',
        'The animated images are generated from the team’s drawings and directions. Script, music and voices are human.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'human', s('Écrit par la réalisatrice', 'Written by the director')],
        [s('Recherche visuelle', 'Visual development'), 'shared', s('Croquis humains, variantes générées', 'Human sketches, generated variants')],
        [s('Animation', 'Animation'), 'gen', s('Plans générés, sélectionnés et recadrés', 'Generated shots, selected and reframed')],
        [s('Montage', 'Editing'), 'human', s('Monteuse', 'Editor')],
        [s('Musique et voix', 'Music and voices'), 'human', s('Compositeur et comédiens', 'Composer and actors')],
      ],
    },
  },
  {
    id: 'foret',
    title: s('Forêt d’hiver', 'Winter Forest'),
    kind: 'series', year: 2024, length: s('6 épisodes', '6 episodes'), age: 'all',
    categories: ['documentary', 'family'],
    scene: 'forest', palette: ['#1d3346', '#9fb9c6', '#2f5a4f', '#eef3f1', '#183a33'],
    synopsis: s(
      'Six mois dans une forêt du Nord, à suivre lynx, mésanges et cerfs pendant la saison froide.',
      'Six months in a northern forest, following lynx, tits and deer through the cold season.',
    ),
    studio: s('Boréal Images (fictif)', 'Boréal Images (fictional)'),
    hc: {
      level: 'plus', status: 'verified', date: '2024-12',
      summary: s(
        'Tourné, écrit et monté par l’équipe. Seules quelques cartes animées utilisent l’IA générative.',
        'Filmed, written and edited by the team. Only a few animated maps use generative AI.',
      ),
      stages: [
        [s('Tournage', 'Filming'), 'human', s('Équipe de trois opérateurs', 'Three camera operators')],
        [s('Commentaire', 'Narration'), 'human', s('Écrit et lu par une naturaliste', 'Written and read by a naturalist')],
        [s('Cartes animées', 'Animated maps'), 'shared', s('Fonds générés, tracés à la main', 'Generated bases, hand-drawn routes')],
        [s('Montage et son', 'Editing and sound'), 'human', s('Monteur et mixeur', 'Editor and mixer')],
      ],
    },
  },
  {
    id: 'orion',
    title: s('Station Orion', 'Orion Station'),
    kind: 'film', year: 2026, length: '1 h 48', age: '10',
    categories: ['scifi', 'adventure'],
    scene: 'city', palette: ['#0c1a2b', '#2d5668', '#1b3447', '#9fe3e0', '#10222f'],
    synopsis: s(
      'Sur une station orbitale, une ingénieure découvre que les jardins hydroponiques fleurissent la nuit.',
      'On an orbital station, an engineer discovers that the hydroponic gardens bloom at night.',
    ),
    studio: s('Hélice Pictures (fictif)', 'Hélice Pictures (fictional)'),
    hc: {
      level: 'base', status: 'declared', date: '2026-04',
      summary: s(
        'Comédiens, mise en scène et montage sont humains. Les décors numériques de la station sont en grande partie générés.',
        'Actors, direction and editing are human. Most of the station’s digital sets are generated.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'shared', s('Structure humaine, scènes réécrites avec assistance générative', 'Human structure, scenes rewritten with generative assistance')],
        [s('Décors', 'Sets'), 'gen', s('Environnements générés, intégrés par l’équipe effets', 'Generated environments, integrated by the VFX team')],
        [s('Jeu', 'Performance'), 'human', s('Distribution de neuf comédiens', 'Cast of nine actors')],
        [s('Effets visuels', 'Visual effects'), 'shared', s('Compositing humain, éléments générés', 'Human compositing, generated elements')],
        [s('Montage', 'Editing'), 'human', s('Monteuse', 'Editor')],
      ],
    },
  },
  {
    id: 'traversee',
    title: s('La Grande Traversée', 'The Great Crossing'),
    kind: 'film', year: 2025, length: '1 h 40', age: '6',
    categories: ['adventure', 'family'],
    scene: 'mountains', palette: ['#f0b47c', '#f7e1c4', '#8a6a8c', '#fff4dc', '#4d3a5c'],
    synopsis: s(
      'Deux frères et leur chienne traversent les montagnes pour rapporter un message au village voisin.',
      'Two brothers and their dog cross the mountains to deliver a message to the next village.',
    ),
    studio: s('Cime Films (fictif)', 'Cime Films (fictional)'),
    hc: {
      level: 'plus', status: 'declared', date: '2025-06',
      summary: s(
        'Film tourné en décors naturels. L’IA générative n’a servi qu’à créer deux plans de ciel dans une scène d’orage.',
        'Shot on location. Generative AI was only used for two sky shots in a storm scene.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'human', s('Adapté d’un conte par le réalisateur', 'Adapted from a folk tale by the director')],
        [s('Tournage', 'Filming'), 'human', s('En montagne, sur huit semaines', 'In the mountains, over eight weeks')],
        [s('Effets visuels', 'Visual effects'), 'shared', s('Deux ciels d’orage générés', 'Two generated storm skies')],
        [s('Montage et musique', 'Editing and music'), 'human', s('Monteur et compositrice', 'Editor and composer')],
      ],
    },
  },
  {
    id: 'inventeurs',
    title: s('Les Petits Inventeurs', 'Little Inventors'),
    kind: 'series', year: 2026, length: s('1 saison', '1 season'), age: 'all',
    categories: ['family', 'animation'],
    scene: 'garden', palette: ['#9ad1c8', '#f6efd6', '#78b26a', '#ffcf5a', '#3f7d4a'],
    synopsis: s(
      'Dans un jardin partagé, trois enfants fabriquent chaque semaine une machine pour résoudre un petit problème.',
      'In a community garden, three children build a machine each week to solve a small problem.',
    ),
    studio: s('Petit Pois Studio (fictif)', 'Petit Pois Studio (fictional)'),
    hc: {
      level: 'minus', status: 'declared', date: '2026-02',
      summary: s(
        'Les scripts et les voix sont humains. L’animation et la musique sont générées, puis montées par une petite équipe.',
        'Scripts and voices are human. Animation and music are generated, then edited by a small team.',
      ),
      stages: [
        [s('Scripts', 'Scripts'), 'human', s('Une autrice et un conseiller scientifique', 'A writer and a science adviser')],
        [s('Personnages', 'Characters'), 'shared', s('Dessinés à la main, déclinés par génération', 'Hand-drawn, expanded through generation')],
        [s('Animation', 'Animation'), 'gen', s('Épisodes générés à partir des story-boards', 'Episodes generated from storyboards')],
        [s('Voix', 'Voices'), 'human', s('Trois comédiens', 'Three actors')],
        [s('Musique', 'Music'), 'gen', s('Génériques et ambiances générés', 'Generated theme and cues')],
      ],
    },
  },
  {
    id: 'aurores',
    title: s('Aurores', 'Northern Lights'),
    kind: 'film', year: 2024, length: '52 min', age: 'all',
    categories: ['documentary'],
    scene: 'aurora', palette: ['#06121f', '#163a4a', '#3fd4a0', '#a6f0d0', '#0b1c26'],
    synopsis: s(
      'Comment le vent solaire allume-t-il le ciel polaire ? Des chercheurs nous emmènent en Laponie.',
      'How does the solar wind light up the polar sky? Researchers take us to Lapland.',
    ),
    studio: s('Polaris Docs (fictif)', 'Polaris Docs (fictional)'),
    hc: {
      level: 'base', status: 'declared', date: '2024-10',
      summary: s(
        'Les prises de vue et le commentaire sont humains. Les visualisations du vent solaire sont générées et occupent une grande partie du film.',
        'Footage and narration are human. Visualisations of the solar wind are generated and fill much of the film.',
      ),
      stages: [
        [s('Tournage', 'Filming'), 'human', s('Accélérés tournés sur place', 'Time-lapses shot on location')],
        [s('Visualisations', 'Visualisations'), 'gen', s('Générées, validées par les chercheurs', 'Generated, checked by the researchers')],
        [s('Commentaire', 'Narration'), 'human', s('Écrit par la réalisatrice', 'Written by the director')],
        [s('Musique', 'Music'), 'shared', s('Composée, avec des nappes générées', 'Composed, with generated pads')],
      ],
    },
  },
  {
    id: 'recif',
    title: s('Les Gardiens du récif', 'Reef Keepers'),
    kind: 'series', year: 2025, length: s('1 saison', '1 season'), age: '6',
    categories: ['animation', 'adventure'],
    scene: 'reef', palette: ['#0f4c6b', '#36a3a8', '#e07a5f', '#f9e6b0', '#0c3a4f'],
    synopsis: s(
      'Une tortue curieuse et un poisson-clown très prudent veillent sur leur récif.',
      'A curious turtle and a very careful clownfish look after their reef.',
    ),
    studio: s('Lagon Animation (fictif)', 'Lagon Animation (fictional)'),
    hc: {
      level: 'base', status: 'unverified', date: '2025-08',
      summary: s(
        'Niveau déclaré par le distributeur. Le détail de plusieurs étapes n’a pas été fourni : la déclaration n’a pas pu être confirmée.',
        'Level declared by the distributor. Several stages were not documented, so the declaration could not be confirmed.',
      ),
      stages: [
        [s('Écriture', 'Writing'), 'human', s('Déclaré humain', 'Declared human')],
        [s('Décors', 'Backgrounds'), 'gen', s('Déclarés générés', 'Declared generated')],
        [s('Animation', 'Animation'), 'shared', s('Information incomplète', 'Incomplete information')],
      ],
    },
  },
  {
    id: 'train',
    title: s('Le Train des étoiles', 'The Star Train'),
    kind: 'film', year: 2026, length: '1 h 26', age: 'all',
    categories: ['scifi', 'family', 'animation'],
    scene: 'space', palette: ['#141033', '#3b2a6b', '#d35d6e', '#ffe3a3', '#221a4a'],
    synopsis: s(
      'Un train de nuit quitte la gare et ne s’arrête plus sur Terre. Les passagers vont devoir s’entendre.',
      'A night train leaves the station and never stops on Earth again. The passengers will have to get along.',
    ),
    studio: s('Wagon-Lune (fictif)', 'Wagon-Lune (fictional)'),
    hc: {
      level: 'plus', status: 'verified', date: '2026-05',
      summary: s(
        'Film entièrement conçu et animé par l’équipe. L’IA générative a aidé à produire des variantes de bruitages, triées par le monteur son.',
        'Fully designed and animated by the team. Generative AI helped produce sound-effect variants, sorted by the sound editor.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'human', s('Écrit à quatre mains', 'Co-written by two writers')],
        [s('Design', 'Design'), 'human', s('Personnages et décors dessinés', 'Drawn characters and sets')],
        [s('Animation', 'Animation'), 'human', s('Animation 3D', '3D animation')],
        [s('Bruitages', 'Sound effects'), 'shared', s('Variantes générées, sélection humaine', 'Generated variants, human selection')],
        [s('Musique', 'Music'), 'human', s('Compositrice', 'Composer')],
      ],
    },
  },
  {
    id: 'pingouin',
    title: s('Opération Pingouin', 'Operation Penguin'),
    kind: 'film', year: 2025, length: '1 h 18', age: 'all',
    categories: ['family', 'adventure'],
    scene: 'mountains', palette: ['#b9d7ea', '#eef6fb', '#7fa6c4', '#ffffff', '#3d6a8c'],
    synopsis: s(
      'Un pingouin égaré dans un port du Nord compte sur une bande d’enfants pour rentrer chez lui.',
      'A penguin lost in a northern harbour relies on a group of kids to get home.',
    ),
    studio: s('Banquise Prod (fictif)', 'Banquise Prod (fictional)'),
    hc: {
      level: 'minus', status: 'declared', date: '2025-12',
      summary: s(
        'Les enfants sont joués par des comédiens. Le pingouin, les décors et une partie des dialogues sont générés.',
        'The children are played by actors. The penguin, the sets and part of the dialogue are generated.',
      ),
      stages: [
        [s('Scénario', 'Script'), 'shared', s('Dialogues en partie générés, retenus par la réalisatrice', 'Dialogue partly generated, chosen by the director')],
        [s('Personnage du pingouin', 'Penguin character'), 'gen', s('Généré et intégré plan par plan', 'Generated and composited shot by shot')],
        [s('Décors', 'Sets'), 'gen', s('Port et banquise générés', 'Generated harbour and ice field')],
        [s('Jeu', 'Performance'), 'human', s('Cinq jeunes comédiens', 'Five young actors')],
        [s('Montage', 'Editing'), 'human', s('Monteur', 'Editor')],
      ],
    },
  },
  {
    id: 'batisseurs',
    title: s('Les Bâtisseurs', 'The Builders'),
    kind: 'series', year: 2024, length: s('8 épisodes', '8 episodes'), age: 'all',
    categories: ['documentary'],
    scene: 'city', palette: ['#2a1e3b', '#e48a6a', '#5b3f62', '#ffd27a', '#2f2340'],
    synopsis: s(
      'Comment construit-on un pont, une gare ou une tour ? Chaque épisode suit un chantier du début à la fin.',
      'How do you build a bridge, a station or a tower? Each episode follows one site from start to finish.',
    ),
    studio: s('Chantier Docs (fictif)', 'Chantier Docs (fictional)'),
    hc: {
      level: 'base', status: 'declared', date: '2024-09',
      summary: s(
        'Tournage et entretiens sont humains. Les reconstitutions 3D des ouvrages finis sont générées, puis corrigées avec les architectes.',
        'Filming and interviews are human. 3D reconstructions of the finished buildings are generated, then corrected with the architects.',
      ),
      stages: [
        [s('Tournage', 'Filming'), 'human', s('Sur chantier, sur deux ans', 'On site, over two years')],
        [s('Reconstitutions', 'Reconstructions'), 'gen', s('Générées, corrigées avec les architectes', 'Generated, corrected with the architects')],
        [s('Commentaire', 'Narration'), 'human', s('Journaliste', 'Journalist')],
        [s('Montage', 'Editing'), 'human', s('Deux monteurs', 'Two editors')],
      ],
    },
  },
  {
    id: 'bibliotheque',
    title: s('La Bibliothèque flottante', 'The Floating Library'),
    kind: 'series', year: 2026, length: s('1 saison', '1 season'), age: '6',
    categories: ['animation', 'adventure'],
    scene: 'ocean', palette: ['#3a2b55', '#c46f8c', '#4a3a6e', '#ffe0b8', '#2a2042'],
    synopsis: s(
      'Une bibliothèque installée sur une péniche descend le fleuve et prête ses livres de ville en ville.',
      'A library on a barge travels downriver, lending its books from town to town.',
    ),
    studio: s('Encre & Eau (fictif)', 'Encre & Eau (fictional)'),
    hc: {
      level: 'plus', status: 'declared', date: '2026-06',
      summary: s(
        'Série dessinée et animée par l’équipe. Aucun usage génératif déclaré dans les éléments finaux.',
        'Drawn and animated by the team. No generative use declared in the final elements.',
      ),
      stages: [
        [s('Écriture', 'Writing'), 'human', s('Trois scénaristes', 'Three writers')],
        [s('Dessin', 'Drawing'), 'human', s('Décors peints à la main', 'Hand-painted backgrounds')],
        [s('Animation', 'Animation'), 'human', s('Animation 2D', '2D animation')],
        [s('Musique', 'Music'), 'human', s('Quatuor à cordes', 'String quartet')],
      ],
    },
  },
  {
    id: 'signal',
    title: s('Signal', 'Signal'),
    kind: 'series', year: 2026, length: s('1 saison', '1 season'), age: '10',
    categories: ['scifi'],
    scene: 'desert', palette: ['#0e1430', '#3c3f7a', '#262a5a', '#c7d3ff', '#161a3d'],
    synopsis: s(
      'Un radiotélescope capte un message répétitif. Une équipe d’étudiants tente de le comprendre avant tout le monde.',
      'A radio telescope picks up a repeating message. A team of students tries to understand it first.',
    ),
    studio: s('Écho Séries (fictif)', 'Écho Séries (fictional)'),
    hc: {
      level: 'minus', status: 'unverified', date: '2026-07',
      summary: s(
        'Le producteur déclare une série générée à partir de scripts écrits par l’équipe. Les justificatifs n’ont pas été transmis.',
        'The producer declares a series generated from scripts written by the team. Supporting records were not provided.',
      ),
      stages: [
        [s('Scripts', 'Scripts'), 'human', s('Déclaré humain', 'Declared human')],
        [s('Images', 'Images'), 'gen', s('Déclarées générées', 'Declared generated')],
        [s('Voix', 'Voices'), 'gen', s('Déclarées générées', 'Declared generated')],
      ],
    },
  },
]

export const AGE = {
  all: s('Tous publics', 'All ages'),
  '6': s('6 ans et +', 'Ages 6+'),
  '10': s('10 ans et +', 'Ages 10+'),
}

export const STAGE_STATE = {
  human: s('Humain', 'Human'),
  shared: s('Partagé', 'Shared'),
  gen: s('IA générative', 'Generative AI'),
}
