import { useEffect } from "react";
import bannerImg from "../assets/service-banner-find-and-sign-buyers-australia.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/about-service-find-and-sign.jpg";
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
        body1="Sometimes you do not need a full buyers agent service. You simply need the right information and guidance to move forward with clarity and confidence. Our advisory service is a focused two session consultation designed for buyers who want to take the lead on their own journey but want an experienced advocate in their corner before they do.
In each session we walk you through the property purchasing process with precision and transparency, share our firsthand market knowledge, and give you honest practical feedback on where you currently stand and how to move forward. You will leave with a clear understanding of what to look for, where the risks and opportunities sit, and exactly what steps to take next."
        body2="Every session is tailored to your specific situation, your goals, and your timeline. For those who prefer to stay hands on, our advisory service gives you the knowledge and tools to do exactly that, without ever feeling like you are navigating it alone."
      />

      <GetInTouch initialService="Advisory" showService={true} />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}