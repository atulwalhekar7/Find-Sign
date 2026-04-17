import { useState, useEffect, useRef } from "react";

const AQUA         = "#69E4DC";
const RACING_GREEN = "#003327";
const DARK_GREEN   = "#073B2F";
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

const INTERVAL = 3500;

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ═══════════════════════════════
     KEYFRAMES
  ═══════════════════════════════ */

  /* Card entrance — spring pop up */
  @keyframes cardReveal {
    0%   { opacity: 0; transform: translateY(36px) scale(0.94); }
    55%  { transform: translateY(-5px) scale(1.012); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Growth circle entrance — drop + bounce */
  @keyframes circleDrop {
    0%   { opacity: 0; transform: scale(0.5) translateY(-20px) rotate(-30deg); }
    60%  { transform: scale(1.12) translateY(4px) rotate(5deg); }
    100% { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
  }

  /* Shimmer sweep across the growth circle */
  @keyframes shimmerSweep {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* Row data items stagger in */
  @keyframes rowIn {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* Aqua underline expand on header */
  @keyframes lineExpand {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  /* Dot progress bar */
  @keyframes dotProgress {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  /* Image Ken Burns on hover */
  @keyframes kenBurns {
    from { transform: scale(1); }
    to   { transform: scale(1.08); }
  }

  /* Heading slide up on mount */
  @keyframes headSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Arrow button pulse ring */
  @keyframes ringPulse {
    0%   { box-shadow: 0 0 0 0 rgba(0,51,39,0.25); }
    70%  { box-shadow: 0 0 0 8px rgba(0,51,39,0); }
    100% { box-shadow: 0 0 0 0 rgba(0,51,39,0); }
  }

  /* Card shimmer overlay on hover */
  @keyframes cardShimmer {
    from { left: -100%; }
    to   { left: 120%; }
  }

  /* View btn glow pulse */
  @keyframes btnGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(105,228,220,0.35); }
    50%      { box-shadow: 0 0 0 10px rgba(105,228,220,0); }
  }

  /* ═══════════════════════════════
     SECTION GRID — exactly mirrors OurProcess
  ═══════════════════════════════ */
  .co-section {
    background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 64px;
    padding: 64px 196px 80px;
  }

  .co-head {
    grid-column: 1 / -1;
    margin-bottom: 48px;
    animation: headSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) both;
  }

  .co-slider-outer {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
  }

  /* ── Header row ── */
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

  /* ── h2 — identical to op-title-text ── */
  .co-h2 {
    font-family: "GT Super Display Medium";
    font-size: 44px;
    font-weight: 500;
    color: ${DARK_GREEN};
    line-height: 54px;
    letter-spacing: -0.88px;
    font-variant-numeric: lining-nums proportional-nums;
    margin-bottom: 12px;
    max-width: 100%;
    position: relative;
    display: inline-block;
  }

  /* Animated aqua underline accent */
  // .co-h2::after {
  //   content: '';
  //   position: absolute;
  //   bottom: -4px;
  //   left: 0;
  //   width: 100%;
  //   height: 2px;
  //   background: ${AQUA};
  //   transform-origin: left center;
  //   transform: scaleX(0);
  //   border-radius: 2px;
  //   animation: lineExpand 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both;
  // }

  /* ── subtitle — identical to op-subtitle-text ── */
  .co-subtitle {
    font-family: Sohne, 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #000;
    line-height: 36px;
    margin: 0;
    max-width: 100%;
    opacity: 0;
    animation: headSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.18s both;
  }

  /* ═══════════════════════════════
     ARROW BUTTONS
  ═══════════════════════════════ */
  .arr-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1.5px solid ${DARK_GREEN};
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background  0.25s ease,
      border-color 0.25s ease,
      transform   0.25s cubic-bezier(0.34,1.56,0.64,1);
    flex-shrink: 0;
  }
  .arr-btn:hover:not(:disabled) {
    background: ${DARK_GREEN};
    transform: scale(1.08);
    animation: ringPulse 0.6s ease forwards;
  }
  .arr-btn:hover:not(:disabled) path { stroke: ${WHITE} !important; }
  .arr-btn:active:not(:disabled)     { transform: scale(0.94); }
  .arr-btn:disabled { opacity: 0.3; cursor: default; }

  /* ═══════════════════════════════
     SLIDER
  ═══════════════════════════════ */
  .co-slider-viewport {
    width: 100%;
    overflow: hidden;
  }

  .co-slider-track {
    display: flex;
    gap: clamp(16px, 2.11vw, 32px);
    transition: transform 0.6s cubic-bezier(0.77,0,0.18,1);
    will-change: transform;
  }

  /* ═══════════════════════════════
     PROPERTY CARD
  ═══════════════════════════════ */
  .property-card {
    flex: 0 0 calc((100% - clamp(16px,2.11vw,32px) * 2) / 3);
    min-width: 0;
    background: ${WHITE};
    border: 1px solid rgba(0,51,39,0.09);
    border-radius: 16px;
    overflow: visible;
    position: relative;
    display: flex;
    flex-direction: column;
    animation: cardReveal 0.55s cubic-bezier(0.22,1,0.36,1) both;

    transition:
      transform   0.38s cubic-bezier(0.34,1.56,0.64,1),
      box-shadow  0.38s ease,
      border-color 0.38s ease;
  }

  /* Hover lift + card glow */
  .property-card:hover {
    transform: translateY(-10px) scale(1.018);
    box-shadow:
      0 24px 56px rgba(0,51,39,0.13),
      0 6px  18px rgba(0,51,39,0.08),
      0 0 0 1px rgba(0,51,39,0.07);
    border-color: rgba(0,51,39,0.18);
    z-index: 3;
  }

  /* Shimmer sweep over card on hover */
  .property-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(
      105deg,
      transparent 20%,
      rgba(255,255,255,0.35) 50%,
      transparent 80%
    );
    left: -100%;
    top: 0;
    width: 60%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
    opacity: 0;
    transition: opacity 0.1s;
  }
  .property-card:hover::before {
    opacity: 1;
    animation: cardShimmer 0.7s ease forwards;
  }

  /* ── Image wrap ── */
  .card-image-wrap {
    width: 100%;
    height: clamp(160px, 14.58vw, 220px);
    background: #d9d9d9;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 16px 16px 0 0;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
  }
  .property-card:hover .card-image {
    transform: scale(1.07);
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
    animation: circleDrop 0.65s cubic-bezier(0.34,1.56,0.64,1) both;
    transition:
      transform 0.38s cubic-bezier(0.34,1.56,0.64,1),
      box-shadow 0.38s ease;
    overflow: hidden;
  }

  /* Shimmer ring inside circle */
  .growth-circle::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      transparent 30%,
      rgba(255,255,255,0.55) 50%,
      transparent 70%
    );
    background-size: 200% 100%;
    animation: shimmerSweep 2.4s ease infinite;
    pointer-events: none;
  }

  .property-card:hover .growth-circle {
    transform: scale(1.12) rotate(-6deg) translateY(-3px);
    box-shadow: 0 8px 24px rgba(105,228,220,0.5);
  }

  .growth-label {
    font-family: 'Söhne', 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: ${RACING_GREEN};
    line-height: 14px;
    text-align: center;
    display: block;
    position: relative;
    z-index: 1;
  }

  .growth-value {
    font-family: 'GT Super Display Medium';
    font-size: clamp(16px, 1.45vw, 22px);
    font-weight: 500;
    color: ${DARK_GREEN};
    line-height: 24px;
    letter-spacing: -0.44px;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    position: relative;
    z-index: 1;
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
    opacity: 0;
    animation: rowIn 0.4s ease both;
  }

  .card-row:nth-child(1) { animation-delay: 0.15s; }
  .card-row:nth-child(2) { animation-delay: 0.22s; }
  .card-row:nth-child(3) { animation-delay: 0.29s; }
  .card-row:nth-child(4) { animation-delay: 0.36s; }

  .row-label {
    font-family: Sohne, 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #000;
    transition: color 0.2s;
  }

  .row-val {
    font-family: 'Söhne', 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #757575;
    transition: color 0.2s;
  }

  .property-card:hover .row-label { color: ${DARK_GREEN}; }
  .property-card:hover .row-val   { color: #444; }

  /* ═══════════════════════════════
     PROGRESS DOTS
  ═══════════════════════════════ */
  .co-dots {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
  }

  .co-dot {
    width: 28px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0,51,39,0.15);
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    overflow: hidden;
    transition: background 0.3s, transform 0.3s, width 0.3s;
  }
  .co-dot.active {
    width: 44px;
    background: rgba(0,51,39,0.15);
  }
  .co-dot.active::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${DARK_GREEN};
    transform-origin: left;
    animation: dotProgress 3.5s linear forwards;
  }

  /* ── View More button ── */
  .view-btn {
    display: flex;
    height: 48px;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid ${AQUA};
    color: ${DARK_GREEN};
    font-family: CX80;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 4.8px;
    background: transparent;
    cursor: pointer;
    transition:
      background 0.32s ease,
      color       0.32s ease,
      transform   0.32s cubic-bezier(0.34,1.56,0.64,1),
      box-shadow  0.32s ease;
    animation: btnGlow 3s ease 1.2s infinite;
  }
  .view-btn:hover {
    background: ${DARK_GREEN};
    color: ${WHITE};
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0,51,39,0.22);
    animation: none;
  }
  .view-btn:active {
    transform: scale(0.97);
  }

  /* ═══════════════════════════════
     RESPONSIVE — mirrors OurProcess exactly
  ═══════════════════════════════ */
  @media (max-width: 1199px) {
    .co-section   { column-gap: 32px; padding: 48px 48px 64px; }
    .co-header    { column-gap: 32px; }
    .co-h2        { font-size: 36px !important; line-height: 46px !important; }
    .co-subtitle  { font-size: 20px !important; line-height: 30px !important; }
    .property-card {
      flex: 0 0 calc((100% - clamp(16px,2.11vw,32px)) / 2);
    }
  }

  @media (max-width: 767px) {
    .co-section {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      padding: 40px 20px 56px;
    }
    .co-head     { margin-bottom: 32px; }
    .co-header   { grid-template-columns: 1fr; column-gap: 0; row-gap: 16px; }
    .co-title-group { grid-column: 1 / -1; }
    .co-arrows   { grid-column: 1 / -1; justify-content: flex-start; }
    .co-h2       { font-size: 28px !important; line-height: 38px !important; }
    .co-subtitle { font-size: 16px !important; line-height: 26px !important; }
    .property-card {
      flex: 0 0 100%;
      transform: none !important;
    }
    .property-card:hover { transform: translateY(-4px) scale(1.005) !important; }
  }

  @media (max-width: 639px) {
    .property-card { flex: 0 0 100%; }
  }
