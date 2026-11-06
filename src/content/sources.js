// Registre des sources citées sur le site. Les pages y font référence par clé.
// Règle : privilégier la source primaire ; à défaut, un média professionnel qui la cite.

export const SOURCES = {
  // Cadres existants
  aiAct50: {
    title: 'Article 50: Transparency obligations for providers and deployers of certain AI systems',
    publisher: { fr: 'Commission européenne, AI Act Service Desk', en: 'European Commission, AI Act Service Desk' },
    url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50',
  },
  aiActGuidelines: {
    title: 'Guidelines on transparency obligations for providers and deployers of AI systems',
    publisher: { fr: 'Commission européenne', en: 'European Commission' },
    url: 'https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems',
    date: '2026',
  },
  c2pa: {
    title: 'Content Credentials: C2PA Technical Specification 2.3',
    publisher: 'Coalition for Content Provenance and Authenticity',
    url: 'https://spec.c2pa.org/specifications/specifications/2.3/specs/C2PA_Specification.html',
    date: '2026',
  },
  iptcDst: {
    title: 'Digital Source Type vocabulary',
    publisher: 'IPTC',
    url: 'https://cv.iptc.org/newscodes/digitalsourcetype/',
  },
  usco: {
    title: 'Copyright and Artificial Intelligence (Part 2: Copyrightability)',
    publisher: 'U.S. Copyright Office',
    url: 'https://www.copyright.gov/ai/',
    date: '2025',
  },
  steam: {
    title: 'Steam updates AI disclosure form to specify that it’s focused on AI-generated content that is “consumed by players”',
    publisher: 'PC Gamer',
    url: 'https://www.pcgamer.com/software/ai/steam-updates-ai-disclosure-form-to-specify-that-its-focused-on-ai-generated-content-that-is-consumed-by-players-not-efficiency-tools-used-behind-the-scenes/',
    date: '2026',
  },
  oscars: {
    title: 'AI-generated actors and scripts are now ineligible for Oscars',
    publisher: 'TechCrunch',
    url: 'https://techcrunch.com/2026/05/02/ai-generated-actors-and-scripts-are-now-ineligible-for-oscars/',
    date: '2026',
  },

  // Pipelines
  toonboom: {
    title: 'The Storyboard Pipeline',
    publisher: 'Toon Boom Learn',
    url: 'https://learn.toonboom.com/modules/the-animation-pipeline/topic/the-storyboard-pipeline',
  },
  ubisoft: {
    title: { fr: 'Processus créatif', en: 'Creative process' },
    publisher: 'Ubisoft',
    url: {
      fr: 'https://www.ubisoft.com/fr-fr/company/how-we-make-games/creative-process',
      en: 'https://www.ubisoft.com/en-us/company/how-we-make-games/creative-process',
    },
  },
  webJapan: {
    title: 'The Creation of Manga',
    publisher: { fr: 'Web Japan, ministère japonais des Affaires étrangères', en: 'Web Japan, Ministry of Foreign Affairs of Japan' },
    url: 'https://web-japan.org/trends/09_culture/pop110210.html',
  },
  enago: {
    title: 'The stages of the publishing process',
    publisher: 'Enago Author Hub',
    url: 'https://www.enago.com/author-hub/the-stages-of-the-publishing-process/',
  },
  adProduction: {
    title: 'BSBADV603: Manage advertising production',
    publisher: { fr: 'Training.gov.au, référentiel australien de compétences', en: 'Training.gov.au, Australian training standards' },
    url: 'https://training.gov.au/TrainingComponentFiles/BSB/BSBADV603_R1.pdf',
  },
  riba: {
    title: 'RIBA Plan of Work',
    publisher: 'Royal Institute of British Architects',
    url: 'https://riba.org/work/insights-and-resources/riba-plan-of-work',
  },
  addie: {
    title: 'ADDIE model',
    publisher: 'EBSCO Research Starters',
    url: 'https://ebsco.com/research-starters/education/addie-model',
  },

  // Démo streaming : œuvres récentes (affiches non réutilisables, liens seulement)
  robotsElevenLabs: {
    title: 'AiMation Studios uses ElevenLabs to bring characters to life',
    publisher: 'ElevenLabs',
    url: 'https://elevenlabs.io/blog/aimation-studios',
    note: { fr: 'Article promotionnel d’un fournisseur d’outils du film.', en: 'Promotional article by one of the film’s tool vendors.' },
  },
  robotsReview: {
    title: '“Where the Robots Grow” Says Its the First Full-Length A.I. Film',
    publisher: 'SciFi.radio',
    url: 'https://scifi.radio/2024/10/22/where-the-robots-grow/',
    date: '2024',
  },
  frostMit: {
    title: 'Welcome to the new surreal: How AI-generated video is changing film',
    publisher: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/2023/06/01/1073858/surreal-ai-generative-video-changing-film/',
    date: '2023',
  },
  toonstarDeadline: {
    title: 'Interactive Animation House Toonstar Launches AI Creators Studio On Back Of Parker James Series',
    publisher: 'Deadline (via Yahoo News)',
    url: 'https://ca.news.yahoo.com/interactive-animation-house-toonstar-launches-150000368.html',
    date: '2024',
  },
  toonstarEngadget: {
    title: 'AI animation studio Toonstar will turn books into digital shows for HarperCollins',
    publisher: 'Engadget',
    url: 'https://engadget.com/ai/ai-animation-studio-toonstar-will-turn-books-into-digital-shows-for-harpercollins-211419155.html',
    date: '2026',
  },

  // Études de cas
  spiderverseFx: {
    title: 'Ink Lines and Machine Learning',
    publisher: 'fxguide',
    url: 'https://www.fxguide.com/fxfeatured/ink-lines-and-machine-learning/',
    date: '2019',
  },
  spiderverseBa: {
    title: 'Giving “Spider-Man: Across the Spider-Verse” that crucial hand-made quality',
    publisher: 'befores & afters',
    url: 'https://beforesandafters.com/2024/01/10/giving-spider-man-across-the-spider-verse-that-crucial-hand-made-quality/',
    date: '2024',
  },
  secretInvasionThr: {
    title: '“Secret Invasion” AI Opening Cost No Artists Their Jobs',
    publisher: 'The Hollywood Reporter',
    url: 'https://www.hollywoodreporter.com/tv/tv-news/secret-invasion-ai-opening-1235521299/',
    date: '2023',
  },
  secretInvasionTc: {
    title: 'Artists are upset that “Secret Invasion” used AI art for opening credits',
    publisher: 'TechCrunch',
    url: 'https://techcrunch.com/2023/06/21/marvel-secret-invasion-ai-art-opening-credits/',
    date: '2023',
  },
  devilFilmStories: {
    title: 'Late Night With The Devil: Directors release statement about film’s brief use of AI imagery',
    publisher: 'Film Stories',
    url: 'https://filmstories.co.uk/news/late-night-with-the-devil-directors-release-statement-about-films-brief-use-of-ai-imagery/',
    date: '2024',
  },
  zaryaUsco: {
    title: 'Zarya of the Dawn (Registration # VAu001480196)',
    publisher: 'U.S. Copyright Office',
    url: 'https://www.copyright.gov/docs/zarya-of-the-dawn.pdf',
    date: '2023',
  },
  zaryaCc: {
    title: 'Zarya of the Dawn: US Copyright Office affirms limits on copyright of AI outputs',
    publisher: 'Creative Commons',
    url: 'https://creativecommons.org/2023/02/27/zarya-of-the-dawn-us-copyright-office-affirms-limits-on-copyright-of-ai-outputs/',
    date: '2023',
  },
  cocaColaTi: {
    title: 'Coca-Cola’s AI-generated “Holidays are Coming” ad sparks debate',
    publisher: 'TechInformed',
    url: 'https://techinformed.com/coca-colas-ai-generated-holidays-are-coming-ad-sparks-debate/',
    date: '2024',
  },
  cocaColaDecoder: {
    title: 'AI-generated “Holidays Are Coming” Coca-Cola ad looks festive but feels artificial, critics say',
    publisher: 'The Decoder',
    url: 'https://the-decoder.com/ai-generated-holidays-are-coming-coca-cola-ad-looks-festive-but-feels-artificial-critics-say/',
    date: '2024',
  },
  arcRaidersPcg: {
    title: 'Arc Raiders’ use of AI highlights the tension and confusion over where machine learning ends and generative AI begins',
    publisher: 'PC Gamer',
    url: 'https://www.pcgamer.com/gaming-industry/arc-raiders-use-of-ai-highlights-the-tension-and-confusion-over-where-machine-learning-ends-and-generative-ai-begins/',
    date: '2025',
  },
  arcRaidersVice: {
    title: 'Embark CEO Explains Which AI Assets Have Been Replaced in ARC Raiders After Launch',
    publisher: 'VICE',
    url: 'https://www.vice.com/en/article/embark-ceo-explains-which-ai-assets-have-been-replaced-in-arc-raiders-after-launch-and-why-its-an-improvement/',
    date: '2026',
  },
}

export const src = (...keys) => keys.map((k) => SOURCES[k])
