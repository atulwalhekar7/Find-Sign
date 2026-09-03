import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./BuildingInspection.css";
import SEO from "../../components/SEO";

export default function BuildingInspection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>

    <SEO
  title="Building Inspection Perth | Property Inspection Services | Find & Sign"
  description="Get professional building inspection services in Perth with Find & Sign. Identify property issues, assess condition, and make informed buying decisions with expert inspection support."
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
            Building Inspection
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
imageAlt="Perth buyer agent and building inspection expert helping home buyers identify potential property issues in Australia"
  imageTitle="Building Inspection Perth Australia | Find and Sign"
  heading="About Building Inspection"
  subheading="Expert guidance for every step of your property journey."
        body1="A building inspection is one of the most important steps in the property buying process and should never be overlooked. A qualified building inspector assesses the property thoroughly, identifying structural issues, safety concerns, pest activity and maintenance requirements that may not be visible during a standard inspection.
A detailed inspection report helps protect you from unexpected costs, supports informed decisions and provides confidence during final negotiations. We strongly recommend this step for every property purchase."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Building Inspection" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}