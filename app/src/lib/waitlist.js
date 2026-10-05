import { useState } from 'react';

const UK_POSTCODE_RE = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

// Validates the UK postcode, then posts the form to Formspree with a `kind`
// (customer | business) so the two lists can be told apart in the inbox.
export function useWaitlist({ kind, postcodeId, subject }) {
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const valid = UK_POSTCODE_RE.test((data.postcode || '').trim());
    setInvalid(!valid);
    if (!valid) {
      form.querySelector(`#${postcodeId}`).focus();
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
        body: JSON.stringify({ ...data, kind, _subject: subject(data) }),
      });

      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);

      setSuccess(data);
      form.reset();
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      setSubmitError('Something went wrong sending your details. Please try again, or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return { invalid, success, submitting, submitError, handleSubmit };
}
