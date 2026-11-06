import { Note, PageHeader, TableWrap } from '../components/Page.jsx'
import Sources from '../components/Sources.jsx'
import { SECTORS } from '../content/sectors.js'
import { src } from '../content/sources.js'
import { useLang } from '../i18n.js'

const T = {
  fr: {
    eyebrow: 'Secteurs',
    title: 'Un même cadre, des métiers différents',
    lead: 'Chaque secteur a sa propre chaîne de fabrication. Voici des points de départ pour sept d’entre eux, à adapter à chaque projet.',
    jump: 'Aller au secteur',
    cols: ['Étape', 'Décisions humaines typiques', 'Usages génératifs possibles'],
    caveat: 'Les étapes viennent des sources citées. La colonne « usages possibles » donne des exemples : elle ne dit pas ce que font la plupart des studios.',
  },
  en: {
    eyebrow: 'Sectors',
    title: 'One framework, many crafts',
    lead: 'Each field has its own production chain. Here are starting points for seven of them, to be adapted to each project.',
    jump: 'Go to sector',
    cols: ['Stage', 'Typical human decisions', 'Possible generative uses'],
    caveat: 'The stages come from the sources cited. The “possible uses” column gives examples: it does not describe what most studios do.',
  },
}

export default function Sectors() {
  const lang = useLang()
  const t = T[lang]

  // Le site utilise des routes en hash : on fait défiler sans modifier l'URL.
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label={t.jump} className="flex flex-wrap gap-2 pb-6">
          {SECTORS.map((s) => (
            <button key={s.id} type="button" onClick={() => jump(s.id)}
              className="text-sm border border-line rounded-full px-3 py-1 hover:border-ink">
              {s.name[lang]}
            </button>
          ))}
        </nav>
        <div className="max-w-3xl pb-4"><Note>{t.caveat}</Note></div>
      </div>

      {SECTORS.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-20">
          <div className="border-t border-line pt-10 grid gap-6 lg:grid-cols-[15rem_1fr] lg:gap-12">
            <div>
              <h2 id={`h-${s.id}`} className="text-2xl font-semibold leading-tight">{s.name[lang]}</h2>
            </div>
            <div className="min-w-0 max-w-3xl">
              <p className="leading-7">{s.intro[lang]}</p>
              <div className="mt-5">
                <TableWrap label={s.name[lang]}>
                  <table className="table-hc min-w-[36rem]">
                    <thead><tr>{t.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
                    <tbody>
                      {s.stages[lang].map(([stage, human, ai]) => (
                        <tr key={stage}>
                          <td className="font-medium w-1/4">{stage}</td>
                          <td>{human}</td>
                          <td className="text-muted">{ai}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableWrap>
              </div>
              <p className="mt-4 text-[0.95rem] leading-6 text-muted">{s.note[lang]}</p>
              <Sources lang={lang} items={src(...s.sources)} />
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
