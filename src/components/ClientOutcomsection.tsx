import { useState, useEffect, useRef } from "react";
import HERO_SRC from "../assets/DSC06268.jpg"; // ← replace with your hero image path

// ── To use your own hero image: ───────────────────────────────────────────────
// import heroImg from "./assets/your-hero-image.jpg";
// Then replace src={HERO_SRC} with src={heroImg}
// ─────────────────────────────────────────────────────────────────────────────

const AQUA         = "#69E4DC";
const RACING_GREEN = "#003327";
const LIGHT_GOLD   = "#846F58";
const BURNT_GOLD   = "#6C5843";
const SALTBUSH     = "#F9F9F9";
const WHITE        = "#FFFFFF";

// Replace this URL with your imported image variable


const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "38.2%",
    purchasePrice: "$553,000",
    currentValue: "$765,000",
    timeframe: "3 years",
    rentalYield: "5.6%",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "31.5%",
    purchasePrice: "$539,000",
    currentValue: "$709,000",
    timeframe: "2.5 years",
    rentalYield: "5.6%",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "44.1%",
    purchasePrice: "$480,000",
    currentValue: "$692,000",
    timeframe: "4 years",
    rentalYield: "6.1%",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "27.8%",
    purchasePrice: "$610,000",
    currentValue: "$780,000",
    timeframe: "2 years",
    rentalYield: "4.9%",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "52.3%",
    purchasePrice: "$420,000",
    currentValue: "$640,000",
    timeframe: "5 years",
    rentalYield: "6.8%",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "35.6%",
    purchasePrice: "$495,000",
    currentValue: "$671,000",
    timeframe: "3.5 years",
    rentalYield: "5.2%",
  },
];

const VISIBLE  = 3;
const INTERVAL = 3000;

