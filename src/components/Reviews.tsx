import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import starIcon from "../assets/Union.png";
import roksonImg from "../assets/testomonials/Rokson.png";
import rinzinWangchukImg from "../assets/testomonials/Rinzin Wangchuk.png";


const reviewsData = [
  { name: "Rok Son",              date: "5 months ago",  title: "Absolute pleasure from start to finish", body: "Working with Niki was an absolute pleasure from start to finish. He's professional, knowledgeable, and genuinely invested in finding the perfect property for his clients. From our first meeting, Niki took the time to understand exactly what I was looking for — my budget.", image: roksonImg },
  { name: "Amit Bhardwaj",        date: "2 months ago",  title: "One of the best decisions we made",       body: "Having Niki as our buyer's agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us. He listened, guided us with confidence, and made what could have been a stressful process feel calm and manageable." },
  { name: "Rinzin Wangchuk",      date: "3 months ago",  title: "Goes way above your needs",               body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn't know where to begin.", image: rinzinWangchukImg },
  { name: "dayna bechar",         date: "5 months ago",  title: "Absolute pleasure to work",               body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. He was always available to answer questions and offer advice. Thanks to Niki, we found our dream home without any stress. Highly recommend!" },
  { name: "Gian Ottavio",             date: "3 months ago",  title: "professional in all",                  body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way." },
  { name: "Karen Rowley",                date: "6 months ago",  title: " fantastic experience working with Niki",         body: "We had an absolutely fantastic experience working with Niki as a Buyer’s agent. He was very professional and always communicated well with ourselves and his clients throughout the process." },
  { name: "Kush Hirani",          date: "5 months ago",  title: "Quick responses",        body: "Very pleased with Niki & Rebecca’s service. Quick responses and always going above and beyond to make sure I found the right property. " },
  { name: "Vince Collova",       date: "4 months ago",  title: "Right from the start there communication",       body: "Right from the start there communication was amazing and prompt. The whole team were very friendly and professional. They understood what we were after and made sure we got the deal of the century." },
  { name: "Afsal Mansuri", date: "a Year ago",  title: "From our very first meeting",   body: "We had the pleasure of working with Niki and the team as my buyer's agent, and I cannot recommend them enough!From our very first meeting." },
  { name: "Subho Ghosh",          date: "2 months ago",  title: "Absolute legends",                        body: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile to help us find our dream home. Honest advice, great communication, and zero pressure. Couldn't have asked for better agents to guide us through the process. Highly recommend them." },
  { name: "Bhaskara M",       date: "8 months ago",  title: " negotiated a great deal",      body: "We had the pleasure of working with Niki Nakrani Property Buyers during our recent property purchase. Their market knowledge, attention to detail, and genuine care made the entire process seamless. They listened to our needs, found us the perfect property, and negotiated a great deal." },
  { name: "jigar faldu",       date: "a Year ago",  title: "services to purchase their",      body: "My wife and I don't understand real estate and are definitely not negotiators. We met Niki through a friend who used his services to purchase their first home. As first home buyers, we had been in the market for a few months without success." },
  { name: "P Y",                  date: "4 months ago",  title: "Hands-on approach and professionalism",   body: "What really stood out about Niki compared to other buyer's agents I spoke with was his hands-on approach and professionalism from the very beginning. I was unsure about using a buyer's agent at first, but after our first call it was clear." },
  { name: "Frank Boitano",       date: "8 months ago", title: "Niki is the man you need",                 body: "Niki is the man you need if you want to get things done He is connected and knows the Perth Market.He works tirelessly to get results for his clients and delivers." },
  { name: "SUDHIR KHUT",             date: "10 months ago",  title: " I've opted for a buyers agent",                   body: "Well its true that good things comes in small packages. As a property investor this is the first time I've opted for a buyers agent. Right from beginning value addition was seen; some key highlights of Niki's service was property insites." },
];

const formatReviewBody = (text: string) => {
  if (text.endsWith("…More")) return text.substring(0, text.length - 5).trim();
  return text;
};

const formattedReviews = reviewsData.map(review => ({
  ...review,
  title: review.title.trim(),
  body: formatReviewBody(review.body),
}));

const CARD_GAP = 32;
const CARD_HEIGHT = 407;
const MOBILE_LEFT_PAD = 24;
const PEEK = 56;

const Testimonials = () => {
  const navigate = useNavigate();
  const [reviewIdx, setReviewIdx] = useState(0);
  const [isMobile, setIsMobile]   = useState(false);
  const [isTablet, setIsTablet]   = useState(false);
  const [offset, setOffset]       = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const rafRef   = useRef<number | null>(null);

  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const maxReviewIdx = Math.max(0, formattedReviews.length - visibleCount);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1100);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setReviewIdx(prev => Math.min(prev, maxReviewIdx));
  }, [maxReviewIdx]);

  useEffect(() => {
    const recalc = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!trackRef.current) return;
        const first = trackRef.current.querySelector<HTMLElement>(".npb-card");
        if (!first) return;
        const cardW = first.getBoundingClientRect().width;
        if (cardW === 0) return;
        setOffset(reviewIdx * (cardW + CARD_GAP));
      });
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reviewIdx, isMobile, isTablet]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setReviewIdx(prev => (prev >= maxReviewIdx ? 0 : prev + 1));
    }, 4500);
  }, [maxReviewIdx]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goTo = useCallback((idx: number) => {
    setReviewIdx(Math.max(0, Math.min(idx, maxReviewIdx)));
  }, [maxReviewIdx]);

  const handleNav = useCallback((dir: number) => {
    goTo(reviewIdx + dir);
    resetTimer();
  }, [reviewIdx, goTo, resetTimer]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance to be considered a swipe
    if (diff > threshold) handleNav(1);
    if (diff < -threshold) handleNav(-1);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const cardFlexBasis = isMobile
    ? `calc(100% - ${CARD_GAP}px - ${PEEK}px)`
    : `calc((100% - ${CARD_GAP}px * ${visibleCount - 1}) / ${visibleCount})`;

  return (
    <div style={{ width: "100%" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /*
         * PEEK ARCHITECTURE
         * ─────────────────
         * .rev-outer-wrapper  overflow-x: clip  → no page scrollbar; peek card still renders
         * .rev-bg-section     full width, background, overflow: visible
         * .rev-inner-section  max-width + padding. On mobile: right padding = 0 so the
         *                     track can bleed to the screen edge. Left pad = MOBILE_LEFT_PAD.
         * .rev-slider-viewport  overflow: visible on mobile (does NOT clip the peek card)
         * Card width = 100% - GAP - PEEK → next card peeks by exactly PEEK px
         */

        .rev-outer-wrapper {
          width: 100%;
          overflow-x: clip;
        }

        .rev-bg-section {
          width: 100%;
          background: #EAE5DF;
          overflow: visible;
        }

        .rev-inner-section {
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 100px;
          gap: 40px;
          overflow: visible;
        }

        .rev-header-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .rev-heading {
          font-family: 'GT Super Display Medium';
          font-size: 44px;
          font-weight: 500;
          color: #073B2F;
          line-height: 54px;
          letter-spacing: -0.88px;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        .rev-heading::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
        }
        .rev-subheading {
          color: #000;
          font-family: 'Sohne';
          font-size: 16px;
          font-weight: 300;
          line-height: 36px;
          margin-top: 24px;
          text-align: center;
        }

        .rev-slider-outer {
          width: 100%;
          position: relative;
          overflow: visible;
        }

        /* Desktop/tablet: clip normally */
        .rev-slider-viewport {
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
          margin: -40px 0;
        }

        .rev-slider-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          touch-action: pan-y;
        }

        .npb-card {
          flex: 0 0 var(--card-flex-basis);
          min-width: 0;
          height: ${CARD_HEIGHT}px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 24px;
          background: #FFFFFF;
          border: 1px solid #69E4DC;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
                      box-shadow 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .npb-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.5);
          overflow: visible;
        }
        .avatar-circle { transition: all 0.3s ease; }
        .npb-card:hover .avatar-circle {
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.6);
          border-color: #69E4DC !important;
          transform: scale(1.05);
        }

        .rev-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(11, 215, 205, 0.96);
          background: white;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #073B2F;
          padding: 0;
          transition: all 0.25s ease;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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

        .rev-cta-btn {
          display: flex;
          height: 48px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          border: 1px solid #69E4DC;
          background: white;
          color: #073B2F;
          font-family: 'CX80';
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 4.8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .rev-cta-btn:hover {
          background: #69E4DC;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(105, 228, 220, 0.4);
        }

        /* ── Tablet ── */
        @media (max-width: 1100px) {
          .rev-inner-section { padding: 64px 48px; }
          .rev-heading { font-size: 36px; line-height: 46px; }
          .rev-subheading { font-size: 20px; line-height: 30px; }
          .rev-arrow-btn.prev { left: -44px; }
          .rev-arrow-btn.next { right: -44px; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .rev-inner-section {
            /*
             * Right padding = 0 → track bleeds to screen right edge
             * Left padding = 24px → cards start with breathing room
             */
            padding: 48px 0 56px ${MOBILE_LEFT_PAD}px;
            align-items: flex-start;
          }

          /* These elements stay padded on the right */
          .rev-header-wrap { padding-right: ${MOBILE_LEFT_PAD}px; }
          .rev-dots-row     { padding-right: ${MOBILE_LEFT_PAD}px; }
          .rev-cta-row      { padding-right: ${MOBILE_LEFT_PAD}px; }

          h1, .h1 { font-size: 48px !important; line-height: 58px !important; }
          h2, .h2, .rev-heading { font-size: 38px !important; line-height: 48px !important; letter-spacing: -0.5px; }
          h3, .h3 { font-size: 28px !important; line-height: 38px !important; }
          .rev-subheading { font-size: 16px; line-height: 26px; }

          /* CRITICAL: Do NOT clip on mobile — lets peek card show through */
          .rev-slider-viewport {
            overflow: visible;
            padding: 0;
            margin: 0;
          }

          .rev-arrow-btn { display: none; }
          .npb-card { height: auto; min-height: ${CARD_HEIGHT}px; }
        }
      `}</style>

      <div className="rev-outer-wrapper">
        <div className="rev-bg-section">
          <div className="rev-inner-section">

            {/* HEADER */}
            <div className="rev-header-wrap">
              <h2 className="rev-heading" tabIndex={0}>What Clients Say</h2>
              <p className="rev-subheading" tabIndex={0}>
                In their own words, following their experience with Find & Sign.
              </p>
            </div>

            {/* SLIDER */}
            <div className="rev-slider-outer">
              <button
                className="rev-arrow-btn prev"
                onClick={() => handleNav(-1)}
                disabled={reviewIdx === 0}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="rev-arrow-btn next"
                onClick={() => handleNav(1)}
                disabled={reviewIdx === maxReviewIdx}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="rev-slider-viewport">
                <div
                  ref={trackRef}
                  className="rev-slider-track"
                  style={{
                    transform: `translateX(-${offset}px)`,
                    "--card-flex-basis": cardFlexBasis,
                  } as React.CSSProperties}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {formattedReviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </div>
            </div>

            {/* DOTS */}
            <div
              className="rev-dots-row"
              style={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>            
    
    {Array.from({
  length: isMobile
    ? Math.min(10, maxReviewIdx + 1)
    : Math.min(6, maxReviewIdx + 1)
}).map((_, i) => (
  <button
    key={i}
    className={`rev-dot${i === reviewIdx ? " active" : ""}`}
    onClick={() => {
      goTo(i);
      resetTimer();
    }}
    aria-label={`Go to slide ${i + 1}`}
  />
))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rev-cta-row"
              style={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <button
                className="rev-cta-btn"
                onClick={() => navigate("/client-outcomes#testimonials")}
              >
                View more Feedback
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  review: typeof formattedReviews[0];
}

const ReviewCard = ({ review }: ReviewCardProps) => (
  <div className="npb-card">

    <div tabIndex={0} style={{
      display: "inline-flex",
      padding: "8px 16px",
      alignItems: "center",
      gap: "10px",
      flexShrink: 0,
      borderRadius: "12px",
      background: "#69E4DC",
      color: "#073B2F",
      fontSize: "clamp(13px, 1.8vw, 16px)",
      fontWeight: 400,
      maxWidth: "100%",
      /* Allow text to wrap so nothing is cut off */
      whiteSpace: "normal",
      wordBreak: "break-word",
      fontFamily: "SohneBuch",
      lineHeight: "1.1",
      textTransform: "capitalize",
      marginBottom: "10px",
      alignSelf: "flex-start",
    }}>
      {review.title}
    </div>

    <div style={{ display: "flex", alignItems: "center", marginTop: "12px", flexShrink: 0, marginBottom: "10px" }}>
      <img
        src={starIcon}
        alt="5 stars"
        style={{ width: "177px", height: "32.336px", flexShrink: 0, objectFit: "contain" }}
      />
    </div>

    <p tabIndex={0} style={{
      width: "100%",
      color: "#000",
      fontFamily: "SohneBuch",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      marginTop: "12px",
      display: "-webkit-box",
      WebkitLineClamp: 5,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      position: "relative",
      zIndex: 1,
    }}>
      {review.body}
    </p>

    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      borderTop: "1px solid #f3f4f6",
      paddingTop: "12px",
      marginTop: "auto",
      width: "100%",
      position: "relative",
      zIndex: 1,
      flexShrink: 0,
    }}>
      <div
        className="avatar-circle"
        style={{
          width: 40, height: 40,
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid white",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {review.image ? (
          <img src={review.image} alt={review.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5" />
            <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div>
        <h4 tabIndex={0} style={{ fontSize: "0.875rem", fontWeight: 400, color: "#000", margin: 0, fontFamily: "SohneBuch" }}>
          {review.name}
        </h4>
        <p tabIndex={0} style={{
          fontSize: "9px",
          fontWeight: 500,
          color: "#000",
          textTransform: "uppercase",
          letterSpacing: "2.88px",
          marginTop: "2px",
          fontFamily: "CX80",
          lineHeight: "15px",
          fontStyle: "normal",
        }}>
          {review.date}
        </p>
      </div>
    </div>

  </div>
);

export default Testimonials;