import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { REPO_URL, useLang } from '../i18n.js'

// Même page, autre langue.
export function useSwitchPath() {
  const { pathname } = useLocation()
  const lang = useLang()
  const other = lang === 'fr' ? 'en' : 'fr'
  return { other, to: pathname.replace(/^\/(fr|en)/, `/${other}`) }
}

// Sélecteur « FR / EN » : la langue active est en gras, l'autre est un lien.
export function LangSwitch({ dark = false }) {
  const lang = useLang()
  const { to } = useSwitchPath()
  const muted = dark ? 'text-white/55 hover:text-white' : 'text-muted hover:text-ink'
  const active = dark ? 'text-white font-semibold' : 'text-ink font-semibold'
  const item = (code) =>
    code === lang ? (
      <span aria-current="true" className={active}>{code.toUpperCase()}</span>
    ) : (
      <Link to={to} hrefLang={code} lang={code} className={`${muted} no-underline`}
        aria-label={code === 'en' ? 'English' : 'Français'}>
        {code.toUpperCase()}
      </Link>
    )
  return (
    <div className="text-sm flex items-center gap-1.5" role="group" aria-label={lang === 'fr' ? 'Langue' : 'Language'}>
      {item('fr')}
      <span aria-hidden="true" className={dark ? 'text-white/30' : 'text-line'}>/</span>
      {item('en')}
    </div>
  )
}

const GITHUB_MARK = 'M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'
const STAR = 'M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z'

// Nombre d'étoiles via l'API publique de GitHub (sans clé). En cas d'échec, on n'affiche rien.
function useStars() {
  const [stars, setStars] = useState(() => {
    try { return sessionStorage.getItem('hc-stars') } catch { return null }
  })
  useEffect(() => {
    if (stars !== null) return
    fetch('https://api.github.com/repos/WapsDevs/HC')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const n = String(d.stargazers_count)
        setStars(n)
        try { sessionStorage.setItem('hc-stars', n) } catch {}
      })
      .catch(() => {})
  }, [stars])
  return stars
}

// Lien discret vers le dépôt, où l'on peut lui donner une étoile.
export function GitHubLink({ dark = false }) {
  const lang = useLang()
  const stars = useStars()
  const label = lang === 'fr'
    ? 'Voir le dépôt HC sur GitHub et lui donner une étoile'
    : 'View the HC repository on GitHub and give it a star'
  const tone = dark
    ? 'border-white/25 text-white/80 hover:text-white hover:border-white/60'
    : 'border-line text-muted hover:text-ink hover:border-ink/40'
  return (
    <a href={REPO_URL} target="_blank" rel="noreferrer" title={label} aria-label={label}
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 text-sm no-underline ${tone}`}>
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor"><path d={GITHUB_MARK} /></svg>
      <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="currentColor" className="hidden sm:block"><path d={STAR} /></svg>
      {stars !== null && <span className="hidden sm:inline tabular-nums">{stars}</span>}
    </a>
  )
}
