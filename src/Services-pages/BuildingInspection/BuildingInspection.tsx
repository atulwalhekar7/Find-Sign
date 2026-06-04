import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch";
import AboutServiceImg from "../../assets/About Find&Sign.jpg";
import AboutSection from "../../components/AboutSection";
import "./BuildingInspection.css";

export default function BuildingInspection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
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
         imageAlt="Perth mortgage broker helping home buyers secure the right finance solution in Australia"
  imageTitle="Mortgage Broker Perth Australia | Find and Sign"
  imageCaption="Experienced Perth mortgage broker providing finance guidance and loan solutions for property buyers across Australia."
  heading="About Mortgage Broker"
  subheading="Expert guidance for every step of your property journey."
        body1="A building inspection is one of the most important steps in the purchase process and one of the most commonly underestimated. A qualified building inspector will assess the property from top to bottom, identifying any structural issues, safety concerns, pest activity, or maintenance requirements that may not be visible to the untrained eye. The report they provide gives you a clear and honest picture of exactly what you are buying. It protects you from unexpected costs after settlement and gives you informed leverage going into final negotiations. We strongly recommend this step on every purchase, without exception."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Building Inspection" showService={true} />
      <SimpleFooter />
    </div>
  );
}