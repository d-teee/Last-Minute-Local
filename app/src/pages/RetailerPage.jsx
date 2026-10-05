import { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import RetailerHero from '../components/RetailerHero.jsx';
import RetailerWhy from '../components/RetailerWhy.jsx';
import RetailerOffers from '../components/RetailerOffers.jsx';
import RetailerHowItWorks from '../components/RetailerHowItWorks.jsx';
import AI from '../components/AI.jsx';
import GetStarted from '../components/GetStarted.jsx';
import RetailerWaitlist from '../components/RetailerWaitlist.jsx';
import Footer from '../components/Footer.jsx';
import { Ticker } from '../components/atoms.jsx';

const TICKER = [
  ['Barbers', 'empty chairs'],
  ['Restaurants', 'unbooked tables'],
  ['Sportswear', "last season's stock"],
  ['Bakeries', 'end-of-day bakes'],
  ['Yoga studios', 'half-full classes'],
  ['Boutiques', 'slow-moving rails'],
  ['Takeaways', 'quiet evenings'],
  ['Homewares', 'overstock'],
];

export default function RetailerPage() {
  useEffect(() => {
    document.title = 'Last Minute Local for Business: Move your stock. Find last minute bookings.';
  }, []);

  return (
    <>
      <Nav variant="retailer" />
      <main id="top">
        <RetailerHero />
        <Ticker items={TICKER} />
        <RetailerWhy />
        <RetailerOffers />
        <RetailerHowItWorks />
        <AI />
        <GetStarted />
        <RetailerWaitlist />
      </main>
      <Footer variant="retailer" />
    </>
  );
}
