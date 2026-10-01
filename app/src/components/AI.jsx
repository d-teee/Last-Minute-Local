import { Reveal } from '../lib/motion.jsx';

const TIMELINE = [
  ['2 hrs left', '£99', '10% off'],
  ['45 min left', '£82.50', '25% off'],
  ['15 min left', '£66', '40% off'],
  ['Last call', '£60.50', '45% off', true],
];

export default function AI() {
  return (
    <section id="ai" className="section dark">
      <div className="wrap ai-grid">
        <Reveal>
          <span className="kick">Your AI Buddy</span>
          <h2 className="display">We're giving every UK independent high street retailer the awesome power of AI to create <em>a new daily revenue stream.</em></h2>
          <p className="lede">The moment you post your discounted offer onto the platform, our pricing engine starts to automatically calibrate the level of interest in your offer and the time left before the offer expires. The AI never goes below the minimum price level you've set. It will calculate the best price for you that reflects how long your deal has to run.</p>
          <div className="pills"><span>You set the floor</span><span>Repriced in real time</span><span>Zero manual work</span></div>
        </Reveal>

        <Reveal className="surge" delay="1">
          {TIMELINE.map(([t, p, o, hot]) => (
            <div className={`sg${hot ? ' hot' : ''}`} key={t}>
              <span className="t">{t}</span><span className="d"></span><span className="p">{p}</span><span className="o">{o}</span>
            </div>
          ))}
          <div className="floor"><span>Your floor: 45% off</span><span>Never lower</span></div>
        </Reveal>
      </div>
    </section>
  );
}
