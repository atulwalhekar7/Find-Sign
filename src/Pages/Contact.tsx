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
import bannerImg from "../assets/family-home-buyers-image2-australia-find-and-sign.png";

export default function Contact() {
  const { theme } = useTheme();
  const t = THEMES[theme];

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