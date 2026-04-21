import React, { useEffect } from "react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";

// --- Assets (Assuming these exist in the Blogs folder as per instructions) ---
import bannerImg from "../assets/Blogs/Blog 1_Image.jpg";
import agentImg from "../assets/Blogs/DSC06286.jpg";
import servicesImg from "../assets/About.jpg";
import benefitsImg from "../assets/Blogs/Blog 1_Image.jpg";
import processImg from "../assets/DSC06057.jpg";

// --- Helper Components ---

const SideBySideSection = ({ 
  title, 
  content, 
  image, 
  reverse = false 
}: { 
  title: string; 
  content: React.ReactNode; 
  image: string; 
  reverse?: boolean 
}) => (
  <section style={{ 
    display: "flex", 
    flexDirection: reverse ? "row-reverse" : "row", 
    alignItems: "center", 
    gap: "80px", 
    padding: "80px 0",
    flexWrap: "wrap"
  }}>
    <div style={{ flex: "1 1 450px" }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "16px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }} />
    </div>
    <div style={{ flex: "1 1 450px" }}>
      <h2 style={{ 
        fontFamily: "'GT Super Display Medium'", 
        fontSize: "44px", 
        fontWeight: 500,
        color: "#073B2F", 
        lineHeight: "1.2",
        letterSpacing: "-0.48px",
        marginBottom: "24px" 
      }}>{title}</h2>
      <div style={{ 
        fontFamily: "'Söhne', sans-serif", 
        fontSize: "18px", 
        lineHeight: "1.6", 
        color: "#444" 
      }}>
        {content}
      </div>
    </div>
  </section>
);

export default function BuyerAgentPerthBlog() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Buyer’s Agent Perth | Find & Sign Buyer Advocate Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover how a buyer’s agent in Perth helps you secure the right property, save money, and access off-market deals. Expert guide for buyers & investors.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "'Söhne', sans-serif" }}>
      
      {/* ── SECTION 1: Hero Banner ─────────────────────────────────────── */}
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
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
            margin: 0 
          }}>
            Your Ultimate Guide to Hiring a Buyer’s Agent in Perth
          </h1>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, marginTop: "24px", opacity: 0.9 }}>
            Find & Sign Buyer Advocate
          </p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* ── INTRO ────────────────────────────────────────────────── */}
        <section style={{ padding: "100px 0 60px", textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
          <p style={{ fontSize: "24px", lineHeight: "1.5", color: "#111", fontWeight: 300, marginBottom: "30px" }}>
            Buying property in Perth is one of the biggest financial decisions you’ll ever make. Whether you're a first-home buyer, upgrading your family home, or building an investment portfolio, the process can feel overwhelming.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>
            From searching listings and attending inspections to negotiating prices and bidding at auctions, there’s a lot to manage. That’s where a buyer’s agent in Perth becomes your greatest asset. At Find and Sign Buyer Advocate, we specialise in helping property buyers and investors make confident, strategic decisions—while saving time, stress, and money.
          </p>
        </section>

        {/* ── SECTION 2: What is a Buyer's Agent ────────────────────── */}
        <SideBySideSection 
          title="What is a Buyer’s Agent and Why Do You Need One?"
          image={agentImg}
          content={
            <>
              <p>A buyer’s agent (also known as a buyer’s advocate) represents the buyer—not the seller—throughout the property purchasing process.</p>
              <p style={{ marginTop: "15px" }}>Unlike real estate agents who work for sellers, buyer’s agents work exclusively for you to:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Find the right property</li>
                <li>Negotiate the best price</li>
                <li>Provide expert market insights</li>
                <li>Secure off-market opportunities</li>
              </ul>
              <p style={{ marginTop: "20px" }}>In competitive markets like Perth, having a professional on your side can make a significant difference.</p>
            </>
          }
        />

        {/* ── SECTION 3: Who Should Use ─────────────────────────────── */}
        <SideBySideSection 
          title="Who Should Use a Buyer’s Agent?"
          image={processImg}
          reverse
          content={
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p><strong>First Home Buyers:</strong> Simplify the entry into the market and avoid costly first-timer mistakes.</p>
              <p><strong>Property Investors:</strong> Leverage data-driven strategies to identify high-growth suburbs and maximise returns.</p>
              <p><strong>Busy Professionals:</strong> Save time while we manage inspections, research, and negotiations for you.</p>
              <p><strong>Interstate & Overseas Buyers:</strong> Secure Perth property with local expertise without being physically present.</p>
            </div>
          }
        />

        {/* ── SECTION 4: Key Services ───────────────────────────────── */}
        <SideBySideSection 
          title="Key Services Offered by Find and Sign"
          image={servicesImg}
          content={
            <ul style={{ display: "flex", flexDirection: "column", gap: "15px", paddingLeft: "20px" }}>
              <li><strong>Buyer’s Agent Services:</strong> Complete management from search to settlement.</li>
              <li><strong>Property Investment Advisory:</strong> Data-backed insights and growth strategies.</li>
              <li><strong>Property Negotiation:</strong> Ensuring you never overpay and secure the best deal.</li>
              <li><strong>Auction Bidding Services:</strong> Strategic bidding to give you the competitive edge.</li>
              <li><strong>Off-Market Sourcing:</strong> Access exclusive listings not available publicly.</li>
            </ul>
          }
        />

        {/* ── SECTION 5: Benefits ──────────────────────────────────── */}
        <SideBySideSection 
          title="Benefits of Hiring a Buyer’s Agent in Perth"
          image={benefitsImg}
          reverse
          content={
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <p><strong>Save Time:</strong> We handle the heavy lifting, shortlisting properties and managing paperwork.</p>
              <p><strong>Access Off-Market Deals:</strong> Connect with exclusive opportunities that never reach public platforms.</p>
              <p><strong>Avoid Overpaying:</strong> Expert negotiation ensures you buy at the fair market price or better.</p>
              <p><strong>Expert Local Knowledge:</strong> Deep understanding of Perth's growth areas and investment hotspots.</p>
            </div>
          }
        />

        {/* ── SECTION 6: How It Works ──────────────────────────────── */}
        <section style={{ padding: "80px 0", borderTop: "1px solid #EEE" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", marginBottom: "50px", textAlign: "center" }}>How the Buying Process Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
            {[
              { s: "Step 1", t: "Initial Consultation", d: "Defining your goals and budget." },
              { s: "Step 2", t: "Search & Shortlisting", d: "Identifying matching properties." },
              { s: "Step 3", t: "Due Diligence", d: "Evaluating value and growth potential." },
              { s: "Step 4", t: "Negotiation", d: "Securing the best possible price." },
              { s: "Step 5", t: "Settlement", d: "Support until ownership is complete." }
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "14px", color: "#888", fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" }}>{step.s}</div>
                <h4 style={{ fontSize: "20px", color: "#073B2F", marginBottom: "12px" }}>{step.t}</h4>
                <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: Why Choose Us ─────────────────────────────── */}
        <section style={{ padding: "80px 40px", backgroundColor: "#073B2F", borderRadius: "24px", color: "#FFF", marginBottom: "80px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", marginBottom: "24px" }}>Why Choose Find and Sign Buyer Advocate?</h2>
            <p style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.9 }}>Selecting the right agent is the key difference between a successful purchase and a costly mistake.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {["Local Perth Market Expertise", "Strong Negotiation Track Record", "Access to Off-Market Properties", "Tailored Investment Strategies", "Client-Focused Approach"].map((item, i) => (
                <div key={i} style={{ padding: "10px 20px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "100px", fontSize: "16px" }}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: Service Areas ─────────────────────────────── */}
        <section style={{ padding: "40px 0 80px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "36px", color: "#073B2F", marginBottom: "20px" }}>Service Areas in Perth</h2>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>We serve clients across the Perth CBD, Western Suburbs, Northern Suburbs, Southern Suburbs, and surrounding metropolitan areas.</p>
        </section>

        {/* ── SECTION 9: FAQs ──────────────────────────────────────── */}
        <section style={{ padding: "80px 0", borderTop: "1px solid #EEE" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", marginBottom: "40px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {[
              { q: "What does a buyer’s agent do?", a: "A buyer’s agent represents property buyers, helping them find, evaluate, and purchase properties at the best price." },
              { q: "Is hiring a buyer’s agent in Perth a smart investment for today’s market?", a: "Yes, especially in competitive markets. They help you save time, avoid overpaying, and access off-market properties." },
              { q: "How much does a buyer’s agent cost?", a: "Fees vary but are typically a fixed fee or a percentage of the purchase price. The value often outweighs the cost through savings." },
              { q: "Can a buyer’s agent help investors?", a: "Absolutely. They provide property investment advisory, identify growth areas, and help maximise returns." },
              { q: "Do buyer’s agents have access to off-market properties?", a: "Yes, they often have industry connections that give clients access to exclusive listings." }
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #F0F0F0", paddingBottom: "20px" }}>
                <h4 style={{ fontSize: "20px", color: "#111", marginBottom: "12px", fontFamily: "GT Super Display Medium" }}>{faq.q}</h4>
                <p style={{ color: "#666", fontSize: "17px", lineHeight: "1.6" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL THOUGHTS ───────────────────────────────────────── */}
        <section style={{ padding: "60px 0 100px", textAlign: "center" }}>
          <p style={{ fontSize: "20px", fontStyle: "italic", color: "#444" }}>
            "A professional buyer’s agent doesn’t just simplify the process—they give you a strategic advantage."
          </p>
          <p style={{ fontSize: "18px", marginTop: "20px", color: "#666" }}>
            If you're looking to buy property in Perth, Find and Sign Buyer Advocate is here to help you every step of the way.
          </p>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          h1 { font-size: 36px !important; }
          main { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}