import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Kitty, Kid } from '../components/Characters'
const MK = ['You Are My Moonlight', 'My Favourite Universe', 'My Little Star', 'The Most Beautiful Soul', 'My Forever Princess']
export default function Moon({ next }) {
  const [m, setM] = useState(null)
  const stars = useMemo(() => Array.from({ length: 60 }, () => ({ x: Math.random() * 100, y: Math.random() * 100, d: Math.random() * 3 })), [])
  return <section className="moonwrap">
    {stars.map((s, i) => <i key={i} className="star" style={{ left: s.x + '%', top: s.y + '%', animationDelay: s.d + 's' }}/>)}
    <h1 className="light">If I Could Give You the Moon, I Would 🌙</h1>
    <p className="light">Because someone as special as you deserves a universe of her own.</p>
    <div className="moonbox"><div className="moon"/>
      {MK.map((t, i) => { const a = (i / MK.length) * Math.PI * 2 - Math.PI / 2
        return <motion.button key={t} className="marker" aria-label={t} style={{ left: 50 + Math.cos(a) * 46 + '%', top: 50 + Math.sin(a) * 46 + '%' }}
          animate={{ scale: [1, 1.35, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * .3 }} onClick={() => setM(t)}>✦</motion.button> })}
      <div className="cm l"><Kitty size={60} sleep holding="💗"/></div><div className="cm r"><Kid mood="blush" size={56}/></div></div>
    <div className="msg"><AnimatePresence mode="wait"><motion.h3 key={m} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>{m ? m + ' 💜' : 'Tap a glowing star ✨'}</motion.h3></AnimatePresence></div>
    <button className="btn" onClick={next}>One Last Surprise 💗</button>
  </section>
}
