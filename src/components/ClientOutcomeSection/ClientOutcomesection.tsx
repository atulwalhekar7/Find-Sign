import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ClientOutcomesection.css";
import id1 from "../../assets/Client Outcomes/id1.webp";
import id2 from "../../assets/Client Outcomes/id2.webp";
import id3 from "../../assets/Client Outcomes/id3.webp";
import id4 from "../../assets/Client Outcomes/id4.webp";
import id5 from "../../assets/Client Outcomes/id5.webp";
import id6 from "../../assets/Client Outcomes/id6.webp";
import id7 from "../../assets/Client Outcomes/id7.webp";
import id8 from "../../assets/Client Outcomes/id8.webp";
import id9 from "../../assets/Client Outcomes/id9.webp";
import id10 from "../../assets/Client Outcomes/id10.webp";
import id11 from "../../assets/Client Outcomes/id11.webp";
import id12 from "../../assets/Client Outcomes/id12.webp";
import id13 from "../../assets/Client Outcomes/id13.webp";
import id14 from "../../assets/Client Outcomes/id14.webp";
import id15 from "../../assets/Client Outcomes/id15.webp";
import id16 from "../../assets/Client Outcomes/id16.webp";
import id17 from "../../assets/Client Outcomes/id17.webp";
import id18 from "../../assets/Client Outcomes/id18.webp";
import id19 from "../../assets/Client Outcomes/id19.webp";
import id20 from "../../assets/Client Outcomes/id20.webp";
import id21 from "../../assets/Client Outcomes/id21.webp";
import id22 from "../../assets/Client Outcomes/id22.webp";
import id23 from "../../assets/Client Outcomes/id23.webp";
import id24 from "../../assets/Client Outcomes/id24.webp";
import id25 from "../../assets/Client Outcomes/id25.webp";
import id26 from "../../assets/Client Outcomes/id26.webp";
import id27 from "../../assets/Client Outcomes/id27.webp";
import id28 from "../../assets/Client Outcomes/id28.webp";
import id29 from "../../assets/Client Outcomes/id29.webp";
import id30 from "../../assets/Client Outcomes/id30.webp";
import id31 from "../../assets/Client Outcomes/id31.webp";
import id32 from "../../assets/Client Outcomes/id32.webp";
import id33 from "../../assets/Client Outcomes/id33.webp";
import id34 from "../../assets/Client Outcomes/id34.webp";
import id35 from "../../assets/Client Outcomes/id35.webp";
import id36 from "../../assets/Client Outcomes/id36.webp";
import id37 from "../../assets/Client Outcomes/id37.webp";
import id38 from "../../assets/Client Outcomes/id38.webp";
import id39 from "../../assets/Client Outcomes/id39.webp";
import ellipseImage from "../../assets/Ellipse 1.png";

const AQUA = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE = "#FFFFFF";

const images = {
  id1, id2, id3, id4, id5, id6, id7, id8, id9, id10,
  id11, id12, id13, id14, id15, id16, id17, id18, id19, id20,
  id21, id22, id23, id24, id25, id26, id27, id28, id29, id30,
  id31, id32, id33, id34, id35, id36, id37, id38, id39,
};

