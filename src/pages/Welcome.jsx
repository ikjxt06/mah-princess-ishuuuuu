import { Kitty, Kid } from '../components/Characters'
export default function Welcome({ next }) {
  return <section className="card">
    <div className="row"><Kitty crown size={120}/><Kid mood="funny" size={100}/></div>
    <h1>Hey, My Princess Ishuu! 👑💗</h1>
    <p>To the girl who makes my world more beautiful, who deserves all the happiness, love, and magic in this universe.</p>
    <p>I made something special for you because you are not just a princess in my eyes, you are my entire fairytale.</p>
    <p><b>Are you ready for your little surprise, princess? 💗</b></p>
    <button className="btn" onClick={next}>Enter Your Fairytale ✨</button></section>
}
