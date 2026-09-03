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
    question: "What does a buyer’s agent in Perth do?",
    answer:
      "A buyer’s agent in Perth represents buyers exclusively in property transactions, not sellers. We search, evaluate and negotiate on your behalf, using local market knowledge to help you secure the right property at the right price.",
  },

  {
    id: 2,
    question: "Why should I use a Perth buyer’s agent instead of buying on my own?",
    answer:
      "The Perth property market isn’t always a level playing field, and buying alone can be challenging. While you’re searching through listings, experienced buyers may already be securing off-market opportunities before they reach the wider market. A Perth buyer’s agent changes this dynamic by providing better access, sharper negotiation and someone in your corner throughout the buying process.",
  },

  {
    id: 3,
    question: "What challenges do property buyers face in the Perth market?",
    answer:
      "The Perth property market moves quickly, with limited stock, competitive bidding and off-market opportunities creating challenges for buyers. We cut through the noise by identifying verified property opportunities and providing access to suitable properties before they reach the wider market.",
  },

  {
    id: 4,
    question: "How does a buyer’s agent in Perth help secure the right property?",
    answer:
      "A buyer’s agent in Perth manages the complete property buying process, from understanding your goals and sourcing suitable properties to inspections, evaluation, negotiation and settlement coordination. You have someone representing your best interests at every stage.",
  },

  {
    id: 5,
    question: "Do you inspect every property before recommending it?",
    answer:
      "Yes. We physically inspect every property we recommend and assess it against your specific requirements. We don’t simply send you listings; we send you properties we’d be confident recommending to a friend.",
  },

  {
    id: 6,
    question: "Where should I invest in Perth?",
    answer:
      "Choosing the right location depends on your investment strategy, budget and long-term goals. We analyse areas with strong fundamentals, including limited supply, infrastructure growth, rental demand and access to key amenities. We provide tailored guidance to help you identify property opportunities aligned with your objectives.",
  },

  {
    id: 7,
    question: "How much does a buyer’s agent in Perth cost?",
    answer:
      "Our buyer’s agent fees are transparent and agreed upfront. We typically charge a flat engagement fee plus a success fee at settlement. Through careful property selection and negotiation, many clients find the savings we achieve help offset our fee.",
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
              <h2 className="faq-title" tabIndex={0}>Frequently asked questions</h2>
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