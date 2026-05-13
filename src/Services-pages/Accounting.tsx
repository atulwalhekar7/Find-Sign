import { useEffect } from "react";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Find&Sign.jpg";
import AboutSection from "../components/AboutSection";

export default function Accounting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* Hero */}
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", animation: "heroFadeIn 0.8s ease both" }}>
          <h1 style={{ fontFamily: "GT Super Display Medium", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 500, color: "#fff", letterSpacing: "-1.28px", lineHeight: 1.1, margin: 0 }}>
            Mortgage Broker
          </h1>
        </div>
      </section>

      {/* About */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Mortgage Broker"
        subheading="Expert guidance for every step of your property journey."
        body1="Before the right money is in the right place, nothing else can move. A great mortgage broker cuts through the noise, secures the right finance structure for your situation, and ensures you are set up correctly from the very beginning of your purchase journey."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Mortgage Broker" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}