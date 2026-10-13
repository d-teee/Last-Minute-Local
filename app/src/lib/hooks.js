import { useEffect, useState } from 'react';

const SITE_URL = 'https://lastminutelocal.co.uk';

function upsert(selector, make) {
  return document.querySelector(selector) || document.head.appendChild(make());
}

// Sets the tab title and keeps <link rel="canonical">/<meta property="og:url">
// (and, optionally, a <link rel="alternate"> to the other page) in sync with
// the current route. This is a client-side SPA, so it only reaches crawlers
// that execute JS - a real SSR/prerender pass would be needed for others.
export function useDocumentMeta({ title, path, altPath, altTitle }) {
  useEffect(() => {
    document.title = title;
    const url = `${SITE_URL}${path}`;

    const canonical = upsert('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }));
    canonical.setAttribute('href', url);

    const og = upsert('meta[property="og:url"]', () => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:url');
      return el;
    });
    og.setAttribute('content', url);

    if (altPath) {
      const alt = upsert('link[rel="alternate"]', () => Object.assign(document.createElement('link'), { rel: 'alternate' }));
      alt.setAttribute('href', `${SITE_URL}${altPath}`);
      alt.setAttribute('title', altTitle || '');
    } else {
      document.querySelector('link[rel="alternate"]')?.remove();
    }
  }, [title, path, altPath, altTitle]);
}

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
