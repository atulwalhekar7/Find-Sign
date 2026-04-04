import React, { useEffect, useRef, useState, useCallback } from "react";

type Review = {
  name: string;
  meta: string;
  text: string;
  highlight: string;
  avatarColor: string;
};

const reviews: Review[] = [
  {
    name: "Rok Son",
    meta: "6 reviews · 5 months ago",
    text: "Working with Niki was an absolute pleasure from start to finish. He's professional, knowledgeable, and genuinely invested in finding the perfect property for his clients.",
    highlight: "professional, knowledgeable",
    avatarColor: "#2E5940",
  },
  {
    name: "Amit Bhardwaj",
    meta: "3 reviews · a month ago",
    text: "Having Niki as our buyer's agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us.",
    highlight: "one of the best decisions we made",
    avatarColor: "#4A7C5F",
  },
  {
    name: "Oshi Thilakarathna",
    meta: "9 reviews · 4 months ago",
    text: "Niki was fantastic—professional, proactive, and got the deal done smoothly. He made the whole process easy, and settlement was completely stress-free.",
    highlight: "fantastic—professional, proactive",
    avatarColor: "#C9A96E",
  },
  {
    name: "Rinzin Wangchuk",
    meta: "4 reviews · 2 months ago",
    text: "Niki is very professional and goes way above your needs. He provided us a detailed market scenario which greatly helped us in deciding where to buy our property in Perth.",
    highlight: "way above your needs",
    avatarColor: "#2E5940",
  },
  {
    name: "Dayna Bechar",
    meta: "2 reviews · 5 months ago",
    text: "Niki's market knowledge and clear communication gave us total confidence throughout. Thanks to Niki, we found our dream home without any stress. Highly recommend!",
    highlight: "total confidence throughout",
    avatarColor: "#1F3D2B",
  },
  {
    name: "Subho Ghosh",
    meta: "2 reviews · a month ago",
    text: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile. Honest advice, great communication, and zero pressure. Couldn't have asked for better agents.",
    highlight: "Honest advice, great communication, and zero pressure",
    avatarColor: "#4A7C5F",
  },
  {
    name: "Kien Lam",
    meta: "12 reviews · 7 months ago",
    text: "Niki is the best in the business. He has the best negotiating skills and can get you the best price for the property.",
    highlight: "the best in the business",
    avatarColor: "#C9A96E",
  },
  {
    name: "Jay Dass",
    meta: "Local Guide · 35 reviews · 3 months ago",
    text: "From our first conversation through to completion, the process was seamless, well-managed and clearly communicated at every step. An absolute pleasure to work with.",
    highlight: "seamless, well-managed",
    avatarColor: "#2E5940",
  },
  {
    name: "Sahil Saini",
    meta: "Local Guide · 49 reviews · 3 months ago",
    text: "Niki is professional and great to work with. Not to mention the bargain he was able to secure for the property. His communication has been great throughout.",
    highlight: "bargain he was able to secure",
    avatarColor: "#1F3D2B",
  },
  {
    name: "Kush Hirani",
    meta: "3 reviews · 3 months ago",
    text: "Very pleased with Niki & Rebecca's service. Quick responses and always going above and beyond to make sure I found the right property. Doesn't pressure you at all.",
    highlight: "above and beyond",
    avatarColor: "#4A7C5F",
  },
];

const AVATAR_COLORS = [
  "#2E5940","#4A7C5F","#C9A96E","#1F3D2B","#2E5940",
  "#4A7C5F","#C9A96E","#2E5940","#1F3D2B","#4A7C5F",
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function highlightText(text: string, highlight: string) {
  if (!highlight) return <>{text}</>;
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <strong style={{ color: "#1F3D2B", fontWeight: 500 }}>{highlight}</strong>
      {text.slice(idx + highlight.length)}
    </>
  );
}

const VISIBLE = 3;

const Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
    }, 3500);
  }, [maxIndex]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = 384; // 360 card + 24 gap
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  }, [index]);

  const handleNav = (dir: -1 | 1) => {
    goTo(index + dir);
    resetTimer();
  };

  return (
    <>
      {/* Google Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .npb-section {
          padding: 100px 40px;
          background: #F8F5F0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .npb-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(31,61,43,0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .npb-card {
          min-width: 360px;
          background: #fff;
          border-radius: 24px;
          padding: 32px 30px 28px;
          box-shadow: 0 4px 20px rgba(31,61,43,0.07), 0 1px 3px rgba(0,0,0,0.04);
          border: 1px solid rgba(31,61,43,0.06);
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          animation: npbFadeUp 0.6s ease forwards;
          opacity: 0;
        }

        .npb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(31,61,43,0.13);
        }

        @keyframes npbFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .npb-card:nth-child(1) { animation-delay: 0.1s; }
        .npb-card:nth-child(2) { animation-delay: 0.2s; }
        .npb-card:nth-child(3) { animation-delay: 0.3s; }
        .npb-card:nth-child(4) { animation-delay: 0.4s; }
        .npb-card:nth-child(5) { animation-delay: 0.5s; }
        .npb-card:nth-child(6) { animation-delay: 0.6s; }

        .npb-arrow:hover {
          background: #1F3D2B !important;
          border-color: #1F3D2B !important;
          color: #fff !important;
        }

        .npb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #EDE8E0;
          cursor: pointer;
          border: none;
          padding: 0;
          transition: all 0.3s ease;
        }

        .npb-dot.active {
          width: 28px;
          border-radius: 4px;
          background: #1F3D2B;
        }
      `}</style>

      <section className="npb-section">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
            color: "#C9A96E", fontWeight: 500, marginBottom: 18,
          }}>
            <span style={{ width: 30, height: 1, background: "#C9A96E", display: "inline-block" }} />
            Client Testimonials
            <span style={{ width: 30, height: 1, background: "#C9A96E", display: "inline-block" }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 54, color: "#1F3D2B", lineHeight: 1.1, margin: "0 0 16px",
          }}>
            What Our Clients <em style={{ color: "#4A7C5F" }}>Say</em>
          </h2>
          <p style={{ color: "#7A7468", fontSize: 16, fontWeight: 300, letterSpacing: 0.3 }}>
            Real experiences from real buyers — across Perth and beyond.
          </p>
        </div>

        {/* Stats Bar */}
       

        {/* Slider */}
        <div style={{
          position: "relative", zIndex: 1, maxWidth: 1200,
          margin: "0 auto", overflow: "hidden",
        }}>
          {/* Fade edges */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 0, width: 80,
            background: "linear-gradient(to right, #F8F5F0, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: 0, width: 80,
            background: "linear-gradient(to left, #F8F5F0, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />

          <div style={{ overflow: "hidden" }}>
            <div
              ref={trackRef}
              style={{ display: "flex", gap: 24, transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)" }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="npb-card">
                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {[...Array(5)].map((_, s) => (
                        <span key={s} style={{ color: "#C9A96E", fontSize: 14 }}>★</span>
                      ))}
                    </div>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 52, color: "#EDE8E0", lineHeight: 0.6, fontWeight: 600,
                    }}>"</span>
                  </div>

                  {/* Review text */}
                  <p style={{ color: "#444", fontSize: 14.5, lineHeight: 1.7, fontWeight: 300, flex: 1 }}>
                    {highlightText(review.text, review.highlight)}
                  </p>

                  {/* Footer */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12,
                    paddingTop: 16, borderTop: "1px solid #EDE8E0",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: AVATAR_COLORS[i % AVATAR_COLORS.length],
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16, fontWeight: 600, color: "#fff", flexShrink: 0,
                    }}>
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#1F3D2B" }}>{review.name}</div>
                      <div style={{ fontSize: 11, color: "#7A7468", marginTop: 2 }}>{review.meta}</div>
                    </div>
                    <div style={{
                      marginLeft: "auto", display: "flex", alignItems: "center",
                      gap: 4, fontSize: 10, color: "#7A7468", letterSpacing: 0.5,
                    }}>
                      <div style={{
                        width: 14, height: 14, borderRadius: "50%", background: "#4285F4",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, color: "#fff", fontWeight: "bold",
                      }}>G</div>
                      Google
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40, position: "relative", zIndex: 1 }}>
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`npb-dot${index === i ? " active" : ""}`}
              onClick={() => { goTo(i); resetTimer(); }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24, position: "relative", zIndex: 1 }}>
          <button
            className="npb-arrow"
            onClick={() => handleNav(-1)}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(31,61,43,0.2)",
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#1F3D2B", fontSize: 16, transition: "all 0.25s ease",
            }}
          >
            ←
          </button>
          <button
            className="npb-arrow"
            onClick={() => handleNav(1)}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(31,61,43,0.2)",
              background: "transparent", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#1F3D2B", fontSize: 16, transition: "all 0.25s ease",
            }}
          >
            →
          </button>
        </div>
      </section>
    </>
  );
};

export default Reviews;