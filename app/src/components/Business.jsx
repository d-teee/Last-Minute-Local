import Reveal from './Reveal.jsx';

const CARDS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'Free to list, always',
    body: 'Create an account and start posting live offers in minutes. No subscription, no setup fee, no catch.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: 'Reach real local demand',
    body: 'Your deal reaches people nearby who are actively looking for exactly what you offer, right now.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'AI protects your margin',
    body: "Set the lowest discount you'll accept. Our AI never goes below it, even as urgency builds toward expiry.",
  },
];

export default function Business() {
  return (
    <section id="business" className="section-pad surface">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">For business owners</span>
          <h2>Fill the chair. Save the sale. Free to join.</h2>
          <p>Turn your quietest hours into new customers, with no marketing budget and no long-term commitment.</p>
        </Reveal>
        <div className="value-strip">
          {CARDS.map((card, i) => (
            <Reveal as="div" className="value-card" delay={i * 80} key={card.title}>
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
