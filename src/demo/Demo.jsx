import { useEffect } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Badge from '../components/Badge.jsx'
import Poster from './Poster.jsx'
import { AGE, CATEGORIES, STAGE_STATE, TITLES } from './catalog.js'
import { LEVELS, STATUSES, rememberLang, useLang } from '../i18n.js'
import { useSwitchPath } from '../components/Layout.jsx'

const UI = {
  fr: {
    colon: ' : ',
    banner: 'Démonstration HC. La plateforme, les œuvres, les studios et les déclarations sont fictifs.',
    back: 'Retour au site HC',
    home: 'Accueil',
    featured: 'À la une',
    details: 'Voir la fiche',
    film: 'Film',
    series: 'Série',
    rowLabel: 'Défiler',
    badgeHelp: 'Le petit repère HC indique la place de l’humain dans la création. Ce n’est pas une note.',
    learn: 'Comprendre HC',
    hcTitle: 'Contribution humaine',
    status: 'Statut',
    declarant: 'Déclaré par',
    date: 'Date de la déclaration',
    stages: 'Détail par étape',
    stage: 'Étape',
    who: 'Contribution',
    detail: 'Précision',
    fictional: 'Démonstration : l’œuvre, le studio, la déclaration et l’évaluateur sont fictifs.',
    statusHelp: {
      declared: 'Déclaré par le studio. Pas encore contrôlé par un évaluateur indépendant.',
      verified: 'Contrôlé par un évaluateur indépendant (fictif dans cette démo).',
      unverified: 'Informations insuffisantes pour confirmer le niveau.',
    },
    notQuality: 'Ce repère décrit la façon dont l’œuvre a été faite. Il ne dit rien de sa qualité.',
    more: 'À découvrir aussi',
    notFound: 'Ce titre n’existe pas dans la démo.',
  },
  en: {
    colon: ': ',
    banner: 'HC demo. The platform, works, studios and declarations are fictional.',
    back: 'Back to the HC site',
    home: 'Home',
    featured: 'Featured',
    details: 'View details',
    film: 'Film',
    series: 'Series',
    rowLabel: 'Scroll',
    badgeHelp: 'The small HC tag shows the role of people in making the work. It is not a rating.',
    learn: 'Learn about HC',
    hcTitle: 'Human contribution',
    status: 'Status',
    declarant: 'Declared by',
    date: 'Declaration date',
    stages: 'Stage by stage',
    stage: 'Stage',
    who: 'Contribution',
    detail: 'Detail',
    fictional: 'Demo: the work, studio, declaration and reviewer are fictional.',
    statusHelp: {
      declared: 'Declared by the studio. Not yet checked by an independent reviewer.',
      verified: 'Checked by an independent reviewer (fictional in this demo).',
      unverified: 'Not enough information to confirm the level.',
    },
    notQuality: 'This tag describes how the work was made. It says nothing about its quality.',
    more: 'You might also like',
    notFound: 'This title does not exist in the demo.',
  },
}

const val = (v, lang) => (typeof v === 'object' ? v[lang] : v)

function meta(t, lang, ui) {
  return [ui[t.kind], t.year, val(t.length, lang), AGE[t.age][lang]].join(' · ')
}

