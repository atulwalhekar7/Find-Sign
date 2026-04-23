import { useState, useEffect, useCallback, useRef } from "react";
import { Star, Quote } from "lucide-react";
import SimpleGetInTouch from "../components/SimpleGetInTouch";
import SimpleFooter from "../components/Footer";
import AboutSection from "../components/AboutSection";

import bannerImg from "../assets/Client Outcomes_Banner.jpg";
import AboutClientOutcomesImg from "../assets/About Client Outcomes.png";

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


// ── DATA ─────────────────────────────────────────────
const AQUA = "#69E4DC";
const RACING_GREEN = "#003327";
const WHITE = "#FFFFFF";

// const CARD_GAP = 24;

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

const reviews = [
  {
    name: "Rok Son",
    date: "5 months ago",
    title: "Absolute pleasure from start to finish",
    body: "Working with Niki was an absolute pleasure from start to finish. He’s professional, knowledgeable, and genuinely invested in finding the perfect property for his clients. From our first meeting, Niki took the time to understand exactly what I was looking for — my budget. ",
  },
  {
    name: "Amit Bhardwaj",
    date: "2 months ago",
    title: "One of the best decisions we made",
    body: "Having Niki as our buyer’s agent was one of the best decisions we made. From the very start, he genuinely cared about finding the right home for us. He listened, guided us with confidence, and made what could have been a stressful process feel calm and manageable. ",
  },
  {
    name: "Raveen Liyanage",
    date: "a month ago",
    title: "Pleasure doing business with you",
    body: "Hi Niki, It was a pleasure doing business with you. Your genuine commitment to looking after your clients, while also ensuring the process runs smoothly for everyone involved, truly stands out. You consistently strive to find practical.",
  },
  {
    name: "Sahil Saini",
    date: "4 months ago",
    title: "Professional and great to work with",
    body: "Niki is professional and great to work with. His communication has been great for one of our clients to source a property before Christmas and met all deadlines. Not to mention the bargain he was able to secure for the property.",
  },
  {
    name: "Rinzin Wangchuk",
    date: "3 months ago",
    title: "Very professional and goes way above your needs",
    body: "Niki is very professional and goes way above your needs. I was looking for my first home in Perth and didn’t know where to begin.",
  },
  {
    name: "Prashanth Nayar",
    date: "5 months ago",
    title: "Thorough market insights and dedicated due-diligence",
    body: "As a selling-agent based in Perth, I've found that Niki brings thorough market insights, dedicated due-diligence and a genuine commitment to finding the right property for his clients. ",
  },
  {
    name: "Gian Ottavio",
    date: "2 months ago",
    title: "Nothing but professional",
    body: "Niki has been nothing but professional in all my dealings with him. I never have to think twice about how my clients will be handled as I've had nothing but amazing feedback from everyone I have referred his way.",
  },
  {
    name: "Karen Rowley",
    date: "5 months ago",
    title: "Absolutely fantastic experience",
    body: "We had an absolutely fantastic experience working with Niki as a Buyer’s agent. He was very professional and always communicated well with ourselves and his clients throughout the process. ",
  },
  {
    name: "dayna bechar",
    date: "5 months ago",
    title: "Absolute pleasure to work with",
    body: "Niki was an absolute pleasure to work with. His market knowledge and clear communication gave us total confidence throughout the process. He was always available to answer questions and offer advice. Thanks to Niki, we found our dream home without any stress. Highly recommend!",
  },
  {
    name: "Jay DASS",
    date: "4 months ago",
    title: "Seamless, well-managed and clearly communicated",
    body: "Niki from Nakrani Property Buyers was an absolute pleasure to work with. From our first conversation through to completion, the process was seamless, well-managed and communicated clearly at every step.",
  },
  {
    name: "Zed A",
    date: "5 months ago",
    title: "Massive asset, highly recommend",
    body: "My team and I have worked with Nikki from Nakrani Property on many transactions. He excels at educating his clients and securing the best deals. Having Nikki on your side is a massive asset, and I highly recommend him to anyone buying a property in Perth",
  },
  {
    name: "Josh Mezger",
    date: "3 months ago",
    title: "A Bespoke, High-Touch Experience",
    body: "What truly defines Nakrani Property Buyers is the white-glove service. Niki is: Proactive: He anticipates hurdles before they arise. Transparent: You are never left wondering where a deal stands; his communication is frequent, clear, and honest. ",
  },
  {
    name: "salam ishikura",
    date: "5 months ago",
    title: "Fantastic professional, proactive",
    body: "I recently worked with Niki, and he was fantastic professional, proactive, and incredibly easy to communicate with. He genuinely looks after his clients and makes the whole process smooth and stress free.",
  },
  {
    name: "Kumar Vasinda Comara",
    date: "7 months ago",
    title: "Great experience from start to finish",
    body: "As the seller's agent, I had the pleasure of working with Niki from Nakrani Property, and it was a great experience from start to finish.",
  },
];

