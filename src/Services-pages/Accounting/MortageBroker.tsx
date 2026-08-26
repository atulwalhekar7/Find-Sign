import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./Accounting.css";
import SEO from "../../components/SEO";

export default function Accounting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    
    <SEO
  title="Mortgage Broker Perth | Home Loan Experts | Find & Sign"
  description="Find & Sign connects you with trusted mortgage broker services in Perth. Get expert guidance on home loans, financing options, and securing the right mortgage for your property goals."
/>
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
  heading="About Mortgage Broker"
  subheading="Expert guidance for every step of your property journey."
body1="Before making the right property decision, having the right finance structure in place is essential. A trusted Perth buyer agent works alongside experienced finance professionals to help ensure you are prepared, understand your options, and are positioned correctly from the beginning of your property buying journey."        />
      </div>

      {/* ── Get In Touch ── */}
      <div style={{ background: "var(--bg-secondary)" }}>
        <GetInTouch initialService="Mortgage Broker" showService={true} />
      </div>

      <SimpleFooter />
    </div>
    </>
  );
}