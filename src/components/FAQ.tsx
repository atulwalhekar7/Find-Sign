import { useState } from "react";
import { Box, Grid, Container } from "@mui/material";

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

        .faq-title {
          color: var(--FS-RACING-GREEN, #073B2F);
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-style: normal;
          font-weight: 500;
          line-height: 54px;
          letter-spacing: -0.88px;
        }

        .faq-subtitle {
          color: #000;
          font-family: "Sohne";
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          line-height: 36px;
          margin-top: 8px;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 12px;
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
          color: var(--FS-BLACK, #000);
          font-size: 20px;
          font-style: normal;
          line-height: 28px;
          flex: 1 0 0;
          font-family: 'Sohne';
          font-weight: 400;
        }

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

        .faq-answer {
          display: flex;
          padding: 0px 24px 24px 24px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          border-top: 1px solid #E8E4DC;
        }

        .faq-answer-text {
          flex: 1 0 0;
          color: var(--FS-System-Grey-1, #757575);
          font-family: "Sohne";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          padding-top: 24px;
        }

        .view-all-btn {
          display: inline-flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid var(--Brand-Contrast-FS-AQUA, #69E4DC);
          color: var(--FS-RACING-GREEN, #073B2F);
          font-family: 'CX80';
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          background: white;
          cursor: pointer;
        }
        .view-all-btn:hover {
          background: #073B2F;
          color: #F5F2ED;
        }

        @media (max-width: 600px) {
          .faq-title { font-size: 32px; line-height: 42px; }
          .faq-subtitle { font-size: 18px; line-height: 28px; }
          .faq-question-text { font-size: 16px; }
          .faq-answer-text { font-size: 16px; }
        }
      `}</style>

      {/* ── PAGE WRAPPER ── */}
      <Box
        sx={{
          background: "#F9F9F9",
          width: "100%",
          py: { xs: "40px", md: "64px" },
          px: { xs: "20px", md: "0px" },
        }}
      >
        {/* ── MAX WIDTH CONTAINER ── */}
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 0, md: "196px" }, maxWidth: "1512px !important" }}>

          <Grid container spacing={0} direction="column" sx={{ gap: "48px" }}>

            {/* ── HEADER ROW ── */}
<Grid item xs={12}>
  <Grid container direction="column" sx={{ gap: "8px" }}>
    <Grid item xs={12}>
      <h2 className="faq-title">FAQs</h2>
    </Grid>
    <Grid item xs={12}>
      <p className="faq-subtitle">
        Answers to common questions about the process and how we work.
      </p>
    </Grid>
  </Grid>
</Grid>

            {/* ── ACCORDION LIST ROW ── */}
            <Grid item xs={12}>
              <Grid container spacing={0} direction="column" sx={{ gap: "16px" }}>
                {faqs.map((faq) => {
                  const isOpen = activeId === faq.id;
                  return (
                    <Grid item xs={12} key={faq.id}>
                      <div className="faq-item">
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
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            {/* ── CTA ROW ── */}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <button className="view-all-btn">VIEW ALL FAQS</button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  );
}