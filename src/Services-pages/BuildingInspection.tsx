import { useEffect } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Our Services.jpg";
import AboutSection from "../components/AboutSection";

export default function BuildingInspection() {
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
            Building Inspection
          </h1>
          
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Our Services"
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