import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../components/SimpleFooter";
import AboutSection from "../../components/AboutSection";
import bannerImg from "../../assets/buyer-advocate-find-and-sign-perth-australia.jpg";
import AboutServiceImg from "../../assets/perth-buyer-advocate-services-australia.jpg";
import Image4 from "../../components/Image4/Image4";
import { useTheme } from "../../components/ThemeContext";
import "./Services.css";

// ── Theme ─────────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    pageBg:        "#121212",
    sectionBg:     "#1A1A1A",
    cardBg:        "#1E1E1E",
    cardBorder:    "#69E4DC",
    headingColor:  "#F9F9F9",
    dividerColor:  "#F9F9F9",
    subTextColor:  "#EAE5DF",
    bodyTextColor: "#A0A0A0",
    titleColor:    "#F9F9F9",
    disclosureColor: "#A0A0A0",
  },
  light: {
    pageBg:        "#FFFFFF",
    sectionBg:     "#F9F9F9",
    cardBg:        "#FFFFFF",
    cardBorder:    "#69E4DC",
    headingColor:  "#073B2F",
    dividerColor:  "#073B2F",
    subTextColor:  "#000000",
    bodyTextColor: "#757575",
    titleColor:    "#000000",
    disclosureColor: "#757575",
  },
};

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
const OutlineButton = ({
  children,
  onClick,
  theme,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  theme: keyof typeof THEMES;
}) => {
  const t = THEMES[theme];
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
        color: btnHover ? "#073B2F" : t.headingColor,
        cursor: "pointer",
        transition: "all 0.35s ease",
        transform: btnHover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: btnHover ? "0 8px 20px rgba(105, 228, 220, 0.4)" : "none",
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
  theme,
}: {
  title: string;
  body: string;
  hasButton?: boolean;
  delay?: number;
  onBookCall?: (service: string) => void;
  theme: keyof typeof THEMES;
}) => {
  const t = THEMES[theme];
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
          border: `2px solid ${t.cardBorder}`,
          background: t.cardBg,
          transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, background 0.3s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 10px 22px rgba(105, 228, 220, 0.96)"
            : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3
          tabIndex={0}
          style={{
            color: t.titleColor,
            textAlign: "center",
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: "GT Super Display Medium",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "40px",
            letterSpacing: "-0.64px",
            margin: 0,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </h3>
        <p tabIndex={0} style={{
          color: t.bodyTextColor,
          textAlign: "center",
          fontFamily: "SohneBuch",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
          transition: "color 0.3s ease",
        }}>
          {body}
        </p>
        {hasButton && (
          <OutlineButton onClick={() => onBookCall?.(title)} theme={theme}>
            Learn More
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
  theme,
}: {
  title: string;
  body: string;
  hasButton?: boolean;
  delay?: number;
  onBookCall?: (service: string) => void;
  theme: keyof typeof THEMES;
}) => {
  const t = THEMES[theme];
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
          border: `2px solid ${t.cardBorder}`,
          background: t.cardBg,
          transition: "transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, background 0.3s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 10px 22px rgba(105, 228, 220, 0.96)"
            : "0 4px 12px rgba(0,0,0,0.03)",
          cursor: "default",
        }}
      >
        <h3
          tabIndex={0}
          style={{
            color: t.titleColor,
            textAlign: "center",
            fontVariantNumeric: "lining-nums proportional-nums",
            fontFamily: "GT Super Display Medium",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "40px",
            letterSpacing: "-0.64px",
            margin: 0,
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </h3>
        <p tabIndex={0} style={{
          color: t.bodyTextColor,
          textAlign: "center",
          fontFamily: "SohneBuch",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
          margin: 0,
          flex: 1,
          transition: "color 0.3s ease",
        }}>
          {body}
        </p>
        {hasButton && (
          <OutlineButton onClick={() => onBookCall?.(title)} theme={theme}>
            Learn More
          </OutlineButton>
        )}
      </div>
    </FadeUp>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedService] = useState("");
  const { theme } = useTheme();
  const t = THEMES[theme];

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

  // ── Handler: navigate to the service's dedicated page ──────────────────────
  const handleBookCall = (serviceName: string) => {
    const slug = serviceName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
  };

  const body1 = "This is our complete service for buyers who want the right property secured from the very first search through to settlement.  We manage the process on your behalf, with clear guidance at each stage so you understand what's happening, what to expect, and where the opportunity lies.  You're involved at every key moment, with decisions made together and no uncertainty around what comes next.  Every engagement is tailored to your situation, your goals and your timeline.";
  const body2 = "Sometimes you don't need someone to manage the entire process. You want the right guidance to make informed decisions from the first search through to securing a property. We guide you with clear advice at each stage so you understand what's happening, what to consider, and where risks and opportunities sit. You're supported throughout, with decisions made together and no uncertainty around what comes next. Every engagement is tailored to your situation, your goals and your timeline.";
  const body3 = "Before the right money is in the right place, nothing else can move. A great mortgage broker cuts through the noise, secures the right finance structure for your situation, and ensures you are set up correctly from the very beginning of your purchase journey.";
  const body4 = "The legal side of purchasing a property involves more moving parts than most people realise. A skilled settlement agent ensures your contracts are handled correctly, your deadlines are met, and your purchase is transferred smoothly and securely.";
  const body5 = "Never skip this step. A thorough building inspection gives you an honest picture of the property's condition before you commit, protecting you from costly surprises down the track.";
  const body6 = "Once you have secured your investment, you need someone who will look after it as carefully as you do. A great property manager protects your asset, manages your tenants, and keeps your investment performing.";
  const body7 = "Two of the most overlooked yet most valuable members of your investment team. The right accountant and quantity surveyor ensure your structure is correct, your depreciation is maximised, and every financial entitlement available to you is working in your favour.";
  const body8 = "Whether you are selling before you buy or planning an exit strategy on an investment, having a trusted sales agent in your network means you are never starting from scratch when it matters most.";

  return (
    <div style={{ color: t.subTextColor, background: t.pageBg, margin: 0, padding: 0, transition: "background 0.3s ease, color 0.3s ease" }}>

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
     <section
  className="services-hero-banner"
  style={{
    minHeight: "60vh",
    aspectRatio: "16 / 7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "0 20px",
      backgroundColor: "#073B2F",
  }}
>
  <img
    src={bannerImg}
alt="Perth Buyer Advocate Niki Nakrani helping home buyers in Perth, Western Australia"
    title="Perth Buyer Advocate Australia | Find and Sign"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    width="1920"
    height="840"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />

  <figcaption
    style={{
      position: "absolute",
      left: "-9999px",
    }}
  >
    Professional Perth Buyer Advocate Australia services helping buyers find,
    negotiate and secure residential and investment properties.
  </figcaption>

  

  {/* Existing content */}
        <div className={`video-loader-container ${!isBannerLoading ? "hidden" : ""}`} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 3,
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
          <div className={`attractive-loader ${!isBannerLoading ? "hidden" : ""}`} aria-hidden="true" />
          <h1
            tabIndex={0}
            style={{
              fontFamily: "GT Super Display Medium",
              fontSize: "56px",
              fontWeight: 500,
              color: "#FFF",
              lineHeight: "1.1",
letterSpacing: "-0.02em",
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
 imageAlt="Perth Buyer Advocate Australia helping clients secure residential and investment properties"
  imageTitle="Buyer Advocate Perth Australia | Find and Sign"
  heading="About Buyer Advocacy"
  subheading="Expert guidance for every step of your property journey."        body1="Find and Sign Buyer Advocate is a boutique buyers agency based in Perth, representing buyers exclusively, whether you are purchasing the home you want to live in or building the portfolio you have always planned for.
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
          alignSelf: "stretch",
          background: t.sectionBg,
          transition: "background 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1512px", width: "100%", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2
                tabIndex={0}
                style={{
                  color: t.headingColor,
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
                  transition: "color 0.3s ease",
                }}
              >
                Our Services
                <div style={{ width: "160px", height: "1px", background: t.dividerColor, transition: "background 0.3s ease" }} />
              </h2>
              <p
                tabIndex={0}
                style={{
                  color: t.subTextColor,
                  fontFamily: "Sohne",
                  fontSize: "24px",
                  fontWeight: 300,
                  lineHeight: "36px",
                  marginTop: "24px",
                  textAlign: "center",
                  marginBottom: "56px",
                  transition: "color 0.3s ease",
                }}
              >
                Explore more about our services
              </p>
            </div>
          </FadeUp>

          {/* Top row: Buyer Advocate + Advisory */}
          <div className="top-grid grid-12">
            <div className="col-6 col-sm-12">
              <ServiceCard title="Buyer Advocate" body={body1} hasButton delay={0} onBookCall={handleBookCall} theme={theme} />
            </div>
            <div className="col-6 col-sm-12">
              <ServiceCard title="Advisory" body={body2} hasButton delay={0.12} onBookCall={handleBookCall} theme={theme} />
            </div>
          </div>

          {/* Affiliated Services heading */}
          <FadeUp style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <h2
                tabIndex={0}
                style={{
                  margin: "56px 0 0",
                  color: t.headingColor,
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
                  transition: "color 0.3s ease",
                }}
              >
                Affiliated Services
                <div style={{ width: "160px", height: "1px", background: t.dividerColor, transition: "background 0.3s ease" }} />
              </h2>
              <p
                tabIndex={0}
                style={{
                  color: t.subTextColor,
                  fontFamily: "Sohne",
                  fontSize: "24px",
                  fontWeight: 300,
                  lineHeight: "36px",
                  marginTop: "24px",
                  marginBottom: "56px",
                  textAlign: "center",
                  transition: "color 0.3s ease",
                }}
              >
                People we trust. Services you may need.
              </p>
              <p
                tabIndex={0}
                className="services-desc"
                style={{
                  color: t.bodyTextColor,
                  textAlign: "center",
                  fontFamily: "SohneBuch",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                  marginTop: "0px",
                  marginBottom: "86px",
                  margin: "0 auto 86px",
                  transition: "color 0.3s ease",
                }}
              >
                At Find and Sign Buyer Advocate, securing the right property is only part of the process. We work with trusted professionals at each stage and can introduce them where relevant. You're never required to use these services. The choice is always yours.
              </p>
            </div>
          </FadeUp>

          {/* Row 1: 3 affiliated cards */}
          <div className="grid-12" style={{ marginBottom: "86px" }}>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Mortgage Broker" body={body3} hasButton delay={0} onBookCall={() => navigate("/services/accounting")} theme={theme} />
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Settlement Agent" body={body4} hasButton delay={0.1} onBookCall={handleBookCall} theme={theme} />
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Building Inspection" body={body5} hasButton delay={0.2} onBookCall={handleBookCall} theme={theme} />
            </div>
          </div>

          {/* Row 2: 3 affiliated cards */}
          <div className="grid-12" style={{ marginBottom: "64px" }}>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Property Management" body={body6} hasButton delay={0} onBookCall={handleBookCall} theme={theme} />
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Accounting / Quantity Surveyor" body={body7} hasButton delay={0.1} onBookCall={() => navigate("/services/quantity-surveyor")} theme={theme} />
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <OtherServiceCard title="Sales Agent" body={body8} hasButton delay={0.2} onBookCall={handleBookCall} theme={theme} />
            </div>
          </div>

          {/* ── Affiliated Services Disclosure ─────────────────────────────── */}
          <FadeUp style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
                gap: "8px",
              }}
            >
              <p
                tabIndex={0}
                style={{
                  color: t.disclosureColor,
                  textAlign: "center",
                  fontFamily: "SohneBuch",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  margin: 0,
                  transition: "color 0.3s ease",
                }}
              >
                Affiliated Services Disclosure
              </p>
              <p
                tabIndex={0}
                style={{
                  alignSelf: "stretch",
                  color: t.disclosureColor,
                  textAlign: "center",
                  fontFamily: "SohneBuch",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  margin: "0 auto",
                  maxWidth: "1158px",
                  transition: "color 0.3s ease",
                }}
              >
                The affiliated services listed on this page are independent businesses and professionals that Find and Sign Buyer Advocate has developed relationships with over time. While we may refer or introduce these services, we do so based on our genuine belief in the quality of their work. Please note that Find and Sign Buyer Advocate may receive a commission or referral fee in some instances. We are not responsible for the advice, outcomes, or conduct of any third party service provider. All decisions regarding the engagement of any affiliated service remain entirely at your discretion.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Image4 />
      <div ref={formRef}>
        <GetInTouch initialService={selectedService} showService={true} />
      </div>
      <SimpleFooter />

    </div>
  );
}