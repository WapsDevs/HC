import { Note, PageHeader, Section, TableWrap } from '../components/Page.jsx'
import Sources from '../components/Sources.jsx'
import { src } from '../content/sources.js'
import { useLang } from '../i18n.js'

const T = {
  fr: {
    eyebrow: 'Méthode',
    title: 'Comment on évalue une œuvre',
    lead: 'HC regarde les étapes réelles de fabrication et pose les mêmes questions à chacune. Le niveau final se justifie par écrit.',
    principlesTitle: 'Principes',
    principles: [
      ['Neutre sur les méthodes.', 'Aucune façon de créer n’est présentée comme supérieure.'],
      ['Séparé de la qualité.', 'Le niveau ne dit rien du talent ni de l’intérêt de l’œuvre.'],
      ['Fondé sur le pipeline réel.', 'On décrit les étapes que l’équipe a vraiment suivies, pas un modèle imposé.'],
      ['Centré sur l’IA générative.', 'Les outils informatiques classiques ne changent pas le niveau.'],
      ['Prudent.', 'Sans preuve suffisante, on affiche « non vérifié » plutôt qu’un niveau flatteur.'],
      ['Ouvert à la critique.', 'Les règles sont publiques et peuvent évoluer.'],
    ],
    scopeTitle: 'D’abord, définir le périmètre',
    scope: [
      'On évalue une œuvre précise : un film, une saison, un jeu dans une version donnée, un album, un livre.',
      'Une franchise ou une série de jeux ne reçoit pas un niveau unique. Une mise à jour majeure peut changer le niveau.',
      'Les contenus tiers sont signalés : musique sous licence, banque d’images, assets achetés, sous-traitance.',
    ],
    toolsTitle: 'Ce qui compte, ce qui ne compte pas',
    toolsAside: 'C’est la fonction de l’outil qui compte, pas son nom commercial.',
    counts: 'Pris en compte',
    countsList: [
      'Texte, image, vidéo, voix, musique ou modèle 3D générés et conservés dans l’œuvre',
      'Code généré qui définit des mécaniques ou des contenus du produit',
      'Réécriture ou transformation générative d’un élément créatif',
      'Contenu généré pendant l’utilisation (dialogues, images produits en direct)',
    ],
    notCounts: 'Pas pris en compte par défaut',
    notCountsList: [
      'Montage, rendu, étalonnage, mixage',
      'Retouche déterministe, débruitage, mise à l’échelle technique',
      'Capture de mouvement, interpolation classique',
      'Automatisation de tâches, correcteur orthographique, gestion de production',
    ],
    toolsNote: 'Cas limite : un outil d’apprentissage automatique entraîné sur le travail de l’équipe pour l’assister (par exemple prédire des traits). Il se déclare, et l’évaluation porte sur ce qu’il produit réellement.',
    gridTitle: 'Quatre questions par étape',
    gridAside: 'Les mêmes pour tous les secteurs.',
    questions: [
      ['Décider', 'Qui choisit l’intention, la direction, ce qui est gardé ou rejeté ?'],
      ['Produire', 'Qui fabrique les éléments présents dans l’œuvre finale ?'],
      ['Transformer', 'Les sorties générées sont-elles reprises en profondeur, ou gardées telles quelles ?'],
      ['Valider', 'Qui assume la sélection et l’approbation finale ?'],
    ],
    stepsTitle: 'Du détail au niveau',
    steps: [
      'Lister les étapes réellement utilisées. La page Secteurs propose des points de départ.',
      'Pour chaque étape, répondre aux quatre questions : surtout humain, partagé, surtout génératif.',
      'Repérer les étapes qui pèsent le plus dans ce que le public perçoit de l’œuvre.',
      'Proposer un niveau et le justifier en deux ou trois phrases.',
      'En cas de doute, ne pas attribuer HC+. Indiquer « non vérifié ».',
    ],
    stepsNote: 'L’étape 3 est une hypothèse à tester. Le poids d’une étape varie selon les œuvres : la voix compte beaucoup dans un podcast, moins dans un jeu de stratégie.',
    sheetTitle: 'Exemple de fiche',
    sheetAside: 'Œuvre fictive, pour illustrer le format.',
    sheetCols: ['Étape', 'Décider', 'Produire', 'Transformer', 'Valider'],
    sheetRows: [
      ['Scénario', 'Humain', 'Humain', '—', 'Humain'],
      ['Storyboard', 'Humain', 'Partagé', 'Humain', 'Humain'],
      ['Décors', 'Humain', 'Génératif', 'Humain', 'Humain'],
      ['Personnages', 'Humain', 'Humain', '—', 'Humain'],
      ['Animation', 'Humain', 'Humain', '—', 'Humain'],
      ['Musique', 'Humain', 'Humain', '—', 'Humain'],
    ],
    sheetVerdict: 'Niveau proposé : HC+. Les décors de fond sont générés puis repeints ; le reste de l’œuvre est conçu et fabriqué par l’équipe.',
    assistTitle: 'Génération ou assistance ?',
    assist: [
      'Une image générée et gardée telle quelle n’a pas le même rôle qu’un outil qui nettoie une ligne.',
      'Une sortie générée puis entièrement redessinée s’évalue sur le résultat final et sur le travail de reprise. Elle n’est ni « 100 % IA » ni « 100 % humaine » d’office.',
      'Une voix de synthèse sous licence, produite à partir d’un comédien qui a donné son accord, reste un contenu génératif. Le consentement se signale à part : HC ne mesure pas l’éthique.',
    ],
    openTitle: 'Questions encore ouvertes',
    open: [
      'Comment traiter les assets achetés, les bibliothèques et les contenus réutilisés ?',
      'Comment comparer des secteurs dont les pipelines n’ont rien à voir ?',
      'Quel niveau de preuve demander à un auteur seul, sans alourdir son travail ?',
      'Comment déclarer un jeu en ligne dont le contenu change chaque saison ?',
      'Faut-il un repère distinct pour le contenu généré en direct, pendant l’utilisation ?',
    ],
    proposalsTitle: 'Pistes pour la version suivante',
    proposalsAside: 'Propositions argumentées, à discuter.',
    proposals: [
      ['Publier le profil par étape.', 'Un seul code résume trop. La fiche détaillée montre les quatre questions pour chaque étape, comme ci-dessus.'],
      ['Toujours afficher libellé et statut.', 'Évite que « + » soit compris comme « mieux » et que « déclaré » soit pris pour « vérifié ».'],
      ['Dater et versionner.', 'Un jeu ou une série évolue. Chaque déclaration indique la version évaluée.'],
      ['Distinguer le contenu généré en direct.', 'Les plateformes de jeu le traitent déjà à part. HC pourrait le signaler par une mention, sans changer de niveau.'],
    ],
  },
  en: {
    eyebrow: 'Method',
    title: 'How a work is assessed',
    lead: 'HC looks at the real production stages and asks each one the same questions. The final level is justified in writing.',
    principlesTitle: 'Principles',
    principles: [
      ['Neutral about methods.', 'No way of creating is presented as superior.'],
      ['Separate from quality.', 'The level says nothing about talent or interest.'],
      ['Based on the real pipeline.', 'We describe the stages the team actually followed, not an imposed model.'],
      ['Focused on generative AI.', 'Conventional software does not change the level.'],
      ['Cautious.', 'Without enough evidence, the work shows “not verified” rather than a flattering level.'],
      ['Open to criticism.', 'The rules are public and can change.'],
    ],
    scopeTitle: 'First, define the scope',
    scope: [
      'Assess one specific work: a film, a season, a game in a given version, an album, a book.',
      'A franchise or a game series does not get a single level. A major update can change the level.',
      'Third-party content is listed: licensed music, stock images, purchased assets, subcontracted work.',
    ],
    toolsTitle: 'What counts and what does not',
    toolsAside: 'What matters is what the tool does, not what it is called.',
    counts: 'Taken into account',
    countsList: [
      'Generated text, images, video, voice, music or 3D models kept in the work',
      'Generated code that defines game mechanics or content',
      'Generative rewriting or transformation of a creative element',
      'Content generated during use (live dialogue or images)',
    ],
    notCounts: 'Not counted by default',
    notCountsList: [
      'Editing, rendering, colour grading, mixing',
      'Deterministic retouching, denoising, technical upscaling',
      'Motion capture, conventional interpolation',
      'Task automation, spell-checking, production tracking',
    ],
    toolsNote: 'Edge case: a machine-learning tool trained on the team’s own work to assist them (for example, predicting line work). It is declared, and the assessment looks at what it actually produces.',
    gridTitle: 'Four questions per stage',
    gridAside: 'The same for every field.',
    questions: [
      ['Decide', 'Who chooses the intent, the direction, what is kept or rejected?'],
      ['Produce', 'Who makes the elements present in the final work?'],
      ['Rework', 'Are generated outputs substantially reworked, or kept as they are?'],
      ['Approve', 'Who takes responsibility for selection and final approval?'],
    ],
    stepsTitle: 'From detail to level',
    steps: [
      'List the stages actually used. The Sectors page offers starting points.',
      'For each stage, answer the four questions: mostly human, shared, mostly generative.',
      'Identify the stages that weigh most in how audiences experience the work.',
      'Propose a level and justify it in two or three sentences.',
      'If in doubt, do not give HC+. Show “not verified”.',
    ],
    stepsNote: 'Step 3 is a hypothesis to be tested. The weight of a stage varies: voice matters a lot in a podcast, less in a strategy game.',
    sheetTitle: 'Sample sheet',
    sheetAside: 'Fictional work, to show the format.',
    sheetCols: ['Stage', 'Decide', 'Produce', 'Rework', 'Approve'],
    sheetRows: [
      ['Script', 'Human', 'Human', '—', 'Human'],
      ['Storyboard', 'Human', 'Shared', 'Human', 'Human'],
      ['Backgrounds', 'Human', 'Generative', 'Human', 'Human'],
      ['Characters', 'Human', 'Human', '—', 'Human'],
      ['Animation', 'Human', 'Human', '—', 'Human'],
      ['Music', 'Human', 'Human', '—', 'Human'],
    ],
    sheetVerdict: 'Proposed level: HC+. Background scenes are generated and then repainted; the rest of the work is designed and made by the team.',
    assistTitle: 'Generation or assistance?',
    assist: [
      'An image generated and kept as is does not play the same role as a tool that cleans up a line.',
      'A generated output that is fully redrawn is judged on the final result and the rework. It is not automatically “100% AI” or “100% human”.',
      'A licensed synthetic voice, made from an actor who agreed to it, is still generative content. Consent is noted separately: HC does not measure ethics.',
    ],
    openTitle: 'Open questions',
    open: [
      'How should purchased assets, libraries and reused content be handled?',
      'How can fields with very different pipelines be compared?',
      'How much evidence can be asked of a solo author without adding a heavy burden?',
      'How should an online game whose content changes every season be declared?',
      'Should content generated live, during use, get its own mention?',
    ],
    proposalsTitle: 'Ideas for the next version',
    proposalsAside: 'Reasoned proposals, open for discussion.',
    proposals: [
      ['Publish the stage profile.', 'A single code says too little. The detailed sheet shows the four questions for each stage, as above.'],
      ['Always show label and status.', 'Stops “+” being read as “better” and “declared” being taken for “verified”.'],
      ['Date and version declarations.', 'Games and series change. Each declaration states the version assessed.'],
      ['Flag live-generated content.', 'Game stores already treat it separately. HC could add a note without changing the level.'],
    ],
  },
}

