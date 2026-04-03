import React from "react";
// 1. UNCOMMENT THE LINE BELOW IN YOUR LOCAL PROJECT:
// import bannerImg from "../assets/DSC06227.jpg";

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
  // 2. DELETE THIS PLACEHOLDER LINE LOCALLY ONCE YOU UNCOMMENT THE IMPORT ABOVE:
  const bannerImg = "https://uc987f1cfdf95a9a66f0a372c6c4.previews.dropboxusercontent.com/p/thumb/AC-T1Rvug3QxwoHsli6Gk7YS3Bc_9P34zpkXqAm9RZ_ovDqnRhuBGgOsYLV3S6eAWJgvatkPde0Wmvb3OEybsaGjZ44wshJmUVX4FPEgs1j7n_kNyTQnM9ahzRWVg8QiTyNAEbxcLo9a-EnUDphqPKuFwkI521LxcZUagMWxQqudv6SAqi7rKPH9G3dIFbURHXoZX7FrCT_DKbXvdTI2pD-hiTWzktHJAenqp3EaA3bmfscmbWVd6wuQCkqKBAwJG_1wzBpb0w6Bh8KmywIgfiOgSh7F7IDdNlh96IGszPYpVXNyZ9aU_Nos1g319zijuTiLm5G0GupsIqKH3y5oeVXaIl6a33SX8m-MgnjCSkaU6Q3eG_vIsuA51AqwmtoH4dg87R78FwGMYi9CHwzZKkcQD6QLb_1HybfMJ_4Clw_O1CyWpjJ6VXOAqZzEKkZo8rj3ZJduv2d5XmrAV2r6tS5H/p.jpeg?is_prewarmed=true";

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
          /* The variable 'bannerImg' is used here */
          background-image: linear-gradient(${COLORS.overlay}, ${COLORS.overlay}), 
                            url(${bannerImg});
          background-size: cover;
          background-position: center;
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
          -webkit-backdrop-filter: blur(8px);
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

        .watch-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: ${COLORS.white};
        }

        .hero-bottom {
          padding: 80px 8%;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .description {
          font-size: clamp(16px, 2vw, 20px);
          color: ${COLORS.textGray};
          line-height: 1.6;
          max-width: 900px;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .find-out-btn {
          background: transparent;
          border: 1px solid ${COLORS.aqua};
          color: ${COLORS.racingGreen};
          padding: 16px 36px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .find-out-btn:hover {
          background: ${COLORS.aqua};
          color: white;
        }

        @media (max-width: 768px) {
          .hero-top {
            height: 60vh;
          }
          .hero-bottom {
            padding: 50px 6%;
          }
        }
      `}</style>

      <section className="hero-top">
        <div className="content-wrap">
          <h1 className="hero-title">
            The advantage<br />of being first.
          </h1>
          
          <button className="watch-btn">
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