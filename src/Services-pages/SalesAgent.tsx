import { useEffect } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Our Services.jpg";
import AboutSection from "../components/AboutSection";

export default function SalesAgent() {
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
            Sales Agent
          </h1>
         
        </div>
      </section>

      {/* ── About ── */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Sales Agent"
        subheading="Expert guidance for every step of your property journey."
        body1="There will come a time in every property journey when you need to sell, whether that is moving on from your family home, exiting an investment, or repositioning your portfolio. A great sales agent understands how to present your property to the right buyers, price it strategically, and negotiate an outcome that reflects its true value. Having a trusted sales agent in your network before you need one means you are never starting from scratch at a critical moment. We refer only agents whose approach, integrity, and local knowledge we have seen firsthand."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Sales Agent" showService={true} />
      <SimpleFooter />
    </div>
  );
}