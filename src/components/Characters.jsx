const ink = '#6b3a4a'
const Held = ({ e }) => e ? <text x="50" y="97" fontSize="26" textAnchor="middle">{e}</text> : null
// Original cat-with-bow illustration
export const Kitty = ({ size = 110, crown, holding, sleep, kiss }) => (
  <svg width={size} height={size} viewBox="0 0 100 105" className="char">
    <path d="M17 42L20 12 44 24Z M83 42L80 12 56 24Z" fill="#fff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round"/>
    <ellipse cx="50" cy="55" rx="38" ry="30" fill="#fff" stroke={ink} strokeWidth="2.5"/>
    {sleep ? <path d="M29 52q6 5 12 0M59 52q6 5 12 0" stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round"/> :
      <><ellipse cx="35" cy="52" rx="3.5" ry="4.5" fill={ink}/><ellipse cx="65" cy="52" rx="3.5" ry="4.5" fill={ink}/></>}
    <ellipse cx="50" cy="60" rx="5" ry="3.5" fill="#ffd54a" stroke={ink} strokeWidth="1.5"/>
    {kiss && <path d="M46 68q4 4 8 0" stroke="#ff5d8f" strokeWidth="2.5" fill="none"/>}
    <path d="M10 56h17M10 64l16-3M90 56H73M90 64l-16-3" stroke={ink} strokeWidth="2" strokeLinecap="round"/>
    <g transform="translate(66 18) rotate(15)"><path d="M0 8L-16 0V16Z M0 8L16 0V16Z" fill="#ff6fa5" stroke={ink} strokeWidth="2"/><circle cx="0" cy="8" r="5" fill="#ff3d85" stroke={ink} strokeWidth="2"/></g>
    {crown && <path d="M32 24L36 8 43 18 50 4 57 18 64 8 68 24Z" fill="#ffd54a" stroke="#c98f00" strokeWidth="2"/>}
    {kiss && <text x="80" y="75" fontSize="14">💋</text>}
    <Held e={holding}/>
  </svg>
)
// Original cheeky-kid illustration (mood: funny | blush | drama | dance)
export const Kid = ({ size = 110, mood = 'funny', holding }) => (
  <svg width={size} height={size} viewBox="0 0 100 105" className={'char ' + (mood === 'dance' ? 'dance' : '')}>
    <ellipse cx="50" cy="55" rx="34" ry="32" fill="#ffd9b8" stroke={ink} strokeWidth="2.5"/>
    <path d="M16 48Q18 18 50 18T84 48Q70 30 50 32T16 48Z" fill="#2b2b2b"/>
    <path d="M27 40h16M57 40h16" stroke="#2b2b2b" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="36" cy="52" r="4" fill="#2b2b2b"/><circle cx="64" cy="52" r="4" fill="#2b2b2b"/>
    {mood === 'blush' && <><circle cx="27" cy="62" r="6" fill="#ff8fb1" opacity=".7"/><circle cx="73" cy="62" r="6" fill="#ff8fb1" opacity=".7"/><path d="M42 70q8 6 16 0" stroke={ink} strokeWidth="2.5" fill="none"/></>}
    {mood === 'drama' && <ellipse cx="50" cy="72" rx="7" ry="9" fill="#a8324f" stroke={ink} strokeWidth="2"/>}
    {(mood === 'funny' || mood === 'dance') && <><path d="M34 68Q50 84 66 68Z" fill="#a8324f" stroke={ink} strokeWidth="2"/><ellipse cx="50" cy="77" rx="6" ry="5" fill="#ff7a9c"/></>}
    <Held e={holding}/>
  </svg>
)
