import { useEffect } from "react";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../components/AboutSection";

export default function Accounting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        margin: 0,
        padding: 0,
        color: "var(--text-primary)",
      }}
    >

      {/* ── Hero ── */}
      <section
  style={{
    width: "100%",
    height: "550px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#073B2F",
    position: "relative",
    overflow: "hidden",
  }}
>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", animation: "heroFadeIn 0.8s ease both" }}>
          <h1 tabIndex={0} style={{ fontFamily: "GT Super Display Medium", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 }}>
            Mortgage Broker
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <div
        style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <AboutSection
          imageSrc={AboutServiceImg}
           imageAlt="Perth mortgage broker helping home buyers secure the right finance solution in Australia"
  imageTitle="Mortgage Broker Perth Australia | Find and Sign"
  imageCaption="Experienced Perth mortgage broker providing finance guidance and loan solutions for property buyers across Australia."
  heading="About Mortgage Broker"
  subheading="Expert guidance for every step of your property journey."
          body1="Before the right money is in the right place, nothing else can move. A great mortgage broker cuts through the noise, secures the right finance structure for your situation, and ensures you are set up correctly from the very beginning of your purchase journey."
        />
      </div>

      {/* ── Get In Touch ── */}
      <div style={{ background: "var(--bg-secondary)" }}>
        <GetInTouch initialService="Mortgage Broker" showService={true} />
      </div>

      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          h1, .h1 { font-size: 48px !important; line-height: 58px !important; letter-spacing: -0.02em !important; }
          h2, .h2 { font-size: 38px !important; line-height: 48px !important; }
          h3, .h3 { font-size: 28px !important; line-height: 38px !important; }
        }
      `}</style>
    </div>
  );
}