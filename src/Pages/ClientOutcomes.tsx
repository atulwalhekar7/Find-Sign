import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import SimpleGetInTouch from "../components/GetInTouch";
import SimpleFooter from "../components/SimpleFooter";
import AboutSection from "../components/AboutSection";
import Image5 from "../components/Image5";
import Image6 from "../components/Image6";

import bannerImg from "../assets/client-outcomes-banner-find-and-sign-buyers-agent-australia.jpg";
import AboutClientOutcomesImg from "../assets/find-and-sign-about-client-outcomes-property-experts-australia.png";

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
import starIcon from "../assets/Union.png";

import roksonImg from "../assets/testomonials/Rokson.png";
import rinzinWangchukImg from "../assets/testomonials/Rinzin Wangchuk.png";
import zedAImg from "../assets/testomonials/Zed A.png";
import kumarVasindaImg from "../assets/testomonials/Kumar Vasinda Comara.png";
import gurinderSinghImg from "../assets/testomonials/Gurinder Singh.png";
import kienLamImg from "../assets/testomonials/Kien Lam.png";

// ── CONSTANTS ────────────────────────────────────────
const AQUA         = "#69E4DC";
const WHITE        = "#FFFFFF";
const RACING_GREEN = "#073B2F";
const CARD_GAP     = 32;
const PEEK         = 60;

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
  { name: "Jay DASS",             date: "4 months ago",  title: "Seamless, well-managed",                  body: "Niki from Nakrani Property Buyers was an absolute pleasure to work with. From our first conversation through to completion, the process was seamless, well-managed and communicated clearly at every step." },
  { name: "Zed A",                date: "5 months ago",  title: "Massive asset, highly recommend",         body: "My team and I have worked with Nikki from Nakrani Property on many transactions. He excels at educating his clients and securing the best deals. Having Nikki on your side is a massive asset, and I highly recommend him to anyone buying a property in Perth.", image: zedAImg },
  { name: "Josh Mezger",          date: "3 months ago",  title: "A Bespoke, High-Touch Experience",        body: "What truly defines Nakrani Property Buyers is the white-glove service. Niki is: Proactive: He anticipates hurdles before they arise. Transparent: You are never left wondering where a deal stands; his communication is frequent, clear, and honest." },
  { name: "salam ishikura",       date: "5 months ago",  title: "Fantastic professional, proactive",       body: "I recently worked with Niki, and he was fantastic professional, proactive, and incredibly easy to communicate with. He genuinely looks after his clients and makes the whole process smooth and stress free." },
  { name: "Kumar Vasinda Comara", date: "7 months ago",  title: "Great experience from start to finish",   body: "As the seller's agent, I had the pleasure of working with Niki from Nakrani Property, and it was a great experience from start to finish.", image: kumarVasindaImg },
  { name: "Subho Ghosh",          date: "2 months ago",  title: "Absolute legends",                        body: "Niki and Bec were absolute legends. They really listened, stayed patient, and went the extra mile to help us find our dream home. Honest advice, great communication, and zero pressure. Couldn't have asked for better agents to guide us through the process. Highly recommend them." },
  { name: "Jasmine cheema",       date: "6 months ago",  title: "Truly exceptional at what he does",      body: "I recently had the opportunity to work with Niki, and I must say he is truly exceptional at what he does. He consistently puts his clients first and goes above and beyond to ensure they feel supported throughout the entire process." },
  { name: "Gurinder Singh",       date: "4 months ago",  title: "Great experience working with Niki",      body: "Great experience working with Niki on this transaction. Everything ran smoothly from start to finish. Niki has a strong understanding of the market, communicated clearly, and was professional throughout. A pleasure to deal with.", image: gurinderSinghImg },
  { name: "P Y",                  date: "4 months ago",  title: "Hands-on approach and professionalism",   body: "What really stood out about Niki compared to other buyer's agents I spoke with was his hands-on approach and professionalism from the very beginning. I was unsure about using a buyer's agent at first, but after our first call it was clear." },
  { name: "Travis Ranieri",       date: "10 months ago", title: "Ongoing support journey",                 body: "As a Buyers Agent Niki provided ongoing support through our property investment journey, delivering insights and become a trusted advisor for our family. Seamless process, highly recommend leveraging Niki and his team." },
  { name: "Kien Lam",             date: "8 months ago",  title: "Best in the business",                   body: "Niki is the best in the business. He has the best negotiating skills and can get you the best price for the property.", image: kienLamImg },
];

