import { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import RetailerHero from '../components/RetailerHero.jsx';
import ProblemList from '../components/ProblemList.jsx';
import AI from '../components/AI.jsx';
import GetStarted from '../components/GetStarted.jsx';
import RetailerWaitlist from '../components/RetailerWaitlist.jsx';
import Footer from '../components/Footer.jsx';

export default function RetailerPage() {
  useEffect(() => {
    document.title = 'Last Minute Local for Business: Fill the chair. Move the stock.';
  }, []);

  return (
    <>
      <Nav variant="retailer" />
      <main id="top">
        <RetailerHero />
        <ProblemList />
        <AI />
        <GetStarted />
        <RetailerWaitlist />
      </main>
      <Footer variant="retailer" />
    </>
  );
}
