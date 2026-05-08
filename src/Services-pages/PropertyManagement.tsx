import { useEffect } from "react";
import bannerImg from "../assets/family-home-buyers-australia-find-and-sign.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/niki-nakrani-top-buyers-agent-perth-find-and-sign.jpg";
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
            Property Management
          </h1>
          
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Property Management"
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
      `}</style>
    </div>
  );
}