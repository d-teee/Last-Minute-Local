import { Reveal } from '../lib/motion.jsx';

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;

const CARDS = [
  {
    src: img('photo-1460353581641-37baddab0fa2'),
    alt: 'Trainers on a shop shelf',
    title: "Don't wait until Black Friday to move unwanted stock.",
    soft: 'Shout out your great offers every day.',
    body: 'Discount your unsold fashion, sportswear, homewares, food and more at the click of a button. We promote them to your local customers in real time, throughout the day.',
  },
  {
    src: img('photo-1503951914875-452162b0f3f1'),
    alt: 'A barber at work',
    title: 'Your time-sensitive inventory has no second chance.',
    body: 'Unbooked hairdressing appointments, empty restaurant tables, no takeaway customers. Their potential value disappears as the clock ticks by. Once the day passes, their value has gone.',
  },
  {
    src: img('photo-1517248135467-4c7edcad34c4'),
    alt: 'A restaurant dining room',
    title: 'This gap has never been filled.',
    body: "No online platform today matches daily local high street discounts with real-time local demand. Until now, and it's called Last Minute Local. Free for both sellers and buyers.",
  },
];

export default function RetailerWhy() {
  return (
    <section id="why" className="section">
      <div className="wrap">
        <Reveal className="head">
          <span className="kick">Why this matters</span>
          <h2 className="display">Independent businesses like yours lose money every day. <em>Quietly.</em></h2>
          <p className="lede">An empty hairdresser's chair. Last season's trainers gathering dust. Restaurant tables still unbooked at 5pm. Great food approaching its sell-by date. There's no easy way to sell any of it before it's too late. Until now&hellip;</p>
        </Reveal>

        <div className="pcards">
          {CARDS.map((c, k) => (
            <Reveal as="article" className="pcard" delay={k || undefined} key={c.title}>
              <div className="ph"><img src={c.src} alt={c.alt} loading="lazy" /></div>
              <div className="tx">
                <span className="num">{String(k + 1).padStart(2, '0')}</span>
                <h3>{c.title}{c.soft && <> <span className="soft">{c.soft}</span></>}</h3>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
