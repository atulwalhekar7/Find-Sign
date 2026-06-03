import React, { useEffect } from "react";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";

// --- Assets (Assuming these exist in the Blogs folder as per instructions) ---
import bannerImg from "../assets/happy-home-buyers-blog2-banner-australia-find-and-sign.jpg";
import agentImg from "../assets/buyers-agent-perth-guide.jpg";
import servicesImg from "../assets/perth-property-investment-strategy.jpg";
import benefitsImg from "../assets/benefits-of-using-a-buyers-agent-perth.jpg";
import processImg from "../assets/what-is-a-buyers-agent-perth.jpg";
import { useState } from "react";
import OurProcessBlog from "./Our-Process-Post2";

const SideBySideSection = ({
  title,
  content,
  image,
  imageAlt,
  imageTitle,
  imageCaption,
  reverse = false,
}: {
  title: string;
  content: React.ReactNode;
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  imageCaption?: string;
  reverse?: boolean;
})=> (
  <section
    style={{
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row",
      alignItems: "center",
      gap: "64px",
      padding: "60px 0",
      flexWrap: "wrap",
    }}
  >
    <div style={{ flex: "1 1 450px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "16px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
      />
    </div>
    <div tabIndex={0} style={{ flex: "1 1 450px" }}>
      <h2
        style={{
          fontFamily: "'GT Super Display Medium'",
          fontSize: "44px",
          fontWeight: 500,
          color: "var(--text-heading)",
          lineHeight: "1.2",
          letterSpacing: "-0.48px",
          marginBottom: "24px",
        }}
      >
        {title}
      </h2>
      <div
        tabIndex={0}
        style={{
          fontFamily: "'Söhne', sans-serif",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "var(--text-secondary)",
        }}
      >
        {content}
      </div>
    </div>
  </section>
);

export default function BuyerAgentPerthBlog() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    document.title = "Buyer's Agent Perth | Find & Sign Buyer Advocate Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how a buyer's agent in Perth helps you secure the right property, save money, and access off-market deals. Expert guide for buyers & investors."
      );
    }

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
    <div style={{ backgroundColor: "var(--bg-primary)", fontFamily: "'Söhne', sans-serif", color: "var(--text-primary)" }}>

      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
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
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
          <div className={`attractive-loader ${!isBannerLoading ? "hidden" : ""}`} aria-hidden="true" />
          <h1 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "56px",
            fontWeight: 500,
            color: "#FFF",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            margin: 0 
          }}>
            Your Ultimate Guide to Hiring a Buyer’s Agent in Perth
          </h1>
          <p tabIndex={0} style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, marginTop: "24px", opacity: 0.9 }}>
            Find & Sign Buyer Advocate
          </p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Intro ── */}
        <section style={{ padding: "60px 0 40px", textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
          <p tabIndex={0} style={{ fontSize: "24px", lineHeight: "1.5", color: "var(--text-primary)", fontWeight: 300, marginBottom: "30px" }}>
            Buying property in Perth is one of the biggest financial decisions you'll ever make. Whether you're a first-home buyer, upgrading your family home, or building an investment portfolio, the process can feel overwhelming.
          </p>
          <p tabIndex={0} style={{ fontSize: "18px", lineHeight: "1.8", color: "var(--text-secondary)" }}>
            From searching listings and attending inspections to negotiating prices and bidding at auctions, there's a lot to manage. That's where a buyer's agent in Perth becomes your greatest asset. At Find and Sign Buyer Advocate, we specialise in helping property buyers and investors make confident, strategic decisions—while saving time, stress, and money.
          </p>
        </section>

        {/* ── What is a Buyer's Agent ── */}
       <SideBySideSection
  title="What is a Buyer's Agent and Why Do You Need One?"
  image={agentImg}
  imageAlt="Perth buyers agent helping property buyers find negotiate and secure the right property"
  imageTitle="What is a Buyers Agent in Perth | Find and Sign"
  imageCaption="Learn how a Perth buyers agent helps buyers find properties, negotiate better outcomes and access expert market insights."
  content={
            <>
              <p tabIndex={0}>A buyer's agent (also known as a buyer's advocate) represents the buyer—not the seller—throughout the property purchasing process.</p>
              <p tabIndex={0} style={{ marginTop: "15px" }}>Unlike real estate agents who work for sellers, buyer's agents work exclusively for you to:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li tabIndex={0}>Find the right property</li>
                <li tabIndex={0}>Negotiate the best price</li>
                <li tabIndex={0}>Provide expert market insights</li>
                <li tabIndex={0}>Secure off-market opportunities</li>
              </ul>
              <p tabIndex={0} style={{ marginTop: "20px" }}>In competitive markets like Perth, having a professional on your side can make a significant difference.</p>
            </>
          }
        />

        {/* ── Who Should Use ── */}
       <SideBySideSection
  title="Who Should Use a Buyer's Agent?"
  image={processImg}
  imageAlt="Perth buyers agent assisting first home buyers property investors and interstate property buyers"
  imageTitle="Who Should Use a Buyers Agent in Perth"
  imageCaption="A Perth buyers agent helping first home buyers, investors, busy professionals and interstate buyers secure the right property."
  reverse
  content={
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p tabIndex={0}><strong>First Home Buyers:</strong> Simplify the entry into the market and avoid costly first-timer mistakes.</p>
              <p tabIndex={0}><strong>Property Investors:</strong> Leverage data-driven strategies to identify high-growth suburbs and maximise returns.</p>
              <p tabIndex={0}><strong>Busy Professionals:</strong> Save time while we manage inspections, research, and negotiations for you.</p>
              <p tabIndex={0}><strong>Interstate & Overseas Buyers:</strong> Secure Perth property with local expertise without being physically present.</p>
            </div>
          }
        />

        {/* ── Key Services ── */}
        <SideBySideSection
          title="Key Services Offered by Find and Sign"
          image={servicesImg}
          imageAlt="Perth buyer advocate providing key services to property buyers"
          imageTitle="Key Services of a Buyers Agent in Perth"
          imageCaption="Find and Sign offers comprehensive buyer advocacy services to help you navigate the property market with confidence."
          content={
            <ul style={{ display: "flex", flexDirection: "column", gap: "15px", paddingLeft: "20px" }}>
              <li tabIndex={0}><strong>Buyer Advocate:</strong> This is our complete service for buyers who want the right property secured from the very first search through to settlement. We manage the process on your behalf, with clear guidance at each stage so you understand what's happening, what to expect, and where the opportunity lies.</li>
              <li tabIndex={0}><strong>Advisory:</strong> Sometimes you don't need someone to manage the entire process. You want the right guidance to make informed decisions from the first search through to securing a property. We guide you with clear advice at each stage so you understand what's happening, what to consider, and where risks and opportunities sit.</li>
            </ul>
          }
        />

        {/* ── Benefits ── */}
        <SideBySideSection
          title="Benefits of Hiring a Buyer's Agent in Perth"
          image={benefitsImg}
          imageAlt="Perth buyer advocate highlighting the benefits of hiring a buyers agent"
          imageTitle="Benefits of Hiring a Buyers Agent in Perth | Find and Sign"
          imageCaption="Discover the key benefits of hiring a buyer's agent in Perth to help you find, negotiate and secure the right property."
          reverse
          content={
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <p tabIndex={0}><strong>Save Time:</strong> We handle the heavy lifting, shortlisting properties and managing paperwork.</p>
              <p tabIndex={0}><strong>Access Off-Market Deals:</strong> Connect with exclusive opportunities that never reach public platforms.</p>
              <p tabIndex={0}><strong>Avoid Overpaying:</strong> Expert negotiation ensures you buy at the fair market price or better.</p>
              <p tabIndex={0}><strong>Expert Local Knowledge:</strong> Deep understanding of Perth's growth areas and investment hotspots.</p>
            </div>
          }
        />

        <OurProcessBlog />

        {/* ── Why Choose Us ── (racing green — same in both modes, like footer) */}
        <section style={{ padding: "60px 40px", backgroundColor: "#073B2F", borderRadius: "24px", color: "#FFF", marginBottom: "60px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", marginBottom: "24px", borderBottom: "2px solid #FFFFFF", paddingBottom: "8px", width: "fit-content", margin: "0 auto 24px" }}
              tabIndex={0}
            >
              Why Choose Find and Sign Buyer Advocate?
            </h2>
            <p tabIndex={0} style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.9 }}>
              Selecting the right agent is the key difference between a successful purchase and a costly mistake.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {["Local Perth Market Expertise", "Strong Negotiation Track Record", "Access to Off-Market Properties", "Tailored Investment Strategies", "Client-Focused Approach"].map((item, i) => (
                <div key={i} style={{ padding: "10px 20px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "100px", fontSize: "16px" }}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Areas ── */}
        <section style={{ padding: "60px 0", textAlign: "center", borderTop: "1px solid var(--bg-tertiary)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2
            style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "var(--text-heading)", marginBottom: "32px", borderBottom: "2px solid var(--text-heading)", paddingBottom: "8px", width: "fit-content" }}
            tabIndex={0}
          >
            Service Areas in Perth
          </h2>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
            We serve clients across the Perth CBD, Western Suburbs, Northern Suburbs, Southern Suburbs, and surrounding metropolitan areas.
          </p>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: "60px 0", borderTop: "1px solid var(--bg-tertiary)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2
            style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "var(--text-heading)", marginBottom: "40px", textAlign: "center", borderBottom: "2px solid var(--text-heading)", paddingBottom: "8px", width: "fit-content" }}
            tabIndex={0}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
            {[
              { q: "What does a buyer's agent do?", a: "A buyer's agent represents property buyers, helping them find, evaluate, and purchase properties at the best price." },
              { q: "Is hiring a buyer's agent in Perth a smart investment for today's market?", a: "Yes, especially in competitive markets. They help you save time, avoid overpaying, and access off-market properties." },
              { q: "How much does a buyer's agent cost?", a: "Fees vary but are typically a fixed fee or a percentage of the purchase price. The value often outweighs the cost through savings." },
              { q: "Can a buyer's agent help investors?", a: "Absolutely. They provide property investment advisory, identify growth areas, and help maximise returns." },
              { q: "Do buyer's agents have access to off-market properties?", a: "Yes, they often have industry connections that give clients access to exclusive listings." },
            ].map((faq, i) => (
              <div
                key={i}
                style={{ padding: "32px", backgroundColor: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--bg-tertiary)" }}
              >
                <h4 tabIndex={0} style={{ fontSize: "22px", color: "var(--text-heading)", marginBottom: "16px", fontFamily: "GT Super Display Medium", fontWeight: 500 }}>{faq.q}</h4>
                <p tabIndex={0} style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: "1.6", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section style={{ padding: "20px 0", borderTop: "1px solid var(--bg-tertiary)", backgroundColor: "var(--bg-secondary)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", padding: "0 40px" }}>
            <div style={{ marginBottom: "40px" }}>
              <span style={{ fontSize: "60px", color: "var(--text-heading)", opacity: 0.2, fontFamily: "serif", lineHeight: 1 }}>"</span>
              <p style={{ fontSize: "32px", fontStyle: "italic", color: "var(--text-heading)", fontFamily: "GT Super Display Medium", lineHeight: "1.3", marginTop: "-20px" }}>
                A professional buyer's agent doesn't just simplify the process—they give you a strategic advantage.
              </p>
            </div>
            <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
              If you're looking to buy property in Perth, Find and Sign Buyer Advocate is here to help you every step of the way.
            </p>
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .video-loader-container {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: #073B2F; 
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .video-loader-container.hidden {
          opacity: 0;
        }
        .attractive-loader {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(105, 228, 220, 0.2);
          border-radius: 50%;
          border-top-color: #69E4DC;
          animation: spin 1s infinite linear;
          transition: opacity 0.3s ease;
          opacity: 1;
          margin-bottom: 8px;
        }
        .attractive-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(1turn); } }
        @media (max-width: 900px) {
          h1 { font-size: 44px !important; line-height: 1.2 !important; letter-spacing: -0.02em !important; }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          h1 { font-size: 36px !important; letter-spacing: -0.02em !important; }
          main { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}