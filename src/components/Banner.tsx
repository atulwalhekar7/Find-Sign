import React from "react";
import bannerImg from "../assets/DSC06227.jpg";

const COLORS = {
  racingGreen: "#1B4332",
  aqua: "#40C9A2",
  gold: "#A67C00",
  white: "#FFFFFF",
  textGray: "#333333",
  overlay: "rgba(0, 0, 0, 0.35)",
};

const FONTS = {
  display: "'Cormorant Garamond', Georgia, serif",
  body: "'DM Sans', sans-serif",
};

export default function App() {
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
          background-image: linear-gradient(${COLORS.overlay}, ${COLORS.overlay}), url(${bannerImg});
          background-size: cover;
          background-position: center;
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
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: ${COLORS.white};
          padding: 12px 24px;
          font-family: ${FONTS.body};
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .watch-btn:hover {
          background: rgba(0, 0, 0, 0.45);
          border-color: rgba(255, 255, 255, 0.7);
        }

        .hero-bottom {
          padding: 72px 8%;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .description {
          font-family: ${FONTS.body};
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          color: ${COLORS.textGray};
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 2.5rem;
        }

        .find-out-btn {
          display: inline-block;
          background: transparent;
          border: 1px solid ${COLORS.textGray};
          color: ${COLORS.textGray};
          padding: 12px 32px;
          font-family: ${FONTS.body};
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .find-out-btn:hover {
          background: ${COLORS.textGray};
          color: #fff;
        }
      `}</style>

      {/* HERO SECTION — image only */}
      <section className="hero-top">
        <div className="content-wrap">
          <h1 className="hero-title">
            The advantage<br />of being first.
          </h1>

          <button className="watch-btn">
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
              <path d="M9 5.5L0 11V0L9 5.5Z" fill="white" />
            </svg>
            Watch the Video
          </button>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="hero-bottom">
        <p className="description">
          Find &amp; Sign is a property buyer's advocate. We represent clients across Western Australia,
          identifying the right properties and securing them before they reach the wider market.
        </p>

        <button className="find-out-btn">
          Find Out More
        </button>
      </section>
    </div>
  );
}