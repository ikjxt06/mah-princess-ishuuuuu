import { motion } from 'framer-motion'
import { Kitty, Kid } from '../components/Characters'
import { Burst } from '../components/Heart'
export default function Final({ replay }) {
  return <section className="card">
    <Burst/>
    <motion.div className="crown" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }}>👑</motion.div>
    <div className="row"><Kitty size={110} kiss holding="💗"/><Kid mood="dance" size={100} holding="💗"/></div>
    <h1>Happy Princess Day, My Ishuu! 👑</h1>
    <p>If I could choose one person to make my world beautiful, I would choose you in every lifetime.</p>
    <p>You don't need a crown to be my princess.</p>
    <p>You already have the most special place in my heart.</p>
    <p>I hope I make you feel as loved and special as you truly are.</p>
    <p>Never forget, my princess, you deserve the entire universe and so much more.</p>
    <p><b>I love you, Ishuu. ❤️</b></p>
    <p className="fine">Your fairytale doesn't end here. It begins with us. ♾️</p>
    <button className="btn" onClick={replay}>Replay Our Little Fairytale 💗</button>
  </section>
}
