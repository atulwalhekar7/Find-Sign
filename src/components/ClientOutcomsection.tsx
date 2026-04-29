import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import id1 from "../assets/Client Outcomes/id1.webp";
import id2 from "../assets/Client Outcomes/id2.webp";
import id3 from "../assets/Client Outcomes/id3.webp";
import id4 from "../assets/Client Outcomes/id4.webp";
import id5 from "../assets/Client Outcomes/id5.webp";
import id6 from "../assets/Client Outcomes/id6.webp";
import id7 from "../assets/Client Outcomes/id7.webp";
import id8 from "../assets/Client Outcomes/id8.webp";
import id9 from "../assets/Client Outcomes/id9.webp";
import id10 from "../assets/Client Outcomes/id10.webp";
import id11 from "../assets/Client Outcomes/id11.webp";
import id12 from "../assets/Client Outcomes/id12.webp";
import id13 from "../assets/Client Outcomes/id13.webp";
import id14 from "../assets/Client Outcomes/id14.webp";
import id15 from "../assets/Client Outcomes/id15.webp";
import id16 from "../assets/Client Outcomes/id16.webp";
import id17 from "../assets/Client Outcomes/id17.webp";
import id18 from "../assets/Client Outcomes/id18.webp";
import id19 from "../assets/Client Outcomes/id19.webp";
import id20 from "../assets/Client Outcomes/id20.webp";
import id21 from "../assets/Client Outcomes/id21.webp";
import id22 from "../assets/Client Outcomes/id22.webp";
import id23 from "../assets/Client Outcomes/id23.webp";
import id24 from "../assets/Client Outcomes/id24.webp";
import id25 from "../assets/Client Outcomes/id25.webp";
import id26 from "../assets/Client Outcomes/id26.webp";
import id27 from "../assets/Client Outcomes/id27.webp";
import id28 from "../assets/Client Outcomes/id28.webp";
import id29 from "../assets/Client Outcomes/id29.webp";
import id30 from "../assets/Client Outcomes/id30.webp";
import id31 from "../assets/Client Outcomes/id31.webp";
import id32 from "../assets/Client Outcomes/id32.webp";
import id33 from "../assets/Client Outcomes/id33.webp";
import id34 from "../assets/Client Outcomes/id34.webp";
import id35 from "../assets/Client Outcomes/id35.webp";
import id36 from "../assets/Client Outcomes/id36.webp";
import id37 from "../assets/Client Outcomes/id37.webp";
import id38 from "../assets/Client Outcomes/id38.webp";
import id39 from "../assets/Client Outcomes/id39.webp";
import ellipseImage from "../assets/Ellipse 1.png";


const AQUA = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE = "#FFFFFF";

const images = {
  id1, id2, id3, id4, id5, id6, id7, id8, id9, id10,
  id11, id12, id13, id14, id15, id16, id17, id18, id19, id20,
  id21, id22, id23, id24, id25, id26, id27, id28, id29, id30,
  id31, id32, id33, id34, id35, id36, id37, id38, id39
};


