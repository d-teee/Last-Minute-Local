import { Reveal } from '../lib/motion.jsx';
import { Shot } from './atoms.jsx';

const OFFERS = [
  {
    kick: 'If you sell products',
    title: "Last season's trainers",
    body: 'Solestore puts six pairs of Nike Air Max 90 live. Customers reserve their size and collect today.',
    src: '/site-assets/c4-offer-detail.png',
    alt: 'Solestore offer: Nike Air Max 90, 40% off, price falling from £110 to a £60 floor, reserve UK 8 for £3',
  },
  {
    kick: 'If you sell a service',
    title: "This afternoon's empty chairs",
    body: "Frank's Barbers fills three free slots. Customers pick a time and book in one tap.",
    src: '/site-assets/c4-barber-offer.png',
    alt: "Frank's Barbers offer: cut and blow-dry, 30% off, price falling from £28 to a £16 floor, book 3:30pm for £1",
  },
];

export default function RetailerOffers() {
  return (
    <section id="offers" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="head c">
          <span className="kick">Your offers</span>
          <h2 className="display">Create discounted offers like these <em>in seconds.</em></h2>
        </Reveal>
        <div className="offer-grid">
          {OFFERS.map((o, k) => (
            <Reveal className="offer" delay={k || undefined} key={o.title}>
              <span className="kick">{o.kick}</span>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              <div className="crop"><Shot src={o.src} alt={o.alt} /></div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="cust-cap">What your customers see on their phones</Reveal>
      </div>
    </section>
  );
}
