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

const VISIBLE  = 3;
const INTERVAL = 3000;
const GAP      = 32;
const CARD_W   = 352;
const CARD_H   = 480; // ← increased from 440 to show all 4 rows

/* ── Property Card — 352 × auto ── */
function PropertyCard({ card }: { card: typeof cards[0] }) {
  return (
    <div style={{
      width:         "352px",
      height:        "auto",           // ← was minHeight: "440px" — now grows naturally
      background:    WHITE,
      border:        "1px solid rgba(0,51,39,0.10)",
      borderRadius:  "12px",           // ← added to match Figma rounded corners
      overflow:      "visible",
      position:      "relative",
      flexShrink:    0,
      display:       "flex",
      flexDirection: "column",
    }}>

      {/* Image area — overflow hidden only clips the image, not the circle */}
      <div style={{
        position:     "relative",
        width:        "100%",
        height:       "220px",
        background:   "#d9d9d9",
        overflow:     "hidden",
        flexShrink:   0,
        borderRadius: "12px 12px 0 0", // ← top corners rounded to match card
      }}>
        <img
          src={card.image}
          alt="Property"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Growth circle — card-level so never clipped by image overflow:hidden */}
      <div style={{
        position:       "absolute",
        top:            "165px",
        right:          "18px",
        width:          "110px",
        height:         "110px",
        borderRadius:   "50%",
        background:     AQUA,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        zIndex:         10,
      }}>
        <span style={{
          fontFamily: "'Söhne', 'DM Sans', sans-serif",
          fontSize:   "11px",
          fontWeight: 400,
          color:      RACING_GREEN,
          lineHeight: "14px",
          textAlign:  "center",
          display:    "block",
        }}>
          Growth
        </span>
        <span style={{
          fontFamily:         'GT Super Display Medium',
          fontSize:           "22px",
          fontWeight:         500,
          color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
          lineHeight:         "24px",
          letterSpacing:      "-0.44px",
          textAlign:          "center",
          fontVariantNumeric: "lining-nums proportional-nums",
        }}>
          {card.growth}
        </span>
      </div>

      {/* Data rows */}
      <div style={{
        padding:       "96px 18px 20px",
        display:       "flex",
        flexDirection: "column",
        flex:          1,
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
              borderBottom: i < arr.length - 1
  ? "1px dashed var(--Brand-Signature-FS-LIGHT-GOLD, #846F58)"
  : "none",
            }}
          >
            <span style={{
              fontFamily: "Sohne, 'DM Sans', sans-serif",
              fontSize: "13px",
               fontWeight: 400,   // ✅ FIXED
             color:" var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000))",
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: "'Söhne', 'DM Sans', sans-serif",
              fontSize:   "13px",
              fontWeight: 400,
              color: "var(--FS-System-Grey-1, #757575)",

            }}>
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

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

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .arr-btn { transition: background 0.2s, border-color 0.2s; }
        .arr-btn:hover { background: ${RACING_GREEN} !important; }
        .arr-btn:hover path { stroke: ${WHITE} !important; }
        .view-btn:hover { background: ${RACING_GREEN} !important; color: ${WHITE} !important; }
      `}</style>

      {/* ── OUTER CONTAINER ── */}
      <div style={{
        background: "var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9)",
        width:         "1512px",
        display:       "flex",
        flexDirection: "column",
        alignItems:    "flex-start",
        padding:       "64px 196px",
        gap:           "10px",
        boxSizing:     "border-box",
      }}>

        {/* ── INNER CONTENT ── */}
        <div style={{
          width:         "1120px",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "64px",
        }}>

          {/* Header row */}
          <div style={{
            width:          "100%",
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-start",
          }}>
            {/* Left: title + subtitle */}
            <div>
              <h2 style={{
                width:              "352px",
                height:             "56px",
                flexShrink:         0,
                color:              "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontFamily:         'GT Super Display Medium',
                fontSize:           "44px",
                fontStyle:          "normal",
                fontWeight:         500,
                lineHeight:         "54px",
                letterSpacing:      "-0.88px",
              }}>
                Client outcomes
              </h2>
              <p style={{
                width:      "733px",
                color:      "#000",
                fontFamily: "Sohne, 'DM Sans', sans-serif",
                fontSize:   "24px",
                fontStyle:  "normal",
                fontWeight: 300,
                lineHeight: "36px",
                marginTop:  "8px",
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
                  width:          "36px",
                  height:         "36px",
                  borderRadius:   "50%",
                  border:         `1.5px solid ${RACING_GREEN}`,
                  background:     "transparent",
                  cursor:         cur === 0 ? "default" : "pointer",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  opacity:        cur === 0 ? 0.35 : 1,
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
            style={{ overflow: "hidden", width: `${CARD_W * VISIBLE + GAP * (VISIBLE - 1)}px` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div style={{
              display:    "flex",
              gap:        `${GAP}px`,
              height:     `${CARD_H}px`,
              transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1)",
              transform:  `translateX(calc(-${cur} * (${CARD_W}px + ${GAP}px)))`,
            }}>
              {cards.map((card) => (
                <PropertyCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* VIEW MORE OUTCOMES */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              className="view-btn"
              style={{
                display:       "flex",
                height:        "48px",
                padding:       "12px 16px",
                justifyContent:"center",
                alignItems:    "center",
                gap:           "10px",
                borderRadius:  "8px",
                border:        "1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
                color:         "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
                fontFamily:    "CX80",
                fontSize:      "15px",
                fontStyle:     "normal",
                fontWeight:    700,
                lineHeight:    "15px",
                letterSpacing: "4.8px",
                alignSelf:     "center",
                margin:        "0 auto",
                background:    "White",
                cursor:        "pointer",
              }}
            >
              View More Outcomes
            </button>
          </div>

        </div>
      </div>
    </>
  );
}