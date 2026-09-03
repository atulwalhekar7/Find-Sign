import { useEffect } from "react";

import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./SettlementAgent.css";
import SEO from "../../components/SEO";

export default function SettlementAgent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    <SEO
  title="Settlement Agent Perth | Property Settlement Services | Find & Sign"
  description="Find & Sign provides trusted settlement agent services in Perth to help buyers complete property transactions smoothly. Get expert support with contracts, paperwork, and settlement processes."
/>
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

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
              letterSpacing: "-0.02em",
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
imageAlt="Perth buyer agent helping home buyers navigate the property settlement and transfer process in Australia"
  imageTitle="Settlement Agent Perth Australia | Find and Sign"
  heading="About Settlement Agent"
  subheading="Expert guidance for every step of your property journey."
        body1="A settlement agent, also known as a conveyancer, plays an essential role in managing the legal transfer of your property purchase. They handle documentation, coordinate with sellers and lenders, and ensure all contract requirements are completed before settlement day.
With the right professionals, you can navigate the settlement process with greater clarity, confidence and attention to detail. The right people help ensure your property purchase progresses smoothly, on time and without unnecessary complications."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Settlement Agent" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}