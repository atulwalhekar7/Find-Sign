import { useState } from "react";

// ── Exact brand palette from colour swatch ────────────────────────────────────
const C = {
  flatbush:    "#F4F4F1",
  aqua:        "#00E1BC",
  racingGreen: "#003327",
  racingMid:   "#00261d",
  lightGold:   "#A48738",
  burntGold:   "#6B4D3D",
  white:       "#FFFFFF",
  textOnDark:  "rgba(240,252,248,0.85)",
  textMuted:   "rgba(0,227,188,0.4)",
};

// ── Types ─────────────────────────────────────────────────────────────────────
interface Outcome {
  id: number;
  image: string;
  price: string;
  rent: string;
  yieldPct: string;
  sqm: string;
  why: string;
  where: string;
  what: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const outcomes: Outcome[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=85",
    price: "$553,000",
    rent: "$600pw",
    yieldPct: "5.6%",
    sqm: "556m²",
    why: "A NSW based investor wanting to expand her property portfolio by diversifying in WA",
    where:
      "A highly sought after newer estate with large infrastructure nearby, surrounded by wineries and restaurants. Minimal new supply coming anytime soon!",
    what: "A modern, 3×2 home in incredible condition with an awesome tenant already in place!",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=85",
    price: "$539,000",
    rent: "$585pw",
    yieldPct: "5.6%",
    sqm: "250m²",
    why: "A NSW based couple looking to grow their property portfolio and diversify in WA.",
    where:
      "Beautifully positioned across from a park in a popular newer estate which will even have its own train station in 2024!",
    what: "A 3 bedroom, 2 bathroom home with potential to convert to 4th bedroom. Low maintenance gardens, perfectly kept for a rental property.",
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────
const OutcomeCard = ({ o, delay }: { o: Outcome; delay: number }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:             "grid",
        gridTemplateColumns: "1.05fr 1fr",
        borderRadius:        16,
        overflow:            "hidden",
        border:              `1.5px solid rgba(0,225,188,0.15)`,
        boxShadow:           hov
          ? "0 28px 64px rgba(0,51,39,0.38)"
          : "0 10px 36px rgba(0,51,39,0.18)",
        transform:  hov ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
        animation:  `fadeUp 0.6s ${delay}ms ease both`,
      }}
    >
      {/* ══════════════════════════════════════
          LEFT — full bleed photo + overlay bar
      ══════════════════════════════════════ */}
      <div style={{
        position:   "relative",
        background: C.racingGreen,
        overflow:   "hidden",
        minHeight:  360,
      }}>
        {/* Full bleed photo */}
        <img
          src={o.image}
          alt="Property"
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            display:    "block",
            position:   "absolute",
            inset:      0,
            transform:  hov ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.65s ease",
          }}
        />

        {/* Gradient — fades bottom for metrics */}
        <div style={{
          position:      "absolute",
          inset:         0,
          background:    `linear-gradient(to bottom,
            rgba(0,51,39,0.15) 0%,
            rgba(0,51,39,0.0) 38%,
            rgba(0,51,39,0.88) 100%)`,
          pointerEvents: "none",
          zIndex:        1,
        }}/>

        {/* WE BOUGHT IT badge */}
        <div style={{
          position:      "absolute",
          top:           18,
          left:          18,
          zIndex:        4,
          display:       "flex",
          alignItems:    "center",
          gap:           8,
          background:    C.white,
          borderRadius:  8,
          padding:       "7px 13px 7px 10px",
          fontFamily:    "'Syne', sans-serif",
          fontWeight:    800,
          fontSize:      12,
          letterSpacing: "0.07em",
          color:         C.racingGreen,
          boxShadow:     "0 2px 12px rgba(0,51,39,0.25)",
        }}>
          <span style={{
            width:        8,
            height:       8,
            borderRadius: "50%",
            background:   C.aqua,
            display:      "inline-block",
            flexShrink:   0,
          }}/>
          WE BOUGHT IT
        </div>

        {/* Metrics overlay bar — bottom of photo */}
        <div style={{
          position:      "absolute",
          bottom:        0,
          left:          0,
          right:         0,
          background:    "rgba(0,38,29,0.92)",
          padding:       "16px 18px 18px",
          zIndex:        3,
          display:       "flex",
          flexDirection: "column",
          gap:           10,
        }}>
          {/* Row 1: Price · Rent · Yield */}
          <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
            {[
              { label: "Price", val: o.price,    color: C.white },
              { label: "Rent",  val: o.rent,     color: C.white },
              { label: "Yield", val: o.yieldPct, color: C.aqua  },
            ].map(({ label, val, color }) => (
              <div key={label}>
                <div style={{
                  fontSize:      9,
                  fontWeight:    700,
                  letterSpacing: "0.15em",
                  color:         C.textMuted,
                  fontFamily:    "'Syne', sans-serif",
                  marginBottom:  3,
                  textTransform: "uppercase" as const,
                }}>{label}</div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize:   18,
                  color,
                  lineHeight: 1,
                }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "0.5px", background: "rgba(0,225,188,0.18)" }}/>

          {/* Row 2: Size */}
          <div>
            <div style={{
              fontSize:      9,
              fontWeight:    700,
              letterSpacing: "0.15em",
              color:         C.textMuted,
              fontFamily:    "'Syne', sans-serif",
              marginBottom:  3,
              textTransform: "uppercase" as const,
            }}>Size</div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize:   15,
              color:      C.white,
              lineHeight: 1,
            }}>{o.sqm}</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          RIGHT — Racing Green panel, story text
      ══════════════════════════════════════ */}
      <div style={{
        background:    C.racingGreen,
        padding:       "32px 26px 30px",
        display:       "flex",
        flexDirection: "column",
        gap:           20,
        borderLeft:    `1px solid rgba(0,225,188,0.1)`,
      }}>
        {/* INVESTOR STORY label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width:        28,
            height:       4,
            borderRadius: 2,
            background:   C.aqua,
            flexShrink:   0,
          }}/>
          <span style={{
            fontFamily:    "'Syne', sans-serif",
            fontWeight:    800,
            fontSize:      10,
            letterSpacing: "0.18em",
            color:         C.textMuted,
            textTransform: "uppercase" as const,
          }}>Investor Story</span>
        </div>

        {/* Why / Where / What */}
        {[
          { label: "Why",   text: o.why   },
          { label: "Where", text: o.where },
          { label: "What",  text: o.what  },
        ].map(({ label, text }, i) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize:   14,
              color:      C.aqua,
            }}>{label}</span>
            <p style={{
              margin:     0,
              fontFamily: "'DM Sans', sans-serif",
              fontSize:   13.5,
              lineHeight: 1.78,
              color:      C.textOnDark,
              fontWeight: 400,
            }}>{text}</p>
            {i < 2 && (
              <div style={{
                height:     1,
                background: "rgba(0,225,188,0.1)",
                marginTop:  4,
              }}/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ClientOutcomes() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }
        @media (max-width: 960px) {
          .outcomes-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{
        minHeight:  "100vh",
        background: C.flatbush,
        padding:    "80px 40px 96px",
      }}>

        {/* ── HEADING — matching screenshot exactly ── */}
        <div style={{
          textAlign:    "center",
          marginBottom: 64,
          animation:    "fadeUp 0.6s ease both",
        }}>

          {/* Eyebrow: ── CLIENT OUTCOMES ── */}
          <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            14,
            marginBottom:   22,
          }}>
            {/* Left line */}
            <div style={{
              width:        48,
              height:       1.5,
              background:   C.lightGold,
              borderRadius: 1,
            }}/>
            <span style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontWeight:    600,
              fontSize:      11,
              letterSpacing: "0.22em",
              color:         C.lightGold,
              textTransform: "uppercase" as const,
            }}>
              Client Outcomes
            </span>
            {/* Right line */}
            <div style={{
              width:        48,
              height:       1.5,
              background:   C.lightGold,
              borderRadius: 1,
            }}/>
          </div>

          {/* Main heading — Playfair Display bold + italic Say */}
          <h1 style={{
            fontFamily:    "'Playfair Display', Georgia, serif",
            fontWeight:    800,
            fontSize:      "clamp(36px, 5vw, 62px)",
            color:         C.racingGreen,
            lineHeight:    1.08,
            letterSpacing: "-0.01em",
            margin:        0,
          }}>
            What Our Clients{" "}
            <em style={{
              fontStyle:  "italic",
              fontWeight: 700,
              color:      C.racingGreen,
              /* matches the screenshot — same dark green, just italic */
            }}>
              Say
            </em>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize:   16,
            color:      C.burntGold,
            lineHeight: 1.65,
            maxWidth:   460,
            margin:     "18px auto 0",
            opacity:    0.9,
          }}>
            Real experiences from real buyers — across Perth and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="outcomes-grid" style={{ maxWidth: 1180, margin: "0 auto" }}>
          {outcomes.map((o, i) => (
            <OutcomeCard key={o.id} o={o} delay={i * 150} />
          ))}
        </div>
      </div>
    </>
  );
}