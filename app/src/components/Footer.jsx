import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Footer({ variant }) {
  const isRetailer = variant === 'retailer';

  return (
    <footer>
      <div className="wrap footer-inner">
        <a className="brand" href="#top">
          <Logo width={20} height={24} pin="#3FB894" ring="#F4F6F4" />
          Last Minute Local
          {isRetailer && <small>for Business</small>}
        </a>
        <p className="footer-note">&copy; 2026 Last Minute Local. Made for the high street.</p>
        <div className="footer-links">
          {isRetailer ? (
            <>
              <a href="#why">Why this matters</a>
              <a href="#ai">Your AI Buddy</a>
              <Link to="/">For customers</Link>
            </>
          ) : (
            <>
              <a href="#why">Why it matters</a>
              <a href="#how">How it works</a>
              <Link to="/business">For business owners</Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
