import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo width={20} height={24} />
          Last Minute Local
        </div>
        <p className="footer-note">&copy; 2026 Last Minute Local. Made for the high street.</p>
        <div className="footer-links">
          <a href="#why">Why we exist</a>
          <a href="#how">How it works</a>
          <a href="#waitlist">Join waitlist</a>
        </div>
      </div>
    </footer>
  );
}
