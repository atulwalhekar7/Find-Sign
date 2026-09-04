import { useState, useEffect } from "react";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../components/Footer/Footer";
import { useTheme } from "../../components/ThemeContext";
import SEO from "../../components/SEO";

import "./Contact.css";

const THEMES = {
  dark: {
    sectionBg: "#1A1A1A",
    headingColor: "#F9F9F9",
    dividerColor: "#F9F9F9",
  },
  light: {
    sectionBg: "#ebe6de",
    headingColor: "#073B2F",
    dividerColor: "#073B2F",
  },
};

import bannerImg from "../../assets/buyer-advocate-agent-perth.png";

export default function Contact() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  return (
    <>
    <SEO
  title="Contact Buyer Advocate Perth | Find & Sign Property Experts"
  description="Get in touch with Find & Sign, trusted buyer advocates in Perth. Discuss your property goals and receive expert support to find, negotiate, and secure the right property."
/>
      <section
        className="contact-hero-banner"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
            backgroundColor: "#073B2F",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        {/* SEO fallback image for background */}
        <img
          src={bannerImg}
alt="First Home Buyers Agents Perth - Buyers Agents Perth | Expert Property Buyers in Perth"
          title="Contact Find and Sign | Buyer’s Agent Perth Australia"
          loading="lazy"
          decoding="async"
          width="1920"
          height="800"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            opacity: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        />

        {/* Overlay */}
        <div className="contact-overlay" />

        {/* Content */}
        <div className="contact-hero-content">
          <h1 tabIndex={0}>Contact Your Perth Buyer’s Agent</h1>
           <p
            tabIndex={0}
            style={{
              fontFamily: "Sohne",
              fontSize: "24px",
              fontWeight: 300,
              lineHeight: "36px",
              color: "#FFF",
              margin: "24px 0 0",
              textAlign: "center",
            }}
          >
            Looking to buy in Perth or Western Australia? Tell us what you're looking for, and our buyer’s agent will come back with next steps.
          </p>
        </div>
      </section>

      <GetInTouch hideInternalHeading={true} />
      <SimpleFooter />
    </>
  );
}