// Helper to truncate body text if it ends with "...More"
const formatReviewBody = (text: string) => {
  if (text.endsWith("…More")) {
    return text.substring(0, text.length - 5).trim();
  }
  return text;
};

// Map the reviews to include the formatted body
const formattedReviews = reviews.map(review => ({
  ...review,
  body: formatReviewBody(review.body),
}));

// Use formattedReviews in the component
// ── SUB-COMPONENT ───────────────────────────────────
function PropertyCard({ card, index }: { card: typeof cards[0]; index: number }) {
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

      <div className="growth-circle" style={{ animationDelay: `${index * 150}ms` }}>
        <span className="growth-label">Growth</span>
        <span className="growth-value">{card.growth}</span>
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

// ── MAIN COMPONENT ───────────────────────────────────
export default function ClientOutcomes() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const [showAllCards, setShowAllCards] = useState(false);
  const INITIAL_CARDS_COUNT = 21;

  const [reviewContainerWidth, setReviewContainerWidth] = useState(0);

  const reviewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1100) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);

    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === reviewContainerRef.current) {
          setReviewContainerWidth(entry.contentRect.width);
        }
      }
    });

    if (reviewContainerRef.current) obs.observe(reviewContainerRef.current);

    return () => {
      window.removeEventListener("resize", update);
      obs.disconnect();
    };
  }, []);

  const maxReviewIdx = Math.max(0, formattedReviews.length - visibleCount);

  const nextReview = useCallback(() => {
    setReviewIdx(prev => (prev >= maxReviewIdx ? 0 : prev + 1));
  }, [maxReviewIdx]);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  useEffect(() => {
    setReviewIdx(prev => Math.min(prev, maxReviewIdx));
  }, [visibleCount, maxReviewIdx]);

  const reviewCardWidth = reviewContainerWidth 
    ? (reviewContainerWidth - 32 * (visibleCount - 1)) / visibleCount 
    : 350;

  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Sohne, sans-serif" }}>
      
      {/* ── HERO ───────────────────────────────── */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 20px",
            borderRadius: "12px",
            animation: "heroFadeIn 0.8s ease both",
          }}
        >
