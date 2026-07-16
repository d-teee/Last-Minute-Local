import Reveal from './Reveal.jsx';

export default function CustomerHero() {
  return (
    <section className="hero hero-customer">
      <div className="wrap hero-inner">
        <Reveal>
          <div className="badge-live"><span className="dot"></span> Launching first in Brighton, UK</div>
          <h1>Big daily discounts from your high street, <em>the second they drop.</em></h1>
          <p className="sub">Last Minute Local pushes today's best deals from nearby shops, salons and restaurants straight to your phone the minute they're released.</p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-primary">Register for early access</a>
            <a href="#how" className="hero-how-link">
              See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
          <p className="hero-note">Free to join. No commitment. We'll email you the day we go live near you.</p>
        </Reveal>

        <Reveal className="phone-stage" delay={150}>
          <div className="phone-frame-wrap">
            <div className="phone">
              <div className="notch"></div>
              <div className="screen">
                <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
                <div className="app-header">
                  <div className="t">Nearby deals</div>
                  <div className="l">&#128205; Brighton &middot; within 1 mi</div>
                </div>
                <div className="deal">
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#2A9E82,#3DBFA0)' }}>
                    <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                    <span className="disc">40% off</span><span className="timer">&#9201; 00:42</span>
                  </div>
                  <div className="meta"><div className="name">Frank's Barbers</div><div className="desc">Cut &amp; blow-dry &middot; 0.4 mi</div></div>
                </div>
                <div className="deal">
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#374151,#111827)' }}>
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                    <span className="disc">35% off</span><span className="timer">&#9201; 03:10</span>
                  </div>
                  <div className="meta"><div className="name">Solestore</div><div className="desc">Last season trainers &middot; 0.3 mi</div></div>
                </div>
                <div className="deal" style={{ marginBottom: 0 }}>
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#1F7E68,#3DBFA0)' }}>
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                    <span className="disc">25% off</span><span className="timer red">&#9201; 01:12</span>
                  </div>
                  <div className="meta"><div className="name">LittleItaly</div><div className="desc">Dinner for two &middot; 0.6 mi</div></div>
                </div>
              </div>
            </div>

            <div className="float-banner">
              <span className="fb-dot"></span>
              <div>
                <p className="fb-title">Solestore &middot; just now</p>
                <p className="fb-body">You're 90m away. 35% off last season trainers, 6 pairs left.</p>
              </div>
            </div>

            <div className="float-toast"><span className="ft-check">&#10003;</span> Saved &pound;14 at Frank's</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
