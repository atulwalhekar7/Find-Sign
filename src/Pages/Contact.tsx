import { useState, useEffect } from "react";
import GetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const THEMES = {
  dark: {
    sectionBg:   "#1A1A1A",
    headingColor: "#F9F9F9",
    dividerColor: "#F9F9F9",
  },
  light: {
    sectionBg:   "#ebe6de",
    headingColor: "#073B2F",
    dividerColor: "#073B2F",
  },
};
import bannerImg from "../assets/buyer-advocate-australia-contact-property-consultation-banner.png";

export default function Contact() {


  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  return (
    <>
      <section
  className="contact-hero-banner"
  style={{
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "0 20px",
  }}
>

  {/* SEO fallback image for background */}
  <img
    src={bannerImg}
    alt="Buyer Advocate Australia contact page for property consultation and enquiries"
    title="Contact Find and Sign | Buyer’s Agent Australia"
    loading="lazy"
    decoding="async"
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

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
    }}
  />

  {/* Content */}
  <div
    className="contact-hero-content"
    style={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "90%",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "60px 20px",
      animation: "heroFadeIn 0.8s ease both",
    }}
  >
    <h1
      tabIndex={0}
      style={{
        fontFamily: "GT Super Display Medium",
        fontSize: "56px",
        fontWeight: 500,
        color: "#FFF",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        fontVariantNumeric: "lining-nums proportional-nums",
        margin: 0,
        textAlign: "center",
        width: "100%",
      }}
    >
      Contact Us
    </h1>
  </div>
</section>

      <GetInTouch hideInternalHeading={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .contact-hero-banner {
          aspect-ratio: 16 / 7;
          min-height: 60vh;
        }

        @media (max-width: 1200px) {
          .contact-hero-banner {
            min-height: 50vh;
          }

          .contact-hero-banner h1 {
            font-size: 56px !important;
          }
        }

        @media (max-width: 900px) {
          .contact-hero-banner h1 {
            font-size: 56px !important;
            line-height: 1.2 !important;
            text-align: center !important;
          }

          h2 {
            font-size: 42px !important;
            line-height: 40px !important;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-banner {
            aspect-ratio: 4 / 5;
            min-height: unset;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .contact-hero-content {
            width: 100%;
            text-align: center;
            align-items: center;
            justify-content: center;
          }

          .contact-hero-banner h1 {
            text-align: center !important;
            width: 100%;
            margin: 0 auto;
            letter-spacing: -0.02em;
          }
        }

        @media (max-width: 600px) {
          .contact-hero-banner h1 {
            font-size: 48px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}