function Card({ t, lang }) {
  return (
    <Link to={`/${lang}/demo/${t.id}`} className="group block w-36 sm:w-44 shrink-0 no-underline focus-visible:outline-white">
      <div className="relative aspect-[2/3] rounded-md overflow-hidden ring-1 ring-white/10 group-hover:ring-white/40 transition">
        <Poster id={t.id} scene={t.scene} palette={t.palette} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
        <p className="absolute left-2.5 right-2.5 bottom-7 font-serif text-white font-semibold text-[1.05rem] leading-tight">{t.title[lang]}</p>
        <span className="absolute left-2.5 bottom-2"><Badge level={t.hc.level} status={t.hc.status} lang={lang} tone="dark" /></span>
      </div>
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
  useEffect(() => { document.title = 'Veillée · HC demo' }, [])

  return (
    <>
      <section className="relative">
        <Poster id={f.id} scene={f.scene} palette={f.palette} wide className="w-full h-[62vh] min-h-[22rem] max-h-[36rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-8 pb-8 max-w-2xl">
          <p className="text-sm text-white/70">{ui.featured}</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mt-1">{f.title[lang]}</h1>
          <p className="mt-2 text-sm text-white/75 flex flex-wrap items-center gap-2">
            {meta(f, lang, ui)} <Badge level={f.hc.level} status={f.hc.status} lang={lang} tone="dark" />
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

      <p className="px-4 sm:px-8 mt-12 text-sm text-white/60 max-w-2xl">
        {ui.badgeHelp} <Link to={`/${lang}/levels`} className="underline hover:text-white">{ui.learn}</Link>
      </p>
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
      <section className="relative">
        <Poster id={t.id} scene={t.scene} palette={t.palette} wide className="w-full h-[48vh] min-h-[18rem] max-h-[30rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/30 to-transparent" />
      </section>

      <div className="px-4 sm:px-8 -mt-24 relative grid gap-10 lg:grid-cols-[1fr_24rem] max-w-6xl">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold">{t.title[lang]}</h1>
          <p className="mt-3 text-sm text-white/75 flex flex-wrap items-center gap-2">
            {meta(t, lang, ui)} <Badge level={t.hc.level} status={t.hc.status} lang={lang} tone="dark" />
          </p>
          <p className="mt-2 text-sm text-white/60">{t.categories.map((c) => CATEGORIES[c][lang]).join(', ')} · {t.studio[lang]}</p>
          <p className="mt-5 text-white/90 text-lg leading-8 max-w-2xl">{t.synopsis[lang]}</p>
        </div>

        <aside aria-labelledby="hc-panel" className="rounded-lg bg-white/[0.06] ring-1 ring-white/10 p-5 text-white/90 self-start">
          <h2 id="hc-panel" className="font-sans text-xs font-semibold uppercase tracking-wide text-white/60">{ui.hcTitle}</h2>
          <p className="mt-3 flex items-center gap-3">
            <Badge level={t.hc.level} status={t.hc.status} lang={lang} tone="dark" size="md" />
            <span className="font-medium text-white">{lvl.label[lang]}</span>
          </p>
          <p className="mt-3 leading-7">{t.hc.summary[lang]}</p>
          <dl className="mt-4 text-sm space-y-2">
            <div><dt className="text-white/55 inline">{ui.status}{ui.colon}</dt><dd className="inline">{STATUSES[t.hc.status][lang]}</dd>
              <p className="text-white/55 mt-0.5">{ui.statusHelp[t.hc.status]}</p></div>
            <div><dt className="text-white/55 inline">{ui.declarant}{ui.colon}</dt><dd className="inline">{t.studio[lang]}</dd></div>
            <div><dt className="text-white/55 inline">{ui.date}{ui.colon}</dt><dd className="inline">{t.hc.date}</dd></div>
          </dl>

          <details className="mt-4 group">
            <summary className="cursor-pointer text-sm font-medium text-white hover:underline">{ui.stages}</summary>
            <table className="mt-3 w-full text-sm">
              <thead className="sr-only"><tr><th>{ui.stage}</th><th>{ui.who}</th></tr></thead>
              <tbody>
                {t.hc.stages.map(([name, state, note]) => (
                  <tr key={name.fr} className="border-t border-white/10 align-top">
                    <td className="py-2 pr-3">
                      <span className="text-white">{name[lang]}</span>
                      <span className="block text-white/55">{note[lang]}</span>
                    </td>
                    <td className="py-2 text-right whitespace-nowrap text-white/80">{STAGE_STATE[state][lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>

          <p className="mt-4 text-sm text-white/55">{ui.notQuality}</p>
          <p className="mt-3 text-sm flex flex-wrap gap-x-4 gap-y-1">
            <Link to={`/${lang}/levels`} className="underline hover:text-white">{ui.learn}</Link>
          </p>
          <p className="mt-3 text-xs text-white/45">{ui.fictional}</p>
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
  const { other, to } = useSwitchPath()

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
        <Link to={to} hrefLang={other} lang={other} className="ml-auto text-sm border border-white/25 rounded px-2 py-1 text-white/85 no-underline hover:border-white">
          {other.toUpperCase()}
        </Link>
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