const cards = [
  {
    id: 1,
    image: images.id1,
    growth: "101.7%",
    purchasePrice: "$290k",
    currentValue: "$585k",
    timeframe: "2 yrs 4 mths",
    rentalYield: "Owner Occ",
    address: "8/15 Debenham St, Thornlie WA 6108",
  },
  {
    id: 2,
    image: images.id2,
    growth: "41.3%",
    purchasePrice: "$630k",
    currentValue: "$890k",
    timeframe: "2 years",
    rentalYield: "6.2%",
    address: "27 Willard Circuit, Banksia Grove WA 6031",
  },
  {
    id: 3,
    image: images.id3,
    growth: "29.9%",
    purchasePrice: "$654k",
    currentValue: "$850k",
    timeframe: "2 years",
    rentalYield: "5.4%",
    address: "105 Surf Drive, Secret Harbour WA 6173",
  },
  {
    id: 4,
    image: images.id4,
    growth: "30.0%",
    purchasePrice: "$862k",
    currentValue: "$1.12M",
    timeframe: "2 years",
    rentalYield: "Owner Occ",
    address: "7 Limerick Loop, Wattle Grove WA 6107",
  },
  {
    id: 5,
    image: images.id5,
    growth: "41.9%",
    purchasePrice: "$620k",
    currentValue: "$880k",
    timeframe: "1 yr 10 mths",
    rentalYield: "Owner Occ",
    address: "34 Sawmill Road, Whitby WA 6123",
  },
  {
    id: 6,
    image: images.id6,
    growth: "34.5%",
    purchasePrice: "$550k",
    currentValue: "$740k",
    timeframe: "1 yr 10 mths",
    rentalYield: "6.1%",
    address: "32 Breccia Parade, Wellard WA 6170",
  },
  {
    id: 7,
    image: images.id7,
    growth: "16.4%",
    purchasePrice: "$670k",
    currentValue: "$780k",
    timeframe: "8 months",
    rentalYield: "5.2%",
    address: "42 Timperley Road, South Bunbury WA 6230",
  },
  {
    id: 8,
    image: images.id8,
    growth: "15.2%",
    purchasePrice: "$820k",
    currentValue: "$945k",
    timeframe: "5 months",
    rentalYield: "7.6%",
    address: "130B&C Gabriel St, Cloverdale WA 6105",
  },
  {
    id: 9,
    image: images.id9,
    growth: "14.9%",
    purchasePrice: "$870k",
    currentValue: "$1M",
    timeframe: "8 months",
    rentalYield: "5.4%",
    address: "40 Keane Street, Kewdale WA 6105",
  },
  {
    id: 10,
    image: images.id10,
    growth: "12.1%",
    purchasePrice: "$580k",
    currentValue: "$650k",
    timeframe: "3 months",
    rentalYield: "6.3%",
    address: "10/61 Hardey Road, Belmont WA 6104",
  },
  {
    id: 11,
    image: images.id11,
    growth: "11.9%",
    purchasePrice: "$670k",
    currentValue: "$750k",
    timeframe: "6 months",
    rentalYield: "5.8%",
    address: "12/158 George St, Queens Park WA 6107",
  },
  {
    id: 12,
    image: images.id12,
    growth: "12.6%",
    purchasePrice: "$870k",
    currentValue: "$980k",
    timeframe: "6 months",
    rentalYield: "5.1%",
    address: "278 Adelaide St, High Wycombe WA 6057",
  },
  {
    id: 13,
    image: images.id13,
    growth: "6.3%",
    purchasePrice: "$1.28M",
    currentValue: "$1.36M",
    timeframe: "1 month",
    rentalYield: "6.5%",
    address: "124 Lakeside Drive, Joondalup WA 6027",
  },
  {
    id: 14,
    image: images.id14,
    growth: "36.7%",
    purchasePrice: "$695k",
    currentValue: "$950k",
    timeframe: "1 yr 8 mths",
    rentalYield: "6.4%",
    address: "10 Wilbury Road, Bullsbrook WA 6084",
  },
  {
    id: 15,
    image: images.id15,
    growth: "31.1%",
    purchasePrice: "$610k",
    currentValue: "$800k",
    timeframe: "1 yr 7 mths",
    rentalYield: "5.5%",
    address: "26 Mainsheet Way, Alkimos WA 6038",
  },
  {
    id: 16,
    image: images.id16,
    growth: "6.2%",
    purchasePrice: "$650k",
    currentValue: "$690k",
    timeframe: "1 month",
    rentalYield: "5.9%",
    address: "6 Lofter Way, Yanchep WA 6035",
  },
  {
    id: 17,
    image: images.id17,
    growth: "25.7%",
    purchasePrice: "$875k",
    currentValue: "$1.1M",
    timeframe: "1 yr 4 mths",
    rentalYield: "Owner Occ",
    address: "4 Newhaven Place, Canning Vale WA 6155",
  },
  {
    id: 18,
    image: images.id18,
    growth: "11.1%",
    purchasePrice: "$1.26M",
    currentValue: "$1.4M",
    timeframe: "8 months",
    rentalYield: "Owner Occ",
    address: "4 Congressional Cres, Connolly WA 6027",
  },
  {
    id: 19,
    image: images.id19,
    growth: "10.0%",
    purchasePrice: "$850k",
    currentValue: "$935k",
    timeframe: "4 months",
    rentalYield: "Owner Occ",
    address: "99 The Promenade, Wattle Grove WA 6107",
  },
  {
    id: 20,
    image: images.id20,
    growth: "9.5%",
    purchasePrice: "$630k",
    currentValue: "$690k",
    timeframe: "6 months",
    rentalYield: "6.0%",
    address: "2/168 Sydenham St, Kewdale WA 6105",
  },
  {
    id: 21,
    image: images.id21,
    growth: "31.9%",
    purchasePrice: "$690k",
    currentValue: "$910k",
    timeframe: "4 months",
    rentalYield: "6.4%",
    address: "64 Connemara Drive, Thornlie WA 6108",
  },
  {
    id: 22,
    image: images.id22,
    growth: "4.9%",
    purchasePrice: "$810k",
    currentValue: "$850k",
    timeframe: "1 month",
    rentalYield: "Owner Occ",
    address: "11 Kelton Way, Thornlie WA 6108",
  },
  {
    id: 23,
    image: images.id23,
    growth: "13.2%",
    purchasePrice: "$680k",
    currentValue: "$770k",
    timeframe: "7 months",
    rentalYield: "6.11%",
    address: "6 Fresco Way, Alkimos WA 6038",
  },
  {
    id: 24,
    image: images.id24,
    growth: "16.4%",
    purchasePrice: "$730k",
    currentValue: "$850k",
    timeframe: "6 months",
    rentalYield: "Owner Occ",
    address: "15C Wardong Road, Westminster WA 6061",
  },
  {
    id: 25,
    image: images.id25,
    growth: "33.3%",
    purchasePrice: "$705k",
    currentValue: "$940k",
    timeframe: "1 yr 6 mths",
    rentalYield: "5.5%",
    address: "31 Ranella Street, Jindalee WA 6036",
  },
  {
    id: 26,
    image: images.id26,
    growth: "21.4%",
    purchasePrice: "$865k",
    currentValue: "$1.05M",
    timeframe: "10 months",
    rentalYield: "8.11%",
    address: "9A Humphry Street, St James WA 6102",
  },
  {
    id: 27,
    image: images.id27,
    growth: "47.1%",
    purchasePrice: "$544k",
    currentValue: "$800k",
    timeframe: "2 years",
    rentalYield: "Owner Occ",
    address: "565 Farrall Road, Midvale WA 6056",
  },
  {
    id: 28,
    image: images.id28,
    growth: "28.8%",
    purchasePrice: "$854k",
    currentValue: "$1.1M",
    timeframe: "1 yr 8 mths",
    rentalYield: "Owner Occ",
    address: "11 Pissaro Crescent, Ashby WA 6065",
  },
  {
    id: 29,
    image: images.id29,
    growth: "3.1%",
    purchasePrice: "$1.27M",
    currentValue: "$1.31M",
    timeframe: "5 months",
    rentalYield: "Owner Occ",
    address: "9 Templar Place, Currambine WA 6028",
  },
  {
    id: 30,
    image: images.id30,
    growth: "23.6%",
    purchasePrice: "$700k",
    currentValue: "$865k",
    timeframe: "11 months",
    rentalYield: "Owner Occ",
    address: "37 Seminole Gardens, Seville Grove WA 6112",
  },
  {
    id: 31,
    image: images.id31,
    growth: "3.2%",
    purchasePrice: "$775k",
    currentValue: "$800k",
    timeframe: "4 months",
    rentalYield: "Owner Occ",
    address: "7 Cherrytree Chase, Maddington WA 6109",
  },
  {
    id: 32,
    image: images.id32,
    growth: "6.3%",
    purchasePrice: "$790k",
    currentValue: "$840k",
    timeframe: "2 months",
    rentalYield: "5.1%",
    address: "86A Gosnells Road West, Maddington WA 6109",
  },
  {
    id: 33,
    image: images.id33,
    growth: "8.3%",
    purchasePrice: "$720k",
    currentValue: "$780k",
    timeframe: "4 months",
    rentalYield: "Owner Occ",
    address: "51 Beckwith Loop, Haynes WA 6112",
  },
  {
    id: 34,
    image: images.id34,
    growth: "15.3%",
    purchasePrice: "$685k",
    currentValue: "$790k",
    timeframe: "9 months",
    rentalYield: "5.3%",
    address: "23 Ellen Brook Drive, The Vines WA 6069",
  },
  {
    id: 35,
    image: images.id35,
    growth: "32.4%",
    purchasePrice: "$740k",
    currentValue: "$980k",
    timeframe: "1 yr 5 mths",
    rentalYield: "Owner Occ",
    address: "3 Robson Avenue, Hilbert WA 6112",
  },
  {
    id: 36,
    image: images.id36,
    growth: "13.6%",
    purchasePrice: "$810k",
    currentValue: "$920k",
    timeframe: "7 months",
    rentalYield: "5.1%",
    address: "13 Bright Street, Haynes WA 6112",
  },
  {
    id: 37,
    image: images.id37,
    growth: "33.3%",
    purchasePrice: "$630k",
    currentValue: "$840k",
    timeframe: "1 yr 4 mths",
    rentalYield: "6.1%",
    address: "89 Cheriton Avenue, Ellenbrook WA 6069",
  },
  {
    id: 38,
    image: images.id38,
    growth: "17.8%",
    purchasePrice: "$730k",
    currentValue: "$860k",
    timeframe: "1 yr 5 mths",
    rentalYield: "Owner Occ",
    address: "7 Gippsland Way, Ellenbrook WA 6069",
  },
  {
    id: 39,
    image: images.id39,
    growth: "25.5%",
    purchasePrice: "$765k",
    currentValue: "$960k",
    timeframe: "1 yr 3 mths",
    rentalYield: "Owner Occ",
    address: "225 Maida Vale Road, High Wycombe WA 6057",
  },
];

