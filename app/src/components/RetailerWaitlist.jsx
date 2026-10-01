import { Link } from 'react-router-dom';
import { Reveal } from '../lib/motion.jsx';
import { useWaitlist } from '../lib/waitlist.js';
import { Checkmark, Shot } from './atoms.jsx';

export default function RetailerWaitlist() {
  const { invalid, success, submitting, submitError, handleSubmit } = useWaitlist({
    kind: 'business',
    postcodeId: 'business-postcode',
    subject: (data) => `Waitlist: business signup - ${data.business || 'unnamed'}`,
  });

  return (
    <section id="waitlist" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="waitlist">
          <div>
            <span className="kick">Join the waitlist</span>
            <h2 className="display">Be first in line when we go live.</h2>
            <p className="lede">We're onboarding our first businesses in Brighton now, with more high streets following right after. Tell us about your business and we'll get you set up before launch.</p>

            <div className="wl-form-wrap">
              {!success && (
                <form className="wl-form" onSubmit={handleSubmit}>
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
                    <input type="text" name="postcode" id="business-postcode" placeholder="UK postcode, e.g. BN1 1AA" autoCapitalize="characters" className={invalid ? 'invalid' : ''} required />
                  </div>
                  <p className={`wl-error${invalid ? ' active' : ''}`}>Please enter a valid UK postcode.</p>
                  {submitError && <p className="wl-error active">{submitError}</p>}
                  <button type="submit" className="wl-submit" disabled={submitting}>{submitting ? 'Submitting…' : 'List your business'}</button>
                  <p className="wl-fineprint">Free to join. No commission until you choose to promote a deal.</p>
                </form>
              )}

              <div className={`wl-success${success ? ' active' : ''}`}>
                <div className="check"><Checkmark /></div>
                <div>
                  <h4>You're on the list.</h4>
                  <p>{`We'll be in touch to get ${success?.business || 'your business'} set up before we launch.`}</p>
                </div>
              </div>
            </div>

            <p className="wl-contact">
              Looking for local deals instead? <Link to="/">Visit the customer site</Link>. Investor or partner? <a href="mailto:hello@lastminutelocal.co?subject=Investor%20enquiry">Get in touch</a>.
            </p>
          </div>

          <div className="wl-art" aria-hidden="true">
            <Shot className="float" src="/site-assets/r6-live-offer.png" alt="" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
