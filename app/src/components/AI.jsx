import Reveal from './Reveal.jsx';

const STAGES = [
  { time: '2 hrs left', pct: '10% off' },
  { time: '45 min left', pct: '25% off' },
  { time: '15 min left', pct: '40% off' },
  { time: 'Last call', pct: '55% off', urgent: true },
];

export default function AI() {
  return (
    <section id="ai" className="section-pad">
      <div className="wrap">
        <div className="ai-grid">
          <Reveal className="ai-copy">
            <span className="eyebrow">Your AI Buddy</span>
            <h2>You set the minimum price. Let the AI do the heavy lifting. No hassle. No panic.</h2>
            <p>The moment you post your discounted offer onto the platform, our pricing engine starts to automatically calibrate the level of interest in your offer and the time left before the offer expires. The AI never goes below the minimum price level you've set. It will calculate the best price for you that reflects how long your deal has to run.</p>
            <div className="ai-chips">
              <span className="pill-tag">You set the floor</span>
              <span className="pill-tag">Repriced in real time</span>
              <span className="pill-tag">Zero manual work</span>
            </div>
          </Reveal>
          <Reveal className="surge" delay={120}>
            <div className="surge-line"></div>
            {STAGES.map((stage) => (
              <div className={`surge-stage${stage.urgent ? ' urgent' : ''}`} key={stage.time}>
                <div className="surge-time">{stage.time}</div>
                <div className="surge-dot"></div>
                <div className="surge-pct">{stage.pct}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
