import { Link } from 'react-router-dom'
import { PageHeader, Section } from '../components/Page.jsx'
import Badge from '../components/Badge.jsx'
import { LEVELS, PDF_URL, REPO_URL, useLang } from '../i18n.js'

const T = {
  fr: {
    title: 'Savoir quelle place l’humain a prise dans une œuvre',
    lead: 'HC est une proposition ouverte. Elle permet d’indiquer, pour un film, un jeu, un livre ou une bande dessinée, ce qui a été créé par des personnes et ce qui a été produit par l’IA générative.',
    ctaLevels: 'Découvrir les trois niveaux',
    ctaDemo: 'Voir la démo streaming',
    levelsTitle: 'Trois niveaux',
    levelsAside: 'Ils décrivent une manière de travailler, pas la valeur du résultat.',
    levels: {
      minus: 'L’IA générative produit une grande part des éléments finaux. Les personnes choisissent, assemblent et valident.',
      base: 'Les personnes et l’IA générative contribuent toutes deux de façon importante aux éléments finaux.',
      plus: 'Les choix et le travail humains forment l’essentiel de l’œuvre. L’IA générative reste limitée ou ponctuelle.',
    },
    saysTitle: 'Ce que HC indique',
    says: [
      'Qui a pris les décisions créatives.',
      'Qui a fabriqué les éléments que l’on voit, lit ou entend.',
      'Si la déclaration a été vérifiée par quelqu’un d’indépendant.',
    ],
    notTitle: 'Ce que HC n’indique pas',
    nots: [
      'Si l’œuvre est bonne, belle ou originale.',
      'Si l’IA a été utilisée légalement ou de façon éthique.',
      'Ce que vous devriez regarder, lire ou acheter.',
    ],
    exampleTitle: 'Sur une fiche',
    exampleAside: 'Exemple fictif. Le badge reste petit et de la même couleur pour tous les niveaux.',
    exampleWork: 'Le Phare des marées',
    exampleMeta: 'Film d’animation · 2026 · 1 h 32',
    exampleLine: 'Contribution humaine dominante. Scénario, dessin et animation réalisés par l’équipe. L’IA générative a servi à produire des textures de fond, retouchées ensuite.',
    exampleStatus: 'Déclaré par le studio, non vérifié.',
    whoTitle: 'À qui HC s’adresse',
    who: [
      ['Au public', 'pour comprendre comment une œuvre a été faite, en une ligne.'],
      ['Aux créateurs et studios', 'pour décrire leur méthode avec des mots communs, quelle qu’elle soit.'],
      ['Aux plateformes et éditeurs', 'pour afficher une information claire sans la transformer en argument de vente.'],
      ['Aux chercheurs', 'pour tester, critiquer et améliorer la grille.'],
    ],
    statusTitle: 'Où en est le projet',
    status: [
      'HC est une proposition exploratoire. Les acteurs du secteur sont libres de la discuter, de la critiquer, de la reprendre ou de s’en servir comme point de départ pour d’autres initiatives.',
      'Ce n’est ni une norme, ni un label officiel, ni une certification.',
      'Les définitions doivent encore être testées sur des œuvres réelles, avec des professionnels de plusieurs métiers.',
    ],
    pdf: 'Lire la présentation de HC (PDF)',
    contribute: 'Participer sur GitHub',
  },
  en: {
    title: 'Knowing how much of a work was made by people',
    lead: 'HC is an open proposal. It gives films, games, books and comics a simple way to show what was created by people and what was produced by generative AI.',
    ctaLevels: 'See the three levels',
    ctaDemo: 'Try the streaming demo',
    levelsTitle: 'Three levels',
    levelsAside: 'They describe a way of working, not the value of the result.',
    levels: {
      minus: 'Generative AI produces a large share of the final elements. People choose, assemble and approve.',
      base: 'People and generative AI both make a significant contribution to the final elements.',
      plus: 'Human choices and work make up most of the work. Generative AI plays a limited or occasional role.',
    },
    saysTitle: 'What HC tells you',
    says: [
      'Who made the creative decisions.',
      'Who made the elements you see, read or hear.',
      'Whether someone independent has checked the declaration.',
    ],
    notTitle: 'What HC does not tell you',
    nots: [
      'Whether the work is good, beautiful or original.',
      'Whether AI was used legally or ethically.',
      'What you should watch, read or buy.',
    ],
    exampleTitle: 'On a title page',
    exampleAside: 'Fictional example. The badge stays small and uses the same colour for every level.',
    exampleWork: 'The Tide Lighthouse',
    exampleMeta: 'Animated film · 2026 · 1 h 32',
    exampleLine: 'Predominant human contribution. Script, drawing and animation by the team. Generative AI was used for background textures, which were then reworked.',
    exampleStatus: 'Declared by the studio, not verified.',
    whoTitle: 'Who HC is for',
    who: [
      ['Audiences', 'to understand how a work was made, in one line.'],
      ['Creators and studios', 'to describe their method in shared terms, whatever it is.'],
      ['Platforms and publishers', 'to show clear information without turning it into a sales pitch.'],
      ['Researchers', 'to test, criticise and improve the framework.'],
    ],
    statusTitle: 'Where the project stands',
    status: [
      'HC is an exploratory proposal. People in the creative industries are free to discuss it, criticise it, reuse it or use it as a starting point for other initiatives.',
      'It is not a standard, an official label or a certification.',
      'The definitions still need to be tested on real works, with professionals from several fields.',
    ],
    pdf: 'Read the HC presentation (PDF, in French)',
    contribute: 'Contribute on GitHub',
  },
}

