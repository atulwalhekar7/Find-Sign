import { useState, useEffect } from "react";
import img1 from "../assets/DSC06081.jpg";
import img2 from "../assets/DSC06286.jpg";
import img3 from "../assets/DSC06218.jpg";
import img4 from "../assets/DSC06057.jpg";
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "We align on your goals, preferences, and budget to shape the perfect property search strategy.",
    image: img1,
  },
  {
    id: 2,
    title: "We Find It",
    description:
      "We curate properties using our extensive network — including exclusive off-market opportunities.",
    image: img2,
  },
  {
    id: 3,
    title: "We Inspect the Property",
    description:
      "Thorough due diligence on condition, value, and potential so you can decide with full confidence.",
    image: img3,
  },
  {
    id: 4,
    title: "You Sign It",
    description:
      "We handle negotiations, paperwork, and coordination — you just sign on the dotted line.",
    image: img4,
  },
];

const GREEN = "#1F5D37";
const GOLD  = "#8B6D38";

const FALLBACK_COLORS: string[] = [
  "linear-gradient(160deg, #1F5D37 0%, #0d3520 100%)",
  "linear-gradient(160deg, #2a6e45 0%, #133d25 100%)",
  "linear-gradient(160deg, #8B6D38 0%, #5a4420 100%)",
  "linear-gradient(160deg, #3a7a52 0%, #0d3520 100%)",
];

