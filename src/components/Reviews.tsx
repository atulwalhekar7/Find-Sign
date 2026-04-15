import { useEffect, useRef, useState, useCallback } from "react";

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
const CARD_GAP   = 24;
const VISIBLE    = 3;

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
      const R  = 19;
      const r  = 7.6;
      const pts = Array.from({ length: 10 }, (_, k) => {
        const angle = (Math.PI / 5) * k - Math.PI / 2;
        const radius = k % 2 === 0 ? R : r;
        return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
      }).join(" ");
      return <polygon key={i} points={pts} fill="#9C7B4B" />;
    })}
  </svg>
);

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const timerRef          = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxIndex          = reviews.length - VISIBLE;

  const goTo = useCallback((index: number) => {
    setIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [setIndex, maxIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const SLIDER_W = CARD_WIDTH * VISIBLE + CARD_GAP * (VISIBLE - 1);

  // Dot indicators: one dot per possible index position
  const totalDots = maxIndex + 1;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rev-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid #073B2F;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .rev-arrow-btn:hover:not(:disabled) {
          background: #073B2F;
          color: #ffffff;
        }
        .rev-arrow-btn:disabled {
          opacity: 0.28;
          cursor: default;
        }

        .rev-cta-btn {
          display: inline-flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid #69E4DC;
          color: #073B2F;
          font-family: "CX80";
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          background: white;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
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
          transition: background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .rev-dot.active {
          background: #073B2F;
          transform: scale(1.25);
        }
        .rev-dot:hover:not(.active) {
          background: #9C7B4B;
        }
      `}</style>

      {/* ── OUTER CONTAINER ── */}
      <section style={{
        background:     "#ffffff",
        width:          "1512px",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        alignItems:     "center",
        padding:        "64px",
        gap:            "64px",
        boxSizing:      "border-box",
        fontFamily:     "'DM Sans', sans-serif",
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
              fontFamily:         "GTSuper, Georgia, serif",
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

          {/* <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "6px", flexShrink: 0 }}>
            <button className="rev-arrow-btn" onClick={() => handleNav(-1)} disabled={index <= 0} aria-label="Previous reviews">
              <ChevronLeft />
            </button>
            <button className="rev-arrow-btn" onClick={() => handleNav(1)} disabled={index >= maxIndex} aria-label="Next reviews">
              <ChevronRight />
            </button>
          </div> */}
        </div>

        {/* ── SLIDER ── */}
        <div style={{ width: `${SLIDER_W}px`, overflow: "hidden" }}>
          <div
            style={{
              display:    "flex",
              gap:        `${CARD_GAP}px`,
              transform:  `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
              transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  width:          `${CARD_WIDTH}px`,
                  minWidth:       `${CARD_WIDTH}px`,
                  height:         "440px",
                  padding:        "32px",
                  justifyContent: "space-between",
                  alignItems:     "flex-start",
                  borderRadius:   "16px",
                  background:     "#073B2F",
                  flexShrink:     0,
                  boxSizing:      "border-box",
                }}
              >
                {/* Stars */}
                <StarRow />

                {/* Middle: headline + body */}
                <div style={{
                  display:       "flex",
                  flexDirection: "column",
                  alignSelf:     "stretch",
                  flex:          1,
                  gap:           "32px",
                  marginTop:     "24px",
                }}>
                  <p style={{
                    fontFamily:         "'GT Super Display', Georgia, serif",
                    fontSize:           "32px",
                    fontWeight:         500,
                    lineHeight:         "40px",
                    letterSpacing:      "-0.64px",
                    color: "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
                    fontVariantNumeric: "lining-nums proportional-nums",
                    whiteSpace:         "pre-line",
                    
                  }}>
                    {review.headline}
                  </p>

                 <p style={{
  fontFamily: "Sohne, 'DM Sans', sans-serif",  // ✅ FIXED
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "28px",
  color: "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
}}>
                    {review.text}
                  </p>
                </div>

                {/* Name */}
                <p style={{
                  fontFamily: "Söhne, 'DM Sans', sans-serif",
                  fontSize:   "20px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "var(--FS-SALTBUSH, var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9))",
                  alignSelf:  "stretch",
                  paddingTop: "16px",
                  
                  marginTop:  "16px",
                }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DOT INDICATORS ── */}
        <div style={{
          display:    "flex",
          gap:        "8px",
          alignItems: "center",
          marginTop:  "-40px", // pull closer to cards
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

        {/* ── CTA ── */}
        <button className="rev-cta-btn">View more feedback</button>

      </section>
    </>
  );
};

export default Reviews;