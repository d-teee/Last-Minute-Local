// React port of design_handoff_landing_page/lml-site.js. Every effect checks
// prefers-reduced-motion and shows its final state instead of animating.
import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './hooks.js';

// Fade and rise on scroll. `delay` is 1-3, matching [data-delay] in the CSS.
export function Reveal({ as: Tag = 'div', className, delay, children, ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const cls = [className, seen || reduce ? 'in' : ''].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls || undefined} data-reveal="" data-delay={delay} {...rest}>
      {children}
    </Tag>
  );
}

const pad = (n) => String(n).padStart(2, '0');
function formatShort(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h ? `${h}h ${pad(m)}m` : `${pad(m)}:${pad(s % 60)}`;
}
function formatLong(s) {
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

// Live countdown in seconds that loops back to its start value.
export function Countdown({ seconds, long = false, className }) {
  const reduce = useReducedMotion();
  const [s, setS] = useState(seconds);
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setS((x) => (x > 0 ? x - 1 : seconds)), 1000);
    return () => clearInterval(id);
  }, [reduce, seconds]);
  return <span className={className}>{long ? formatLong(s) : formatShort(s)}</span>;
}

// Steps the current price down the ladder every `interval` ms, then resets.
export function Ladder({ prices, start = 0, interval = 2600 }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(start);
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setI((x) => (x + 1) % prices.length), interval);
    return () => clearInterval(id);
  }, [reduce, interval, prices.length]);
  return (
    <div className="ladder">
      {prices.map((p, k) => (
        <span key={p} className={k < i ? 'pst' : k === i ? 'now' : 'nxt'}>{p}</span>
      ))}
    </div>
  );
}

// Cycles stacked children, one visible at a time.
export function Cycle({ interval = 4200, className, children }) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setI((x) => (x + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [reduce, interval, items.length]);
  return (
    <div className={className} data-cycle="">
      {items.map((child, k) =>
        cloneElement(child, { className: [child.props.className, k === i ? 'on' : ''].filter(Boolean).join(' ') }),
      )}
    </div>
  );
}
