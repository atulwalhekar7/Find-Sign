import { useState, useEffect, useRef } from "react";

const AQUA         = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE        = "#FFFFFF";

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "XX.X%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
];

const INTERVAL = 3000;

/* ── Property Card ── */
function PropertyCard({
  card,
  animKey,
  index,
}: {
  card: typeof cards[0];
  animKey: number;
  index: number;
}) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Image area */}
      <div className="card-image-wrap">
        <img
          src={card.image}
          alt="Property"
          className="card-image"
        />
      </div>

      {/* Growth circle */}
      <div className="growth-circle">
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
      </div>

      {/* Data rows */}
      <div className="card-data">
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value",  val: card.currentValue  },
          { label: "Timeframe",      val: card.timeframe      },
          { label: "Rental yield",   val: card.rentalYield    },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            className="card-row"
            style={{
              borderBottom:
                i < arr.length - 1
                  ? "1px dashed var(--Brand-Signature-FS-LIGHT-GOLD, #846F58)"
                  : "none",
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

/* ── Main Export ── */
export default function ClientOutcomes() {
  const [cur, setCur]           = useState(0);
  const [paused, setPaused]     = useState(false);
  const [animKey, setAnimKey]   = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef                = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Responsive: count visible cards based on container width ── */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)  setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(0, cards.length - visibleCount);

  const goto = (idx: number) => {
    const next = Math.max(0, Math.min(idx, maxIdx));
    setCur(next);
    setAnimKey((k) => k + 1);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => {
        const next = c >= maxIdx ? 0 : c + 1;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) {
        setCur((c) => {
          const next = c >= maxIdx ? 0 : c + 1;
          setAnimKey((k) => k + 1);
          return next;
        });
      }
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIdx]);

  /* Clamp cur when visibleCount changes */
  useEffect(() => {
    if (cur > maxIdx) setCur(maxIdx);
  }, [maxIdx]);

  return (
    <>
      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Card slide-in animation ── */
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardHoverFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        /* ── Outer section — mirrors op-section exactly ── */
        .co-section {
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          box-sizing: border-box;

          /* 12-col grid — identical to OurProcess */
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          padding: 64px 196px 80px;
        }

        /* ── Head block spans all 12 cols — mirrors op-head ── */
        .co-head {
          grid-column: 1 / -1;
          margin-bottom: 48px;
        }

        /* ── Slider + footer also span all 12 cols ── */
        .co-slider-outer {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 64px;
          align-items: center;
        }

        /* ── Header row inside co-head: title left, arrows right ── */
        .co-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          align-items: flex-start;
        }

        .co-title-group {
          grid-column: 1 / 9; /* 8 of 12 cols — mirrors op-title-group */
        }

        .co-arrows {
          grid-column: 10 / 13; /* cols 10–12 */
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: flex-end;
          padding-top: 6px;
        }

        /* ── h2 — identical tokens to op-title-text ── */
        .co-h2 {
          font-family: "GT Super Display Medium";
          font-size: 44px;
          font-style: normal;
          font-weight: 500;
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          line-height: 54px;
          letter-spacing: -0.88px;
          font-variant-numeric: lining-nums proportional-nums;
          margin-bottom: 12px;
          max-width: 100%;
        }

        /* ── subtitle — identical tokens to op-subtitle-text ── */
        .co-subtitle {
          font-family: Sohne, 'DM Sans', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          color: #000;
          line-height: 36px;
          margin: 0;
          max-width: 100%;
        }

        /* ── TABLET (768px – 1199px) — mirrors OurProcess tablet block ── */
        @media (max-width: 1199px) {
          .co-section {
            column-gap: 32px;
            padding: 48px 48px 64px;
          }
          .co-header {
            column-gap: 32px;
          }
          .co-h2 {
            font-size: 36px !important;
            line-height: 46px !important;
          }
          .co-subtitle {
            font-size: 20px !important;
            line-height: 30px !important;
          }
        }

        /* ── MOBILE (≤767px) — mirrors OurProcess mobile block ── */
        @media (max-width: 767px) {
          .co-section {
            grid-template-columns: repeat(4, 1fr);
            column-gap: 16px;
            padding: 40px 20px 56px;
          }
          .co-head {
            margin-bottom: 32px;
          }
          .co-header {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 16px;
          }
          .co-title-group {
            grid-column: 1 / -1;
          }
          .co-arrows {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
          .co-h2 {
            font-size: 28px !important;
            line-height: 38px !important;
          }
          .co-subtitle {
            font-size: 16px !important;
            line-height: 26px !important;
          }
        }

        /* ── Arrow buttons ── */
        .arr-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid ${RACING_GREEN};
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .arr-btn:hover { background: ${RACING_GREEN}; }
        .arr-btn:hover path { stroke: ${WHITE} !important; }
        .arr-btn:disabled { opacity: 0.35; cursor: default; }

        /* ── Slider viewport ── */
        .co-slider-viewport {
          width: 100%;
          overflow: hidden;
        }

        .co-slider-track {
          display: flex;
          gap: clamp(16px, 2.11vw, 32px);
          transition: transform 0.55s cubic-bezier(0.77,0,0.18,1);
        }

        /* ── Property Card ── */
        .property-card {
          /* Each card spans 4 of 12 columns = 1/3 of track */
          flex: 0 0 calc((100% - clamp(16px, 2.11vw, 32px) * 2) / 3);
          min-width: 0;
          background: ${WHITE};
          border: 1px solid rgba(0,51,39,0.10);
          border-radius: 12px;
          overflow: visible;
          position: relative;
          display: flex;
          flex-direction: column;

          /* Entry animation */
          animation: cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) both;

          /* Hover lift */
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s cubic-bezier(0.22,1,0.36,1);
        }

        .property-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 20px 48px rgba(0,51,39,0.13), 0 4px 12px rgba(0,51,39,0.07);
        }

        /* On mobile: full width; tablet: half */
        @media (max-width: 1023px) {
          .property-card {
            flex: 0 0 calc((100% - clamp(16px, 2.11vw, 32px)) / 2);
          }
        }
        @media (max-width: 639px) {
          .property-card {
            flex: 0 0 100%;
          }
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          height: clamp(160px, 14.58vw, 220px);
          background: #d9d9d9;
          overflow: hidden;
          flex-shrink: 0;
          border-radius: 12px 12px 0 0;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .property-card:hover .card-image {
          transform: scale(1.05);
        }

        /* ── Growth circle ── */
        .growth-circle {
          position: absolute;
          top: clamp(120px, 10.8vw, 165px);
          right: 18px;
          width: clamp(80px, 7.26vw, 110px);
          height: clamp(80px, 7.26vw, 110px);
          border-radius: 50%;
          background: ${AQUA};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .property-card:hover .growth-circle {
          transform: scale(1.08) rotate(-4deg);
        }

        .growth-label {
          font-family: 'Söhne', 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: ${RACING_GREEN};
          line-height: 14px;
          text-align: center;
          display: block;
        }

        .growth-value {
          font-family: 'GT Super Display Medium';
          font-size: clamp(16px, 1.45vw, 22px);
          font-weight: 500;
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          line-height: 24px;
          letter-spacing: -0.44px;
          text-align: center;
          font-variant-numeric: lining-nums proportional-nums;
        }

        /* ── Card data rows ── */
        .card-data {
          padding: clamp(72px, 6.35vw, 96px) 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 0;
        }

        .row-label {
          font-family: Sohne, 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));
        }

        .row-val {
          font-family: 'Söhne', 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--FS-System-Grey-1, #757575);
        }

        /* ── View more button ── */
        .view-btn {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          font-family: CX80;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          margin: 0 auto;
          background: White;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .view-btn:hover {
          background: ${RACING_GREEN};
          color: ${WHITE};
        }

        /* ── Dot indicators (mobile) ── */
        .co-dots {
          display: none;
          gap: 8px;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 767px) {
          .co-dots { display: flex; }
        }
        .co-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,51,39,0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .co-dot.active {
          background: ${RACING_GREEN};
          transform: scale(1.3);
        }
      `}</style>

      {/* ── OUTER SECTION (12-col grid, same as OurProcess) ── */}
      <div className="co-section">

        {/* ── Head block — grid-column: 1 / -1, mirrors op-head ── */}
        <div className="co-head">
          <div className="co-header">
            <div className="co-title-group">
              <h2 className="co-h2">Client outcomes</h2>
              <p className="co-subtitle">
                Growth achieved through early access and informed decisions.
              </p>
            </div>

            {/* Arrows */}
            <div className="co-arrows">
              <button
                className="arr-btn"
                onClick={() => { goto(cur - 1); resetTimer(); }}
                disabled={cur === 0}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="arr-btn"
                onClick={() => { goto(cur + 1); resetTimer(); }}
                disabled={cur === maxIdx}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Slider + footer — grid-column: 1 / -1 ── */}
        <div className="co-slider-outer">

          {/* Slider viewport */}
          <div
            className="co-slider-viewport"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="co-slider-track"
              style={{
                transform: `translateX(calc(-${cur} * (100% / ${visibleCount} + clamp(16px, 2.11vw, 32px) / ${visibleCount})))`,
              }}
            >
              {cards.map((card, i) => (
                <PropertyCard
                  key={`${card.id}-${animKey}`}
                  card={card}
                  animKey={animKey}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Mobile dot indicators */}
          <div className="co-dots">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                className={`co-dot${cur === i ? " active" : ""}`}
                onClick={() => { goto(i); resetTimer(); }}
              />
            ))}
          </div>

          {/* VIEW MORE OUTCOMES */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <button className="view-btn">View More Outcomes</button>
          </div>

        </div>
      </div>
    </>
  );
}