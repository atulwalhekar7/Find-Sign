import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/Footer";

// --- Assets ---
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
    gap: "64px", 
    padding: "60px 0",
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

export default function BestSuburbsPerthBlog() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Best Suburbs in Perth for Property Investment 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover the best suburbs in Perth for property investment in 2026. Learn where to invest for high growth, rental yield, and long-term returns.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "'Söhne', sans-serif" }}>
      
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
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
            Best Suburbs in Perth for Property Investment in 2026
          </h1>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, marginTop: "24px", opacity: 0.9 }}>
            Discover top suburbs for high growth, rental yield, and long-term returns
          </p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* ── Why Perth ── */}
        <SideBySideSection 
          title="Why Perth Is a Hotspot for Property Investment"
          image={agentImg}
          content={
            <>
              <p>Perth has quickly become one of Australia's most attractive cities for property investors. With relatively affordable entry prices, strong rental demand, and growing population trends, it offers a unique opportunity for both new and experienced investors.</p>
              <p style={{ marginTop: "20px" }}><strong>However, success in property investment comes down to one critical factor—choosing the right suburb.</strong></p>
              <p style={{ marginTop: "15px" }}>If you're working with a find and sign buyer advocate in Perth, selecting high-growth areas becomes significantly easier and more strategic.</p>
            </>
          }
        />

        {/* ── What Makes ── */}
        <SideBySideSection 
          title="What Makes a Suburb a Good Investment?"
          image={benefitsImg}
          reverse
          content={
            <>
              <p>Before diving into the top suburbs, it's important to understand what drives property growth.</p>
              <ul style={{ paddingLeft: "20px", marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><strong>Strong Population Growth</strong><br/>Areas with increasing population often see higher demand and price appreciation.</li>
                <li><strong>Infrastructure Development</strong><br/>New transport links, schools, and commercial hubs boost property value.</li>
                <li><strong>Rental Demand</strong><br/>High rental demand ensures consistent income and low vacancy rates.</li>
                <li><strong>Affordability & Growth Potential</strong><br/>Undervalued suburbs tend to offer better long-term returns.</li>
                <li><strong>Lifestyle Appeal</strong><br/>Proximity to beaches, CBD, and amenities attracts both buyers and tenants.</li>
              </ul>
            </>
          }
        />

        {/* ── Top Suburbs ── */}
        <section style={{ padding: "60px 0" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", textAlign: "center", marginBottom: "50px" }}>
            Top Suburbs in Perth for Property Investment
          </h2>
          <div className="top-suburbs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
            {[
              { name: "Baldivis", why: ["Growing population", "New housing developments", "Good rental demand"] },
              { name: "Morley", why: ["Strong infrastructure growth", "Increasing demand", "Proximity to major shopping centres"] },
              { name: "Scarborough", why: ["Coastal living appeal", "High rental yield potential", "Tourism-driven demand"] },
              { name: "Joondalup", why: ["Established infrastructure", "Strong employment hubs", "Consistent demand"] },
              { name: "Canning Vale", why: ["High-quality amenities", "Good schools", "Stable property prices"] },
              { name: "Rockingham", why: ["Affordable entry", "Lifestyle demand", "Growth potential"] }
            ].map((suburb, i) => (
              <div key={i} style={{ padding: "32px 40px", borderBottom: "1px solid #E8E4DC", borderRight: i % 2 === 0 ? "1px solid #E8E4DC" : "none" }}>
                <h3 style={{ fontFamily: "GT Super Display Medium", fontSize: "28px", color: "#073B2F", marginBottom: "16px" }}>{suburb.name}</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", padding: 0, margin: 0, listStyle: "none" }}>
                  {suburb.why.map((item, j) => (
                    <li key={j} style={{ fontSize: "18px", color: "#555", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#69E4DC", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Emerging ── */}
        <section style={{ padding: "60px 0", backgroundColor: "#F9F9F9" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", textAlign: "center", marginBottom: "50px" }}>
            Emerging Suburbs to Watch in 2026
          </h2>
          <p style={{ fontSize: "20px", textAlign: "center", maxWidth: "800px", margin: "0 auto 50px", color: "#555" }}>
            Smart investors don't just look at current hotspots—they identify future growth areas.
          </p>
          <div className="emerging-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            {[
              { name: "Alkimos", desc: "Rapid development and coastal location make it a promising suburb." },
              { name: "Byford", desc: "Affordable housing and infrastructure upgrades are driving demand." },
              { name: "Ellenbrook", desc: "Improved transport links are increasing its investment appeal." }
            ].map((suburb, i) => (
              <div key={i} style={{ textAlign: "center", padding: "24px 16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid #69E4DC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "GT Super Display Medium", fontSize: "20px", color: "#073B2F" }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: "GT Super Display Medium", fontSize: "24px", color: "#073B2F", marginBottom: "12px" }}>{suburb.name}</h3>
                <p style={{ fontSize: "18px", color: "#555", margin: 0, lineHeight: "1.6" }}>{suburb.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How to Choose ── */}
        <SideBySideSection 
          title="How to Choose the Right Suburb for Your Goals"
          image={processImg}
          content={
            <>
              <p>Not all suburbs suit every investor. Your strategy should depend on your goals.</p>
              <ul style={{ paddingLeft: "20px", marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><strong>For Capital Growth:</strong> Focus on inner and middle-ring suburbs with strong demand.</li>
                <li><strong>For Rental Yield:</strong> Look for affordable suburbs with high tenant demand.</li>
                <li><strong>For Long-Term Investment:</strong> Choose areas with planned infrastructure and population growth.</li>
              </ul>
              <p style={{ marginTop: "20px" }}><strong>Working with a buyer agent Perth ensures your strategy aligns with the right suburb selection.</strong></p>
            </>
          }
        />

        {/* ── Mistakes ── */}
        <section style={{ padding: "60px 0", borderTop: "1px solid #EEE" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", marginBottom: "40px", textAlign: "center" }}>Common Mistakes Investors Make</h2>
          <p style={{ fontSize: "20px", textAlign: "center", maxWidth: "800px", margin: "0 auto 50px", color: "#666" }}>
            Even in a strong market like Perth, mistakes can be costly.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: "900px", margin: "0 auto" }}>
            {[
              "Choosing suburbs based on hype instead of data",
              "Ignoring rental demand",
              "Overpaying due to lack of negotiation",
              "Not considering long-term growth",
              "Skipping professional advice"
            ].map((mistake, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px 0", borderBottom: "1px solid #E8E4DC" }}>
                <span style={{ fontFamily: "GT Super Display Medium", fontSize: "28px", color: "#073B2F", lineHeight: 1, minWidth: "36px" }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ margin: 0, fontSize: "18px", color: "#444" }}>{mistake}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How Find and Sign ── */}
        <SideBySideSection 
          title="How Find and Sign Buyer Advocate Helps Investors"
          image={servicesImg}
          reverse
          content={
            <>
              <p>Finding the right suburb requires deep market knowledge and research.</p>
              <p style={{ marginTop: "20px" }}><strong>At Find and Sign, we help you:</strong></p>
              <ul style={{ paddingLeft: "20px", marginTop: "15px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li>Identify high-growth suburbs</li>
                <li>Access off-market opportunities</li>
                <li>Analyse property data and trends</li>
                <li>Negotiate the best purchase price</li>
                <li>Build a long-term investment strategy</li>
              </ul>
              <p style={{ marginTop: "20px" }}>Instead of guessing, you make informed decisions backed by expertise.</p>
            </>
          }
        />

        {/* ── Trends ── */}
        <section style={{ padding: "60px 0", backgroundColor: "#073B2F", borderRadius: "24px", color: "#FFF", marginBottom: "60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", marginBottom: "32px" }}>Perth Property Market Trends in 2026</h2>
            <p style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.9 }}>Understanding current trends helps you stay ahead of the market.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
              {["Increased interstate migration", "Rising rental demand", "Limited housing supply", "Growth in outer suburbs"].map((item, i) => (
                <div key={i} style={{ padding: "12px 24px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "100px", fontSize: "18px" }}>
                  {item}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "20px", marginTop: "40px" }}>These factors make Perth a strong market for investors looking to enter now.</p>
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section style={{ padding: "40px 0", borderTop: "1px solid #EEE", backgroundColor: "#F9FAF9", textAlign: "center" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", marginBottom: "32px" }}>Final Thoughts</h2>
            <p style={{ fontSize: "20px", color: "#444", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto 40px" }}>
              Perth offers incredible opportunities for property investors—but only if you choose the right suburb. Whether you're looking for capital growth, rental income, or long-term wealth, suburb selection is the key to success. Working with a trusted find and sign buyer advocate in Perth ensures you invest with confidence and clarity.
            </p>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: "60px 0", borderTop: "1px solid #EEE" }}>
          <h2 style={{ fontFamily: "GT Super Display Medium", fontSize: "44px", color: "#073B2F", marginBottom: "40px", textAlign: "center" }}>FAQs</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px", margin: "0 auto" }}>
            {[
              { q: "Which suburb in Perth has the highest growth potential?", a: "Suburbs with strong infrastructure development and population growth tend to offer the best potential." },
              { q: "Is Perth good for property investment in 2026?", a: "Yes, Perth remains one of Australia's most affordable and high-growth markets." },
              { q: "What is the best strategy for beginners?", a: "Start with affordable suburbs that offer strong rental demand and growth potential." },
              { q: "Should I invest in coastal or inland suburbs?", a: "Both have advantages—coastal for lifestyle demand, inland for affordability and yield." },
              { q: "How can a buyer agent help with suburb selection?", a: "They provide data-driven insights and access to opportunities you may not find on your own." }
            ].map((faq, i) => {
              const [open, setOpen] = useState(false);
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid #E8E4DC",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#FFF",
                    transition: "all 0.3s ease",
                    ...(open ? { borderLeft: "4px solid #073B2F" } : {})
                  }}
                >
                  <button
                    onClick={() => setOpen(!open)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "24px 32px",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      gap: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px", color: open ? "#073B2F" : "#000", fontFamily: "'Sohne', sans-serif", fontWeight: open ? 500 : 400, flex: 1, transition: "color 0.3s ease" }}>
                      {faq.q}
                    </span>
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        flexShrink: 0,
                        color: "#073B2F",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {open && (
                    <div style={{ padding: "0 32px 24px", borderTop: "1px solid #F5F2ED" }}>
                      <p style={{ color: "#757575", fontSize: "18px", lineHeight: "1.6", margin: 0, paddingTop: "16px" }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
        @media (max-width: 900px) {
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 768px) {
          .top-suburbs-grid { grid-template-columns: 1fr !important; }
          .top-suburbs-grid > div { border-right: none !important; }
          .emerging-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          h1 { font-size: 36px !important; }
          main { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}
