import Reveal from './Reveal.jsx';

const CARDS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'Time-bound inventory has no second chance',
    body: "Unlike products on a shelf, a missed appointment or unsold seating can't be sold tomorrow. Once the clock passes, that value is gone for good.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: "Small businesses can't compete on visibility",
    body: 'Big chains run promotions with dedicated marketing teams. The independent shop on the corner has never had an easy way to say "we\'re quiet right now, come save."',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'Customers want spontaneity, not spam',
    body: 'People already act fast on time-limited local deals. They just need them delivered at the right moment, for the right category, without noise.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: 'The gap has simply never been filled',
    body: 'No platform today matches real-time local availability with real-time local demand. We built one, free for both sides to use.',
  },
];

export default function Why() {
  return (
    <section id="why" className="section-pad surface">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why we exist</span>
          <h2>Independent businesses lose money every single hour, quietly.</h2>
          <p>An empty barber's chair at 3pm. A half-full yoga class. A table for two nobody booked. That time, and the revenue in it, vanishes the second it passes, with no way to get it back.</p>
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
