import { Reveal } from '../lib/motion.jsx';
import { Steps } from './atoms.jsx';

const STEPS = [
  {
    label: 'Browse locally',
    body: 'Real deals near you right now, on services and products, filtered by what you actually want.',
    src: '/site-assets/c2-feed.png',
    alt: 'Deals feed with Nike Air Max 90 trainers at 40% off, 0.4 miles away',
    overlay: (
      <div className="notif float pop">
        <span className="dot" style={{ marginTop: 5 }}></span>
        <div><b>Solestore · just now</b><p>You're 0.4 mi away. 40% off Nike Air Max 90 trainers, 4 pairs left.</p></div>
      </div>
    ),
  },
  {
    label: 'Tap & buy',
    body: 'Pay a small booking fee to secure the item. Get your QR code instantly. No forms.',
    src: '/site-assets/c4-offer-detail.png',
    alt: 'Offer detail: pay £3 now, £63 on collection, choose your size',
  },
  {
    label: 'Redeem & go',
    body: 'Show your QR code in-store. Pay the balance to the retailer directly, or select home delivery where available and pay the retailer in-app.',
    src: '/site-assets/c6-my-deals-qr.png',
    alt: 'My deals screen with a QR code to show at the Solestore counter',
  },
];

export default function CustomerHowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <Reveal className="head c">
          <span className="kick">Browse. Buy. Redeem. Done.</span>
          <h2 className="display">How it works</h2>
          <p className="lede">Just 3 screens. 60 seconds. Another great deal in the bag!</p>
        </Reveal>
        <Steps steps={STEPS} />
      </div>
    </section>
  );
}
