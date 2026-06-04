import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch";
import AboutServiceImg from "../../assets/About Find&Sign.jpg";
import AboutSection from "../../components/AboutSection";
import "./Accounting.css";

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
    </div>
  );
}