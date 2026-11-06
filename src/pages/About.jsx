import { PageHeader, Section } from '../components/Page.jsx'
import { PDF_URL, REPO_URL, useLang } from '../i18n.js'

const T = {
  fr: {
    eyebrow: 'À propos',
    title: 'Un projet ouvert, à construire ensemble',
    lead: 'HC est né d’une question simple : comment savoir ce qui a été fait par des personnes dans une œuvre, sans opposer l’humain et la technologie ?',
    originTitle: 'D’où vient le projet',
    origin: [
      'HC a été lancé par une personne passionnée d’histoire, de récits, de sciences et de technologie. Elle n’a pas d’expérience professionnelle dans les industries créatives et ne prétend pas avoir la légitimité de définir seule un tel cadre.',
      'Cette proposition est publiée comme une bouteille à la mer. Elle pourra être critiquée, reprise, transformée, ou remplacée par une meilleure idée.',
    ],
    notTitle: 'Ce que HC n’est pas',
    not: [
      'Une norme officielle ou une certification reconnue.',
      'Un mouvement contre l’IA ou contre les studios.',
      'Un classement de la qualité des œuvres.',
      'Une obligation pour qui que ce soit.',
    ],
    testTitle: 'Prochaine étape : tester',
    test: [
      'Réunir 8 à 15 personnes de profils variés : animation, jeu vidéo, bande dessinée, indépendants, production, recherche, droit, public.',
      'Appliquer la grille à 10 à 20 œuvres aux méthodes différentes.',
      'Faire classer les mêmes œuvres par plusieurs personnes et mesurer leurs désaccords.',
      'Revoir les définitions avant toute idée de seuil ou de certification.',
    ],
    helpTitle: 'Comment participer',
    help: [
      ['Critiquer', 'une définition, un niveau ou une étude de cas. Les critiques comptent autant que le soutien.'],
      ['Décrire', 'le pipeline réel de votre métier, surtout s’il diffère de ceux présentés ici.'],
      ['Signaler', 'une source erronée, un lien cassé ou une traduction maladroite.'],
      ['Proposer', 'une autre approche, même très différente.'],
    ],
    howTo: 'Les échanges se font sur GitHub : ouvrez une Issue pour discuter, ou une Pull Request pour proposer une modification.',
    issues: 'Ouvrir une discussion (Issue)',
    repo: 'Voir le dépôt',
    pdf: 'Document de travail v0.1 (PDF)',
    siteTitle: 'À propos de ce site',
    site: 'Site statique, sans cookie ni mesure d’audience. Le seul réglage enregistré dans votre navigateur est la langue choisie.',
  },
  en: {
    eyebrow: 'About',
    title: 'An open project, to be built together',
    lead: 'HC started with a simple question: how can we know what people made in a work, without setting humans against technology?',
    originTitle: 'Where the project comes from',
    origin: [
      'HC was started by someone with a passion for history, storytelling, science and technology. They have no professional background in the creative industries and do not claim the standing to define such a framework alone.',
      'This proposal is published as a message in a bottle. It can be criticised, reused, reshaped, or replaced by a better idea.',
    ],
    notTitle: 'What HC is not',
    not: [
      'An official standard or a recognised certification.',
      'A movement against AI or against studios.',
      'A ranking of how good works are.',
      'An obligation for anyone.',
    ],
    testTitle: 'Next step: testing',
    test: [
      'Bring together 8 to 15 people with varied backgrounds: animation, games, comics, independents, production, research, law, audiences.',
      'Apply the grid to 10 to 20 works made in different ways.',
      'Have several people classify the same works and measure where they disagree.',
      'Revise the definitions before any talk of thresholds or certification.',
    ],
    helpTitle: 'How to take part',
    help: [
      ['Criticise', 'a definition, a level or a case study. Criticism matters as much as support.'],
      ['Describe', 'the real pipeline in your field, especially if it differs from the ones shown here.'],
      ['Report', 'a wrong source, a broken link or a clumsy translation.'],
      ['Suggest', 'another approach, even a very different one.'],
    ],
    howTo: 'Discussion happens on GitHub: open an Issue to discuss, or a Pull Request to suggest a change.',
    issues: 'Start a discussion (Issue)',
    repo: 'View the repository',
    pdf: 'Working paper v0.1 (PDF, in French)',
    siteTitle: 'About this site',
    site: 'A static site with no cookies or analytics. The only setting stored in your browser is your language.',
  },
}

export default function About() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section title={t.originTitle}>
        <div className="space-y-3 leading-7">{t.origin.map((p) => <p key={p}>{p}</p>)}</div>
      </Section>

      <Section title={t.notTitle}>
        <ul className="list-disc pl-5 space-y-1.5 leading-7">{t.not.map((s) => <li key={s}>{s}</li>)}</ul>
      </Section>

      <Section title={t.testTitle}>
        <ol className="list-decimal pl-5 space-y-2 leading-7">{t.test.map((s) => <li key={s}>{s}</li>)}</ol>
      </Section>

      <Section title={t.helpTitle}>
        <ul className="space-y-3 leading-7">
          {t.help.map(([a, b]) => <li key={a}><span className="font-medium">{a}</span> <span className="text-muted">{b}</span></li>)}
        </ul>
        <p className="mt-6 leading-7">{t.howTo}</p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a href={`${REPO_URL}/issues`} className="link">{t.issues}</a>
          <a href={REPO_URL} className="link">{t.repo}</a>
          <a href={PDF_URL} className="link">{t.pdf}</a>
        </p>
      </Section>

      <Section title={t.siteTitle}>
        <p className="leading-7 text-muted">{t.site}</p>
      </Section>
    </>
  )
}