const INTERVAL = 3000;

/* ── Property Card ── */
function PropertyCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
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
        <img src={card.image} alt="Property" className="card-image" />
      </div>

      {/* Growth image replacing circle */}
      <div
        className="growth-circle-container"
        style={{
          animationDelay: `${index * 150}ms`,
          backgroundImage: `url(${ellipseImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
        {/* <span className="current-value-label">Current Value</span>
        <span className="current-value">{card.currentValue}</span> */}
      </div>
      <div className="card-data">
        {[
          { label: "Purchase price", val: card.purchasePrice },
          { label: "Current value", val: card.currentValue },
          { label: "Timeframe", val: card.timeframe },
          { label: "Rental yield", val: card.rentalYield },
        ].map(({ label, val }, i, arr) => (
          <div
            key={label}
            className="card-row"
            style={{
              borderBottom: i < arr.length - 1 ? "1px dashed #846F58" : "none",
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
  const navigate = useNavigate();
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sliderCards = cards.slice(0, 10);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(0, sliderCards.length - visibleCount);

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
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
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
          gap: 40px;
          align-items: center;
        }

        .co-header {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 64px;
          align-items: flex-start;
        }

        .co-title-group { 
          grid-column: 1 / -1; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
        }
        .co-arrows {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
        }

        .co-h2 {
          color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
          font-variant-numeric: lining-nums proportional-nums;
          /* FS—H2 */
          font-family: "GT Super Display Medium";
          font-size: 44px;
          font-style: normal;
          font-weight: 500;
          line-height: 54px; /* 122.727% */
          letter-spacing: -0.88px;
          flex-shrink: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        .co-h2::after {
          content: "";
          width: 160px;
          height: 1px;
          background: #073B2F;
        }

        .co-subtitle {
        color: #000;
        font-family: Sohne;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: 36px;
        margin-top: 24px;
        }

        @media (max-width: 1199px) {
          .co-section { padding: 48px 48px 64px; column-gap: 32px; }
          .co-h2 { 
            font-size: 36px;
            width: 288px;
            height: 46px;
            line-height: 44px;
            letter-spacing: -0.72px;
          }
          .co-subtitle { font-size: 20px; }
          .rev-arrow-btn.prev { left: -44px; }
          .rev-arrow-btn.next { right: -44px; }
        }

        @media (max-width: 767px) {
.co-section {
  max-width: 1512px;
  margin: 0 auto;
  padding: 64px 196px 80px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 64px;
}          .co-header { grid-template-columns: 1fr; }
          .co-title-group, .co-arrows { grid-column: 1 / -1; }
          .co-h2 { 
            font-size: 32px;
            width: 100%;
            height: auto;
            line-height: 38px;
            letter-spacing: -0.64px;
            flex-shrink: 1;
          }
        }
          .co-wrapper {
  width: 100%;
  background: #F9F9F9;
}

        .co-slider-viewport { width: 100%; overflow: hidden; padding: 20px 0; margin: -20px 0; }
        .co-slider-track {
          display: flex;
          gap: clamp(16px, 2.11vw, 32px);
          transition: transform 0.6s cubic-bezier(0.77,0,0.18,1);
        }

        .property-card {
flex: 0 0 calc((100% - clamp(16px, 2.11vw, 32px) * 2) / 3);
  height: 440px;
          background: ${WHITE};
          border: 2px solid ${AQUA};
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
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
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.96);
        }

        @media (max-width: 1023px) { .property-card { flex: 0 0 calc((100% - 32px) / 2); } }
        @media (max-width: 639px) { .property-card { flex: 0 0 100%; } }

        .card-image-wrap {
          width: 100%;
          height: 200px;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
          position: relative;
        }
        
        .card-image { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: 0.3s;
          filter: blur(3px) brightness(80%);
        }

        /* HOVER ANIMATION: Image subtle zoom */
        .property-card:hover .card-image {
          transform: scale(1.08);
        }

        /* Growth Circle Container with Heartbeat Animation */
        .growth-circle-container {
          position: absolute;
          bottom: 175px; /* Position at the bottom */
          right: 1px;
          width: 152px; /* Increased size */
          height: 152px; /* Increased size */
          border-radius: 50%;
          background: ${AQUA}; /* Ensure it's blue */
          background-image: url(${ellipseImage}); /* Overlay the image if it's a pattern/texture */
          background-size: cover;
          background-position: center;
          object-fit: cover;
          z-index: 10;
          // animation: heartbeatFloat 4s ease-in-out infinite;
          transition: filter 0.3s ease, background 0.3s ease; /* Add background to transition */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
.growth-circle-container:hover {
animation: heartbeatFloat 4s ease-in-out infinite;
}
        .property-card:hover .growth-circle-container {
          background: ${WHITE}; /* Change background on hover */
          filter: brightness(1.1) drop-shadow(0 4px 15px rgba(105, 228, 220, 0.5));
        }

      .growth-circle-container .growth-label {
  width: 78px;
  height: 28px;

  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
  text-align: center;

  font-family: "SohneBuch";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
}
       .growth-circle-container .growth-value {
  width: 123.048px;
  height: 48.254px;

  color: var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F));
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;

  font-family: "GT Super Display Medium";
  font-size: 37px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.74px;

  display: flex;              /* ensures width/height apply nicely */
  align-items: center;
  justify-content: center;

  margin-bottom: 4px;
}
        // .growth-circle-container .current-value-label {
        //   font-family: 'Sohne';
        //   font-size: 10px;
        //   text-transform: uppercase;
        //   color: ${RACING_GREEN};
        //   opacity: 0.7;
        // }
        // .growth-circle-container .current-value {
        //   font-family: 'Sohne';
        //   font-size: 16px;
        //   font-weight: 500;
        //   color: ${RACING_GREEN};
        // }
        .card-data { padding: 55px 18px 20px; flex: 1; }
       .card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.row-label {
  font-family: "SohneBuch";
  font-size: 16px;
  color: #000;
  font-weight: 400;
}

.row-val {
  font-family: "SohneBuch";
  font-size: 13px;
  color: #757575;
  text-align: right;
  font-weight:400;
  margin-left: auto;   /* 🔥 forces right alignment */
}

        .view-btn {
  display: flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid ${AQUA};
  background: ${WHITE};

  color: ${RACING_GREEN};
  font-family: 'CX80';
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 4.8px;

  
  cursor: pointer;

  transition: background 0.2s, color 0.2s;
}
        .view-btn:hover { background: ${AQUA}; transform: scale(1.05); }

        /* ── DOTS (REVIEWS STYLE) ── */
        .co-dots { display: flex; gap: 12px; align-items: center; margin-bottom: 24px; }
        .co-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #D0C9C0;
          border: none; padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .co-dot.active { background: #073B2F; width: 24px; border-radius: 4px; }

        @media (max-width: 767px) {
          .rev-arrow-btn { display: none; }
        }
      `}</style>
<div className="co-wrapper">

      <div className="co-section">
        <div className="co-head">
          <div className="co-header">
            <div className="co-title-group">
              <h2 className="co-h2">Client Outcomes</h2>
              <p className="co-subtitle">
                Growth achieved through early access and informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="co-slider-outer">
          <div style={{ position: "relative", width: "100%" }}>
            <button
              className="rev-arrow-btn prev"
              onClick={() => { goto(cur - 1); resetTimer(); }}
              disabled={cur === 0}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="rev-arrow-btn next"
              onClick={() => { goto(cur + 1); resetTimer(); }}
              disabled={cur === maxIdx}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className="co-slider-viewport"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
            <div
              className="co-slider-track"
              style={{
                transform: `translateX(calc(-${cur} * (100% / ${visibleCount} + clamp(16px, 2.11vw, 32px) / ${visibleCount})))`,
              }}
            >
              {sliderCards.map((card, i) => (
                <PropertyCard
                  key={`${card.id}-${animKey}`}
                  card={card}
                  index={i}
                />
              ))}
            </div>
          </div>
          </div>

          <div className="co-dots">
            {Array.from({ length: Math.min(8, maxIdx + 1) }).map((_, i) => (
              <button
                key={i}
                className={`co-dot${cur === i ? " active" : ""}`}
                onClick={() => {
                  goto(i);
                  resetTimer();
                }}
              />
            ))}
          </div>

          <button 
            className="view-btn" 
            onClick={() => navigate("/client-outcomes#outcomes")}
          >
            View More Outcomes
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
