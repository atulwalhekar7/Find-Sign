import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    description:
      "Defining your goals and budget.",
  },
  {
    id: 2,
    title: "Find & Inspect",
    description:
      "Identifying and inspecting suitable properties.",
  },
  {
    id: 3,
    title: "Due Diligence",
    description:
      "Evaluating value and growth potential.",
  },
  {
    id: 4,
    title: "Negotiation",
    description:
      "Securing the best possible price.",
  },
  {
    id: 5,
    title: "Secure and Sign",
    description:
      "Guiding the process and connecting you with trusted partners.",
  },
  {
    id: 6,
    title: "Settlement",
    description:
      "Supporting you through to ownership.",
},
];

/* ── Design tokens ── */
const BG         = "rgb(255, 254, 253)";
const GREEN      = "#003327";
const DARK_GREEN = "#073B2F";

/* ── Global CSS ── */
const globalCSS = `
  /* ── Entrance animations ── */
  @keyframes btnPulse {
    0%   { box-shadow: 0 0 0 0 rgba(105,228,220,0.4); }
    70%  { box-shadow: 0 0 0 10px rgba(105,228,220,0); }
    100% { box-shadow: 0 0 0 0 rgba(105,228,220,0); }
  }

  /* ── Hover pop: row lifts and breathes ── */
  @keyframes popLift {
    0%   { transform: translateY(0)   scale(1); }
    40%  { transform: translateY(-6px) scale(1.012); }
    70%  { transform: translateY(-4px) scale(1.009); }
    100% { transform: translateY(-5px) scale(1.010); }
  }

  @keyframes popDown {
    0%   { transform: translateY(-5px) scale(1.010); }
    100% { transform: translateY(0)    scale(1); }
  }

  /* ── Number subtle float on hover ── */
  @keyframes numFloat {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-6px); }
  }

  /* ── Shimmer line sweep ── */
  @keyframes shimmerSweep {
    from { background-position: -200% center; }
    to   { background-position:  200% center; }
  }

  /* ── Section grid ── */

  .op-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  max-width: 100%;

  height: 48px;
  padding: 12px 24px;

  font-family: CX80;
  font-weight: 700;

  letter-spacing: 4px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;

  transition: all 0.3s ease;
}
  .op-section {
    background: ${BG};
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 64px;
    padding: 64px 130px 64px;
  }

  .op-head { 
    grid-column: 1 / -1; 
    margin-bottom: 48px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
  }
  .op-list { grid-column: 1 / -1; list-style: none; padding: 0; margin: 0; }

  /* ── Row base ── */
  .op-row {
    display: grid;
    grid-template-columns: 2fr 10fr;
    column-gap: 32px;
    align-items: start;
    padding: 24px 20px;
    border-radius: 16px;
    cursor: pointer;
    position: relative;
    overflow: visible;

    /* base state */
    background: transparent;
    box-shadow: none;
    transform: translateY(0) scale(1);

    transition:
      background   0.32s ease,
      box-shadow   0.32s ease,
      transform    0.42s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.32s ease;

    border: 1px solid transparent;
  }

  /* Hover: pop lift + card feel */
  .op-row:hover {
    background: #fff;
    border-color: rgba(7,59,47,0.10);
    box-shadow:
      0 8px 24px rgba(7,59,47,0.08),
      0 2px 8px  rgba(7,59,47,0.05),
      0 0 0 1px  rgba(7,59,47,0.04);
    transform: translateY(-5px) scale(1.010);
    z-index: 2;
  }

  /* Number deepens on hover */
  .op-row:hover .op-num {
    color: ${GREEN};
    animation: numFloat 2.4s ease-in-out infinite;
  }

  /* Title sharpens */
  .op-row:hover .op-item-title {
    color: ${DARK_GREEN};
    letter-spacing: -0.5px;
  }

  /* Desc lightens slightly */
  .op-row:hover .op-item-desc {
    color: #444;
  }

  /* Shimmer accent line at bottom of hovered row */
  .op-row::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 90%;
    height: 1.5px;
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #69E4DC     40%,
      #073B2F     60%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .op-row:hover::after {
    opacity: 1;
    animation: shimmerSweep 1.6s ease infinite;
  }

  /* ── Divider ── */
  .op-divider-wrap { width: 100%; overflow: hidden; }

  .op-divider {
    width: 100%;
    height: 1px;
    background: ${DARK_GREEN};
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.55s cubic-bezier(0.77,0,0.18,1);
  }
  .op-divider.visible { transform: scaleX(1); }

  /* ── Footer ── */
  .op-footer {
    grid-column: 1 / -1;
    margin-top: 56px;
    display: flex;
    justify-content: center;
  }

  /* ── TABLET ── */
  @media (max-width: 1199px) {
    .op-section { column-gap: 32px; padding: 48px 48px 64px; }
@media (max-width: 767px) {
  .op-row {
    grid-template-columns: 60px 1fr;
    column-gap: 12px;
    align-items: flex-start;
  }
}    .op-num           { font-size: 120px !important; line-height: 108px !important; letter-spacing: -3.6px !important; }
    .op-title-text    { font-size: 36px  !important; }
    .op-subtitle-text { font-size: 20px  !important; }
    .op-item-title    { font-size: 26px  !important; }
    .op-item-desc     { font-size: 18px  !important; }
  }

  /* ── MOBILE ── */
  @media (max-width: 767px) {
    .op-section { grid-template-columns: repeat(4,1fr); column-gap: 16px; padding: 40px 20px 56px; }
    .op-head    { margin-bottom: 32px; }
   .op-row {
    display: grid;
    grid-template-columns: 64px 1fr;
    column-gap: 12px;
    align-items: flex-start;
    padding: 14px 12px;
  }
       .op-row:hover { transform: translateY(-3px) scale(1.005); }
  .op-num {
    font-size: 64px !important;
    line-height: 64px !important;
    height: auto !important;
    width: 64px !important;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    transform: translateY(2px); /* 👈 key fix */
  }
   .op-title-text    { font-size: 28px !important; line-height: 38px  !important; }
    .op-subtitle-text { font-size: 16px !important; line-height: 26px  !important; }
    .op-item-title {
    margin: 0;
    line-height: 28px;
  }

  .op-item-desc {
    margin-top: 6px;
    line-height: 22px;
  }
 .op-btn {
    width: 100%;
    max-width: 320px;
    height: 44px;
    font-size: 13px;
    letter-spacing: 3px;
  }  }
`;

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
          /* entrance slide handled via opacity only — transform managed by CSS hover */
        }}
      >
        {/* Number */}
        <div style={s.numCol}>
          <span
            className="op-num"
            style={{
              ...s.num,
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1) translateY(0)" : "scale(0.8) translateY(16px)",
              transition: `opacity 0.5s ease ${delay}, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}`,
            }}
          >
            {count}.
          </span>
        </div>

        {/* Content */}
        <div style={s.content}>
          <p
            className="op-item-title"
            style={{
              ...s.itemTitle,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-10px)",
              transition: `opacity 0.6s ease ${index * 120 + 80}ms, transform 0.6s ease ${index * 120 + 80}ms`,
            }}
          >
            {step.title}
          </p>
          <p
            className="op-item-desc"
            style={{
              ...s.itemDesc,
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
      <style>{globalCSS}</style>

      <section className="op-section">

        {/* ── Header ── */}
        <div className="op-head" ref={headRef as React.Ref<HTMLDivElement>}>
          <h2
            className="op-title-text"
            style={{
              ...s.title,
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Our Process
            <div style={s.titleUnderline} />
          </h2>
          <p
            className="op-subtitle-text"
            style={{
              ...s.subtitle,
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? "translateX(0)" : "translateX(-14px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            A structured approach to finding, securing and signing the right property.
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
    ...s.btn,
    background: btnHovered ? "#69E4DC" : "transparent",
    color:      btnHovered ? "#073B2F" : DARK_GREEN,
   transform: btnClicked ? "scale(0.97)" : "none",
    boxShadow: btnHovered ? "0 8px 28px rgba(0,51,39,0.22)" : "none",
    opacity:   footerVisible ? 1 : 0,
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

/* ── Static styles — all Figma values preserved exactly ── */
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
    margin: "0",
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },
  titleUnderline: { width: "160px", height: "1px", background: "#073B2F" },
  subtitle: {
    fontFamily: "Sohne",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 300,
    color: "#000",
    lineHeight: "36px",
    margin: "24px auto 0",
    maxWidth: "100%",
    width: "804px",
    textAlign: "center",
  },
  numCol: { flexShrink: 0 },
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
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  },
  content: { paddingTop: "8px" },
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
    transition: "color 0.3s ease, letter-spacing 0.3s ease",
  },
  itemDesc: {
    fontFamily: "Sohne",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 300,
    color: "var(--FS-System-Grey-1, #757575)",
    lineHeight: "36px",
    margin: 0,
    transition: "color 0.3s ease",
  },
  btn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "fit-content",
  maxWidth: "100%",

  height: "48px",
  padding: "12px 16px",

  fontFamily: "CX80",
  fontSize: "15px",
  fontWeight: 700,

  letterSpacing: "4.8px",
  whiteSpace: "nowrap",

  borderRadius: "8px",
  border: "1px solid #69E4DC",

  cursor: "pointer",
  transition: "all 0.3s ease",
},
};