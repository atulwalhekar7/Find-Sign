import { useState, useEffect, useRef } from "react";
import HERO_SRC from "../assets/DSC06268.jpg";

/*
  Fonts (Figma type sheet):
  - "Client outcomes" heading  → GT Super Medium
  - Subtitle                   → Söhne Leicht
  - Card labels/values         → Söhne Buch
  - Button                     → WE SIGNED IT
  - Growth circle text         → GT Super Display
*/

const AQUA         = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE        = "#FFFFFF";
const BG           = "#FFFFFF";   /* Section background: white */

const FONTS = {
  display: "'GT Super Display', 'GT Super', 'Cormorant Garamond', Georgia, serif",
  heading: "'GT Super', 'Cormorant Garamond', Georgia, serif",
  body:    "'Söhne', 'DM Sans', sans-serif",
  label:   "'WE SIGNED IT', 'DM Sans', sans-serif",
} as const;

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "38.2%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "31.5%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "44.1%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "27.8%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "52.3%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "35.6%",
    purchasePrice: "XXX",
    currentValue:  "XXX",
    timeframe:     "XXX",
    rentalYield:   "XXX",
  },
];

const VISIBLE  = 3;
const INTERVAL = 3000;

/* ── Property Card — 352 × 440 ── */
function PropertyCard({ card }: { card: typeof cards[0] }) {
  return (
    <div style={{
      width:        "352px",
      minHeight:    "440px",
      background:   WHITE,
      border:       "1px solid rgba(0,51,39,0.10)",
      overflow:     "visible",           /* allow growth circle to overflow */
      position:     "relative",
      flexShrink:   0,
      display:      "flex",
      flexDirection:"column",
    }}>

      {/* Image area — top portion of card */}
      <div style={{
        position:   "relative",
        width:      "100%",
        height:     "220px",
        background: "#d9d9d9",           /* checkerboard placeholder colour */
        overflow:   "hidden",
        flexShrink: 0,
      }}>
        <img
          src={card.image}
          alt="Property"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Growth circle — overlaps bottom of image into card body */}
        <div style={{
          position:        "absolute",
          bottom:          "-44px",
          right:           "18px",
          width:           "90px",
          height:          "90px",
          borderRadius:    "50%",
          background:      AQUA,
          display:         "flex",
          flexDirection:   "column",
          alignItems:      "center",
          justifyContent:  "center",
          zIndex:          10,
        }}>
          <span style={{
            fontFamily:    FONTS.body,
            fontSize:      "9px",
            fontWeight:    400,
            color:         RACING_GREEN,
            letterSpacing: "0.04em",
            marginBottom:  "2px",
          }}>
            Growth
          </span>
          <span style={{
            fontFamily: FONTS.display,
            fontSize:   "20px",
            fontWeight: 400,
            color:      RACING_GREEN,
            lineHeight: 1,
          }}>
            {card.growth}
          </span>
        </div>
      </div>

      {/* Data rows — Söhne Buch */}
      <div style={{
        padding:        "56px 18px 20px",   /* 56px top = space for growth circle overflow */
        display:        "flex",
        flexDirection:  "column",
        flex:           1,
      }}>
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value",  val: card.currentValue  },
          { label: "Timeframe",      val: card.timeframe      },
          { label: "Rental yield",   val: card.rentalYield    },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            style={{
              display:        "flex",
              justifyContent: "space-between",
              alignItems:     "center",
              padding:        "9px 0",
              borderBottom:   i < arr.length - 1
                ? "1px dashed rgba(0,51,39,0.15)"
                : "none",
            }}
          >
            <span style={{
              fontFamily: FONTS.body,
              fontSize:   "13px",
              fontWeight: 300,           /* Söhne Leicht */
              color:      "#444",
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: FONTS.body,
              fontSize:   "13px",
              fontWeight: 400,           /* Söhne Buch */
              color:      RACING_GREEN,
            }}>
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Hero Banner ── */
// function HeroBanner() {
//   return (
//     <div style={{
//       position:   "relative",
//       width:      "100%",
//       height:     "698px",
//       overflow:   "hidden",
//       background: RACING_GREEN,
//       lineHeight: 0,
//     }}>
//       <img
//         src={HERO_SRC}
//         alt="The right property, secured before the wider market"
//         style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
//       />
//       <div style={{ position: "absolute", inset: 0, background: "rgba(0,20,14,0.40)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
//         <h2 style={{
//           fontFamily:    FONTS.heading,
//           fontWeight:    500,
//           fontStyle:     "italic",
//           fontSize:      "clamp(22px, 3.2vw, 46px)",
//           color:         WHITE,
//           textAlign:     "center",
//           lineHeight:    1.28,
//           letterSpacing: "0.01em",
//           maxWidth:      "680px",
//           margin:        0,
//         }}>
//           The right property, secured before the wider market
//         </h2>
//       </div>
//     </div>
//   );
// }

/* ── Main Export ── */
export default function ClientOutcomes() {
  const [cur, setCur]       = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef            = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxIdx              = cards.length - VISIBLE;

  const goto = (idx: number) => setCur(Math.max(0, Math.min(idx, maxIdx)));

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIdx]);

  const handlePrev = () => { goto(cur - 1); resetTimer(); };
  const handleNext = () => { goto(cur + 1); resetTimer(); };

  /* card width: (1120px - 2 gaps of 24px) / 3 ≈ 352px — matches Figma */
  const GAP      = 24;
  const CARD_W   = 352;
  const TRACK_W  = CARD_W * VISIBLE + GAP * (VISIBLE - 1);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .arr-btn { transition: background 0.2s, border-color 0.2s; }
        .arr-btn:hover { background: ${RACING_GREEN} !important; }
        .arr-btn:hover path { stroke: ${WHITE} !important; }
        .view-btn:hover { background: ${RACING_GREEN} !important; color: ${WHITE} !important; }
      `}</style>

      {/* ── CAROUSEL SECTION — 1512 × 860 ── */}
      <div style={{
        background: BG,
        width:      "100%",
        maxWidth:   "1512px",
        margin:     "0 auto",
        padding:    "60px 196px 60px",   /* side padding centres 1120px content */
        boxSizing:  "border-box",
      }}>

        {/* Header row — 1120 × 116 */}
        <div style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-start",
          maxWidth:       "1120px",
          margin:         "0 auto 40px",
        }}>
          {/* Left: title + subtitle */}
          <div>
            {/* GT Super Medium — H1 */}
            <h2 style={{
              fontFamily:    "H2-GT Super",
              fontSize:      "clamp(28px, 3vw, 44px)",
              fontWeight:    500,
              color:         RACING_GREEN,
              letterSpacing: "-0.02em",
              lineHeight:    1.05,
              marginBottom:  "10px",
            }}>
              Client outcomes
            </h2>
            {/* Söhne Leicht — subtitle */}
            <p style={{
              fontFamily: "B1-Söhne Leicht",
              fontSize:   "15px",
              fontWeight: 300,
              color:      "#555",
              lineHeight: 1.6,
            }}>
              Growth achieved through early access and informed decisions.
            </p>
          </div>

          {/* Right: prev / next arrows */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "6px" }}>
            <button
              className="arr-btn"
              onClick={handlePrev}
              disabled={cur === 0}
              style={{
                width:        "36px",
                height:       "36px",
                borderRadius: "50%",
                border:       `1.5px solid ${RACING_GREEN}`,
                background:   "transparent",
                cursor:       cur === 0 ? "default" : "pointer",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                opacity:      cur === 0 ? 0.35 : 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="arr-btn"
              onClick={handleNext}
              disabled={cur === maxIdx}
              style={{
                width:          "36px",
                height:         "36px",
                borderRadius:   "50%",
                border:         `1.5px solid ${RACING_GREEN}`,
                background:     "transparent",
                cursor:         cur === maxIdx ? "default" : "pointer",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                opacity:        cur === maxIdx ? 0.35 : 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div
          style={{ overflow: "hidden", maxWidth: `${TRACK_W}px`, margin: "0 auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{
            display:    "flex",
            gap:        `${GAP}px`,
            transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1)",
            transform:  `translateX(calc(-${cur} * (${CARD_W}px + ${GAP}px)))`,
          }}>
            {cards.map((card) => (
              <PropertyCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* VIEW MORE OUTCOMES — WE SIGNED IT label */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            className="view-btn"
            style={{
              fontFamily:    FONTS.label,
              fontSize:      "10px",
              fontWeight:    400,
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color:         RACING_GREEN,
              border:        `1px solid ${RACING_GREEN}`,
              padding:       "13px 32px",
              borderRadius:  "2px",
              cursor:        "pointer",
              background:    "transparent",
              transition:    "background 0.2s, color 0.2s",
            }}
          >
            View More Outcomes
          </button>
        </div>

      </div>

      {/* ── HERO BANNER — flush below carousel ── */}
      {/* <HeroBanner /> */}
    </>
  );
}