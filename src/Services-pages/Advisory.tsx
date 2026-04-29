import { useEffect } from "react";
import bannerImg from "../assets/DSC06227.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/About Our Services.jpg";
import AboutSection from "../components/AboutSection";
export default function Advisory() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div style={{ background: "#fff", margin: 0, padding: 0, color: "#111" }}>

      {/* Hero */}
      <section style={{
        minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", backgroundPosition: "center",
        backgroundRepeat: "no-repeat", position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", animation: "heroFadeIn 0.8s ease both" }}>
          <h1 style={{ fontFamily: "GT Super Display Medium", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 500, color: "#fff", letterSpacing: "-1.28px", lineHeight: 1.1, margin: 0 }}>
            Advisory
          </h1>
          
        </div>
      </section>

      {/* About */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Advisory"
        subheading="Expert guidance for every step of your property journey."
        body1="Find and Sign Buyer Advocate is a boutique buyers agency based in Perth, representing buyers exclusively, whether you are purchasing the home you want to live in or building the portfolio you have always planned for.
We take on a select number of clients at any one time. Not because we have to, but because we believe a purchase of this size deserves our full attention."
        body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Advisory" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}