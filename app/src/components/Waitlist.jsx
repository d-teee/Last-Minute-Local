import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';

const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Switching audience (from here or the hero CTAs) dismisses any success state,
  // matching the prototype's switchWaitlist() behavior.
  useEffect(() => {
    setSuccess(null);
    setSubmitError(null);
  }, [audience]);

  async function handleSubmit(evt, kind) {
    evt.preventDefault();
    const form = evt.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const valid = UK_POSTCODE_RE.test((data.postcode || '').trim());
    setErrors((prev) => ({ ...prev, [kind]: !valid }));
    if (!valid) {
      form.querySelector(`#${kind}-postcode`).focus();
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      console.error('VITE_FORMSPREE_ENDPOINT is not set - waitlist submissions have nowhere to go.');
      setSubmitError("Sign-ups aren't connected yet. Please try again later.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          kind,
          _subject: kind === 'business'
            ? `Waitlist: business signup - ${data.business || 'unnamed'}`
            : 'Waitlist: customer signup',
        }),
      });

      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);

      setSuccess({ kind, business: data.business });
      form.reset();
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      setSubmitError("Something went wrong sending your details. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="section-pad">
      <div className="wrap">
        <div className="waitlist">
          <Reveal className="waitlist-head">
            <span className="eyebrow">Join the waitlist</span>
            <h2>Be first in line when we go live.</h2>
            <p>We're onboarding our first businesses and customers in Brighton now, with more high streets following right after. Tell us who you are and we'll let you know the moment it's your turn.</p>
          </Reveal>

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
                {submitError && <p className="wl-error active">{submitError}</p>}
                <button type="submit" className="wl-submit" disabled={submitting}>{submitting ? 'Submitting…' : 'Get early access'}</button>
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
                {submitError && <p className="wl-error active">{submitError}</p>}
                <button type="submit" className="wl-submit" disabled={submitting}>{submitting ? 'Submitting…' : 'List your business'}</button>
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
