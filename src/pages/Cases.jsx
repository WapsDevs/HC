import { PageHeader } from '../components/Page.jsx'
import Badge from '../components/Badge.jsx'
import Sources from '../components/Sources.jsx'
import { CASES } from '../content/cases.js'
import { src } from '../content/sources.js'
import { LEVELS, useLang } from '../i18n.js'

const T = {
  fr: {
    colon: ' :',
    eyebrow: 'Études de cas',
    title: 'Six œuvres réelles, lues avec HC',
    lead: 'Ces exemples testent la grille sur des usages de l’IA documentés publiquement. Les niveaux indiqués sont des hypothèses.',
    warningTitle: 'À lire avant',
    warning: [
      'Aucune de ces œuvres n’a été déclarée ou évaluée selon HC. Les auteurs et studios cités n’ont pas participé à ce travail.',
      'Les niveaux sont proposés par le projet HC, à partir de sources publiques. Ils peuvent être faux et sont ouverts à la discussion.',
      'Un niveau ne dit rien de la qualité de ces œuvres.',
    ],
    facts: 'Ce qui est documenté',
    hypothesis: 'Classification hypothétique',
    or: 'ou',
    part: 'Élément évalué à part',
    reasoning: 'Raisonnement',
    limits: 'Limites',
    pick: 'Choix des cas',
    pickText: 'Les cas couvrent quatre secteurs et les trois niveaux. Ils montrent des situations délicates : un outil entraîné sur le travail de l’équipe, un élément isolé dans une série, un jeu qui change après sa sortie.',
  },
  en: {
    colon: ':',
    eyebrow: 'Case studies',
    title: 'Six real works, read through HC',
    lead: 'These examples test the grid against publicly documented uses of AI. The levels shown are hypotheses.',
    warningTitle: 'Before you read',
    warning: [
      'None of these works has been declared or assessed under HC. The authors and studios mentioned took no part in this work.',
      'The levels are suggested by the HC project, based on public sources. They may be wrong and are open to discussion.',
      'A level says nothing about the quality of these works.',
    ],
    facts: 'What is documented',
    hypothesis: 'Hypothetical classification',
    or: 'or',
    part: 'Element assessed separately',
    reasoning: 'Reasoning',
    limits: 'Limits',
    pick: 'Why these cases',
    pickText: 'The cases cover four fields and all three levels. They show tricky situations: a tool trained on the team’s own work, a single element within a series, a game that changes after release.',
  },
}

export default function Cases() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-6">
        <aside className="max-w-3xl border border-line rounded-lg bg-white/60 p-5" aria-labelledby="warn">
          <h2 id="warn" className="font-sans text-sm font-semibold uppercase tracking-wide text-muted">{t.warningTitle}</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 leading-6 text-[0.95rem]">
            {t.warning.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </aside>
        <p className="max-w-3xl mt-6 text-muted leading-7"><span className="font-medium text-ink">{t.pick}.</span> {t.pickText}</p>
      </div>

      {CASES.map((c) => (
        <article key={c.id} id={c.id} aria-labelledby={`c-${c.id}`} className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="border-t border-line pt-10 grid gap-6 lg:grid-cols-[15rem_1fr] lg:gap-12">
            <div>
              <h2 id={`c-${c.id}`} className="text-2xl font-semibold leading-tight">{c.title}</h2>
              <p className="mt-2 text-sm text-muted">{c.meta[lang]}</p>
            </div>
            <div className="min-w-0 max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="text-muted">{t.hypothesis}{t.colon}</span>
                <Badge level={c.level} lang={lang} size="md" />
                {c.range && <><span className="text-muted">{t.or}</span><Badge level={c.range} lang={lang} size="md" /></>}
                <span className="text-muted">{LEVELS[c.level].label[lang]}</span>
              </div>
              {c.part && (
                <p className="mt-2 text-sm flex items-center gap-2">
                  <span className="text-muted">{t.part} ({c.part[lang]}){t.colon}</span>
                  <Badge level={c.part.level} lang={lang} />
                </p>
              )}

              <h3 className="font-sans text-sm font-semibold mt-6 mb-2">{t.facts}</h3>
              <ul className="list-disc pl-5 space-y-1.5 leading-7">{c.facts[lang].map((f) => <li key={f}>{f}</li>)}</ul>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-sans text-sm font-semibold mb-1">{t.reasoning}</h3>
                  <p className="leading-7">{c.reasoning[lang]}</p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold mb-1">{t.limits}</h3>
                  <p className="leading-7 text-muted">{c.limits[lang]}</p>
                </div>
              </div>

              <Sources lang={lang} items={src(...c.sources)} />
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
