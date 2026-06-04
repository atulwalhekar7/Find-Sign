import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import "./BestSuburbsPerthBlog.css";

// --- Assets ---
import bannerImg from "../../../assets/best-suburbs-perth-property-investment-2026.jpg";
import agentImg from "../../../assets/why-perth-is-a-property-investment-hotspot.jpg";
import servicesImg from "../../../assets/perth-property-investment-strategy.jpg";
import benefitsImg from "../../../assets/best-perth-suburbs-for-property-investment.png";
import processImg from "../../../assets/how-to-choose-best-perth-investment-suburb.jpg";

const SideBySideSection = ({
  title,
  content,
  image,
  imageAlt,
  imageTitle,
  imageCaption,
  reverse = false,
}: {
  title: string;
  content: React.ReactNode;
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  imageCaption?: string;
  reverse?: boolean;
}) => (
  <section className={`side-by-side-section${reverse ? " reverse" : ""}`}>
    <div className="side-by-side-image-wrap">
      <img
        src={image}
        alt={imageAlt || title}
        title={imageTitle}
        className="side-by-side-img"
      />
    </div>
    <div className="side-by-side-content">
      <h2 tabIndex={0} className="side-by-side-title">{title}</h2>
      <div tabIndex={0} className="side-by-side-body">
        {content}
      </div>
    </div>
  </section>
);

