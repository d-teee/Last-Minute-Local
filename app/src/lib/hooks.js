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
export function useSequence(count) {
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
    timer = setTimeout(step, 1200);
    return () => clearTimeout(timer);
  }, [reduce, count]);
  return shown;
}
