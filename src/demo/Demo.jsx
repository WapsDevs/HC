import { useEffect } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Badge from '../components/Badge.jsx'
import Sources from '../components/Sources.jsx'
import { GitHubLink, LangSwitch } from '../components/HeaderTools.jsx'
import { src } from '../content/sources.js'
import { CATEGORIES, KINDS, TITLES } from './catalog.js'
import { LEVELS, rememberLang, useLang } from '../i18n.js'

const BASE = import.meta.env.BASE_URL

const UI = {
  fr: {
    banner: 'Démonstration HC. Les œuvres sont réelles, la plateforme est fictive et les niveaux HC sont des hypothèses.',
    back: 'Retour au site HC',
    home: 'Accueil',
    featured: 'À la une',
    details: 'Voir la fiche',
    noPoster: 'Affiche non libre de droits',
    seePoster: 'Voir l’œuvre et son affiche',
    posterCredit: 'Affiche : domaine public, via Wikimedia Commons',
    posterLocked: 'L’affiche de cette œuvre est protégée. Nous ne la reproduisons pas.',
    badgeHelp: 'Le petit repère HC indique la place de l’humain dans la création. Ce n’est pas une note.',
    imagesNote: 'Les affiches présentes sont dans le domaine public. Pour les œuvres récentes, un lien mène à la source.',
    learn: 'Comprendre HC',
    hcTitle: 'Contribution humaine',
    hypothesis: 'Classification hypothétique',
    hypothesisHelp: 'Cette œuvre n’a pas fait de déclaration HC. Le niveau est proposé par le projet HC à partir de sources publiques.',
    or: 'ou',
    limits: 'Limites',
    notQuality: 'Ce repère décrit la façon dont l’œuvre a été faite. Il ne dit rien de sa qualité.',
    more: 'À découvrir aussi',
    notFound: 'Ce titre n’existe pas dans la démo.',
  },
  en: {
    banner: 'HC demo. The works are real, the platform is fictional and the HC levels are hypotheses.',
    back: 'Back to the HC site',
    home: 'Home',
    featured: 'Featured',
    details: 'View details',
    noPoster: 'Poster not free to reuse',
    seePoster: 'See the work and its poster',
    posterCredit: 'Poster: public domain, via Wikimedia Commons',
    posterLocked: 'This poster is protected by copyright, so we do not reproduce it.',
    badgeHelp: 'The small HC tag shows the role of people in making the work. It is not a rating.',
    imagesNote: 'The posters shown are in the public domain. For recent works, a link leads to the source.',
    learn: 'Learn about HC',
    hcTitle: 'Human contribution',
    hypothesis: 'Hypothetical classification',
    hypothesisHelp: 'This work has not made an HC declaration. The level is suggested by the HC project, based on public sources.',
    or: 'or',
    limits: 'Limits',
    notQuality: 'This tag describes how the work was made. It says nothing about its quality.',
    more: 'You might also like',
    notFound: 'This title does not exist in the demo.',
  },
}

const tr = (v, lang) => (typeof v === 'object' ? v[lang] : v)
const meta = (t, lang) => `${KINDS[t.kind][lang]} · ${t.year}`

// Affiche réelle si elle est libre ; sinon, un cadre neutre avec le titre (aucun visuel inventé).
function Cover({ t, lang, showTitle = false, className = '' }) {
  if (t.poster) {
    return (
      <img src={`${BASE}${t.poster.src}`} alt="" loading="lazy" decoding="async"
        className={`w-full h-full object-contain bg-[#151a27] ${className}`} />
    )
  }
  return (
    <div className={`w-full h-full bg-[#151a27] flex flex-col gap-4 p-3 ${className}`}>
      <span className="text-[11px] leading-4 text-white/45">{tr(t.studio, lang)}<br />{UI[lang].noPoster}</span>
      {showTitle && <span className="mt-auto font-serif text-white/90 text-xl leading-tight">{t.title[lang]}</span>}
    </div>
  )
}

