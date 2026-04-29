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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [, setShowControls] = useState(false);
  const [nikiExpanded, setNikiExpanded] = useState(false);

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) { vid.play(); setIsPlaying(true); }
    else { vid.pause(); setIsPlaying(false); }
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
        <div className="banner-overlay" />
        <div className="hero-box">
          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      <AboutSection
        imageSrc={AboutUsBanner}
        heading="About Find & Sign"
        subheading="Explore more about Find & Sign."
        body1="Find & Sign Buyer Advocate was built on the belief that every buyer should secure the right property to build equity, choice and financial freedom.
Founder Niki learnt through experience that the right guidance is critical in securing the outcome. It is identified through local knowledge, experience and direct relationships, then secured before it reaches the wider market.
We are a boutique buyers' agency operating nationwide, acting exclusively for buyers. Not agents. 
"
        body2="Not developers we are intentionally selective about the number of clients we take on to give each brief our full attention and expert advice.
We assess every opportunity in person by walking the property, the street, and the surrounding area. Decisions are never made from photos or data alone. Because it's about identifying the opportunity and securing it early. The advantage of being first
Find & Sign we find with confidence you sign with certainty.
"
      />

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
            poster={aboutContentImg}
            className="video-el"
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

        /* ── HERO ── */
        .hero-banner {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${Banner});
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
        .banner-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.35); z-index: 1; }
        .hero-box {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center;
          width: 90%; max-width: 900px; margin: 0 auto;
          padding: 60px 20px; border-radius: 12px;
          animation: heroFadeIn 0.8s ease both;
        }
        .hero-title {
          font-family: 'GT Super Display Medium';
          font-size: 64px; font-weight: 500; color: #FFF;
          line-height: 1.1; letter-spacing: -1.28px;
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

        /* ── TEAM SECTION ── */
        .team-section {
          width: 100%;
          padding: 80px 32px;
          background: #f5f5f5;
        }
        .team-container { max-width: 1200px; margin: 0 auto; }

        .team-header {
          display: flex; flex-direction: column; align-items: center; margin-bottom: 48px;
        }
        .team-header h2 {
          color: #073B2F; font-family: 'GT Super Display Medium';
          font-size: 44px; font-weight: 500; line-height: 120%; letter-spacing: -0.88px;
          display: flex; flex-direction: column; align-items: center; gap: 24px;
          text-align: center; margin: 0;
        }
        .team-header h2::after { content: ""; width: 160px; height: 1px; background: #073B2F; }
        .team-header p {
          color: #000; font-family: 'Sohne', sans-serif; font-size: 24px;
          font-weight: 300; line-height: 1.5; margin-top: 24px; text-align: center;
        }

        .team-grid {
          display: flex; justify-content: center; flex-wrap: wrap; gap: 32px; width: 100%;
        }

        /* ── CARD: exact Figma values ── */
        .team-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 392px;
          padding: 24px;
          gap: 31px;
          border-radius: 24px;
          border: 1px solid #69E4DC;
          background: #FFF;
          box-sizing: border-box;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
        }
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 28px rgba(105, 228, 220, 0.55);
        }

        /* Top row: image (142×174, radius 20px) + name/role beside it */
        .team-card-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        }
        .team-img-wrap {
          width: 142px;
          height: 174px;
          min-width: 142px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          background: #dcdcdc;
        }
        .team-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center; display: block;
        }
        .team-name-block {
          display: flex; flex-direction: column; justify-content: flex-start;
          gap: 4px; padding-top: 4px; flex: 1;
        }
        .team-name {
          color: #000;
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'GT Super Display', 'GT Super Display Medium', Georgia, serif;
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: -0.64px;
          margin: 0;
        }
        .team-role {
          color: #000;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin: 0;
        }

        /* Bio: 8-line clamp, grey text */
        .team-bio-wrap {
          align-self: stretch;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 8;
        }
        .team-bio-wrap.expanded {
          display: block;
          overflow: visible;
          -webkit-line-clamp: unset;
        }
        .team-bio {
          color: #757575;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
          display: inline;
        }
        .team-read-more {
          color: #69E4DC;
          font-family: 'Söhne', 'Sohne', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          cursor: pointer;
          text-decoration: none;
          display: inline;
          background: none;
          border: none;
          padding: 0;
        }
        .team-read-more:hover { text-decoration: underline; }

        /* Social icons row */
        .team-socials {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 10px;
        }
        .team-socials a {
          display: flex;
          align-items: center;
          transition: opacity 0.2s;
        }
        .team-socials a:hover { opacity: 0.65; }

        /* Contact button: exact Figma — border aqua, text colour inherit */
        .team-contact-btn {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid #69E4DC;
          background: transparent;
          color: #073B2F;
          font-family: 'Söhne', 'Sohne', 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3.9px;
          text-transform: uppercase;
          cursor: pointer;
          width: 100%;
          align-self: stretch;
          box-sizing: border-box;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .team-contact-btn:hover {
          background: #69E4DC;
          color: #073B2F;
        }

        /* Animations */
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-box { padding: 60px 20px; width: 92%; }
          .hero-title { font-size: 44px !important; line-height: 1.2 !important; }
          .video-inner { height: 400px; }
          .play-btn, .mute-btn { width: 42px; height: 42px; }
          .team-card { width: 100%; max-width: 480px; }
        }
        @media (max-width: 600px) {
          .hero-box { padding: 60px 20px; width: 94%; border-radius: 8px; }
          .hero-title { font-size: 36px !important; }
          .video-inner { height: 260px; }
          .play-btn, .mute-btn { width: 36px; height: 36px; }
          .team-section { padding: 60px 20px; }
          .team-header h2 { font-size: 32px; }
          .team-header p { font-size: 18px; }
          .team-card { width: 100%; padding: 20px; gap: 20px; }
          .team-img-wrap { width: 110px; height: 134px; min-width: 110px; }
          .team-name { font-size: 24px; line-height: 30px; }
          .team-role { font-size: 16px; line-height: 22px; }
        }
        @media (max-width: 768px) {
          .hero-banner { background-attachment: scroll; }
        }
      `}</style>

      {/* SECTION 4 — Meet the Team */}
      <section className="team-section">
        <div className="team-container">

          <div className="team-header">
            <h2>Meet the team</h2>
            <p>Explore more about our team.</p>
          </div>

          <div className="team-grid">

            {/* ── Card: Niki ── */}
            <div className="team-card">

              {/* TOP: image + name / role / socials */}
              <div className="team-card-top">
                <div className="team-img-wrap">
                  <img src={niki} alt="Niki Nakrani" />
                </div>
                <div className="team-name-block">
                  <h3 className="team-name">Niki Nakrani</h3>
                  <p className="team-role">CEO &amp; Founder</p>
                  {/* Social icons */}
                  <div className="team-socials">
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <img src={fbIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <img src={igIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <img src={liIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>

              {/* BIO: toggles on "Read more" click */}
              <div className={`team-bio-wrap${nikiExpanded ? " expanded" : ""}`}>
                <span className="team-bio">
                  Niki founded Find and Sign Buyer Advocate with a simple belief that every buyer deserves the same advantage he gave himself. Having built his own multi-million dollar property portfolio, he brings firsthand experience to every client engagement. His approach is grounded in data, sharpened by years of on-the-ground market knowledge, and guided by a{" "}
                </span>
                {!nikiExpanded && (
                  <button className="team-read-more" onClick={() => setNikiExpanded(true)}>
                    Read more…
                  </button>
                )}
                {nikiExpanded && (
                  <span className="team-bio">
                    genuine desire to see others succeed. Niki understands that property can feel overwhelming, and that is precisely why having the right person in your corner changes everything. He is not just your buyer's agent. He is someone who has walked the path himself and is invested in your outcome.{" "}
                    <button className="team-read-more" onClick={() => setNikiExpanded(false)}>
                      Show less
                    </button>
                  </span>
                )}
              </div>

              {/* BUTTON: calls Niki's number */}
              <a href="tel:0431158233" className="team-contact-btn">
                Contact Niki
              </a>
            </div>

            {/* ── Card: Rebecca ── */}
            <div className="team-card">

              {/* TOP: image + name / role / socials */}
              <div className="team-card-top">
                <div className="team-img-wrap">
                  <img src={Bec} alt="Rebecca Nakrani" style={{ objectPosition: "center" }} />
                </div>
                <div className="team-name-block">
                  <h3 className="team-name">Rebecca </h3>
                  <p className="team-role">Client Operations Manager</p>
                  {/* Social icons */}
                  <div className="team-socials">
                    <a href="https://www.facebook.com/nakranipropertybuyers/" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <img src={fbIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/find_and_sign?igsh=emFwOTZzMjhzcWZj&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <img src={igIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/niki-nakrani-13b269237/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <img src={liIcon} width="16" height="16" style={{ display: "block", filter: "brightness(0)" }} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>

              {/* BIO */}
              <div className="team-bio-wrap expanded">
                <span className="team-bio">
                  Rebecca keeps every purchase moving with precision and care. Her attention to detail and deep process knowledge means nothing is missed and clients always know exactly where they stand. She has a gift for making the complex feel simple, and takes genuine pride in delivering a seamless experience from start to settlement.
                </span>
              </div>

              {/* BUTTON: emails Rebecca */}
              <a href="mailto:info@findandsignba.com.au" className="team-contact-btn">
                Contact Rebecca
              </a>
            </div>

          </div>
        </div>
      </section>

      <OurProcess visible={false} />
      <Image1 />
      <SimpleGetInTouch />
      <SimpleFooter />
    </>
  );
}