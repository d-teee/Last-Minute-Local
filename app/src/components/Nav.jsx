import Logo from './Logo.jsx';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <Logo />
          Last Minute Local
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why we exist</a>
          <a href="#ai">The AI</a>
          <a href="#business">For business</a>
        </nav>
        <a href="#waitlist" className="btn btn-primary btn-sm">Join the waitlist</a>
      </div>
    </header>
  );
}
