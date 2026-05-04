import { useState } from "react";
import { Box, Container } from "@mui/material";

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
      "A buyer's advocate (also called a buyer's agent) is a licensed professional who represents the buyer exclusively in a property transaction not the seller. We search, evaluate, and negotiate on your behalf, using our market knowledge to get you the right property at the right price.",
  },
 {
  id: 2,
  question: "Why use a buyer's advocate instead of searching independently?",
  answer:
    "The property market isn't a level playing field and going it alone often proves it. While you're scrolling through listings, experienced buyers may already be under contract on off-market properties you never even saw. And when you're negotiating, the selling agent is working for the vendor not for you.\n\nA buyer's advocate changes that dynamic. You get better access, sharper negotiation, less guesswork, and a professional in your corner who has done this hundreds of times before.",
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
      "We manage the full buying process from understanding your brief and sourcing properties to inspecting, evaluating, negotiating, and coordinating settlement. You get expert support at every stage with someone always working in your interest.",
  },
  {
    id: 5,
    question: "Do you inspect every property before recommending it?",
    answer:
      "Yes. Every property we recommend has been physically inspected and assessed against your specific criteria. We don't send you listings we send you properties we'd be confident recommending to a friend.",
  },
  {
    id: 6,
    question: "Where should I invest?",
    answer:
      "Location selection depends on your strategy, budget, and timeline. We focus on areas with strong fundamentals limited supply, infrastructure investment, growing rental demand, and proximity to key amenities. We'll guide you based on your goals.",
  },
  {
    id: 7,
    question: "How much does a buyer's advocate cost?",
    answer:
      "Our fees are transparent and agreed upfront. We typically charge a flat engagement fee plus a success fee on settlement. Many clients find the savings we achieve in negotiation more than offset our fee meaning we often pay for ourselves.",
  },
];

export default function FindSignFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .faq-title {
          color: #073B2F;
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          line-height: 54px;
          letter-spacing: -0.88px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .faq-title::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
        }

        .faq-subtitle {
          color: #000;
          font-family: "Sohne", sans-serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          margin-top: 24px;
          text-align: center;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid #E8E4DC;
          position: relative;
          z-index: 1;
          margin-bottom: 16px;
        }

        /* ── GREEN SHADOW ANIMATION ── */
        .faq-item.active {
          transform: translateX(12px) translateY(-2px); 
          z-index: 10;
          border-color: #073B2F;
          
          /* Layered Green Shadow: -X for left side, +Y for bottom side */
          box-shadow: 
            -15px 15px 40px rgba(7, 59, 47, 0.2), 
            -5px 5px 15px rgba(7, 59, 47, 0.1);
            
          /* Optional: Thickening the left border to reinforce the green glow direction */
          border-left: 8px solid #073B2F;
        }

        .faq-question-area {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 32px;
          background: transparent;
          border: none;
          text-align: left;
          gap: 24px;
          cursor: pointer;
        }

        .faq-question-text {
          color: #000;
          font-size: 20px;
          line-height: 28px;
          flex: 1;
          font-family: 'SohneBuch';
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .faq-item.active .faq-question-text {
          color: #073B2F;
          font-weight: 500;
          padding-left: 4px;
        }

        .faq-chevron {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          color: #073B2F;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .faq-chevron.open {
          transform: rotate(180deg);
        }

        /* Drawer Slide Effect */
        .faq-drawer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .faq-drawer.open {
          grid-template-rows: 1fr;
        }

        .faq-drawer-inner {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0px 32px 32px 32px;
          display: flex;
          flex-direction: column;
          border-top: 1px solid #F5F2ED;
        }

        .faq-answer-text {
          color: #757575;
          font-family: "SohneBuch";
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          padding-top: 24px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease-out;
        }

        .faq-drawer.open .faq-answer-text {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s;
        }

        .view-all-btn {
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid #69E4DC;
  background: white;

  color: #073B2F;
  font-family: 'CX80';
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 4.8px;

  margin-top: 30px;
  cursor: pointer;

  transition: background 0.2s, color 0.2s;
}

       .view-all-btn:hover {
  background: #69E4DC;
  color: #073B2F;
  border-color: #69E4DC;
}

        @media (max-width: 600px) {
          .faq-title { font-size: 32px; }
          .faq-item.active { transform: translateX(6px); }
          .faq-question-area { padding: 20px; }
        }
      `}</style>

      <Box sx={{ background: "#F9F9F9", width: "100%", py: { xs: 8, md: 12 } }}>
        <Container 
          maxWidth={false} 
          sx={{ px: { xs: 2, md: "196px" }, maxWidth: "1512px", margin: "0 auto" }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 className="faq-title">FAQs</h2>
              <p className="faq-subtitle">
                Answers to common questions about buyers agents and how they work.
              </p>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq) => {
                const isOpen = activeId === faq.id;
                return (
                  <Box 
                    key={faq.id} 
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    onMouseEnter={() => setActiveId(faq.id)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    <div className="faq-question-area">
                      <span className="faq-question-text">{faq.question}</span>
                      <svg
                        className={`faq-chevron ${isOpen ? "open" : ""}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className={`faq-drawer ${isOpen ? "open" : ""}`}>
                      <div className="faq-drawer-inner">
                        <div className="faq-answer">
                          <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Box>
                );
              })}
            </Box>

            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <button className="view-all-btn">VIEW ALL FAQS</button>
            </Box> */}
          </Box>
        </Container>
      </Box>
    </>
  );
}