<h1 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "64px",
            fontWeight: 500,
            color: "#FFF",
            lineHeight: "1.1",
            letterSpacing: "-1.28px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: 0 
          }}>
            Client Outcomes
          </h1>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────── */}
      <AboutSection
        imageSrc={AboutClientOutcomesImg}
        heading="About Find & Sign"
        subheading=""
        body1="Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look."
        body2="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
      />

      {/* ── CLIENT OUTCOMES GRID ───────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <h2 style={{ 
            fontFamily: "'GT Super Display Medium'",
            fontSize: "44px",
            fontWeight: 500,
            color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            fontVariantNumeric: "lining-nums proportional-nums",
            margin: "0 0 4px"
          }}>
            Client Outcomes
          </h2>
        </div>

        <div className="outcomes-grid">
          {(showAllCards ? cards : cards.slice(0, INITIAL_CARDS_COUNT)).map((card, i) => (
            <PropertyCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {cards.length > INITIAL_CARDS_COUNT && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <button 
              className="view-more-outcomes-btn" 
              onClick={() => setShowAllCards(!showAllCards)}
            >
              {showAllCards ? "View Less" : "View More Outcomes"}
            </button>
          </div>
        )}
      </section>

      {/* ── WHAT OUR CLIENTS ARE SAYING ───────────────────────────────── */}
      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .testimonial-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 320px; /* Uniform height for testimonial cards */
          border: 2px solid ${AQUA};
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.5s;
        }
        .testimonial-card:hover {
          transform: translateY(-12px);
          border-color: #69E4DC;
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.96);
        }

        .avatar-circle {
          transition: all 0.3s ease;
        }
        .testimonial-card:hover .avatar-circle {
          box-shadow: 0 4px 15px rgba(105, 228, 220, 0.6);
          border-color: #69E4DC !important;
          transform: scale(1.05);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }

        .slider-track {
          display: flex;
          align-items: stretch; /* Ensures all cards in a row have same height */
        }

        .nav-arrow {
          width: 40px; height: 40px; border-radius: 50%; border: 1px solid #E5E5E5;
          background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .nav-arrow:hover { border-color: rgba(11, 215, 205, 0.96); color: rgba(11, 215, 205, 0.96); }

        @media (min-width: 768px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="testimonials-section" style={{ position: 'relative', padding: '80px 0', background: '#F9F9F9', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{  
            display: 'block', 
            padding: '0px', 
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontFamily: "'GT Super Display Medium'",
  fontSize: "44px",
  fontWeight: 500,
  color: "var(--FS-RACING-GREEN, var(--Brand-Foundation-FS-RACING-GREEN, #073B2F))",
  lineHeight: "120%",
  letterSpacing: "-0.48px",
  fontVariantNumeric: "lining-nums proportional-nums",
  margin: "0px 0px 4px",
            }}>
              What our clients are saying
            </h2>
          </div>

          <div ref={reviewContainerRef} style={{ overflow: "hidden", padding: "40px 0", margin: "-40px 0" }}>
          <div 
            className="slider-track"
            style={{
              display: "flex",
              gap: 32,
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(-${reviewIdx * (reviewCardWidth + 32)}px)`,
            }}
          >
            {formattedReviews.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ flex: `0 0 ${reviewCardWidth}px`, width: `${reviewCardWidth}px`, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  left: '24px', 
                  background: '#69E4DC', 
                  color: '#073B2F', 
                  fontSize: '12px', 
                  fontWeight: 'bold', 
                  padding: '8px 20px', 
                  borderRadius: '9999px', 
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
                  zIndex: 10,
                  maxWidth: '85%', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap'
                }}>
                   {testimonial.title}
                </div>
                
                <Quote style={{ color: 'rgba(11, 215, 205, 0.1)', position: 'absolute', top: '20px', right: '20px' }} size={48} />

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} style={{ color: '#fbbf24', fill: '#fbbf24' }} size={14} />
                    ))}
                  </div>

                  <p style={{ 
                    color: '#374151', 
                    marginBottom: '20px', 
                    lineHeight: 1.5, 
                    fontStyle: 'italic', 
                    fontSize: '0.9rem', 
                    fontFamily: 'Sohne', 
                    fontWeight: 300,
                    flex: 1,
                    display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    "{testimonial.body}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f3f4f6', paddingTop: '16px' }}>
                    <div className="avatar-circle" style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white", overflow: 'hidden' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="#aaa" strokeWidth="1.5"/>
                        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827', margin: 0, fontFamily: 'Sohne' }}>
                        {testimonial.name}
                      </h4>
                      <p style={{ fontSize: '11px', fontWeight: 500, color: '#073B2F', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px', fontFamily: 'Sohne' }}>
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> {/* Closing the reviews-grid wrapper div */}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ───────────────────────────────── */}
      <SimpleGetInTouch />

      {/* ── FOOTER ───────────────────────────────── */}
      <SimpleFooter />

      {/* ── RESPONSIVE ───────────────────────────────── */}
      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

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

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.11vw, 32px);
          padding: 40px 0;
        }

        @media (max-width: 1023px) {
          .outcomes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .outcomes-grid {
            grid-template-columns: 1fr;
          }
        }

        .property-card {
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
        
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105, 228, 220, 0.96);
        }

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
          transition: transform 0.6s ease;
        }

        .property-card:hover .card-image {
          transform: scale(1.08);
        }

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

        .growth-label { font-family: 'Sohne'; font-size: 10px; text-transform: uppercase; color: ${RACING_GREEN}; }
        .growth-value { font-family: 'GTSuper'; font-size: 18px; font-weight: 700; color: ${RACING_GREEN}; font-variant-numeric: lining-nums proportional-nums; }

        .card-data { padding: 55px 18px 20px; flex: 1; }
        .card-row { display: flex; justify-content: space-between; padding: 10px 0; }
        .row-label { font-family: 'Sohne'; font-size: 13px; color: #000; }
        .row-val { font-family: 'Sohne'; font-size: 13px; color: #757575; font-variant-numeric: lining-nums proportional-nums; }

        @media (max-width: 900px) {
          .grid-3 {
            grid-template-columns: 1fr 1fr !important;
          }
          h1 { font-size: 44px !important; line-height: 1.2 !important; }
        }

        @media (max-width: 500px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 36px !important;
          }
        }

        .view-more-outcomes-btn {
          height: 48px;
          padding: 0 32px;
          border-radius: 8px;
          border: 1px solid ${AQUA};
          color: ${RACING_GREEN};
          font-family: 'Sohne', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: ${WHITE};
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .view-more-outcomes-btn:hover { background: ${AQUA}; transform: scale(1.05); }
      `}</style>
    </div>
  );
}
