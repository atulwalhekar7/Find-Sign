import { useCallback, useEffect, useRef, useState } from "react";

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

const BG = "#edecea";
const GREEN = "#003327";
const STEP_INTERVAL = 500;
const BODY_DELAY = 200;
const LOOP_PAUSE = 2800;
const RESET_DELAY = 500;

export default function OurProcess() {
  const [visibleNums, setVisibleNums] = useState<number[]>([]);
  const [visibleBodies, setVisibleBodies] = useState<number[]>([]);
  const [btnHovered, setBtnHovered] = useState(false);
  const timerIds = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isRunning = useRef(false);

  const clearAll = () => {
    timerIds.current.forEach(clearTimeout);
    timerIds.current = [];
  };

  const schedule = (fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timerIds.current.push(id);
    return id;
  };

  const reset = () => {
    setVisibleNums([]);
    setVisibleBodies([]);
  };

  const runSequence = useCallback(() => {
    isRunning.current = true;
    reset();

    steps.forEach((step, i) => {
      // number pops in
      schedule(() => {
        setVisibleNums((prev) => [...prev, step.id]);
      }, 200 + i * STEP_INTERVAL);

      // body slides in after number
      schedule(() => {
        setVisibleBodies((prev) => [...prev, step.id]);

        // after last step, loop
        if (i === steps.length - 1) {
          schedule(() => {
            isRunning.current = false;
            reset();
            schedule(() => {
              runSequence();
            }, RESET_DELAY);
          }, LOOP_PAUSE);
        }
      }, 200 + i * STEP_INTERVAL + BODY_DELAY);
    });
  }, []);

  useEffect(() => {
    // small delay so component fully mounts
    const init = setTimeout(() => runSequence(), 300);
    return () => {
      clearTimeout(init);
      clearAll();
    };
  }, [runSequence]);

  const handleReplay = () => {
    clearAll();
    isRunning.current = false;
    reset();
    setTimeout(() => runSequence(), 150);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", width: "100%" }}>
      <section style={s.section}>

        <div style={s.head}>
          <h2 style={s.title}>Our process</h2>
          <p style={s.subtitle}>
            A structured approach to finding, securing and signing the right property.
          </p>
        </div>

        <ul style={s.list}>
          {steps.map((step, i) => {
            const numOn   = visibleNums.includes(step.id);
            const bodyOn  = visibleBodies.includes(step.id);
            const isLast  = i === steps.length - 1;

            return (
              <li key={step.id} style={s.item}>

                {/* Number */}
                <span style={{
                  ...s.num,
                  opacity:   numOn ? 1 : 0,
                  transform: numOn ? "scale(1)" : "scale(0.45)",
                  transition: "opacity 0.4s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                  {step.id}.
                </span>

                {/* Title + description */}
                <div style={{
                  ...s.body,
                  opacity:   bodyOn ? 1 : 0,
                  transform: bodyOn ? "translateY(0px)" : "translateY(14px)",
                  transition: "opacity 0.35s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}>
                  <p style={s.itemTitle}>{step.title}</p>
                  <p style={s.itemDesc}>{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {!isLast && (
                  <div style={{
                    ...s.arrowWrap,
                    opacity:    bodyOn ? 1 : 0,
                    transition: "opacity 0.3s ease 0.25s",
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9.5" stroke={`${GREEN}55`} />
                      <path
                        d="M10 6v8M10 14l-3-3M10 14l3-3"
                        stroke={GREEN}
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

              </li>
            );
          })}
        </ul>

        <div style={s.footer}>
          <button
            style={{
              ...s.btn,
              background: btnHovered ? GREEN     : "transparent",
              color:      btnHovered ? "#ffffff" : GREEN,
            }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            onClick={handleReplay}
          >
            HOW IT WORKS
          </button>
        </div>

      </section>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    background:  BG,
    fontFamily:  "'DM Sans', sans-serif",
    padding:     "64px 64px 80px",
    maxWidth:    "640px",
    margin:      "0 auto",
  },
  head: {
    marginBottom: "36px",
  },
  title: {
    fontFamily:    "'Playfair Display', serif",
    fontSize:      "28px",
    fontWeight:    500,
    color:         GREEN,
    marginBottom:  "8px",
    letterSpacing: "-0.01em",
  },
  subtitle: {
    fontSize:   "13.5px",
    color:      "#666",
    lineHeight: 1.6,
    margin:     0,
  },
  list: {
    listStyle: "none",
    padding:   0,
    margin:    0,
  },
  item: {
    display:               "grid",
    gridTemplateColumns:   "90px 1fr",
    columnGap:             "20px",
    alignItems:            "start",
    paddingBottom:         "4px",
  },
  num: {
    fontFamily:      "'Playfair Display', serif",
    fontSize:        "80px",
    fontWeight:      400,
    color:           GREEN,
    lineHeight:      1,
    display:         "block",
    transformOrigin: "left center",
    gridColumn:      "1",
    gridRow:         "1",
  },
  body: {
    gridColumn: "2",
    gridRow:    "1",
    paddingTop: "10px",
  },
  itemTitle: {
    fontFamily:    "'Playfair Display', serif",
    fontSize:      "17px",
    fontWeight:    500,
    color:         "#1a1a1a",
    letterSpacing: "-0.01em",
    margin:        "0 0 6px",
  },
  itemDesc: {
    fontSize:   "13px",
    color:      "#666",
    lineHeight: 1.75,
    margin:     0,
  },
  arrowWrap: {
    gridColumn:      "1 / 3",
    display:         "flex",
    justifyContent:  "center",
    padding:         "10px 0",
  },
  footer: {
    marginTop:       "44px",
    display:         "flex",
    justifyContent:  "center",
  },
  btn: {
    fontFamily:    "'Söhne', 'Helvetica Neue', Arial, sans-serif",
    fontSize:      "11px",
    fontWeight:    400,
    letterSpacing: "0.22em",
    border:        `1px solid ${GREEN}`,
    padding:       "13px 32px",
    cursor:        "pointer",
    borderRadius:  "2px",
    transition:    "background 0.2s ease, color 0.2s ease",
  },
};