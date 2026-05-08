import React, { useEffect, useRef, useState } from "react";
import { } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
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
  style?: React.CSSProperties;
}

function FadeUp({ children, delay = 0, style = {} }: FadeUpProps) {
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
        ...style,
      }}
    >
      {children}
    </div>
  );
}

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
        background: btnHover ? "#69E4DC" : "transparent",
        color: "#073B2F",
        cursor: "pointer",
        transform: "none",
        boxShadow: "none",
        opacity: 1,
        transition: "background 0.35s, color 0.35s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s, opacity 0.8s 0.3s",
        animation: "btnPulse 2s ease 1s 2",
        width: "fit-content",
      }}
    >
      {children}
    </button>
  );
};

// ── Service Card ──────────────────────────────────────────────────────────────
const ServiceCard = ({
  title,
  body,
  hasButton = false,
  delay = 0,
  onBookCall,
}: {
  title: string;
  body: string;
  hasButton?: boolean;
  delay?: number;
  onBookCall?: (service: string) => void;
}) => {
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
          boxShadow: hovered
            ? "0 10px 22px rgba(105, 228, 220, 0.96)"
            : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3
          style={{
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
          }}
        >
          {title}
        </h3>
        <p style={{
          color: "#757575",
          textAlign: "center",
          fontFamily: "'SohneBuch",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
        }}>
          {body}
        </p>
        {hasButton && (
          <OutlineButton onClick={() => onBookCall?.(title)}>
            Book a Call
          </OutlineButton>
        )}
      </div>
    </FadeUp>
  );
};

