// Liste de sources : { title, publisher, url, date?, note? }.
// title, publisher et url acceptent une chaîne ou un objet { fr, en }.
const tr = (v, lang) => (v && typeof v === 'object' ? v[lang] : v)

export default function Sources({ items, lang, title = 'Sources' }) {
  return (
    <div className="mt-8">
      <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-muted mb-3">{title}</h3>
      <ol className="space-y-2 text-[0.95rem] leading-6">
        {items.map((s) => (
          <li key={tr(s.url, 'fr')}>
            <a href={tr(s.url, lang)} className="link" target="_blank" rel="noreferrer">{tr(s.title, lang)}</a>
            <span className="text-muted">. {tr(s.publisher, lang)}{s.date ? `, ${s.date}` : ''}.</span>
            {s.note && <span className="block text-sm text-muted">{s.note[lang]}</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}
