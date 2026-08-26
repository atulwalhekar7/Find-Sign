import { useEffect } from "react";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import AboutSection from "../../components/AboutSection";
import "./PropertyManagement.css";
import SEO from "../../components/SEO";

export default function PropertyManagement() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    <SEO
  title="Property Management Perth | Find & Sign"
  description="Find & Sign provides professional property management services in Perth, helping property owners manage rentals, maximise returns, and maintain successful property investments."
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
            Property Management
          </h1>
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
       imageAlt="Perth property manager helping landlords manage their rental properties in Australia"
  imageTitle="Property Management Perth Australia | Find and Sign"
  heading="About Property Management"
  subheading="Expert guidance for every step of your property journey."
body1="Once your investment property is secured, protecting and maximising its performance becomes the next priority. A trusted property manager provides professional support by managing tenant selection, lease agreements, rent collection, maintenance coordination, and routine inspections.

With guidance from a trusted buyer advocate Perth, you can connect with the right professionals to help safeguard your investment. A great property manager understands the local rental market, retains quality tenants, and ensures your property is managed with the care and attention it deserves.

Choosing the right property management support from the beginning helps create a stronger and more successful investment experience."//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Property Management" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}