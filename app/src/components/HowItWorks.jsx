import { useState } from 'react';

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

function CustomerJourney() {
  return (
    <div className="journey">
      <div className="journey-step">
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
              <div className="photo" style={{ background: 'linear-gradient(135deg,#2A9E82,#3DBFA0)' }}>
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                <span className="disc">40%</span><span className="timer">&#9201; 00:42</span>
              </div>
              <div className="meta"><div className="name">Frank's Barbers</div><div className="desc">Cut &middot; 0.4 mi</div></div>
            </div>
            <div className="deal" style={{ marginBottom: 0 }}>
              <div className="photo" style={{ background: 'linear-gradient(135deg,#F59E0B,#FCD34D)' }}>
                <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                <span className="disc">30%</span><span className="timer red">&#9201; 00:18</span>
              </div>
              <div className="meta"><div className="name">Bayside Yoga</div><div className="desc">5pm flow &middot; 0.2 mi</div></div>
            </div>
          </div>
        </div>
        <p className="journey-caption">Real deals near you right now, filtered by what you actually want.</p>
      </div>

      <div className="journey-step">
        <div className="journey-label"><span className="jnum">2</span> Tap to claim</div>
        <div className="phone sp-mini">
          <div className="notch"></div>
          <div className="screen">
            <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
            <div style={{ padding: '10px 14px 0', fontSize: '11px', color: 'var(--grey)' }}>&larr; Back</div>
            <div className="deal" style={{ margin: '10px 12px 8px' }}>
              <div className="photo" style={{ background: 'linear-gradient(135deg,#2A9E82,#3DBFA0)', height: '84px' }}>
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80" alt="" onError={(e) => e.target.remove()} />
                <span className="disc">40% off</span><span className="timer">&#9201; 00:42</span>
              </div>
              <div className="meta"><div className="name">Frank's Barbers</div><div className="desc">Cut &amp; blow-dry &middot; 0.4 mi</div></div>
            </div>
            <div className="sp-qr"><QrCode /></div>
            <div className="sp-cta">Claimed &middot; tap to redeem</div>
          </div>
        </div>
        <p className="journey-caption">Pay the booking fee in-app and get a QR code instantly. No forms.</p>
      </div>

      <div className="journey-step">
        <div className="journey-label"><span className="jnum">3</span> Redeem &amp; go</div>
        <div className="phone sp-mini">
          <div className="notch"></div>
          <div className="screen" style={{ background: 'var(--teal)' }}>
            <div className="status" style={{ color: '#fff' }}><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
            <div className="sp-redeem-body">
              <div className="sp-check"><Checkmark /></div>
              <p style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: '#fff' }}>Redeemed!</p>
              <p style={{ fontSize: '11px', opacity: 0.85, margin: '6px 0 0', color: '#fff' }}>You saved &pound;14 at Frank's Barbers.</p>
              <div style={{ fontSize: '14px', marginTop: '14px', color: '#fff' }}>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            </div>
          </div>
        </div>
        <p className="journey-caption">Show your code in store, or pick home delivery where it's on offer.</p>
      </div>
    </div>
  );
}

function BusinessJourney() {
  return (
    <div className="journey">
      <div className="journey-step">
        <div className="journey-label"><span className="jnum">1</span> Snap a photo</div>
        <div className="phone sp-mini">
          <div className="notch"></div>
          <div className="screen">
            <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
            <div className="app-header"><div className="t">New offer</div></div>
            <div className="sp-photo-add">+ Add photo</div>
            <div className="sp-offer-box">
              <p className="n">Cut &amp; blow-dry</p>
              <p className="pr">Frank's Barbers</p>
            </div>
          </div>
        </div>
        <p className="journey-caption">Of the product, the service, or the empty chair you want to fill.</p>
      </div>

      <div className="journey-step">
        <div className="journey-label"><span className="jnum">2</span> Set your floor</div>
        <div className="phone sp-mini">
          <div className="notch"></div>
          <div className="screen">
            <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
            <div className="app-header"><div className="t">Set discount</div></div>
            <div className="sp-offer-box">
              <p className="n">Cut &amp; blow-dry</p>
              <p className="pr">&pound;35 &rarr; &pound;21</p>
            </div>
            <div className="sp-chip-row">
              <div className="sp-chip">40%</div>
              <div className="sp-chip active">50%</div>
              <div className="sp-chip">60%</div>
            </div>
            <div className="sp-offer-box" style={{ marginTop: '8px' }}>
              <p className="n" style={{ fontWeight: 600 }}>Expires in 1 hour</p>
            </div>
          </div>
        </div>
        <p className="journey-caption">Pick the lowest discount you'll accept. Our AI never goes lower.</p>
      </div>

      <div className="journey-step">
        <div className="journey-label"><span className="jnum">3</span> Go live</div>
        <div className="phone sp-mini">
          <div className="notch"></div>
          <div className="screen" style={{ background: 'var(--teal)' }}>
            <div className="status" style={{ color: '#fff' }}><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
            <div className="sp-redeem-body">
              <div className="sp-check"><Checkmark /></div>
              <p style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: '#fff' }}>You're live!</p>
              <p style={{ fontSize: '11px', opacity: 0.85, margin: '6px 0 0', color: '#fff' }}>Reaching nearby customers now.</p>
            </div>
          </div>
        </div>
        <p className="journey-caption">The offer reaches every opted-in customer nearby, instantly.</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [audience, setAudience] = useState('customer');

  return (
    <section id="how" className="section-pad">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2>Browse. Claim. Redeem. Done.</h2>
          <p>Three screens, sixty seconds, one very good deal.</p>
        </div>

        <div className="toggle-row">
          <div className="toggle">
            <button className={audience === 'customer' ? 'active' : ''} onClick={() => setAudience('customer')}>I'm a customer</button>
            <button className={audience === 'business' ? 'active' : ''} onClick={() => setAudience('business')}>I'm a business owner</button>
          </div>
        </div>

        {audience === 'customer' ? <CustomerJourney /> : <BusinessJourney />}
      </div>
    </section>
  );
}
