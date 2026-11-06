import { Link } from 'react-router-dom'
import { PageHeader } from '../components/Page.jsx'
import { useLang } from '../i18n.js'

export default function NotFound() {
  const lang = useLang()
  const fr = lang === 'fr'
  return (
    <>
      <PageHeader title={fr ? 'Page introuvable' : 'Page not found'}
        lead={fr ? 'Cette adresse ne correspond à aucune page du site.' : 'This address does not match any page on the site.'} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link to={`/${lang}`} className="link">{fr ? 'Retour à l’accueil' : 'Back to home'}</Link>
      </div>
    </>
  )
}
