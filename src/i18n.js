import { useParams } from 'react-router-dom'

export const LANGS = ['fr', 'en']
const KEY = 'hc-lang'

export function preferredLang() {
  try {
    const saved = localStorage.getItem(KEY)
    if (LANGS.includes(saved)) return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function rememberLang(lang) {
  try { localStorage.setItem(KEY, lang) } catch {}
}

// Langue courante, déduite de l'URL. Toute valeur inconnue retombe sur le français.
export function useLang() {
  const { lang } = useParams()
  return LANGS.includes(lang) ? lang : 'fr'
}

// Sélectionne la version d'un contenu bilingue { fr, en }.
export function pick(content, lang) {
  return content[lang] ?? content.fr
}

// Niveaux HC. Le signe moins typographique (U+2212) est plus lisible que le tiret.
export const LEVELS = {
  minus: {
    code: 'HC−',
    spoken: { fr: 'HC moins', en: 'HC minus' },
    label: { fr: 'Contribution humaine limitée', en: 'Limited human contribution' },
  },
  base: {
    code: 'HC',
    spoken: { fr: 'HC', en: 'HC' },
    label: { fr: 'Contribution humaine partagée', en: 'Shared human contribution' },
  },
  plus: {
    code: 'HC+',
    spoken: { fr: 'HC plus', en: 'HC plus' },
    label: { fr: 'Contribution humaine dominante', en: 'Predominant human contribution' },
  },
}

export const STATUSES = {
  declared: { fr: 'Déclaré', en: 'Declared' },
  verified: { fr: 'Vérifié', en: 'Verified' },
  unverified: { fr: 'Non vérifié', en: 'Not verified' },
  hypothetical: { fr: 'Hypothèse', en: 'Hypothesis' },
}

const page = (path, fr, en) => ({ path, label: { fr, en } })

// Navigation : deux menus courts, puis « À propos ». La démo a son propre lien.
export const NAV = [
  {
    label: { fr: 'Le référentiel', en: 'The framework' },
    items: [
      page('levels', 'Les niveaux', 'Levels'),
      page('method', 'Méthode', 'Method'),
      page('verification', 'Vérification', 'Verification'),
    ],
  },
  {
    label: { fr: 'Exemples', en: 'Examples' },
    items: [
      page('sectors', 'Secteurs', 'Sectors'),
      page('cases', 'Études de cas', 'Case studies'),
    ],
  },
  page('about', 'À propos', 'About'),
]

// Toutes les pages, à plat (pied de page, menu mobile).
export const PAGES = NAV.flatMap((n) => n.items ?? [n])

export const REPO_URL = 'https://github.com/WapsDevs/HC'
export const PDF_URL = `${import.meta.env.BASE_URL}docs/HC_presentation.pdf`
