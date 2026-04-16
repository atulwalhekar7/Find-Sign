import { useEffect, useRef, useState, useCallback } from "react";

const reviews = [
  { name: "Rok Son", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Amit Bhardwaj", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Oshi Thilakarathna", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Rinzin Wangchuk", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Dayna Bechar", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Subho Ghosh", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Kien Lam", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Jay Dass", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Sahil Saini", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
  { name: "Kush Hirani", headline: "Headline over\ntwo lines", text: "This is placeholder text used to represent a client outcome. It mirrors the structure and length of a real testimonial, showing how content will sit" },
];

const CARD_GAP = 24;

const StarRow = () => (
  <svg width="210" height="38.365" viewBox="0 0 210 38.365" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }}>
    {[0, 1, 2, 3, 4].map((i) => {
      const cx = 19 + i * 43, cy = 19, R = 19, r = 7.6;
      const pts = Array.from({ length: 10 }, (_, k) => {
        const angle = (Math.PI / 5) * k - Math.PI / 2;
        const radius = k % 2 === 0 ? R : r;
        return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
      }).join(" ");
      return <polygon key={i} points={pts} fill="#9C7B4B" />;
    })}
  </svg>
);

const useVisibleCount = () => {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w <= 768 ? 1 : w <= 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
};

const App = () => {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, reviews.length - visible);

  const goTo = useCallback((idx) => {
    const next = Math.max(0, Math.min(idx, maxIndex));
    setIndex(next);
    setAnimKey((k) => k + 1);
  }, [maxIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 4500);
  }, [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) goTo(0);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleNav = (dir) => {
    const next = index + dir;
    if (next >= 0 && next <= maxIndex) { goTo(next); resetTimer(); }
  };

  const totalDots = maxIndex + 1;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── 12-COLUMN GRID ROOT — padding mirrors co-section exactly ── */
        .rev-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          padding: 0 196px;
          box-sizing: border-box;
        }
        @media (max-width: 1199px) { .rev-grid { column-gap: 32px; padding: 0 48px; } }
        @media (max-width: 767px)  { .rev-grid { grid-template-columns: repeat(4, 1fr); column-gap: 16px; padding: 0 20px; } }

        .rev-full { grid-column: 1 / -1; }

        /* ── CARD ANIMATIONS ── */
        @keyframes cardEntrance {
          0%   { opacity: 0; transform: translateY(40px) scale(0.96); }
          60%  { opacity: 1; transform: translateY(-8px) scale(1.01); }
          80%  { transform: translateY(4px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes sideGlow {
          0%   { box-shadow: -18px 0 38px -8px rgba(7,59,47,0), 18px 0 38px -8px rgba(7,59,47,0), 0 0 0 0px rgba(156,123,75,0); }
          30%  { box-shadow: -22px 0 48px -4px rgba(7,59,47,0.72), 22px 0 48px -4px rgba(7,59,47,0.72), 0 0 0 2px rgba(156,123,75,0.35); }
          65%  { box-shadow: -18px 0 38px -6px rgba(7,59,47,0.45), 18px 0 38px -6px rgba(7,59,47,0.45), 0 0 0 1px rgba(156,123,75,0.18); }
          100% { box-shadow: -10px 0 24px -8px rgba(7,59,47,0.15), 10px 0 24px -8px rgba(7,59,47,0.15), 0 0 0 0px rgba(156,123,75,0); }
        }

        .npb-card {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          padding: 32px;
          height: 440px;
          justify-content: space-between;
          align-items: flex-start;
          border-radius: 16px;
          background: #073B2F;
          box-sizing: border-box;
          animation: none;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease;
        }

        .npb-card::before,
        .npb-card::after {
          content: '';
          position: absolute;
          top: 15%;
          bottom: 15%;
          width: 18px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
          filter: blur(10px);
          background: #073B2F;
        }
        .npb-card::before { left: -10px; }
        .npb-card::after  { right: -10px; }

        .npb-card.animate {
          animation:
            cardEntrance 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) both,
            sideGlow 1.4s ease-out both;
        }

        .npb-card.animate:nth-child(1) { animation-delay: 0.05s, 0.05s; }
        .npb-card.animate:nth-child(2) { animation-delay: 0.18s, 0.18s; }
        .npb-card.animate:nth-child(3) { animation-delay: 0.31s, 0.31s; }

        .npb-card.animate::before,
        .npb-card.animate::after { opacity: 0.55; animation: npbPulse 3s ease-in-out infinite; }
        @keyframes npbPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.85); }
          50%       { opacity: 0.65; transform: scaleY(1.1); }
        }
        .npb-card.animate::after { animation-delay: 1.5s; }

        .npb-card:hover {
          transform: translateY(-14px) scale(1.02);
          box-shadow:
            -28px 0 56px -6px rgba(7,59,47,0.55),
            28px 0 56px -6px rgba(7,59,47,0.55),
            0 24px 48px rgba(7,59,47,0.18);
        }
        .npb-card:hover::before,
        .npb-card:hover::after { opacity: 1; }

        .rev-slider-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── NAV BUTTONS — original style preserved ── */
        .rev-arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #073B2F;
          background: transparent;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .rev-arrow-btn:hover:not(:disabled) { background: #073B2F; color: #ffffff; transform: scale(1.05); }
        .rev-arrow-btn:disabled { opacity: 0.2; cursor: default; }

        /* ── CTA ── */
        .rev-cta-btn {
          display: inline-flex;
          height: 48px;
          padding: 12px 24px;
          justify-content: center; align-items: center; gap: 10px;
          border-radius: 8px;
          border: 1px solid #69E4DC;
          color: #073B2F;
          font-family: inherit;
          font-size: 15px; font-weight: 700; line-height: 15px;
          letter-spacing: 4.8px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
        }
        .rev-cta-btn:hover { background: #073B2F; color: #ffffff; }

        /* ── DOT ── */
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

        /* ── HEADING BLOCK — mirrors co-header from Client Outcomes ── */
        .rev-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 24px;
          align-items: flex-start;
        }

        .rev-title-group {
          grid-column: 1 / 9;
        }

        /* ── RESPONSIVE TEXT — mirrors co-h2 / co-subtitle ── */
        .rev-heading {
          font-family: 'GT Super Display Medium', Georgia, serif;
          font-size: 44px;
          font-weight: 500;
          font-style: normal;
          color: var(--FS-RACING-GREEN, #073B2F);
          line-height: 54px;
          letter-spacing: -0.88px;
          font-variant-numeric: lining-nums proportional-nums;
          margin-bottom: 12px;
        }
        .rev-subheading {
          color: #000;
          font-family: "Söhne", "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          margin: 0;
        }

        /* ── TABLET (768px – 1199px) ── */
        @media (max-width: 1199px) {
          .rev-header { column-gap: 32px; }
          .rev-heading { font-size: 36px !important; line-height: 46px !important; }
          .rev-subheading { font-size: 20px !important; line-height: 30px !important; }
          .npb-card { height: 400px; padding: 24px; }
        }

        /* ── MOBILE (≤767px) ── */
        @media (max-width: 767px) {
          .rev-header {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 16px;
          }
          .rev-title-group {
            grid-column: 1 / -1;
          }
          .rev-arrows-inline {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
          .rev-heading { font-size: 28px !important; line-height: 38px !important; letter-spacing: -0.5px !important; }
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

        {/* ── HEADER ROW: responsive title only — same grid structure as Client Outcomes ── */}
        <div className="rev-grid">
          <div className="rev-full">
            <div className="rev-header">

              {/* Title group — cols 1–8 */}
              <div className="rev-title-group">
                <h2 className="rev-heading">What clients say</h2>
                <p className="rev-subheading">In their own words, following their experience with Niki.</p>
              </div>

            </div>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <SliderSection
          index={index}
          animKey={animKey}
          visible={visible}
          goTo={goTo}
          resetTimer={resetTimer}
          maxIndex={maxIndex}
          handleNav={handleNav}
          totalDots={totalDots}
        />

        {/* ── CTA ── */}
        <button className="rev-cta-btn">View more feedback</button>

      </section>
    </div>
  );
};

const SliderSection = ({ index, animKey, visible, goTo, resetTimer, maxIndex, handleNav, totalDots }) => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(352);

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
      {/* slider viewport */}
      <div className="rev-grid" style={{ rowGap: 0 }}>
        <div className="rev-full" style={{ overflow: "hidden", padding: "20px 0" }} ref={containerRef}>
          <div
            className="rev-slider-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {reviews.map((review, i) => (
              <div
                key={`${animKey}-${i}`}
                className={`npb-card animate`}
                style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
              >
                <StarRow />
                <div style={{ display: "flex", flexDirection: "column", alignSelf: "stretch", flex: 1, gap: "32px", marginTop: "24px" }}>
                  <p style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 500, lineHeight: "1.25", letterSpacing: "-0.64px", color: "#F9F9F9", whiteSpace: "pre-line" }}>
                    {review.headline}
                  </p>
                  <p style={{ fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: 400, lineHeight: "1.5", color: "#F9F9F9" }}>
                    {review.text}
                  </p>
                </div>
                <p style={{ fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: 400, lineHeight: "28px", color: "#F9F9F9", alignSelf: "stretch", marginTop: "16px", opacity: 0.9 }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* dots + arrows — original layout preserved */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={`rev-dot${i === index ? " active" : ""}`}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <button className="rev-arrow-btn" onClick={() => handleNav(-1)} disabled={index <= 0} aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className="rev-arrow-btn" onClick={() => handleNav(1)} disabled={index >= maxIndex} aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;