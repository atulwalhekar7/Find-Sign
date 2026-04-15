import React, { useEffect, useRef, useState, useCallback } from "react";

// --- Data ---
const reviews = [
  {
    name: "Rok Son",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Amit Bhardwaj",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Oshi Thilakarathna",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Rinzin Wangchuk",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Dayna Bechar",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Subho Ghosh",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Kien Lam",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Jay Dass",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Sahil Saini",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
  {
    name: "Kush Hirani",
    headline: "Headline over\ntwo lines",
    text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit",
  },
];

const CARD_WIDTH = 352;
const CARD_GAP = 24;
const VISIBLE = 3;

// --- Assets ---
const StarRow = () => (
  <svg
    width="210"
    height="38.365"
    viewBox="0 0 210 38.365"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", flexShrink: 0 }}
  >
    {[0, 1, 2, 3, 4].map((i) => {
      const cx = 19 + i * 43;
      const cy = 19;
      const R = 19;
      const r = 7.6;
      const pts = Array.from({ length: 10 }, (_, k) => {
        const angle = (Math.PI / 5) * k - Math.PI / 2;
        const radius = k % 2 === 0 ? R : r;
        return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
      }).join(" ");
      return <polygon key={i} points={pts} fill="#9C7B4B" />;
    })}
  </svg>
);

const App = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const maxIndex = reviews.length - VISIBLE;

  const goTo = useCallback((idx) => {
    setIndex(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleNav = (dir) => {
    const nextIndex = index + dir;
    if (nextIndex >= 0 && nextIndex <= maxIndex) {
      goTo(nextIndex);
      resetTimer();
    }
  };

  const SLIDER_W = CARD_WIDTH * VISIBLE + CARD_GAP * (VISIBLE - 1);
  const totalDots = maxIndex + 1;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .npb-card {
          display: flex;
          flex-direction: column;
          width: ${CARD_WIDTH}px;
          min-width: ${CARD_WIDTH}px;
          height: 440px;
          padding: 32px;
          justify-content: space-between;
          align-items: flex-start;
          border-radius: 16px;
          background: #073B2F;
          flex-shrink: 0;
          box-sizing: border-box;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          animation: npbFadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .npb-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(7, 59, 47, 0.2);
        }

        @keyframes npbFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .npb-card:nth-child(1) { animation-delay: 0.1s; }
        .npb-card:nth-child(2) { animation-delay: 0.2s; }
        .npb-card:nth-child(3) { animation-delay: 0.3s; }

        .rev-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #073B2F;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .rev-arrow-btn:hover:not(:disabled) {
          background: #073B2F;
          color: #ffffff;
          transform: scale(1.05);
        }
        .rev-arrow-btn:disabled {
          opacity: 0.2;
          cursor: default;
        }

        .rev-cta-btn {
          display: inline-flex;
          height: 48px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid #69E4DC;
          color: #073B2F;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
        }
        .rev-cta-btn:hover {
          background: #073B2F;
          color: #ffffff;
        }

        .rev-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #D0C9C0;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .rev-dot.active {
          background: #073B2F;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      {/* ── OUTER CONTAINER ── */}
      <section style={{
        background: "#ffffff",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
        gap: "40px",
        boxSizing: "border-box",
        fontFamily: "'DM Sans', sans-serif",
      }}>

       {/* ── HEADER ROW ── */}
        <div style={{
          width:          `${SLIDER_W}px`,
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-start",
        }}>
          <div>
            <h2 style={{
              fontFamily:         'GT Super Display Medium',
              fontSize:           "44px",
              fontWeight:         500,
              fontStyle:          "normal",
              color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
              lineHeight:         "54px",
              letterSpacing:      "-0.88px",
              fontVariantNumeric: "lining-nums proportional-nums",
            }}>
              What clients say
            </h2>
            <p style={{
              width:      "733px",
              color:      "#000",
              fontFamily: "Söhne, 'DM Sans', sans-serif",
              fontSize:   "24px",
              fontWeight: 300,
              fontStyle:  "normal",
              lineHeight: "36px",
              marginTop:  "8px",
            }}>
              In their own words, following their experience with Niki.
            </p>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <div style={{ width: "100%", maxWidth: `${SLIDER_W}px`, overflow: "hidden", padding: "20px 0" }}>
          <div
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="npb-card">
                <StarRow />
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "stretch",
                  flex: 1,
                  gap: "32px",
                  marginTop: "24px",
                }}>
                  <p style={{
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: "40px",
                    letterSpacing: "-0.64px",
                    color: "#F9F9F9",
                    whiteSpace: "pre-line",
                  }}>
                    {review.headline}
                  </p>
                  <p style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    color: "#F9F9F9",
                  }}>
                    {review.text}
                  </p>
                </div>
                <p style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "#F9F9F9",
                  alignSelf: "stretch",
                  marginTop: "16px",
                  opacity: 0.9
                }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM NAVIGATION (Dots and Arrows) ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          width: "100%",
        }}>
          {/* Dot Indicators */}
          <div style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}>
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`rev-dot${i === index ? " active" : ""}`}
                onClick={() => { goTo(i); resetTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: "flex", gap: "24px" }}>
            <button 
              className="rev-arrow-btn" 
              onClick={() => handleNav(-1)} 
              disabled={index <= 0}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              className="rev-arrow-btn" 
              onClick={() => handleNav(1)} 
              disabled={index >= maxIndex}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── CTA ── */}
        <button className="rev-cta-btn">View more feedback</button>

      </section>
    </div>
  );
};

export default App;