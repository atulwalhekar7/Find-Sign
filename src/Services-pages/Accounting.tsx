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
          <h1 tabIndex={0} style={{ fontFamily: "GT Super Display Medium", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 500, color: "#fff", letterSpacing: "-2%", lineHeight: 1.1, margin: 0 }}>
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

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── About section text overrides ── */
        [data-theme="dark"] .about-heading {
          color: var(--text-heading) !important;
        }
        [data-theme="dark"] .about-subheading {
          color: var(--text-secondary) !important;
        }
        [data-theme="dark"] .about-body {
          color: var(--text-primary) !important;
        }

        /* ── GetInTouch overrides ── */
        [data-theme="dark"] .get-in-touch-wrapper {
          background: var(--bg-secondary) !important;
          color: var(--text-primary) !important;
        }
        [data-theme="dark"] .get-in-touch-wrapper input,
        [data-theme="dark"] .get-in-touch-wrapper textarea,
        [data-theme="dark"] .get-in-touch-wrapper select {
          background: var(--card-bg) !important;
          color: var(--text-primary) !important;
          border-color: #2a2a2a !important;
        }
        [data-theme="dark"] .get-in-touch-wrapper input::placeholder,
        [data-theme="dark"] .get-in-touch-wrapper textarea::placeholder {
          color: var(--text-secondary) !important;
        }
        [data-theme="dark"] .get-in-touch-wrapper label {
          color: var(--text-primary) !important;
        }
        [data-theme="dark"] .get-in-touch-wrapper h2,
        [data-theme="dark"] .get-in-touch-wrapper h3 {
          color: var(--text-heading) !important;
        }
      `}</style>
    </div>
  );
}