export default function OurProcess() {
  const [activeId, setActiveId]     = useState<number>(1);
  const [imgVisible, setImgVisible] = useState<boolean>(true);
  const [isPaused, setIsPaused]     = useState<boolean>(false);

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveId((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Fade image out then in on step change
  useEffect(() => {
    setImgVisible(false);
    const t = setTimeout(() => setImgVisible(true), 300);
    return () => clearTimeout(t);
  }, [activeId]);

  const handleStepClick = (id: number) => {
    setActiveId(id);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const activeStep  = steps.find((s) => s.id === activeId)!;
  const progressPct = ((activeId - 1) / (steps.length - 1)) * 100;

  return (
    <section style={s.section}>
      <div style={s.container}>

        {/* LEFT — image */}
        <div style={s.imageCol}>
          <div
            style={{
              ...s.imageFallback,
              background: FALLBACK_COLORS[activeId - 1],
              transition: "background 0.5s ease",
            }}
          />
          <img
            key={activeStep.id}
            src={activeStep.image}
            alt={activeStep.title}
            style={{
              ...s.image,
              opacity: imgVisible ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Overlay label */}
          <div style={s.imageOverlay}>
            <span style={s.overlayNum}>
              {String(activeId).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
            <span
              style={{
                ...s.overlayTitle,
                opacity: imgVisible ? 1 : 0,
                transform: imgVisible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {activeStep.title}
            </span>
          </div>

          {/* Progress bar */}
          <div style={s.imgProgressTrack}>
            <div
              style={{
                ...s.imgProgressFill,
                width: `${((activeId - 1) / steps.length) * 100 + 100 / steps.length}%`,
                transition: isPaused ? "none" : "width 1.8s linear",
              }}
            />
          </div>
        </div>

        {/* RIGHT — timeline */}
        <div style={s.right}>
          <p style={s.eyebrow}>How it works</p>
          <h2 style={s.title}>
            Our <em style={s.titleItalic}>Process</em>
          </h2>
          <p style={s.subtitle}>
            From start to finish, we handle every detail for you.
          </p>

          <div style={s.timeline}>
            <div style={s.lineTrack} />
            <div
              style={{
                ...s.lineFill,
                height: `calc(${progressPct}%)`,
                transition: "height 0.5s ease",
              }}
            />

            {steps.map((step) => {
              const isActive = activeId === step.id;
              const isDone   = step.id < activeId;

              return (
                <div
                  key={step.id}
                  style={s.stepRow}
                  onClick={() => handleStepClick(step.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleStepClick(step.id)}
                >
                  <div
                    style={{
                      ...s.circle,
                      backgroundColor: isActive || isDone ? GREEN : "#f0efeb",
                      borderColor:     isActive || isDone ? GREEN : "rgba(31,93,55,0.2)",
                      color:           isActive || isDone ? "#ffffff" : "#999",
                      opacity:   isDone ? 0.55 : 1,
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>

                  <div style={s.stepInfo}>
                    <p
                      style={{
                        ...s.stepTitle,
                        color: isActive ? GREEN : "#444",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        ...s.stepDesc,
                        maxHeight: isActive ? "80px" : "0px",
                        opacity:   isActive ? 1 : 0,
                        marginTop: isActive ? "5px" : "0px",
                        transition:
                          "max-height 0.35s ease, opacity 0.3s ease, margin 0.3s ease",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div style={s.controls}>
            <button
              style={s.pauseBtn}
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2l7 4-7 4V2z" fill={GREEN} />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="2" y="2" width="3" height="8" rx="1" fill={GREEN} />
                  <rect x="7" y="2" width="3" height="8" rx="1" fill={GREEN} />
                </svg>
              )}
            </button>

            <div style={s.dots}>
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  style={{
                    ...s.dot,
                    opacity:   activeId === step.id ? 1 : 0.2,
                    transform: activeId === step.id ? "scale(1.4)" : "scale(1)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                  aria-label={`Go to step ${step.id}`}
                />
              ))}
            </div>
          </div>

          <button style={s.cta}>See more about our strategy</button>
        </div>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    backgroundColor: "#faf9f6",
    borderTop: "1px solid rgba(31,93,55,0.1)",
    padding: "96px 0 112px",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "center",
  },
  imageCol: {
    position: "relative" as const,
    borderRadius: "14px",
    overflow: "hidden",
    aspectRatio: "3 / 4",
    backgroundColor: "#1a3a28",
  },
  imageFallback: {
    position: "absolute" as const,
    inset: 0,
    zIndex: 0,
  },
  image: {
    position: "absolute" as const,
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
    zIndex: 1,
  },
  imageOverlay: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: "48px 24px 20px",
    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  overlayNum: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.16em",
    color: "rgba(255,255,255,0.6)",
  },
  overlayTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 500,
    color: "#ffffff",
    letterSpacing: "-0.01em",
    display: "inline-block" as const,
  },
  imgProgressTrack: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: "rgba(255,255,255,0.2)",
    zIndex: 3,
  },
  imgProgressFill: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "0 2px 2px 0",
  },
  right: {
    display: "flex",
    flexDirection: "column" as const,
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: GOLD,
    margin: "0 0 10px",
  },
  title: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 500,
    color: "#1a1a1a",
    margin: "0 0 10px",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
  },
  titleItalic: {
    fontStyle: "italic",
    color: GREEN,
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.6,
    margin: "0 0 36px",
  },
  timeline: {
    position: "relative" as const,
    display: "flex",
    flexDirection: "column" as const,
  },
  lineTrack: {
    position: "absolute" as const,
    left: "19px",
    top: "20px",
    bottom: "20px",
    width: "1.5px",
    backgroundColor: "rgba(31,93,55,0.15)",
    zIndex: 0,
  },
  lineFill: {
    position: "absolute" as const,
    left: "19px",
    top: "20px",
    width: "1.5px",
    backgroundColor: GREEN,
    zIndex: 1,
    minHeight: "0px",
  },
  stepRow: {
    position: "relative" as const,
    zIndex: 2,
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
    padding: "14px 0",
    cursor: "pointer",
    outline: "none",
  },
  circle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1.5px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 500,
    flexShrink: 0,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "0.05em",
    userSelect: "none" as const,
  },
  stepInfo: {
    paddingTop: "8px",
    flex: 1,
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
    overflow: "hidden",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginTop: "24px",
  },
  pauseBtn: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid rgba(31,93,55,0.3)",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
  },
  dots: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    backgroundColor: GREEN,
  },
  cta: {
    marginTop: "28px",
    alignSelf: "flex-start" as const,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    backgroundColor: GREEN,
    color: "#ffffff",
    border: "none",
    padding: "16px 32px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};