// Liste de sources : { title, publisher, url, date?, note? { fr, en } }
export default function Sources({ items, lang, title }) {
  return (
    <div className="mt-8">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
        {title ?? 'Sources'}
      </h3>
      <ol className="space-y-2 text-[0.95rem] leading-6">
        {items.map((s) => (
          <li key={s.url}>
            <a href={s.url} className="link" target="_blank" rel="noreferrer">{s.title}</a>
            <span className="text-muted"> — {s.publisher}{s.date ? `, ${s.date}` : ''}</span>
            {s.note && <span className="block text-sm text-muted">{s.note[lang]}</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}
