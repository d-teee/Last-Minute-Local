import { Reveal } from '../lib/motion.jsx';

const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.5 3.5H20v8.5l-8.6 8.6a2 2 0 01-2.8 0L3.4 15a2 2 0 010-2.8l8.1-8.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="1.4" fill="currentColor" />
      </svg>
    ),
    title: 'Free to list your products & services',
    body: 'Create an account and start posting live offers, on products or services, in minutes. So simple, no tech skills needed. Snap a photo, set your price, done.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 44 52" fill="none">
        <path d="M22 2.5c10.4 0 18.8 8.2 18.8 18.4 0 9.6-8.9 19.7-15.4 27.3a4.5 4.5 0 01-6.8 0C12.1 40.6 3.2 30.5 3.2 20.9 3.2 10.7 11.6 2.5 22 2.5Z" stroke="currentColor" strokeWidth="3.4" />
        <circle cx="22" cy="21" r="7" stroke="currentColor" strokeWidth="3.4" />
      </svg>
    ),
    title: 'Reach your local customers in real time, throughout the day',
    body: 'Your deal reaches people nearby who are actively looking for exactly what you offer, right now.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI always protects your margin',
    body: "Set the lowest price you'll accept. Our AI never goes below it, even as urgency builds towards expiry.",
  },
];

export default function GetStarted() {
  return (
    <section id="value" className="section">
      <div className="wrap">
        <Reveal className="head">
          <span className="kick">Get started</span>
          <h2 className="display">Get started. It's free to join. <em>No catch.</em></h2>
          <p className="lede">Turn your quietest hours and slowest-moving stock into new customers, with no marketing budget and no long-term commitment.</p>
        </Reveal>
        <div className="vcards">
          {CARDS.map((c, k) => (
            <Reveal className="vcard" delay={k || undefined} key={c.title}>
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