// ── Other Service Card ────────────────────────────────────────────────────────
const OtherServiceCard = ({
  title,
  body,
  hasButton = false,
  delay = 0,
  onBookCall,
}: {
  title: string;
  body: string;
  hasButton?: boolean;
  delay?: number;
  onBookCall?: (service: string) => void;
}) => {
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
          boxShadow: hovered
            ? "0 10px 22px rgba(105, 228, 220, 0.96)"
            : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3
          style={{
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
          }}
        >
          {title}
        </h3>
        <p style={{
          color: "#757575",
          textAlign: "center",
          fontFamily: 'SohneBuch',
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
        }}>
          {body}
        </p>
        {hasButton && (
          <OutlineButton onClick={() => onBookCall?.(title)}>
            Book a Call
          </OutlineButton>
        )}
      </div>
    </FadeUp>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState("");

  // ── Handler: navigate to the service's dedicated page ──────────────────────
  const handleBookCall = (serviceName: string) => {
    setSelectedService(serviceName);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const body1 =
    "This is our complete service for buyers who want the right property secured from the very first search through to settlement.  We manage the process on your behalf, with clear guidance at each stage so you understand what's happening, what to expect, and where the opportunity lies.  You're involved at every key moment, with decisions made together and no uncertainty around what comes next.  Every engagement is tailored to your situation, your goals and your timeline.";

  const body2 =
    "Sometimes you don't need someone to manage the entire process. You want the right guidance to make informed decisions from the first search through to securing a property. We guide you with clear advice at each stage so you understand what's happening, what to consider, and where risks and opportunities sit. You're supported throughout, with decisions made together and no uncertainty around what comes next. Every engagement is tailored to your situation, your goals and your timeline.";

  const body3 =
    "Once secured, we connect you with a trusted property manager to protect your asset, manage tenants, and keep your investment performing.";

  const body4 =
    "Once secured, we guide the process through to settlement and connect you with a trusted agent to manage contracts and ensure a smooth transfer.";

  const body5 =
    "Before you commit, we connect you with a trusted inspector to assess the property's condition and help you avoid costly issues.";

  const body6 =
    "Where relevant, we connect you with a trusted sales agent so you can plan your sale or exit strategy with confidence.";

  const body7 =
    "For investors, we connect you with a trusted quantity surveyor to prepare a depreciation schedule and support long-term returns.";

  const body8 =
    "We connect you with a trusted accountant to ensure your structure is right and you are maximising available tax benefits.";

  return (
    <div style={{ color: "#111", background: "#fff", margin: 0, padding: 0 }}>

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
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <h1
            style={{
              fontFamily: "GT Super Display Medium",
              fontSize: "64px",
              fontWeight: 500,
              color: "#FFF",
              lineHeight: "1.1",
              letterSpacing: "-1.28px",
              fontVariantNumeric: "lining-nums proportional-nums",
              margin: 0,
            }}
          >
            Services
          </h1>
        </div>
      </section>

      <AboutSection
        imageSrc={AboutServiceImg}
        heading="About Our Services"
        subheading="Expert guidance for every step of your property journey."
        body1="Find and Sign Buyer Advocate is a boutique buyers agency based in Perth, representing buyers exclusively, whether you are purchasing the home you want to live in or building the portfolio you have always planned for.
We take on a select number of clients at any one time. Not because we have to, but because we believe a purchase of this size deserves our full attention."
        body2="Our approach is simple. We assess your situation, search with purpose, and lean into our relationships to find the right property for you. Data drives our recommendations, but your specific goals shape every decision. The result is a process that feels seamless, a strategy built around you, and an outcome set up for long-term success.
From the first conversation to settlement and beyond, we are in your corner. Your sounding board. Your advocate. Your edge in the market."
      />

      {/* ── SECTION 3: Our Services ──────────────────────────────────────── */}
      <section
        className="services-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          alignSelf: "stretch",
          background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)",
        }}
      >
        <FadeUp>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                margin: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              Our Services
              <div style={{ width: "160px", height: "1px", background: "#073B2F" }} />
            </h2>
            <p
              style={{
                color: "#000",
                fontFamily: "Sohne",
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: "36px",
                marginTop: "24px",
                textAlign: "center",
              }}
            >
              Explore more about our services
            </p>
          </div>
        </FadeUp>

        {/* Top row: Buyer Advocate + Advisory */}
        <div
          className="top-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, width: "100%" }}
        >
          <ServiceCard title="Buyer Advocate" body={body1} hasButton delay={0} onBookCall={handleBookCall} />
          <ServiceCard title="Advisory" body={body2} hasButton delay={0.12} onBookCall={handleBookCall} />
        </div>

        {/* Affiliated Services heading */}
        <FadeUp style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <h2
              style={{
                margin: "0",
                color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
                textAlign: "center",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily: "GT Super Display Medium",
                fontSize: "44px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "54px",
                letterSpacing: "-0.88px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              Affiliated Services
              <div style={{ width: "160px", height: "1px", background: "#073B2F" }} />
            </h2>
            <p
              style={{
                color: "#000",
                fontFamily: "Sohne",
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: "36px",
                marginTop: "24px",
                textAlign: "center",
              }}
            >
              People we trust. Services you may need.
            </p>
            <p
              className="services-desc"
              style={{
                color: "var(--FS-System-Grey-1, #757575)",
                textAlign: "center",
                fontFamily: "SohneBuch",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "28px",
                marginTop: "56px",
              }}
            >
              At Find and Sign Buyer Advocate, securing the right property is only part of the process. We work with trusted professionals at each stage and can introduce them where relevant. You're never required to use these services. The choice is always yours.
            </p>
          </div>
        </FadeUp>

        {/* Row 1: 3 affiliated cards */}
        <div
          className="three-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, width: "100%" }}
        >
          <OtherServiceCard title="Property Management" body={body3} hasButton delay={0} onBookCall={handleBookCall} />
          <OtherServiceCard title="Settlement Agent" body={body4} hasButton delay={0.1} onBookCall={handleBookCall} />
          <OtherServiceCard title="Building Inspection" body={body5} hasButton delay={0.2} onBookCall={handleBookCall} />
        </div>

        {/* Row 2: 3 affiliated cards */}
        <div
          className="three-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, width: "100%" }}
        >
          <OtherServiceCard title="Sales Agent" body={body6} hasButton delay={0} onBookCall={handleBookCall} />
          <OtherServiceCard title="Quantity Surveyor" body={body7} hasButton delay={0.1} onBookCall={handleBookCall} />
          <OtherServiceCard title="Accounting" body={body8} hasButton delay={0.2} onBookCall={handleBookCall} />
        </div>
      </section>

      <Image1 />
      <div ref={formRef}>
        <GetInTouch initialService={selectedService} showService={true} />
      </div>
      <SimpleFooter />

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');

        .services-section {
          padding: 64px 196px 32px;
        }

        .services-desc {
          width: 100%;
          max-width: 1158px;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .services-section { padding: 64px 40px 32px; }
        }

        @media (max-width: 900px) {
          .services-section { padding: 40px 20px 32px; }
          .top-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid {
            flex-direction: column !important;
          }
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
          h2 { font-size: 32px !important; line-height: 40px !important; }
          .services-section p { font-size: 18px !important; line-height: 28px !important; }
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