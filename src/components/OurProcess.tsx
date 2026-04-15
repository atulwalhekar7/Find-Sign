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
const BG    = "rgb(255, 254, 253)";   /* updated background */
const GREEN = "#003327";



export default function OurProcess() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ background: BG, width: "100%" }}>
      <section style={s.section}>

        {/* ── Header ── */}
        <div style={s.head}>
          {/* GT Super Medium heading */}
          <h2 style={s.title}>Our process</h2>
          {/* Söhne Leicht subtitle — 1120 Fill × 54 Hug */}
          <p style={s.subtitle}>
            A structured approach to finding, securing and signing the right property.
          </p>
        </div>

        {/* ── Steps list ── */}
        <ul style={s.list}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.id}>
                <div style={s.row}>

                  {/* Number col — W:145 H:Hug, GT Super Display */}
                  <div style={s.numCol}>
                    <span style={s.num}>{step.id}.</span>
                  </div>

                  {/* Content col — W:733, gap:32 */}
                  <div style={s.content}>
                    {/* GT Super Medium */}
                    <p style={s.itemTitle}>{step.title}</p>
                    {/* Söhne Leicht */}
                    <p style={s.itemDesc}>{step.description}</p>
                  </div>

                </div>

                {/* Divider */}
                {!isLast && <div style={s.divider} />}
              </li>
            );
          })}
        </ul>

        {/* ── Footer CTA — WE SIGNED IT label ── */}
        <div style={s.footer}>
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

      </section>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {

  /* Full-width section, max 1512px, centered */
  section: {
    background: BG,
    width:      "100%",
    maxWidth:   "1512px",
    margin:     "0 auto",
    padding:    "64px 196px 80px",
    boxSizing:  "border-box",
  },

  head: {
    marginBottom: "48px",
    maxWidth:     "1120px",
  },

  title: {
  fontFamily: 'GT Super Display Medium',   // ✅ FIXED
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 500,         // ✅ Medium
  color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
  lineHeight: "54px",
  letterSpacing: "-0.88px",
  fontVariantNumeric: "lining-nums proportional-nums",

  marginBottom: "12px",
  height: "54px",
  width: "1120px",
},
  subtitle: {
  fontFamily: "Sohne",   // ✅ FIXED (must match @font-face)
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 300,
  color: "#000",
  lineHeight: "36px",

  margin: 0,
  maxWidth: "1120px",
  height: "36px",
  width: "804px",
},

  list: {
    listStyle: "none",
    padding:   0,
    margin:    0,
  },

  /* Row — number W:145 + content W:733, gap:32 */
  row: {
    display:             "grid",
    gridTemplateColumns: "145px 1fr",
    columnGap:           "32px",
    alignItems:          "start",
    padding:             "24px 0",
  },

  /* Number column — W:145, H:Hug */
  numCol: {
    width:      "145px",
    flexShrink: 0,
  },

  /* GT Super Display — large numbers */
 num: {
  fontFamily: "GT Super Display Medium",
  fontSize: "168px",
  fontStyle: "normal",
  fontWeight: 500, // match the @font-face
  color: "var(--FS-RACING-GREEN, #073B2F)",
  lineHeight: "148px",
  letterSpacing: "-5.04px",
  fontVariantNumeric: "lining-nums proportional-nums",

  display: "block",
  height: "148px",
  width: "145px",
},

  /* Content — W:733 */
  content: {
    maxWidth:   "733px",
    paddingTop: "8px",
  },

  /* GT Super Medium — step title */
  itemTitle: {
  fontFamily: 'GT Super Display Medium',   // ✅ FIXED
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,         // ✅ Medium
  color: "#000",
  lineHeight: "40px",
  letterSpacing: "-0.64px",
  fontVariantNumeric: "lining-nums proportional-nums",

  margin: "0 0 10px",
},

  /* Söhne Leicht — step description */
  itemDesc: {
  fontFamily: "Sohne",   // ✅ FIXED (no ö)
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "var(--FS-System-Grey-1, #757575)",
  lineHeight: "28px",
  margin: 0,
},

  /* Thin divider between steps */
  divider: {
  width: "1120px",
  height: "1px",
  background: "var(--Brand-Foundation-FS-RACING-GREEN, #073B2F)",
},

  footer: {
    marginTop:      "56px",
    display:        "flex",
    justifyContent: "center",
  },

  /* WE SIGNED IT — label style button */
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

  /* ✅ FONT ADDED */
  fontFamily: "CX80",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 400,   // change to 700 if you want bold
  letterSpacing: "4.8px",

  background: "#fff",
  color: "var(--FS-RACING-GREEN, #073B2F)",
},
};