export default function Home() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-4 pb-6 flex flex-wrap gap-3">
        <Link to={`/${lang}/levels`} className="bg-ink text-paper rounded px-4 py-2.5 text-[0.95rem] no-underline hover:bg-ink/85">
          {t.ctaLevels}
        </Link>
        <Link to={`/${lang}/demo`} className="border border-ink/30 rounded px-4 py-2.5 text-[0.95rem] no-underline hover:border-ink">
          {t.ctaDemo}
        </Link>
      </div>

      <Section title={t.levelsTitle} aside={t.levelsAside}>
        <dl className="divide-y divide-line">
          {Object.keys(LEVELS).map((key) => (
            <div key={key} className="py-4 first:pt-0 grid gap-2 sm:grid-cols-[5rem_1fr]">
              <dt><Badge level={key} lang={lang} size="md" /></dt>
              <dd>
                <p className="font-medium">{LEVELS[key].label[lang]}</p>
                <p className="text-muted leading-7">{t.levels[key]}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title={t.saysTitle}>
        <div className="grid gap-8 sm:grid-cols-2">
          <ul className="space-y-2 leading-7">
            {t.says.map((s) => <li key={s} className="flex gap-3"><span aria-hidden="true" className="text-accent">✓</span>{s}</li>)}
          </ul>
          <div>
            <h3 className="font-sans text-sm font-semibold text-muted mb-2">{t.notTitle}</h3>
            <ul className="space-y-2 leading-7 text-muted">
              {t.nots.map((s) => <li key={s} className="flex gap-3"><span aria-hidden="true">×</span>{s}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t.exampleTitle} aside={t.exampleAside}>
        <figure className="border border-line rounded-lg bg-white/60 p-5 sm:p-6 max-w-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-serif text-xl font-semibold">{t.exampleWork}</p>
              <p className="text-sm text-muted mt-1">{t.exampleMeta}</p>
            </div>
            <Badge level="plus" status="declared" lang={lang} />
          </div>
          <p className="mt-4 leading-7">{t.exampleLine}</p>
          <p className="mt-2 text-sm text-muted">{t.exampleStatus}</p>
        </figure>
      </Section>

      <Section title={t.whoTitle}>
        <ul className="space-y-3 leading-7">
          {t.who.map(([who, why]) => (
            <li key={who}><span className="font-medium">{who}</span> <span className="text-muted">{why}</span></li>
          ))}
        </ul>
      </Section>

      <Section title={t.statusTitle}>
        <div className="space-y-3 leading-7">
          {t.status.map((p) => <p key={p}>{p}</p>)}
        </div>
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <a href={PDF_URL} className="link">{t.pdf}</a>
          <a href={REPO_URL} className="link">{t.contribute}</a>
        </p>
      </Section>
    </>
  )
}
