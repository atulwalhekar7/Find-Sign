import { useState, useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";

import bannerImg from "../assets/Client Outcomes_Banner.jpg";
import AboutClientOutcomesImg from "../assets/About Client Outcomes.png";

// ── DATA ─────────────────────────────────────────────
const AQUA = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE = "#FFFFFF";

const CARD_GAP = 24;

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

const reviews = [
  {
    name: "Rok Son",
    date: "5 months ago",
    title: "Absolute pleasure from start to finish",
    body: "Working with Niki was an absolute pleasure from start to finish. He’s professional, knowledgeable, and genuinely invested in finding the perfect property for his clients. From our first meeting, Niki took the time to understand exactly what I was looking for — my budget, preferred locations, and must-have features — and used his deep market knowledge to guide me through every step of the buying process.",
  },
  {
    name: "Amit Bhardwaj",
    date: "2 months ago",
    title: "One of the best decisions we made",
    body: "Having Niki as our buyer’s agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us. He listened, guided us with confidence, and made what could have been a stressful process feel calm and manageable. Niki’s market knowledge, negotiation skills, and constant communication gave us complete peace of mind. We always felt supported and never left guessing.",
  },
  {
    name: "Raveen Liyanage",
    date: "a month ago",
    title: "Pleasure doing business with you",
    body: "Hi Niki, It was a pleasure doing business with you. Your genuine commitment to looking after your clients, while also ensuring the process runs smoothly for everyone involved, truly stands out. You consistently strive to find practical, win-win solutions for all parties, which makes working together both productive and enjoyable.",
  },
  {
    name: "Sahil Saini",
    date: "4 months ago",
    title: "Professional and great to work with",
    body: "Niki is professional and great to work with. His communication has been great for one of our clients to source a property before Christmas and met all deadlines. Not to mention the bargain he was able to secure for the property.",
  },
  {
    name: "Rinzin Wangchuk",
    date: "3 months ago",
    title: "Very professional and goes way above your needs",
    body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn’t know where to begin. Niki provided us a detailed market scenario which greatly helped us in deciding where to buy our property.",
  },
  {
    name: "Prashanth Nayar",
    date: "5 months ago",
    title: "Thorough market insights and dedicated due-diligence",
    body: "As a selling-agent based in Perth, I've found that Niki brings thorough market insights, dedicated due-diligence and a genuine commitment to finding the right property for his clients. Our collaboration ensures the buyer knows they’re getting a fair deal.",
  },
  {
    name: "Gian Ottavio",
    date: "2 months ago",
    title: "Nothing but professional",
    body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way.",
  },
  {
    name: "Karen Rowley",
    date: "5 months ago",
    title: "Absolutely fantastic experience",
    body: "We had an absolutely fantastic experience working with Niki as a Buyer’s agent. He was very professional and always communicated well with ourselves and his clients throughout the process. I would highly recommend Nakrani Property Buyers for anyone looking for a Buyers Agent.",
  },
  {
    name: "dayna bechar",
    date: "5 months ago",
    title: "Absolute pleasure to work with",
    body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. He was always available to answer questions and offer advice. Thanks to Niki, we found our dream home without any stress. Highly recommend!",
  },
  {
    name: "Jay DASS",
    date: "4 months ago",
    title: "Seamless, well-managed and clearly communicated",
    body: "Niki from Nakrani Property Buyers was an absolute pleasure to work with. From our first conversation through to completion, the process was seamless, well-managed and communicated clearly at every step. His professionalism, market knowledge is top-notch.",
  },
  {
    name: "Zed A",
    date: "5 months ago",
    title: "Massive asset, highly recommend",
    body: "My team and I have worked with Nikki from Nakrani Property on many transactions. He excels at educating his clients and securing the best deals. Having Nikki on your side is a massive asset, and I highly recommend him to anyone buying a property in Perth",
  },
  {
    name: "Josh Mezger",
    date: "3 months ago",
    title: "A Bespoke, High-Touch Experience",
    body: "What truly defines Nakrani Property Buyers is the white-glove service. Niki is: Proactive: He anticipates hurdles before they arise. Transparent: You are never left wondering where a deal stands; his communication is frequent, clear, and honest. Patient: He never pushes for a quick sale, ensuring that every decision is the right decision for your long-term goals.",
  },
  {
    name: "salam ishikura",
    date: "5 months ago",
    title: "Fantastic professional, proactive",
    body: "I recently worked with Niki, and he was fantastic professional, proactive, and incredibly easy to communicate with. He genuinely looks after his clients and makes the whole process smooth and stress free.",
  },
  {
    name: "Kumar Vasinda Comara",
    date: "7 months ago",
    title: "Great experience from start to finish",
    body: "As the seller's agent, I had the pleasure of working with Niki from Nakrani Property, and it was a great experience from start to finish. Niki was professional, proactive, and an excellent communicator throughout the process, making the transaction smooth for everyone.",
  },
];

// Helper to truncate body text if it ends with "...More"
const formatReviewBody = (text: string) => {
  if (text.endsWith("…More")) {
    return text.substring(0, text.length - 5).trim();
  }
  return text;
};

// Map the reviews to include the formatted body
const formattedReviews = reviews.map(review => ({
  ...review,
  body: formatReviewBody(review.body),
}));

// Use formattedReviews in the component
// ── SUB-COMPONENT ───────────────────────────────────
function PropertyCard({ card, index }: { card: typeof cards[0]; index: number }) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
        flex: "0 0 auto",
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
  const [propertyIdx, setPropertyIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1100) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxPropIdx = Math.max(0, cards.length - visibleCount);
  const maxReviewIdx = Math.max(0, formattedReviews.length - visibleCount);

  const nextProp = useCallback(() => {
    setPropertyIdx(prev => (prev >= maxPropIdx ? 0 : prev + 1));
  }, [maxPropIdx]);

  const prevProp = useCallback(() => {
    setPropertyIdx(prev => (prev <= 0 ? maxPropIdx : prev - 1));
  }, [maxPropIdx]);

  const nextReview = useCallback(() => {
    setReviewIdx(prev => (prev >= maxReviewIdx ? 0 : prev + 1));
  }, [maxReviewIdx]);

  const prevReview = useCallback(() => {
    setReviewIdx(prev => (prev <= 0 ? maxReviewIdx : prev - 1));
  }, [maxReviewIdx]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextProp, 5000);
    return () => clearInterval(timer);
  }, [nextProp]);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  // Calculate width for responsive items
  const getItemWidth = (containerWidth: number) => {
    return (containerWidth - CARD_GAP * (visibleCount - 1)) / visibleCount;
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Söhne, sans-serif" }}>
      
      {/* ── HERO ───────────────────────────────── */}
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
            borderRadius: "12px",
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
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Client Outcomes
          </h1>
          <p style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 300, marginTop: "24px", opacity: 0.9 }}>
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
        
        <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700 }}>Client Outcomes</h2>
          <p style={{ margin: "0 0 32px", fontSize: 14, color: "#383b3f" }}>Subheading</p>
          </div>
        </div>

        <div style={{ overflow: "hidden", padding: "40px 0", margin: "-40px 0" }}>
          <div
            className="slider-track"
            style={{
              display: "flex",
              gap: CARD_GAP,
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(calc(-${propertyIdx} * (100% / ${visibleCount} + ${CARD_GAP / visibleCount}px)))`,
            }}
          >
            {cards.map((card, i) => (
              <div key={card.id} style={{ flex: `0 0 calc((100% - ${CARD_GAP * (visibleCount - 1)}px) / ${visibleCount})` }}>
                <PropertyCard card={card} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT OUR CLIENTS ARE SAYING ───────────────────────────────── */}
      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .testimonial-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 24px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 320px; /* Uniform height for testimonial cards */
          border: 1px solid rgba(7, 59, 47, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
          transition: all 0.5s;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(11, 215, 205, 0.96);
          box-shadow: 0 20px 40px -5px rgba(11, 215, 205, 0.3);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }

        .slider-track {
          display: flex;
          align-items: stretch; /* Ensures all cards in a row have same height */
        }

        .nav-arrow {
          width: 40px; height: 40px; border-radius: 50%; border: 1px solid #E5E5E5;
          background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .nav-arrow:hover { border-color: rgba(11, 215, 205, 0.96); color: rgba(11, 215, 205, 0.96); }

        @media (min-width: 768px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="testimonials-section" style={{ position: 'relative', padding: '80px 0', background: '#F9F9F9', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.3 }}>
          <div style={{ position: 'absolute', top: '40px', right: '80px', width: '288px', height: '288px', backgroundColor: 'rgba(105, 228, 220, 0.05)', borderRadius: '50%', filter: 'blur(64px)' }}></div>
          <div style={{ position: 'absolute', bottom: '80px', left: '40px', width: '384px', height: '384px', backgroundColor: 'rgba(7, 59, 47, 0.05)', borderRadius: '50%', filter: 'blur(64px)' }}></div>
        </div>

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{  
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: '0px', 
            width: '303px', 
            height: '29px',
            marginBottom: '48px'
          }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px', 
              lineHeight: '120%', 
              letterSpacing: '-0.02em', 
              textDecorationLine: 'underline',
              color: '#1E1E1E',
              margin: 0
            }}>
              What our clients are saying
            </h2>
          </div>

          <div style={{ overflow: "hidden", padding: "40px 0", margin: "-40px 0" }}>
          <div 
            className="slider-track"
            style={{
              display: "flex",
              gap: 32,
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(calc(-${reviewIdx} * (100% / ${visibleCount} + ${32 / visibleCount}px)))`,
            }}
          >
            {formattedReviews.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ flex: `0 0 calc((100% - ${32 * (visibleCount - 1)}px) / ${visibleCount})`, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ 
                  position: 'absolute', top: '-12px', left: '24px', background: 'rgba(11, 215, 205, 0.96)', color: '#073B2F', fontSize: '10px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '9999px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 10,
                  maxWidth: '80%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                }}>
                   {testimonial.title}
                </div>
                
                <Quote style={{ color: 'rgba(11, 215, 205, 0.1)', position: 'absolute', top: '20px', right: '20px' }} size={48} />

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} style={{ color: '#fbbf24', fill: '#fbbf24' }} size={14} />
                    ))}
                  </div>

                  <p style={{ 
                    color: '#374151', marginBottom: '20px', lineHeight: 1.5, fontStyle: 'italic', fontSize: '0.9rem', fontFamily: 'Sohne', flex: 1,
                    display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    "{testimonial.body}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white", overflow: 'hidden' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5"/>
                        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827', margin: 0, fontFamily: 'Sohne' }}>
                        {testimonial.name}
                      </h4>
                      <p style={{ fontSize: '11px', fontWeight: 500, color: '#073B2F', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px', fontFamily: 'Sohne' }}>
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> {/* Closing the reviews-grid wrapper div */}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ───────────────────────────────── */}
      <SimpleGetInTouch />

      {/* ── FOOTER ───────────────────────────────── */}
      <SimpleFooter />

      {/* ── RESPONSIVE ───────────────────────────────── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

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
          height: 360px; /* Reduced fixed height for property cards */
          animation: cardReveal 0.5s ease both;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          cursor: pointer;
        }
        
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0, 51, 39, 0.12);
          border-color: ${AQUA};
        }

        .card-image-wrap {
          width: 100%;
          height: 140px; /* Slightly smaller image */
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
          top: 100px; /* Adjusted for smaller image */
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

        .card-data { padding: 40px 18px 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .card-row { display: flex; justify-content: space-between; padding: 6px 0; }
        .row-label { font-size: 13px; color: #000; }
        .row-val { font-size: 13px; color: #757575; }

        @media (max-width: 900px) {
          .grid-3 {
            grid-template-columns: 1fr 1fr !important;
          }
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
        }

        @media (max-width: 500px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
