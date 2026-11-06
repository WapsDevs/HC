import { useEffect } from 'react'

// En-tête de page : titre, chapeau, et titre de l'onglet.
export function PageHeader({ eyebrow, title, lead }) {
  useEffect(() => {
    document.title = `${title} · HC`
  }, [title])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 sm:pt-20 pb-12">
      {eyebrow && <p className="text-sm text-accent font-medium mb-3">{eyebrow}</p>}
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">{title}</h1>
      {lead && <p className="mt-5 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">{lead}</p>}
    </div>
  )
}

// Section : titre à gauche sur grand écran, contenu à droite.
export function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-20">
      <div className="border-t border-line pt-10 grid gap-6 lg:grid-cols-[15rem_1fr] lg:gap-12">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
          {aside && <p className="mt-2 text-sm text-muted leading-6">{aside}</p>}
        </div>
        <div className="min-w-0 max-w-3xl">{children}</div>
      </div>
    </section>
  )
}

export function Note({ children }) {
  return <p className="border-l-2 border-accent pl-4 text-[0.95rem] text-muted leading-6">{children}</p>
}

// Tableau qui défile horizontalement sur petit écran au lieu de casser la page.
export function TableWrap({ children, label }) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  )
}
