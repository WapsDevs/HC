import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { NAV, PAGES, REPO_URL, rememberLang, useLang } from '../i18n.js'
import { GitHubLink, LangSwitch } from './HeaderTools.jsx'

const UI = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    nav: 'Navigation principale',
    home: 'Accueil',
    demo: 'Démo streaming',
    status: 'Proposition exploratoire. HC n’est ni une norme officielle ni une certification.',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    nav: 'Main navigation',
    home: 'Home',
    demo: 'Streaming demo',
    status: 'Exploratory proposal. HC is not an official standard or a certification.',
  },
}

// Menu déroulant : s'ouvre au clic, se ferme avec Échap, un clic ailleurs ou un changement de page.
function Dropdown({ group, lang }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const active = group.items.some((i) => pathname === `/${lang}/${i.path}`)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 py-1.5 text-[0.95rem] ${active ? 'text-ink font-medium' : 'text-muted hover:text-ink'}`}>
        {group.label[lang]}
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 top-full mt-1 min-w-44 rounded-md border border-line bg-paper py-1.5 shadow-sm">
          {group.items.map((i) => (
            <li key={i.path}>
              <NavLink to={`/${lang}/${i.path}`}
                className={({ isActive }) => `block px-3 py-1.5 text-[0.95rem] no-underline ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink hover:bg-soft'}`}>
                {i.label[lang]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Layout() {
  const lang = useLang()
  const t = UI[lang]
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    rememberLang(lang)
  }, [lang])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const flatLink = ({ isActive }) =>
    `block py-1.5 text-[0.95rem] no-underline ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'}`

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-ink text-paper px-3 py-2 rounded z-50">
        {t.skip}
      </a>

      <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center gap-7">
          <Link to={`/${lang}`} className="font-serif font-bold text-xl tracking-tight no-underline" aria-label={`HC, ${t.home.toLowerCase()}`}>
            HC
          </Link>

          <nav aria-label={t.nav} className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => n.items
              ? <Dropdown key={n.label.fr} group={n} lang={lang} />
              : <NavLink key={n.path} to={`/${lang}/${n.path}`} className={flatLink}>{n.label[lang]}</NavLink>)}
            <NavLink to={`/${lang}/demo`} className="text-[0.95rem] text-accent no-underline hover:underline">{t.demo}</NavLink>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <LangSwitch />
            <GitHubLink />
            <button type="button" className="lg:hidden text-sm border border-line rounded px-2 py-1"
              aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
              {open ? t.close : t.menu}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label={t.nav} className="lg:hidden border-t border-line px-4 sm:px-6 py-3 space-y-3">
            <NavLink end to={`/${lang}`} className={flatLink}>{t.home}</NavLink>
            {NAV.filter((n) => n.items).map((n) => (
              <div key={n.label.fr}>
                <p className="text-xs uppercase tracking-wide text-muted/80 mb-0.5">{n.label[lang]}</p>
                {n.items.map((i) => <NavLink key={i.path} to={`/${lang}/${i.path}`} className={flatLink}>{i.label[lang]}</NavLink>)}
              </div>
            ))}
            <div>
              {NAV.filter((n) => !n.items).map((n) => <NavLink key={n.path} to={`/${lang}/${n.path}`} className={flatLink}>{n.label[lang]}</NavLink>)}
              <Link to={`/${lang}/demo`} className="block py-1.5 text-[0.95rem] text-accent no-underline">{t.demo}</Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <footer className="border-t border-line mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-[1fr_auto] text-sm text-muted">
          <p className="max-w-md">{t.status}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {PAGES.map((p) => (
              <li key={p.path}><Link to={`/${lang}/${p.path}`} className="no-underline hover:text-ink">{p.label[lang]}</Link></li>
            ))}
            <li><Link to={`/${lang}/demo`} className="no-underline hover:text-ink">{t.demo}</Link></li>
            <li><a href={REPO_URL} className="no-underline hover:text-ink">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
