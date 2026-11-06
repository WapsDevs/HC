import { Note, PageHeader, Section, TableWrap } from '../components/Page.jsx'
import Sources from '../components/Sources.jsx'
import { src } from '../content/sources.js'
import { useLang } from '../i18n.js'

const T = {
  fr: {
    eyebrow: 'Vérification',
    title: 'Déclarer, documenter, contrôler',
    lead: 'Un badge n’a de valeur que si l’on peut vérifier ce qu’il affirme. HC distingue donc ce qui est déclaré de ce qui est contrôlé.',
    stepsTitle: 'Les cinq étapes',
    steps: [
      ['Déclaration', 'Le producteur ou l’auteur remplit une fiche, étape par étape.'],
      ['Justificatifs', 'Il garde des traces proportionnées : versions de travail, suivi de production, exemples de sorties, validations.'],
      ['Contrôle', 'Un évaluateur indépendant vérifie la cohérence. Les contrôles approfondis dépendent de la taille du projet et du risque.'],
      ['Publication', 'Le public voit le niveau et le statut. La fiche détaillée reste accessible par un lien ou un QR code.'],
      ['Recours', 'Toute personne peut contester. Le niveau peut être corrigé ou retiré en cas de fausse déclaration.'],
    ],
    sheetTitle: 'Ce que contient une déclaration',
    sheetCols: ['Champ', 'Contenu'],
    sheet: [
      ['Œuvre et version', 'Titre, date, version ou saison évaluée'],
      ['Périmètre', 'Ce qui est inclus, contenus tiers, sous-traitance'],
      ['Étapes', 'Les étapes réellement suivies'],
      ['Usages génératifs', 'Pour chaque étape : type d’outil, fonction, ce qui a été produit, ce qui est resté dans l’œuvre'],
      ['Interventions humaines', 'Décisions, fabrication, reprise des sorties, validation'],
      ['Niveau proposé', 'HC−, HC ou HC+, avec deux ou trois phrases de justification'],
      ['Déclarant', 'Qui signe la déclaration, et à quelle date'],
    ],
    sheetNote: 'Pas besoin de publier ses secrets de fabrication, ses prompts ou des données personnelles. Un registre confidentiel peut être montré au seul évaluateur.',
    proofTitle: 'Une preuve proportionnée',
    proof: [
      ['Auteur seul', 'Fichiers de travail datés, quelques captures d’étapes, liste des outils utilisés.'],
      ['Petite équipe', 'Suivi de production existant, échanges de validation, journal des outils génératifs.'],
      ['Grand studio', 'Registre par département, contrats des prestataires, contrôle par échantillon.'],
    ],
    proofNote: 'Il s’agit de pistes. Le niveau de preuve exigible reste à définir avec les personnes concernées.',
    govTitle: 'Qui vérifie',
    gov: [
      'Personne ne devrait certifier ses propres œuvres. Le porteur de l’idée ne devrait pas non plus fixer seul les règles pour les autres.',
      'À terme, HC devrait être porté par une structure indépendante. Elle réunirait créateurs, studios, producteurs, plateformes, chercheurs, public et spécialistes de l’audit.',
      'Critères, conflits d’intérêts, procédures d’appel et changements de version devraient être publics.',
    ],
    govNote: 'Cette structure n’existe pas aujourd’hui. Aucune déclaration n’est actuellement vérifiée selon HC.',
    contextTitle: 'Ce qui existe déjà',
    contextAside: 'HC ne remplace aucun de ces dispositifs.',
    context: [
      ['Règlement européen sur l’IA, article 50', 'Impose de signaler certains contenus générés ou manipulés, comme les hypertrucages. Il porte sur des contenus précis, pas sur la contribution humaine à l’œuvre entière.'],
      ['C2PA et vocabulaire IPTC', 'Standards techniques qui attachent à un fichier son historique de création, y compris l’usage d’IA générative. HC pourrait s’appuyer sur ces données.'],
      ['Déclarations sur Steam', 'Les développeurs déclarent les contenus générés par IA présents dans le jeu, et ceux générés pendant la partie.'],
      ['Règles des Oscars', 'Pour les films de 2026, les prix d’interprétation et de scénario exigent un travail humain. L’usage d’outils d’IA reste possible ailleurs.'],
      ['Copyright Office américain', 'Rappelle que le droit d’auteur suppose une création humaine et s’évalue au cas par cas.'],
    ],
    contextNote: 'HC a un objet différent : décrire au public, en une ligne, la place des personnes dans toute l’œuvre.',
  },
  en: {
    eyebrow: 'Verification',
    title: 'Declare, document, check',
    lead: 'A badge is only worth something if what it claims can be checked. HC therefore separates what is declared from what is verified.',
    stepsTitle: 'The five steps',
    steps: [
      ['Declaration', 'The producer or author fills in a sheet, stage by stage.'],
      ['Records', 'They keep proportionate records: working versions, production tracking, sample outputs, approvals.'],
      ['Review', 'An independent reviewer checks consistency. In-depth checks depend on project size and risk.'],
      ['Publication', 'The public sees the level and the status. The detailed sheet stays available through a link or QR code.'],
      ['Appeal', 'Anyone can challenge a level. It can be corrected or withdrawn in case of a false declaration.'],
    ],
    sheetTitle: 'What a declaration contains',
    sheetCols: ['Field', 'Content'],
    sheet: [
      ['Work and version', 'Title, date, version or season assessed'],
      ['Scope', 'What is included, third-party content, subcontracting'],
      ['Stages', 'The stages actually followed'],
      ['Generative uses', 'For each stage: type of tool, purpose, what it produced, what stayed in the work'],
      ['Human input', 'Decisions, making, reworking outputs, approval'],
      ['Proposed level', 'HC−, HC or HC+, with two or three sentences of justification'],
      ['Declarant', 'Who signs the declaration, and when'],
    ],
    sheetNote: 'There is no need to publish trade secrets, prompts or personal data. A confidential log can be shown to the reviewer only.',
    proofTitle: 'Proportionate evidence',
    proof: [
      ['Solo author', 'Dated working files, a few screenshots of stages, a list of tools used.'],
      ['Small team', 'Existing production tracking, approval threads, a log of generative tools.'],
      ['Large studio', 'Department-level logs, vendor contracts, sample-based review.'],
    ],
    proofNote: 'These are suggestions. The level of evidence required still needs to be defined with the people concerned.',
    govTitle: 'Who verifies',
    gov: [
      'No one should certify their own works. Whoever proposes the idea should not set the rules for others alone either.',
      'In the long run HC should be run by an independent body, bringing together creators, studios, producers, platforms, researchers, the public and audit specialists.',
      'Criteria, conflicts of interest, appeal procedures and version changes should be public.',
    ],
    govNote: 'This body does not exist today. No declaration is currently verified under HC.',
    contextTitle: 'What already exists',
    contextAside: 'HC replaces none of these.',
    context: [
      ['EU AI Act, Article 50', 'Requires certain generated or manipulated content, such as deepfakes, to be disclosed. It covers specific content, not human contribution to a whole work.'],
      ['C2PA and the IPTC vocabulary', 'Technical standards that attach a creation history to a file, including generative AI use. HC could build on this data.'],
      ['Steam disclosures', 'Developers disclose AI-generated content in the game, and content generated during play.'],
      ['Academy Awards rules', 'For 2026 films, acting and writing awards require human work. AI tools may still be used elsewhere.'],
      ['US Copyright Office', 'Restates that copyright requires human authorship, assessed case by case.'],
    ],
    contextNote: 'HC has a different purpose: telling audiences, in one line, how much of the whole work was made by people.',
  },
}

