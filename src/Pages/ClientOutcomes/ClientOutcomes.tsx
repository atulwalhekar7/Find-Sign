import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import SimpleGetInTouch from "../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../components/SimpleFooter";
import AboutSection from "../../components/AboutSection";
import Image5 from "../../components/Image5/Image5";
import Image6 from "../../components/Image6/Image6";
import { useTheme } from "../../components/ThemeContext";
import "./ClientOutcomes.css";

import bannerImg from "../../assets/buyer-advocate-perth-australia-client-outcomes.jpg";
import AboutClientOutcomesImg from "../../assets/buyer-advocate-perth-australia-client-outcomes-property.jpg";

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
import starIcon from "../../assets/Union.png";

import roksonImg from "../../assets/testomonials/Rokson.png";
import rinzinWangchukImg from "../../assets/testomonials/Rinzin Wangchuk.png";

// ── Theme ─────────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    pageBg:           "#121212",
    outcomesBg:       "#1A1A1A",
    testimonialsBg:   "#1E1E1E",
    cardBg:           "#1E1E1E",
    cardBorder:       "#69E4DC",
    headingColor:     "#F9F9F9",
    dividerColor:     "#F9F9F9",
    subtitleColor:    "#EAE5DF",
    rowLabelColor:    "#F9F9F9",
    rowValColor:      "#A0A0A0",
    tcBodyColor:      "#EAE5DF",
    tcNameColor:      "#F9F9F9",
    tcDateColor:      "#A0A0A0",
    navArrowBg:       "#1E1E1E",
    navArrowColor:    "#69E4DC",
    dotInactive:      "#444",
    viewMoreBg:       "#1E1E1E",
    viewMoreColor:    "#69E4DC",
  },
  light: {
    pageBg:           "#FFFFFF",
    outcomesBg:       "#F9F9F9",
    testimonialsBg:   "#EAE5DF",
    cardBg:           "#FFFFFF",
    cardBorder:       "#69E4DC",
    headingColor:     "#073B2F",
    dividerColor:     "#073B2F",
    subtitleColor:    "#000000",
    rowLabelColor:    "#000000",
    rowValColor:      "#757575",
    tcBodyColor:      "#000000",
    tcNameColor:      "#111827",
    tcDateColor:      "#000000",
    navArrowBg:       "#FFFFFF",
    navArrowColor:    "#073B2F",
    dotInactive:      "#D0C9C0",
    viewMoreBg:       "#FFFFFF",
    viewMoreColor:    "#073B2F",
  },
};

// ── CONSTANTS ────────────────────────────────────────
const AQUA         = "#69E4DC";
const RACING_GREEN = "#073B2F";
const CARD_GAP     = 32;
const PEEK         = 56;

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

