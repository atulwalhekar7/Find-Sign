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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=DM+Sans:wght@300;400;500&display=swap');

        .faq-root {
  display: flex;
  width: 1512px;
  padding: 64px 196px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: var(--Brand-Foundation-FS-SALTBUSH, #F9F9F9);
}
        .faq-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
        }

        .faq-header {
          margin-bottom: 48px;
        }

       .faq-title {
  width: 352px;
  height: 56px;
  flex-shrink: 0;
  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "GT Super Display";
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 122.727% */
  letter-spacing: -0.88px;
}

       .faq-subtitle {
  width: 733px;
  color: #000;
  font-family: "Söhne";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px; /* 150% */
}

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          border: 1px solid #D8D4CC;
          background: #ffffff;
          border-radius: 2px;
          overflow: hidden;
        }

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

        .faq-question-text {
  color: var(--FS-BLACK, var(--Brand-Utility-FS-BLACK, #000));
  font-family: "Söhne";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}

        .faq-chevron {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          color: #1B3A2D;
          transition: transform 0.25s ease;
        }

        .faq-chevron.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 24px 20px 24px;
          border-top: 1px solid #E8E4DC;
        }

        .faq-answer-text {
  flex: 1 0 0;
  color: var(--FS-System-Grey-1, #757575);
  font-family: "Söhne";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}

        .faq-cta {
          margin-top: 48px;
          text-align: center;
        }

      .view-all-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 14px 36px;
    border: 1px solid var(--FS-AQUA, #00BFA6);
    border-radius: 2px;
    background: transparent;

    color: var(--FS-RACING-GREEN, #073B2F);

    font-family: "CX80 Trial VAR";
    font-size: 15px;
    font-style: normal;
    font-weight: 150;
    line-height: 15px;
    letter-spacing: 4.8px;

    text-transform: uppercase;
    cursor: pointer;
}
        .view-all-btn:hover {
          background: #1B3A2D;
          color: #F5F2ED;
        }
      `}</style>

      <div className="faq-root">
        <div className="faq-inner">

          <div className="faq-header">
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">Answers to common questions about the process and how we work.</p>
          </div>

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

          <div className="faq-cta">
            <button className="view-all-btn">VIEW ALL FAQS</button>
          </div>

        </div>
      </div>
    </>
  );
}