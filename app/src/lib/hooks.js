import { useEffect, useState } from 'react';

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion() {
  const [reduce, setReduce] = useState(() => window.matchMedia(REDUCE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(REDUCE_QUERY);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduce;
}

// Reveals `count` items one by one, holds, then starts again. Returns how many are showing.
export function useSequence(count, firstDelay = 1200) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? count : 0);
  useEffect(() => {
    if (reduce) {
      setShown(count);
      return undefined;
    }
    let n = 0;
    let timer;
    const step = () => {
      if (n < count) {
        n += 1;
        setShown(n);
        timer = setTimeout(step, 1700);
      } else {
        timer = setTimeout(() => {
          n = 0;
          setShown(0);
          timer = setTimeout(step, 900);
        }, 3600);
      }
    };
    setShown(0);
    timer = setTimeout(step, firstDelay);
    return () => clearTimeout(timer);
  }, [reduce, count, firstDelay]);
  return shown;
}

// True one frame after mount. Hero overlays key their delayed entrance off it,
// so the app screenshot is seen on its own before anything pops in over it.
export function useReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return ready;
}