export default function Method() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section title={t.principlesTitle}>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 leading-7">
          {t.principles.map(([a, b]) => <li key={a}><span className="font-medium">{a}</span> <span className="text-muted">{b}</span></li>)}
        </ul>
      </Section>

      <Section title={t.scopeTitle}>
        <ul className="list-disc pl-5 space-y-2 leading-7">{t.scope.map((s) => <li key={s}>{s}</li>)}</ul>
      </Section>

      <Section title={t.toolsTitle} aside={t.toolsAside}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-sans text-sm font-semibold mb-2">{t.counts}</h3>
            <ul className="list-disc pl-5 space-y-1.5 leading-6 text-[0.95rem]">{t.countsList.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold mb-2 text-muted">{t.notCounts}</h3>
            <ul className="list-disc pl-5 space-y-1.5 leading-6 text-[0.95rem] text-muted">{t.notCountsList.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <div className="mt-6"><Note>{t.toolsNote}</Note></div>
      </Section>

      <Section title={t.gridTitle} aside={t.gridAside}>
        <dl className="grid gap-4 sm:grid-cols-2">
          {t.questions.map(([q, d], i) => (
            <div key={q} className="flex gap-3">
              <span className="font-serif text-accent text-lg leading-6 w-5 shrink-0">{String.fromCharCode(97 + i)}</span>
              <div><dt className="font-medium">{q}</dt><dd className="text-muted leading-6">{d}</dd></div>
            </div>
          ))}
        </dl>
      </Section>

      <Section title={t.stepsTitle}>
        <ol className="list-decimal pl-5 space-y-2 leading-7">{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        <div className="mt-6"><Note>{t.stepsNote}</Note></div>
      </Section>

      <Section title={t.sheetTitle} aside={t.sheetAside}>
        <TableWrap label={t.sheetTitle}>
          <table className="table-hc min-w-[32rem]">
            <thead><tr>{t.sheetCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {t.sheetRows.map((r) => (
                <tr key={r[0]}>
                  <td className="font-medium">{r[0]}</td>
                  {r.slice(1).map((c, i) => <td key={i} className={c === 'Humain' || c === 'Human' ? '' : 'text-accent font-medium'}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        <p className="mt-5 leading-7">{t.sheetVerdict}</p>
      </Section>

      <Section title={t.assistTitle}>
        <div className="space-y-3 leading-7">{t.assist.map((p) => <p key={p}>{p}</p>)}</div>
      </Section>

      <Section title={t.openTitle}>
        <ul className="list-disc pl-5 space-y-2 leading-7">{t.open.map((s) => <li key={s}>{s}</li>)}</ul>
      </Section>

      <Section title={t.proposalsTitle} aside={t.proposalsAside}>
        <ul className="space-y-3 leading-7">
          {t.proposals.map(([a, b]) => <li key={a}><span className="font-medium">{a}</span> <span className="text-muted">{b}</span></li>)}
        </ul>
        <Sources lang={lang} items={src('steam', 'usco')} />
      </Section>
    </>
  )
}
