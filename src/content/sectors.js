// Pipelines par secteur. Les étapes s'appuient sur les sources citées.
// Les « usages possibles de l'IA » sont des exemples, pas une mesure de ce qui se pratique.
// Chaque étape : [nom, décisions humaines typiques, usages génératifs possibles]

export const SECTORS = [
  {
    id: 'film',
    name: { fr: 'Cinéma et animation', en: 'Film and animation' },
    intro: {
      fr: 'Le travail se répartit entre développement, préproduction, production et postproduction. En animation, le storyboard et l’animatique fixent très tôt la mise en scène.',
      en: 'Work is split between development, pre-production, production and post-production. In animation, the storyboard and animatic set the staging very early.',
    },
    stages: {
      fr: [
        ['Développement et écriture', 'Histoire, personnages, dialogues, intention', 'Pistes de scénario, variantes de dialogues'],
        ['Storyboard et animatique', 'Choix des plans, du rythme, des poses', 'Images de référence, premiers cadrages'],
        ['Design et assets', 'Personnages, décors, accessoires, textures', 'Concepts visuels, textures, décors de fond'],
        ['Animation et effets', 'Jeu, mouvement, expressions, corrections', 'Plans générés, interpolation générative'],
        ['Montage et finition', 'Choix des prises, rythme final, son', 'Voix, bruitages ou plans générés et conservés'],
      ],
      en: [
        ['Development and writing', 'Story, characters, dialogue, intent', 'Story ideas, dialogue variations'],
        ['Storyboard and animatic', 'Shot choice, pacing, poses', 'Reference images, early framing'],
        ['Design and assets', 'Characters, sets, props, textures', 'Visual concepts, textures, background scenes'],
        ['Animation and effects', 'Performance, motion, expressions, fixes', 'Generated shots, generative in-betweening'],
        ['Editing and finishing', 'Take selection, final pacing, sound', 'Generated voices, sound effects or shots kept in the cut'],
      ],
    },
    note: {
      fr: 'Le générique, la bande-annonce ou un plan isolé peuvent avoir une méthode différente du film. Ils se signalent à part.',
      en: 'Title sequences, trailers or single shots may be made differently from the film. They are noted separately.',
    },
    sources: ['toonboom'],
  },
  {
    id: 'games',
    name: { fr: 'Jeu vidéo', en: 'Video games' },
    intro: {
      fr: 'Un jeu passe par la conception, la préproduction, la production puis les phases de test. Il continue souvent d’évoluer après sa sortie.',
      en: 'A game goes through concept, pre-production, production and testing phases. It often keeps changing after release.',
    },
    stages: {
      fr: [
        ['Concept et game design', 'Règles, systèmes, niveaux, expérience de jeu', 'Variantes de niveaux, équilibrage suggéré'],
        ['Narration', 'Univers, quêtes, dialogues', 'Dialogues, textes d’ambiance'],
        ['Art et audio', 'Direction artistique, personnages, musiques, voix', 'Textures, illustrations, voix de synthèse'],
        ['Programmation', 'Architecture, systèmes, outils', 'Code généré conservé dans le produit'],
        ['Intégration et tests', 'Sélection et réglage des assets, validation', 'Contenus générés pendant la partie'],
      ],
      en: [
        ['Concept and game design', 'Rules, systems, levels, player experience', 'Level variants, suggested balancing'],
        ['Narrative', 'World, quests, dialogue', 'Dialogue, flavour text'],
        ['Art and audio', 'Art direction, characters, music, voices', 'Textures, illustrations, synthetic voices'],
        ['Programming', 'Architecture, systems, tools', 'Generated code kept in the product'],
        ['Integration and QA', 'Asset selection and tuning, approval', 'Content generated during play'],
      ],
    },
    note: {
      fr: 'La génération procédurale classique (cartes aléatoires à partir de règles écrites) n’est pas de l’IA générative au sens de HC.',
      en: 'Conventional procedural generation (random maps from hand-written rules) is not generative AI in the HC sense.',
    },
    sources: ['ubisoft', 'steam'],
  },
  {
    id: 'comics',
    name: { fr: 'Bande dessinée et manga', en: 'Comics and manga' },
    intro: {
      fr: 'En manga, l’auteur et l’éditeur valident d’abord un story-board appelé « name ». Des assistants prennent souvent en charge décors et trames.',
      en: 'In manga, the artist and editor first approve a rough storyboard called the “name”. Assistants often handle backgrounds and screentones.',
    },
    stages: {
      fr: [
        ['Scénario', 'Histoire, découpage en chapitres', 'Pistes d’intrigue, reformulations'],
        ['Découpage (name)', 'Cases, rythme, mise en page', 'Propositions de mise en page'],
        ['Crayonné et encrage', 'Dessin des personnages et des scènes', 'Images générées ensuite reprises ou non'],
        ['Décors et trames', 'Fonds, textures, ambiances', 'Décors de fond, trames générées'],
        ['Couleur, lettrage, couverture', 'Palette, bulles, typographie, couverture', 'Mise en couleur, couverture générée'],
      ],
      en: [
        ['Script', 'Story, chapter breakdown', 'Plot ideas, rewording'],
        ['Layout (name)', 'Panels, pacing, page layout', 'Layout suggestions'],
        ['Pencils and inks', 'Drawing characters and scenes', 'Generated images, reworked or not'],
        ['Backgrounds and tones', 'Backdrops, textures, mood', 'Generated backgrounds and tones'],
        ['Colour, lettering, cover', 'Palette, balloons, type, cover', 'Colouring, generated cover'],
      ],
    },
    note: {
      fr: 'Chez un auteur seul, plusieurs étapes se confondent. Elles restent distinctes dans la déclaration.',
      en: 'For a solo author several stages merge. They stay separate in the declaration.',
    },
    sources: ['webJapan'],
  },
  {
    id: 'publishing',
    name: { fr: 'Édition et littérature', en: 'Publishing and literature' },
    intro: {
      fr: 'Après l’écriture, un livre passe par l’édition, la correction, la mise en page et la couverture. Certaines étapes avancent en parallèle.',
      en: 'After writing, a book goes through editing, copy-editing, typesetting and cover design. Some steps run in parallel.',
    },
    stages: {
      fr: [
        ['Écriture', 'Récit, voix, structure', 'Passages rédigés ou réécrits par l’IA'],
        ['Travail éditorial', 'Coupes, restructuration, retours', 'Suggestions de structure'],
        ['Correction', 'Orthographe, cohérence, style', 'Reformulations génératives'],
        ['Traduction', 'Choix de ton, de registre', 'Traduction automatique conservée'],
        ['Couverture et illustrations', 'Concept, image, typographie', 'Illustrations générées'],
      ],
      en: [
        ['Writing', 'Story, voice, structure', 'Passages written or rewritten by AI'],
        ['Editorial work', 'Cuts, restructuring, feedback', 'Structure suggestions'],
        ['Copy-editing', 'Spelling, consistency, style', 'Generative rewording'],
        ['Translation', 'Tone and register', 'Machine translation kept as is'],
        ['Cover and illustrations', 'Concept, image, typography', 'Generated illustrations'],
      ],
    },
    note: {
      fr: 'Un correcteur orthographique ne compte pas. Une réécriture générative de paragraphes compte.',
      en: 'A spell-checker does not count. Generative rewriting of paragraphs does.',
    },
    sources: ['enago'],
  },
  {
    id: 'advertising',
    name: { fr: 'Publicité et communication', en: 'Advertising and communication' },
    intro: {
      fr: 'Une campagne part d’un brief client. L’agence propose des concepts, puis la production prépare, tourne et monte.',
      en: 'A campaign starts with a client brief. The agency pitches concepts, then production prepares, shoots and edits.',
    },
    stages: {
      fr: [
        ['Brief et stratégie', 'Message, public, objectifs', 'Analyses, pistes de message'],
        ['Concept créatif', 'Idée, ton, script', 'Variantes de slogans et de scripts'],
        ['Préproduction', 'Casting, lieux, story-board', 'Images de story-board, repérages simulés'],
        ['Production', 'Tournage, photo, animation', 'Images et vidéos générées'],
        ['Postproduction et déclinaisons', 'Montage, voix, formats', 'Voix, déclinaisons générées'],
      ],
      en: [
        ['Brief and strategy', 'Message, audience, goals', 'Analysis, message ideas'],
        ['Creative concept', 'Idea, tone, script', 'Slogan and script variants'],
        ['Pre-production', 'Casting, locations, storyboard', 'Storyboard images, simulated scouting'],
        ['Production', 'Shoot, photography, animation', 'Generated images and video'],
        ['Post-production and versions', 'Editing, voice, formats', 'Generated voices and variants'],
      ],
    },
    note: {
      fr: 'Une campagne produit souvent des dizaines de déclinaisons. Le périmètre doit dire lesquelles sont évaluées.',
      en: 'A campaign often has dozens of variants. The scope must say which ones are assessed.',
    },
    sources: ['adProduction'],
  },
  {
    id: 'architecture',
    name: { fr: 'Architecture et design', en: 'Architecture and design' },
    intro: {
      fr: 'Au Royaume-Uni, le RIBA Plan of Work découpe un projet en huit étapes, de la définition stratégique à l’usage du bâtiment.',
      en: 'In the UK, the RIBA Plan of Work splits a project into eight stages, from strategic definition to building use.',
    },
    stages: {
      fr: [
        ['Définition et programme', 'Besoins, budget, contraintes', 'Synthèse de documents'],
        ['Conception', 'Parti architectural, volumes, matières', 'Esquisses et images d’ambiance générées'],
        ['Coordination et conception technique', 'Structure, réseaux, détails', 'Variantes générées sous contraintes'],
        ['Construction', 'Suivi de chantier, arbitrages', 'Peu d’usage génératif direct'],
        ['Livraison et usage', 'Ajustements, retour d’expérience', '—'],
      ],
      en: [
        ['Definition and brief', 'Needs, budget, constraints', 'Document summaries'],
        ['Concept design', 'Architectural idea, massing, materials', 'Generated sketches and mood images'],
        ['Coordination and technical design', 'Structure, services, details', 'Variants generated under constraints'],
        ['Construction', 'Site follow-up, trade-offs', 'Little direct generative use'],
        ['Handover and use', 'Adjustments, feedback', '—'],
      ],
    },
    note: {
      fr: 'Hypothèse : HC servirait surtout pour les images de concours et la phase de conception, plus visibles du public.',
      en: 'Hypothesis: HC would mainly apply to competition images and concept design, which the public sees most.',
    },
    sources: ['riba'],
  },
  {
    id: 'music',
    name: { fr: 'Musique et audiovisuel', en: 'Music and audio-visual' },
    intro: {
      fr: 'Un morceau passe par l’écriture, l’arrangement, l’enregistrement, le mixage puis le mastering. Les outils de studio y sont omniprésents.',
      en: 'A track goes through songwriting, arrangement, recording, mixing and mastering. Studio software is everywhere.',
    },
    stages: {
      fr: [
        ['Composition et paroles', 'Mélodie, harmonie, texte', 'Mélodies ou paroles générées'],
        ['Arrangement', 'Instruments, structure, groove', 'Parties instrumentales générées'],
        ['Enregistrement', 'Interprétation, prises', 'Voix ou instruments de synthèse générative'],
        ['Mixage', 'Équilibre, espace, effets', 'Séparation de pistes (assistance)'],
        ['Mastering', 'Rendu final, formats', 'Mastering automatique (assistance)'],
      ],
      en: [
        ['Composition and lyrics', 'Melody, harmony, words', 'Generated melodies or lyrics'],
        ['Arrangement', 'Instruments, structure, groove', 'Generated instrumental parts'],
        ['Recording', 'Performance, takes', 'Generative synthetic voices or instruments'],
        ['Mixing', 'Balance, space, effects', 'Stem separation (assistance)'],
        ['Mastering', 'Final sound, formats', 'Automatic mastering (assistance)'],
      ],
    },
    note: {
      fr: 'Isoler une voix d’un vieil enregistrement n’est pas créer une voix. La différence compte beaucoup ici.',
      en: 'Isolating a voice from an old recording is not creating a voice. The difference matters a lot here.',
    },
    sources: ['abbeyRoad'],
  },
  {
    id: 'education',
    name: { fr: 'Éducation et vulgarisation', en: 'Education and science communication' },
    intro: {
      fr: 'Beaucoup de contenus pédagogiques suivent un modèle comme ADDIE : analyse, conception, développement, mise en œuvre, évaluation.',
      en: 'Many learning materials follow a model such as ADDIE: analysis, design, development, implementation, evaluation.',
    },
    stages: {
      fr: [
        ['Analyse', 'Public, objectifs, prérequis', 'Synthèse de besoins'],
        ['Conception', 'Plan, progression, exemples', 'Plans de cours suggérés'],
        ['Développement', 'Textes, schémas, vidéos, exercices', 'Textes, schémas, vidéos et exercices générés'],
        ['Vérification scientifique', 'Exactitude, sources', 'Recherche de sources assistée'],
        ['Diffusion et évaluation', 'Retours, corrections', 'Analyse des retours'],
      ],
      en: [
        ['Analysis', 'Audience, goals, prerequisites', 'Needs summaries'],
        ['Design', 'Outline, progression, examples', 'Suggested lesson plans'],
        ['Development', 'Text, diagrams, videos, exercises', 'Generated text, diagrams, videos and exercises'],
        ['Scientific review', 'Accuracy, sources', 'Assisted source search'],
        ['Delivery and evaluation', 'Feedback, corrections', 'Feedback analysis'],
      ],
    },
    note: {
      fr: 'Proposition : ajouter une mention sur la relecture scientifique humaine, distincte du niveau HC.',
      en: 'Proposal: add a separate note on human scientific review, distinct from the HC level.',
    },
    sources: ['addie'],
  },
]
