import { useEffect } from "react";
import bannerImg from "../assets/service-banner-find-and-sign-buyers-australia.jpg";
import SimpleFooter from "../components/SimpleFooter";
import GetInTouch from "../components/GetInTouch";
import AboutServiceImg from "../assets/about-service-find-and-sign.jpg";
import AboutSection from "../components/AboutSection";

export default function Accounting() {
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
            Accounting
          </h1>
          
        </div>
      </section>

      {/* About */}
      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Accounting"
        subheading="Expert guidance for every step of your property journey."
        body1="Two of the most overlooked yet most valuable members of your investment team. A quantity surveyor prepares a detailed depreciation schedule for your property, identifying every eligible asset that can be claimed as a tax deduction over time. This alone can significantly reduce your taxable income each financial year. Your accountant then takes that information and ensures your overall financial structure is working as efficiently as possible. From the way your investment is held to the deductions you are entitled to claim, a property savvy accountant ensures you are not leaving money on the table. Getting these two professionals involved early, ideally before you purchase, can have a meaningful impact on your long term returns."
//         body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
// From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      <GetInTouch initialService="Accounting" showService={true} />
      <SimpleFooter />
    </div>
  );
}