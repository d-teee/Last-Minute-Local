const STAGES = [
  { time: '2 hrs left', pct: '10% off' },
  { time: '45 min left', pct: '25% off' },
  { time: '15 min left', pct: '40% off' },
  { time: 'Last call', pct: '55% off', urgent: true },
];

export default function AI() {
  return (
    <section id="ai" className="section-pad surface">
      <div className="wrap">
        <div className="ai-grid">
          <div className="ai-copy">
            <span className="eyebrow">The AI</span>
            <h2>Our AI sets the price. Not guesswork, not panic.</h2>
            <p>The moment a slot is about to go to waste, our pricing engine starts lifting the discount in real time, calibrated to exactly how much time is left and how much interest the offer is getting. Retailers set the floor they're comfortable with. The AI never crosses it. It just finds the smallest discount that still fills the seat before the clock runs out.</p>
            <div className="ai-chips">
              <span className="pill-tag">Retailer sets the floor</span>
              <span className="pill-tag">Repriced in real time</span>
              <span className="pill-tag">Zero manual work</span>
            </div>
          </div>
          <div className="surge">
            <div className="surge-line"></div>
            {STAGES.map((stage) => (
              <div className={`surge-stage${stage.urgent ? ' urgent' : ''}`} key={stage.time}>
                <div className="surge-time">{stage.time}</div>
                <div className="surge-dot"></div>
                <div className="surge-pct">{stage.pct}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
