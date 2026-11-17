import { motion } from 'framer-motion'
export const Burst = ({ n = 30 }) => <div className="burst" aria-hidden>{Array.from({ length: n }, (_, i) => {
  const a = (i / n) * Math.PI * 2, r = 120 + Math.random() * 200
  return <motion.span key={i} initial={{ x: 0, y: 0, opacity: 1, scale: .3 }} animate={{ x: Math.cos(a) * r, y: Math.sin(a) * r, opacity: 0, scale: 1.4 }} transition={{ duration: 2, ease: 'easeOut' }}>{['💗', '💖', '✨', '👑'][i % 4]}</motion.span> })}</div>
