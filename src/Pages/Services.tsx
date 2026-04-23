import React, { useEffect, useRef, useState } from "react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";

import bannerImg from "../assets/DSC06227.jpg";
import AboutServiceImg from "../assets/About Our Services.jpg";


// ── Animation hook ────────────────────────────────────────────────────────────
import type { RefObject } from 'react';

function useInView(threshold = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Animated wrapper ──────────────────────────────────────────────────────────
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
}

function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

// ── Outline Button ────────────────────────────────────────────────────────────

// ── Outline Button ────────────────────────────────────────────────────────────
const OutlineButton = ({ children }: { children: React.ReactNode }) => {
  const [btnHover, setBtnHover] = useState(false);
  return (
  <button
    onMouseEnter={() => setBtnHover(true)}
    onMouseLeave={() => setBtnHover(false)}
    style={{
      display: "flex",
      height: "48px",
      padding: "12px 16px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "8px",
      border: "1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
      background: btnHover ? "var(--Brand-Contrast-FS-AQUA, #69E4DC)" : "transparent",
      color: "#111",
      fontSize: "12px",
      letterSpacing: "4px",
      fontWeight: 600,
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "fit-content",
    }}
  >
    {children}
  </button>
  );
};



const ServiceCard = ({ title, body, hasButton = false, delay = 0 }: { title: string; body: string; hasButton?: boolean; delay?: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "277px",
          minWidth: "277px",
          maxWidth: "277px",
          height: "100%",
          padding: "24px",
          gap: "20px",
          boxSizing: "border-box",
          borderRadius: "16px",
          background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)",
          transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 22px rgba(11, 215, 205, 0.96)" : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3 style={{
          width: "229px",
          color: "#000",
          fontVariantNumeric: "lining-nums proportional-nums",
          fontFamily: "'GT Super Display Medium', serif",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "40px",
          letterSpacing: "-0.64px",
          margin: 0,
        }}>
          {title}
        </h3>
        <p style={{
          width: "229px",
          color: "#757575",
          fontFamily: "'Söhne', sans-serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
        }}>
          {body}
        </p>
        {hasButton && <OutlineButton>View more</OutlineButton>}
      </div>
    </FadeUp>
  );
};

// ── Accounting card (horizontal, fixed 160×160 image) ────────────────────────




// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const body =
    "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.";



  return (
    <div style={{  color: "#111", background: "#fff", margin: 0, padding: 0 }}>

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
     <section
  style={{
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    position: "relative",
    padding: "0 20px",
  }}
>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "90%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
            borderRadius: "12px",
/* border: "1px solid rgba(255,255,255,0.1)", */
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
<h1 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "64px",
            fontWeight: 500,
            color: "#FFF",
            lineHeight: "1.1",
            letterSpacing: "-1.28px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Services
          </h1>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, lineHeight: "1.5", margin: "24px auto 0", opacity: 0.9 }}>
            Find & Sign
          </p>
        </div>
      </section>

      <AboutSection
  imageSrc={AboutServiceImg}
  heading="About Our Services"
  subheading="Subheading"
  body1="Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look."
  body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
/>

      {/* ── SECTION 3: Our Services ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 80px" }}>
        <FadeUp>
<h2
  style={{
    margin: "0 0 4px",
    color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
    fontFamily: "GT Super Display Medium",
    fontSize: "44px",
    fontWeight: 500,
    lineHeight: "120%",
    letterSpacing: "-0.48px",
    width: "100%"
  }}
>
  Our services
</h2>   
<p
  style={{
    margin: "0 0 32px",
    marginTop: "4px",
    color: "#888",
    fontFamily: "Sohne",
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "120%",
    width: "100%"
  }}
>
  Subheading
</p>        </FadeUp>

        {/* Top row: Buyer Advocate + Advisory — horizontal cards */}
        <div className="top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}>
          <ServiceCard title="Buyer Advocate" body={body} hasButton delay={0} />
          <ServiceCard title="Advisory" body={body} hasButton delay={0.12} />
        </div>

        {/* Other Services */}
        <FadeUp>
          <h3 
          style={{
             margin: "0 0 30px",
    color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
    fontFamily: "GT Super Display Medium",
    fontSize: "44px",
    fontWeight: 500,
    lineHeight: "120%",
    letterSpacing: "-0.48px",
    width: "100%"
            }}
             >
              Other Services</h3>
        </FadeUp>

        {/* Row 1: 3 cards with image on top */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginBottom: 40 }}>
          <ServiceCard title="Property Management" body={body} hasButton delay={0} />
          <ServiceCard title="Settlement Agent" body={body} hasButton delay={0.1} />
          <ServiceCard title="Building Inspection" body={body} hasButton delay={0.2} />
        </div>

        {/* Accounting — horizontal small card */}
       

        {/* Row 2: 3 cards */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          <ServiceCard title="Sales Agent" body={body} hasButton delay={0} />
          <ServiceCard title="Quantity Surveyor" body={body} hasButton delay={0.1} />
          <ServiceCard title="TBC" body={body} hasButton delay={0.2} />
        </div>
      </section>

      <SimpleGetInTouch />
      <SimpleFooter />

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .top-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            flex-direction: column !important;
          }
          .about-grid > div > div[style] {
            width: 100% !important;
          }
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
        }

        @media (max-width: 768px) {
          .three-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .three-grid {
            grid-template-columns: 1fr !important;
          }
          h1 { font-size: 36px !important; }
        }
      `}</style>
    </div>
  );
}