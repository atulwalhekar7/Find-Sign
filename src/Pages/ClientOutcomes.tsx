import { useState, useEffect } from "react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";

import bannerImg from "../assets/Client Outcomes_Banner.jpg";
import AboutClientOutcomesImg from "../assets/About Client Outcomes.png";

// ── DATA ─────────────────────────────────────────────
const AQUA = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE = "#FFFFFF";

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "101.7%",
    purchasePrice: "$290k",
    currentValue: "$585k",
    timeframe: "2 yrs 4 mths",
    rentalYield: "Owner Occ",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "41.3%",
    purchasePrice: "$630k",
    currentValue: "$890k",
    timeframe: "2 years",
    rentalYield: "6.2%",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "29.9%",
    purchasePrice: "$654k",
    currentValue: "$850k",
    timeframe: "2 years",
    rentalYield: "5.4%",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "30.0%",
    purchasePrice: "$862k",
    currentValue: "$1.12M",
    timeframe: "2 years",
    rentalYield: "Owner Occ",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "41.9%",
    purchasePrice: "$620k",
    currentValue: "$880k",
    timeframe: "1 yr 10 mths",
    rentalYield: "Owner Occ",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "34.5%",
    purchasePrice: "$550k",
    currentValue: "$740k",
    timeframe: "1 yr 10 mths",
    rentalYield: "6.1%",
  },
];

const reviews = Array(6).fill({
  title: "Review title",
  body: "Review body",
  name: "Reviewer name",
  date: "Date",
});

// ── SUB-COMPONENT ───────────────────────────────────
function PropertyCard({ card, index }: { card: typeof cards[0]; index: number }) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="card-image-wrap">
        <img src={card.image} alt="Property" className="card-image" />
      </div>

      <div
        className="growth-circle"
        style={{
          animationDelay: `${index * 150}ms`,
        }}
      >
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
      </div>

      <div className="card-data">
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value", val: card.currentValue },
          { label: "Timeframe", val: card.timeframe },
          { label: "Rental yield", val: card.rentalYield },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            className="card-row"
            style={{
              borderBottom: i < arr.length - 1 ? "1px dashed #846F58" : "none",
            }}
          >
            <span className="row-label">{label}</span>
            <span className="row-val">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────
export default function ClientOutcomes() {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Söhne, sans-serif" }}>
      
      {/* ── HERO ───────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "750px",
            padding: "60px 40px",
borderRadius: 0,
          }}
        >
<h1 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "56px",
            fontWeight: "500",
            color: "#FFF",
            lineHeight: "64px",
            letterSpacing: "-1.12px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Client Outcomes
          </h1>
          <p style={{ color: "#CCC", fontSize: "24px", marginTop: 20 }}>
            Find & Sign
          </p>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────── */}
      <AboutSection
        imageSrc={AboutClientOutcomesImg}
        heading="About Find & Sign"
        subheading="Subheading"
        body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
        body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
      />

      {/* ── CLIENT OUTCOMES GRID ───────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        
        <div style={{ marginBottom: 32 }}>
<h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700 }}>Client Outcomes</h2>
          <p style={{ margin: "0 0 32px", fontSize: 14, color: "#383b3f" }}>Subheading</p>
        </div>

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {cards.map((card, i) => (
            <PropertyCard key={`${card.id}-${animKey}`} card={card} index={i} />
          ))}
        </div>
      </section>

      {/* ── WHAT OUR CLIENTS ARE SAYING ───────────────────────────────── */}
<section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px" }}>

  {/* Section heading */}
<h2
  style={{
  margin: "0 0 32px 0",
  color: "var(--sds-color-text-default-default)",

  fontFamily: "GTSuper",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "120%",
  letterSpacing: "-0.48px",

  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationSkipInk: "auto",
  textDecorationThickness: "auto",
  textUnderlineOffset: "auto",
  textUnderlinePosition: "from-font",
}}
>    What our clients are saying
  </h2>

  {/* 3-column reviews grid */}
  <div
    className="reviews-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    }}
  >
    {reviews.map((review, i) => (
      <div
        key={i}
        style={{
          border: "1px solid #E5E5E5",
          borderRadius: 10,
          padding: "16px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {/* Star rating */}
        <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
          {Array(5).fill(null).map((_, s) => (
            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>

        {/* Review title */}
<p
  style={{
    margin: 0,
   fontFamily: "GTSuper",
  fontSize: "20px",
  fontWeight: 700,
    lineHeight: "120%",
        fontStyle: "normal",

    letterSpacing: "-0.48px",
  }}
>          {review.title}
        </p>

        {/* Review body */}
        <p
  style={{
    color: "rgb(117, 117, 117)",
    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal",
  }}
>
  {review.body}
</p>

        {/* Reviewer info */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
          {/* Avatar circle */}
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#D9D9D9",
              flexShrink: 0,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5"/>
              <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Name + date stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span style={{  color: "rgb(12, 11, 11)",
    fontFamily: "Söhne",
    fontSize: "16px",
    fontStyle: "normal", }}>
              {review.name}
            </span>
            <span style={{ fontSize: 11, color: "#999", lineHeight: 1.2 }}>
              {review.date}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <style>{`
    @media (max-width: 900px) {
      .reviews-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 500px) {
      .reviews-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
</section>


      {/* ── GET IN TOUCH ───────────────────────────────── */}
      <SimpleGetInTouch />

      {/* ── FOOTER ───────────────────────────────── */}
      <SimpleFooter />

      {/* ── RESPONSIVE ───────────────────────────────── */}
      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heartbeatFloat {
          0% {
            transform: translateY(0) scale(1);
            box-shadow: 0 4px 12px rgba(105, 228, 220, 0.3);
          }
          14% {
            transform: translateY(-3px) scale(1.06);
            box-shadow: 0 8px 20px rgba(105, 228, 220, 0.4);
          }
          28% {
            transform: translateY(0) scale(1);
          }
          42% {
            transform: translateY(-3px) scale(1.06);
            box-shadow: 0 8px 20px rgba(105, 228, 220, 0.4);
          }
          70% {
            transform: translateY(-8px) scale(1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .property-card {
          background: ${WHITE};
          border: 1px solid rgba(0,51,39,0.1);
          border-radius: 12px;
          position: relative;
          display: flex;
          flex-direction: column;
          animation: cardReveal 0.5s ease both;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          cursor: pointer;
          overflow: hidden;
        }
        
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0, 51, 39, 0.12);
          border-color: ${AQUA};
        }

        .card-image-wrap {
          width: 100%;
          height: 200px;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          position: relative;
        }
        
        .card-image { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.6s ease;
        }

        .property-card:hover .card-image {
          transform: scale(1.08);
        }

        .growth-circle {
          position: absolute;
          top: 155px;
          right: 18px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: ${AQUA};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: heartbeatFloat 4s ease-in-out infinite;
          transition: background 0.3s ease;
        }

        .property-card:hover .growth-circle {
          background: ${WHITE};
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.5);
        }

        .growth-label { font-size: 10px; text-transform: uppercase; color: ${RACING_GREEN}; }
        .growth-value { font-size: 18px; font-weight: 700; color: ${RACING_GREEN}; }

        .card-data { padding: 55px 18px 20px; flex: 1; }
        .card-row { display: flex; justify-content: space-between; padding: 10px 0; }
        .row-label { font-size: 13px; color: #000; }
        .row-val { font-size: 13px; color: #757575; }

        @media (max-width: 900px) {
          .grid-3 {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 500px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }

          h1 {
            font-size: 36px !important;
            line-height: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}
