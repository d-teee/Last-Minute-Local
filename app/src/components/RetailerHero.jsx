import Reveal from './Reveal.jsx';

export default function RetailerHero() {
  return (
    <section className="hero hero-retailer">
      <div className="wrap hero-inner">
        <Reveal>
          <div className="badge-live"><span className="dot"></span> Onboarding Brighton businesses now</div>
          <h1>Fill the chair. Move the stock. <em>Save the sale.</em></h1>
          <p className="sub">Turn empty appointments and unsold stock into new revenue, automatically, in real time, for free.</p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-primary">List your business</a>
            <a href="#why" className="btn btn-ghost">Why this matters</a>
          </div>
          <p className="hero-note">Free to join. No commission until you choose to promote a deal.</p>
        </Reveal>

        <Reveal className="phone-stage retailer-hero-phone" delay={150}>
          <div className="phone-frame-wrap">
            <div className="phone">
              <div className="notch"></div>
              <div className="screen">
                <div className="status"><span>9:41</span><span>&#9679;&#9679;&#9679;</span></div>
                <div className="app-header"><div className="t">New offer</div></div>
                <div className="sp-photo-add">+ Add photo of stock or slot</div>
                <div className="sp-offer-box">
                  <p className="n">Last season trainers &middot; 6 pairs</p>
                  <p className="pr">Solestore</p>
                </div>
                <div className="sp-chip-row">
                  <div className="sp-chip">25%</div>
                  <div className="sp-chip active">35%</div>
                  <div className="sp-chip">50%</div>
                </div>
                <div className="sp-offer-box">
                  <p className="n" style={{ fontWeight: 600 }}>Floor set &middot; AI won't go lower</p>
                </div>
              </div>
            </div>

            <div className="float-banner">
              <span className="fb-dot"></span>
              <div>
                <p className="fb-title">You're live &middot; just now</p>
                <p className="fb-body">Reaching 640 nearby customers with this offer.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
