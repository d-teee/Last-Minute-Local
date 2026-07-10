import Reveal from './Reveal.jsx';

export default function Hero({ onSelectAudience }) {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <Reveal>
          <div className="badge-live"><span className="dot"></span> Launching first in Brighton, UK</div>
          <h1>Local deals that find you <em>before they're gone.</em></h1>
          <p className="sub">Last Minute Local pushes real-time discounts from nearby shops, salons and restaurants straight to your phone, the moment they need filling.</p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-primary" onClick={() => onSelectAudience('customer')}>Get early access</a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
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
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#F59E0B,#FCD34D)' }}>
                    <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                    <span className="disc">30% off</span><span className="timer red">&#9201; 00:18</span>
                  </div>
                  <div className="meta"><div className="name">Bayside Yoga</div><div className="desc">5pm flow &middot; 0.2 mi</div></div>
                </div>
                <div className="deal" style={{ marginBottom: 0 }}>
                  <div className="photo" style={{ background: 'linear-gradient(135deg,#1F7E68,#3DBFA0)' }}>
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                    <span className="disc">25% off</span><span className="timer">&#9201; 01:12</span>
                  </div>
                  <div className="meta"><div className="name">LittleItaly</div><div className="desc">Dinner for two &middot; 0.6 mi</div></div>
                </div>
              </div>
            </div>

            <div className="float-banner">
              <span className="fb-dot"></span>
              <div>
                <p className="fb-title">Frank's Barbers &middot; just now</p>
                <p className="fb-body">You're 80m away. 40% off a cut, 3pm slot free.</p>
              </div>
            </div>

            <div className="float-toast"><span className="ft-check">&#10003;</span> Saved &pound;14 at Frank's</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
