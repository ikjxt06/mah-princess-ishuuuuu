import { motion } from 'framer-motion'
import { Kitty, Kid } from '../components/Characters'
export default function Letter({ next }) {
  return <section className="paper">
    <div className="corner tl"><Kitty size={70} holding="🎀"/></div><div className="corner tr"><Kid mood="blush" size={64} holding="💗"/></div>
    <h2>To My Beautiful Princess, Ishuu ❤️</h2>
    <div className="body">
      <p>My Princess,</p>
      <p>I don't always find the right words, so I'm trying my best here. You are one of the most special people I've ever known. The moment you smile, everything around me gets softer and brighter, and I forget whatever was bothering me.</p>
      <p>Thank you for the happiness you bring into my life, even on ordinary days. I love your little habits, the way you are, the cute things you do without even noticing. They're the things I think about when I'm smiling alone.</p>
      <p>I want you to feel loved, appreciated, protected and valued, every single day. You deserve to be treated like a princess, not just today, and I promise to keep trying to be the person who makes sure you feel it.</p>
      <p>I want to make so many beautiful memories with you. Little ones, silly ones, and the ones we'll talk about years from now. I'm so grateful to have you.</p>
      <p className="with">With endless love,</p>
    </div>
    <div className="sig">
      <motion.span className="signame" initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 2.2, delay: .4 }}>Ikjot Singh</motion.span>
      <svg viewBox="0 0 300 30" className="flourish"><motion.path d="M5 20C60 6 120 28 180 14S270 8 295 18" fill="none" stroke="#b5476b" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 2.4 }}/></svg>
    </div>
    <button className="btn" onClick={next}>There's More, Princess ✨</button>
  </section>
}
