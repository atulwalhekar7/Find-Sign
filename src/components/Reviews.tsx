import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Quote } from "lucide-react";
import starIcon from "../assets/Union.png";
import roksonImg from "../assets/testomonials/Rokson.png";
import sahilSainiImg from "../assets/testomonials/Sahil Saini.png";
import rinzinWangchukImg from "../assets/testomonials/Rinzin Wangchuk.png";
import prashanthNayarImg from "../assets/testomonials/Prashanth Nayar.png";
import zedAImg from "../assets/testomonials/Zed A.png";
import kumarVasindaImg from "../assets/testomonials/Kumar Vasinda Comara.png";
import fatemaManasawalaImg from "../assets/testomonials/fatema manasawala.png";
import gurinderSinghImg from "../assets/testomonials/Gurinder Singh.png";
import kienLamImg from "../assets/testomonials/Kien Lam.png";

const reviewsData = [
  { name: "Rok Son", date: "5 months ago", title: "Absolute pleasure from start to finish", body: "Working with Niki was an absolute pleasure from start to finish. He's professional, knowledgeable, and genuinely invested in finding the perfect property for his clients.", image: roksonImg },
  { name: "Amit Bhardwaj", date: "2 months ago", title: "One of the best decisions we made", body: "Having Niki as our buyer's agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us." },
  { name: "Raveen Liyanage", date: "a month ago", title: "Pleasure doing business with you", body: "Hi Niki, It was a pleasure doing business with you. Your genuine commitment to looking after your clients, while also ensuring the process runs smoothly for everyone involved, truly stands out. You consistently strive to find practical." },
  { name: "Sahil Saini", date: "4 months ago", title: "Professional and great to work with", body: "Niki is professional and great to work with. His communication has been great for one of our clients to source a property before Christmas and met all deadlines. Not to mention the bargain he was able to secure for the property.", image: sahilSainiImg },
  { name: "Rinzin Wangchuk", date: "3 months ago", title: "Very professional and goes way above your needs", body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn't know where to begin.", image: rinzinWangchukImg },
  { name: "Prashanth Nayar", date: "5 months ago", title: "Thorough market insights and dedicated due-diligence", body: "As a selling-agent based in Perth, I've found that Niki brings thorough market insights, dedicated due-diligence and a genuine commitment to finding the right property for his clients.", image: prashanthNayarImg },
  { name: "Gian Ottavio", date: "2 months ago", title: "Nothing but professional", body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way." },
  { name: "Karen Rowley", date: "5 months ago", title: "Absolutely fantastic experience", body: "We had an absolutely fantastic experience working with Niki as a Buyer's agent. He was very professional and always communicated well with ourselves and his clients throughout the process." },
  { name: "dayna bechar", date: "5 months ago", title: "Absolute pleasure to work with", body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. Highly recommend!" },
  { name: "Jay DASS", date: "4 months ago", title: "Seamless, well-managed and clearly communicated", body: "Niki from Nakrani Property Buyers was an absolute pleasure to work with. From our first conversation through to completion, the process was seamless, well-managed and communicated clearly at every step." },
  { name: "Zed A", date: "5 months ago", title: "Massive asset, highly recommend", body: "My team and I have worked with Nikki from Nakrani Property on many transactions. He excels at educating his clients and securing the best deals. Having Nikki on your side is a massive asset, and I highly recommend him to anyone buying a property in Perth", image: zedAImg },
  { name: "Josh Mezger", date: "3 months ago", title: "A Bespoke, High-Touch Experience", body: "What truly defines Nakrani Property Buyers is the white-glove service. Niki is: Proactive: He anticipates hurdles before they arise. Transparent: You are never left wondering where a deal stands; his communication is frequent, clear, and honest." },
  { name: "salam ishikura", date: "5 months ago", title: "Fantastic professional, proactive", body: "I recently worked with Niki, and he was fantastic professional, proactive, and incredibly easy to communicate with. He genuinely looks after his clients and makes the whole process smooth and stress free." },
  { name: "Kumar Vasinda Comara", date: "7 months ago", title: "Great experience from start to finish", body: "As the seller's agent, I had the pleasure of working with Niki from Nakrani Property, and it was a great experience from start to finish.", image: kumarVasindaImg },
  { name: "Subho Ghosh", date: "2 months ago", title: "Absolute legends", body: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile to help us find our dream home. Honest advice, great communication, and zero pressure." },
  { name: "Jasmine cheema", date: "6 months ago", title: "Truly exceptional at what he does", body: "I recently had the opportunity to work with Niki, and I must say he is truly exceptional at what he does. He consistently puts his clients first and goes above and beyond to ensure they feel supported throughout the entire process." },
  { name: "fatema manasawala", date: "4 months ago", title: "Professionalism speaks for himself", body: "I have had the pleasure to work with Niki at various occassiona for his clients. His work and professionalism speaks for himself. I highly recommend him to local /overseas and interstae investors & owner as a reputable Buyers agent in Perth.", image: fatemaManasawalaImg },
  { name: "Gurinder Singh", date: "4 months ago", title: "Great experience working with Niki", body: "Great experience working with Niki on this transaction. Everything ran smoothly from start to finish. Niki has a strong understanding of the market, communicated clearly, and was professional throughout. A pleasure to deal with.", image: gurinderSinghImg },
  { name: "P Y", date: "4 months ago", title: "Hands-on approach and professionalism", body: "What really stood out about Niki compared to other buyer's agents I spoke with was his hands-on approach and professionalism from the very beginning. I was unsure about using a buyer's agent at first, but after our first call it was clear." },
  { name: "Julie", date: "7 months ago", title: "Absolute professional to deal with", body: "I had the pleasure of working with Niki recently when he brought a buyer through one of our home opens. He was an absolute professional to deal with—clearly dedicated to his clients' best interests while also ensuring the process remained." },
  { name: "Tom Miszczak", date: "5 months ago", title: "Excellent from start to finish", body: "Niki and the Nakrani team were excellent from start to finish. As a Selling Agent, it's great to see such professionalism from a Buyers Agent in the WA market. We look forward to working together in the future." },
  { name: "Kathy Moore", date: "7 months ago", title: "High level of professionalism, communication and efficiency", body: "I recently dealt with Niki for a property I was selling in Connolly, where he was representing the buyers. The whole process went smoothly, due to Niki's high level of professionalism, communication and efficiency." },
  { name: "Oshi Thilakarathna", date: "5 months ago", title: "Fantastic—professional, proactive, and got the deal done smoothly.", body: "Niki was fantastic—professional, proactive, and got the deal done smoothly. He made the whole process easy, and settlement was stress-free. Highly recommend!" },
  { name: "Travis Ranieri", date: "10 months ago", title: "Ongoing support through our property investment journey", body: "As a Buyers Agent Niki provided ongoing support through our property investment journey, delivering insights and become a trusted advisor for our family. Seamless process, highly recommend leveraging Niki and his team." },
  { name: "Kien Lam", date: "8 months ago", title: "Best in the business", body: "Niki is the best in the business. He has the best negotiating skills and can get you the best price for the property.", image: kienLamImg },
  { name: "Kush Hirani", date: "4 months ago", title: "Very pleased with Niki & Rebecca's service", body: "Very pleased with Niki & Rebecca's service. Quick responses and always going above and beyond to make sure I found the right property. Niki is thorough on all the home opens to point out any potential issues and doesn't pressure you at all" },
];

const formatReviewBody = (text: string) => {
  if (text.endsWith("…More")) {
    return text.substring(0, text.length - 5).trim();
  }
  return text;
};

const formattedReviews = reviewsData.map(review => ({
  ...review,
  body: formatReviewBody(review.body),
}));

// Layout constants
const CARD_GAP = 32;
const ROW_GAP = 32;
const CARD_WIDTH = 360;
const CARD_HEIGHT = 407;
const COLS = 3;
const ROWS = 2;
const PAGE_SIZE = COLS * ROWS; // 6 cards per page

const App = () => {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateBreakpoint = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w > 768 && w <= 1100);
    };
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  // On mobile: 1 card per page, tablet: 2 cards per page, desktop: 6 (3x2)
  const effectivePageSize = isMobile ? 1 : isTablet ? 2 : PAGE_SIZE;
  const totalPages = Math.ceil(formattedReviews.length / effectivePageSize);
  const maxPageIndex = Math.max(0, totalPages - 1);

  const goTo = useCallback((idx: number) => {
    setPageIndex(Math.max(0, Math.min(idx, maxPageIndex)));
  }, [maxPageIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setPageIndex((prev) => (prev >= maxPageIndex ? 0 : prev + 1));
    }, 4500);
  }, [maxPageIndex]);

  useEffect(() => {
    if (pageIndex > maxPageIndex) goTo(0);
  }, [maxPageIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleNav = (dir: number) => {
    const next = (pageIndex + dir + totalPages) % totalPages;
    goTo(next);
    resetTimer();
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .rev-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          padding: 0 100px;
          box-sizing: border-box;
        }
        @media (max-width: 1199px) { .rev-grid { column-gap: 32px; padding: 0 48px; } }
        @media (max-width: 767px)  { .rev-grid { grid-template-columns: repeat(4, 1fr); column-gap: 16px; padding: 0 20px; } }

        .rev-full { grid-column: 1 / -1; }

        .npb-card {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          padding: 24px;
          width: ${CARD_WIDTH}px;
          min-width: ${CARD_WIDTH}px;
          height: ${CARD_HEIGHT}px;
          border-radius: 24px;
          background: #FFFFFF;
          border: 1px solid #69E4DC;
          box-sizing: border-box;
          box-shadow: none;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .npb-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.5);
          border-color: #69E4DC;
          overflow: visible;
        }

        .avatar-circle {
          transition: all 0.3s ease;
        }
        .npb-card:hover .avatar-circle {
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.6);
          border-color: #69E4DC !important;
          transform: scale(1.05);
        }

        .rev-slider-track {
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .rev-arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(11, 215, 205, 0.96);
          background: white;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: all 0.25s ease;
          flex-shrink: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .rev-arrow-btn.prev { left: -60px; }
        .rev-arrow-btn.next { right: -60px; }
        .rev-arrow-btn:hover:not(:disabled) {
          transform: translateY(-50%) scale(1.05);
          background: #073B2F;
          color: white;
          border-color: #073B2F;
        }
        .rev-arrow-btn:disabled { opacity: 0.2; cursor: default; }

        .rev-cta-btn {
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
        .rev-cta-btn:hover {
          background: #69E4DC;
          color: #073B2F;
          border-color: #69E4DC;
        }

        .rev-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #D0C9C0;
          border: none; padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .rev-dot.active { background: #073B2F; width: 24px; border-radius: 4px; }

        .rev-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 24px;
          align-items: flex-start;
        }
        .rev-title-group { grid-column: 1 / -1; }

        .rev-heading {
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          font-style: normal;
          color: #073B2F;
          line-height: 54px;
          letter-spacing: -0.88px;
          font-variant-numeric: lining-nums proportional-nums;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          width: fit-content;
          text-align: center;
        }
        .rev-subheading {
          color: #000;
          font-family: 'Sohne';
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          margin: 24px 0 0;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .rev-header { column-gap: 32px; }
          .rev-heading  { font-size: 36px !important; line-height: 46px !important; }
          .rev-subheading { font-size: 20px !important; line-height: 30px !important; }
          .npb-card { height: auto; min-height: ${CARD_HEIGHT}px; min-width: unset !important; }
          .rev-arrow-btn.prev { left: -44px; }
          .rev-arrow-btn.next { right: -44px; }
        }

        @media (min-width: 769px) and (max-width: 1100px) {
          .npb-card { width: calc((100% - ${CARD_GAP}px) / 2) !important; }
        }

        @media (max-width: 767px) {
          .rev-header { grid-template-columns: 1fr; column-gap: 0; row-gap: 16px; }
          .rev-title-group { grid-column: 1 / -1; }
          .rev-arrow-btn { display: none; }
          .rev-heading  { font-size: 28px !important; line-height: 38px !important; letter-spacing: -0.5px !important; }
          .rev-subheading { font-size: 16px !important; line-height: 26px !important; }
          .npb-card { height: auto; min-height: ${CARD_HEIGHT}px; width: 100% !important; min-width: unset !important; }
        }
      `}</style>

      <section style={{
        background: "#ffffff",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 0",
        gap: "40px",
        boxSizing: "border-box",
        fontFamily: "'DM Sans'",
      }}>

        {/* ── HEADER ── */}
        <div className="rev-grid">
          <div className="rev-full">
            <div className="rev-header" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="rev-title-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="rev-heading">
                  What Clients Say
                  <div style={{ width: "160px", height: "1px", background: "#073B2F" }} />
                </h2>
                <p className="rev-subheading">In their own words, following their experience with Niki.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <SliderSection
          pageIndex={pageIndex}
          isMobile={isMobile}
          isTablet={isTablet}
          goTo={goTo}
          resetTimer={resetTimer}
          maxPageIndex={maxPageIndex}
          handleNav={handleNav}
          totalPages={totalPages}
          effectivePageSize={effectivePageSize}
        />

        {/* ── CTA ── */}
        <button
          className="rev-cta-btn"
          onClick={() => navigate("/client-outcomes#testimonials")}
        >
          View more feedback
        </button>

      </section>
    </div>
  );
};

interface SliderSectionProps {
  pageIndex: number;
  isMobile: boolean;
  isTablet: boolean;
  goTo: (idx: number) => void;
  resetTimer: () => void;
  maxPageIndex: number;
  handleNav: (dir: number) => void;
  totalPages: number;
  effectivePageSize: number;
}

const SliderSection = ({
  pageIndex,
  isMobile,
  isTablet,
  goTo,
  resetTimer,
  maxPageIndex,
  handleNav,
  totalPages,
  effectivePageSize,
}: SliderSectionProps) => {
  const isDesktop = !isMobile && !isTablet;

  // Desktop: page width = 3 cards + 2 gaps between them
  const PAGE_WIDTH = COLS * CARD_WIDTH + (COLS - 1) * CARD_GAP;
  // Shift by full page width + 1 gap (between pages) per page
  const desktopOffset = pageIndex * (PAGE_WIDTH + CARD_GAP);

  // For mobile/tablet: simple per-card offset
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const mobileOffset = pageIndex * (containerWidth + CARD_GAP);

  // Number of columns in the grid track (desktop only)
  // Each page occupies COLS columns; total columns = pages * COLS
  const totalGridCols = Math.ceil(formattedReviews.length / ROWS);

  return (
    <>
      <div className="rev-grid" style={{ rowGap: 0 }}>
        <div className="rev-full" style={{ position: "relative" }}>

          {/* Left arrow */}
          <button
            className="rev-arrow-btn prev"
            onClick={() => handleNav(-1)}
            aria-label="Previous slide"
            disabled={pageIndex === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className="rev-arrow-btn next"
            onClick={() => handleNav(1)}
            aria-label="Next slide"
            disabled={pageIndex === maxPageIndex}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Overflow clip wrapper */}
          <div ref={containerRef} style={{ overflow: "hidden", padding: "40px 0", margin: "-40px 0" }}>

            {isDesktop ? (
              /* ── DESKTOP: 2-row CSS Grid track ── */
              <div
                className="rev-slider-track"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${totalGridCols}, ${CARD_WIDTH}px)`,
                  gridTemplateRows: `repeat(${ROWS}, ${CARD_HEIGHT}px)`,
                  gridAutoFlow: "column",
                  columnGap: `${CARD_GAP}px`,
                  rowGap: `${ROW_GAP}px`,
                  transform: `translateX(-${desktopOffset}px)`,
                }}
              >
                {formattedReviews.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </div>
            ) : (
              /* ── MOBILE / TABLET: single-row flex track ── */
              <div
                className="rev-slider-track"
                style={{
                  display: "flex",
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(-${mobileOffset}px)`,
                }}
              >
                {formattedReviews.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── DOTS ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        width: "100%",
      }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {Array.from({ length: Math.min(8, totalPages) }).map((_, i) => (
            <button
              key={i}
              className={`rev-dot${i === pageIndex ? " active" : ""}`}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

/* ── Single Review Card ── */
interface ReviewCardProps {
  review: typeof formattedReviews[0];
}

const ReviewCard = ({ review }: ReviewCardProps) => (
  <div className="npb-card">

    {/* Quote watermark */}
    <Quote
      style={{
        color: 'rgba(11, 215, 205, 0.10)',
        position: 'absolute',
        top: '20px',
        right: '20px',
        pointerEvents: 'none',
      }}
      size={48}
    />

    {/* ── TOP: pill ── */}
    <div style={{
      display: 'flex',
      height: '45px',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      flexShrink: 0,
      borderRadius: '12px',
      background: '#69E4DC',
      color: '#073B2F',
      fontSize: '12px',
      fontWeight: 700,
      maxWidth: '85%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'SohneBuch',
      marginBottom: '10px',
    }}>
      {review.title}
    </div>

    {/* ── STARS ── */}
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px', flexShrink: 0, marginBottom: '10px' }}>
      <img
        src={starIcon}
        alt="5 stars"
        style={{ width: '177px', height: '32.336px', flexShrink: 0, objectFit: 'contain' }}
      />
    </div>

    {/* ── BODY ── */}
    <p style={{
      width: '100%',
      color: '#000',
      fontFamily: 'SohneBuch',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '12px',
      display: '-webkit-box',
      WebkitLineClamp: 5,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
    }}>
      "{review.body}"
    </p>

    {/* ── BOTTOM: avatar + name + date ── */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderTop: '1px solid #f3f4f6',
      paddingTop: '12px',
      marginTop: 'auto',
      width: '100%',
      position: 'relative',
      zIndex: 1,
      flexShrink: 0,
    }}>
      <div
        className="avatar-circle"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid white',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {review.image ? (
          <img
            src={review.image}
            alt={review.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5" />
            <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div>
        <h4 style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          color: '#111827',
          margin: 0,
          fontFamily: 'SohneBuch',
        }}>
          {review.name}
        </h4>
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          color: '#073B2F',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginTop: '2px',
          fontFamily: 'CX80',
        }}>
          {review.date}
        </p>
      </div>
    </div>

  </div>
);

export default App;