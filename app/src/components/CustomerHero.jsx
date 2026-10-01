import { Countdown, Cycle, Ladder } from '../lib/motion.jsx';
import { Arrow, DealCard, Notif, Shot } from './atoms.jsx';

const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=75`;

export default function CustomerHero() {
  return (
    <section className="hero dark">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="live-pill"><i></i>Launching first in Brighton, UK</span>
          <h1 className="display">Big daily discounts from your high street, <em>the second they drop.</em></h1>
          <p className="lede">Last Minute Local pushes today's best deals from nearby shops, salons and restaurants straight to your phone the minute they're released.</p>
          <div className="hero-ctas">
            <a href="#how" className="text-link">See how it works <Arrow /></a>
          </div>
        </div>

        <div className="stage c-stage">
          <Shot large src="/site-assets/c2-feed.png" alt="Last Minute Local deals feed showing Nike Air Max 90 trainers at 40% off from Solestore" />

          <DealCard className="float fa dcard hide-sm" img={unsplash('photo-1517248135467-4c7edcad34c4')} sticker="35% off" biz="Little Italy" meta="0.2 mi">
            <div className="foot"><Countdown seconds={9240} className="amber" /><span className="mintc">£3 now</span></div>
          </DealCard>

          <DealCard className="float fb dcard" img={unsplash('photo-1441986300917-64674bd600d8')} sticker="50% off" biz="Bloom & Ash" meta="0.5 mi">
            <div className="item">Ganni check blazer</div>
            <Ladder prices={['£226', '£170', '£136', '£113']} start={1} interval={2200} />
            <div className="foot"><Countdown seconds={1320} className="ember" /><span>2 left</span></div>
          </DealCard>

          <DealCard className="float fc dcard hide-sm" img={unsplash('photo-1599901860904-17e6ed7083a0')} sticker="40% off" biz="Bayside Yoga" meta="0.2 mi">
            <div className="item">Vinyasa, 6:30pm</div>
          </DealCard>

          <Cycle className="notifs" interval={4200}>
            <Notif title="Solestore" body="40% off Nike Air Max 90 trainers. 4 pairs left." time="now" />
            <Notif title="Frank's Barbers" body="Cut & blow-dry at 4pm just dropped to £16.80." time="now" />
            <Notif title="Crownhill Bakery" body="End-of-day box, six bakes. £4.80 for the next 20 minutes." time="now" />
          </Cycle>
        </div>
      </div>
    </section>
  );
}
