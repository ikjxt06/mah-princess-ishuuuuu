import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Floaters from './components/Floaters'
import Music from './components/Music'
import Welcome from './pages/Welcome'
import EnvelopePage from './pages/EnvelopePage'
import Letter from './pages/Letter'
import Reasons from './pages/Reasons'
import Memes from './pages/Memes'
import Moon from './pages/Moon'
import Final from './pages/Final'
const pages = [Welcome, EnvelopePage, Letter, Reasons, Memes, Moon, Final]
export default function App() {
  const [i, setI] = useState(0); const P = pages[i]
  return <div className={'app' + (i === 5 ? ' night' : '')}>
    <Floaters night={i === 5} key={i === 5}/>
    {i > 0 && <button className="back" onClick={() => setI(i - 1)}><ArrowLeft size={18}/> Back</button>}
    <AnimatePresence mode="wait"><motion.main key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: .45 }}>
      <P next={() => setI(x => Math.min(x + 1, 6))} replay={() => setI(0)}/></motion.main></AnimatePresence>
    <Music/>
  </div>
}