`;

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
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Image */}
      <div className="card-image-wrap">
        <img src={card.image} alt="Property" className="card-image" loading="lazy" />
      </div>

      {/* Growth circle */}
      <div
        className="growth-circle"
        style={{ animationDelay: `${index * 90 + 180}ms` }}
      >
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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Responsive visible count */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(0, cards.length - visibleCount);

  const goto = (idx: number) => {
    const next = Math.max(0, Math.min(idx, maxIdx));
    setCur(next);
    setAnimKey(k => k + 1);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur(c => { const n = c >= maxIdx ? 0 : c + 1; setAnimKey(k => k + 1); return n; });
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) {
        setCur(c => { const n = c >= maxIdx ? 0 : c + 1; setAnimKey(k => k + 1); return n; });
      }
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIdx]);

  useEffect(() => {
    if (cur > maxIdx) setCur(maxIdx);
  }, [maxIdx]);

  return (
    <>
      <style>{CSS}</style>

      <div className="co-section">

        {/* ── Head ── */}
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
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke={DARK_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="arr-btn"
                onClick={() => { goto(cur + 1); resetTimer(); }}
                disabled={cur === maxIdx}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke={DARK_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Slider + footer ── */}
        <div className="co-slider-outer">

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
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Progress dots — always visible, pill style */}
          <div className="co-dots">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                className={`co-dot${cur === i ? " active" : ""}`}
                onClick={() => { goto(i); resetTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <button className="view-btn">VIEW MORE OUTCOMES</button>
          </div>

        </div>
      </div>
    </>
  );
}