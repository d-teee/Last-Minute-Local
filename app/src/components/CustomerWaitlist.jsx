import { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function CustomerWaitlist() {
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const valid = UK_POSTCODE_RE.test((data.postcode || '').trim());
    setInvalid(!valid);
    if (!valid) {
      form.querySelector('#customer-postcode').focus();
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
        body: JSON.stringify({ ...data, kind: 'customer', _subject: 'Waitlist: customer signup' }),
      });

      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      setSubmitError('Something went wrong sending your details. Please try again, or email us directly.');
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
            <p>We're onboarding our first customers in Brighton now, with more high streets following right after. Leave your details and we'll let you know the moment it's your turn.</p>
          </Reveal>

          <div className="wl-form-wrap">
            {!success && (
              <form className="wl-form" onSubmit={handleSubmit}>
                <div className="wl-row">
                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="text" name="postcode" id="customer-postcode" placeholder="UK postcode, e.g. BN1 1AA" autoCapitalize="characters" className={invalid ? 'invalid' : ''} required />
                </div>
                <p className={`wl-error${invalid ? ' active' : ''}`}>Please enter a valid UK postcode.</p>
                {submitError && <p className="wl-error active">{submitError}</p>}
                <button type="submit" className="wl-submit" disabled={submitting}>{submitting ? 'Submitting…' : 'Register for early access'}</button>
                <p className="wl-fineprint">Free forever. Unsubscribe any time. We'll never sell your data.</p>
              </form>
            )}

            <div className={`wl-success${success ? ' active' : ''}`}>
              <div className="check"><Checkmark /></div>
              <div>
                <h4>You're on the list.</h4>
                <p>We'll email you the moment deals go live near you.</p>
              </div>
            </div>
          </div>

          <p className="wl-contact">Run a local business instead? <Link to="/business">Visit the business site</Link>.</p>
        </div>
      </div>
    </section>
  );
}
