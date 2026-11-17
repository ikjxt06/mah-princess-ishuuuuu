import { useState } from 'react'
import { motion } from 'framer-motion'
import { Kitty, Kid } from '../components/Characters'
export default function EnvelopePage({ next }) {
  const [open, setOpen] = useState(false)
  return <section className="card">
    <h1>A Little Something for You 💌</h1>
    <p>From my heart, exclusively for my princess.</p>
    <div className="envwrap" onClick={() => setOpen(true)}>
      <div className="peek"><Kid mood="blush" size={80}/></div>
      <div className="env">
        <motion.div className="letterpop" animate={{ y: open ? -90 : 0 }} transition={{ delay: open ? .5 : 0, duration: .8 }}>💗 For Ishuu 💗</motion.div>
        <motion.div className="flap" style={{ transformOrigin: 'top' }} animate={{ rotateX: open ? 180 : 0, zIndex: open ? 0 : 3 }} transition={{ duration: .6 }}/>
        <div className="pocket"/><div className="seal">👑</div>
      </div>
      <div className="kit"><Kitty holding="💌" size={90}/></div>
    </div>
    {!open ? <><p className="hint">Tap the envelope to open your surprise.</p><button className="btn" onClick={() => setOpen(true)}>Open Your Letter 💗</button></>
      : <motion.button className="btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} onClick={next}>Read My Letter ❤️</motion.button>}
  </section>
}
