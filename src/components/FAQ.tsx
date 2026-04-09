import { useState } from "react";
import FAQ_HERO_SRC from "../assets/DSC06081.jpg"; // ← replace with your hero image path

// ── Replace with your actual image import ─────────────────────────────────────
// import faqHeroImg from "./assets/your-image.jpg";
// Then replace src={FAQ_HERO_SRC} with src={faqHeroImg}
// ─────────────────────────────────────────────────────────────────────────────

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

// ── Colours ───────────────────────────────────────────────────────────────────
const CREAM      = "#F5F2ED";
const DARK_GREEN = "#1B3A2D";
const MID_GREEN  = "#2D5A42";
const ACCENT     = "#4CAF82";
const GOLD       = "#C9A96E";
const TEXT_BODY  = "#4A4A3F";
const TEXT_MUTED = "#9A9A8A";
const BORDER     = "#E2DDD5";
const WHITE      = "#FFFFFF";

// ── FAQ Section ───────────────────────────────────────────────────────────────
export default function FindSignFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-btn:hover .faq-qtext { color: ${MID_GREEN}; }
        .faq-item { border-top: 1px solid ${BORDER}; transition: background 0.2s ease; }
        .faq-item:last-child { border-bottom: 1px solid ${BORDER}; }
        .faq-item.open { background: rgba(255,255,255,0.6); border-radius: 2px; }
        .view-btn:hover { background: ${DARK_GREEN} !important; color: ${ACCENT} !important; }
      `}</style>

      {/* ── FAQ SECTION ── */}
      <div style={{
        position: "relative",
        backgroundColor: CREAM,
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        padding: "80px 24px 60px",
      }}>
        {/* Soft radial bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(45,90,66,0.06) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(76,175,130,0.05) 0%, transparent 50%)`,
        }} />

        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 52, animation: "fadeUp 0.5s ease both" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: GOLD, opacity: 0.8 }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", color: GOLD }}>
                FREQUENTLY ASKED QUESTIONS
              </p>
              <span style={{ display: "inline-block", width: 40, height: 1, background: GOLD, opacity: 0.8 }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 600, color: DARK_GREEN, lineHeight: 1.15, marginBottom: 16 }}>
              Common{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: MID_GREEN }}>Questions</em>
            </h2>
            <p style={{ fontSize: 16, color: TEXT_MUTED, fontWeight: 300, letterSpacing: "0.01em" }}>
              Everything you need to know about working with Find &amp; Sign.
            </p>
          </div>

          {/* FAQ List */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = activeId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-item${isOpen ? " open" : ""}`}
                  style={{ animation: `fadeUp 0.4s ${index * 0.05}s ease both` }}
                >
                  <button
                    className="faq-btn"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between", padding: "22px 16px",
                      background: "transparent", border: "none", cursor: "pointer",
                      textAlign: "left", gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flex: 1 }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: ACCENT, fontWeight: 600, letterSpacing: "0.05em", marginTop: 2, flexShrink: 0 }}>
                        {String(faq.id).padStart(2, "0")}
                      </span>
                      <span className="faq-qtext" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, color: DARK_GREEN, lineHeight: 1.4, letterSpacing: "-0.01em", transition: "color 0.2s" }}>
                        {faq.question}
                      </span>
                    </div>
                    <span style={{ color: isOpen ? ACCENT : TEXT_MUTED, flexShrink: 0, transition: "transform 0.3s ease, color 0.2s ease", display: "flex", alignItems: "center", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 16px 24px 56px" }}>
                      <div style={{ width: 32, height: 1, background: ACCENT, marginBottom: 16, opacity: 0.6 }} />
                      <p style={{ fontSize: 15, color: TEXT_BODY, lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
                        {faq.answer}
                      </p>
                      <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, background: "rgba(45,90,66,0.08)", color: MID_GREEN, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* View All FAQs button */}
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button
              className="view-btn"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: 10,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: DARK_GREEN, border: `1.5px solid ${DARK_GREEN}`,
                padding: "13px 32px", borderRadius: 4,
                cursor: "pointer", background: "transparent",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              View All FAQs
            </button>
          </div>

        </div>
      </div>

      {/* ── HERO IMAGE SECTION ── */}
      <div style={{
        position: "relative",
        width: "100%",
        height: 860,
        overflow: "hidden",
        background: DARK_GREEN,
        display: "block",
        lineHeight: 0,
      }}>
        {/*
          HOW TO USE YOUR OWN IMAGE:
          1. import faqHeroImg from "./assets/your-image.jpg";
          2. Change src below to: src={faqHeroImg}
        */}
        <img
          src={FAQ_HERO_SRC}
          alt="Where you buy matters more than when you buy"
          style={{
            width: "100%", height: "100",
            objectFit: "cover", objectPosition: "center center",
            display: "block",
          }}
        />

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,20,14,0.48)", pointerEvents: "none" }} />

        {/* Centred headline */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600, fontStyle: "italic",
            fontSize: "clamp(24px, 3.4vw, 50px)",
            color: WHITE, textAlign: "center",
            lineHeight: 1.28, letterSpacing: "0.01em",
            maxWidth: 720, margin: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.45)",
          }}>
            Where you buy matters more than when you buy.
          </h2>
        </div>
      </div>
    </>
  );
}