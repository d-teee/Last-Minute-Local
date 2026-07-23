import Reveal from './Reveal.jsx';

const ROWS = [
  {
    num: '01',
    title: 'Your time-sensitive inventory has no second chance',
    body: "A missed hairdressing appointment or an empty restaurant table booking can't be sold tomorrow. Once the clock passes, that value is gone for good.",
  },
  {
    num: '02',
    title: 'No need to wait for Black Friday. Make your own, every day',
    body: "Discount unsold stock or an empty slot at the tap of a button and post it to Last Minute Local. Our AI runs the sale in real time. You're always in control.",
  },
  {
    num: '03',
    title: "Independent businesses can't compete on visibility",
    body: 'The big chains on your high street can afford large promotions and dedicated marketing teams. Smaller businesses have never had an easy way to get a real-time sales message out, until now.',
  },
  {
    num: '04',
    title: 'This gap has simply never been filled',
    body: 'No platform today matches real-time local discounts with real-time local demand. We\'ve built one, free for sellers and buyers alike.',
  },
];

export default function ProblemList() {
  return (
    <section id="why" className="section-pad surface">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Why this matters</span>
          <h2>Independent businesses like yours lose money every day, quietly.</h2>
          <p>An empty hairdresser's chair at 3pm. A half-full yoga class. Last season's trainers gathering dust. A table for two, still unbooked. There's never been an easy way to sell any of it before it's too late, until now.</p>
        </Reveal>
        <div className="problem-list">
          {ROWS.map((row, i) => (
            <Reveal as="div" className="problem-row" delay={i * 80} key={row.num}>
              <div className="problem-num">{row.num}</div>
              <div>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
