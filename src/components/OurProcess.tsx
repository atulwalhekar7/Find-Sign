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

const BG    = "rgb(255, 254, 253)";
const GREEN = "#003327";

export default function OurProcess() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ background: BG, width: "100%" }}>
      {/* ── 12-col grid container ── */}
      <section className="grid-container" style={{ paddingTop: "64px", paddingBottom: "80px" }}>

        {/* Header — spans all 12 cols */}
        <div className="grid-row">
          <div className="col-12" style={{ marginBottom: "48px" }}>
            <h2 style={s.title}>Our process</h2>
            <p style={s.subtitle}>
              A structured approach to finding, securing and signing the right property.
            </p>
          </div>
        </div>

        {/* Steps list — number col (2 cols) + content col (10 cols) */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.id}>
                <div className="grid-row" style={{ padding: "24px 0", alignItems: "start" }}>

                  {/* Number — 2 cols */}
                  <div className="col-2">
                    <span style={s.num}>{step.id}.</span>
                  </div>

                  {/* Content — 10 cols */}
                  <div className="col-10" style={{ paddingTop: "8px" }}>
                    <p style={s.itemTitle}>{step.title}</p>
                    <p style={s.itemDesc}>{step.description}</p>
                  </div>

                </div>

                {/* Divider */}
                {!isLast && (
                  <div className="grid-row">
                    <div className="col-12">
                      <div style={s.divider} />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer CTA */}
        <div className="grid-row" style={{ marginTop: "56px" }}>
          <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
            <button
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
        </div>

      </section>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {

  title: {
    fontFamily:         "GT Super Display Medium",
    fontSize:           "44px",
    fontStyle:          "normal",
    fontWeight:         500,
    color:              "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
    lineHeight:         "54px",
    letterSpacing:      "-0.88px",
    fontVariantNumeric: "lining-nums proportional-nums",
    marginBottom:       "12px",
  },

  subtitle: {
    fontFamily: "Sohne",
    fontSize:   "24px",
    fontStyle:  "normal",
    fontWeight: 300,
    color:      "#000",
    lineHeight: "36px",
    margin:     0,
  },

  num: {
    fontFamily:         "GT Super Display Medium",
    fontSize:           "168px",
    fontStyle:          "normal",
    fontWeight:         500,
    color:              "var(--FS-RACING-GREEN, #073B2F)",
    lineHeight:         "148px",
    letterSpacing:      "-5.04px",
    fontVariantNumeric: "lining-nums proportional-nums",
    display:            "block",
  },

  itemTitle: {
    fontFamily:         "GT Super Display Medium",
    fontSize:           "32px",
    fontStyle:          "normal",
    fontWeight:         500,
    color:              "#000",
    lineHeight:         "40px",
    letterSpacing:      "-0.64px",
    fontVariantNumeric: "lining-nums proportional-nums",
    margin:             "0 0 10px",
  },

  itemDesc: {
    fontFamily: "Sohne",
    fontSize:   "20px",
    fontStyle:  "normal",
    fontWeight: 400,
    color:      "var(--FS-System-Grey-1, #757575)",
    lineHeight: "28px",
    margin:     0,
  },

  divider: {
    width:      "100%",
    height:     "1px",
    background: "var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)",
  },

  btn: {
    display:        "flex",
    height:         "48px",
    padding:        "12px 16px",
    justifyContent: "center",
    alignItems:     "center",
    gap:            "10px",
    cursor:         "pointer",
    borderRadius:   "8px",
    border:         "1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC)",
    fontFamily:     "CX80",
    fontSize:       "15px",
    fontStyle:      "normal",
    fontWeight:     400,
    letterSpacing:  "4.8px",
    transition:     "background 0.2s, color 0.2s",
  },
};