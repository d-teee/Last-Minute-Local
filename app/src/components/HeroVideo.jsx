import { useEffect, useRef, useState } from 'react';

// React port of the hv-frame behaviour in design_handoff_landing_page: plays
// with sound on click (no autoplay), falls back to a "coming soon" message if
// both sources fail to load, and resets to the poster when playback ends.
export default function HeroVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;

    const fail = () => {
      if (v.currentSrc && !v.error) return;
      setPlaying(false);
      setMissing(true);
    };
    const onSourceError = () => {
      if (v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) fail();
    };

    const sources = v.querySelectorAll('source');
    sources.forEach((s) => s.addEventListener('error', onSourceError));
    v.addEventListener('error', fail);
    if (v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || v.error) fail();

    return () => {
      sources.forEach((s) => s.removeEventListener('error', onSourceError));
      v.removeEventListener('error', fail);
    };
  }, []);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.controls = true;
    v.muted = false;
    const p = v.play();
    if (p) {
      p.catch(() => {
        if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
          setMissing(true);
        }
        setPlaying(false);
      });
    }
  }

  function handleDoubleClick() {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (v.requestFullscreen) {
      v.requestFullscreen();
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen();
    }
  }

  function handleEnded() {
    setPlaying(false);
    videoRef.current?.load();
  }

  return (
    <div className="hero-video">
      <div className={`hv-frame${playing ? ' playing' : ''}`}>
        <video
          ref={videoRef}
          preload="metadata"
          playsInline
          controlsList="nodownload"
          poster="/site-assets/lml-explainer-poster.jpg"
          aria-label="Last Minute Local explainer video"
          onDoubleClick={handleDoubleClick}
          onEnded={handleEnded}
        >
          <source src="/site-assets/lml-explainer.webm" type="video/webm" />
          <source src="/site-assets/lml-explainer.mp4" type="video/mp4" />
        </video>
        {!missing && (
          <button className="hv-play" type="button" aria-label="Play the Last Minute Local explainer, with sound" onClick={handlePlay}>
            <span className="hv-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5Z" fill="#04211a" /></svg>
            </span>
            <span className="hv-lbl"><b>Watch how it works</b><span className="mono">With sound</span></span>
          </button>
        )}
        {missing && <p className="hv-miss">Explainer video coming soon</p>}
      </div>
    </div>
  );
}
