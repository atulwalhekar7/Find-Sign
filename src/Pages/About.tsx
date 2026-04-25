import { useRef, useState } from "react";
import aboutContentImg from "../assets/DSC06081.jpg";
import aboutVideo from "../assets/Interview Draft (2).mp4";
import AboutSection from "../components/AboutSection";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import OurProcess from "../components/OurProcess";
import Banner from "../assets/About Us_Banner.jpg";
import AboutUsBanner from "../assets/About Find & Sign 2.jpg";
import Bec from "../assets/Bec_Bio.jpg";
import niki from "../assets/Niki_Bio.jpg";
import Image1 from "../components/Image1";

import fbIcon from "../assets/Vector (2).png";
import igIcon from "../assets/Instagram (2).png";
import liIcon from "../assets/Vector(1).png";

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
        <div className="banner-overlay" />
        <div className="hero-box">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Find & Sign</p>
        </div>
      </section>

    <AboutSection
  imageSrc={AboutUsBanner}
  heading="About Find & Sign"
  // subheading="Subheading"
  body1="Find & Sign Buyer Advocate was built on the belief that every buyer should secure the right property to build equity, choice and financial freedom.
Founder Niki learnt through experience that the right guidance is critical in securing the outcome. It is identified through local knowledge, experience and direct relationships, then secured before it reaches the wider market.
We are a boutique buyers' agency operating nationwide, acting exclusively for buyers. Not agents. 
"
  body2="Not developers. We are intentionally selective about the number of clients we take on to give each brief our full attention and expert advice.
We assess every opportunity in person by walking the property, the street, and the surrounding area. Decisions are never made from photos or data alone. Because it's about identifying the opportunity and securing it early. The advantage of being first.
Find & Sign. We find with confidence. You sign with certainty.
"
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
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-attachment: scroll; /* ALWAYS scroll */
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1;
}
.hero-box {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          width: 90%; 
          max-width: 900px; 
          margin: 0 auto;
          padding: 60px 20px;
          border-radius: 12px;
          animation: heroFadeIn 0.8s ease both;
        }
.hero-title {
          font-family: 'GT Super Display Medium';
          font-size: 64px;
          font-weight: 500;
          color: #FFF;
          line-height: 1.1;
          letter-spacing: -1.28px;
          font-variant-numeric: lining-nums proportional-nums;
          margin: 0;
        }
        .hero-subtitle {
          color: #FFFFFF; 
          font-family: 'Söhne', sans-serif;
          font-size: 24px; 
          font-weight: 300;
          line-height: 1.5; 
          margin-top: 24px;
          opacity: 0.9;
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
  align-items: center;
  gap: 48px;

  width: 100%;                 /* 🔥 important */
  box-sizing: border-box;

  padding: 40px;               /* keep this (Figma spacing) */
  background: #f0f0f0;         /* keep this (grey box) */
  border-radius: 4px;
}

/* GRID */
.team-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 32px;
}

/* CARD */
.team-card {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;

  width: 100%;
  max-width: 480px;

  padding: var(--sds-size-space-600, 20px);
  gap: var(--sds-size-space-600, 16px);

  border-radius: 16px;
  border: 2px solid #69E4DC;
  background: var(--sds-color-background-default-default, #fff);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  box-sizing: border-box; /* 🔥 important */
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  cursor: pointer;
}

.team-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 10px 22px rgba(105, 228, 220, 0.96);
  border-color: #69E4DC;
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

  font-family:'GT Super Display Medium';
  font-size: 20px;
  
  font-weight: 500;

  line-height: 120%;
  letter-spacing: -0.48px;

  margin-bottom: 6px;
  width: 100%; /* 🔥 instead of align-self */
}

.team-text p {
  color: var(--sds-color-text-default-secondary, #666);

  font-family: 'Söhne';
  font-weight: 300;
  font-style: normal;
  font-weight: var(--sds-typography-body-font-weight-regular, 400);

  line-height: 140%;

  width: 100%; /* 🔥 instead of align-self */
}

/* MOBILE */
@media (max-width: 768px) {
  .team-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px;
  }

  .team-img {
    width: 100%;
    height: auto;
    min-width: auto;
    aspect-ratio: 1 / 1;
  }

  .team-text table {
    margin: 8px auto 0;
  }

  .team-panel {
    padding: 24px;
  }
}

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }


        @media (max-width: 900px) {
          .hero-box { padding: 60px 20px; width: 92%; }
          .hero-title { font-size: 44px !important; line-height: 1.2 !important; }
          .panel-inner { flex-direction: column; padding: 48px 32px; gap: 32px; }
          .panel-image-wrap, .panel-text { flex: 0 0 100%; width: 100%; }
          .video-inner { height: 400px; }
          .play-btn, .mute-btn { width: 42px; height: 42px; }
        }
        @media (max-width: 600px) {
          .hero-box { padding: 60px 20px; width: 94%; border-radius: 8px; }
          .hero-title { font-size: 36px !important; }
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
      {/* <p>Subheading</p> */}
    </div>

    {/* Panel (pink box in your image) */}
    <div className="team-panel">

      <div className="team-grid">
        
        {/* Card 1 */}
        <div className="team-card">
          <div className="team-img">
            <img
              src={niki}
              alt="Niki Nakrani"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "inherit",
              }}
            />
          </div>
          <div className="team-text">
            <h3>Niki Nakrani</h3>
            <div style={{ fontSize: "16px", fontWeight: 400, color: "#666", marginBottom: "4px" }}>
              CEO & Founder
            </div>
            <div style={{ fontSize: "12px", lineHeight: "22px" }}>
              T: 0431 158 233 <br />
              E:
              <a href="mailto:niki@findandsignba.com.au" style={{ textDecoration: "none", color: "#000" }}>
                niki@findandsignba.com.au
              </a>
            </div>

            {/* Social */}
            <table cellPadding="0" cellSpacing="0" border={0} style={{ marginTop: "8px" }}>
              <tbody>
                <tr>
                  <td width="16">
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer">
                      <img src={fbIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="Facebook" />
                    </a>
                  </td>
                  <td width="16" style={{ paddingLeft: "16px" }}>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer">
                      <img src={igIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="Instagram" />
                    </a>
                  </td>
                  <td width="16" style={{ paddingLeft: "16px" }}>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer">
                      <img src={liIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="LinkedIn" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Card 2 */}
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
          </div>
          <div className="team-text">
            <h3>Rebecca Nakrani</h3>
            <div style={{ fontSize: "16px", fontWeight: 400, color: "#666", marginBottom: "4px" }}>
              Client Operations Manager
            </div>
            <div style={{ fontSize: "12px", lineHeight: "22px" }}>
              E:
              <a href="mailto:info@findandsignba.com.au" style={{ textDecoration: "none", color: "#000" }}>
                info@findandsignba.com.au
              </a>
            </div>

            {/* Social */}
            <table cellPadding="0" cellSpacing="0" border={0} style={{ marginTop: "8px" }}>
              <tbody>
                <tr>
                  <td width="16">
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer">
                      <img src={fbIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="Facebook" />
                    </a>
                  </td>
                  <td width="16" style={{ paddingLeft: "16px" }}>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer">
                      <img src={igIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="Instagram" />
                    </a>
                  </td>
                  <td width="16" style={{ paddingLeft: "16px" }}>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer">
                      <img src={liIcon} width="16" height="16" style={{ display: "block", border: 0, filter: "brightness(0)" }} alt="LinkedIn" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

<OurProcess visible={false} />
<Image1/>
      <SimpleGetInTouch />
      <SimpleFooter />
    </>
  );
}
