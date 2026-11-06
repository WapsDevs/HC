// Illustrations vectorielles des affiches fictives.
// Toutes les œuvres utilisent le même système graphique, quel que soit leur niveau HC :
// un HC− ne doit pas sembler moins soigné qu'un HC+.

function rng(seed) {
  let h = 2166136261
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return ((h ^= h >>> 16) >>> 0) / 4294967296
  }
}

const ridge = (W, H, base, amp, n, r) => {
  const pts = [`0,${H}`]
  for (let i = 0; i <= n; i++) pts.push(`${(i / n) * W},${base - r() * amp}`)
  pts.push(`${W},${H}`)
  return pts.join(' ')
}

const wave = (W, y, amp, len, phase = 0) => {
  let d = `M0,${y}`
  for (let x = 0; x <= W; x += len / 2) d += ` Q${x + len / 4},${y + (((x / (len / 2)) % 2 ? 1 : -1) * amp)} ${x + len / 2},${y}`
  return d.replace('M0', `M${-phase}`)
}

function Stars({ W, H, r, count = 40, maxY = 0.6 }) {
  return Array.from({ length: count }, (_, i) => (
    <circle key={i} cx={r() * W} cy={r() * H * maxY} r={r() * 1.1 + 0.3} fill="#fff" opacity={0.4 + r() * 0.6} />
  ))
}

