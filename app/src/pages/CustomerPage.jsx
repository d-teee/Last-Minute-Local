import { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import CustomerHero from '../components/CustomerHero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Why from '../components/Why.jsx';
import CustomerWaitlist from '../components/CustomerWaitlist.jsx';
import Footer from '../components/Footer.jsx';

export default function CustomerPage() {
  useEffect(() => {
    document.title = 'Last Minute Local: Big daily deals, straight to your phone';
  }, []);

  return (
    <>
      <Nav variant="customer" />
      <main id="top">
        <CustomerHero />
        <HowItWorks />
        <Why />
        <CustomerWaitlist />
      </main>
      <Footer variant="customer" />
    </>
  );
}