const formattedReviews = reviews.map(r => ({
  ...r,
  body: r.body.endsWith("…More") ? r.body.slice(0, -5).trim() : r.body,
}));

// ── TESTIMONIAL CARD ─────────────────────────────────
function TestimonialCard({ testimonial, style }: { testimonial: any; style?: React.CSSProperties }) {
  return (
    <div className="testimonial-card" style={style}>
      <div className="tc-pill">{testimonial.title}</div>
      <div className="tc-stars">
        <img src={starIcon} alt="5 stars" style={{ width: 177, height: 32.336, objectFit: "contain" }} />
      </div>
      <p className="tc-body">{testimonial.body}</p>
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
          <h4 className="tc-name">{testimonial.name}</h4>
          <p className="tc-date">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

// ── PROPERTY CARD ─────────────────────────────────────
function PropertyCard({ card, index }: { card: typeof cards[0]; index: number }) {
  return (
    <div className="property-card" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="card-image-wrap">
        <img src={card.image} alt="Property" className="card-image" />
      </div>
      <div
        className="growth-circle-container"
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
          <div key={label} className="card-row" style={{ borderBottom: i < arr.length - 1 ? "1px dashed #846F58" : "none" }}>
            <span className="row-label">{label}</span>
            <span className="row-val">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────
export default function ClientOutcomes() {
  const { hash } = useLocation();

  const [showAllCards, setShowAllCards] = useState(false);
  const INITIAL_CARDS_COUNT             = 21;
  const buttonContainerRef              = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1200);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── FIX: visibleReviewCount — desktop always shows exactly 3 ──
  const visibleReviewCount = isMobile ? 1 : isTablet ? 2 : 3;

  const [reviewIdx, setReviewIdx]           = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewOffset, setReviewOffset]     = useState(0);
  const reviewTrackRef                       = useRef<HTMLDivElement>(null);
  const reviewRafRef                         = useRef<number | null>(null);
  const reviewButtonContainerRef             = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef               = useRef<HTMLElement | null>(null);
  const outcomesSectionRef                   = useRef<HTMLDivElement | null>(null);


  // dots step: desktop=3, tablet=2, mobile=2 → ceil(15/2)=8 dots on mobile
  const dotsStep     = isMobile ? 2 : visibleReviewCount;
  const totalPages   = Math.ceil(formattedReviews.length / dotsStep);
  const maxReviewIdx = Math.max(0, totalPages - 1);

  // offset: each page jumps dotsStep cards
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

  useEffect(() => {
    setReviewIdx(prev => Math.min(prev, maxReviewIdx));
  }, [visibleReviewCount, maxReviewIdx]);

  const nextReview = useCallback(() => {
    setReviewIdx(prev => (prev >= maxReviewIdx ? 0 : prev + 1));
  }, [maxReviewIdx]);

  useEffect(() => {
    const t = setInterval(nextReview, 6000);
    return () => clearInterval(t);
  }, [nextReview]);

  useEffect(() => {
    if (hash === "#testimonials") {
      setTimeout(() => testimonialsSectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else if (hash === "#outcomes") {
      setTimeout(() => outcomesSectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  // ── FIX: card flex-basis — desktop fills exactly 1/3 of track width ──
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
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Animations ── */
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeatFloat {
          0%   { transform: translateY(0)    scale(1);    box-shadow: 0 4px 12px rgba(105,228,220,0.3); }
          14%  { transform: translateY(-3px) scale(1.06); box-shadow: 0 8px 20px rgba(105,228,220,0.4); }
          28%  { transform: translateY(0)    scale(1); }
          42%  { transform: translateY(-3px) scale(1.06); box-shadow: 0 8px 20px rgba(105,228,220,0.4); }
          70%  { transform: translateY(-8px) scale(1); }
          100% { transform: translateY(0)    scale(1); }
        }

        .hero-h1 {
          font-family: "GT Super Display Medium";
          font-size: 56px;
          font-weight: 500;
          color: #FFF;
          line-height: 1.1;
          letter-spacing: -1.28px;
          font-variant-numeric: lining-nums proportional-nums;
          margin: 0;
        }

        .outcomes-h2,
        .testimonials-h2 {
          color: ${RACING_GREEN};
          font-family: "GT Super Display Medium";
          font-size: 42px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.48px;
          font-variant-numeric: lining-nums proportional-nums;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .outcomes-h2::after,
        .testimonials-h2::after {
          content: "";
          width: 160px; height: 1px;
          background: ${RACING_GREEN};
        }

        .section-h3 {
          font-family: "GT Super Display Medium";
          font-size: 32px;
          font-weight: 500;
          color: ${RACING_GREEN};
          line-height: 1.2;
          letter-spacing: -0.4px;
          margin: 0;
        }

        .outcomes-subtitle,
        .testimonials-subtitle {
          color: #000;
          font-family: Sohne;
          font-size: 24px;
          font-weight: 300;
          line-height: 36px;
          margin-top: 24px;
        }

        /* ══ PROPERTY CARD ══ */
        .property-card {
          width: 100%;
          height: 440px;
          background: ${WHITE};
          border: 2px solid ${AQUA};
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.4s ease;
          cursor: pointer;
          overflow: hidden;
        }
        .property-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105,228,220,0.96);
        }
        .card-image-wrap {
          width: 100%; height: 200px;
          border-radius: 16px 16px 0 0;
          overflow: hidden; flex-shrink: 0;
        }
        .card-image {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: blur(3px) brightness(80%);
          transition: transform 0.3s ease;
          display: block;
        }
        .property-card:hover .card-image { transform: scale(1.08); }

        .growth-circle-container {
          position: absolute;
          bottom: 185px; right: 1px;
          width: 130px; height: 130px;
          border-radius: 50%;
          background: ${AQUA};
          z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          transition: filter 0.3s ease, background 0.3s ease;
        }
        .growth-circle-container:hover { animation: heartbeatFloat 4s ease-in-out infinite; }
        .property-card:hover .growth-circle-container {
          background: ${WHITE};
          filter: brightness(1.1) drop-shadow(0 4px 15px rgba(105,228,220,0.5));
        }
        .growth-label {
          color: ${RACING_GREEN};
          font-family: "SohneBuch"; font-size: 20px; font-weight: 400; line-height: 28px;
          width: 81px; text-align: center;
          display: flex; align-items: center; justify-content: center;
        }
        .growth-value {
          color: ${RACING_GREEN};
          font-family: "GT Super Display Medium";
          font-size: 37px; font-weight: 500; line-height: 40px; letter-spacing: -0.74px;
          width: 123px; text-align: center;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 4px;
        }
        .card-data { padding: 55px 18px 20px; flex: 1; }
        .card-row {
          display: flex; justify-content: space-between;
          align-items: center; padding: 10px 0;
        }
        .row-label { font-family: "SohneBuch"; font-size: 16px; color: #000; font-weight: 400; }
        .row-val   { font-family: "SohneBuch"; font-size: 16px; color: #757575; font-weight: 400; margin-left: auto; }

        /* ══ OUTCOMES SECTION ══ */
        .outcomes-section-wrap {
          background: #F9F9F9;
          width: 100%;
          overflow-x: clip;
        }
        .outcomes-section {
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 32px;
          padding: 64px 130px;
        }
        .outcomes-head {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
        }
        .outcomes-grid-container {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${CARD_GAP}px;
          padding: 20px 0 40px;
        }
        .outcomes-btn-row {
          grid-column: 1 / -1;
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        /* ══ TESTIMONIALS SECTION ══ */
        .testimonials-section-wrap {
          background: #EAE5DF;
          width: 100%;
          position: relative;
        }
        .testimonials-section {
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 32px;
          padding: 64px 130px;
        }
        .testimonials-head {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
        }
        .testimonials-slider-col {
          grid-column: 1 / -1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .testimonials-slider-wrapper {
          position: relative;
          width: 100%;
        }

        /* ── FIX: viewport clips overflow so only 3 cards show on desktop ── */
        .testimonials-slider-viewport {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          margin: -20px 0;
        }
        .testimonials-slider-track {
          display: flex;
          gap: ${CARD_GAP}px;
          transition: transform 0.55s cubic-bezier(0.77,0,0.18,1);
          will-change: transform;
        }

        /* ══ TESTIMONIAL CARD ══ */
        .testimonial-card {
          flex-shrink: 0;
          background: ${WHITE};
          border-radius: 24px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 407px;
          height: auto;
          border: 1px solid ${AQUA};
          transition: all 0.5s;
        }
        .testimonial-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 22px rgba(105,228,220,0.96);
        }

        .tc-pill {
          display: inline-flex;
          padding: 8px 16px;
          align-items: center;
          border-radius: 12px;
          background: ${AQUA};
          color: ${RACING_GREEN};
          font-size: 16px;
          font-weight: 400;
          font-family: SohneBuch;
          line-height: 24px;
          max-width: 100%;
          white-space: normal;
          word-break: break-word;
          overflow: visible;
          text-overflow: unset;
          align-self: flex-start;
          margin-bottom: 10px;
          flex-shrink: 0;
        }
        .tc-stars {
          display: flex; align-items: center;
          margin-top: 12px; flex-shrink: 0; margin-bottom: 10px;
        }
        .tc-body {
          width: 100%;
          color: #000;
          font-family: SohneBuch;
          font-size: 16px; font-weight: 400; line-height: 24px;
          margin-top: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .tc-footer {
          display: flex; align-items: center; gap: 12px;
          border-top: 1px solid #f3f4f6;
          padding-top: 12px; margin-top: auto; flex-shrink: 0;
        }
        .avatar-circle {
          width: 40px; height: 40px;
          border-radius: 50%; background: #D9D9D9;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid white;
          overflow: hidden; flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover .avatar-circle {
          box-shadow: 0 4px 15px rgba(105,228,220,0.6);
          border-color: ${AQUA} !important;
          transform: scale(1.05);
        }
        .tc-name {
          font-size: 0.875rem; font-weight: 400;
          color: #111827; margin: 0; font-family: SohneBuch;
        }
        .tc-date {
          font-size: 9px; font-weight: 500; color: #000;
          text-transform: uppercase; letter-spacing: 2.88px;
          margin-top: 2px; font-family: CX80; line-height: 15px;
        }

        /* ══ EXPANDED ALL-REVIEWS GRID ══ */
        .reviews-all-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${CARD_GAP}px;
          width: 100%;
        }

        /* ══ DOTS ══ */
        .t-dots { display: flex; gap: 12px; align-items: center; }
        .t-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #D0C9C0; border: none; padding: 0;
          cursor: pointer; transition: all 0.3s ease; flex-shrink: 0;
        }
        .t-dot.active { background: ${RACING_GREEN}; width: 24px; border-radius: 4px; }

        /* ══ NAV ARROWS ══ */
        .nav-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(11,215,205,0.96);
          background: white; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: ${RACING_GREEN}; padding: 0;
          transition: all 0.25s ease; flex-shrink: 0; z-index: 20;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .nav-arrow.prev { left: -60px; }
        .nav-arrow.next { right: -60px; }
        .nav-arrow:hover:not(:disabled) {
          transform: translateY(-50%) scale(1.05);
          background: ${RACING_GREEN}; color: white; border-color: ${RACING_GREEN};
        }
        .nav-arrow:disabled { opacity: 0.2; cursor: default; }

        /* ══ VIEW MORE BTN ══ */
        .view-more-btn {
          display: flex; height: 48px; padding: 12px 16px;
          justify-content: center; align-items: center; gap: 10px;
          border-radius: 8px; border: 1px solid ${AQUA};
          background: ${WHITE}; color: ${RACING_GREEN};
          font-family: CX80; font-size: 15px; font-weight: 700;
          line-height: 15px; letter-spacing: 4.8px; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
        }
        .view-more-btn:hover { background: ${AQUA}; transform: scale(1.05); }

        /* ══ TABLET (768–1199px) ══ */
        @media (max-width: 1199px) {
          .outcomes-section,
          .testimonials-section {
            column-gap: 24px;
            padding: 48px 48px 64px;
          }
          .hero-h1 { font-size: 44px; letter-spacing: -0.9px; }
          .outcomes-h2,
          .testimonials-h2 { font-size: 36px; line-height: 44px; }
          .section-h3 { font-size: 28px; }
          .outcomes-subtitle,
          .testimonials-subtitle { font-size: 20px; line-height: 32px; }
          .outcomes-grid-container { grid-template-columns: repeat(2, 1fr); }
          .reviews-all-grid        { grid-template-columns: repeat(2, 1fr); }
          .nav-arrow.prev { left: -44px; }
          .nav-arrow.next { right: -44px; }
          .growth-circle-container { width: 120px; height: 120px; bottom: 182px; }
          .growth-label { font-size: 18px; }
          .growth-value { font-size: 32px; }
        }

        /* ══ MOBILE (<768px) ══ */
        @media (max-width: 767px) {
          .hero-h1 { font-size: 56px; letter-spacing: -0.6px; line-height: 1.15; }
          .outcomes-h2,
          .testimonials-h2 { font-size: 42px; line-height: 32px; letter-spacing: -0.2px; }
          .outcomes-h2::after,
          .testimonials-h2::after { width: 100px; }
          .section-h3 { font-size: 32px; }
          .outcomes-subtitle,
          .testimonials-subtitle { font-size: 15px; line-height: 24px; margin-top: 14px; }

          .outcomes-section {
            grid-template-columns: repeat(12, 1fr);
            column-gap: 16px;
            padding: 40px 24px 56px 24px;
          }

          .testimonials-section-wrap { overflow: hidden; }
          .testimonials-section {
            grid-template-columns: repeat(12, 1fr);
            column-gap: 16px;
            padding: 40px 0 56px 24px;
          }

          .outcomes-head  { padding-right: 24px; }
          .testimonials-head { padding-right: 24px; }

          .outcomes-grid-container { grid-template-columns: 1fr; }
          .reviews-all-grid {
            grid-template-columns: 1fr;
            padding-right: 24px;
          }

          /* Mobile: restore overflow:visible + clip-path for peek effect */
          .testimonials-slider-viewport {
            overflow: visible;
            padding: 12px 0;
            margin: -12px 0;
            clip-path: none;
            -webkit-clip-path: none;
          }

          .testimonials-slider-wrapper { width: 100%; }
          .nav-arrow { display: none !important; }
          .t-dots        { padding-right: 24px; }
          .view-more-btn { margin-right: 24px; }
          .testimonials-slider-col > div:last-child {
            padding-right: 24px;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .growth-circle-container { width: 110px; height: 110px; bottom: 185px; }
          .growth-label { font-size: 16px; }
          .growth-value { font-size: 28px; width: 100px; }
          .row-label, .row-val { font-size: 14px; }
          .testimonial-card { min-height: unset; height: auto; }
          .tc-body { display: block; -webkit-line-clamp: unset; overflow: visible; }
          .tc-pill { font-size: 13px; line-height: 19px; padding: 6px 12px; border-radius: 10px; }
          .tc-stars img { width: 130px !important; height: auto !important; }
          .tc-body { font-size: 14px; line-height: 22px; }
        }

        /* ══ SMALL MOBILE (<480px) ══ */
        @media (max-width: 480px) {
          .hero-h1 { font-size: 56px; }
          .outcomes-h2,
          .testimonials-h2 { font-size: 42px; line-height: 29px; }
          .section-h3 { font-size: 32px; }
          .outcomes-subtitle,
          .testimonials-subtitle { font-size: 14px; line-height: 22px; }
          .tc-pill { font-size: 12px; padding: 5px 10px; }
        }
      `}</style>

      <div style={{ backgroundColor: WHITE, fontFamily: "Sohne, sans-serif" }}>

        {/* ══ HERO ══ */}
        <section style={{
          minHeight: "80vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          position: "relative", padding: "0 20px",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
          <div style={{
            position: "relative", zIndex: 2,
            textAlign: "center", maxWidth: 900, margin: "0 auto",
            padding: "60px 20px", borderRadius: 12,
            animation: "heroFadeIn 0.8s ease both",
          }}>
            <h1 className="hero-h1">Client Outcomes</h1>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <div className="client-outcomes-about">
          <AboutSection
            imageSrc={AboutClientOutcomesImg}
            heading="About Client Outcomes"
            body1="These are outcomes we have achieved for our clients. Real properties, real numbers, and measurable growth. When you engage Find and Sign Buyer Advocate, you are not simply purchasing a property; you are entering a strategy built for long-term performance. These examples show what is possible when the right property is identified and secured early."
          />
        </div>

        {/* ══ CLIENT OUTCOMES GRID ══ */}
        <div className="outcomes-section-wrap">
          <div ref={outcomesSectionRef} id="outcomes" className="outcomes-section">
            <div className="outcomes-head">
              <h2 className="outcomes-h2">Client Outcomes</h2>
              <p className="outcomes-subtitle">Explore more about client outcomes.</p>
            </div>
            <div className="outcomes-grid-container">
              {(showAllCards ? cards : cards.slice(0, INITIAL_CARDS_COUNT)).map((card, i) => (
                <PropertyCard key={card.id} card={card} index={i} />
              ))}
            </div>
            {cards.length > INITIAL_CARDS_COUNT && (
              <div className="outcomes-btn-row" ref={buttonContainerRef}>
                <button className="view-more-btn" onClick={handleToggleCards}>
                  {showAllCards ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>
        <Image5/>

        {/* ══ TESTIMONIALS ══ */}
        <div className="testimonials-section-wrap">
          <section ref={testimonialsSectionRef} id="testimonials" className="testimonials-section">
            <div className="testimonials-head">
              <h2 className="testimonials-h2">What Clients Say</h2>
              <p className="testimonials-subtitle">In their own words, following their experience with Find &amp; Sign.</p>
            </div>

            <div className="testimonials-slider-col">
              {!showAllReviews ? (
                <>
                  <div className="testimonials-slider-wrapper">
                    <button
                      className="nav-arrow prev"
                      onClick={() => setReviewIdx(prev => Math.max(0, prev - 1))}
                      disabled={reviewIdx === 0}
                      aria-label="Previous"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      className="nav-arrow next"
                      onClick={() => setReviewIdx(prev => Math.min(maxReviewIdx, prev + 1))}
                      disabled={reviewIdx === maxReviewIdx}
                      aria-label="Next"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="testimonials-slider-viewport">
                      <div
                        ref={reviewTrackRef}
                        className="testimonials-slider-track"
                        style={{
                          transform: `translateX(-${reviewOffset}px)`,
                          "--card-flex-basis": reviewCardFlexBasis,
                        } as React.CSSProperties}
                      >
                        {formattedReviews.map((t, i) => (
                          <TestimonialCard
                            key={i}
                            testimonial={t}
                            style={{ flex: `0 0 var(--card-flex-basis)`, minWidth: 0 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── FIX: dots count = totalPages (groups of visibleReviewCount) ── */}
                  <div className="t-dots">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        className={`t-dot${i === reviewIdx ? " active" : ""}`}
                        onClick={() => setReviewIdx(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="reviews-all-grid">
                  {formattedReviews.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                  ))}
                </div>
              )}

              <div ref={reviewButtonContainerRef}>
                <button className="view-more-btn" onClick={handleToggleReviews}>
                  {showAllReviews ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* ══ GET IN TOUCH + FOOTER ══ */}
        <Image6 />
        <SimpleGetInTouch />
        <SimpleFooter />
      </div>
    </>
  );
}