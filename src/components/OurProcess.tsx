import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

/* ================= DATA ================= */
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

/* ================= COLORS ================= */
const BG = "rgb(255, 254, 253)";
const GREEN = "#073B2F";

export default function OurProcess() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ background: BG, width: "100%" }}>
      <section style={s.section}>

        {/* ================= HEADER ================= */}
        <div style={s.container}>
          <div style={s.head}>
            <h2 style={s.title}>Our process</h2>
            <p style={s.subtitle}>
              A structured approach to finding, securing and signing the right property.
            </p>
          </div>
        </div>

        {/* ================= STEPS ================= */}
        <div style={s.container}>
          <ul style={s.list}>
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;

              return (
                <li key={step.id} style={s.item}>
                  <div style={s.row}>

                    {/* NUMBER */}
                    <div style={s.numCol}>
                      <span style={s.num}>{step.id}.</span>
                    </div>

                    {/* CONTENT */}
                    <div style={s.content}>
                      <p style={s.itemTitle}>{step.title}</p>
                      <p style={s.itemDesc}>{step.description}</p>
                    </div>

                  </div>

                  {!isLast && <div style={s.divider} />}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div style={s.container}>
          <div style={s.footer}>
            <button
              style={{
                ...s.btn,
                background: btnHovered ? GREEN : "transparent",
                color: btnHovered ? "#ffffff" : GREEN,
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

/* ================= STYLES ================= */
const s: Record<string, React.CSSProperties> = {

  /* Section */
  section: {
    background: BG,
    width: "100%",
    padding: "64px 0 80px",
  },

  /* 12-grid container */
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 24px",
  },

  /* Header */
  head: {
    marginBottom: "48px",
  },

  title: {
    fontFamily: "GT Super Display Medium",
    fontSize: "44px",
    fontWeight: 500,
    lineHeight: "54px",
    letterSpacing: "-0.88px",
    color: GREEN,
    marginBottom: "12px",
  },

  subtitle: {
    fontFamily: "Sohne",
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "36px",
    color: "#000",
    maxWidth: "804px",
    margin: 0,
  },

  /* List */
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  item: {
    width: "100%",
  },

  /* STEP ROW (grid structure preserved) */
  row: {
    display: "grid",
    gridTemplateColumns: "145px 1fr",
    columnGap: "32px",
    alignItems: "start",
    padding: "24px 0",
  },

  /* NUMBER */
  numCol: {
    width: "145px",
  },

  num: {
    fontFamily: "GT Super Display Medium",
    fontSize: "168px",
    fontWeight: 500,
    lineHeight: "148px",
    letterSpacing: "-5.04px",
    color: GREEN,
    display: "block",
  },

  /* CONTENT */
  content: {
    maxWidth: "733px",
    paddingTop: "8px",
  },

  itemTitle: {
    fontFamily: "GT Super Display Medium",
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "-0.64px",
    margin: "0 0 10px",
    color: "#000",
  },

  itemDesc: {
    fontFamily: "Sohne",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
    color: "#757575",
    margin: 0,
  },

  /* Divider */
  divider: {
    width: "100%",
    height: "1px",
    background: "#073B2F",
  },

  /* CTA */
  footer: {
    marginTop: "56px",
    display: "flex",
    justifyContent: "center",
  },

  btn: {
    display: "flex",
    height: "48px",
    padding: "12px 16px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    border: "1px solid #69E4DC",
    fontFamily: "CX80",
    fontSize: "15px",
    letterSpacing: "4.8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};