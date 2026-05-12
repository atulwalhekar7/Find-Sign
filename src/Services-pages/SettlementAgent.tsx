import { useEffect } from "react";
import bannerImg from "../assets/service-banner-find-and-sign-buyers-australia.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/about-service-find-and-sign.jpg";
import AboutSection from "../components/AboutSection";

export default function SettlementAgent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* ── Hero ── */}
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
            Settlement Agent
          </h1>
          
        </div>
      </section>

      {/* ── About ── */}
     <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Settlement Agent"
        subheading="Expert guidance for every step of your property journey."
        body1="A settlement agent, also known as a conveyancer, is the professional responsible for managing the legal transfer of a property from the seller to you. They prepare and review all necessary documentation, liaise with the seller's representatives, coordinate with your lender, and ensure every condition of the contract is met before settlement day. It is a role that requires precision and attention to detail, and the right settlement agent ensures the entire process moves smoothly, on time, and without complication. This is not a step to cut corners on."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Settlement Agent" showService={true} />
      <SimpleFooter />
    </div>
  );
}