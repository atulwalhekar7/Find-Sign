import { useEffect, useRef, useState, useCallback } from "react";

const reviews = [
  {
    name: "Rok Son",
    headline: "Professional &\nknowledgeable",
    text: "Working with Niki was an absolute pleasure from start to finish. He's professional, knowledgeable, and genuinely invested in finding the perfect property for his clients.",
  },
  {
    name: "Amit Bhardwaj",
    headline: "One of the best\ndecisions we made",
    text: "Having Niki as our buyer's agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us.",
  },
  {
    name: "Oshi Thilakarathna",
    headline: "Fantastic—\nprofessional, proactive",
    text: "Niki was fantastic—professional, proactive, and got the deal done smoothly. He made the whole process easy, and settlement was completely stress-free.",
  },
  {
    name: "Rinzin Wangchuk",
    headline: "Goes way above\nyour needs",
    text: "Niki is very professional and goes way above your needs. He provided us a detailed market scenario which greatly helped us in deciding where to buy in Perth.",
  },
  {
    name: "Dayna Bechar",
    headline: "Total confidence\nthroughout",
    text: "Niki's market knowledge and clear communication gave us total confidence throughout. Thanks to Niki, we found our dream home without any stress. Highly recommend!",
  },
  {
    name: "Subho Ghosh",
    headline: "Honest advice,\nzero pressure",
    text: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile. Honest advice, great communication, and zero pressure.",
  },
  {
    name: "Kien Lam",
    headline: "The best in\nthe business",
    text: "Niki is the best in the business. He has the best negotiating skills and can get you the best price for the property.",
  },
  {
    name: "Jay Dass",
    headline: "Seamless,\nwell-managed",
    text: "From our first conversation through to completion, the process was seamless, well-managed and clearly communicated at every step. An absolute pleasure to work with.",
  },
  {
    name: "Sahil Saini",
    headline: "A bargain\nsecured",
    text: "Niki is professional and great to work with. Not to mention the bargain he was able to secure for the property. His communication has been great throughout.",
  },
  {
    name: "Kush Hirani",
    headline: "Above and\nbeyond",
    text: "Very pleased with Niki & Rebecca's service. Quick responses and always going above and beyond to make sure I found the right property. Doesn't pressure you at all.",
  },
];

const CARD_WIDTH = 352;
const CARD_GAP = 24;
const VISIBLE = 3;

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const maxIndex = reviews.length - VISIBLE;

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, maxIndex));
      setIndex(clamped);
    },
    [maxIndex]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`;
    }
  }, [index]);

  const handleNav = (dir: number) => {
    goTo(index + dir);
    resetTimer();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .fns-section {
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          padding: 60px 196px;
          box-sizing: border-box;
          width: 100%;
        }

        .fns-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 48px;
        }

        .fns-header-left h2 {
          font-family: "H2-GT Super";
    font-size: clamp(28px, 3vw, 44px);
    font-weight: 500;
    color: rgb(0, 51, 39);
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin-bottom: 10px;
        }

        .fns-header-left p {
          font-family: "B1-Söhne Leicht";
    font-size: 15px;
    font-weight: 300;
    color: rgb(85, 85, 85);
    line-height: 1.6;
        }

        .fns-arrows {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .fns-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #BBBBBB;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111111;
          padding: 0;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          flex-shrink: 0;
        }

        .fns-arrow-btn:hover:not(:disabled) {
          border-color: #111111;
          background: #111111;
          color: #ffffff;
        }

        .fns-arrow-btn:disabled {
          opacity: 0.28;
          cursor: default;
        }

        .fns-slider-outer {
          overflow: hidden;
        }

        .fns-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fns-card {
          min-width: ${CARD_WIDTH}px;
          max-width: ${CARD_WIDTH}px;
          min-height: 440px;
          background: #1A3D2B;
          border-radius: 16px;
          padding: 36px 32px 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-shrink: 0;
        }

        .fns-stars {
          color: #C9A96E;
          font-size: 17px;
          letter-spacing: 3px;
          line-height: 1;
        }

        .fns-card-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 500;
          line-height: 1.25;
          color: #ffffff;
          margin: 0;
          white-space: pre-line;
        }

        .fns-card-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.7);
          flex: 1;
          margin: 0;
        }

        .fns-card-name {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .fns-cta-row {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .fns-cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 500;
          color: #111111;
          background: transparent;
          border: 1px solid #111111;
          padding: 14px 36px;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, color 0.2s;
        }

        .fns-cta-btn:hover {
          background: #111111;
          color: #ffffff;
        }
      `}</style>

      <section className="fns-section">
        {/* Header */}
        <div className="fns-header">
          <div className="fns-header-left">
            <h2>What clients say</h2>
            <p>In their own words, following their experience with Niki.</p>
          </div>

          {/* Figma-style circle chevron arrows */}
          <div className="fns-arrows">
            <button
              className="fns-arrow-btn"
              onClick={() => handleNav(-1)}
              disabled={index <= 0}
              aria-label="Previous reviews"
            >
              <ChevronLeft />
            </button>
            <button
              className="fns-arrow-btn"
              onClick={() => handleNav(1)}
              disabled={index >= maxIndex}
              aria-label="Next reviews"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="fns-slider-outer">
          <div className="fns-track" ref={trackRef}>
{reviews.map((review, i: number) => (
              <div key={i} className="fns-card">
                <div className="fns-stars">★★★★★</div>
                <p className="fns-card-headline">{review.headline}</p>
                <p className="fns-card-body">{review.text}</p>
                <p className="fns-card-name">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fns-cta-row">
          <button className="fns-cta-btn">View more feedback</button>
        </div>
      </section>
    </>
  );
};

export default Reviews;