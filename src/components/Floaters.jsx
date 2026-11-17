import { useMemo } from 'react'
const rnd = (a, b) => a + Math.random() * (b - a)
export default function Floaters({ night }) {
  const items = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    e: (night ? ['✨', '⭐', '💜', '🌟'] : ['💗', '🦋', '✨', '🎀', '⭐', '💖'])[i % (night ? 4 : 6)],
    l: rnd(0, 100), d: rnd(9, 18), s: rnd(0, 12), z: rnd(14, 28) })), [night])
  return <div className="floaters" aria-hidden>{items.map((x, i) =>
    <span key={i} style={{ left: x.l + '%', animationDuration: x.d + 's', animationDelay: -x.s + 's', fontSize: x.z }}>{x.e}</span>)}</div>
}
