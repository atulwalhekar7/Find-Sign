import { useEffect } from "react";
import bannerImg from "../assets/service-banner-find-and-sign-buyers-australia.jpg";
import AboutSection from "../components/AboutSection";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/about-service-find-and-sign.jpg";

export default function BuyerAdvocate() {

  // ── Scroll to top on mount ──────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 20px",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1
            style={{
              fontFamily: "GT Super Display Medium",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "-1.28px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Buyer Advocate
          </h1>
          
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────────────────────────── */}
        <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Buyer Advocate"
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
      `}</style>
    </div>
  );
}