const reviews = [
  { name: "Rok Son",              date: "5 months ago",  title: "Absolute pleasure from start to finish", body: "Working with Niki was an absolute pleasure from start to finish. He's professional, knowledgeable, and genuinely invested in finding the perfect property for his clients. From our first meeting, Niki took the time to understand exactly what I was looking for — my budget.", image: roksonImg },
  { name: "Amit Bhardwaj",        date: "2 months ago",  title: "One of the best decisions we made",       body: "Having Niki as our buyer's agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us. He listened, guided us with confidence, and made what could have been a stressful process feel calm and manageable." },
  { name: "Rinzin Wangchuk",      date: "3 months ago",  title: "Goes way above your needs",               body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn't know where to begin.", image: rinzinWangchukImg },
  { name: "dayna bechar",         date: "5 months ago",  title: "Absolute pleasure to work",               body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. He was always available to answer questions and offer advice. Thanks to Niki, we found our dream home without any stress. Highly recommend!" },
  { name: "Gian Ottavio",         date: "3 months ago",  title: "professional in all",                     body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way." },
  { name: "Karen Rowley",         date: "6 months ago",  title: "fantastic experience working with Niki",  body: "We had an absolutely fantastic experience working with Niki as a Buyer's agent. He was very professional and always communicated well with ourselves and his clients throughout the process." },
  { name: "Kush Hirani",          date: "5 months ago",  title: "Quick responses",                         body: "Very pleased with Niki & Rebecca's service. Quick responses and always going above and beyond to make sure I found the right property." },
  { name: "Vince Collova",        date: "4 months ago",  title: "Right from the start there communication",body: "Right from the start there communication was amazing and prompt. The whole team were very friendly and professional. They understood what we were after and made sure we got the deal of the century." },
  { name: "Afsal Mansuri",        date: "a Year ago",    title: "From our very first meeting",             body: "We had the pleasure of working with Niki and the team as my buyer's agent, and I cannot recommend them enough!From our very first meeting." },
  { name: "Subho Ghosh",          date: "2 months ago",  title: "Absolute legends",                        body: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile to help us find our dream home. Honest advice, great communication, and zero pressure. Couldn't have asked for better agents to guide us through the process. Highly recommend them." },
  { name: "Bhaskara M",           date: "8 months ago",  title: "negotiated a great deal",                 body: "We had the pleasure of working with Niki Nakrani Property Buyers during our recent property purchase. Their market knowledge, attention to detail, and genuine care made the entire process seamless. They listened to our needs, found us the perfect property, and negotiated a great deal." },
  { name: "jigar faldu",          date: "a Year ago",    title: "services to purchase their",              body: "My wife and I don't understand real estate and are definitely not negotiators. We met Niki through a friend who used his services to purchase their first home. As first home buyers, we had been in the market for a few months without success." },
  { name: "P Y",                  date: "4 months ago",  title: "Hands-on approach and professionalism",   body: "What really stood out about Niki compared to other buyer's agents I spoke with was his hands-on approach and professionalism from the very beginning. I was unsure about using a buyer's agent at first, but after our first call it was clear." },
  { name: "Frank Boitano",        date: "8 months ago",  title: "Niki is the man you need",                body: "Niki is the man you need if you want to get things done He is connected and knows the Perth Market.He works tirelessly to get results for his clients and delivers." },
  { name: "SUDHIR KHUT",          date: "10 months ago", title: "I've opted for a buyers agent",           body: "Well its true that good things comes in small packages. As a property investor this is the first time I've opted for a buyers agent. Right from beginning value addition was seen; some key highlights of Niki's service was property insites." },
];

const formattedReviews = reviews.map(r => ({
  ...r,
  title: r.title.trim(),
  body: r.body.endsWith("…More") ? r.body.slice(0, -5).trim() : r.body,
}));

// ── TESTIMONIAL CARD ─────────────────────────────────
function TestimonialCard({
  testimonial,
  style,
  t,
}: {
  testimonial: any;
  style?: React.CSSProperties;
  t: typeof THEMES["light"];
}) {
  return (
    <div className="testimonial-card" style={{ ...style, background: t.cardBg, borderColor: t.cardBorder }}>
      <div className="tc-pill" tabIndex={0}>{testimonial.title}</div>
      <div className="tc-stars">
        <img src={starIcon} alt="5 stars" style={{ width: 177, height: 32.336, objectFit: "contain" }} />
      </div>
      <p className="tc-body" tabIndex={0} style={{ color: t.tcBodyColor }}>{testimonial.body}</p>
      <div className="tc-footer">
        <div className="avatar-circle">
          {testimonial.image ? (
            <img src={testimonial.image} alt={testimonial.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="tc-name" tabIndex={0} style={{ color: t.tcNameColor }}>{testimonial.name}</h4>
          <p className="tc-date" tabIndex={0} style={{ color: t.tcDateColor }}>{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

// ── PROPERTY CARD ─────────────────────────────────────
function PropertyCard({
  card,
  index,
  t,
}: {
  card: typeof cards[0];
  index: number;
  t: typeof THEMES["light"];
}) {
  return (
    <div
      className="property-card"
      style={{
        animationDelay: `${index * 80}ms`,
        background: t.cardBg,
        borderColor: t.cardBorder,
      }}
    >
      <div className="card-image-wrap">
        <img src={card.image} alt={`Property outcome for ${card.address}`} className="card-image" />
      </div>
      <div
        className="growth-circle-container"
        tabIndex={0}
        style={{ backgroundImage: `url(${ellipseImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
          <div key={label} tabIndex={0} className="card-row" style={{ borderBottom: i < arr.length - 1 ? "1px dashed #846F58" : "none" }}>
            <span className="row-label" style={{ color: t.rowLabelColor }}>{label}</span>
            <span className="row-val" style={{ color: t.rowValColor }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────
export default function ClientOutcomes() {
  const { hash } = useLocation();
  const { theme } = useTheme();
  const t = THEMES[theme];

  const [showAllCards, setShowAllCards] = useState(false);
  const buttonContainerRef              = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  // Outcomes Slider State
  const [outcomesCur, setOutcomesCur]       = useState(0);
  const [outcomesPaused, setOutcomesPaused] = useState(false);
  const [outcomesOffset, setOutcomesOffset] = useState(0);
  const outcomesTimerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const outcomesTrackRef  = useRef<HTMLDivElement>(null);
  const outcomesRafRef    = useRef<number | null>(null);
  const outcomesTouchStartX = useRef<number | null>(null);
  const outcomesTouchEndX = useRef<number | null>(null);

  const outcomesVisibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const outcomesSliderCards  = cards.slice(0, 10);
  const outcomesMaxIdx       = Math.max(0, outcomesSliderCards.length - outcomesVisibleCount);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (outcomesCur > outcomesMaxIdx) setOutcomesCur(outcomesMaxIdx);
  }, [outcomesMaxIdx]);

  useEffect(() => {
    if (showAllCards) return;
    const recalc = () => {
      if (outcomesRafRef.current) cancelAnimationFrame(outcomesRafRef.current);
      outcomesRafRef.current = requestAnimationFrame(() => {
        if (!outcomesTrackRef.current) return;
        const first = outcomesTrackRef.current.querySelector<HTMLElement>(".property-card");
        if (!first) return;
        const cardW = first.getBoundingClientRect().width;
        if (cardW === 0) return;
        setOutcomesOffset(outcomesCur * (cardW + CARD_GAP));
      });
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    if (outcomesTrackRef.current) ro.observe(outcomesTrackRef.current);
    return () => {
      ro.disconnect();
      if (outcomesRafRef.current) cancelAnimationFrame(outcomesRafRef.current);
    };
  }, [outcomesCur, isMobile, isTablet, showAllCards]);

  const resetOutcomesTimer = useCallback(() => {
    if (outcomesTimerRef.current) clearInterval(outcomesTimerRef.current);
    outcomesTimerRef.current = setInterval(() => {
      setOutcomesCur((c) => (c >= outcomesMaxIdx ? 0 : c + 1));
    }, 3000);
  }, [outcomesMaxIdx]);

  useEffect(() => {
    if (showAllCards) {
      if (outcomesTimerRef.current) clearInterval(outcomesTimerRef.current);
      return;
    }
    outcomesTimerRef.current = setInterval(() => {
      if (!outcomesPaused) setOutcomesCur((c) => (c >= outcomesMaxIdx ? 0 : c + 1));
    }, 3000);
    return () => { if (outcomesTimerRef.current) clearInterval(outcomesTimerRef.current); };
  }, [outcomesPaused, outcomesMaxIdx, showAllCards]);

  const gotoOutcome = useCallback((idx: number) => {
    setOutcomesCur(Math.max(0, Math.min(idx, outcomesMaxIdx)));
    resetOutcomesTimer();
  }, [outcomesMaxIdx, resetOutcomesTimer]);

  const handleOutcomesTouchStart = (e: React.TouchEvent) => { outcomesTouchStartX.current = e.targetTouches[0].clientX; };
  const handleOutcomesTouchMove  = (e: React.TouchEvent) => { outcomesTouchEndX.current = e.targetTouches[0].clientX; };
  const handleOutcomesTouchEnd = () => {
    if (!outcomesTouchStartX.current || !outcomesTouchEndX.current) return;
    const diff = outcomesTouchStartX.current - outcomesTouchEndX.current;
    if (diff > 50) gotoOutcome(outcomesCur + 1);
    if (diff < -50) gotoOutcome(outcomesCur - 1);
    outcomesTouchStartX.current = null;
    outcomesTouchEndX.current = null;
  };

  const outcomesCardFlexBasis = isMobile
    ? `calc(100% - ${CARD_GAP}px - ${PEEK}px)`
    : `calc((100% - ${CARD_GAP}px * ${outcomesVisibleCount - 1}) / ${outcomesVisibleCount})`;

  const visibleReviewCount = isMobile ? 1 : isTablet ? 2 : 3;
  const [reviewIdx, setReviewIdx]           = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewOffset, setReviewOffset]     = useState(0);
  const reviewTrackRef                       = useRef<HTMLDivElement>(null);
  const reviewRafRef                         = useRef<number | null>(null);
  const reviewButtonContainerRef             = useRef<HTMLDivElement>(null);
  const reviewTouchStartX                    = useRef<number | null>(null);
  const reviewTouchEndX                      = useRef<number | null>(null);
  const testimonialsSectionRef               = useRef<HTMLElement | null>(null);
  const outcomesSectionRef                   = useRef<HTMLDivElement | null>(null);

  const dotsStep     = isMobile ? 2 : visibleReviewCount;
  const totalPages   = Math.ceil(formattedReviews.length / dotsStep);
  const maxReviewIdx = Math.max(0, totalPages - 1);

  useEffect(() => {
    const recalc = () => {
      if (reviewRafRef.current) cancelAnimationFrame(reviewRafRef.current);
      reviewRafRef.current = requestAnimationFrame(() => {
        if (!reviewTrackRef.current) return;
        const first = reviewTrackRef.current.querySelector<HTMLElement>(".testimonial-card");
        if (!first) return;
        const cardW = first.getBoundingClientRect().width;
        if (cardW === 0) return;
        setReviewOffset(reviewIdx * dotsStep * (cardW + CARD_GAP));
      });
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    if (reviewTrackRef.current) ro.observe(reviewTrackRef.current);
    return () => {
      ro.disconnect();
      if (reviewRafRef.current) cancelAnimationFrame(reviewRafRef.current);
    };
  }, [reviewIdx, isMobile, isTablet, visibleReviewCount, dotsStep]);

  useEffect(() => { setReviewIdx(prev => Math.min(prev, maxReviewIdx)); }, [visibleReviewCount, maxReviewIdx]);

  const nextReview = useCallback(() => {
    setReviewIdx(prev => (prev >= maxReviewIdx ? 0 : prev + 1));
  }, [maxReviewIdx]);

  const handleReviewTouchStart = (e: React.TouchEvent) => { reviewTouchStartX.current = e.targetTouches[0].clientX; };
  const handleReviewTouchMove  = (e: React.TouchEvent) => { reviewTouchEndX.current = e.targetTouches[0].clientX; };
  const handleReviewTouchEnd = () => {
    if (!reviewTouchStartX.current || !reviewTouchEndX.current) return;
    const diff = reviewTouchStartX.current - reviewTouchEndX.current;
    if (diff > 50) setReviewIdx(prev => Math.min(maxReviewIdx, prev + 1));
    if (diff < -50) setReviewIdx(prev => Math.max(0, prev - 1));
    reviewTouchStartX.current = null;
    reviewTouchEndX.current = null;
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  useEffect(() => {
    if (hash === "#testimonials") {
      setTimeout(() => testimonialsSectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (hash === "#outcomes") {
      setTimeout(() => outcomesSectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  const reviewCardFlexBasis = isMobile
    ? `calc(100vw - 24px - ${CARD_GAP}px - ${PEEK}px)`
    : `calc((100% - ${CARD_GAP}px * ${visibleReviewCount - 1}) / ${visibleReviewCount})`;

  const handleToggleCards = () => {
    if (showAllCards) {
      setShowAllCards(false);
      setTimeout(() => buttonContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
    } else {
      setShowAllCards(true);
    }
  };

  const handleToggleReviews = () => {
    if (showAllReviews) {
      setShowAllReviews(false);
      setTimeout(() => reviewButtonContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
    } else {
      setShowAllReviews(true);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: t.pageBg, fontFamily: "Sohne, sans-serif", transition: "background 0.3s ease" }}>

        {/* ══ HERO ══ */}
        <section
          className="client-outcomes-hero-banner"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          {/* SEO fallback image for background */}
          <img
            src={bannerImg}
            alt="Buyer Advocate Australia delivering successful client property outcomes"
            title="Client Outcomes | Buyer's Agent Australia Success Stories"
            loading="lazy"
            decoding="async"
            width="1920"
            height="800"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              opacity: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />

          <div style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: 900,
            margin: "0 auto",
            padding: "60px 20px",
            borderRadius: 12,
            animation: "heroFadeIn 0.8s ease both",
          }}>
            <h1 className="hero-h1" tabIndex={0}>
              Client Outcomes
            </h1>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <div className="client-outcomes-about">
          <AboutSection
            imageSrc={AboutClientOutcomesImg}
            imageAlt="Buyer Advocate Australia showcasing real client property outcomes and investment growth results"
            imageTitle="Client Outcomes | Buyer's Agent Australia Results"
            heading="About Client Outcomes"
            body1="These are outcomes we have achieved for our clients. Real properties, real numbers, and measurable growth. When you engage Find and Sign Buyer Advocate, you are not simply purchasing a property; you are entering a strategy built for long-term performance. These examples show what is possible when the right property is identified and secured early."
          />
        </div>

        {/* ══ CLIENT OUTCOMES GRID ══ */}
        <div className="outcomes-section-wrap" style={{ background: t.outcomesBg }}>
          <div ref={outcomesSectionRef} id="outcomes" className="outcomes-section">
            <div className="outcomes-head">
              <h2 className="outcomes-h2" tabIndex={0} style={{ color: t.headingColor }}>
                Client Outcomes
                <div style={{ width: "160px", height: "1px", background: t.dividerColor }} />
              </h2>
              <p className="outcomes-subtitle" tabIndex={0} style={{ color: t.subtitleColor }}>Explore more about client outcomes.</p>
            </div>

            {!showAllCards ? (
              <div className="outcomes-slider-outer">
                <div className="outcomes-slider-wrapper">
                  <button className="nav-arrow prev" onClick={() => gotoOutcome(outcomesCur - 1)} disabled={outcomesCur === 0} aria-label="Previous" style={{ background: t.navArrowBg, color: t.navArrowColor }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <button className="nav-arrow next" onClick={() => gotoOutcome(outcomesCur + 1)} disabled={outcomesCur === outcomesMaxIdx} aria-label="Next" style={{ background: t.navArrowBg, color: t.navArrowColor }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                  <div className="outcomes-slider-viewport" onMouseEnter={() => setOutcomesPaused(true)} onMouseLeave={() => setOutcomesPaused(false)}>
                    <div
                      ref={outcomesTrackRef}
                      className="outcomes-slider-track"
                      style={{ transform: `translateX(-${outcomesOffset}px)`, "--card-flex-basis": outcomesCardFlexBasis } as React.CSSProperties}
                      onTouchStart={handleOutcomesTouchStart}
                      onTouchMove={handleOutcomesTouchMove}
                      onTouchEnd={handleOutcomesTouchEnd}
                    >
                      {outcomesSliderCards.map((card, i) => (
                        <PropertyCard key={card.id} card={card} index={i} t={t} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="co-dots">
                  {Array.from({ length: Math.min(8, outcomesMaxIdx + 1) }).map((_, i) => (
                    <button key={i} className={`co-dot${outcomesCur === i ? " active" : ""}`} onClick={() => gotoOutcome(i)} aria-label={`Go to slide ${i + 1}`} style={{ background: outcomesCur === i ? RACING_GREEN : t.dotInactive }} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="outcomes-grid-container">
                {cards.map((card, i) => (
                  <PropertyCard key={card.id} card={card} index={i} t={t} />
                ))}
              </div>
            )}

            <div className="outcomes-btn-row" ref={buttonContainerRef}>
              <button className="view-more-btn" onClick={handleToggleCards} style={{ background: t.viewMoreBg, color: t.viewMoreColor }}>
                {showAllCards ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </div>

        <Image5 />

        {/* ══ TESTIMONIALS ══ */}
        <div className="testimonials-section-wrap" style={{ background: t.testimonialsBg }}>
          <section ref={testimonialsSectionRef} id="testimonials" className="testimonials-section">
            <div className="testimonials-head">
              <h2 className="testimonials-h2" tabIndex={0} style={{ color: t.headingColor }}>
                What Clients Say
                <div style={{ width: "160px", height: "1px", background: t.dividerColor }} />
              </h2>
              <p className="testimonials-subtitle" tabIndex={0} style={{ color: t.subtitleColor }}>In their own words, following their experience with Find &amp; Sign.</p>
            </div>

            <div className="testimonials-slider-col">
              {!showAllReviews ? (
                <>
                  <div className="testimonials-slider-wrapper">
                    <button className="nav-arrow prev" onClick={() => setReviewIdx(prev => Math.max(0, prev - 1))} disabled={reviewIdx === 0} aria-label="Previous" style={{ background: t.navArrowBg, color: t.navArrowColor }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="nav-arrow next" onClick={() => setReviewIdx(prev => Math.min(maxReviewIdx, prev + 1))} disabled={reviewIdx === maxReviewIdx} aria-label="Next" style={{ background: t.navArrowBg, color: t.navArrowColor }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                    <div className="testimonials-slider-viewport">
                      <div
                        ref={reviewTrackRef}
                        className="testimonials-slider-track"
                        style={{ transform: `translateX(-${reviewOffset}px)`, "--card-flex-basis": reviewCardFlexBasis } as React.CSSProperties}
                        onTouchStart={handleReviewTouchStart}
                        onTouchMove={handleReviewTouchMove}
                        onTouchEnd={handleReviewTouchEnd}
                      >
                        {formattedReviews.map((rv, i) => (
                          <TestimonialCard key={i} testimonial={rv} t={t} style={{ flex: `0 0 var(--card-flex-basis)`, minWidth: 0 }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="t-dots">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button key={i} className={`t-dot${i === reviewIdx ? " active" : ""}`} onClick={() => setReviewIdx(i)} aria-label={`Go to slide ${i + 1}`} style={{ background: i === reviewIdx ? RACING_GREEN : t.dotInactive }} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="reviews-all-grid">
                  {formattedReviews.map((rv, i) => (
                    <TestimonialCard key={i} testimonial={rv} t={t} />
                  ))}
                </div>
              )}
              <div ref={reviewButtonContainerRef}>
                <button className="view-more-btn" onClick={handleToggleReviews} style={{ background: t.viewMoreBg, color: t.viewMoreColor }}>
                  {showAllReviews ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          </section>
        </div>

        <Image6 />
        <SimpleGetInTouch />
        <SimpleFooter />
      </div>
    </>
  );
}