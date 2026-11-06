import { Link } from 'react-router-dom'
import { Note, PageHeader, Section, TableWrap } from '../components/Page.jsx'
import Badge from '../components/Badge.jsx'
import { LEVELS, STATUSES, useLang } from '../i18n.js'

// Repères qualitatifs pour la grille « quatre questions ».
const MARK = {
  human: { glyph: '●', fr: 'Surtout humain', en: 'Mostly human' },
  shared: { glyph: '◐', fr: 'Partagé', en: 'Shared' },
  gen: { glyph: '○', fr: 'Surtout génératif', en: 'Mostly generative' },
  na: { glyph: '·', fr: 'Peu concerné', en: 'Rarely relevant' },
}

const GRID = {
  minus: ['shared', 'gen', 'shared', 'human'],
  base: ['human', 'shared', 'human', 'human'],
  plus: ['human', 'human', 'na', 'human'],
}

const T = {
  fr: {
    eyebrow: 'Les niveaux',
    title: 'HC−, HC et HC+',
    lead: 'Chaque niveau résume la place des personnes dans la fabrication d’une œuvre. Aucun n’est meilleur qu’un autre.',
    detailTitle: 'Chaque niveau en détail',
    observed: 'Ce que l’on observe souvent',
    example: 'Exemple type',
    notMean: 'Ce que cela ne veut pas dire',
    levels: {
      minus: {
        observed: 'Une grande partie des images, textes, sons ou plans finaux sort d’un système génératif. Le travail humain porte surtout sur l’intention, le tri, l’assemblage et la validation.',
        example: 'Un court métrage d’animation dont les plans sont générés à partir d’instructions. La réalisatrice choisit les plans, les monte et dirige les voix.',
        notMean: 'Que l’œuvre est moins soignée, moins personnelle ou faite sans effort.',
      },
      base: {
        observed: 'Les personnes conçoivent une part importante de l’œuvre et transforment ce que produit l’IA. L’IA générative fournit aussi des éléments visibles dans le résultat final.',
        example: 'Un jeu dont les règles, les niveaux et le code sont conçus par l’équipe, mais dont beaucoup d’illustrations sont générées puis retouchées.',
        notMean: 'Un compromis tiède ou un niveau « moyen ».',
      },
      plus: {
        observed: 'L’écriture, la conception et la fabrication sont pour l’essentiel humaines. L’IA générative intervient peu, sur des éléments secondaires ou localisés.',
        example: 'Une bande dessinée dessinée à la main, dont quelques décors de fond ont été générés puis repeints.',
        notMean: 'Qu’aucun logiciel n’a été utilisé, ni que l’œuvre est de meilleure qualité.',
      },
    },
    gridTitle: 'Lire un niveau en quatre questions',
    gridAside: 'Profil typique. Une œuvre réelle peut s’en écarter sur une question sans changer de niveau.',
    questions: [
      'Qui prend les décisions créatives ?',
      'Qui produit les éléments conservés ?',
      'Qui transforme les sorties générées ?',
      'Qui sélectionne et valide ?',
    ],
    question: 'Question',
    gridNote: 'La validation finale reste humaine dans les trois cas : quelqu’un décide toujours de publier. C’est la production des éléments qui fait surtout la différence.',
    statusTitle: 'Le statut de la déclaration',
    statusAside: 'Un niveau s’affiche toujours avec son statut.',
    statuses: {
      declared: 'Le producteur ou l’auteur a rempli la déclaration. Personne d’autre ne l’a encore contrôlée.',
      verified: 'Un évaluateur indépendant a examiné la déclaration et les justificatifs.',
      unverified: 'Les informations manquent ou n’ont pas pu être confirmées. HC+ n’est jamais attribué par défaut.',
    },
    howVerify: 'Comment se passe la vérification',
    noNumbersTitle: 'Pourquoi pas de pourcentage',
    noNumbers: [
      'Un chiffre comme « 80 % humain » semble précis, mais il ne l’est pas. Faut-il compter les heures, les fichiers, les plans, les décisions ?',
      'Une décision de cinq minutes peut orienter tout un film. Des heures d’exécution peuvent peser peu sur le résultat.',
      'Les niveaux restent donc qualitatifs pour l’instant. Des seuils pourront être discutés après des tests sur des œuvres réelles.',
    ],
    badgeTitle: 'Le badge',
    badgeRules: [
      'Même couleur et même taille pour les trois niveaux.',
      'Toujours accompagné, sur la fiche, du libellé en toutes lettres et du statut.',
      'Le signe « − » est un vrai signe moins, plus lisible qu’un tiret. Les lecteurs d’écran annoncent « HC moins ».',
      'Pas d’icône de validation, de bouclier ou de médaille : cela ferait croire à une certification.',
    ],
    badgeNote: 'Proposition d’amélioration par rapport au document de travail : afficher systématiquement le libellé et le statut à côté du code, pour éviter que « + » soit lu comme « mieux ».',
  },
  en: {
    eyebrow: 'Levels',
    title: 'HC−, HC and HC+',
    lead: 'Each level summarises the role people played in making a work. None is better than another.',
    detailTitle: 'Each level in detail',
    observed: 'What you often see',
    example: 'Typical example',
    notMean: 'What it does not mean',
    levels: {
      minus: {
        observed: 'Much of the final imagery, text, sound or footage comes from a generative system. Human work focuses on intent, sorting, assembling and approval.',
        example: 'An animated short whose shots are generated from prompts. The director picks the shots, edits them and directs the voice actors.',
        notMean: 'That the work is less careful, less personal or made without effort.',
      },
      base: {
        observed: 'People design a large part of the work and reshape what the AI produces. Generative AI also supplies elements that remain visible in the final result.',
        example: 'A game whose rules, levels and code are designed by the team, while many illustrations are generated and then retouched.',
        notMean: 'A lukewarm compromise or an “average” level.',
      },
      plus: {
        observed: 'Writing, design and production are mostly human. Generative AI plays a small role, on secondary or localised elements.',
        example: 'A hand-drawn comic in which a few background scenes were generated and then repainted.',
        notMean: 'That no software was used, or that the work is of higher quality.',
      },
    },
    gridTitle: 'Reading a level through four questions',
    gridAside: 'Typical profile. A real work can differ on one question without changing level.',
    questions: [
      'Who makes the creative decisions?',
      'Who produces the elements that are kept?',
      'Who reworks generated outputs?',
      'Who selects and approves?',
    ],
    question: 'Question',
    gridNote: 'Final approval stays human at every level: someone always decides to publish. The main difference lies in who produces the elements.',
    statusTitle: 'Declaration status',
    statusAside: 'A level is always shown with its status.',
    statuses: {
      declared: 'The producer or author filled in the declaration. No one else has checked it yet.',
      verified: 'An independent reviewer has examined the declaration and the supporting records.',
      unverified: 'Information is missing or could not be confirmed. HC+ is never given by default.',
    },
    howVerify: 'How verification works',
    noNumbersTitle: 'Why there is no percentage',
    noNumbers: [
      'A figure like “80% human” looks precise, but it is not. Should we count hours, files, shots or decisions?',
      'A five-minute decision can shape a whole film. Hours of execution can weigh little on the result.',
      'So the levels stay qualitative for now. Thresholds can be discussed once the grid has been tested on real works.',
    ],
    badgeTitle: 'The badge',
    badgeRules: [
      'Same colour and size for all three levels.',
      'Always shown on the title page with the full label and the status.',
      'The “−” is a true minus sign, easier to read than a hyphen. Screen readers announce “HC minus”.',
      'No check mark, shield or medal: these would suggest a certification.',
    ],
    badgeNote: 'Suggested change from the working paper: always show the full label and status next to the code, so that “+” is not read as “better”.',
  },
}

