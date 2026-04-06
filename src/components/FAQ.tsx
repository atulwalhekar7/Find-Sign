import { useState } from "react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "About Us",
    question: "What is Find & Sign?",
    answer:
      "Find & Sign is a property buyer's advocate based in Western Australia. We represent buyers exclusively — not sellers — working inside the process to identify opportunities early and help you secure the right property with complete clarity and control.",
  },
  {
    id: 2,
    category: "Investment Properties",
    question: "Can you help interstate investors buy in Western Australia?",
    answer:
      "Absolutely. Many of our clients are NSW-based (and interstate) investors looking to diversify their portfolios into the WA market. We handle the entire process on the ground — from sourcing and inspecting to negotiating and settling — so you don't need to be there in person.",
  },
  {
    id: 3,
    category: "Investment Properties",
    question: "What kind of investment properties do you find?",
    answer:
      "We source a range of investment properties depending on your strategy — from modern 3×2 homes in high-growth estates to properties in areas with strong rental demand and infrastructure development. We focus on areas with solid fundamentals: limited new supply, nearby amenities, transport links, and strong rental yields.",
  },
  {
    id: 4,
    category: "Investment Properties",
    question: "What rental yields can investors typically expect?",
    answer:
      "Rental yields vary by location and property type, but recent client outcomes include properties achieving $600pw on a $553,000 purchase and $585pw on a $539,000 purchase. We focus on properties offering strong ongoing returns, not just capital growth.",
  },
  {
    id: 5,
    category: "Working With Us",
    question: "Why should I use a buyer's advocate instead of searching myself?",
    answer:
      "Buying property without representation means you're often negotiating against agents who work for the seller. We level the playing field — providing expert market knowledge, access to pre-market opportunities, independent inspections, and negotiation support. Clients consistently tell us it removes the stress and uncertainty from the entire process.",
  },
  {
    id: 6,
    category: "Working With Us",
    question: "What do your clients say about working with Find & Sign?",
    answer:
      "Our clients highlight our market knowledge, professionalism, and the confidence we give them throughout the process. Common feedback includes: 'went way above our needs,' 'total confidence throughout,' 'honest advice, great communication, and zero pressure.' We're proud that buyers consistently describe the experience as stress-free.",
  },
];

export default function FindSignFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

  return (
    <div style={styles.page}>
      {/* Background texture */}
      <div style={styles.bgTexture} />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowLine} />
            <p style={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</p>
            <span style={styles.eyebrowLine} />
          </div>
          <h2 style={styles.title}>
            Common{" "}
            <em style={styles.titleItalic}>Questions</em>
          </h2>
          <p style={styles.subtitle}>
            Everything you need to know about working with Find & Sign.
          </p>
        </div>

        {/* FAQ List */}
        <div style={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  ...styles.faqItem,
                  ...(isOpen ? styles.faqItemOpen : {}),
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <button
                  style={styles.faqQuestion}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div style={styles.questionLeft}>
                    <span style={styles.questionNumber}>
                      {String(faq.id).padStart(2, "0")}
                    </span>
                    <span style={styles.questionText}>{faq.question}</span>
                  </div>
                  <div
                    style={{
                      ...styles.icon,
                      ...(isOpen ? styles.iconOpen : {}),
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div style={styles.faqAnswer}>
                    <div style={styles.answerDivider} />
                    <p style={styles.answerText}>{faq.answer}</p>
                    <span style={styles.categoryTag}>{faq.category}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-item-animate {
          animation: fadeUp 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}

const CREAM = "#F5F2ED";
const DARK_GREEN = "#1B3A2D";
const MID_GREEN = "#2D5A42";
const ACCENT = "#4CAF82";
const TEXT_BODY = "#4A4A3F";
const TEXT_MUTED = "#9A9A8A";
const BORDER = "#E2DDD5";

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    backgroundColor: CREAM,
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
  },
  bgTexture: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(circle at 80% 20%, rgba(45,90,66,0.06) 0%, transparent 50%),
                       radial-gradient(circle at 20% 80%, rgba(76,175,130,0.05) 0%, transparent 50%)`,
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    maxWidth: "860px",
    margin: "0 auto",
    padding: "80px 24px 100px",
  },
  header: {
    textAlign: "center",
    marginBottom: "52px",
  },
  eyebrowRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  eyebrowLine: {
    display: "inline-block",
    width: "40px",
    height: "1px",
    background: "#C9A96E",
    opacity: 0.8,
  },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.18em",
    color: "#C9A96E",
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(36px, 5vw, 54px)",
    fontWeight: 600,
    color: DARK_GREEN,
    lineHeight: 1.15,
    marginBottom: "16px",
  },
  titleItalic: {
    fontStyle: "italic",
    fontWeight: 400,
    color: MID_GREEN,
  },
  subtitle: {
    fontSize: "16px",
    color: TEXT_MUTED,
    fontWeight: 300,
    letterSpacing: "0.01em",
  },
  faqList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0px",
  },
  faqItem: {
    borderTop: `1px solid ${BORDER}`,
    transition: "background 0.2s ease",
  },
  faqItemOpen: {
    background: "rgba(255,255,255,0.6)",
    borderRadius: "2px",
  },
  faqQuestion: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "22px 16px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    gap: "16px",
  },
  questionLeft: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    flex: 1,
  },
  questionNumber: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "13px",
    color: ACCENT,
    fontWeight: 600,
    letterSpacing: "0.05em",
    marginTop: "2px",
    flexShrink: 0,
  },
  questionText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    color: DARK_GREEN,
    lineHeight: 1.4,
    letterSpacing: "-0.01em",
  },
  icon: {
    color: TEXT_MUTED,
    flexShrink: 0,
    transition: "transform 0.3s ease, color 0.2s ease",
    display: "flex",
    alignItems: "center",
  },
  iconOpen: {
    transform: "rotate(180deg)",
    color: ACCENT,
  },
  faqAnswer: {
    padding: "0 16px 24px 56px",
  },
  answerDivider: {
    width: "32px",
    height: "1px",
    background: ACCENT,
    marginBottom: "16px",
    opacity: 0.6,
  },
  answerText: {
    fontSize: "15px",
    color: TEXT_BODY,
    lineHeight: 1.75,
    fontWeight: 300,
    marginBottom: "16px",
  },
  categoryTag: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "100px",
    background: "rgba(45,90,66,0.08)",
    color: MID_GREEN,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
};