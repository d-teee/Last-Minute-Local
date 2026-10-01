// The app's pin mark. `pin` and `ring` swap for dark (nav) and light (footer) grounds.
export default function Logo({ width = 24, height = 28, pin = '#7FE3C0', ring = '#071B16' }) {
  return (
    <svg viewBox="0 0 44 52" width={width} height={height} aria-hidden="true">
      <path d="M22 2.5c10.4 0 18.8 8.2 18.8 18.4 0 9.6-8.9 19.7-15.4 27.3a4.5 4.5 0 01-6.8 0C12.1 40.6 3.2 30.5 3.2 20.9 3.2 10.7 11.6 2.5 22 2.5Z" fill={pin} />
      <circle cx="22" cy="21" r="10.4" fill="none" stroke={ring} strokeWidth="3.6" strokeDasharray="48 18" strokeLinecap="round" transform="rotate(-90 22 21)" />
    </svg>
  );
}
