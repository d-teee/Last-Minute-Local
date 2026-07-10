import { useEffect, useState } from 'react';

const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i;
const STORAGE_KEY = 'lml_waitlist_signups';

function Checkmark({ size = 18, stroke = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 10 17 19 7" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Waitlist({ audience, onSelectAudience }) {
  const [errors, setErrors] = useState({ customer: false, business: false });
  const [success, setSuccess] = useState(null); // null | { kind, business }

  // Switching audience (from here or the hero CTAs) dismisses any success state,
  // matching the prototype's switchWaitlist() behavior.
  useEffect(() => {
    setSuccess(null);
  }, [audience]);

  function handleSubmit(evt, kind) {
    evt.preventDefault();
    const form = evt.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const valid = UK_POSTCODE_RE.test((data.postcode || '').trim());
    setErrors((prev) => ({ ...prev, [kind]: !valid }));
    if (!valid) {
      form.querySelector(`#${kind}-postcode`).focus();
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      existing.push({ kind, ...data, ts: Date.now() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // localStorage unavailable (private browsing, etc.) - non-fatal for this placeholder
    }

    setSuccess({ kind, business: data.business });
  }

  return (
    <section id="waitlist" className="section-pad">
      <div className="wrap">
        <div className="waitlist">
          <div className="waitlist-head">
            <span className="eyebrow">Join the waitlist</span>
            <h2>Be first in line when we go live.</h2>
            <p>We're onboarding our first businesses and customers in Brighton now, with more high streets following right after. Tell us who you are and we'll let you know the moment it's your turn.</p>
          </div>

          <div className="wl-toggle">
            <button className={audience === 'customer' ? 'active' : ''} onClick={() => onSelectAudience('customer')}>I'm a customer</button>
            <button className={audience === 'business' ? 'active' : ''} onClick={() => onSelectAudience('business')}>I'm a business</button>
          </div>

          <div className="wl-form-wrap">
            {!success && audience === 'customer' && (
              <form className="wl-form active" onSubmit={(e) => handleSubmit(e, 'customer')}>
                <div className="wl-row">
                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="text" name="postcode" id="customer-postcode" placeholder="UK postcode, e.g. BN1 1AA" autoCapitalize="characters" className={errors.customer ? 'invalid' : ''} required />
                </div>
                <p className={`wl-error${errors.customer ? ' active' : ''}`}>Please enter a valid UK postcode.</p>
                <button type="submit" className="wl-submit">Get early access</button>
                <p className="wl-fineprint">Free forever. Unsubscribe any time. We'll never sell your data.</p>
              </form>
            )}

            {!success && audience === 'business' && (
              <form className="wl-form active" onSubmit={(e) => handleSubmit(e, 'business')}>
                <div className="wl-row">
                  <input type="text" name="business" placeholder="Business name" required />
                  <select name="category" defaultValue="" required>
                    <option value="" disabled>Business type</option>
                    <option>Hair &amp; beauty</option>
                    <option>Fitness &amp; wellness</option>
                    <option>Restaurant &amp; café</option>
                    <option>Retail &amp; boutique</option>
                    <option>Other services</option>
                  </select>
                </div>
                <div className="wl-row">
                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="text" name="postcode" id="business-postcode" placeholder="UK postcode, e.g. BN1 1AA" autoCapitalize="characters" className={errors.business ? 'invalid' : ''} required />
                </div>
                <p className={`wl-error${errors.business ? ' active' : ''}`}>Please enter a valid UK postcode.</p>
                <button type="submit" className="wl-submit">List your business</button>
                <p className="wl-fineprint">Free to join. No commission until you choose to promote a deal.</p>
              </form>
            )}

            <div className={`wl-success${success ? ' active' : ''}`}>
              <div className="check"><Checkmark /></div>
              <div>
                <h4>You're on the list.</h4>
                <p>
                  {success?.kind === 'business'
                    ? `We'll be in touch to get ${success.business || 'your business'} set up before we launch.`
                    : "We'll email you the moment deals go live near you."}
                </p>
              </div>
            </div>
          </div>

          <p className="wl-contact">Investor or potential partner? <a href="mailto:hello@lastminutelocal.co?subject=Investor%20enquiry">Get in touch</a>.</p>
        </div>
      </div>
    </section>
  );
}
