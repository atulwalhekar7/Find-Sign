import { useRef, useState, useEffect } from "react";
import bannerImg from "../assets/About.jpg";
import aboutContentImg from "../assets/DSC06081.jpg";
import aboutVideo from "../assets/Interview Draft (2).mp4";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // start muted (browser policy)
  const [, setShowControls] = useState(false);

  // Attempt to unmute after first user interaction (browser autoplay policy)
  useEffect(() => {
    const tryUnmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      window.removeEventListener("click", tryUnmute);
    };
    window.addEventListener("click", tryUnmute);
    return () => window.removeEventListener("click", tryUnmute);
  }, []);

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  return (
    <>
      {/* ─────────────────────────────────────────
          SECTION 1 — Hero Banner
      ───────────────────────────────────────── */}
      <section className="hero-banner">
        <div className="hero-overlay" />
        <div className="hero-box">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Find & Sign</p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 2 — Panel Image + Content
      ───────────────────────────────────────── */}
      <section className="panel-section">
        <div className="panel-inner">
          {/* Left Image */}
          <div className="panel-image-wrap">
            <img
              src={aboutContentImg}
              alt="About Find & Sign"
              className="panel-image"
            />
          </div>

          {/* Right Text */}
          <div className="panel-text">
            <div className="panel-heading-block">
              <h2 className="panel-heading">About Find & Sign</h2>
              <p className="panel-subheading">Subheading</p>
            </div>
            <p className="panel-body">
              Body text for your whole article or post. We'll put in some lorem
              ipsum to show how a filled-out page might look.
            </p>
            <p className="panel-body">
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi intricate
              Content. Qui international first-class nulla ut. Punctual
              adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
              izakaya charming Scandinavian impeccable aute quality of life soft
              power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
              et Porter destination Toto remarkable officia Helsinki excepteur
              Basset hound. Zürich sleepy perfect consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 3 — Hero Video Slot
      ───────────────────────────────────────── */}
      <section className="video-section">
        <div
          className="video-inner"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(true)} /* always visible */
        >
          {/* Video element — NOT muted so audio plays */}
          <video
            ref={videoRef}
            src={aboutVideo}
            autoPlay
            loop
            muted        /* starts muted due to browser policy; unmuted on first click */
            playsInline
            className="video-el"
          />

          {/* Dark overlay */}
          <div className="video-overlay" />

          {/* ── Centre controls ── */}
          <div className="video-controls">
            {/* Play / Pause button */}
            <button
              className="ctrl-btn play-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                /* Pause icon */
                <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                  <rect x="5" y="3" width="4" height="18" rx="1" />
                  <rect x="15" y="3" width="4" height="18" rx="1" />
                </svg>
              ) : (
                /* Play icon */
                <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            {/* Mute / Unmute button */}
            <button
              className="ctrl-btn mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                /* Muted icon */
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                /* Unmuted icon */
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>

          {/* Audio hint — shown briefly on load */}
          <div className="audio-hint">
            🔇 Click anywhere to enable audio
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STYLES
      ───────────────────────────────────────── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ══════════════════════════════════════
           SECTION 1 — Hero Banner
        ══════════════════════════════════════ */
        .hero-banner {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${bannerImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
        }

        .hero-box {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 90%;
          max-width: 600px;
          margin: 0 auto;
          background: rgba(30, 30, 30, 0.85);
          padding: 48px 64px;
          border-radius: 12px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-title {
          font-family: 'GTSuper', Georgia, serif;
          font-size: clamp(32px, 6vw, 56px);
          font-weight: 500;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -1.12px;
        }

        .hero-subtitle {
          color: #cccccc;
          font-family: 'Söhne', sans-serif;
          font-size: clamp(16px, 2.5vw, 24px);
          font-weight: 300;
          line-height: 1.5;
          margin-top: 14px;
        }

        /* ══════════════════════════════════════
           SECTION 2 — Panel
        ══════════════════════════════════════ */
        .panel-section {
          width: 100%;
          background-color: #ffffff;
        }

        .panel-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px;
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .panel-image-wrap {
          flex: 0 0 calc(50% - 24px);
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 8px;
          background: #e0e0e0;
        }

        .panel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .panel-text {
          flex: 0 0 calc(50% - 24px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .panel-heading-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .panel-heading {
          font-family: 'GTSuper', Georgia, serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.25;
        }

        .panel-subheading {
          font-family: 'Söhne', sans-serif;
          font-size: 15px;
          color: #888888;
        }

        .panel-body {
          font-family: 'Söhne', sans-serif;
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.75;
          color: #444444;
        }

        /* ══════════════════════════════════════
           SECTION 3 — Video
        ══════════════════════════════════════ */
        .video-section {
          width: 100%;
          background: #111;
        }

        .video-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          height: 606px;
          overflow: hidden;
        }

        .video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          pointer-events: none;
        }

        /* ── Controls (always visible, centered) ── */
        .video-controls {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 10;
        }

        .ctrl-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        /* Big play/pause circle */
        .play-btn {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(6px);
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .play-btn:hover {
          background: rgba(255, 255, 255, 0.30);
          transform: scale(1.08);
        }

        .play-btn:active {
          transform: scale(0.96);
        }

        /* Smaller mute circle */
        .mute-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(6px);
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .mute-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.08);
        }

        .mute-btn:active {
          transform: scale(0.96);
        }

        /* ── Audio hint banner ── */
        .audio-hint {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-family: 'Söhne', sans-serif;
          font-size: 13px;
          padding: 8px 18px;
          border-radius: 20px;
          pointer-events: none;
          white-space: nowrap;
          animation: fadeOutHint 4s forwards;
          animation-delay: 2s;
        }

        @keyframes fadeOutHint {
          0%   { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; }
        }

        /* ══════════════════════════════════════
           RESPONSIVE — Tablet (≤ 900px)
        ══════════════════════════════════════ */
        @media (max-width: 900px) {
          .hero-box { padding: 36px 32px; width: 92%; }

          .panel-inner {
            flex-direction: column;
            padding: 48px 32px;
            gap: 32px;
          }
          .panel-image-wrap,
          .panel-text { flex: 0 0 100%; width: 100%; }

          .video-inner { height: 400px; }

          .play-btn { width: 60px; height: 60px; }
          .mute-btn { width: 40px; height: 40px; }
        }

        /* ══════════════════════════════════════
           RESPONSIVE — Mobile (≤ 600px)
        ══════════════════════════════════════ */
        @media (max-width: 600px) {
          .hero-box { padding: 28px 20px; width: 94%; border-radius: 8px; }

          .panel-inner { padding: 36px 20px; gap: 24px; }

          .video-inner { height: 260px; }

          .play-btn { width: 52px; height: 52px; }
          .mute-btn { width: 36px; height: 36px; }

          .audio-hint { font-size: 11px; padding: 6px 14px; }
        }

        /* ══════════════════════════════════════
           RESPONSIVE — Small Mobile (≤ 400px)
        ══════════════════════════════════════ */
        @media (max-width: 400px) {
          .panel-inner { padding: 28px 16px; }
          .video-inner { height: 200px; }
        }

        /* Disable parallax on mobile */
        @media (max-width: 768px) {
          .hero-banner { background-attachment: scroll; }
        }
      `}</style>
      <SimpleGetInTouch />
      <SimpleFooter />
    </>
  );
}
