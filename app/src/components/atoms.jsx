// Small presentational pieces shared by both landing pages.
import { Reveal } from '../lib/motion.jsx';

export function TagIcon({ size = 16, stroke = '#04211a', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11.5 3.5H20v8.5l-8.6 8.6a2 2 0 01-2.8 0L3.4 15a2 2 0 010-2.8l8.1-8.7Z" stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function Notif({ title, body, time, icon = <TagIcon />, className = '', style }) {
  return (
    <div className={`notif${className ? ` ${className}` : ''}`} style={style}>
      <span className="ic">{icon}</span>
      <div><b>{title}</b><p>{body}</p></div>
      {time && <span className="t">{time}</span>}
    </div>
  );
}

// App deal card: photo, gradient, sticker, business name and a mono detail.
export function DealCard({ className = 'dcard', style, img, alt = '', sticker, stickerClass = 'sticker', biz, meta, phStyle, children }) {
  return (
    <div className={className} style={style}>
      <div className="ph" style={phStyle}>
        <img src={img} alt={alt} />
        {sticker && <span className={stickerClass}>{sticker}</span>}
        <div className="biz"><b>{biz}</b><span>{meta}</span></div>
      </div>
      {children && <div className="lo">{children}</div>}
    </div>
  );
}

// Real app screenshot in a phone bezel. Screens are 780x1688 @2x.
export function Shot({ src, alt, large = false, className = '', style }) {
  return (
    <div className={`shot${large ? ' lg' : ''}${className ? ` ${className}` : ''}`} style={style}>
      <img src={src} alt={alt} width="780" height="1688" loading={large ? 'eager' : 'lazy'} />
    </div>
  );
}

export function Ticker({ items }) {
  const all = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {all.map(([b, rest], k) => (
          <span key={k}><b>{b}</b>{rest}</span>
        ))}
      </div>
    </div>
  );
}

// Three-step "How it works" grid. Each step: label, caption, phone (+ optional overlay).
export function Steps({ steps }) {
  return (
    <div className="steps even">
      {steps.map((s, k) => (
        <Reveal className="step" delay={k || undefined} key={s.label}>
          <div className="step-label"><span className="step-num">{k + 1}</span>{s.label}</div>
          <p>{s.body}</p>
          <div className="frame">
            <Shot src={s.src} alt={s.alt} />
            {s.overlay}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Checkmark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 10 17 19 7" stroke="#04211a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
