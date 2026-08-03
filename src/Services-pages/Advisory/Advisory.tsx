import { useEffect } from "react";

import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch//GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./Advisory.css";

export default function Advisory() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
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
        imageAlt="Perth advisory helping home buyers navigate the property purchasing process in Australia"
  imageTitle="Advisory Perth Australia | Find and Sign"
  heading="About Advisory"
  subheading="Expert guidance for every step of your property journey."
        body1="Sometimes you do not need a full buyers agent service. You simply need the right information and guidance to move forward with clarity and confidence. Our advisory service is a focused two session consultation designed for buyers who want to take the lead on their own journey but want an experienced advocate in their corner before they do.
In each session we walk you through the property purchasing process with precision and transparency, share our firsthand market knowledge, and give you honest practical feedback on where you currently stand and how to move forward. You will leave with a clear understanding of what to look for, where the risks and opportunities sit, and exactly what steps to take next."
        body2="Every session is tailored to your specific situation, your goals, and your timeline. For those who prefer to stay hands on, our advisory service gives you the knowledge and tools to do exactly that, without ever feeling like you are navigating it alone."
      />

      <GetInTouch initialService="Advisory" showService={true} />
      <SimpleFooter />
    </div>
  );
}