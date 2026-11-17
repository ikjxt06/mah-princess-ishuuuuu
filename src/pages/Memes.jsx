import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Kitty, Kid } from '../components/Characters'
const M = ['Me pretending to be normal when I see you 😂', "POV: My princess is angry and I'm already sorry 😭", 'Me waiting for your reply like a kid waiting for snacks.', 'You stealing my heart every single day.', "When my princess says she's not cute but she's literally the cutest.", 'Me whenever you call me.', 'I need 1000 kisses as compensation. No negotiations. 😤💗', "My princess is always right. Even when she's wrong. 😂"]
const moods = ['funny', 'drama', 'dance', 'blush']
const Face = ({ i, size }) => i % 2 ? <Kid mood={moods[i % 4]} size={size}/> : <Kitty size={size} kiss={i % 4 === 0} sleep={i === 2}/>
export default function Memes({ next }) {
  const [open, setOpen] = useState({}); const [rand, setRand] = useState(null)
  const laugh = () => setRand({ i: Math.floor(Math.random() * M.length), k: Date.now() })
  return <section className="wide scrap">
    <h1>Because My Princess Deserves to Smile 😂💗</h1>
    <div className="grid">{M.map((c, i) => <motion.div key={i} className="meme" style={{ rotate: (i % 3 - 1) * 2.5 }} whileHover={{ scale: 1.06, rotate: 0 }}
      onClick={() => setOpen(o => ({ ...o, [i]: true }))}>
      <Face i={i} size={80}/>{open[i] ? <p>{c}</p> : <p className="tap">Tap to reveal 💌</p>}</motion.div>)}</div>
    <button className="btn" onClick={laugh}>Make Me Laugh 😂</button>
    <AnimatePresence>{rand && <motion.div key={rand.k} className="toast" initial={{ y: 40, opacity: 0, scale: .7 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
      <Face i={rand.i + 1} size={70}/><p>{M[rand.i]}</p><button className="x" onClick={() => setRand(null)}>✕</button></motion.div>}</AnimatePresence>
    <button className="btn" onClick={next}>Now, the Moon 🌙</button>
  </section>
}
