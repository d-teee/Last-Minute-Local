import { Ladder } from '../lib/motion.jsx';
import { useReady, useSequence } from '../lib/hooks.js';
import { DealCard } from './atoms.jsx';

const TOASTS = [
  { initial: 'P', name: 'Priya M.', size: 'UK 8', val: 77 },
  { initial: 'D', name: 'Dan R.', size: 'UK 8', val: 77 },
  { initial: 'J', name: 'James O.', size: 'UK 10', val: 66 },
  { initial: 'S', name: 'Sam K.', size: 'UK 9', val: 66 },
];
const UNITS = 6;

export default function RetailerHero() {
  // Claim toasts pop in one by one, filling the unit pips and the "Taken today" counter.
  const shown = useSequence(TOASTS.length, 2200);
  const ready = useReady();
  const taken = TOASTS.slice(0, shown).reduce((sum, t) => sum + t.val, 0);

  return (
    <section className="hero dark r-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="live-pill"><i></i>Onboarding Brighton businesses now</span>
          <h1 className="display">Move your stock. Find last minute bookings. <em>Get that sale!</em></h1>
          <p className="lede">Now you can move your unsold stock and turn those empty bookings into new revenue. In real time. For free!</p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn">List your business</a>
            <a href="#how" className="btn gh">See how it works</a>
          </div>
          <p className="hero-note">Free to join. No commission until you choose to promote a deal.</p>
        </div>

        <div className={`stage r-stage${ready ? ' ready' : ''}`}>
          <DealCard className="float back dcard hide-sm pop" style={{ '--in': '.6s' }} phStyle={{ height: 150 }} img="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=75" sticker="Booked" stickerClass="sticker mint" biz="Frank's Barbers" meta="3:30pm" />

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
        </div>
      </div>
    </section>
  );
}
