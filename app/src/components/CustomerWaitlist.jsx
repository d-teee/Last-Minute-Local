import { Link } from 'react-router-dom';
import { Ladder, Reveal } from '../lib/motion.jsx';
import { useWaitlist } from '../lib/waitlist.js';
import { Checkmark, DealCard } from './atoms.jsx';

const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=75`;

export default function CustomerWaitlist() {
  const { invalid, success, submitting, submitError, handleSubmit } = useWaitlist({
    kind: 'customer',
    postcodeId: 'customer-postcode',
    subject: () => 'Waitlist: customer signup',
  });

  return (
    <section id="waitlist" className="section">
      <div className="wrap">
        <Reveal className="waitlist">
          <div>
            <span className="kick">Join the waitlist</span>
            <h2 className="display">Be first in line when we go live.</h2>
            <p className="lede">We're onboarding our first customers in Brighton now, with more high streets following right after. Leave your details and we'll let you know the moment it's your turn.</p>

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

          <div className="wl-art" aria-hidden="true">
            <DealCard className="dcard float" style={{ left: 10, top: 10, rotate: '-6deg' }} phStyle={{ height: 150 }} img={unsplash('photo-1599901860904-17e6ed7083a0')} sticker="40% off" biz="Bayside Yoga" meta="0.2 mi" />
            <DealCard className="dcard float" style={{ right: 0, top: 150, rotate: '5deg', animationDelay: '-3s', zIndex: 2 }} phStyle={{ height: 150 }} img={unsplash('photo-1542291026-7eec264c27ff')} sticker="40% off" biz="Solestore" meta="0.4 mi">
              <div className="item">Nike Air Max 90</div>
              <Ladder prices={['£110', '£77', '£66', '£60']} start={1} interval={2400} />
            </DealCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
