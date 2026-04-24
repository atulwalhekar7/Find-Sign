import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import roksonImg from "../assets/testomonials/Rokson.png";
import sahilSainiImg from "../assets/testomonials/Sahil Saini.png";
import rinzinWangchukImg from "../assets/testomonials/Rinzin Wangchuk.png";
import prashanthNayarImg from "../assets/testomonials/Prashanth Nayar.png";
import zedAImg from "../assets/testomonials/Zed A.png";
import kumarVasindaImg from "../assets/testomonials/Kumar Vasinda Comara.png";
import fatemaManasawalaImg from "../assets/testomonials/fatema manasawala.png";
import gurinderSinghImg from "../assets/testomonials/Gurinder Singh.png";
import kienLamImg from "../assets/testomonials/Kien Lam.png";

const reviewsData = [
  { name: "Rok Son", date: "5 months ago", title: "Absolute pleasure from start to finish", body: "Working with Niki was an absolute pleasure from start to finish. He’s professional, knowledgeable, and genuinely invested in finding the perfect property for his clients.  ", image: roksonImg },
  { name: "Amit Bhardwaj", date: "2 months ago", title: "One of the best decisions we made", body: "Having Niki as our buyer’s agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us. " },
  { name: "Raveen Liyanage", date: "a month ago", title: "Pleasure doing business with you", body: "Hi Niki, It was a pleasure doing business with you. Your genuine commitment to looking after your clients, while also ensuring the process runs smoothly for everyone involved, truly stands out. You consistently strive to find practical." },
  { name: "Sahil Saini", date: "4 months ago", title: "Professional and great to work with", body: "Niki is professional and great to work with. His communication has been great for one of our clients to source a property before Christmas and met all deadlines. Not to mention the bargain he was able to secure for the property.", image: sahilSainiImg },
  { name: "Rinzin Wangchuk", date: "3 months ago", title: "Very professional and goes way above your needs", body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn’t know where to begin.", image: rinzinWangchukImg },
  { name: "Prashanth Nayar", date: "5 months ago", title: "Thorough market insights and dedicated due-diligence", body: "As a selling-agent based in Perth, I've found that Niki brings thorough market insights, dedicated due-diligence and a genuine commitment to finding the right property for his clients. ", image: prashanthNayarImg },
  { name: "Gian Ottavio", date: "2 months ago", title: "Nothing but professional", body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way." },
  { name: "Karen Rowley", date: "5 months ago", title: "Absolutely fantastic experience", body: "We had an absolutely fantastic experience working with Niki as a Buyer’s agent. He was very professional and always communicated well with ourselves and his clients throughout the process. " },
  { name: "dayna bechar", date: "5 months ago", title: "Absolute pleasure to work with", body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. Highly recommend!" },
  { name: "Jay DASS", date: "4 months ago", title: "Seamless, well-managed and clearly communicated", body: "Niki from Nakrani Property Buyers was an absolute pleasure to work with. From our first conversation through to completion, the process was seamless, well-managed and communicated clearly at every step." },
  { name: "Zed A", date: "5 months ago", title: "Massive asset, highly recommend", body: "My team and I have worked with Nikki from Nakrani Property on many transactions. He excels at educating his clients and securing the best deals. Having Nikki on your side is a massive asset, and I highly recommend him to anyone buying a property in Perth", image: zedAImg },
  { name: "Josh Mezger", date: "3 months ago", title: "A Bespoke, High-Touch Experience", body: "What truly defines Nakrani Property Buyers is the white-glove service. Niki is: Proactive: He anticipates hurdles before they arise. Transparent: You are never left wondering where a deal stands; his communication is frequent, clear, and honest. " },
  { name: "salam ishikura", date: "5 months ago", title: "Fantastic professional, proactive", body: "I recently worked with Niki, and he was fantastic professional, proactive, and incredibly easy to communicate with. He genuinely looks after his clients and makes the whole process smooth and stress free." },
  { name: "Kumar Vasinda Comara", date: "7 months ago", title: "Great experience from start to finish", body: "As the seller's agent, I had the pleasure of working with Niki from Nakrani Property, and it was a great experience from start to finish.", image: kumarVasindaImg },
  { name: "Subho Ghosh", date: "2 months ago", title: "Absolute legends", body: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile to help us find our dream home. Honest advice, great communication, and zero pressure." },
  { name: "Jasmine cheema", date: "6 months ago", title: "Truly exceptional at what he does", body: "I recently had the opportunity to work with Niki, and I must say he is truly exceptional at what he does. He consistently puts his clients first and goes above and beyond to ensure they feel supported throughout the entire process." },
  { name: "fatema manasawala", date: "4 months ago", title: "Professionalism speaks for himself", body: "I have had the pleasure to work with Niki at various occassiona for his clients. His work and professionalism speaks for himself. I highly recommend him to local /overseas and interstae investors & owner as a reputable Buyers agent in Perth.", image: fatemaManasawalaImg },
  { name: "Gurinder Singh", date: "4 months ago", title: "Great experience working with Niki", body: "Great experience working with Niki on this transaction. Everything ran smoothly from start to finish. Niki has a strong understanding of the market, communicated clearly, and was professional throughout. A pleasure to deal with.", image: gurinderSinghImg },
  { name: "P Y", date: "4 months ago", title: "Hands-on approach and professionalism", body: "What really stood out about Niki compared to other buyer’s agents I spoke with was his hands-on approach and professionalism from the very beginning. I was unsure about using a buyer’s agent at first, but after our first call it was clear." },
  { name: "Julie", date: "7 months ago", title: "Absolute professional to deal with", body: "I had the pleasure of working with Niki recently when he brought a buyer through one of our home opens. He was an absolute professional to deal with—clearly dedicated to his clients’ best interests while also ensuring the process remained." },
  { name: "Tom Miszczak", date: "5 months ago", title: "Excellent from start to finish", body: "Niki and the Nakrani team were excellent from start to finish. As a Selling Agent, it's great to see such professionalism from a Buyers Agent in the WA market. We look forward to working together in the future." },
  { name: "Kathy Moore", date: "7 months ago", title: "High level of professionalism, communication and efficiency", body: "I recently dealt with Niki for a property I was selling in Connolly, where he was representing the buyers. The whole process went smoothly, due to Niki’s high level of professionalism, communication and efficiency. " },
  { name: "Oshi Thilakarathna", date: "5 months ago", title: "Fantastic—professional, proactive, and got the deal done smoothly.", body: "Niki was fantastic—professional, proactive, and got the deal done smoothly. He made the whole process easy, and settlement was stress-free. Highly recommend!" },
  { name: "Travis Ranieri", date: "10 months ago", title: "Ongoing support through our property investment journey", body: "As a Buyers Agent Niki provided ongoing support through our property investment journey, delivering insights and become a trusted advisor for our family. Seamless process, highly recommend leveraging Niki and his team." },
  { name: "Kien Lam", date: "8 months ago", title: "Best in the business", body: "Niki is the best in the business. He has the best negotiating skills and can get you the best price for the property.", image: kienLamImg },
  { name: "Kush Hirani", date: "4 months ago", title: "Very pleased with Niki & Rebecca’s service", body: "Very pleased with Niki & Rebecca’s service. Quick responses and always going above and beyond to make sure I found the right property. Niki is thorough on all the home opens to point out any potential issues and doesn’t pressure you at all" },
];

// Helper to truncate body text if it ends with "...More"
const formatReviewBody = (text: string) => {
  if (text.endsWith("…More")) {
    return text.substring(0, text.length - 5).trim();
  }
  return text;
};

// Map the reviews to include the formatted body
const formattedReviews = reviewsData.map(review => ({
  ...review,
  body: formatReviewBody(review.body),
}));

const CARD_GAP = 32;

const App = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(3); // Moved useVisibleCount logic here

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      setVisible(w <= 768 ? 1 : w <= 1100 ? 2 : 3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, formattedReviews.length - visible);

  const goTo = useCallback((idx: number) => {
    setIndex(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)); // Use formattedReviews.length
    }, 4500);
  }, [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) goTo(0);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleNav = (dir: number) => {
    const next = (index + dir + totalDots) % totalDots;
    goTo(next);
    resetTimer();
  };

  const totalDots = maxIndex + 1;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── 12-COLUMN GRID ROOT ── */
        .rev-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          padding: 0 100px;
          box-sizing: border-box;
        }
        @media (max-width: 1199px) { .rev-grid { column-gap: 32px; padding: 0 48px; } }
        @media (max-width: 767px)  { .rev-grid { grid-template-columns: repeat(4, 1fr); column-gap: 16px; padding: 0 20px; } }

        .rev-full { grid-column: 1 / -1; }

        /* ── BASE CARD ── */
        .npb-card {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          padding: 20px;
          height: 320px;
          justify-content: space-between;
          align-items: flex-start;
          border-radius: 16px;
          background: #FFFFFF;
          border: 2px solid #69E4DC;
          box-sizing: border-box;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        /* ── HOVER — lift + intensify ── */
        .npb-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.96);
          border-color: #69E4DC;
        }

        .avatar-circle {
          transition: all 0.3s ease;
        }
        .npb-card:hover .avatar-circle {
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.6);
          border-color: #69E4DC !important;
          transform: scale(1.05);
        }

        /* ── SLIDER TRACK ── */
        .rev-slider-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        /* ── NAV BUTTONS ── */
        .rev-arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(11, 215, 205, 0.96);
          background: white;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: all 0.25s ease;
          flex-shrink: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .rev-arrow-btn.prev { left: -60px; }
        .rev-arrow-btn.next { right: -60px; }
        .rev-arrow-btn:hover:not(:disabled) { 
          transform: translateY(-50%) scale(1.05);
          background: #073B2F;
          color: white;
          border-color: #073B2F;
        }
        .rev-arrow-btn:disabled { opacity: 0.2; cursor: default; }

        /* ── CTA ── */
       .rev-cta-btn {
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid #69E4DC;
  background: white;

  color: #073B2F;
  font-family: 'CX80';
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 4.8px;

  margin-top: 30px;
  cursor: pointer;

  transition: background 0.2s, color 0.2s;
}
.rev-cta-btn:hover {
  background: #69E4DC;
  color: #073B2F;
  border-color: #69E4DC;
}
        /* ── DOTS ── */
        .rev-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #D0C9C0;
          border: none; padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .rev-dot.active { background: #073B2F; width: 24px; border-radius: 4px; }

        /* ── HEADER ── */
        .rev-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 24px;
          align-items: flex-start;
        }
        .rev-title-group { grid-column: 1 / -1; }

        .rev-heading {
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          font-style: normal;
          color: #073B2F;
          line-height: 54px;
          letter-spacing: -0.88px;
          font-variant-numeric: lining-nums proportional-nums;
          margin: 0 auto 16px;
          border-bottom: 2px solid #073B2F;
          padding-bottom: 8px;
          width: fit-content;
          text-align: center;
        }
        .rev-subheading {
          color: #000;
          font-family: 'Sohne';
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          margin: 0;
          text-align: center;
        }

        /* ── TABLET ── */
        @media (max-width: 1199px) {
          .rev-header { column-gap: 32px; }
          .rev-heading  { font-size: 36px !important; line-height: 46px !important; }
          .rev-subheading { font-size: 20px !important; line-height: 30px !important; }
          .npb-card { height: 400px; padding: 24px; }
          .rev-arrow-btn.prev { left: -44px; }
          .rev-arrow-btn.next { right: -44px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 767px) {
          .rev-header { grid-template-columns: 1fr; column-gap: 0; row-gap: 16px; }
          .rev-title-group { grid-column: 1 / -1; }
          .rev-arrow-btn { display: none; }
          .rev-heading  { font-size: 28px !important; line-height: 38px !important; letter-spacing: -0.5px !important; }
          .rev-subheading { font-size: 16px !important; line-height: 26px !important; }
          .npb-card { height: auto; min-height: 320px; padding: 24px; }
        }
      `}</style>

      <section style={{
        background: "#ffffff",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 0",
        gap: "40px",
        boxSizing: "border-box",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* ── HEADER ── */}
        <div className="rev-grid">
          <div className="rev-full">
            <div className="rev-header" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="rev-title-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="rev-heading">What clients say</h2>
                <p className="rev-subheading">In their own words, following their experience with Niki.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <SliderSection
          index={index}
          visible={visible}
          goTo={goTo}
          resetTimer={resetTimer}
          maxIndex={maxIndex}
          handleNav={handleNav}
          totalDots={totalDots}
        />

        {/* ── CTA ── */}
        <button 
          className="rev-cta-btn" 
          onClick={() => navigate("/client-outcomes#testimonials")}
        >
          View more feedback
        </button>

      </section>
    </div>
  );
};

interface SliderSectionProps {
  index: number;
  visible: number;
  goTo: (idx: number) => void;
  resetTimer: () => void;
  maxIndex: number;
  handleNav: (dir: number) => void;
  totalDots: number;
}

const SliderSection = ({
  index, visible, goTo, resetTimer, maxIndex, handleNav, totalDots,
}: SliderSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(352);
  // const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const cw = Math.floor((w - CARD_GAP * (visible - 1)) / visible);
      setCardWidth(Math.max(cw, 200));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [visible]);


  const offset = index * (cardWidth + CARD_GAP);

  return (
    <>
      <div className="rev-grid" style={{ rowGap: 0 }}>
        <div className="rev-full" style={{ position: "relative" }}>
          <button
            className="rev-arrow-btn prev"
            onClick={() => handleNav(-1)}
            aria-label="Previous slide"
            disabled={index === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="rev-arrow-btn next"
            onClick={() => handleNav(1)}
            aria-label="Next slide"
            disabled={index === maxIndex}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <div
            style={{ overflow: "hidden", padding: "40px 0", margin: "-40px 0" }}
            ref={containerRef}
          >
          <div
            className="rev-slider-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {formattedReviews.map((review, i) => {
              return (
                <div
                  key={i}
                  className="npb-card"
                  style={{ 
                    width: `${cardWidth}px`, 
                    minWidth: `${cardWidth}px`,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', 
                    top: '-16px', 
                    left: '24px', 
                    background: '#69E4DC', 
                    color: '#073B2F', 
                    fontSize: '12px', 
                    fontWeight: 'bold', 
                    padding: '8px 20px', 
                    borderRadius: '9999px', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
                    zIndex: 10,
                    maxWidth: '85%', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'nowrap'
                  }}>
                     {review.title}
                  </div>

                  <Quote style={{ color: 'rgba(11, 215, 205, 0.1)', position: 'absolute', top: '20px', right: '20px' }} size={48} />

                  <div style={{
                    position: 'relative', 
                    zIndex: 10, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 1, 
                    paddingTop: '24px' 
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} style={{ color: '#fbbf24', fill: '#fbbf24' }} size={14} />
                      ))}
                    </div>

                    <p style={{
                      color: '#374151', 
                      marginBottom: '20px', 
                      lineHeight: 1.5, 
                      fontStyle: 'italic', 
                      fontSize: '0.9rem', 
                      fontFamily: 'Sohne', 
                      fontWeight: 300,
                      flex: 1,
                      display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                    }}>
                      "{review.body}"
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                      <div className="avatar-circle" style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white", overflow: 'hidden' }}>
                        {review.image ? (
                          <img src={review.image} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5"/>
                            <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827', margin: 0, fontFamily: 'Sohne' }}>{review.name}</h4>
                        <p style={{ fontSize: '11px', fontWeight: 500, color: '#073B2F', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px', fontFamily: 'Sohne' }}>{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      {/* ── DOTS + ARROWS ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        width: "100%",
      }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {Array.from({ length: Math.min(8, totalDots) }).map((_, i) => (
            <button
              key={i}
              className={`rev-dot${i === index ? " active" : ""}`}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;