export default function BestSuburbsPerthBlog() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    document.title = "Best Suburbs in Perth for Property Investment 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover the best suburbs in Perth for property investment in 2026. Learn where to invest for high growth, rental yield, and long-term returns."
      );
    }

    const timer = setTimeout(() => setIsBannerLoading(false), 1200);
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => setIsBannerLoading(false);
    return () => {
      clearTimeout(timer);
      img.onload = null;
    };
  }, []);

  return (
    <div className="blog-page-root">

      {/* ── Hero ── */}
      <section className="blog-hero-banner">
        <img
          src={bannerImg}
          alt="Perth buyer advocate sharing property market insights and investment guidance"
          title="Perth Property Market Insights | Find and Sign"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
          className="hero-bg-img"
        />

        <span className="sr-only">
          Expert Perth property market insights, buying strategies and investment
          guidance from Find and Sign Buyer Advocate.
        </span>

        <div className={`video-loader-container${!isBannerLoading ? " hidden" : ""}`} />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className={`attractive-loader${!isBannerLoading ? " hidden" : ""}`} aria-hidden="true" />
          <h1 tabIndex={0} className="hero-title">
            Best Suburbs in Perth for Property Investment in 2026
          </h1>
          <p tabIndex={0} className="hero-subtitle">
            Discover top suburbs for high growth, rental yield, and long-term returns
          </p>
        </div>
      </section>

      <main className="blog-main">

        {/* ── Why Perth ── */}
        <SideBySideSection
          title="Why Perth Is a Hotspot for Property Investment"
          image={agentImg}
          imageAlt="Perth city skyline highlighting the growth and investment opportunities in the property market"
          imageTitle="Why Perth is a Property Investment Hotspot | Find and Sign"
          imageCaption="Perth's property market is booming with growth and investment opportunities for buyers and investors."
          content={
            <>
              <p>Perth has quickly become one of Australia's most attractive cities for property investors. With relatively affordable entry prices, strong rental demand, and growing population trends, it offers a unique opportunity for both new and experienced investors.</p>
              <p className="mt-20"><strong>However, success in property investment comes down to one critical factor—choosing the right suburb.</strong></p>
              <p className="mt-15">If you're working with a find and sign buyer advocate in Perth, selecting high-growth areas becomes significantly easier and more strategic.</p>
            </>
          }
        />

        {/* ── What Makes ── */}
        <SideBySideSection
          title="What Makes a Suburb a Good Investment?"
          image={benefitsImg}
          imageAlt="Key factors that make a suburb a good property investment opportunity in Perth"
          imageTitle="What Makes a Suburb a Good Investment in Perth | Find and Sign"
          imageCaption="Key factors that make a suburb a good property investment opportunity in Perth, including growth drivers and market trends."
          reverse
          content={
            <>
              <p>Before diving into the top suburbs, it's important to understand what drives property growth.</p>
              <ul className="content-list">
                <li><strong>Strong Population Growth</strong><br />Areas with increasing population often see higher demand and price appreciation.</li>
                <li><strong>Infrastructure Development</strong><br />New transport links, schools, and commercial hubs boost property value.</li>
                <li><strong>Rental Demand</strong><br />High rental demand ensures consistent income and low vacancy rates.</li>
                <li><strong>Affordability &amp; Growth Potential</strong><br />Undervalued suburbs tend to offer better long-term returns.</li>
                <li><strong>Lifestyle Appeal</strong><br />Proximity to beaches, CBD, and amenities attracts both buyers and tenants.</li>
              </ul>
            </>
          }
        />

        {/* ── Top Suburbs ── */}
        <section className="section-pad">
          <h2 tabIndex={0} className="section-heading-center">
            Top Suburbs in Perth for Property Investment
          </h2>
          <div className="top-suburbs-grid">
            {[
              { name: "Baldivis", why: ["Growing population", "New housing developments", "Good rental demand"] },
              { name: "Morley", why: ["Strong infrastructure growth", "Increasing demand", "Proximity to major shopping centres"] },
              { name: "Scarborough", why: ["Coastal living appeal", "High rental yield potential", "Tourism-driven demand"] },
              { name: "Joondalup", why: ["Established infrastructure", "Strong employment hubs", "Consistent demand"] },
              { name: "Canning Vale", why: ["High-quality amenities", "Good schools", "Stable property prices"] },
              { name: "Rockingham", why: ["Affordable entry", "Lifestyle demand", "Growth potential"] },
            ].map((suburb, i) => (
              <div
                key={i}
                className={`suburb-card${i % 2 === 0 ? " suburb-card-left" : ""}`}
              >
                <h3 tabIndex={0} className="suburb-card-title">{suburb.name}</h3>
                <ul className="suburb-card-list">
                  {suburb.why.map((item, j) => (
                    <li key={j} tabIndex={0} className="suburb-card-item">
                      <span className="suburb-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Emerging ── */}
        <section className="emerging-section">
          <h2 tabIndex={0} className="section-heading-center">
            Emerging Suburbs to Watch in 2026
          </h2>
          <p tabIndex={0} className="section-subtext-center">
            Smart investors don't just look at current hotspots—they identify future growth areas.
          </p>
          <div className="emerging-grid">
            {[
              { name: "Alkimos", desc: "Rapid development and coastal location make it a promising suburb." },
              { name: "Byford", desc: "Affordable housing and infrastructure upgrades are driving demand." },
              { name: "Ellenbrook", desc: "Improved transport links are increasing its investment appeal." },
            ].map((suburb, i) => (
              <div key={i} className="emerging-card">
                <div className="emerging-number">{i + 1}</div>
                <h3 tabIndex={0} className="emerging-name">{suburb.name}</h3>
                <p tabIndex={0} className="emerging-desc">{suburb.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How to Choose ── */}
        <SideBySideSection
          title="How to Choose the Right Suburb for Your Goals"
          image={processImg}
          imageAlt="Perth property investment suburbs compared for capital growth rental yield and long term investment goals"
          imageTitle="How to Choose the Best Perth Suburb for Property Investment"
          imageCaption="Comparing Perth suburbs based on capital growth, rental yield and long-term investment potential."
          content={
            <>
              <p>Not all suburbs suit every investor. Your strategy should depend on your goals.</p>
              <ul className="content-list">
                <li><strong>For Capital Growth:</strong> Focus on inner and middle-ring suburbs with strong demand.</li>
                <li><strong>For Rental Yield:</strong> Look for affordable suburbs with high tenant demand.</li>
                <li><strong>For Long-Term Investment:</strong> Choose areas with planned infrastructure and population growth.</li>
              </ul>
              <p className="mt-20">
                <strong>Working with a buyer agent Perth ensures your strategy aligns with the right suburb selection.</strong>
              </p>
            </>
          }
        />

        {/* ── Mistakes ── */}
        <section className="mistakes-section">
          <h2 tabIndex={0} className="section-heading-center">
            Common Mistakes Investors Make
          </h2>
          <p tabIndex={0} className="section-subtext-center">
            Even in a strong market like Perth, mistakes can be costly.
          </p>
          <div className="mistakes-list">
            {[
              "Choosing suburbs based on hype instead of data",
              "Ignoring rental demand",
              "Overpaying due to lack of negotiation",
              "Not considering long-term growth",
              "Skipping professional advice",
            ].map((mistake, i) => (
              <div key={i} className="mistake-row">
                <span tabIndex={0} className="mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p tabIndex={0} className="mistake-text">{mistake}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How Find and Sign ── */}
        <SideBySideSection
          title="How Find and Sign Buyer Advocate Helps Investors"
          image={servicesImg}
          imageAlt="Perth buyer advocate helping property investors identify high growth opportunities and investment strategies"
          imageTitle="Perth Buyer Advocate for Property Investors | Find and Sign"
          imageCaption="Expert Perth buyer advocate helping investors identify growth opportunities, analyse market trends and secure the right properties."
          reverse
          content={
            <>
              <p>Finding the right suburb requires deep market knowledge and research.</p>
              <p className="mt-20"><strong>At Find and Sign, we help you:</strong></p>
              <ul className="content-list content-list-mt">
                <li>Identify high-growth suburbs</li>
                <li>Access off-market opportunities</li>
                <li>Analyse property data and trends</li>
                <li>Negotiate the best purchase price</li>
                <li>Build a long-term investment strategy</li>
              </ul>
              <p className="mt-20">Instead of guessing, you make informed decisions backed by expertise.</p>
            </>
          }
        />

        {/* ── Trends ── */}
        <section className="trends-section">
          <div className="trends-inner">
            <h2 tabIndex={0} className="trends-title">
              Perth Property Market Trends in 2026
            </h2>
            <p tabIndex={0} className="trends-subtitle">
              Understanding current trends helps you stay ahead of the market.
            </p>
            <div className="trends-tags">
              {["Increased interstate migration", "Rising rental demand", "Limited housing supply", "Growth in outer suburbs"].map((item, i) => (
                <div key={i} tabIndex={0} className="trend-tag">{item}</div>
              ))}
            </div>
            <p className="trends-footer">
              These factors make Perth a strong market for investors looking to enter now.
            </p>
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section className="final-thoughts-section">
          <div className="final-thoughts-inner">
            <h2 tabIndex={0} className="final-thoughts-heading">Final Thoughts</h2>
            <p tabIndex={0} className="final-thoughts-body">
              Perth offers incredible opportunities for property investors—but only if you choose the right suburb. Whether you're looking for capital growth, rental income, or long-term wealth, suburb selection is the key to success. Working with a trusted find and sign buyer advocate in Perth ensures you invest with confidence and clarity.
            </p>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="faq-section">
          <h2 tabIndex={0} className="section-heading-center">FAQs</h2>
          <div className="faq-list">
            {[
              { q: "Which suburb in Perth has the highest growth potential?", a: "Suburbs with strong infrastructure development and population growth tend to offer the best potential." },
              { q: "Is Perth good for property investment in 2026?", a: "Yes, Perth remains one of Australia's most affordable and high-growth markets." },
              { q: "What is the best strategy for beginners?", a: "Start with affordable suburbs that offer strong rental demand and growth potential." },
              { q: "Should I invest in coastal or inland suburbs?", a: "Both have advantages—coastal for lifestyle demand, inland for affordability and yield." },
              { q: "How can a buyer agent help with suburb selection?", a: "They provide data-driven insights and access to opportunities you may not find on your own." },
            ].map((faq, i) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={i} className={`faq-item${open ? " open" : ""}`}>
                  <button onClick={() => setOpen(!open)} className="faq-button">
                    <span tabIndex={0} className={`faq-question${open ? " open" : ""}`}>
                      {faq.q}
                    </span>
                    <svg className={`faq-icon${open ? " open" : ""}`} viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {open && (
                    <div className="faq-answer">
                      <p tabIndex={0} className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />
    </div>
  );
}