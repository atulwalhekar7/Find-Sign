import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./SalesAgent.css";
import SEO from "../../components/SEO";

export default function SalesAgent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    <SEO
  title="Property Sales Agent Perth | Real Estate Selling Experts | Find & Sign"
  description="Work with experienced property sales agents in Perth through Find & Sign. Get professional support with property marketing, negotiations, and achieving successful sales outcomes."
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
              letterSpacing:  "-0.02em",
              margin: 0,
            }}
          >
            Sales Agent
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
imageAlt="Perth buyer agent helping home sellers navigate the property selling process in Australia"
  imageTitle="Sales Agent Perth Australia | Find and Sign"
  heading="About Sales Agent"
  subheading="Expert guidance for every step of your property journey."
        body1="At some point in every property journey, selling becomes the next step, whether you are moving homes, exiting an investment or repositioning your property portfolio.
Having a reliable property network in place before you need it ensures you are prepared when the time comes. We recommend only professionals whose approach, integrity and local market knowledge we have experienced firsthand."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Sales Agent" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}