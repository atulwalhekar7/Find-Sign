import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is a buyer's advocate?",
    answer:
      "A buyer's advocate (also called a buyer's agent) is a licensed professional who represents the buyer exclusively in a property transaction — not the seller. We search, evaluate, and negotiate on your behalf, using our market knowledge to get you the right property at the right price.",
  },
  {
    id: 2,
    question: "Why use a buyer's advocate instead of searching independently?",
    answer:
      "This is placeholder text to show how an answer will appear. It reflects the intended length and structure, allowing spacing and readability to be reviewed before final content is added.",
  },
  {
    id: 3,
    question: "What challenges do buyers face in today's market?",
    answer:
      "Today's property market moves fast. Limited stock, competitive bidding, and off-market deals make it difficult for buyers without industry access. We cut through the noise, providing you with verified opportunities before they reach the open market.",
  },
  {
    id: 4,
    question: "What does a buyer's advocate actually do?",
    answer:
      "We manage the full buying process — from understanding your brief and sourcing properties to inspecting, evaluating, negotiating, and coordinating settlement. You get expert support at every stage with someone always working in your interest.",
  },
  {
    id: 5,
    question: "Do you inspect every property before recommending it?",
    answer:
      "Yes. Every property we recommend has been physically inspected and assessed against your specific criteria. We don't send you listings — we send you properties we'd be confident recommending to a friend.",
  },
  {
    id: 6,
    question: "Where should I invest?",
    answer:
      "Location selection depends on your strategy, budget, and timeline. We focus on areas with strong fundamentals — limited supply, infrastructure investment, growing rental demand, and proximity to key amenities. We'll guide you based on your goals.",
  },
  {
    id: 7,
    question: "How much does a buyer's advocate cost?",
    answer:
      "Our fees are transparent and agreed upfront. We typically charge a flat engagement fee plus a success fee on settlement. Many clients find the savings we achieve in negotiation more than offset our fee — meaning we often pay for ourselves.",
  },
];

export default function FindSignFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── ROOT — Figma: width:1512px; padding:64px 196px; flex-direction:column; align-items:flex-start; gap:10px ── */
        .faq-root {
          display: flex;
          width: 1512px;
          padding: 64px 196px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
          box-sizing: border-box;
        }

        /* ── INNER CONTENT COLUMN ── */
        .faq-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* ── HEADER ── */
        .faq-title {
          width: 352px;
          color: var(--FS-RACING-GREEN, #073B2F);
          font-variant-numeric: lining-nums proportional-nums;
          font-family: "GT Super Display", Georgia, serif;
          font-size: 44px;
          font-style: normal;
          font-weight: 500;
          line-height: 54px;
          letter-spacing: -0.88px;
        }

        .faq-subtitle {
          width: 733px;
          color: #000;
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          line-height: 36px;
          margin-top: 8px;
        }

        /* ── ACCORDION LIST — gap:16px between items (Figma image 2) ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        /* ── ACCORDION ITEM — border:1px solid #D8D4CC; border-radius:2px ── */
        .faq-item {
          border: 1px solid #D8D4CC;
          background: #ffffff;
          border-radius: 2px;
          overflow: hidden;
        }

        /* ── QUESTION BUTTON ── */
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 24px;
        }

        /* Question text — Figma: color:var(--FS-BLACK); Söhne 20px/400/28px (FS-B2) */
        .faq-question-text {
          color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px; /* 140% — FS-B2 */
          flex: 1 0 0;        /* Figma: flex:1 0 0 */
        }

        /* Chevron */
        .faq-chevron {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          color: #073B2F;
          transition: transform 0.25s ease;
        }
        .faq-chevron.open {
          transform: rotate(180deg);
        }

        /* ── ANSWER PANEL ── */
        /* Figma: padding uses var(--sds-size-space-600) = 24px top + bottom */
        .faq-answer {
          display: flex;
          padding: 0px 24px 24px 24px; /* top 0 since border acts as separator; 24px = sds-size-space-600 */
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          border-top: 1px solid #E8E4DC;
        }

        /* Answer text — Figma: color:var(--FS-System-Grey-1, #757575); Söhne 20px/400/28px; flex:1 0 0 */
        .faq-answer-text {
          flex: 1 0 0;
          color: var(--FS-System-Grey-1, #757575);
          font-family: Söhne, "DM Sans", sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px; /* 140% — FS-B2 */
          padding-top: 24px; /* sds-size-space-600 top padding inside answer */
        }

        /* ── CTA BUTTON ── */
        .view-all-btn {
  display: inline-flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);

  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));

  font-family: "CX80 Trial VAR";
  font-size: 15px;
  font-style: normal;
  font-weight: 150;
  line-height: 15px;
  letter-spacing: 4.8px;
  background: white;
}
        .view-all-btn:hover {
          background: #073B2F;
          color: #F5F2ED;
        }

        .faq-cta {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>

      <div className="faq-root">
        <div className="faq-inner">

          {/* ── HEADER ── */}
          <div>
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">Answers to common questions about the process and how we work.</p>
          </div>

          {/* ── ACCORDION LIST ── */}
          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <svg
                      className={`faq-chevron${isOpen ? " open" : ""}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="faq-cta">
            <button className="view-all-btn">VIEW ALL FAQS</button>
          </div>

        </div>
      </div>
    </>
  );
}