import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Nav({ variant }) {
  const isRetailer = variant === 'retailer';

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <Logo />
          Last Minute Local
          {isRetailer && <small>for Business</small>}
        </a>
        {isRetailer ? (
          <nav className="nav-links">
            <a href="#why">Why this matters</a>
            <a href="#how">How it works</a>
            <a href="#ai">Your AI Buddy</a>
            <a href="#value">Get started</a>
          </nav>
        ) : (
          <nav className="nav-links">
            <a href="#how">How it works</a>
            <a href="#why">Why it matters</a>
            <Link to="/business">For business owners</Link>
          </nav>
        )}
        <a href="#waitlist" className="btn sm">
          {isRetailer ? 'List your business' : 'Get early access'}
        </a>
      </div>
    </header>
  );
}