// ── Property Card ─────────────────────────────────────────────────────────────
function PropertyCard({ card }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: WHITE,
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(0,51,39,0.08)",
        boxShadow: hov
          ? "0 18px 44px rgba(0,51,39,0.16)"
          : "0 4px 20px rgba(0,51,39,0.08)",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease",
      }}
    >
      <div style={{ position: "relative", height: 200, overflow: "hidden", background: "#ccc" }}>
        <img
          src={card.image}
          alt="Property"
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hov ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.55s ease",
          }}
        />

        {/* Badge */}
        <div style={{
          position: "absolute", top: 13, left: 13, zIndex: 4,
          display: "flex", alignItems: "center", gap: 6,
          background: WHITE, borderRadius: 6, padding: "5px 10px 5px 8px",
          fontWeight: 700, fontSize: 9, letterSpacing: "0.1em",
          color: RACING_GREEN, fontFamily: "'Inter', sans-serif",
          boxShadow: "0 2px 8px rgba(0,51,39,0.18)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: AQUA, display: "inline-block" }} />
          WE BOUGHT IT
        </div>

        {/* Growth Circle */}
        <div style={{
          position: "absolute", bottom: -26, right: 18,
          width: 90, height: 90, borderRadius: "50%", background: AQUA,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          zIndex: 3, boxShadow: "0 3px 14px rgba(0,51,39,0.2)",
        }}>
          <span style={{ fontSize: 9, fontWeight: 500, color: RACING_GREEN, letterSpacing: "0.04em", marginBottom: 1, fontFamily: "'Inter', sans-serif" }}>
            Growth
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: 20, color: RACING_GREEN, lineHeight: 1 }}>
            {card.growth}
          </span>
        </div>
      </div>

      <div style={{ padding: "36px 18px 20px", display: "flex", flexDirection: "column" }}>
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value",  val: card.currentValue  },
          { label: "Timeframe",      val: card.timeframe      },
          { label: "Rental yield",   val: card.rentalYield    },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "9px 0",
              borderBottom: i < arr.length - 1 ? "1px dashed rgba(0,51,39,0.13)" : "none",
            }}
          >
            <span style={{ fontSize: 12.5, fontWeight: 400, color: "#444", fontFamily: "'Inter', sans-serif" }}>{label}</span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: RACING_GREEN, fontFamily: "'Inter', sans-serif" }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero Banner ───────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <div style={{
      position: "relative",
      width: "1512",
      height: 698,           // exact height from your screenshot
      overflow: "hidden",
      background: RACING_GREEN,
      display: "block",      // no margin / gap from block context
      lineHeight: 0,         // kills any inline spacing
    }}>
      <img
        src={HERO_SRC}
        alt="The right property, secured before the wider market"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,20,14,0.40)", pointerEvents: "none" }} />

      {/* Headline */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600, fontStyle: "italic",
          fontSize: "clamp(22px, 3.2vw, 46px)",
          color: WHITE, textAlign: "center",
          lineHeight: 1.28, letterSpacing: "0.01em",
          maxWidth: 680, margin: 0,
          textShadow: "0 2px 20px rgba(0,0,0,0.4)",
        }}>
          The right property, secured before the wider market
        </h2>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function ClientOutcomesCarousel() {
  const [cur, setCur]       = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef            = useRef(null);
  const maxIdx              = cards.length - VISIBLE;

  const goto = (idx) => setCur(Math.max(0, Math.min(idx, maxIdx)));

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const handlePrev = () => { goto(cur - 1); resetTimer(); };
  const handleNext = () => { goto(cur + 1); resetTimer(); };
  const handleDot  = (i) => { goto(i);      resetTimer(); };

  const slideW = `calc(${100 / VISIBLE}% - ${(16 * (VISIBLE - 1)) / VISIBLE}px)`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .arr-btn:hover { background: ${RACING_GREEN} !important; }
        .arr-btn:hover svg path { stroke: #fff !important; }
      `}</style>

      {/* ── CAROUSEL SECTION ── */}
      <div style={{
        background: SALTBUSH,
        padding: "60px 32px 0 32px", // ← bottom padding = 0, kills the gap
        fontFamily: "'Inter', sans-serif",
      }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 52, animation: "fadeUp .5s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 13, marginBottom: 16 }}>
            <div style={{ width: 38, height: 1.5, background: LIGHT_GOLD, borderRadius: 1 }} />
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.26em", color: LIGHT_GOLD, textTransform: "uppercase" }}>
              Client Outcomes
            </span>
            <div style={{ width: 38, height: 1.5, background: LIGHT_GOLD, borderRadius: 1 }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(30px, 4vw, 52px)", color: RACING_GREEN, lineHeight: 1.08 }}>
            What Our Clients <em style={{ fontStyle: "italic", fontWeight: 600 }}>Say</em>
          </h1>
          <p style={{ fontSize: 14, color: BURNT_GOLD, lineHeight: 1.7, maxWidth: 400, margin: "12px auto 0" }}>
            Growth achieved through early access and informed decisions.
          </p>
        </div>

        {/* Slider */}
        <div
          style={{ overflow: "hidden", maxWidth: 1080, margin: "0 auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{
            display: "flex", gap: 16,
            transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1)",
            transform: `translateX(calc(-${cur} * (${slideW} + 16px)))`,
          }}>
            {cards.map((card) => (
              <div key={card.id} style={{ flex: `0 0 ${slideW}`, minWidth: 0 }}>
                <PropertyCard card={card} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "32px 0 0" }}>

          <button className="arr-btn" onClick={handlePrev} style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px solid ${RACING_GREEN}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <div key={i} onClick={() => handleDot(i)} style={{ width: 8, height: 8, borderRadius: "50%", cursor: "pointer", background: i === cur ? RACING_GREEN : "rgba(0,51,39,0.2)", transform: i === cur ? "scale(1.25)" : "scale(1)", transition: "background 0.25s, transform 0.25s" }} />
            ))}
          </div>

          <div style={{ width: 160, height: 2, background: "rgba(0,51,39,0.12)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", background: AQUA, borderRadius: 2, width: `${(cur / maxIdx) * 100}%`, transition: "width 0.55s linear" }} />
          </div>

          <button className="arr-btn" onClick={handleNext} style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px solid ${RACING_GREEN}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>

        {/* VIEW MORE OUTCOMES button — sits flush above the hero */}
        <div style={{ textAlign: "center", padding: "28px 0 0" }}>
          <button style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600, fontSize: 10,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: RACING_GREEN, border: `1.5px solid ${RACING_GREEN}`,
            padding: "13px 32px", borderRadius: 4,
            cursor: "pointer", background: "transparent",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = RACING_GREEN; e.currentTarget.style.color = AQUA; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RACING_GREEN; }}
          >
            View More Outcomes
          </button>
        </div>

        {/* Zero-height spacer so Saltbush background ends exactly here */}
        <div style={{ height: 40 }} />
      </div>

      {/* ── HERO BANNER — zero margin/padding, flush against carousel ── */}
      <HeroBanner />
    </>
  );
}