export default function Verification() {
  const lang = useLang()
  const t = T[lang]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section title={t.stepsTitle}>
        <ol className="space-y-5">
          {t.steps.map(([name, text], i) => (
            <li key={name} className="grid grid-cols-[2rem_1fr] gap-2">
              <span className="font-serif text-accent text-lg leading-7">{i + 1}</span>
              <div><p className="font-medium">{name}</p><p className="text-muted leading-7">{text}</p></div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t.sheetTitle}>
        <TableWrap label={t.sheetTitle}>
          <table className="table-hc min-w-[30rem]">
            <thead><tr>{t.sheetCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {t.sheet.map(([f, c]) => <tr key={f}><td className="font-medium w-1/3">{f}</td><td>{c}</td></tr>)}
            </tbody>
          </table>
        </TableWrap>
        <div className="mt-6"><Note>{t.sheetNote}</Note></div>
      </Section>

      <Section title={t.proofTitle}>
        <dl className="space-y-4 leading-7">
          {t.proof.map(([who, what]) => <div key={who}><dt className="font-medium">{who}</dt><dd className="text-muted">{what}</dd></div>)}
        </dl>
        <div className="mt-6"><Note>{t.proofNote}</Note></div>
      </Section>

      <Section title={t.govTitle}>
        <div className="space-y-3 leading-7">{t.gov.map((p) => <p key={p}>{p}</p>)}</div>
        <div className="mt-6"><Note>{t.govNote}</Note></div>
      </Section>

      <Section title={t.contextTitle} aside={t.contextAside}>
        <dl className="space-y-5 leading-7">
          {t.context.map(([name, text]) => <div key={name}><dt className="font-medium">{name}</dt><dd className="text-muted">{text}</dd></div>)}
        </dl>
        <p className="mt-6 leading-7">{t.contextNote}</p>
        <Sources lang={lang} items={src('aiAct50', 'aiActGuidelines', 'c2pa', 'iptcDst', 'steam', 'oscars', 'usco')} />
      </Section>
    </>
  )
}