const SCENES = {
  mountains: ({ W, H, p, r }) => (
    <>
      <circle cx={W * 0.68} cy={H * 0.3} r={W * 0.11} fill={p[3]} opacity="0.9" />
      <polygon points={ridge(W, H, H * 0.55, H * 0.18, 6, r)} fill={p[2]} opacity="0.6" />
      <polygon points={ridge(W, H, H * 0.7, H * 0.2, 5, r)} fill={p[2]} />
      <polygon points={ridge(W, H, H * 0.85, H * 0.14, 7, r)} fill={p[4]} />
    </>
  ),
  ocean: ({ W, H, p, r }) => (
    <>
      <Stars W={W} H={H} r={r} count={25} maxY={0.45} />
      <circle cx={W * 0.25} cy={H * 0.28} r={W * 0.07} fill={p[3]} />
      <rect x={W * 0.66} y={H * 0.36} width={W * 0.07} height={H * 0.3} fill={p[3]} />
      <rect x={W * 0.645} y={H * 0.33} width={W * 0.1} height={H * 0.04} fill={p[4]} />
      <polygon points={`${W * 0.6},${H * 0.3} ${W * 0.795},${H * 0.3} ${W * 0.97},${H * 0.22} ${W * 0.97},${H * 0.38}`} fill={p[3]} opacity="0.25" />
      <path d={`M0,${H * 0.66} H${W} V${H} H0Z`} fill={p[2]} />
      {[0.7, 0.78, 0.86, 0.94].map((y, i) => (
        <path key={y} d={wave(W + 40, H * y, 3 + i, W / (5 - i * 0.5), i * 7)} stroke={p[3]} strokeOpacity={0.35 - i * 0.05} strokeWidth="1.5" fill="none" />
      ))}
    </>
  ),
  forest: ({ W, H, p, r }) => {
    const tree = (x, y, s, fill, k) => (
      <polygon key={k} points={`${x},${y - s * 2.6} ${x - s * 0.7},${y} ${x + s * 0.7},${y}`} fill={fill} />
    )
    return (
      <>
        <circle cx={W * 0.5} cy={H * 0.32} r={W * 0.16} fill={p[3]} opacity="0.85" />
        {Array.from({ length: 9 }, (_, i) => tree((i / 8) * W, H * 0.72, W * 0.09 + r() * 10, p[2], `a${i}`))}
        <rect x="0" y={H * 0.72} width={W} height={H * 0.3} fill={p[2]} />
        {Array.from({ length: 7 }, (_, i) => tree((i / 6) * W + (r() - 0.5) * 20, H * 0.9, W * 0.12 + r() * 12, p[4], `b${i}`))}
        <rect x="0" y={H * 0.9} width={W} height={H * 0.1} fill={p[4]} />
      </>
    )
  },
  space: ({ W, H, p, r }) => (
    <>
      <Stars W={W} H={H} r={r} count={70} maxY={1} />
      <circle cx={W * 0.6} cy={H * 0.42} r={W * 0.22} fill={p[2]} />
      <circle cx={W * 0.53} cy={H * 0.37} r={W * 0.22} fill={p[3]} opacity="0.25" />
      <ellipse cx={W * 0.6} cy={H * 0.42} rx={W * 0.38} ry={W * 0.06} fill="none" stroke={p[3]} strokeWidth="3" transform={`rotate(-14 ${W * 0.6} ${H * 0.42})`} />
      <circle cx={W * 0.2} cy={H * 0.75} r={W * 0.05} fill={p[4]} />
    </>
  ),
  city: ({ W, H, p, r }) => {
    const blocks = []
    let x = 0
    while (x < W) {
      const w = W * (0.07 + r() * 0.1), h = H * (0.2 + r() * 0.35)
      blocks.push({ x, w, h })
      x += w + 2
    }
    return (
      <>
        <Stars W={W} H={H} r={r} count={20} maxY={0.4} />
        <circle cx={W * 0.78} cy={H * 0.2} r={W * 0.06} fill={p[3]} />
        {blocks.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={H * 0.85 - b.h} width={b.w} height={b.h + H * 0.2} fill={i % 2 ? p[2] : p[4]} />
            {Array.from({ length: Math.floor(b.h / 14) }, (_, j) =>
              r() > 0.45 ? <rect key={j} x={b.x + b.w * 0.3} y={H * 0.85 - b.h + 8 + j * 14} width={b.w * 0.4} height="4" fill={p[3]} opacity="0.7" /> : null)}
          </g>
        ))}
      </>
    )
  },
  desert: ({ W, H, p }) => (
    <>
      <circle cx={W * 0.5} cy={H * 0.45} r={W * 0.24} fill={p[3]} />
      <path d={`M0,${H * 0.62} Q${W * 0.3},${H * 0.5} ${W * 0.6},${H * 0.64} T${W},${H * 0.6} V${H} H0Z`} fill={p[2]} />
      <path d={`M0,${H * 0.8} Q${W * 0.4},${H * 0.66} ${W * 0.75},${H * 0.8} T${W * 1.2},${H * 0.76} V${H} H0Z`} fill={p[4]} />
    </>
  ),
  aurora: ({ W, H, p, r }) => (
    <>
      <Stars W={W} H={H} r={r} count={45} maxY={0.7} />
      {[0.22, 0.3, 0.38].map((y, i) => (
        <path key={y} d={`M${-20},${H * y} C${W * 0.3},${H * (y - 0.12)} ${W * 0.6},${H * (y + 0.12)} ${W + 20},${H * (y - 0.04)}`}
          stroke={i === 1 ? p[3] : p[2]} strokeWidth={W * 0.06} strokeOpacity={0.35 - i * 0.07} fill="none" strokeLinecap="round" />
      ))}
      <polygon points={ridge(W, H, H * 0.82, H * 0.12, 6, r)} fill={p[4]} />
    </>
  ),
  balloon: ({ W, H, p }) => (
    <>
      <circle cx={W * 0.2} cy={H * 0.2} r={W * 0.05} fill={p[3]} opacity="0.7" />
      <ellipse cx={W * 0.55} cy={H * 0.36} rx={W * 0.17} ry={W * 0.2} fill={p[3]} />
      <path d={`M${W * 0.55},${H * 0.36 - W * 0.2} V${H * 0.36 + W * 0.2}`} stroke={p[4]} strokeOpacity="0.4" strokeWidth="2" />
      <ellipse cx={W * 0.55} cy={H * 0.36} rx={W * 0.07} ry={W * 0.2} fill="none" stroke={p[4]} strokeOpacity="0.4" strokeWidth="2" />
      <path d={`M${W * 0.45},${H * 0.36 + W * 0.15} L${W * 0.52},${H * 0.36 + W * 0.27} M${W * 0.65},${H * 0.36 + W * 0.15} L${W * 0.58},${H * 0.36 + W * 0.27}`} stroke={p[4]} strokeWidth="1.5" />
      <rect x={W * 0.515} y={H * 0.36 + W * 0.27} width={W * 0.07} height={W * 0.05} fill={p[4]} />
      <path d={`M0,${H * 0.78} Q${W * 0.5},${H * 0.68} ${W},${H * 0.78} V${H} H0Z`} fill={p[2]} />
      <path d={`M0,${H * 0.88} Q${W * 0.4},${H * 0.8} ${W},${H * 0.9} V${H} H0Z`} fill={p[4]} />
    </>
  ),
  reef: ({ W, H, p, r }) => (
    <>
      {Array.from({ length: 18 }, (_, i) => (
        <circle key={i} cx={r() * W} cy={H * 0.2 + r() * H * 0.5} r={1 + r() * 3} fill="none" stroke={p[3]} strokeOpacity="0.6" />
      ))}
      {Array.from({ length: 6 }, (_, i) => {
        const x = (i / 5) * W, h = H * (0.25 + r() * 0.2)
        return <path key={i} d={`M${x},${H} C${x - 15},${H - h * 0.5} ${x + 15},${H - h * 0.7} ${x},${H - h}`} stroke={p[2]} strokeWidth={W * 0.03} fill="none" strokeLinecap="round" />
      })}
      <ellipse cx={W * 0.55} cy={H * 0.45} rx={W * 0.12} ry={W * 0.05} fill={p[3]} />
      <polygon points={`${W * 0.43},${H * 0.45} ${W * 0.37},${H * 0.42} ${W * 0.37},${H * 0.48}`} fill={p[3]} />
      <path d={`M0,${H * 0.9} Q${W * 0.5},${H * 0.82} ${W},${H * 0.9} V${H} H0Z`} fill={p[4]} />
    </>
  ),
  garden: ({ W, H, p, r }) => (
    <>
      <circle cx={W * 0.75} cy={H * 0.22} r={W * 0.1} fill={p[3]} />
      <path d={`M0,${H * 0.7} Q${W * 0.5},${H * 0.6} ${W},${H * 0.7} V${H} H0Z`} fill={p[2]} />
      {Array.from({ length: 11 }, (_, i) => {
        const x = (i + 0.5) * (W / 11) + (r() - 0.5) * 8, y = H * (0.74 + r() * 0.16)
        return (
          <g key={i}>
            <path d={`M${x},${y} V${y - 22 - r() * 18}`} stroke={p[4]} strokeWidth="2" />
            <circle cx={x} cy={y - 26 - r() * 14} r={4 + r() * 4} fill={i % 3 ? p[3] : '#fff'} opacity="0.9" />
          </g>
        )
      })}
      <path d={`M0,${H * 0.92} Q${W * 0.5},${H * 0.86} ${W},${H * 0.92} V${H} H0Z`} fill={p[4]} />
    </>
  ),
}

// palette : [ciel haut, ciel bas, plan moyen, lumière, premier plan]
export default function Poster({ id, scene, palette, wide = false, className = '' }) {
  const W = wide ? 480 : 200
  const H = wide ? 270 : 300
  const r = rng(id + (wide ? 'w' : 'p'))
  const Scene = SCENES[scene]
  const gid = `g-${id}-${wide ? 'w' : 'p'}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette[0]} />
          <stop offset="1" stopColor={palette[1]} />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${gid})`} />
      <Scene W={W} H={H} p={palette} r={r} />
    </svg>
  )
}
