import { useRef, useState } from "react";
import aboutContentImg from "../assets/DSC06081.jpg";
import aboutVideo from "../assets/Interview Draft (2).mp4";
import AboutSection from "../components/AboutSection";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import OurProcess from "../components/OurProcess";
import Banner from "../assets/About Us_Banner.jpg";
import AboutUsBanner from "../assets/About Find&Sign.jpg";
import Bec from "../assets/Bec_Bio.jpg";
import niki from "../assets/Niki_Bio.jpg";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // starts paused
  const [isMuted, setIsMuted] = useState(true);
  const [, setShowControls] = useState(false);

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

    <AboutSection
  imageSrc={AboutUsBanner}
  heading="About Find & Sign"
  subheading="Subheading"
  body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
  body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
/>

      {/* ─────────────────────────────────────────
          SECTION 3 — Video (starts paused)
      ───────────────────────────────────────── */}
      <section className="video-section">
        <div
          className="video-inner"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(true)}
        >
          {/* No autoPlay prop — video loads paused */}
          <video
            ref={videoRef}
            src={aboutVideo}
            loop
            muted
            playsInline
            poster={aboutContentImg}
            className="video-el"
          />

          <div className="video-overlay" />

          <div className="video-controls">
            <button
              className="ctrl-btn play-btn"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <rect x="5" y="3" width="4" height="18" rx="1" />
                  <rect x="15" y="3" width="4" height="18" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </button>

            <button
              className="ctrl-btn mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-banner {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${Banner});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.35); }
        .hero-box {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          width: 90%; max-width: 600px; margin: 0 auto;
          background: rgba(30,30,30,0.85); padding: 48px 64px;
          border-radius: 12px; backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .hero-title {
          font-family: 'GTSuper', Georgia, serif;
          font-size: clamp(32px, 6vw, 56px); font-weight: 500;
          color: #ffffff; line-height: 1.15; letter-spacing: -1.12px;
        }
        .hero-subtitle {
          color: #cccccc; font-family: 'Söhne', sans-serif;
          font-size: clamp(16px, 2.5vw, 24px); font-weight: 300;
          line-height: 1.5; margin-top: 14px;
        }

        .panel-section { width: 100%; background-color: #ffffff; }
        .panel-inner {
          max-width: 1200px; margin: 0 auto; padding: 64px;
          display: flex; align-items: center; gap: 48px;
        }
        .panel-image-wrap {
          flex: 0 0 calc(50% - 24px); aspect-ratio: 4/3;
          overflow: hidden; border-radius: 8px; background: #e0e0e0;
        }
        .panel-image { width: 100%; height: 100%; object-fit: cover; display: block; }
        .panel-text { flex: 0 0 calc(50% - 24px); display: flex; flex-direction: column; gap: 20px; }
        .panel-heading-block { display: flex; flex-direction: column; gap: 6px; }
        .panel-heading {
          font-family: 'GTSuper', Georgia, serif;
          font-size: clamp(22px, 3vw, 36px); font-weight: 500;
          color: #1a1a1a; line-height: 1.25;
        }
        .panel-subheading { font-family: 'Söhne', sans-serif; font-size: 15px; color: #888888; }
        .panel-body {
          font-family: 'Söhne', sans-serif;
          font-size: clamp(14px, 1.5vw, 16px); line-height: 1.75; color: #444444;
        }

.video-section {
  width: 100%;
  margin: 0;
  padding: 0;
  background: #111;
}
      .video-inner {
  position: relative;
  width: 100%;

  aspect-ratio: 16 / 9;   /* 🔥 responsive full width */
  overflow: hidden;
}
        .video-el {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .video-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.25); pointer-events: none;
        }
        .video-controls {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          gap: 12px; z-index: 10;
        }
        .ctrl-btn {
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .play-btn {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(6px);
          border: 1.5px solid rgba(255,255,255,0.5);
        }
        .play-btn:hover { background: rgba(255,255,255,0.30); transform: scale(1.08); }
        .play-btn:active { transform: scale(0.96); }
        .mute-btn {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,0.14); backdrop-filter: blur(6px);
          border: 1.5px solid rgba(255,255,255,0.4);
        }
        .mute-btn:hover { background: rgba(255,255,255,0.25); transform: scale(1.08); }
        .mute-btn:active { transform: scale(0.96); }


/* ───────── TEAM SECTION ───────── */
/* SECTION */
.team-section {
  width: 100%;
  padding: 64px 32px;
  background: #f5f5f5;
}

/* CONTAINER */
.team-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* HEADER */
.team-header {
  margin-bottom: 32px;
  
}

.team-header h2 {
color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));        
  font-family: "GT Super Display Medium";       
   font-size:44px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
  width: 100%;
}

