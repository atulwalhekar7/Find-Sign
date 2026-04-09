import React, { useState, useRef } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import brandVideo from "../assets/Interview Draft.mp4";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  gold: "#A67C00", 
  white: "#FFFFFF",
  textGray: "#333333",
  overlay: "rgba(0, 0, 0, 0.25)",
};

const FONTS = {
  display: "'Cormorant Garamond', Georgia, serif",
  body: "'DM Sans', sans-serif",
};

export default function App() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoToggle = () => {
    if (playVideo) {
      // Pause video & show image
      videoRef.current?.pause();
      setPlayVideo(false);
    } else {
      // Play video
      setPlayVideo(true);
      setTimeout(() => {
        videoRef.current?.play();
      }, 100);
    }
  };

  return (
    <div className="page-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=DM+Sans:wght@300;400;500;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: ${FONTS.body};
          background-color: #fff;
          overflow-x: hidden;
        }

        .hero-top {
          position: relative;
          width: 100%;
          height: 75vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 0 8%;
          overflow: hidden;
          background-image: ${
            !playVideo
              ? `linear-gradient(${COLORS.overlay}, ${COLORS.overlay}), url(${bannerImg})`
              : "none"
          };
          background-size: cover;
          background-position: center;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: ${COLORS.overlay};
          z-index: 1;
        }

        .content-wrap {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-family: ${FONTS.display};
          font-size: clamp(42px, 6vw, 84px);
          color: ${COLORS.white};
          line-height: 1.05;
          font-weight: 500;
          margin-bottom: 2rem;
          max-width: 800px;
        }

        .watch-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: ${COLORS.white};
          padding: 14px 28px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .hero-bottom {
          padding: 80px 8%;
          background: #fff;
        }
      `}</style>

      <section className="hero-top">

        {/* VIDEO */}
        {playVideo && (
          <>
            <video
              ref={videoRef}
              className="hero-video"
              src={brandVideo}
              controls
              onEnded={() => setPlayVideo(false)}
            />
            <div className="hero-overlay" />
          </>
        )}

        <div className="content-wrap">
          <h1 className="hero-title">
            The advantage<br />of being first.
          </h1>
          
          <button className="watch-btn" onClick={handleVideoToggle}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M10 6L0 12V0L10 6Z" fill="white"/>
            </svg>
            Watch the Brand Video
          </button>
        </div>
      </section>

      <section className="hero-bottom">
        <p className="description">
          Find & Sign is a property buyer’s advocate. We represent buyers across Western Australia, 
          working inside process to identify opportunities early and secure the right property with clarity and control.
        </p>

        <button className="find-out-btn">
          Find Out More
        </button>
      </section>
    </div>
  );
}