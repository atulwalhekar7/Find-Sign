import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";
import bannerImg from "../assets/DSC06227.jpg";
import AboutServiceImg from "../assets/About Our Services.jpg";
import Image1 from "../components/Image1";


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
const OutlineButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  const [btnHover, setBtnHover] = useState(false);
  return (
  <button
  onMouseEnter={() => setBtnHover(true)}
  onMouseLeave={() => setBtnHover(false)}
  onClick={onClick}
  style={{
    display: "flex",
    height: "48px",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    borderRadius: "8px",
    border: "1px solid #69E4DC",

    fontFamily: "CX80",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    letterSpacing: "4.8px",

    background: btnHover
      ? "#69E4DC"
      : "transparent",

    color: btnHover ? "#073B2F" : "#073B2F",

    cursor: "pointer",
    transform: "none",
    boxShadow: "none",
    opacity: 1,

    transition:
      "background 0.35s, color 0.35s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s, opacity 0.8s 0.3s",

    animation: "btnPulse 2s ease 1s 2",

    width: "fit-content",
  }}
>
  {children}
</button>
  );
};



const ServiceCard = ({ title, body, hasButton = false, delay = 0, onBookCall }: { title: string; body: string; hasButton?: boolean; delay?: number; onBookCall?: (service: string) => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flex: "1 0 0",
          boxSizing: "border-box",
          borderRadius: "16px",
          border: "2px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
          background: "var(--Brand-Utility-FS-WHITE, #FFF)",
          transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 22px rgba(105, 228, 220, 0.96)" : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3 style={{
          color: "#000",
          textAlign: "center",
          fontVariantNumeric: "lining-nums proportional-nums",
          fontFamily: 'GT Super Display Medium', 
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
          color: "#757575",
          textAlign: "center",
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
        {hasButton && <OutlineButton onClick={() => onBookCall?.(title)}>Book a Call</OutlineButton>}
      </div>
    </FadeUp>
  );
};

const OtherServiceCard = ({ title, body, hasButton = false, delay = 0, onBookCall }: { title: string; body: string; hasButton?: boolean; delay?: number; onBookCall?: (service: string) => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flex: "1 0 0",
          boxSizing: "border-box",
          borderRadius: "16px",
          border: "2px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
          background: "var(--Brand-Utility-FS-WHITE, #FFF)",
          transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 22px rgba(105, 228, 220, 0.96)" : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3 style={{
          color: "#000",
          textAlign: "center",
          fontVariantNumeric: "lining-nums proportional-nums",
          fontFamily: "GT Super Display Medium",
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
          color: "#757575",
          textAlign: "center",
          fontFamily: ' Sohne',
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
        }}>
          {body}
        </p>
        {hasButton && <OutlineButton onClick={() => onBookCall?.(title)}>Book a Call</OutlineButton>}
      </div>
    </FadeUp>
  );
};

// ── Accounting card (horizontal, fixed 160×160 image) ────────────────────────





// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const body =
    "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState("");

  const handleBookCall = (serviceName: string) => {
    setActiveService(serviceName);
    setIsModalOpen(true);
  };




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
            fontFamily: "GT Super Display Medium",
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
        </div>
      </section>

      <AboutSection
  imageSrc={AboutServiceImg}
  heading="About Our Services"
  subheading="" // This was already removed in the previous turn
  body1="Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look."
  body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
/>

      {/* ── SECTION 3: Our Services ──────────────────────────────────────── */}
      <section 
        style={{ 
          display: "flex",
          padding: "64px 196px 32px",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
          alignSelf: "stretch",
          background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)"
        }}
      >
        <FadeUp>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <h2
              style={{
                color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
                fontSize: "44px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "54px",
                letterSpacing: "-0.88px",
                margin: "0 0 12px",
                borderBottom: "2px solid #073B2F",
                paddingBottom: "8px",
                width: "fit-content"
              }}
            >
              Our services
            </h2>
          </div>
        </FadeUp>

        {/* Top row: Buyer Advocate + Advisory — horizontal cards */}
        <div className="top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <ServiceCard title="Buyer Advocate" body={body} hasButton delay={0} onBookCall={handleBookCall} />
          <ServiceCard title="Advisory" body={body} hasButton delay={0.12} onBookCall={handleBookCall} />
        </div>

        {/* Other Services */}
        <FadeUp>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", width: "100%" }}>
            <h3 
              style={{
                margin: 0,
                color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
                fontSize: "44px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "54px",
                letterSpacing: "-0.88px",
              }}
            >
              Affiliated Services
            </h3>
            <div style={{ width: "338px", height: "1px", background: "var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)" }} />
          </div>
        </FadeUp>

        {/* Row 1: 3 cards with image on top */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          <OtherServiceCard title="Property Management" body={body} hasButton delay={0} onBookCall={handleBookCall} />
          <OtherServiceCard title="Settlement Agent" body={body} hasButton delay={0.1} onBookCall={handleBookCall} />
          <OtherServiceCard title="Building Inspection" body={body} hasButton delay={0.2} onBookCall={handleBookCall} />
        </div>

        {/* Accounting — horizontal small card */}
       

        {/* Row 2: 3 cards */}
        <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          <OtherServiceCard title="Sales Agent" body={body} hasButton delay={0} onBookCall={handleBookCall} />
          <OtherServiceCard title="Quantity Surveyor" body={body} hasButton delay={0.1} onBookCall={handleBookCall} />
          <OtherServiceCard title="Accounting" body={body} hasButton delay={0.2} onBookCall={handleBookCall} />
        </div>
      </section>
              <Image1/>
      <SimpleGetInTouch initialService={activeService} />

      <Dialog 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": { borderRadius: '16px', overflow: 'hidden' }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton 
            onClick={() => setIsModalOpen(false)}
            sx={{ position: 'absolute', right: 20, top: 20, zIndex: 10, color: '#073B2F' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </IconButton>
          <SimpleGetInTouch initialService={activeService} />
        </DialogContent>
      </Dialog>
      
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