import { useEffect } from "react";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Find&Sign.jpg";
import AboutSection from "../components/AboutSection";

export default function SalesAgent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* ── Hero ── */}
      <section
        style={{
          width: "100%",
          maxWidth: "1556px",
          height: "550px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1
            tabIndex={0}
            style={{
              alignSelf: "stretch",
              color: "var(--FS-WHITE, var(--Brand-Utility-FS-WHITE, #FFF))",
              textAlign: "center",
              fontVariantNumeric: "lining-nums proportional-nums",
              fontFamily: "GT Super Display Medium",
              fontSize: "56px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "64px",
              letterSpacing:  "-0.02em",
              margin: 0,
            }}
          >
            Sales Agent
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Sales Agent"
        subheading="Expert guidance for every step of your property journey."
        body1="There will come a time in every property journey when you need to sell, whether that is moving on from your family home, exiting an investment, or repositioning your portfolio. A great sales agent understands how to present your property to the right buyers, price it strategically, and negotiate an outcome that reflects its true value. Having a trusted sales agent in your network before you need one means you are never starting from scratch at a critical moment. We refer only agents whose approach, integrity, and local knowledge we have seen firsthand."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Sales Agent" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          h1, .h1 { font-size: 48px !important; line-height: 58px !important; }
          h2, .h2 { font-size: 38px !important; line-height: 48px !important; }
          h3, .h3 { font-size: 28px !important; line-height: 38px !important; }
        }
      `}</style>
    </div>
  );
}