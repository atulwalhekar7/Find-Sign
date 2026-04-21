import { useState, useEffect, useRef } from "react";

const AQUA         = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE        = "#FFFFFF";

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "101.7%",
    purchasePrice: "$290k",
    currentValue:  "$585k",
    timeframe:     "2 yrs 4 mths",
    rentalYield:   "Owner Occ",
    address: "8/15 Debenham St, Thornlie WA 6108",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "41.3%",
    purchasePrice: "$630k",
    currentValue:  "$890k",
    timeframe:     "2 years",
    rentalYield:   "6.2%",
    address: "27 Willard Circuit, Banksia Grove WA 6031",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "29.9%",
    purchasePrice: "$654k",
    currentValue:  "$850k",
    timeframe:     "2 years",
    rentalYield:   "5.4%",
    address: "105 Surf Drive, Secret Harbour WA 6173",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "30.0%",
    purchasePrice: "$862k",
    currentValue:  "$1.12M",
    timeframe:     "2 years",
    rentalYield:   "Owner Occ",
    address: "7 Limerick Loop, Wattle Grove WA 6107",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "41.9%",
    purchasePrice: "$620k",
    currentValue:  "$880k",
    timeframe:     "1 yr 10 mths",
    rentalYield:   "Owner Occ",
    address: "34 Sawmill Road, Whitby WA 6123",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "34.5%",
    purchasePrice: "$550k",
    currentValue:  "$740k",
    timeframe:     "1 yr 10 mths",
    rentalYield:   "6.1%",
    address: "32 Breccia Parade, Wellard WA 6170",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    growth: "16.4%",
    purchasePrice: "$670k",
    currentValue:  "$780k",
    timeframe:     "8 months",
    rentalYield:   "5.2%",
    address: "42 Timperley Road, South Bunbury WA 6230",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&q=80",
    growth: "15.2%",
    purchasePrice: "$820k",
    currentValue:  "$945k",
    timeframe:     "5 months",
    rentalYield:   "7.6%",
    address: "130B&C Gabriel St, Cloverdale WA 6105",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    growth: "14.9%",
    purchasePrice: "$870k",
    currentValue:  "$1M",
    timeframe:     "8 months",
    rentalYield:   "5.4%",
    address: "40 Keane Street, Kewdale WA 6105",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    growth: "12.1%",
    purchasePrice: "$580k",
    currentValue:  "$650k",
    timeframe:     "3 months",
    rentalYield:   "6.3%",
    address: "10/61 Hardey Road, Belmont WA 6104",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    growth: "11.9%",
    purchasePrice: "$670k",
    currentValue:  "$750k",
    timeframe:     "6 months",
    rentalYield:   "5.8%",
    address: "12/158 George St, Queens Park WA 6107",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    growth: "12.6%",
    purchasePrice: "$870k",
    currentValue:  "$980k",
    timeframe:     "6 months",
    rentalYield:   "5.1%",
    address: "278 Adelaide St, High Wycombe WA 6057",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80",
    growth: "6.3%",
    purchasePrice: "$1.28M",
    currentValue:  "$1.36M",
    timeframe:     "1 month",
    rentalYield:   "6.5%",
    address: "124 Lakeside Drive, Joondalup WA 6027",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80",
    growth: "36.7%",
    purchasePrice: "$695k",
    currentValue:  "$950k",
    timeframe:     "1 yr 8 mths",
    rentalYield:   "6.4%",
    address: "10 Wilbury Road, Bullsbrook WA 6084",
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    growth: "31.1%",
    purchasePrice: "$610k",
    currentValue:  "$800k",
    timeframe:     "1 yr 7 mths",
    rentalYield:   "5.5%",
    address: "26 Mainsheet Way, Alkimos WA 6038",
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
    growth: "6.2%",
    purchasePrice: "$650k",
    currentValue:  "$690k",
    timeframe:     "1 month",
    rentalYield:   "5.9%",
    address: "6 Lofter Way, Yanchep WA 6035",
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    growth: "25.7%",
    purchasePrice: "$875k",
    currentValue:  "$1.1M",
    timeframe:     "1 yr 4 mths",
    rentalYield:   "Owner Occ",
    address: "4 Newhaven Place, Canning Vale WA 6155",
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    growth: "11.1%",
    purchasePrice: "$1.26M",
    currentValue:  "$1.4M",
    timeframe:     "8 months",
    rentalYield:   "Owner Occ",
    address: "4 Congressional Cres, Connolly WA 6027",
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=600&q=80",
    growth: "10.0%",
    purchasePrice: "$850k",
    currentValue:  "$935k",
    timeframe:     "4 months",
    rentalYield:   "Owner Occ",
    address: "99 The Promenade, Wattle Grove WA 6107",
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    growth: "9.5%",
    purchasePrice: "$630k",
    currentValue:  "$690k",
    timeframe:     "6 months",
    rentalYield:   "6.0%",
    address: "2/168 Sydenham St, Kewdale WA 6105",
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=600&q=80",
    growth: "31.9%",
    purchasePrice: "$690k",
    currentValue:  "$910k",
    timeframe:     "4 months",
    rentalYield:   "6.4%",
    address: "64 Connemara Drive, Thornlie WA 6108",
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
    growth: "4.9%",
    purchasePrice: "$810k",
    currentValue:  "$850k",
    timeframe:     "1 month",
    rentalYield:   "Owner Occ",
    address: "11 Kelton Way, Thornlie WA 6108",
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80",
    growth: "13.2%",
    purchasePrice: "$680k",
    currentValue:  "$770k",
    timeframe:     "7 months",
    rentalYield:   "6.11%",
    address: "6 Fresco Way, Alkimos WA 6038",
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1600047508788-786f3865b8b0?w=600&q=80",
    growth: "16.4%",
    purchasePrice: "$730k",
    currentValue:  "$850k",
    timeframe:     "6 months",
    rentalYield:   "Owner Occ",
    address: "15C Wardong Road, Westminster WA 6061",
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80",
    growth: "33.3%",
    purchasePrice: "$705k",
    currentValue:  "$940k",
    timeframe:     "1 yr 6 mths",
    rentalYield:   "5.5%",
    address: "31 Ranella Street, Jindalee WA 6036",
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    growth: "21.4%",
    purchasePrice: "$865k",
    currentValue:  "$1.05M",
    timeframe:     "10 months",
    rentalYield:   "8.11%",
    address: "9A Humphry Street, St James WA 6102",
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&q=80",
    growth: "47.1%",
    purchasePrice: "$544k",
    currentValue:  "$800k",
    timeframe:     "2 years",
    rentalYield:   "Owner Occ",
    address: "565 Farrall Road, Midvale WA 6056",
  },
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&q=80",
    growth: "28.8%",
    purchasePrice: "$854k",
    currentValue:  "$1.1M",
    timeframe:     "1 yr 8 mths",
    rentalYield:   "Owner Occ",
    address: "11 Pissaro Crescent, Ashby WA 6065",
  },
  {
    id: 29,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    growth: "3.1%",
    purchasePrice: "$1.27M",
    currentValue:  "$1.31M",
    timeframe:     "5 months",
    rentalYield:   "Owner Occ",
    address: "9 Templar Place, Currambine WA 6028",
  },
  {
    id: 30,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    growth: "23.6%",
    purchasePrice: "$700k",
    currentValue:  "$865k",
    timeframe:     "11 months",
    rentalYield:   "Owner Occ",
    address: "37 Seminole Gardens, Seville Grove WA 6112",
  },
  {
    id: 31,
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&q=80",
    growth: "3.2%",
    purchasePrice: "$775k",
    currentValue:  "$800k",
    timeframe:     "4 months",
    rentalYield:   "Owner Occ",
    address: "7 Cherrytree Chase, Maddington WA 6109",
  },
  {
    id: 32,
    image: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=600&q=80",
    growth: "6.3%",
    purchasePrice: "$790k",
    currentValue:  "$840k",
    timeframe:     "2 months",
    rentalYield:   "5.1%",
    address: "86A Gosnells Road West, Maddington WA 6109",
  },
  {
    id: 33,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    growth: "8.3%",
    purchasePrice: "$720k",
    currentValue:  "$780k",
    timeframe:     "4 months",
    rentalYield:   "Owner Occ",
    address: "51 Beckwith Loop, Haynes WA 6112",
  },
  {
    id: 34,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    growth: "15.3%",
    purchasePrice: "$685k",
    currentValue:  "$790k",
    timeframe:     "9 months",
    rentalYield:   "5.3%",
    address: "23 Ellen Brook Drive, The Vines WA 6069",
  },
  {
    id: 35,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    growth: "32.4%",
    purchasePrice: "$740k",
    currentValue:  "$980k",
    timeframe:     "1 yr 5 mths",
    rentalYield:   "Owner Occ",
    address: "3 Robson Avenue, Hilbert WA 6112",
  },
  {
    id: 36,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    growth: "13.6%",
    purchasePrice: "$810k",
    currentValue:  "$920k",
    timeframe:     "7 months",
    rentalYield:   "5.1%",
    address: "13 Bright Street, Haynes WA 6112",
  },
  {
    id: 37,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    growth: "33.3%",
    purchasePrice: "$630k",
    currentValue:  "$840k",
    timeframe:     "1 yr 4 mths",
    rentalYield:   "6.1%",
    address: "89 Cheriton Avenue, Ellenbrook WA 6069",
  },
  {
    id: 38,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
    growth: "17.8%",
    purchasePrice: "$730k",
    currentValue:  "$860k",
    timeframe:     "1 yr 5 mths",
    rentalYield:   "Owner Occ",
    address: "7 Gippsland Way, Ellenbrook WA 6069",
  },
  {
    id: 39,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    growth: "25.5%",
    purchasePrice: "$765k",
    currentValue:  "$960k",
    timeframe:     "1 yr 3 mths",
    rentalYield:   "Owner Occ",
    address: "225 Maida Vale Road, High Wycombe WA 6057",
  },
];

