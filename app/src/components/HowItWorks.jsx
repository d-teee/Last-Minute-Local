import Reveal from './Reveal.jsx';

function Checkmark() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 10 17 19 7" stroke="#3DBFA0" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QrCode() {
  return (
    <svg width="52" height="52" viewBox="0 0 8 8" shapeRendering="crispEdges">
      <rect width="8" height="8" fill="#fff" />
      <g fill="#2C2C2C">
        <rect x="0" y="0" width="3" height="3" /><rect x="1" y="1" width="1" height="1" fill="#fff" />
        <rect x="5" y="0" width="3" height="3" /><rect x="6" y="1" width="1" height="1" fill="#fff" />
        <rect x="0" y="5" width="3" height="3" /><rect x="1" y="6" width="1" height="1" fill="#fff" />
        <rect x="4" y="3" width="1" height="1" /><rect x="3" y="4" width="1" height="1" />
        <rect x="5" y="4" width="1" height="1" /><rect x="4" y="5" width="1" height="1" />
        <rect x="6" y="5" width="1" height="1" /><rect x="3" y="6" width="1" height="1" />
        <rect x="5" y="6" width="1" height="1" /><rect x="7" y="4" width="1" height="1" />
        <rect x="7" y="6" width="1" height="1" />
      </g>
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2>Browse. Buy. Redeem. Done.</h2>
          <p>Just 3 screens. 60 seconds. Another great deal in the bag!</p>
        </Reveal>

        <div className="journey">
          <Reveal className="journey-step">
            <div className="journey-label"><span className="jnum">1</span> Browse locally</div>
            <div className="phone sp-mini">
              <div className="notch"></div>
              <div className="screen">
                <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
                <div className="app-header">
                  <div className="t">Nearby deals</div>
                  <div className="l">&#128205; Brighton &middot; 1 mi</div>
                </div>
                <div className="deal">
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#374151,#111827)' }}>
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" alt="" loading="lazy" decoding="async" onError={(e) => e.target.remove()} />
                    <span className="disc">35%</span><span className="timer">&#9201; 03:10</span>
                  </div>
                  <div className="meta"><div className="name">Solestore</div><div className="desc">Trainers &middot; 0.3 mi</div></div>
                </div>
                <div className="deal" style={{ marginBottom: 0 }}>
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#F59E0B,#FCD34D)' }}>
                    <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=500&q=80" alt="" loading="lazy" decoding="async" onError={(e) => e.target.remove()} />
                    <span className="disc">30%</span><span className="timer red">&#9201; 00:18</span>
                  </div>
                  <div className="meta"><div className="name">Bayside Yoga</div><div className="desc">5pm flow &middot; 0.2 mi</div></div>
                </div>
              </div>
            </div>
            <p className="journey-caption">Real deals near you right now, on services and products, filtered by what you actually want.</p>
          </Reveal>

          <Reveal className="journey-step" delay={100}>
            <div className="journey-label"><span className="jnum">2</span> Tap &amp; buy</div>
            <div className="phone sp-mini">
              <div className="notch"></div>
              <div className="screen">
                <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
                <div style={{ padding: '10px 14px 0', fontSize: '11px', color: 'var(--grey)' }}>&larr; Back</div>
                <div className="deal" style={{ margin: '10px 12px 8px' }}>
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#374151,#111827)', height: '84px' }}>
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" alt="" loading="lazy" decoding="async" onError={(e) => e.target.remove()} />
                    <span className="disc">35% off</span><span className="timer">&#9201; 03:10</span>
                  </div>
                  <div className="meta"><div className="name">Solestore</div><div className="desc">Last season trainers &middot; 0.3 mi</div></div>
                </div>
                <div className="sp-qr"><QrCode /></div>
                <div className="sp-cta">Paid &middot; tap to redeem</div>
              </div>
            </div>
            <p className="journey-caption">Pay the retailer directly in-app and get a QR code instantly. No forms.</p>
          </Reveal>

          <Reveal className="journey-step" delay={200}>
            <div className="journey-label"><span className="jnum">3</span> Redeem &amp; go</div>
            <div className="phone sp-mini">
              <div className="notch"></div>
              <div className="screen" style={{ background: 'var(--teal)' }}>
                <div className="status" style={{ color: '#fff' }}><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
                <div className="sp-redeem-body">
                  <div className="sp-check"><Checkmark /></div>
                  <p style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: '#fff' }}>Redeemed!</p>
                  <p style={{ fontSize: '11px', opacity: 0.85, margin: '6px 0 0', color: '#fff', maxWidth: '150px', textAlign: 'center' }}>Show your QR code in shop, or choose home delivery where it's on offer.</p>
                </div>
              </div>
            </div>
            <p className="journey-caption">Show your QR code in shop and pay the retailer directly, or select home delivery where available.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
