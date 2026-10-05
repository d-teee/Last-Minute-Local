import { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import CustomerHero from '../components/CustomerHero.jsx';
import CustomerHowItWorks from '../components/CustomerHowItWorks.jsx';
import CustomerWhy from '../components/CustomerWhy.jsx';
import CustomerWaitlist from '../components/CustomerWaitlist.jsx';
import Footer from '../components/Footer.jsx';
import { Ticker } from '../components/atoms.jsx';

const TICKER = [
  ["Frank's Barbers", 'Cut & blow-dry · 40% off'],
  ['Solestore', 'Nike Air Max 90 · 40% off'],
  ['Crownhill Bakery', 'End-of-day box · 60% off'],
  ['Little Italy', 'Two courses for two · 35% off'],
  ['Bayside Yoga', 'Vinyasa, 6:30pm · 40% off'],
  ['Bloom & Ash', 'Ganni check blazer · 50% off'],
];

export default function CustomerPage() {
  useEffect(() => {
    document.title = 'Last Minute Local: Big daily deals, straight to your phone';
  }, []);

  return (
    <>
      <Nav variant="customer" />
      <main id="top">
        <CustomerHero />
        <Ticker items={TICKER} />
        <CustomerHowItWorks />
        <CustomerWhy />
        <CustomerWaitlist />
      </main>
      <Footer variant="customer" />
    </>
  );
}
