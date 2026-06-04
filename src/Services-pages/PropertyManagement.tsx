import { useEffect } from "react";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../components/AboutSection";

export default function PropertyManagement() {
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
            Property Management
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
        body1="Once your investment is secured, the work of protecting and growing it begins. A property manager acts as the professional link between you and your tenants, handling everything from tenant screening and lease agreements to rent collection, maintenance coordination, and routine inspections. A great property manager does not just keep your property occupied, they keep it performing. They understand the local rental market, know how to retain quality tenants, and ensure your investment is looked after with the same care and attention you would give it yourself. Choosing the right property manager from the outset sets the tone for your entire investment experience."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Property Management" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          h1, .h1 { font-size: 48px !important; line-height: 58px !important; letter-spacing: -0.02em !important; }
          h2, .h2 { font-size: 38px !important; line-height: 48px !important; }
          h3, .h3 { font-size: 28px !important; line-height: 38px !important; }
        }
      `}</style>
    </div>
  );
}