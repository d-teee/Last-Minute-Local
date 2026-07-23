import Reveal from './Reveal.jsx';

const CARDS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'Real-time, not "sale of the season"',
    body: 'No waiting for Black Friday. New discounts on services and products go live throughout every day, right where you are.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: 'Everything nearby, not just food',
    body: "Haircuts, yoga classes, last season's trainers, tonight's table for two, all in one feed, filtered to what you're after.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'No spam, just the good stuff',
    body: "You only hear about deals that match what you actually want, when you're close enough to act on them.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: 'Pay and prove it in one tap',
    body: 'Pay the retailer the small booking fee to secure the item. Get your QR code instantly. No forms.',
  },
];

export default function Why() {
  return (
    <section id="why" className="section-pad surface">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why it matters</span>
          <h2>Great local deals shouldn't need a newsletter.</h2>
          <p>The best discounts on your high street disappear within hours, sometimes minutes. Last Minute Local surfaces them the moment they go live, so you never have to go looking.</p>
        </Reveal>
        <div className="why-grid">
          {CARDS.map((card, i) => (
            <Reveal as="div" className="why-card" delay={i * 80} key={card.title}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
