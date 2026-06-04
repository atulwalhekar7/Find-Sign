import { useRef, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import {  useEffect } from "react";
import aboutContentImg from "../assets/happy-home-buyers-australia-find-and-sign.jpg";
import aboutVideo from "../assets/Interview Draft (2).mp4";
import AboutSection from "../components/AboutSection";
import SimpleGetInTouch from "../components/GetInTouch/GetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import OurProcess from "../components/OurProcess";
import Banner from "../assets/About-us-Banner-find-and-sign-buyers-agent-australia.jpg";
import AboutUsBanner from "../assets/Australia-Find-And-Sign-About-Us-Image.png";
import Bec from "../assets/Rebecca-buyers-agent-australia-find-and-sign.png";
import niki from "../assets/niki-nakrani-buyers-agent-australia-find-and-sign.png";
import Image3 from "../components/Image3";

import fbIcon from "../assets/icon/fb.svg";
import igIcon from "../assets/icon/Instagram.svg";
import liIcon from "../assets/icon/LinkedIn.svg";
import tiIcon from "../assets/icon/Tiktok.svg";
import goIcon from "../assets/icon/Google.svg";

const THEMES = {
  dark: {
    pageBg:        "#121212",
    sectionBg:     "#121212",
    teamSectionBg: "#1A1A1A",
    cardBg:        "#1E1E1E",
    cardBorder:    "#69E4DC",
    headingColor:  "#F9F9F9",
    nameColor:     "#F9F9F9",
    roleColor:     "#EAE5DF",
    bioColor:      "#A0A0A0",
    btnColor:      "#69E4DC",
    btnBorder:     "#69E4DC",
    iconFilter:    "brightness(0) invert(1)",
  },
  light: {
    pageBg:        "#FFFFFF",
    sectionBg:     "#FFFFFF",
    teamSectionBg: "#FFFFFF",
    cardBg:        "#FFFFFF",
    cardBorder:    "#69E4DC",
    headingColor:  "#073B2F",
    nameColor:     "#000000",
    roleColor:     "#000000",
    bioColor:      "#757575",
    btnColor:      "#073B2F",
    btnBorder:     "#69E4DC",
    iconFilter:    "brightness(0)",
  },
};

export default function About() {
  const { theme } = useTheme();
  const t = THEMES[theme];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [, setShowControls] = useState(false);
  const [nikiExpanded, setNikiExpanded] = useState(false);
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = Banner;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.muted = false;
      setIsMuted(false);
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
      {/* SECTION 1 — Hero Banner */}
     <section className="hero-banner">
  {/* SEO image for background banner */}
  <img
    src={Banner}
    alt="Find and Sign Buyer Advocate Australia team helping clients purchase property with confidence"
    title="About Find and Sign | Buyer Advocate Australia"
    loading="lazy"
    width="1920"
    height="800"
    style={{
      position: "absolute",
      width: "1px",
      height: "1px",
      opacity: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  />

  <div className="banner-overlay" />

  <div className="hero-box">
    <h1 className="hero-title" tabIndex={0}>
      About Us
    </h1>
  </div>
</section>

      <div style={{ background: t.sectionBg, transition: "background 0.3s ease" }}>
        <AboutSection
  imageSrc={AboutUsBanner}
  imageAlt="Experienced Buyers Agent Australia team helping home buyers and property investors secure the right property nationwide"
  imageTitle="Find and Sign Buyers Agent Australia Team"
  heading="About Find & Sign"
  body1="Find & Sign Buyer Advocate was built on the belief that every buyer should secure the right property to build equity, choice and financial freedom.
Founder Niki learnt through experience that the right guidance is critical in securing the outcome. It is identified through local knowledge, experience and direct relationships, then secured before it reaches the wider market.
We are a boutique buyers' agency operating nationwide, acting exclusively for buyers. Not agents. Not developers we are intentionally selective about the number of clients we take on to give each brief our full attention and expert advice."
  body2="We assess every opportunity in person by walking the property, the street, and the surrounding area. Decisions are never made from photos or data alone. Because it's about identifying the opportunity and securing it early. The advantage of being first.
Find & Sign we find with confidence you sign with certainty."
/>
      </div>

      {/* SECTION 3 — Video */}
      <section className="video-section">
        <div
          className="video-inner"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(true)}
        >
          <video
  ref={videoRef}
  src={aboutVideo}
  loop
  muted
  playsInline
  preload="metadata"
  poster={aboutContentImg}
  className="video-el"
  title="Find and Sign Buyers Agent Australia Introduction Video"
/>
          <div className="video-overlay" />
          <div className="video-controls">
            <button className="ctrl-btn play-btn" onClick={togglePlayPause} aria-label={isPlaying ? "Pause video" : "Play video"}>
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
            <button className="ctrl-btn mute-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute audio" : "Mute audio"}>
              {isMuted ? (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .hero-banner {
          position: relative; width: 100%; min-height: 60vh;
          aspect-ratio: 16 / 7; display: flex;
          align-items: center; justify-content: center;
          background-image: url(${Banner});
          background-size: cover; background-position: center 30%;
          background-repeat: no-repeat; background-attachment: scroll;
        }
        .video-loader-container {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: #073B2F; 
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .video-loader-container.hidden {
          opacity: 0;
        }

        .attractive-loader {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(105, 228, 220, 0.2);
          border-radius: 50%;
          border-top-color: #69E4DC;
          animation: spin 1s infinite linear;
          transition: opacity 0.3s ease;
          opacity: 1;
          margin-bottom: 8px;
        }
        .attractive-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(1turn); } }
        .banner-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 1; }
        .hero-box {
          position: relative; z-index: 3;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          width: 90%; max-width: 900px; margin: 0 auto;
          padding: 60px 20px; border-radius: 12px;
          animation: heroFadeIn 0.8s ease both;
        }
        .hero-title {
          font-family: 'GT Super Display Medium';
          font-size: 56px; font-weight: 500; color: #FFF;
          line-height: 1.1;letter-spacing: -0.02em;;
          font-variant-numeric: lining-nums proportional-nums; margin: 0;
        }

        /* ── VIDEO ── */
        .video-section { width: 100%; margin: 0; padding: 0; background: #111; }
        .video-inner { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; }
        .video-el { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
        .video-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.25); pointer-events: none; }
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

        /* ── TEAM CARD HOVER ── */
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 28px rgba(105, 228, 220, 0.55);
        }
        .team-contact-btn:hover { background: #69E4DC; color: #073B2F; }
        .team-read-more:hover { text-decoration: underline; }
        .team-socials a:hover { opacity: 0.65; }

        /* ── ANIMATIONS ── */
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 767px) {
          h1, .h1, .hero-title { font-size: 48px !important; line-height: 58px !important;letter-spacing: -0.02em; }
          h2, .h2, .team-header h2 { font-size: 38px !important; line-height: 48px !important; }
          h3, .h3, .team-name { font-size: 28px !important; line-height: 38px !important; }
        }
        @media (max-width: 900px) {
          .hero-box { padding: 60px 20px; width: 92%; }
          .hero-banner {
            aspect-ratio: 4 / 5;
            min-height: unset;
          }
          .video-inner { height: 400px; }
          .play-btn, .mute-btn { width: 42px; height: 42px; }
        }
        @media (max-width: 600px) {
          .hero-box { padding: 60px 20px; width: 94%; border-radius: 8px; }
          .video-inner { height: 260px; }
          .play-btn, .mute-btn { width: 36px; height: 36px; }
          .team-section { padding: 60px 20px; }
          .team-header p { font-size: 18px; }
          .team-card { width: 100%; padding: 20px; gap: 20px; }
          .team-img-wrap { width: 110px; height: 134px; min-width: 110px; }
          .team-role { font-size: 16px; line-height: 22px; }
          .team-socials { flex-wrap: wrap; gap: 12px; }
            .team-read-more {
    margin-top: -10px !important;
  }
        }
        @media (max-width: 768px) {
          .hero-banner { background-attachment: scroll; }
        }
      `}</style>

      {/* SECTION 4 — Meet the Team */}
      <section style={{ width: "100%", padding: "64px 32px", background: t.teamSectionBg, transition: "background 0.3s ease" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "48px" }}>
            <h2
              tabIndex={0}
              style={{
                color: t.headingColor,
                fontFamily: "GT Super Display Medium",
                fontSize: "44px",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "-0.88px",
                textAlign: "center",
                margin: 0,
                transition: "color 0.3s ease",
              }}
            >
              Meet the team
            </h2>
            <div style={{ width: "160px", height: "1px", background: t.headingColor, margin: "24px 0" }} />
            <p
              tabIndex={0}
              style={{
                color: t.roleColor,
                fontFamily: "Sohne",
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: "1.5",
                textAlign: "center",
                transition: "color 0.3s ease",
              }}
            >
              Explore more about our team.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "32px" }}>

            {/* ── Card: Niki ── */}
            <div
              className="team-card"
              style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                width: "392px", padding: "24px", gap: "31px",
                borderRadius: "24px", border: `1px solid ${t.cardBorder}`,
                background: t.cardBg, boxSizing: "border-box",
                transition: "transform 0.4s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.4s ease, background 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <div style={{ width: "142px", height: "174px", minWidth: "142px", borderRadius: "20px", overflow: "hidden", flexShrink: 0, background: "#dcdcdc" }}>
<img
  src={niki}
  alt="Niki Nakrani founder of Find and Sign Buyers Agent Australia"
  title="Niki Nakrani | Buyers Agent Australia Founder"
  loading="lazy"
  width="142"
  height="174"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block"
  }}
/>                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "4px", paddingTop: "4px", flex: 1 }}>
                  <h3 tabIndex={0} style={{ color: t.nameColor, fontFamily: "GT Super Display Medium", fontSize: "32px", fontWeight: 500, lineHeight: "40px", letterSpacing: "-0.64px", margin: 0, transition: "color 0.3s ease" }}>
                    Niki Nakrani
                  </h3>
                  <p tabIndex={0} style={{ color: t.roleColor, fontFamily: "Söhne, sans-serif", fontSize: "20px", fontWeight: 400, lineHeight: "28px", margin: 0, transition: "color 0.3s ease" }}>
                    CEO &amp; Founder
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "10px" }}>
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer"><img src={fbIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer"><img src={igIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer"><img src={liIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="LinkedIn" /></a>
                    <a href="https://www.tiktok.com/@findandsignba/" target="_blank" rel="noreferrer"><img src={tiIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Tiktok" /></a>
                    <a href="https://www.google.com/search?kgmid=/g/11vyhyd916&hl=en-IN&q=Find+and+Sign+Buyer+Advocate" target="_blank" rel="noreferrer"><img src={goIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Google" /></a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div style={{ alignSelf: "stretch" }}>
                <span tabIndex={0} style={{ color: t.bioColor, fontFamily: "Söhne, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", margin: 0, transition: "color 0.3s ease" }}>
                  Niki founded Find and Sign Buyer Advocate with a simple belief that every buyer deserves the same advantage he gave himself. Having built his own multi-million dollar property portfolio, he brings firsthand experience to every client engagement. His approach is grounded in data, sharpened by years of on-the-ground market knowledge, and guided by a genuine desire to
                  {!nikiExpanded ? (
                    <button onClick={() => setNikiExpanded(true)} style={{ display: "inline-block", color: "#69E4DC", fontFamily: "Söhne, sans-serif", fontSize: "16px", fontWeight: 500, lineHeight: "24px", cursor: "pointer", background: "none", border: "none", padding: 0, margin: 0 }}>
                      ..Read more
                    </button>
                  ) : (
                    <>
                      {" "}see others succeed. Niki understands that property can feel overwhelming, and that is precisely why having the right person in your corner changes everything. He is not just your buyer's agent. He is someone who has walked the path himself and is invested in your outcome.
                      <button onClick={() => setNikiExpanded(false)} style={{ display: "inline-block", color: "#69E4DC", fontFamily: "Söhne, sans-serif", fontSize: "16px", fontWeight: 500, cursor: "pointer", background: "none", border: "none", padding: 0, marginLeft: "8px" }}>
                        Show less
                      </button>
                    </>
                  )}
                </span>
              </div>

              <a href="tel:0431158233" className="team-contact-btn"
                style={{ display: "inline-flex", height: "48px", padding: "12px 16px", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "8px", border: `1px solid ${t.btnBorder}`, background: "transparent", color: t.btnColor, fontFamily: "CX80", fontSize: "14px", fontWeight: 700, letterSpacing: "3.9px", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}>
                Contact Niki
              </a>
            </div>

            {/* ── Card: Rebecca ── */}
            <div
              className="team-card"
              style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                width: "392px", padding: "24px", gap: "31px",
                borderRadius: "24px", border: `1px solid ${t.cardBorder}`,
                background: t.cardBg, boxSizing: "border-box",
                transition: "transform 0.4s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.4s ease, background 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", width: "100%" }}>
                <div style={{ width: "142px", height: "174px", minWidth: "142px", borderRadius: "20px", overflow: "hidden", flexShrink: 0, background: "#dcdcdc" }}>
<img
  src={Bec}
  alt="Rebecca Client Operations Manager at Find and Sign Buyers Agent Australia"
  title="Rebecca | Client Operations Manager"
  loading="lazy"
  width="142"
  height="174"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block"
  }}
/>                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "4px", paddingTop: "4px", flex: 1 }}>
                  <h3 tabIndex={0} style={{ color: t.nameColor, fontFamily: "GT Super Display Medium", fontSize: "32px", fontWeight: 500, lineHeight: "40px", letterSpacing: "-0.64px", margin: 0, transition: "color 0.3s ease" }}>
                    Rebecca
                  </h3>
                  <p tabIndex={0} style={{ color: t.roleColor, fontFamily: "Söhne, sans-serif", fontSize: "20px", fontWeight: 400, lineHeight: "28px", margin: 0, transition: "color 0.3s ease" }}>
                    Client Operations Manager
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "10px" }}>
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer"><img src={fbIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer"><img src={igIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer"><img src={liIcon} width="16" height="16" style={{ display: "block", filter: t.iconFilter }} alt="LinkedIn" /></a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div style={{ alignSelf: "stretch" }}>
                <span tabIndex={0} style={{ color: t.bioColor, fontFamily: "Söhne, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", margin: 0, transition: "color 0.3s ease" }}>
                  Rebecca keeps every purchase moving with precision and care. Her attention to detail and deep process knowledge means nothing is missed and clients always know exactly where they stand. She has a gift for making the complex feel simple, and takes genuine pride in delivering a seamless experience from start to settlement.
                </span>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&to=info@findandsignba.com.au&su=Website+Enquiry"
                className="team-contact-btn"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", height: "48px", padding: "12px 16px", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "8px", border: `1px solid ${t.btnBorder}`, background: "transparent", color: t.btnColor, fontFamily: "CX80", fontSize: "14px", fontWeight: 700, letterSpacing: "3.9px", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
              >
                Contact Rebecca
              </a>
            </div>

          </div>
        </div>
      </section>

      <OurProcess visible={false} />
      <Image3 />
      <SimpleGetInTouch />
      <SimpleFooter />
    </>
  );
}