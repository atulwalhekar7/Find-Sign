import React, { useEffect, useRef, useState } from "react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";
import aboutContentImg from "../assets/DSC06081.jpg";
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
  display: "inline-flex",
  padding: "24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  borderRadius: "16px",
  // background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)",

  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
}}
    >
      {children}
    </div>
  );
}

// ── Placeholder image ─────────────────────────────────────────────────────────
interface PlaceholderProps {
  width?: string | number;
  height?: string | number;
}

const Placeholder = ({ width = "100%", height = 160 }: PlaceholderProps) => (
  <div
    style={{
      width,
      height,
      background: "#e8e8e8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#aaa",
      fontSize: 12,
      borderRadius: 6,
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* mountain/image icon */}
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  </div>
);

// ── Outline Button ────────────────────────────────────────────────────────────
const OutlineButton = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      padding: "8px 18px",
      borderRadius: 6,
      border: "1.5px solid #222",
      background: "transparent",
      color: "#222",
      
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      transition: "background 0.18s, color 0.18s",
      display: "inline-block",
      width: "fit-content",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "#222"; e.currentTarget.style.color = "#fff"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#222"; }}
  >
    {children}
  </button>
);



// ── Top Service Card (Horizontal: image left + text right) ────────────────────
const TopServiceCard = ({ title, body, delay = 0 }: { title: string; body: string; delay?: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: 24,
          border: "1.5px solid #e0e0e0",
          borderRadius: 10,
          background: "#fff",
          alignItems: "flex-start",
          transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
          boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          borderColor: hovered ? "#bbb" : "#e0e0e0",
          cursor: "default",
        }}
      >
        {/* Fixed 160×160 image */}
        <div style={{ width: 160, height: 160, flexShrink: 0, borderRadius: 6, overflow: "hidden" }}>
          <Placeholder width={160} height={160} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#111" }}>
            {title}
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.7 }}>
            {body}
          </p>
        </div>
      </div>
    </FadeUp>
  );
};

// ── Small Service Card (vertical, 3-col grid) ─────────────────────────────────
const SmallServiceCard = ({ title, body, hasButton = false, delay = 0 }: { title: string; body: string; hasButton?: boolean; delay?: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
  display: "inline-flex",
  padding: "24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  borderRadius: "16px",
  background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)",

  transition: "transform 0.25s",
  transform: hovered ? "translateY(-4px)" : "translateY(0)",
  cursor: "default",
}}
      >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 8,
              overflow: "hidden",
              flexShrink: 0,
              transition: "box-shadow 0.25s",
              boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.10)" : "none",
            }}
          >
            <Placeholder width={160} height={160} />
          </div>
<h3
  style={{
    margin: 0,
    color: "#000",

    fontFamily: "GT Super Display",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "-0.64px",

    fontVariantNumeric: "lining-nums proportional-nums",

    width: "229px",
  }}
>          {title}
        </h3>
<p
  style={{
    margin: 0,
    width: "229px",
    color: "#757575",

    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  }}
>          {body}
        </p>
        {hasButton && <OutlineButton>Button</OutlineButton>}
      </div>
    </FadeUp>
  );
};

// ── Accounting card (horizontal, fixed 160×160 image) ────────────────────────
const AccountingCard = ({ title, body, delay = 0 }: { title: string; body: string; delay?: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-start",
          transition: "transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          cursor: "default",
        }}
      >
        <div style={{ width: 160, height: 160, flexShrink: 0, borderRadius: 6, overflow: "hidden" }}>
          <Placeholder width={160} height={160} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#111" }}>
            {title}
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.7}}>
            {body}
          </p>
        </div>
      </div>
    </FadeUp>
  );
};



// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const body =
    "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.";

  const longBody = `Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.`;

  return (
    <div style={{  color: "#111", background: "#fff", margin: 0, padding: 0 }}>

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
     <section
  style={{
    minHeight: "100vh",
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
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
            maxWidth: "750px",
            margin: "0 auto",
            padding: "60px 40px",
            backgroundColor: "rgba(33,33,33,0.85)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1 style={{ fontSize: "56px", fontWeight: 500, color: "#FFF", lineHeight: "64px", letterSpacing: "-1.12px", margin: 0 }}>
            Services
          </h1>
          <p style={{ color: "#CCCCCC", fontSize: "24px", fontWeight: 300, lineHeight: "36px", maxWidth: "600px", margin: "20px auto 0" }}>
            Find & Sign
          </p>
        </div>
      </section>

      <AboutSection
  imageSrc={AboutServiceImg}
  heading="About Find & Sign"
  subheading="Subheading"
  body1="Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look."
  body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
/>

      {/* ── SECTION 3: Our Services ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 80px" }}>
        <FadeUp>
          <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700 }}>Our services</h2>
          <p style={{ margin: "0 0 32px", fontSize: 14, color: "#383b3f" }}>Subheading</p>
        </FadeUp>

        {/* Top row: Buyer Advocate + Advisory — horizontal cards */}
        <div className="top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}>
          <TopServiceCard title="Buyer Advocate" body={body} delay={0} />
          <TopServiceCard title="Advisory" body={body} delay={0.12} />
        </div>

        {/* Other Services */}
        <FadeUp>
          <h3 style={{ margin: "0 0 24px", fontSize: 18, fontWeight: 600 }}>Other Services</h3>
        </FadeUp>

        {/* Row 1: 3 cards with image on top */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginBottom: 40 }}>
          <SmallServiceCard title="Property Management" body={body} hasButton delay={0} />
         <SmallServiceCard 
  title={<>Settlement<br />Agent</>} 
  body={body} 
  hasButton 
  delay={0.1} 
/>
          <SmallServiceCard title="Building Inspection" body={body} hasButton delay={0.2} />
        </div>

        {/* Accounting — horizontal small card */}
       

        {/* Row 2: 3 cards */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          <SmallServiceCard title="Sales Agent" body={body} delay={0} />
          <SmallServiceCard title="Quantity Surveyor" body={body} delay={0.1} />
          <SmallServiceCard title="TBC" body={body} delay={0.2} />
        </div>
      </section>

      <SimpleGetInTouch />
      <SimpleFooter />

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
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
        }

        @media (max-width: 768px) {
          .three-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 500px) {
          .three-grid {
            grid-template-columns: 1fr !important;
          }
          h1 { font-size: 36px !important; line-height: 44px !important; }
        }
      `}</style>
    </div>
  );
}