function Card({ t, lang }) {
  return (
    <Link to={`/${lang}/demo/${t.id}`} className="group block w-36 sm:w-44 shrink-0 no-underline focus-visible:outline-white">
      <div className="relative aspect-[3/4] rounded-md overflow-hidden ring-1 ring-white/10 group-hover:ring-white/40 transition">
        <Cover t={t} lang={lang} />
        <span className="absolute right-2 bottom-2"><Badge level={t.hc.level} status="hypothetical" lang={lang} tone="dark" /></span>
      </div>
      <p className="mt-2 text-sm text-white/90 leading-snug">{t.title[lang]}</p>
      <p className="text-xs text-white/50">{t.year}</p>
    </Link>
  )
}

function Row({ title, items, lang }) {
  return (
    <section className="mt-10" aria-label={title}>
      <h2 className="font-sans text-lg font-semibold text-white px-4 sm:px-8">{title}</h2>
      <ul className="mt-3 flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar px-4 sm:px-8 scroll-px-4 sm:scroll-px-8 pb-2 snap-x">
        {items.map((t) => <li key={t.id} className="snap-start"><Card t={t} lang={lang} /></li>)}
      </ul>
    </section>
  )
}

function Home() {
  const lang = useLang()
  const ui = UI[lang]
  const f = TITLES[0]
  useEffect(() => { document.title = lang === 'fr' ? 'Veillée · démo HC' : 'Veillée · HC demo' }, [lang])

  return (
    <>
      <section className="px-4 sm:px-8 pt-6 grid gap-6 sm:grid-cols-[14rem_1fr] md:grid-cols-[18rem_1fr] items-end max-w-5xl">
        <div className="aspect-[3/4] w-40 sm:w-full rounded-md overflow-hidden ring-1 ring-white/10">
          <Cover t={f} lang={lang} />
        </div>
        <div className="pb-2">
          <p className="text-sm text-white/60">{ui.featured}</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mt-1">{f.title[lang]}</h1>
          <p className="mt-2 text-sm text-white/70 flex flex-wrap items-center gap-2">
            {meta(f, lang)} · {tr(f.studio, lang)} <Badge level={f.hc.level} status="hypothetical" lang={lang} tone="dark" />
          </p>
          <p className="mt-3 text-white/90 leading-7 max-w-xl">{f.synopsis[lang]}</p>
          <Link to={`/${lang}/demo/${f.id}`} className="inline-block mt-5 bg-white text-[#0b0f1a] font-medium rounded px-4 py-2.5 no-underline hover:bg-white/85">
            {ui.details}
          </Link>
        </div>
      </section>

      {Object.entries(CATEGORIES).map(([key, label]) => (
        <Row key={key} title={label[lang]} lang={lang} items={TITLES.filter((t) => t.categories.includes(key))} />
      ))}

      <div className="px-4 sm:px-8 mt-12 text-sm text-white/55 max-w-2xl space-y-2">
        <p>{ui.badgeHelp} <Link to={`/${lang}/levels`} className="underline hover:text-white">{ui.learn}</Link></p>
        <p>{ui.imagesNote}</p>
      </div>
    </>
  )
}

