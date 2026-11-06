import { LEVELS, STATUSES } from '../i18n.js'

// Même couleur pour les trois niveaux : le badge ne doit jamais ressembler à une note.
export default function Badge({ level, status, lang, tone = 'light', size = 'sm' }) {
  const l = LEVELS[level]
  const label = `${lang === 'fr' ? 'Contribution humaine : ' : 'Human contribution: '}${l.spoken[lang]}${
    status ? ` (${STATUSES[status][lang].toLowerCase()})` : ''
  }`
  const tones = {
    light: 'border-ink/30 text-ink bg-paper',
    dark: 'border-white/40 text-white bg-black/55',
  }
  const sizes = {
    sm: 'text-[11px] px-1.5 py-px',
    md: 'text-sm px-2 py-0.5',
    lg: 'text-base px-2.5 py-0.5',
  }
  return (
    <span role="img" aria-label={label} title={label}
      className={`inline-flex items-center rounded border font-semibold tracking-wide leading-tight whitespace-nowrap ${tones[tone]} ${sizes[size]}`}>
      <span aria-hidden="true">{l.code}</span>
    </span>
  )
}
