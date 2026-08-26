import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OurProcess.css";

interface Step {
  id: number;
  title: string;
  description: string;
}

/* ================= DATA ================= */
const steps: Step[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Understanding your property goals, budget and buying requirements.",
  },
  {
    id: 2,
    title: "Find & Inspect",
    description: "Identifying, researching and inspecting suitable on and off-market properties.",
  },
  {
    id: 3,
    title: "Due Diligence",
    description: "Assessing property value, risks and long-term growth potential.",
  },
  {
    id: 4,
    title: "Negotiation",
    description: "Using expert negotiation strategies to secure the best possible price.",
  },
  {
    id: 5,
    title: "Secure and Sign",
    description: "Guiding contracts, paperwork and connecting you with trusted professionals.",
  },
  {
    id: 6,
    title: "Settlement",
    description: "Supporting you through settlement and the final transfer of ownership.",
  },
];

/* ── Design tokens ── */
const BG         = "var(--bg-process)";
const GREEN      = "#003327";
const DARK_GREEN = "#073B2F";

/* ── useInView ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── useCountUp ── */
function useCountUp(target: number, active: boolean, duration = 700) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

/* ── StepRow ── */
function StepRow({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const { ref, inView } = useInView(0.12);
  const count = useCountUp(step.id, inView, 600);
  const delay = `${index * 120}ms`;

  return (
    <li ref={ref as React.Ref<HTMLLIElement>} style={{ position: "relative" }}>
      <div
        className="op-row"
        style={{
          opacity: inView ? 1 : 0,
          transition: [
            `opacity 0.65s ease ${delay}`,
            `transform 0.42s cubic-bezier(0.34,1.56,0.64,1)`,
            `background 0.32s ease`,
            `box-shadow 0.32s ease`,
            `border-color 0.32s ease`,
          ].join(", "),
        }}
      >
        {/* Number */}
        <div className="op-num-col">
          <span
            className="op-num"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1) translateY(0)" : "scale(0.8) translateY(16px)",
              transition: `opacity 0.5s ease ${delay}, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}`,
            }}
          >
            {count}.
          </span>
        </div>

        {/* Content */}
        <div className="op-content">
          <p
            tabIndex={0}
            className="op-item-title"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-10px)",
              transition: `opacity 0.6s ease ${index * 120 + 80}ms, transform 0.6s ease ${index * 120 + 80}ms`,
            }}
          >
            {step.title}
          </p>
          <p
            tabIndex={0}
            className="op-item-desc"
            style={{
              opacity: inView ? 1 : 0,
              transition: `opacity 0.7s ease ${index * 120 + 180}ms`,
            }}
          >
            {step.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div className="op-divider-wrap">
          <div
            className={`op-divider${inView ? " visible" : ""}`}
            style={{ transitionDelay: inView ? `${index * 120 + 300}ms` : "0ms" }}
          />
        </div>
      )}
    </li>
  );
}

/* ── Main export ── */
export default function OurProcess({ visible = true }: { visible?: boolean }) {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const { ref: headRef,   inView: headVisible   } = useInView(0.1);
  const { ref: footerRef, inView: footerVisible } = useInView(0.1);

  return (
    <div style={{ background: BG, width: "100%" }}>
      <section className="op-section">

        {/* ── Header ── */}
        <div className="op-head" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2
            className="op-title-text"
            tabIndex={0}
            style={{
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
How Our Perth Buyer Advocate Process Works
            <div className="op-title-underline" />
          </h2>
          <p
            className="op-subtitle-text"
            tabIndex={0}
            style={{
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateX(0)" : "translateX(-14px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
A structured buyer advocacy process designed to help you find, secure and purchase the right property with confidence.
          </p>
        </div>

        {/* ── Steps ── */}
        <ul className="op-list">
          {steps.map((step, i) => (
            <StepRow key={step.id} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </ul>

        {visible && (
          /* ── Footer CTA ── */
          <div className="op-footer" ref={footerRef as React.Ref<HTMLDivElement>}>
            <button
              className="op-btn"
              style={{
                background: btnHovered ? "#69E4DC" : "transparent",
                color:      btnHovered ? "#073B2F" : DARK_GREEN,
                transform:  btnClicked ? "scale(0.97)" : "none",
                boxShadow:  btnHovered ? "0 8px 28px rgba(0,51,39,0.22)" : "none",
                opacity:    footerVisible ? 1 : 0,
                transition: [
                  "background 0.35s ease",
                  "color 0.35s ease",
                  "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  "box-shadow 0.35s ease",
                  "opacity 0.8s ease 0.3s",
                ].join(", "),
                animation: footerVisible ? "btnPulse 2s ease 1s 2" : "none",
              }}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onMouseDown={() => setBtnClicked(true)}
              onMouseUp={() => setBtnClicked(false)}
              onClick={() => {
                setBtnClicked(true);
                setTimeout(() => setBtnClicked(false), 400);
                navigate("/about");
              }}
            >
              How it works
            </button>
          </div>
        )}

      </section>
    </div>
  );
}