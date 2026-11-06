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
}

export const NAV = [
  { path: '', label: { fr: 'Accueil', en: 'Home' } },
  { path: 'levels', label: { fr: 'Les niveaux', en: 'Levels' } },
  { path: 'method', label: { fr: 'Méthode', en: 'Method' } },
  { path: 'sectors', label: { fr: 'Secteurs', en: 'Sectors' } },
  { path: 'cases', label: { fr: 'Études de cas', en: 'Case studies' } },
  { path: 'verification', label: { fr: 'Vérification', en: 'Verification' } },
  { path: 'about', label: { fr: 'À propos', en: 'About' } },
]

export const REPO_URL = 'https://github.com/WapsDevs/HC'
export const PDF_URL = `${import.meta.env.BASE_URL}docs/HC_document_de_travail_v0_1.pdf`
