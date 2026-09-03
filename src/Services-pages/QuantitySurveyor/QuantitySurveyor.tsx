import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./QuantitySurveyor.css";
import SEO from "../../components/SEO";

export default function QuantitySurveyor() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>

    <SEO
  title="Quantity Surveyor Perth | Property Tax & Accounting Services | Find & Sign"
  description="Find & Sign connects property buyers and investors with expert quantity surveyor and accounting services in Perth. Get support with property depreciation, tax benefits, and financial planning."
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
Accounting and quantity surveyor
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        imageAlt="Perth quantity surveyor helping property owners maximize their tax deductions in Australia"
  imageTitle="Quantity Surveyor Perth Australia | Find and Sign"
  heading="About Accounting and quantity surveyor"
  subheading="Expert guidance for every step of your property journey."
        body1="An accountant and quantity surveyor are valuable members of your property investment team. A quantity surveyor prepares a detailed depreciation schedule, identifying eligible assets and deductions that can help maximise the financial benefits of your investment over time.
Your accountant can then use this information to help optimise your financial position, from ownership structure to available deductions. Involving these experts early, ideally before purchasing, can make a significant difference to your long-term investment outcomes."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Accounting / Quantity Surveyor" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}