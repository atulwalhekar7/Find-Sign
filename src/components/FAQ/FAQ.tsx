import { useState } from "react";
import { Box, Container } from "@mui/material";
import "./FAQ.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [

  {
    id: 1,
    question: "What is a buyer's advocate and buyer's agent?",
    answer:
      "A buyer's advocate (also called a buyer's agent) is a licensed professional who represents the buyer exclusively in a property transaction not the seller. We search, evaluate, and negotiate on your behalf, using our market knowledge to get you the right property at the right price.",
  },

  {
    id: 2,
    question: "Why use a buyer's advocate and buyer's agent instead of searching independently?",
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
    question: "What does a buyer's advocate and buyer's agent actually do?",
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
    question: "How much does a buyer's advocate and buyer's agent cost?",
    answer:
      "Our fees are transparent and agreed upfront. We typically charge a flat engagement fee plus a success fee on settlement. Many clients find the savings we achieve in negotiation more than offset our fee meaning we often pay for ourselves.",
  },

];
export default function FindSignFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <>
      <Box sx={{ background: "#F9F9F9", width: "100%",  py: { xs: 8, md: 8 } }}>
        <Container 
          maxWidth={false} 
          sx={{ px: { xs: 2, md: "130px" }, maxWidth: "1512px", margin: "0 auto" }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 className="faq-title" tabIndex={0}>FAQs</h2>
              <p className="faq-subtitle" tabIndex={0}>
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
                      <span className="faq-question-text" tabIndex={0}>{faq.question}</span>
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
                          <p className="faq-answer-text" tabIndex={0}>{faq.answer}</p>
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