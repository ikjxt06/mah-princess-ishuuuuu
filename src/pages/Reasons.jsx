import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown } from 'lucide-react'
import { Kitty, Kid } from '../components/Characters'
const R = [
  ['Your Beautiful Smile', 'It changes my whole day. One smile from you and everything feels okay.'],
  ['Your Eyes', 'I could get lost in them. They say so much without a single word.'],
  ['Your Little Habits', 'The tiny things you do without realising are my favourite things to notice.'],
  ['Your Cute Personality', 'Sweet, funny, a little dramatic sometimes, and perfect in every way.'],
  ['Your Beautiful Heart', 'You care deeply, and that kindness is what makes you truly royal.'],
  ['The Way You Make Me Feel', 'Happy, calm, and lucky. Like home, with a little sparkle.'],
  ['Your Uniqueness', 'There is no one like you. The world only made one Ishuu, and I got to know her.'],
  ['Simply Being YOU', "You don't have to change a thing. You are already everything I love."]]
export default function Reasons({ next }) {
  const [sel, setSel] = useState(null)
  return <section className="wide">
    <h1>Reasons Why You're My Princess 💗</h1>
    <div className="grid">{R.map(([t], i) =>
      <motion.button key={t} whileHover={{ y: -6, rotate: -1 }} whileTap={{ scale: .95 }} className="tile" onClick={() => setSel(i)}>
        <Crown size={18}/><span>{t}</span></motion.button>)}</div>
    <AnimatePresence>{sel !== null && <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
      <motion.div className="pop" initial={{ scale: .6 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()}>
        {sel % 2 ? <Kid mood="blush" size={80}/> : <Kitty kiss size={80}/>}
        <h3>{R[sel][0]} 👑</h3><p>{R[sel][1]}</p>
        <button className="btn sm" onClick={() => setSel(null)}>Aww 💗</button></motion.div></motion.div>}</AnimatePresence>
    <button className="btn" onClick={next}>Time to Laugh 😂</button>
  </section>
}
