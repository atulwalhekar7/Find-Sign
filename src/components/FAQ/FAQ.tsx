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
      "The Perth property market isn't always a level playing field, and buying alone can be challenging. While you're searching through listings, experienced buyers may already be securing off-market opportunities before they reach the wider market. A Perth buyer advocate changes this dynamic by providing better access, expert negotiation, valuable market insights and professional support to help you secure the right property with confidence.",
  },

  {
    id: 3,
    question: "What challenges do property buyers face in the Perth market?",
    answer:
      "The Perth property market moves quickly, with limited stock, competitive bidding and off-market opportunities creating challenges for buyers. A trusted Perth buyer agent helps you navigate the market by identifying verified property opportunities and providing access to suitable properties before they reach the wider market.",
  },

  {
    id: 4,
    question: "What does a buyer's advocate and buyer's agent actually do?",
    answer:
      "A Perth buyer agent manages the complete property buying process, from understanding your goals and sourcing suitable properties to inspections, evaluation, negotiation and settlement coordination. You receive expert guidance at every stage, with a professional always representing your best interests.",
  },

  {
    id: 5,
    question: "Do you inspect every property before recommending it?",
    answer:
      "Yes. Every property we recommend is physically inspected and carefully assessed against your specific requirements. We don't simply share listings; we recommend properties we would confidently consider for our own clients and network.",
  },

  {
    id: 6,
    question: "Where should I invest?",
    answer:
      "Choosing the right location depends on your investment strategy, budget and long-term goals. As an experienced Perth buyer advocate, we analyse areas with strong fundamentals, including limited supply, infrastructure growth, rental demand and access to key amenities. We provide tailored guidance to help you identify property opportunities aligned with your objectives.",
  },

  {
    id: 7,
    question: "How much does a buyer's advocate and buyer's agent cost?",
    answer:
      "Our fees are transparent and agreed upfront. We typically charge a flat engagement fee plus a success fee at settlement. Through expert property selection and negotiation, many clients find the savings we achieve help offset our fee.",
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