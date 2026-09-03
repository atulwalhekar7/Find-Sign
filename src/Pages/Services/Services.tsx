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
import SEO from "../../components/SEO";

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

const body1 = `Our complete buyer’s agent service is designed for buyers who want to secure the right property from the initial search through to settlement. We manage the entire buying process on your behalf, providing clear guidance and strategic support at every stage.

You will understand what is happening, what to expect and where the best opportunities exist. You remain involved at every key decision point, with strategies developed together and complete clarity throughout the property-buying journey.

Every engagement is customised around your unique situation, property goals and timeline, ensuring a personalised approach to finding and securing the right property with confidence.`;
const body2 = "Sometimes you don’t need someone to manage the entire property buying process. You need the right guidance to make informed decisions from the initial search through to securing the right property. Our advisory service provides clear advice and strategic support at every stage, helping you understand what to consider, identify potential risks and recognise valuable opportunities in the market.You remain in control while we support you with market insights, local knowledge and a clear buying strategy. Every engagement is tailored to your individual situation, property goals and timeline.";
  const body3 = "Before making the right property decision, you need the right financial foundation. We work alongside experienced finance professionals to help ensure you are prepared, understand your options and are positioned correctly from the beginning of your property buying journey.";
  const body4 = "The legal side of purchasing a property involves many important details that require careful attention. We work alongside experienced settlement professionals to ensure contracts are handled correctly, deadlines are managed and your property purchase progresses smoothly and securely.";
  const body5 = "Never skip this step. A thorough building inspection gives you a clear picture of the property’s condition before you commit, helping you make an informed decision and avoid costly surprises throughout your property purchase journey.";
  const body6 = "Once you have secured your investment, you need the right support to protect and manage your property. We can help connect you with reliable property management solutions that protect your asset, support your tenants and help keep your investment performing for the long term.";
  const body7 = "An accountant and quantity surveyor are valuable members of your property investment team. They can help ensure your investment structure is effective, depreciation opportunities are maximised and available financial benefits are considered.";
  const body8 = "Whether you are selling before you buy or planning your next investment move, having a strong property network can ensure you have the right guidance and connections when it matters most. We can help connect you with experienced professionals when the time comes.";

  return (

    <>

      <SEO
        title="Buyer Advocate Perth Services | Property Search & Negotiation | Find & Sign"
        description="Find & Sign provides professional Buyer Advocate services in Perth, helping buyers with property search, due diligence, negotiation, and expert advice to make confident property decisions."
      />
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
            <p
            className="hero-subtitle"
            tabIndex={0}
            style={{
              fontFamily: "Sohne",
              fontSize: "24px",
              fontWeight: 300,
              lineHeight: "36px",
              color: "#ffffff",
              margin: "24px 0 0",
              textAlign: "center",
            }}
          >
Buyer’s agent services for confident property decisions
          </p>
        </div>
      </section>

      <AboutSection
        imageSrc={AboutServiceImg}
 imageAlt="Perth Buyer Advocate Australia helping clients secure residential and investment properties"
  imageTitle="Buyer Advocate Perth Australia | Find and Sign"
  heading="About Services"
  subheading="Expert guidance for every step of your property journey."   
     body1="Find & Sign Buyer Advocate is a boutique Perth buyer’s agency representing buyers exclusively, whether you are purchasing your dream home or building a property investment portfolio for the future.

We work with a select number of clients at any one time because every property purchase deserves dedicated attention, personalised advice and considered guidance."

body2="Our approach is simple. We understand your goals, assess your requirements and conduct a targeted property search to identify the right opportunities. Our recommendations are guided by market data, local knowledge and strong industry relationships, ensuring every decision aligns with your property goals.

From the initial consultation through to settlement and beyond, we provide complete support throughout your buying journey. We are your adviser, your support and your advantage in the Perth property market—helping you make confident decisions and secure the right property." />

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
Our services
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
              <ServiceCard title="Buyer’s agent service" body={body1} hasButton delay={0} onBookCall={handleBookCall} theme={theme} />
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
              <OtherServiceCard title="Mortgage Broker" body={body3} hasButton delay={0} onBookCall={() => navigate("/services/mortgage-broker")} theme={theme} />
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
              <OtherServiceCard title="Accounting and quantity surveyor" body={body7} hasButton delay={0.1} onBookCall={() => navigate("/services/quantity-surveyor")} theme={theme} />
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
The affiliated services listed on this page are independent businesses and professionals that Find and Sign, as a Buyer’s Advocate and Buyer’s Agent, has developed relationships with over time. While we may refer or introduce these services, we do so based on our genuine belief in the quality of their work. Please note that Find and Sign, as a Buyer’s Advocate and Buyer’s Agent, may receive a commission or referral fee in some instances. We are not responsible for the advice, outcomes, or conduct of any third party service provider. All decisions regarding the engagement of any affiliated service remain entirely at your discretion.              </p>
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
    </>
  );
}