const INTERVAL = 3000;

/* ── Property Card ── */
function PropertyCard({
  card,
  index,
}: {
  card: typeof cards[0];
  index: number;
}) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="card-image-wrap">
        <img
          src={card.image}
          alt="Property"
          className="card-image"
        />
      </div>

      {/* Growth circle with continuous heartbeat and float animation */}
      <div 
        className="growth-circle" 
        style={{ 
          animationDelay: `${(index * 150)}ms` 
        }}
      >
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
      </div>

      <div className="card-data">
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value",  val: card.currentValue  },
          { label: "Timeframe",      val: card.timeframe      },
          { label: "Rental yield",   val: card.rentalYield    },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            className="card-row"
            style={{
              borderBottom:
                i < arr.length - 1
                  ? "1px dashed #846F58"
                  : "none",
            }}
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
  const [cur, setCur]           = useState(0);
  const [paused, setPaused]     = useState(false);
  const [animKey, setAnimKey]   = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef                = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)  setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(0, cards.length - visibleCount);

  const goto = (idx: number) => {
    const next = Math.max(0, Math.min(idx, maxIdx));
    setCur(next);
    setAnimKey((k) => k + 1);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => {
        const next = c >= maxIdx ? 0 : c + 1;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!paused) {
        setCur((c) => {
          const next = c >= maxIdx ? 0 : c + 1;
          setAnimKey((k) => k + 1);
          return next;
        });
      }
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIdx]);

  useEffect(() => {
    if (cur > maxIdx) setCur(maxIdx);
  }, [maxIdx]);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Continuous Heartbeat + Float Animation */
        @keyframes heartbeatFloat {
          0% {
            transform: translateY(0) scale(1);
            box-shadow: 0 4px 12px rgba(105, 228, 220, 0.3);
          }
          14% {
            transform: translateY(-3px) scale(1.06);
            box-shadow: 0 8px 20px rgba(105, 228, 220, 0.4);
          }
          28% {
            transform: translateY(0) scale(1);
          }
          42% {
            transform: translateY(-3px) scale(1.06);
            box-shadow: 0 8px 20px rgba(105, 228, 220, 0.4);
          }
          70% {
            transform: translateY(-8px) scale(1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .co-section {
          background: #F9F9F9;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          padding: 64px 196px 80px;
        }

        .co-head {
          grid-column: 1 / -1;
          margin-bottom: 48px;
        }

        .co-slider-outer {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 64px;
          align-items: center;
        }

        .co-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          align-items: flex-start;
        }

        .co-title-group { grid-column: 1 / 9; }
        .co-arrows {
          grid-column: 10 / 13;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: flex-end;
          padding-top: 6px;
        }

        .co-h2 {
          font-family: serif;
          font-size: 44px;
          color: ${RACING_GREEN};
          margin-bottom: 12px;
        }

        .co-subtitle {
          font-family: sans-serif;
          font-size: 24px;
          font-weight: 300;
          color: #000;
        }

        @media (max-width: 1199px) {
          .co-section { padding: 48px 48px 64px; column-gap: 32px; }
          .co-h2 { font-size: 36px; }
          .co-subtitle { font-size: 20px; }
        }

        @media (max-width: 767px) {
          .co-section { grid-template-columns: repeat(4, 1fr); padding: 40px 20px 56px; }
          .co-header { grid-template-columns: 1fr; }
          .co-title-group, .co-arrows { grid-column: 1 / -1; }
          .co-arrows { justify-content: flex-start; }
        }

        .arr-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid ${RACING_GREEN};
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .arr-btn:hover:not(:disabled) { background: ${RACING_GREEN}; }
        .arr-btn:hover:not(:disabled) path { stroke: ${WHITE}; }
        .arr-btn:disabled { opacity: 0.2; cursor: default; }

        .co-slider-viewport { width: 100%; overflow: hidden; padding: 20px 0; margin: -20px 0; }
        .co-slider-track {
          display: flex;
          gap: clamp(16px, 2.11vw, 32px);
          transition: transform 0.6s cubic-bezier(0.77,0,0.18,1);
        }

        .property-card {
          flex: 0 0 calc((100% - clamp(16px, 2.11vw, 32px) * 2) / 3);
          background: ${WHITE};
          border: 1px solid rgba(0,51,39,0.1);
          border-radius: 12px;
          position: relative;
          display: flex;
          flex-direction: column;
          animation: cardReveal 0.5s ease both;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          cursor: pointer;
          overflow: hidden;
        }
        
        /* HOVER ANIMATION: Card lifts and glows */
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0, 51, 39, 0.12);
          border-color: ${AQUA};
        }

        @media (max-width: 1023px) { .property-card { flex: 0 0 calc((100% - 32px) / 2); } }
        @media (max-width: 639px) { .property-card { flex: 0 0 100%; } }

        .card-image-wrap {
          width: 100%;
          height: 200px;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          position: relative;
        }
        
        .card-image { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.6s ease;
        }

        /* HOVER ANIMATION: Image subtle zoom */
        .property-card:hover .card-image {
          transform: scale(1.08);
        }

        /* Growth Circle with Heartbeat Animation */
        .growth-circle {
          position: absolute;
          top: 155px;
          right: 18px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: ${AQUA};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: heartbeatFloat 4s ease-in-out infinite;
          transition: background 0.3s ease;
        }

        .property-card:hover .growth-circle {
          background: ${WHITE};
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.5);
        }

        .growth-label { font-size: 10px; text-transform: uppercase; color: ${RACING_GREEN}; }
        .growth-value { font-size: 18px; font-weight: 700; color: ${RACING_GREEN}; }

        .card-data { padding: 55px 18px 20px; flex: 1; }
        .card-row { display: flex; justify-content: space-between; padding: 10px 0; }
        .row-label { font-size: 13px; color: #000; }
        .row-val { font-size: 13px; color: #757575; }

        .view-btn {
          height: 48px;
          padding: 0 32px;
          border-radius: 8px;
          border: 1px solid ${AQUA};
          color: ${RACING_GREEN};
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .view-btn:hover { background: ${RACING_GREEN}; color: white; transform: scale(1.05); }

        .co-dots { display: none; gap: 8px; margin-top: 16px; }
        @media (max-width: 767px) { .co-dots { display: flex; } }
        .co-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; }
        .co-dot.active { background: ${RACING_GREEN}; }
      `}</style>

      <div className="co-section">
        <div className="co-head">
          <div className="co-header">
            <div className="co-title-group">
              <h2 className="co-h2">Client outcomes</h2>
              <p className="co-subtitle">Growth achieved through early access and informed decisions.</p>
            </div>

            <div className="co-arrows">
              <button className="arr-btn" onClick={() => { goto(cur - 1); resetTimer(); }} disabled={cur === 0}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="arr-btn" onClick={() => { goto(cur + 1); resetTimer(); }} disabled={cur === maxIdx}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke={RACING_GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="co-slider-outer">
          <div className="co-slider-viewport" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div
              className="co-slider-track"
              style={{
                transform: `translateX(calc(-${cur} * (100% / ${visibleCount} + clamp(16px, 2.11vw, 32px) / ${visibleCount})))`,
              }}
            >
              {cards.map((card, i) => (
                <PropertyCard key={`${card.id}-${animKey}`} card={card} index={i} />
              ))}
            </div>
          </div>

          <div className="co-dots">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} className={`co-dot${cur === i ? " active" : ""}`} onClick={() => { goto(i); resetTimer(); }} />
            ))}
          </div>

          <button className="view-btn">View More Outcomes</button>
        </div>
      </div>
    </>
  );
}