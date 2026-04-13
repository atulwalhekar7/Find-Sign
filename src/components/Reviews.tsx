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

/* ── Star Union SVG — Figma: width:210px, height:38.365px, fill:var(--Brand-Signature-FS-LIGHT-GOLD) ── */
const StarRow = () => (
  <svg
    width="210"
    height="38.365"
    viewBox="0 0 210 38.365"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", flexShrink: 0 }}
  >
    {/* Five individual stars as polygon paths, spaced across 210px width, each ~38px tall */}
    {[0, 1, 2, 3, 4].map((i) => {
      const cx = 19 + i * 43;
      const cy = 19;
      const R  = 19;   // outer radius
      const r  = 7.6;  // inner radius
      const pts = Array.from({ length: 10 }, (_, k) => {
        const angle = (Math.PI / 5) * k - Math.PI / 2;
        const radius = k % 2 === 0 ? R : r;
        return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
      }).join(" ");
      return <polygon key={i} points={pts} fill="#9C7B4B" />;
    })}
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Reviews = () => {
  const [index, setIndex]   = useState(0);
  const trackRef            = useRef<HTMLDivElement | null>(null);
  const timerRef            = useRef<number | null>(null);
  const maxIndex            = reviews.length - VISIBLE;

  const goTo = useCallback(
    (idx: number) => setIndex(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex]
  );

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

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`;
    }
  }, [index]);

  const handleNav = (dir: number) => { goTo(index + dir); resetTimer(); };

  const SLIDER_W = CARD_WIDTH * VISIBLE + CARD_GAP * (VISIBLE - 1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

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

        .rev-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rev-cta-btn {
          display: inline-flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          font-family: "CX80 Trial VAR";
          font-size: 15px;
          font-style: normal;
          font-weight: 150;
          line-height: 15px;
          letter-spacing: 4.8px;
          background: white;
          cursor: pointer;
        }
        .rev-cta-btn:hover {
          background: #073B2F;
          color: #ffffff;
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
              fontFamily:         "'GT Super Display', Georgia, serif",
              fontSize:           "44px",
              fontStyle:          "normal",
              fontWeight:         500,
              color:              "#073B2F",
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
              fontStyle:  "normal",
              fontWeight: 300,
              lineHeight: "36px",
              marginTop:  "8px",
            }}>
              In their own words, following their experience with Niki.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "6px", flexShrink: 0 }}>
            <button className="rev-arrow-btn" onClick={() => handleNav(-1)} disabled={index <= 0} aria-label="Previous reviews">
              <ChevronLeft />
            </button>
            <button className="rev-arrow-btn" onClick={() => handleNav(1)} disabled={index >= maxIndex} aria-label="Next reviews">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <div style={{ width: `${SLIDER_W}px`, overflow: "hidden" }}>
          <div className="rev-track" ref={trackRef}>
            {reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  /* Figma: display:flex; width:352px; height:440px; padding:32px;
                     justify-content:space-between; align-items:flex-start;
                     flex-direction:column; border-radius:16px;
                     background: var(--Brand-Foundation-FS-RACING-GREEN, #073B2F) */
                  display:        "flex",
                  flexDirection:  "column",
                  width:          `${CARD_WIDTH}px`,
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
                {/* Stars — FS LIGHT GOLD, Union asset */}
                <StarRow />

                {/* Middle group: headline + body stacked together, grows to fill space */}
                <div style={{
                  display:       "flex",
                  flexDirection: "column",
                  alignSelf:     "stretch",
                  flex:          1,
                  gap:           "8px",
                  marginTop:     "24px",
                }}>
                  {/* Headline — GT Super Display, 32px, 500, lh 40px, ls -0.64px */}
                  <p style={{
                    fontFamily:         "'GT Super Display', Georgia, serif",
                    fontSize:           "32px",
                    fontStyle:          "normal",
                    fontWeight:         500,
                    lineHeight:         "40px",
                    letterSpacing:      "-0.64px",
                    color:              "#C8B99A",
                    fontVariantNumeric: "lining-nums proportional-nums",
                    whiteSpace:         "pre-line",
                  }}>
                    {review.headline}
                  </p>

                  {/* Body — Söhne, 20px, 400, lh 28px (140%) */}
                  <p style={{
                    fontFamily: "Söhne, 'DM Sans', sans-serif",
                    fontSize:   "20px",
                    fontStyle:  "normal",
                    fontWeight: 400,
                    lineHeight: "28px",
                    color:      "#C8B99A",
                  }}>
                    {review.text}
                  </p>
                </div>

                {/* Name — Söhne, 20px, 400, lh 28px, top border */}
                <p style={{
                  fontFamily: "Söhne, 'DM Sans', sans-serif",
                  fontSize:   "20px",
                  fontStyle:  "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color:      "#C8B99A",
                  alignSelf:  "stretch",
                  paddingTop: "16px",
                  borderTop:  "1px solid rgba(200,185,154,0.2)",
                  marginTop:  "16px",
                }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <button className="rev-cta-btn">View more feedback</button>

      </section>
    </>
  );
};

export default Reviews;