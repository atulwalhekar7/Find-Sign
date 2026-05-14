import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Find&Sign.jpg";

export default function BuyerAdvocate() {

  // ── Scroll to top on mount ──────────────────────────────────────────────
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
        <div style={{ position: "relative", zIndex: 2, animation: "heroFadeIn 0.8s ease both", width: "100%" }}>
          <h1 tabIndex={0} style={{
            alignSelf: "stretch",
            color: "var(--FS-WHITE, var(--Brand-Utility-FS-WHITE, #FFF))",
            textAlign: "center",
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: "GT Super Display Medium",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            margin: 0
          }}>
            Buyer Advocacy
          </h1>
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────────────────────────── */}
        <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Buyer Advocacy"
        subheading="Expert guidance for every step of your property journey."
        body1="Purchasing a property is one of the most significant financial decisions you will ever make. Our full buyers agent service is designed to ensure that every step of that journey is handled with the expertise, care, and attention it deserves.
From the moment we begin working together, we take on the entire process on your behalf. We get to know your goals, your non-negotiables, and your timeline, and we build a strategy around them. We search both on-market listings and our off-market network, and every property we consider is physically inspected by us before it ever reaches you. We will never recommend a property we have not walked through ourselves. That is a standard we hold on every single engagement."
        body2="Once the right property is identified, we manage all due diligence, coordinate building inspections and necessary reports, and negotiate the price and contract terms firmly in your favour. You are kept informed and involved at every touch point, without ever being burdened by the complexity of the process.
Our full service is deeply personal. No two clients are the same and neither is our approach. Every engagement is tailored to your specific situation, your goals, and your timeline. You are not just another transaction to us. You are someone we are genuinely invested in seeing succeed.
From the first conversation to settlement day and beyond, we are by your side every step of the way."
      />


     

      {/* ── Get In Touch ────────────────────────────────────────────────── */}
      <GetInTouch initialService="Buyer Advocate" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 769px) {
          .about-image {
            width: 564px !important;
            height: 744px !important;
          }
        }
      `}</style>
    </div>
  );
}