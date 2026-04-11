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

  /* GT Super Medium — H2 heading */
  title: {
    fontFamily:     "H2-GT Super",
    fontSize:      "clamp(28px, 3vw, 40px)",
    fontWeight:    500,
    color:         GREEN,
    marginBottom:  "12px",
    letterSpacing: "-0.02em",
    lineHeight:    1.1,
    height: "54px",
    width: "1120px",
  },

  /* Söhne Leicht — 1120 Fill × 54 Hug */
  subtitle: {
    fontFamily: "B1-Söhne Leicht",
    fontSize:   "16px",
    fontWeight: 300,
    color:      "#555",
    lineHeight: 1.7,
    margin:     0,
    maxWidth:   "1120px",
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
    fontFamily: "GT Super Display",
    fontSize:   "clamp(72px, 8vw, 100px)",
    fontWeight: 400,              /* Display weight is 400 in GT Super Display */
    color:      GREEN,
    lineHeight: 1,
    display:    "block",
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
    fontFamily:    "H3-GT Super Medium",
    fontSize:      "clamp(16px, 1.5vw, 20px)",
    fontWeight:    500,
    color:         GREEN,
    letterSpacing: "-0.01em",
    lineHeight:    1.2,
    margin:        "0 0 10px",
  },

  /* Söhne Leicht — step description */
  itemDesc: {
    fontFamily: "B2-Söhne Buch",
    fontSize:   "14px",
    fontWeight: 300,
    color:      "#555",
    lineHeight: 1.75,
    margin:     0,
  },

  /* Thin divider between steps */
  divider: {
    width:      "100%",
    height:     "1px",
    background: `${GREEN}22`,
    margin:     0,
  },

  footer: {
    marginTop:      "56px",
    display:        "flex",
    justifyContent: "center",
  },

  /* WE SIGNED IT — label style button */
  btn: {
    fontFamily:    "L2-WE SIGNED IT",
    fontSize:      "11px",
    fontWeight:    400,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    border:        `1px solid ${GREEN}`,
    padding:       "13px 32px",
    cursor:        "pointer",
    borderRadius:  "2px",
    transition:    "background 0.2s ease, color 0.2s ease",
  },
};