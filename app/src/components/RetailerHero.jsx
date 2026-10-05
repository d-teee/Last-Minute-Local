import { Cycle, Ladder } from '../lib/motion.jsx';
import { useReady } from '../lib/hooks.js';
import { Checkmark, DealCard, Notif } from './atoms.jsx';

const unsplash = (id, w = 500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const tick = <Checkmark size={16} />;

export default function RetailerHero() {
  // The live card shows first; the side cards and notifications follow (see .pop).
  const ready = useReady();

  return (
    <section className="hero dark r-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="live-pill"><i></i>Onboarding Brighton businesses now</span>
          <h1 className="display">Move your stock. Find last minute bookings. <em>Get that sale!</em></h1>
          <p className="lede">Now you can move your unsold stock and turn those empty bookings into new revenue. In real time. For free!</p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn">List your business</a>
            <a href="#offers" className="btn gh">See how it works</a>
          </div>
        </div>

        <div className={`stage h-stage${ready ? ' ready' : ''}`}>
          <Cycle className="notifs pop" interval={3400}>
            <Notif icon={tick} title="New booking · Frank's Barbers" body="Cut & blow-dry, 3:30pm · £20" time="now" />
            <Notif icon={tick} title="Claimed · Crownhill Bakery" body="End-of-day box · £4.80" time="now" />
            <Notif icon={tick} title="Claimed · Bloom & Ash" body="Linen shirt, size M · £24" time="now" />
          </Cycle>

          <DealCard className="float back dcard hide-sm pop" style={{ '--in': '1.8s' }} phStyle={{ height: 140 }} img={unsplash('photo-1509440159596-0249088772ff')} sticker="60% off" biz="Crownhill Bakery" meta="5 left" />

          <DealCard className="float main dcard" img={unsplash('photo-1503951914875-452162b0f3f1', 700)} alt="A barber at work" sticker="Live" biz="Frank's Barbers" meta="3 slots">
            <div className="item" style={{ fontSize: 16 }}>Cut &amp; blow-dry</div>
            <Ladder prices={['£28', '£20', '£18', '£16']} interval={3000} />
            <div className="rule"><i></i></div>
            <div className="foot"><span className="mintc">Next: 3:30pm</span><span className="amber">Today only</span></div>
          </DealCard>

          <DealCard className="float back2 dcard hide-sm pop" style={{ '--in': '2.4s' }} phStyle={{ height: 140 }} img={unsplash('photo-1441986300917-64674bd600d8')} sticker="35% off" biz="Bloom & Ash" meta="Linen shirts" />
        </div>
      </div>
    </section>
  );
}
