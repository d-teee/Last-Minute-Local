import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Footer({ variant }) {
  const isRetailer = variant === 'retailer';

  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo width={20} height={24} />
          Last Minute Local{isRetailer && ' for Business'}
        </div>
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
