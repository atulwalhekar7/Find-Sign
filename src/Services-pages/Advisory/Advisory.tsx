import { useEffect } from "react";

import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch//GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./Advisory.css";
import SEO from "../../components/SEO";

export default function Advisory() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    <SEO
  title="Property Advisory Services Perth | Expert Property Advice | Find & Sign"
  description="Get expert property advisory services in Perth from Find & Sign. Receive personalised guidance, market insights, and strategic advice to make confident property decisions."
/>
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* Hero */}
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
            letterSpacing: "-0.02em",
            margin: 0
          }}>
            Advisory
          </h1>
        </div>
      </section>

      {/* About */}
      <AboutSection
        imageSrc={AboutServiceImg}
imageAlt="Perth buyer agent helping home buyers navigate the property purchasing process in Australia"
  imageTitle="Advisory Perth Australia | Find and Sign"
  heading="About Advisory"
  subheading="Expert guidance for every step of your property journey."
      body1="Sometimes you don't need full buyer’s agent service. You simply need the right information and guidance to make confident property decisions.
       Our advisory service provides focused consultation for buyers who want to manage their own property journey while having an experienced adviser supporting them along the way.

During each session, we guide you through the property buying process with transparency, share our local market knowledge and provide practical advice on your current position and next steps."

body2="Every advisory session is tailored to your situation, property goals and timeline. For buyers who prefer to stay hands-on, our advisory service provides the knowledge, strategy and confidence needed to navigate the market successfully."  />

      <GetInTouch initialService="Advisory" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}