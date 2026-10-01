import { Reveal } from '../lib/motion.jsx';
import { Steps } from './atoms.jsx';

const STEPS = [
  {
    label: 'Scan it or snap it',
    body: 'Scan the barcode or take a photo. We fill in the title, description and usual price for you.',
    src: '/site-assets/r3-what-are-you-offering.png',
    alt: 'Nike Air Max 90 found in the catalogue with title, description and usual price filled in',
  },
  {
    label: 'Set your floor',
    body: "Choose the lowest price you'll accept. Our AI suggests where to start and when to step down.",
    src: '/site-assets/r4-set-your-price.png',
    alt: 'Set your price screen with a suggested starting discount and a 45% floor',
  },
  {
    label: 'Watch it sell',
    body: 'Your offer goes straight to local customers. Track views, claims and takings live. Customers pay you the balance when they collect.',
    src: '/site-assets/r6-live-offer.png',
    alt: 'Live offer screen showing the current price, units claimed, views and takings',
  },
];

export default function RetailerHowItWorks() {
  return (
    <section id="how" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="head c">
          <span className="kick">Three taps to live</span>
          <h2 className="display">Here's how it works&hellip;</h2>
        </Reveal>
        <Steps steps={STEPS} />
      </div>
    </section>
  );
}
