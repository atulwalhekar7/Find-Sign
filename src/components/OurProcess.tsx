import { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your goals, preferences, and budget — so we can align our search with exactly what you're looking for.",
  },
  {
    id: 2,
    title: "We Find It",
    description:
      "Using our extensive network and market expertise, we curate properties that match your criteria — including off-market opportunities you won't find anywhere else.",
  },
  {
    id: 3,
    title: "We Inspect the Property",
    description:
      "Our team conducts thorough due diligence — assessing condition, value, and potential so you can make a confident, informed decision.",
  },
  {
    id: 4,
    title: "You Sign It",
    description:
      "We guide you seamlessly through signing — handling negotiations, paperwork, and coordination so everything goes smoothly to completion.",
  },
];

const GREEN = "#1F5D37";
const GOLD = "#8B6D38";

export default function OurProcess() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section style={s.section}>
      <div style={s.container}>

        {/* Header */}
        <div style={s.header}>
          <p style={s.eyebrow}>How it works</p>
          <h2 style={s.title}>Our Process</h2>
          <p style={s.subtitle}>
            A seamless journey from first conversation to final signature.
          </p>
        </div>

        {/* Accordion list */}
        <div style={s.list}>
          {steps.map((step) => {
            const isOpen = openId === step.id;
            return (
              <div
                key={step.id}
                style={{
                  ...s.item,
                  border: isOpen
                    ? `1px solid ${GREEN}`
                    : "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {/* Row */}
                <div
                  style={s.row}
                  onClick={() => toggle(step.id)}
                  role="button"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && toggle(step.id)
                  }
                >
                  {/* Number bubble */}
                  <div
                    style={{
                      ...s.bubble,
                      backgroundColor: isOpen ? GREEN : "#f0efeb",
                      color: isOpen ? "#ffffff" : "#888",
                      transition: "background-color 0.25s ease, color 0.25s ease",
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Title */}
                  <span
                    style={{
                      ...s.stepTitle,
                      color: isOpen ? "#1a1a1a" : "#444",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {step.title}
                  </span>

                  {/* Chevron */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke={isOpen ? GREEN : "#999"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Body */}
                <div
                  style={{
                    ...s.body,
                    maxHeight: isOpen ? "160px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "18px" : "0px",
                    transition:
                      "max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease",
                  }}
                >
                  <div style={s.divider} />
                  <p style={s.bodyText}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    backgroundColor: "#ffffff",
    borderTop: "1px solid rgba(31,93,55,0.1)",
    padding: "96px 0 112px",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },
  container: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: GOLD,
    margin: "0 0 12px",
  },
  title: {
    fontSize: "clamp(30px, 4vw, 48px)",
    fontWeight: 500,
    color: GREEN,
    margin: "0 0 12px",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#666",
    lineHeight: 1.65,
    margin: 0,
  },

  /* Accordion */
  list: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  item: {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    transition: "border-color 0.25s ease",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 18px",
    cursor: "pointer",
    userSelect: "none" as const,
    outline: "none",
  },
  bubble: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 500,
    flexShrink: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  stepTitle: {
    flex: 1,
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "-0.01em",
    fontFamily: "'Cormorant Garamond', serif",
  },
  body: {
    overflow: "hidden",
    padding: "0 18px",
  },
  divider: {
    height: "1px",
    backgroundColor: "rgba(31,93,55,0.1)",
    marginBottom: "14px",
  },
  bodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.7,
    margin: 0,
    paddingLeft: "46px",
  },
};