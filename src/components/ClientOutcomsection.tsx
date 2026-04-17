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
  index,
}: {
  card: typeof cards[0];
  index: number;
}) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="card-image-wrap">
        <img
          src={card.image}
          alt="Property"
          className="card-image"
        />
      </div>

      {/* Growth circle with continuous heartbeat and float animation */}
      <div 
        className="growth-circle" 
        style={{ 
          animationDelay: `${(index * 150)}ms` 
        }}
      >
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
      </div>

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
                  ? "1px dashed #846F58"
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

export default function ClientOutcomes() {
  const [cur, setCur]           = useState(0);
  const [paused, setPaused]     = useState(false);
  const [animKey, setAnimKey]   = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef                = useRef<ReturnType<typeof setInterval> | null>(null);

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

  useEffect(() => {
    if (cur > maxIdx) setCur(maxIdx);
  }, [maxIdx]);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Continuous Heartbeat + Float Animation */
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

        .co-section {
          background: #F9F9F9;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          padding: 64px 196px 80px;
        }

        .co-head {
          grid-column: 1 / -1;
          margin-bottom: 48px;
        }

        .co-slider-outer {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 64px;
          align-items: center;
        }

        .co-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          align-items: flex-start;
        }

        .co-title-group { grid-column: 1 / 9; }
        .co-arrows {
          grid-column: 10 / 13;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: flex-end;
          padding-top: 6px;
        }

        .co-h2 {
          font-family: serif;
          font-size: 44px;
          color: ${RACING_GREEN};
          margin-bottom: 12px;
        }

        .co-subtitle {
          font-family: sans-serif;
          font-size: 24px;
          font-weight: 300;
          color: #000;
        }

        @media (max-width: 1199px) {
          .co-section { padding: 48px 48px 64px; column-gap: 32px; }
          .co-h2 { font-size: 36px; }
          .co-subtitle { font-size: 20px; }
        }

        @media (max-width: 767px) {
          .co-section { grid-template-columns: repeat(4, 1fr); padding: 40px 20px 56px; }
          .co-header { grid-template-columns: 1fr; }
          .co-title-group, .co-arrows { grid-column: 1 / -1; }
          .co-arrows { justify-content: flex-start; }
        }

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
          transition: background 0.2s;
        }
        .arr-btn:hover:not(:disabled) { background: ${RACING_GREEN}; }
        .arr-btn:hover:not(:disabled) path { stroke: ${WHITE}; }
        .arr-btn:disabled { opacity: 0.2; cursor: default; }

        .co-slider-viewport { width: 100%; overflow: hidden; padding: 20px 0; margin: -20px 0; }
        .co-slider-track {
          display: flex;
          gap: clamp(16px, 2.11vw, 32px);
          transition: transform 0.6s cubic-bezier(0.77,0,0.18,1);
        }

        .property-card {
          flex: 0 0 calc((100% - clamp(16px, 2.11vw, 32px) * 2) / 3);
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
        
        /* HOVER ANIMATION: Card lifts and glows */
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0, 51, 39, 0.12);
          border-color: ${AQUA};
        }

        @media (max-width: 1023px) { .property-card { flex: 0 0 calc((100% - 32px) / 2); } }
        @media (max-width: 639px) { .property-card { flex: 0 0 100%; } }

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

        /* HOVER ANIMATION: Image subtle zoom */
        .property-card:hover .card-image {
          transform: scale(1.08);
        }

        /* Growth Circle with Heartbeat Animation */
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

        .view-btn {
          height: 48px;
          padding: 0 32px;
          border-radius: 8px;
          border: 1px solid ${AQUA};
          color: ${RACING_GREEN};
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .view-btn:hover { background: ${RACING_GREEN}; color: white; transform: scale(1.05); }

        .co-dots { display: none; gap: 8px; margin-top: 16px; }
        @media (max-width: 767px) { .co-dots { display: flex; } }
        .co-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; }
        .co-dot.active { background: ${RACING_GREEN}; }
      `}</style>

      <div className="co-section">
        <div className="co-head">
          <div className="co-header">
            <div className="co-title-group">
              <h2 className="co-h2">Client outcomes</h2>
              <p className="co-subtitle">Growth achieved through early access and informed decisions.</p>
            </div>

            <div className="co-arrows">
              <button className="arr-btn" onClick={() => { goto(cur - 1); resetTimer(); }} disabled={cur === 0}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="arr-btn" onClick={() => { goto(cur + 1); resetTimer(); }} disabled={cur === maxIdx}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="co-slider-outer">
          <div className="co-slider-viewport" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div
              className="co-slider-track"
              style={{
                transform: `translateX(calc(-${cur} * (100% / ${visibleCount} + clamp(16px, 2.11vw, 32px) / ${visibleCount})))`,
              }}
            >
              {cards.map((card, i) => (
                <PropertyCard key={`${card.id}-${animKey}`} card={card} index={i} />
              ))}
            </div>
          </div>

          <div className="co-dots">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} className={`co-dot${cur === i ? " active" : ""}`} onClick={() => { goto(i); resetTimer(); }} />
            ))}
          </div>

          <button className="view-btn">View More Outcomes</button>
        </div>
      </div>
    </>
  );
}