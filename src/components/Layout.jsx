import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { NAV, REPO_URL, rememberLang, useLang } from '../i18n.js'

const UI = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    demo: 'Démo streaming',
    switchLabel: 'Read this page in English',
    status: 'Proposition exploratoire. HC n’est ni une norme officielle ni une certification.',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    demo: 'Streaming demo',
    switchLabel: 'Lire cette page en français',
    status: 'Exploratory proposal. HC is not an official standard or a certification.',
  },
}

// Même page, autre langue.
export function useSwitchPath() {
  const { pathname } = useLocation()
  const lang = useLang()
  const other = lang === 'fr' ? 'en' : 'fr'
  return { other, to: pathname.replace(/^\/(fr|en)/, `/${other}`) }
}

export default function Layout() {
  const lang = useLang()
  const t = UI[lang]
  const { pathname } = useLocation()
  const { other, to } = useSwitchPath()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    rememberLang(lang)
  }, [lang])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const navLink = ({ isActive }) =>
    `block py-1.5 text-[0.95rem] no-underline ${isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'}`

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-ink text-paper px-3 py-2 rounded z-50">
        {t.skip}
      </a>

      <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center gap-7">
          <Link to={`/${lang}`} className="font-serif font-bold text-xl tracking-tight no-underline" aria-label="HC — accueil">
            HC
          </Link>

          <nav aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'} className="hidden lg:flex items-center gap-5">
            {NAV.slice(1).map((item) => (
              <NavLink key={item.path} to={`/${lang}/${item.path}`} className={navLink}>
                {item.label[lang]}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link to={`/${lang}/demo`} className="hidden sm:block text-[0.95rem] text-accent no-underline hover:underline">
              {t.demo}
            </Link>
            <Link to={to} hrefLang={other} lang={other} aria-label={t.switchLabel}
              className="text-sm border border-line rounded px-2 py-1 no-underline hover:border-ink">
              {other.toUpperCase()}
            </Link>
            <button type="button" className="lg:hidden text-sm border border-line rounded px-2 py-1"
              aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
              {open ? t.close : t.menu}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}
            className="lg:hidden border-t border-line px-4 sm:px-6 py-3">
            {NAV.map((item) => (
              <NavLink key={item.path} end to={`/${lang}/${item.path}`} className={navLink}>
                {item.label[lang]}
              </NavLink>
            ))}
            <Link to={`/${lang}/demo`} className="block py-1.5 text-[0.95rem] text-accent no-underline">{t.demo}</Link>
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
            {NAV.slice(1).map((item) => (
              <li key={item.path}>
                <Link to={`/${lang}/${item.path}`} className="no-underline hover:text-ink">{item.label[lang]}</Link>
              </li>
            ))}
            <li><a href={REPO_URL} className="no-underline hover:text-ink">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
