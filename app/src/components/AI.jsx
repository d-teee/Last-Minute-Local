import { Ladder, Reveal } from '../lib/motion.jsx';
import { useSequence } from '../lib/hooks.js';
import { DealCard } from './atoms.jsx';

const TOASTS = [
  { initial: 'P', name: 'Priya M.', size: 'UK 8', val: 77 },
  { initial: 'D', name: 'Dan R.', size: 'UK 8', val: 77 },
  { initial: 'J', name: 'James O.', size: 'UK 10', val: 66 },
  { initial: 'S', name: 'Sam K.', size: 'UK 9', val: 66 },
];
const UNITS = 6;

export default function AI() {
  // Claim toasts pop in one by one, filling the unit pips and the "Taken today" counter.
  const shown = useSequence(TOASTS.length, 2200);
  const taken = TOASTS.slice(0, shown).reduce((sum, t) => sum + t.val, 0);

  return (
    <section id="ai" className="section dark">
      <div className="wrap ai-grid">
        <Reveal>
          <span className="kick">Your AI Buddy</span>
          <h2 className="display">Your AI Buddy monitors your sales in real time. <em>So you don't have to.</em></h2>
          <p className="lede">We're giving every UK independent high street retailer the awesome power of AI to create a new daily revenue stream.</p>
          <p className="lede">The moment you post your discounted offer onto the platform, our pricing engine starts to automatically calibrate the level of interest in your offer and the time left before the offer expires. The AI never goes below the minimum price level you've set. It will calculate the best price for you that reflects how long your deal has to run.</p>
          <div className="pills"><span>You set the floor</span><span>Repriced in real time</span><span>Zero manual work</span></div>
        </Reveal>

        <Reveal className="stage r-stage" delay="1">
          <DealCard className="float main dcard" img="/trainers.jpg" alt="Nike Air Max 90 trainers" sticker="Live" biz="Solestore" meta="6 pairs">
            <div className="item" style={{ fontSize: 16 }}>Nike Air Max 90</div>
            <Ladder prices={['£110', '£77', '£66', '£60']} interval={3000} />
            <div className="rule"><i></i></div>
            <div className="foot">
              <span className="pips">
                {Array.from({ length: UNITS }, (_, k) => <i key={k} className={k < shown ? 'on' : undefined}></i>)}
              </span>
              <span className="amber">Collect by 6pm</span>
            </div>
          </DealCard>

          <div className="float taken pop"><small>Taken today</small><b>£{taken}</b></div>

          <div className="toasts">
            {TOASTS.map((t, k) => (
              <div key={t.name} className={`toast${k < shown ? ' on' : ''}`}>
                <span className="av">{t.initial}</span>
                <div><b>{t.name} claimed</b><span>{t.size}</span></div>
                <span className="p">£{t.val}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