const cards = [
  { id: 1,  image: images.id1,  growth: "101.7%", purchasePrice: "$290k",  currentValue: "$585k",  timeframe: "2 yrs 4 mths", rentalYield: "Owner Occ", address: "8/15 Debenham St, Thornlie WA 6108" },
  { id: 2,  image: images.id2,  growth: "41.3%",  purchasePrice: "$630k",  currentValue: "$890k",  timeframe: "2 years",       rentalYield: "6.2%",      address: "27 Willard Circuit, Banksia Grove WA 6031" },
  { id: 3,  image: images.id3,  growth: "29.9%",  purchasePrice: "$654k",  currentValue: "$850k",  timeframe: "2 years",       rentalYield: "5.4%",      address: "105 Surf Drive, Secret Harbour WA 6173" },
  { id: 4,  image: images.id4,  growth: "30.0%",  purchasePrice: "$862k",  currentValue: "$1.12M", timeframe: "2 years",       rentalYield: "Owner Occ", address: "7 Limerick Loop, Wattle Grove WA 6107" },
  { id: 5,  image: images.id5,  growth: "41.9%",  purchasePrice: "$620k",  currentValue: "$880k",  timeframe: "1 yr 10 mths",  rentalYield: "Owner Occ", address: "34 Sawmill Road, Whitby WA 6123" },
  { id: 6,  image: images.id6,  growth: "34.5%",  purchasePrice: "$550k",  currentValue: "$740k",  timeframe: "1 yr 10 mths",  rentalYield: "6.1%",      address: "32 Breccia Parade, Wellard WA 6170" },
  { id: 7,  image: images.id7,  growth: "16.4%",  purchasePrice: "$670k",  currentValue: "$780k",  timeframe: "8 months",      rentalYield: "5.2%",      address: "42 Timperley Road, South Bunbury WA 6230" },
  { id: 8,  image: images.id8,  growth: "15.2%",  purchasePrice: "$820k",  currentValue: "$945k",  timeframe: "5 months",      rentalYield: "7.6%",      address: "130B&C Gabriel St, Cloverdale WA 6105" },
  { id: 9,  image: images.id9,  growth: "14.9%",  purchasePrice: "$870k",  currentValue: "$1M",    timeframe: "8 months",      rentalYield: "5.4%",      address: "40 Keane Street, Kewdale WA 6105" },
  { id: 10, image: images.id10, growth: "12.1%",  purchasePrice: "$580k",  currentValue: "$650k",  timeframe: "3 months",      rentalYield: "6.3%",      address: "10/61 Hardey Road, Belmont WA 6104" },
  { id: 11, image: images.id11, growth: "11.9%",  purchasePrice: "$670k",  currentValue: "$750k",  timeframe: "6 months",      rentalYield: "5.8%",      address: "12/158 George St, Queens Park WA 6107" },
  { id: 12, image: images.id12, growth: "12.6%",  purchasePrice: "$870k",  currentValue: "$980k",  timeframe: "6 months",      rentalYield: "5.1%",      address: "278 Adelaide St, High Wycombe WA 6057" },
  { id: 13, image: images.id13, growth: "6.3%",   purchasePrice: "$1.28M", currentValue: "$1.36M", timeframe: "1 month",       rentalYield: "6.5%",      address: "124 Lakeside Drive, Joondalup WA 6027" },
  { id: 14, image: images.id14, growth: "36.7%",  purchasePrice: "$695k",  currentValue: "$950k",  timeframe: "1 yr 8 mths",   rentalYield: "6.4%",      address: "10 Wilbury Road, Bullsbrook WA 6084" },
  { id: 15, image: images.id15, growth: "31.1%",  purchasePrice: "$610k",  currentValue: "$800k",  timeframe: "1 yr 7 mths",   rentalYield: "5.5%",      address: "26 Mainsheet Way, Alkimos WA 6038" },
  { id: 16, image: images.id16, growth: "6.2%",   purchasePrice: "$650k",  currentValue: "$690k",  timeframe: "1 month",       rentalYield: "5.9%",      address: "6 Lofter Way, Yanchep WA 6035" },
  { id: 17, image: images.id17, growth: "25.7%",  purchasePrice: "$875k",  currentValue: "$1.1M",  timeframe: "1 yr 4 mths",   rentalYield: "Owner Occ", address: "4 Newhaven Place, Canning Vale WA 6155" },
  { id: 18, image: images.id18, growth: "11.1%",  purchasePrice: "$1.26M", currentValue: "$1.4M",  timeframe: "8 months",      rentalYield: "Owner Occ", address: "4 Congressional Cres, Connolly WA 6027" },
  { id: 19, image: images.id19, growth: "10.0%",  purchasePrice: "$850k",  currentValue: "$935k",  timeframe: "4 months",      rentalYield: "Owner Occ", address: "99 The Promenade, Wattle Grove WA 6107" },
  { id: 20, image: images.id20, growth: "9.5%",   purchasePrice: "$630k",  currentValue: "$690k",  timeframe: "6 months",      rentalYield: "6.0%",      address: "2/168 Sydenham St, Kewdale WA 6105" },
  { id: 21, image: images.id21, growth: "31.9%",  purchasePrice: "$690k",  currentValue: "$910k",  timeframe: "4 months",      rentalYield: "6.4%",      address: "64 Connemara Drive, Thornlie WA 6108" },
  { id: 22, image: images.id22, growth: "4.9%",   purchasePrice: "$810k",  currentValue: "$850k",  timeframe: "1 month",       rentalYield: "Owner Occ", address: "11 Kelton Way, Thornlie WA 6108" },
  { id: 23, image: images.id23, growth: "13.2%",  purchasePrice: "$680k",  currentValue: "$770k",  timeframe: "7 months",      rentalYield: "6.11%",     address: "6 Fresco Way, Alkimos WA 6038" },
  { id: 24, image: images.id24, growth: "16.4%",  purchasePrice: "$730k",  currentValue: "$850k",  timeframe: "6 months",      rentalYield: "Owner Occ", address: "15C Wardong Road, Westminster WA 6061" },
  { id: 25, image: images.id25, growth: "33.3%",  purchasePrice: "$705k",  currentValue: "$940k",  timeframe: "1 yr 6 mths",   rentalYield: "5.5%",      address: "31 Ranella Street, Jindalee WA 6036" },
  { id: 26, image: images.id26, growth: "21.4%",  purchasePrice: "$865k",  currentValue: "$1.05M", timeframe: "10 months",     rentalYield: "8.11%",     address: "9A Humphry Street, St James WA 6102" },
  { id: 27, image: images.id27, growth: "47.1%",  purchasePrice: "$544k",  currentValue: "$800k",  timeframe: "2 years",       rentalYield: "Owner Occ", address: "565 Farrall Road, Midvale WA 6056" },
  { id: 28, image: images.id28, growth: "28.8%",  purchasePrice: "$854k",  currentValue: "$1.1M",  timeframe: "1 yr 8 mths",   rentalYield: "Owner Occ", address: "11 Pissaro Crescent, Ashby WA 6065" },
  { id: 29, image: images.id29, growth: "3.1%",   purchasePrice: "$1.27M", currentValue: "$1.31M", timeframe: "5 months",      rentalYield: "Owner Occ", address: "9 Templar Place, Currambine WA 6028" },
  { id: 30, image: images.id30, growth: "23.6%",  purchasePrice: "$700k",  currentValue: "$865k",  timeframe: "11 months",     rentalYield: "Owner Occ", address: "37 Seminole Gardens, Seville Grove WA 6112" },
  { id: 31, image: images.id31, growth: "3.2%",   purchasePrice: "$775k",  currentValue: "$800k",  timeframe: "4 months",      rentalYield: "Owner Occ", address: "7 Cherrytree Chase, Maddington WA 6109" },
  { id: 32, image: images.id32, growth: "6.3%",   purchasePrice: "$790k",  currentValue: "$840k",  timeframe: "2 months",      rentalYield: "5.1%",      address: "86A Gosnells Road West, Maddington WA 6109" },
  { id: 33, image: images.id33, growth: "8.3%",   purchasePrice: "$720k",  currentValue: "$780k",  timeframe: "4 months",      rentalYield: "Owner Occ", address: "51 Beckwith Loop, Haynes WA 6112" },
  { id: 34, image: images.id34, growth: "15.3%",  purchasePrice: "$685k",  currentValue: "$790k",  timeframe: "9 months",      rentalYield: "5.3%",      address: "23 Ellen Brook Drive, The Vines WA 6069" },
  { id: 35, image: images.id35, growth: "32.4%",  purchasePrice: "$740k",  currentValue: "$980k",  timeframe: "1 yr 5 mths",   rentalYield: "Owner Occ", address: "3 Robson Avenue, Hilbert WA 6112" },
  { id: 36, image: images.id36, growth: "13.6%",  purchasePrice: "$810k",  currentValue: "$920k",  timeframe: "7 months",      rentalYield: "5.1%",      address: "13 Bright Street, Haynes WA 6112" },
  { id: 37, image: images.id37, growth: "33.3%",  purchasePrice: "$630k",  currentValue: "$840k",  timeframe: "1 yr 4 mths",   rentalYield: "6.1%",      address: "89 Cheriton Avenue, Ellenbrook WA 6069" },
  { id: 38, image: images.id38, growth: "17.8%",  purchasePrice: "$730k",  currentValue: "$860k",  timeframe: "1 yr 5 mths",   rentalYield: "Owner Occ", address: "7 Gippsland Way, Ellenbrook WA 6069" },
  { id: 39, image: images.id39, growth: "25.5%",  purchasePrice: "$765k",  currentValue: "$960k",  timeframe: "1 yr 3 mths",   rentalYield: "Owner Occ", address: "225 Maida Vale Road, High Wycombe WA 6057" },
];