export default function Levels() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section title={t.detailTitle}>
        <div className="space-y-10">
          {Object.keys(LEVELS).map((key) => (
            <article key={key} aria-labelledby={`lvl-${key}`}>
              <div className="flex items-center gap-3">
                <Badge level={key} lang={lang} size="lg" />
                <h3 id={`lvl-${key}`} className="text-xl font-semibold">{LEVELS[key].label[lang]}</h3>
              </div>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3 text-[0.95rem] leading-6">
                <div><dt className="text-muted text-sm mb-1">{t.observed}</dt><dd>{t.levels[key].observed}</dd></div>
                <div><dt className="text-muted text-sm mb-1">{t.example}</dt><dd>{t.levels[key].example}</dd></div>
                <div><dt className="text-muted text-sm mb-1">{t.notMean}</dt><dd>{t.levels[key].notMean}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t.gridTitle} aside={t.gridAside}>
        <TableWrap label={t.gridTitle}>
          <table className="table-hc min-w-[34rem]">
            <thead>
              <tr>
                <th scope="col">{t.question}</th>
                {Object.keys(LEVELS).map((k) => (
                  <th key={k} scope="col" className="text-center"><Badge level={k} lang={lang} /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.questions.map((q, i) => (
                <tr key={q}>
                  <th scope="row" className="!normal-case !tracking-normal !text-[0.95rem] !text-ink !font-normal !border-line">{q}</th>
                  {Object.keys(LEVELS).map((k) => {
                    const m = MARK[GRID[k][i]]
                    return (
                      <td key={k} className="text-center">
                        <span aria-hidden="true" className="block text-lg leading-none text-accent">{m.glyph}</span>
                        <span className="text-xs text-muted">{m[lang]}</span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        <p className="mt-5 leading-7">{t.gridNote}</p>
      </Section>

      <Section title={t.statusTitle} aside={t.statusAside}>
        <dl className="space-y-4 leading-7">
          {Object.keys(STATUSES).map((s) => (
            <div key={s}>
              <dt className="font-medium">{STATUSES[s][lang]}</dt>
              <dd className="text-muted">{t.statuses[s]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5"><Link to={`/${lang}/verification`} className="link">{t.howVerify}</Link></p>
      </Section>

      <Section title={t.noNumbersTitle}>
        <div className="space-y-3 leading-7">{t.noNumbers.map((p) => <p key={p}>{p}</p>)}</div>
      </Section>

      <Section title={t.badgeTitle}>
        <div className="flex flex-wrap items-center gap-6 mb-6" aria-hidden="true">
          <span className="flex gap-2"><Badge level="minus" lang={lang} /><Badge level="base" lang={lang} /><Badge level="plus" lang={lang} /></span>
          <span className="flex gap-2 bg-ink rounded px-3 py-2"><Badge level="minus" lang={lang} tone="dark" /><Badge level="base" lang={lang} tone="dark" /><Badge level="plus" lang={lang} tone="dark" /></span>
        </div>
        <ul className="list-disc pl-5 space-y-2 leading-7">{t.badgeRules.map((r) => <li key={r}>{r}</li>)}</ul>
        <div className="mt-6"><Note>{t.badgeNote}</Note></div>
      </Section>
    </>
  )
}
