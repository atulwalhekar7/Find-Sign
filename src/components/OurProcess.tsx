import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery call",
    description:
      "We define your brief, budget and timing, and establish a clear direction for where and how to buy.",
  },
  {
    id: 2,
    title: "Finding the property",
    description:
      "We identify and assess opportunities early, focusing only on properties that align with your brief and timing.",
  },
  {
    id: 3,
    title: "Inspections and due diligence",
    description:
      "Each property is inspected and assessed in detail to identify risks and long-term suitability.",
  },
  {
    id: 4,
    title: "Assessment and evaluation",
    description:
      "We determine fair value based on current market conditions, so decisions are informed and considered.",
  },
  {
    id: 5,
    title: "Negotiation and bidding",
    description:
      "We represent you through negotiation or auction, managing price and terms with a clear strategy.",
  },
  {
    id: 6,
    title: "Secure, settle and sign",
    description:
      "Once secured, we guide the process through to settlement and connect you with trusted partners where required.",
  },
];

/* ── Design tokens from Figma ── */
const BG    = "rgb(255, 254, 253)";
const GREEN = "#003327";

/*
  12-COLUMN GRID SYSTEM
  ─────────────────────
  Desktop  (≥1200px): 12 cols, gutter 64px, margin 196px  → matches Figma exactly
  Tablet   (768–1199px): 12 cols, gutter 32px, margin 48px
  Mobile   (≤767px):  4 cols,  gutter 16px, margin 20px
*/
const gridCSS = `
  .op-section {
    background: ${BG};
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    box-sizing: border-box;

    /* 12-col grid */
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 64px;
    padding: 64px 196px 80px;
  }

  /* Header spans all 12 cols */
  .op-head {
    grid-column: 1 / -1;
    margin-bottom: 48px;
  }

  /* Steps list spans all 12 cols */
  .op-list {
    grid-column: 1 / -1;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Each row: number in 2 cols, content in 10 cols (of the 12-col track) */
  .op-row {
    display: grid;
    grid-template-columns: 2fr 10fr;
    column-gap: 32px;
    align-items: start;
    padding: 24px 0;
  }

  .op-divider {
    width: 100%;
    height: 1px;
    background: var(--Brand-Foundation-FS-RACING-GREEN, #073B2F);
  }

  /* Footer spans all 12 cols */
  .op-footer {
    grid-column: 1 / -1;
    margin-top: 56px;
    display: flex;
    justify-content: center;
  }

  /* ── TABLET (768px – 1199px) ── */
  @media (max-width: 1199px) {
    .op-section {
      column-gap: 32px;
      padding: 48px 48px 64px;
    }

    .op-row {
      grid-template-columns: 1.5fr 10.5fr;
      column-gap: 24px;
    }

    .op-num {
      font-size: 120px !important;
      line-height: 108px !important;
      height: auto !important;
      width: auto !important;
      letter-spacing: -3.6px !important;
    }

    .op-title-text {
      font-size: 36px !important;
    }

    .op-subtitle-text {
      width: auto !important;
      height: auto !important;
      font-size: 20px !important;
    }

    .op-item-title {
      font-size: 26px !important;
    }

    .op-item-desc {
      font-size: 18px !important;
    }
  }

  /* ── MOBILE (≤767px) ── */
  @media (max-width: 767px) {
    .op-section {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      padding: 40px 20px 56px;
    }

    .op-head {
      margin-bottom: 32px;
    }

    /* Stack number above content on mobile */
    .op-row {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 8px;
      padding: 20px 0;
    }

    .op-num {
      font-size: 80px !important;
      line-height: 72px !important;
      height: auto !important;
      width: auto !important;
      letter-spacing: -2.4px !important;
    }

    .op-title-text {
      font-size: 28px !important;
      line-height: 38px !important;
      height: auto !important;
      width: auto !important;
    }

    .op-subtitle-text {
      font-size: 16px !important;
      line-height: 26px !important;
      width: auto !important;
      height: auto !important;
    }

    .op-item-title {
      font-size: 22px !important;
      line-height: 30px !important;
    }

    .op-item-desc {
      font-size: 16px !important;
      line-height: 24px !important;
    }

    .op-btn {
      width: 100%;
      letter-spacing: 3px !important;
    }
  }
`;

export default function OurProcess() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ background: BG, width: "100%" }}>
      {/* Inject responsive CSS */}
      <style>{gridCSS}</style>

      <section className="op-section">

        {/* ── Header ── */}
        <div className="op-head">
          <h2
            className="op-title-text"
            style={s.title}
          >
            Our process
          </h2>
          <p
            className="op-subtitle-text"
            style={s.subtitle}
          >
            A structured approach to finding, securing and signing the right property.
          </p>
        </div>

        {/* ── Steps list ── */}
        <ul className="op-list">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.id}>
                <div className="op-row">

                  {/* Number col */}
                  <div style={s.numCol}>
                    <span className="op-num" style={s.num}>{step.id}.</span>
                  </div>

                  {/* Content col */}
                  <div style={s.content}>
                    <p className="op-item-title" style={s.itemTitle}>{step.title}</p>
                    <p className="op-item-desc" style={s.itemDesc}>{step.description}</p>
                  </div>

                </div>

                {!isLast && <div className="op-divider" />}
              </li>
            );
          })}
        </ul>

        {/* ── Footer CTA ── */}
        <div className="op-footer">
          <button
            className="op-btn"
            style={{
              ...s.btn,
              background: btnHovered ? GREEN     : "transparent",
              color:      btnHovered ? "#ffffff" : GREEN,
            }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            HOW IT WORKS
          </button>
        </div>

      </section>
    </div>
  );
}

/* All original styles preserved — only fixed values that need to flex are
   overridden via the CSS classes above at each breakpoint. */
const s: Record<string, React.CSSProperties> = {

  title: {
    fontFamily: "GT Super Display Medium",
    fontSize: "44px",
    fontStyle: "normal",
    fontWeight: 500,
    color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
    lineHeight: "54px",
    letterSpacing: "-0.88px",
    fontVariantNumeric: "lining-nums proportional-nums",
    marginBottom: "12px",
    height: "54px",
    width: "1120px",
    maxWidth: "100%",   // ← lets it shrink inside its grid cell
  },

  subtitle: {
    fontFamily: "Sohne",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 300,
    color: "#000",
    lineHeight: "36px",
    margin: 0,
    maxWidth: "100%",   // ← responsive override
    height: "36px",
    width: "804px",
  },

  numCol: {
    flexShrink: 0,
  },

  num: {
    fontFamily: "GT Super Display Medium",
    fontSize: "168px",
    fontStyle: "normal",
    fontWeight: 500,
    color: "var(--FS-RACING-GREEN, #073B2F)",
    lineHeight: "148px",
    letterSpacing: "-5.04px",
    fontVariantNumeric: "lining-nums proportional-nums",
    display: "block",
    height: "148px",
    width: "145px",
  },

  content: {
    paddingTop: "8px",
  },

  itemTitle: {
    fontFamily: "GT Super Display Medium",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    color: "#000",
    lineHeight: "40px",
    letterSpacing: "-0.64px",
    fontVariantNumeric: "lining-nums proportional-nums",
    margin: "0 0 10px",
  },

  itemDesc: {
    fontFamily: "Sohne",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    color: "var(--FS-System-Grey-1, #757575)",
    lineHeight: "28px",
    margin: 0,
  },

  btn: {
    display: "flex",
    height: "48px",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
    fontFamily: "CX80",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "4.8px",
    background: "#fff",
    color: "var(--FS-RACING-GREEN, #073B2F)",
  },
};