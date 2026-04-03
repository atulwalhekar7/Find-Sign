import { useState } from "react";

interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    phase: "One",
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your goals, preferences, and budget. This helps us align our search with exactly what you're looking for in your ideal property.",
  },
  {
    id: 2,
    phase: "Two",
    title: "We Find It",
    description:
      "Using our extensive network and market expertise, we curate a selection of properties that match your criteria — including off-market opportunities you won't find anywhere else.",
  },
  {
    id: 3,
    phase: "Three",
    title: "We Inspect the Property",
    description:
      "Our team conducts thorough due diligence on your behalf. We assess the property's condition, value, and potential so you can make a confident, informed decision.",
  },
  {
    id: 4,
    phase: "Four",
    title: "You Sign It",
    description:
      "Once you've found the one, we guide you seamlessly through the signing process — handling negotiations, paperwork, and coordination so everything goes smoothly.",
  },
];

export default function OurProcess() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  const toggle = (id: number) =>
    setOpenStep((prev) => (prev === id ? null : id));

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

        {/* Two-column grid */}
        <div style={s.grid}>

          {/* LEFT — numbered steps */}
          <div style={s.leftCol}>
            {steps.map((step, i) => (
              <div
                key={step.id}
                style={{
                  ...s.stepRow,
                  borderTop: i === 0 ? "1px solid rgba(31,93,55,0.15)" : undefined,
                  backgroundColor:
                    openStep === step.id ? "rgba(31,93,55,0.04)" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease",
                }}
                onClick={() => toggle(step.id)}
              >
                {/* active bar */}
                <div
                  style={{
                    ...s.activeBar,
                    opacity: openStep === step.id ? 1 : 0,
                    transition: "opacity 0.25s ease",
                  }}
                />

                <span
                  style={{
                    ...s.stepNum,
                    color:
                      openStep === step.id ? "#1F5D37" : "rgba(31,93,55,0.22)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {step.id}.
                </span>

                <div style={s.stepBody}>
                  <h3
                    style={{
                      ...s.stepTitle,
                      color: openStep === step.id ? "#1a1a1a" : "#555",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      ...s.stepDesc,
                      maxHeight: openStep === step.id ? "120px" : "0px",
                      opacity: openStep === step.id ? 1 : 0,
                      marginTop: openStep === step.id ? "8px" : "0px",
                      overflow: "hidden",
                      transition:
                        "max-height 0.35s ease, opacity 0.3s ease, margin 0.3s ease",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — accordion */}
          <div style={s.rightCol}>
            <div style={s.accordionCard}>
              <p style={s.accLabel}>Step by step</p>

              {steps.map((step) => {
                const isOpen = openStep === step.id;
                return (
                  <div key={step.id} style={s.accItem}>
                    <button
                      style={{
                        ...s.accBtn,
                        backgroundColor: isOpen ? "#1F5D37" : "transparent",
                        color: isOpen ? "#ffffff" : "#1a1a1a",
                      }}
                      onClick={() => toggle(step.id)}
                      aria-expanded={isOpen}
                    >
                      <div style={s.accLeft}>
                        <span
                          style={{
                            ...s.accNum,
                            color: isOpen
                              ? "rgba(255,255,255,0.45)"
                              : "rgba(31,93,55,0.4)",
                          }}
                        >
                          {String(step.id).padStart(2, "0")}
                        </span>
                        <span style={s.accTitleText}>Phase {step.phase}</span>
                      </div>
                      <span
                        style={{
                          ...s.accIcon,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          color: isOpen ? "#ffffff" : "#1F5D37",
                        }}
                      >
                        {isOpen ? "✕" : "↓"}
                      </span>
                    </button>

                    <div
                      style={{
                        ...s.accBody,
                        maxHeight: isOpen ? "180px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        padding: isOpen ? "14px 20px 18px" : "0 20px",
                      }}
                    >
                      <p style={s.accBodyText}>{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress dots */}
            <div style={s.dotsRow}>
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => toggle(step.id)}
                  style={{
                    ...s.dot,
                    opacity: openStep === step.id ? 1 : 0.2,
                    transform: openStep === step.id ? "scale(1.35)" : "scale(1)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                  aria-label={`Go to step ${step.id}`}
                />
              ))}
            </div>
          </div>
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
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 40px",
  },
  header: {
    marginBottom: "60px",
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#8B6D38",
    margin: "0 0 12px",
  },
  title: {
    fontSize: "clamp(34px, 4.5vw, 60px)",
    fontWeight: 500,
    color: "#1F5D37",
    margin: "0 0 14px",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#666",
    lineHeight: 1.65,
    maxWidth: "380px",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "start",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column" as const,
  },
  stepRow: {
    position: "relative" as const,
    display: "flex",
    gap: "20px",
    padding: "24px 16px 24px 12px",
    borderBottom: "1px solid rgba(31,93,55,0.15)",
    alignItems: "flex-start",
    borderRadius: "6px",
  },
  activeBar: {
    position: "absolute" as const,
    left: 0,
    top: "20%",
    bottom: "20%",
    width: "3px",
    backgroundColor: "#1F5D37",
    borderRadius: "2px",
  },
  stepNum: {
    fontSize: "clamp(44px, 5.5vw, 68px)",
    fontWeight: 500,
    lineHeight: 1,
    minWidth: "64px",
    letterSpacing: "-0.03em",
    marginTop: "-4px",
    userSelect: "none" as const,
  },
  stepBody: {
    flex: 1,
    paddingTop: "6px",
  },
  stepTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    fontWeight: 500,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  stepDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    color: "#666",
    lineHeight: 1.7,
    margin: 0,
  },
  rightCol: {
    position: "sticky" as const,
    top: "40px",
  },
  accordionCard: {
    backgroundColor: "#faf9f6",
    borderRadius: "12px",
    border: "1px solid rgba(31,93,55,0.12)",
    overflow: "hidden",
    boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
  },
  accLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#8B6D38",
    padding: "14px 20px 12px",
    borderBottom: "1px solid rgba(31,93,55,0.1)",
    margin: 0,
    backgroundColor: "#f0efeb",
  },
  accItem: {
    borderBottom: "1px solid rgba(31,93,55,0.08)",
  },
  accBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    transition: "background-color 0.25s ease, color 0.25s ease",
    fontFamily: "'Cormorant Garamond', serif",
  },
  accLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  accNum: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.08em",
    transition: "color 0.25s ease",
  },
  accTitleText: {
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "-0.01em",
  },
  accIcon: {
    fontSize: "13px",
    transition: "transform 0.3s ease, color 0.25s ease",
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif",
  },
  accBody: {
    overflow: "hidden",
    transition: "max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease",
    backgroundColor: "#ffffff",
  },
  accBodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    color: "#555",
    lineHeight: 1.7,
    margin: 0,
  },
  dotsRow: {
    display: "flex",
    gap: "8px",
    marginTop: "20px",
    paddingLeft: "4px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    backgroundColor: "#1F5D37",
  },
};