function Detail() {
  const lang = useLang()
  const ui = UI[lang]
  const { id } = useParams()
  const t = TITLES.find((x) => x.id === id)
  useEffect(() => { if (t) document.title = `${t.title[lang]} · Veillée` }, [t, lang])

  if (!t) return <p className="px-4 sm:px-8 py-20 text-white/80">{ui.notFound} <Link to={`/${lang}/demo`} className="underline">{ui.home}</Link></p>

  const lvl = LEVELS[t.hc.level]
  const more = TITLES.filter((x) => x.id !== t.id && x.categories.some((c) => t.categories.includes(c))).slice(0, 8)

  return (
    <>
      <div className="px-4 sm:px-8 pt-6 grid gap-8 md:grid-cols-[16rem_1fr] lg:grid-cols-[16rem_1fr_22rem] max-w-6xl">
        <div>
          <div className="aspect-[3/4] w-44 md:w-full rounded-md overflow-hidden ring-1 ring-white/10">
            <Cover t={t} lang={lang} showTitle />
          </div>
          <p className="mt-2 text-xs text-white/50 max-w-56">
            {t.poster
              ? <a href={t.poster.page} target="_blank" rel="noreferrer" className="underline hover:text-white">{ui.posterCredit}</a>
              : <>{ui.posterLocked} <a href={t.link.url} target="_blank" rel="noreferrer" className="underline hover:text-white">{t.link.label[lang]}</a></>}
          </p>
        </div>

        <div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold">{t.title[lang]}</h1>
          <p className="mt-3 text-sm text-white/70 flex flex-wrap items-center gap-2">
            {meta(t, lang)} <Badge level={t.hc.level} status="hypothetical" lang={lang} tone="dark" />
          </p>
          <p className="mt-1 text-sm text-white/55">{t.categories.map((c) => CATEGORIES[c][lang]).join(', ')}. {tr(t.studio, lang)}.</p>
          <p className="mt-5 text-white/90 text-lg leading-8 max-w-2xl">{t.synopsis[lang]}</p>
          {t.link && (
            <a href={t.link.url} target="_blank" rel="noreferrer" className="inline-block mt-5 text-sm text-white underline hover:no-underline">
              {ui.seePoster}
            </a>
          )}
        </div>

        <aside aria-labelledby="hc-panel" className="md:col-span-2 lg:col-span-1 rounded-lg bg-white/[0.06] ring-1 ring-white/10 p-5 text-white/90 self-start">
          <h2 id="hc-panel" className="font-sans text-xs font-semibold uppercase tracking-wide text-white/60">{ui.hcTitle}</h2>
          <p className="mt-3 flex flex-wrap items-center gap-2">
            <Badge level={t.hc.level} status="hypothetical" lang={lang} tone="dark" size="md" />
            {t.hc.range && <><span className="text-white/55 text-sm">{ui.or}</span><Badge level={t.hc.range} status="hypothetical" lang={lang} tone="dark" size="md" /></>}
            <span className="font-medium text-white">{lvl.label[lang]}</span>
          </p>
          <p className="mt-3 text-sm text-white/60">{ui.hypothesis}. {ui.hypothesisHelp}</p>
          <p className="mt-3 leading-7">{t.hc.summary[lang]}</p>
          <p className="mt-3 text-sm text-white/60"><span className="text-white/80">{ui.limits}.</span> {t.hc.limits[lang]}</p>
          {t.hc.sources && (
            <div className="text-white/80 [&_a]:text-white [&_.text-muted]:text-white/55">
              <Sources lang={lang} items={src(...t.hc.sources)} />
            </div>
          )}
          <p className="mt-4 text-sm text-white/55">{ui.notQuality}</p>
          <p className="mt-3 text-sm"><Link to={`/${lang}/levels`} className="underline hover:text-white">{ui.learn}</Link></p>
        </aside>
      </div>

      <Row title={ui.more} items={more} lang={lang} />
    </>
  )
}

export default function Demo() {
  const lang = useLang()
  const ui = UI[lang]
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    rememberLang(lang)
  }, [lang])
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans pb-16">
      <p className="bg-[#1d2436] text-white/80 text-xs sm:text-sm px-4 sm:px-8 py-2 flex flex-wrap gap-x-4 gap-y-1 justify-between">
        <span>{ui.banner}</span>
        <Link to={`/${lang}`} className="underline hover:text-white">{ui.back}</Link>
      </p>
      <header className="flex items-center gap-6 px-4 sm:px-8 h-14">
        <Link to={`/${lang}/demo`} className="font-serif text-xl font-semibold tracking-tight text-white no-underline">Veillée</Link>
        <Link to={`/${lang}/demo`} className="text-sm text-white/70 hover:text-white no-underline">{ui.home}</Link>
        <div className="ml-auto flex items-center gap-4">
          <LangSwitch dark />
          <GitHubLink dark />
        </div>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  )
}
