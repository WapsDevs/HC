import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Levels from './pages/Levels.jsx'
import Method from './pages/Method.jsx'
import Sectors from './pages/Sectors.jsx'
import Cases from './pages/Cases.jsx'
import Verification from './pages/Verification.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import { LANGS, preferredLang } from './i18n.js'

// La démo est chargée seulement quand on l'ouvre.
const Demo = lazy(() => import('./demo/Demo.jsx'))

// La langue est lue à chaque redirection, pas une seule fois au chargement.
function ToPreferredLang() {
  return <Navigate to={`/${preferredLang()}`} replace />
}

// Une URL comme #/de/levels renvoie vers la langue préférée.
function LangGuard({ children }) {
  const { lang } = useParams()
  return LANGS.includes(lang) ? children : <ToPreferredLang />
}

// HashRouter : les URL ressemblent à /HC/#/fr/levels et fonctionnent
// sur GitHub Pages sans configuration serveur.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ToPreferredLang />} />
        <Route path="/:lang/demo/*" element={
          <LangGuard>
            <Suspense fallback={<div className="min-h-screen bg-[#0b0f1a]" />}><Demo /></Suspense>
          </LangGuard>
        } />
        <Route path="/:lang" element={<LangGuard><Layout /></LangGuard>}>
          <Route index element={<Home />} />
          <Route path="levels" element={<Levels />} />
          <Route path="method" element={<Method />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="cases" element={<Cases />} />
          <Route path="verification" element={<Verification />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<ToPreferredLang />} />
      </Routes>
    </HashRouter>
  )
}
