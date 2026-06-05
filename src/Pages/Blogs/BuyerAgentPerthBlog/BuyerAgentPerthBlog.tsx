import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import OurProcessBlog from "../../../Pages/Our-Process-Post2";
import "./BuyerAgentPerthBlog.css";

// --- Assets ---
import bannerImg from "../../../assets/happy-home-buyers-blog2-banner-australia-find-and-sign.jpg";
import agentImg from "../../../assets/buyers-agent-perth-guide.jpg";
import servicesImg from "../../../assets/perth-property-investment-strategy.jpg";
import benefitsImg from "../../../assets/benefits-of-using-a-buyers-agent-perth.jpg";
import processImg from "../../../assets/what-is-a-buyers-agent-perth.jpg";

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
}) => (
  <section className={`side-by-side-section${reverse ? " reverse" : ""}`}>
    <div className="side-by-side-image-wrap">
      <img
        src={image}
        alt={imageAlt || title}
        title={imageTitle}
      />
    </div>
    <div tabIndex={0} className="side-by-side-content">
      <h2>{title}</h2>
      <div tabIndex={0} className="content-body">
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
    <div>

      {/* ── Hero ── */}
      <section
        className="buyer-hero-section"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className={`video-loader-container${!isBannerLoading ? " hidden" : ""}`} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className={`attractive-loader${!isBannerLoading ? " hidden" : ""}`} aria-hidden="true" />
          <h1>Your Ultimate Guide to Hiring a Buyer's Agent in Perth</h1>
          <p tabIndex={0}>Find &amp; Sign Buyer Advocate</p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Intro ── */}
        <section className="intro-section">
          <p tabIndex={0} className="intro-lead">
            Buying property in Perth is one of the biggest financial decisions you'll ever make. Whether you're a first-home buyer, upgrading your family home, or building an investment portfolio, the process can feel overwhelming.
          </p>
          <p tabIndex={0} className="intro-body">
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
              <p tabIndex={0}><strong>Interstate &amp; Overseas Buyers:</strong> Secure Perth property with local expertise without being physically present.</p>
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

        {/* ── Why Choose Us ── */}
        <section className="why-choose-section">
          <div className="why-choose-inner">
            <h2 tabIndex={0}>Why Choose Find and Sign Buyer Advocate?</h2>
            <p tabIndex={0}>
              Selecting the right agent is the key difference between a successful purchase and a costly mistake.
            </p>
            <div className="why-tags">
              {[
                "Local Perth Market Expertise",
                "Strong Negotiation Track Record",
                "Access to Off-Market Properties",
                "Tailored Investment Strategies",
                "Client-Focused Approach",
              ].map((item, i) => (
                <div key={i} className="why-tag">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Areas ── */}
        <section className="service-areas-section">
          <h2 tabIndex={0}>Service Areas in Perth</h2>
          <p>
            We serve clients across the Perth CBD, Western Suburbs, Northern Suburbs, Southern Suburbs, and surrounding metropolitan areas.
          </p>
        </section>

        {/* ── FAQs ── */}
        <section className="faq-section">
          <h2 tabIndex={0}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: "What does a buyer's agent do?", a: "A buyer's agent represents property buyers, helping them find, evaluate, and purchase properties at the best price." },
              { q: "Is hiring a buyer's agent in Perth a smart investment for today's market?", a: "Yes, especially in competitive markets. They help you save time, avoid overpaying, and access off-market properties." },
              { q: "How much does a buyer's agent cost?", a: "Fees vary but are typically a fixed fee or a percentage of the purchase price. The value often outweighs the cost through savings." },
              { q: "Can a buyer's agent help investors?", a: "Absolutely. They provide property investment advisory, identify growth areas, and help maximise returns." },
              { q: "Do buyer's agents have access to off-market properties?", a: "Yes, they often have industry connections that give clients access to exclusive listings." },
            ].map((faq, i) => (
              <div key={i} className="faq-card">
                <h4 tabIndex={0}>{faq.q}</h4>
                <p tabIndex={0}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section className="final-thoughts-section">
          <div className="final-thoughts-inner">
            <div style={{ marginBottom: "40px" }}>
              <span className="quote-mark">"</span>
              <blockquote>
                A professional buyer's agent doesn't just simplify the process—they give you a strategic advantage.
              </blockquote>
            </div>
            <p>
              If you're looking to buy property in Perth, Find and Sign Buyer Advocate is here to help you every step of the way.
            </p>
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />
    </div>
  );
}