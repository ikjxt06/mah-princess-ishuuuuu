import { useRef, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
// Original soft chord loop synthesized with WebAudio (no copyrighted audio, no files to go missing)
const chords = [[261.6, 329.6, 392], [220, 261.6, 329.6], [174.6, 220, 261.6], [196, 246.9, 392]]
export default function Music() {
  const ref = useRef(null); const [on, setOn] = useState(false)
  const start = () => {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return false
    const ctx = new Ctx(); const master = ctx.createGain(); master.gain.value = 0.06; master.connect(ctx.destination)
    let n = 0
    const play = () => { const t = ctx.currentTime
      chords[n++ % 4].forEach(f => { const o = ctx.createOscillator(), g = ctx.createGain()
        o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + 1); g.gain.linearRampToValueAtTime(0, t + 3.6)
        o.connect(g).connect(master); o.start(t); o.stop(t + 3.7) }) }
    play(); const id = setInterval(play, 3500); ref.current = { ctx, id }; return true
  }
  const toggle = () => {
    try {
      if (!ref.current) { if (start()) setOn(true); return }
      if (on) { ref.current.ctx.suspend(); setOn(false) } else { ref.current.ctx.resume(); setOn(true) }
    } catch { /* audio unavailable: fail silently */ }
  }
  return <button className="music" onClick={toggle} aria-label="Toggle music">{on ? <Music2 size={20}/> : <VolumeX size={20}/>}</button>
}
