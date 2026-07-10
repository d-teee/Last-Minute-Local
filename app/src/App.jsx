import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Why from './components/Why.jsx';
import AI from './components/AI.jsx';
import Business from './components/Business.jsx';
import Waitlist from './components/Waitlist.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [waitlistAudience, setWaitlistAudience] = useState('customer');

  return (
    <>
      <Nav />
      <main id="top">
        <Hero onSelectAudience={setWaitlistAudience} />
        <HowItWorks />
        <Why />
        <AI />
        <Business />
        <Waitlist audience={waitlistAudience} onSelectAudience={setWaitlistAudience} />
      </main>
      <Footer />
    </>
  );
}