.team-header p {
          color: #888;

 font-family: 'Sohne';
          font-size:24px;
          font-weight: 300;
  line-height: 120%;

  margin-top: 4px;
  width: 100%; /* 🔥 instead of align-self */
}

/* PANEL (the big grey box inside) */
.team-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;

  width: 100%;                 /* 🔥 important */
  box-sizing: border-box;

  padding: 40px;               /* keep this (Figma spacing) */
  background: #f0f0f0;         /* keep this (grey box) */
  border-radius: 4px;
}

/* GRID */
.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

/* CARD */
.team-card {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;

  flex: 1 0 0;
  min-width: 240px;

  padding: var(--sds-size-space-600, 20px);
  gap: var(--sds-size-space-600, 16px);

  border-radius: var(--sds-size-radius-200, 6px);
  border: var(--sds-size-stroke-border, 1px) solid var(--sds-color-border-default-default, #e5e5e5);
  background: var(--sds-color-background-default-default, #fff);

  box-sizing: border-box; /* 🔥 important */
}

/* IMAGE */
.team-img {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 160px;
  min-width: 160px;

  background: #dcdcdc;
  border-radius: 6px;

  flex-shrink: 0;
}

/* TEXT */
.team-text h3 {
  color: var(--sds-color-text-default-default, #111);

  font-family:'GTSuper';
  font-size: 300;
  
  font-weight: 20px;

  line-height: 120%;
  letter-spacing: -0.48px;

  margin-bottom: 6px;
  width: 100%; /* 🔥 instead of align-self */
}

.team-text p {
  color: var(--sds-color-text-default-secondary, #666);

  font-family: 'Söhne';
  font-size: 300;
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular, 400);

  line-height: 140%;

  width: 100%; /* 🔥 instead of align-self */
}

/* MOBILE */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-panel {
    padding: 24px;
  }
}



        @media (max-width: 900px) {
          .hero-box { padding: 36px 32px; width: 92%; }
          .panel-inner { flex-direction: column; padding: 48px 32px; gap: 32px; }
          .panel-image-wrap, .panel-text { flex: 0 0 100%; width: 100%; }
          .video-inner { height: 400px; }
          .play-btn, .mute-btn { width: 42px; height: 42px; }
        }
        @media (max-width: 600px) {
          .hero-box { padding: 28px 20px; width: 94%; border-radius: 8px; }
          .panel-inner { padding: 36px 20px; gap: 24px; }
          .video-inner { height: 260px; }
          .play-btn, .mute-btn { width: 36px; height: 36px; }
        }
        @media (max-width: 400px) {
          .panel-inner { padding: 28px 16px; }
          .video-inner { height: 200px; }
        }
        @media (max-width: 768px) {
          .hero-banner { background-attachment: scroll; }
        }
      `}</style>

{/* ─────────────────────────────────────────
    SECTION 4 — Meet the Team
───────────────────────────────────────── */}
<section className="team-section">
  <div className="team-container">

    {/* Header */}
    <div className="team-header">
      <h2>Meet the team</h2>
      <p>Subheading</p>
    </div>

    {/* Panel (pink box in your image) */}
    <div className="team-panel">

      <div className="team-grid">
        
        {/* Card 1 */}
        <div className="team-card">
<div className="team-img">
  <img
    src={Bec}
    alt="team member"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "inherit",
    }}
  />
</div>          <div className="team-text">
            <h3>Title</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="team-card">
<div className="team-img">
  <img
    src={niki}
    alt="team member"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "inherit",
    }}
  />
</div>          <div className="team-text">
            <h3>Title</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>


<OurProcess />
      <SimpleGetInTouch />
      <SimpleFooter />
    </>
  );
}
