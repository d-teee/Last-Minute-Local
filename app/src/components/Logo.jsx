export default function Logo({ width = 26, height = 31 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 120" aria-hidden="true">
      <path d="M50 4 C 24 4, 8 24, 8 49 C 8 80, 50 116, 50 116 C 50 116, 92 80, 92 49 C 92 24, 76 4, 50 4 Z" fill="#3DBFA0" />
      <circle cx="50" cy="49" r="24" fill="#fff" />
      <line x1="50" y1="49" x2="50" y2="36" stroke="#3DBFA0" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="49" x2="61" y2="51" stroke="#3DBFA0" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="49" r="2.8" fill="#3DBFA0" />
    </svg>
  );
}