const INTERVAL = 3000;
const CARD_GAP = 32;
const PEEK = 56; // px of next card visible on right edge (mobile only)

function PropertyCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <div className="property-card">
      <div className="card-image-wrap">
        <img src={card.image} alt={`Property outcome for ${card.address}`} className="card-image" />
      </div>
      <div
        className="growth-circle-container"
        tabIndex={0}
        style={{
          backgroundImage: `url(${ellipseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
      </div>
      <div className="card-data">
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value",  val: card.currentValue  },
          { label: "Timeframe",      val: card.timeframe     },
          { label: "Rental yield",   val: card.rentalYield   },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            tabIndex={0}
            className="card-row"
            style={{ borderBottom: i < arr.length - 1 ? "1px dashed #846F58" : "none" }}
          >
            <span className="row-label">{label}</span>
            <span className="row-val">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientOutcomes() {
  const navigate = useNavigate();
  const [cur, setCur]       = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [offset, setOffset] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef  = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const sliderCards  = cards.slice(0, 10);
  const maxIdx       = Math.max(0, sliderCards.length - visibleCount);

  // ── Breakpoint detection ──────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── Clamp index on resize ─────────────────────────────────────────────────
  useEffect(() => {
    if (cur > maxIdx) setCur(maxIdx);
  }, [maxIdx]);

  // ── Recalculate scroll offset (FIXED) ────────────────────────────────────
  // Uses getBoundingClientRect for accurate width after render,
  // wrapped in requestAnimationFrame so DOM has fully painted,
  // and observed via ResizeObserver so any layout shift is caught.
  useEffect(() => {
    const recalc = () => {
      // Cancel any pending RAF before scheduling a new one
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!trackRef.current) return;
        const first = trackRef.current.querySelector<HTMLElement>(".property-card");
        if (!first) return;

        // getBoundingClientRect is accurate even before offsetWidth settles
        const cardW = first.getBoundingClientRect().width;
        if (cardW === 0) return; // guard: not yet laid out

        setOffset(cur * (cardW + CARD_GAP));
      });
    };

    recalc();

    // Watch for any size changes on the track (orientation change, font load, etc.)
    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cur, isMobile, isTablet]);

  // ── Auto-play ─────────────────────────────────────────────────────────────
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) setCur((c) => (c >= maxIdx ? 0 : c + 1));
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIdx]);

  const goto = (idx: number) => {
    setCur(Math.max(0, Math.min(idx, maxIdx)));
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; 
    if (diff > threshold) goto(cur + 1);
    if (diff < -threshold) goto(cur - 1);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // ── Card width ────────────────────────────────────────────────────────────
  const cardFlexBasis = isMobile
    ? `calc(100% - ${CARD_GAP}px - ${PEEK}px)`
    : `calc((100% - ${CARD_GAP}px * ${visibleCount - 1}) / ${visibleCount})`;

  return (
    <>
      <div className="co-wrapper">
        <div className="co-section">

          <div className="co-head">
            <div className="co-header">
              <div className="co-title-group">
                <h2 className="co-h2" tabIndex={0}>Client Outcomes</h2>
                <p className="co-subtitle" tabIndex={0}>
                  Growth achieved through early access and informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="co-slider-outer">
            <div className="co-slider-wrapper">

              <button
                className="rev-arrow-btn prev"
                onClick={() => goto(cur - 1)}
                disabled={cur === 0}
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="rev-arrow-btn next"
                onClick={() => goto(cur + 1)}
                disabled={cur === maxIdx}
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div
                className="co-slider-viewport"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  ref={trackRef}
                  className="co-slider-track"
                  style={{
                    transform: `translateX(-${offset}px)`,
                    "--card-flex-basis": cardFlexBasis,
                  } as React.CSSProperties}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {sliderCards.map((card) => (
                    <PropertyCard key={card.id} card={card} />
                  ))}
                </div>
              </div>
            </div>

            <div className="co-dots">
              {Array.from({ length: Math.min(8, maxIdx + 1) }).map((_, i) => (
                <button
                  key={i}
                  className={`co-dot${cur === i ? " active" : ""}`}
                  onClick={() => goto(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="view-btn"
              onClick={() => navigate("/client-outcomes#outcomes")}
              aria-label="View more client outcomes"
            >
              View More Outcomes
            </button>
          </div>

        </div>
      </div>
    </>
    
  );
}