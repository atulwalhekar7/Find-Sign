import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import OurProcessBlog from "../../../Pages/Our-Process-Post2";
import "./Step-by-StepGuide.css";

// --- Assets ---
import bannerImg from "../../../assets/find-and-sign-buyer-advocate-blog3.png";

export default function FindAndSignBlog() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    document.title = "Find & Sign a Buyer Advocate in Perth: Step-by-Step Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top Perth Buyers Agents & Advocates WA. We help you find the right property in Perth's competitive market, including investment properties."
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
    <>
   
    <div>

      {/* ── Hero ── */}
      <section
        className="buyer-hero-section"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className={`video-loader-container${!isBannerLoading ? " hidden" : ""}`} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className={`attractive-loader${!isBannerLoading ? " hidden" : ""}`} aria-hidden="true" />
          <h1>Find &amp; Sign a Buyer Advocate in Perth: Step-by-Step Guide</h1>
          <p tabIndex={0}>Your trusted Perth Buyer's Agent &amp; Advocate</p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Intro ── */}
        <section className="intro-section">
          <p tabIndex={0} className="intro-lead">
            Buying a home or investment property in Perth, WA is a major milestone—yet the current Perth property market can feel like a warzone.
          </p>
          <p tabIndex={0} className="intro-body">
            With prices climbing and properties selling in the blink of an eye, it's easy to feel overwhelmed. Whether you're after a home or an investment, a Buyer Advocate Perth can help you secure the right property without the stress.
          </p>
        </section>

        {/* ── What Does a Buyer's Agent Do ── */}
        <section className="content-section">
          <h2 tabIndex={0}>What Does a Buyer's Agent in Perth Actually Do?</h2>
          <div className="content-body">
            <p tabIndex={0}>
              Think of a <a href="https://findandsignba.com.au/" style={{ color: "var(--primary-color, #0066cc)", textDecoration: "underline" }}>Perth Buyer's Agent</a>  as your personal talent scout and negotiator. While a selling agent works for the seller to get the highest price, a buyer's advocate works exclusively for you.
            </p>
            <p tabIndex={0}>
              From the initial search to the moment you collect the keys, they handle the entire process:
            </p>
            <ul>
              <li tabIndex={0}>Research the Perth market thoroughly</li>
              <li tabIndex={0}>Conduct detailed property inspections</li>
              <li tabIndex={0}>Manage all due diligence on your behalf</li>
              <li tabIndex={0}>Ensure a smooth home buying experience from start to finish</li>
            </ul>
          </div>
        </section>

        {/* ── Why You Need a Buyer Advocate ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Why You Need a Buyer Advocate to Buy at the Right Price</h2>
          <div className="content-body">
            <div className="card-grid">
              <div className="info-card">
                <h4 tabIndex={0}>Saves You Countless Hours</h4>
                <p tabIndex={0}>Forget spending every Saturday at open homes. Your advocate shortlists ideal property options that fit your needs.</p>
              </div>
              <div className="info-card">
                <h4 tabIndex={0}>Access to Off-Market Properties</h4>
                <p tabIndex={0}>A large number of top investment properties in Perth are sold before ever being listed online. Advocates use their relationships with selling agents to find these hidden gems.</p>
              </div>
              <div className="info-card">
                <h4 tabIndex={0}>Expert Negotiation</h4>
                <p tabIndex={0}>Negotiating with seasoned real estate agents is intimidating. An advocate uses their Perth real estate experience to secure the best terms for you.</p>
              </div>
              <div className="info-card">
                <h4 tabIndex={0}>Extensive Local Knowledge</h4>
                <p tabIndex={0}>Whether it's the growth potential of Scarborough or the hidden pockets of Subiaco, Perth advocates know which streets to buy on—and which to avoid.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Off-Market Properties ── */}
        <section className="content-section">
          <h2 tabIndex={0}>The Power of Off-Market Properties in Perth</h2>
          <div className="content-body">
            <p tabIndex={0}>
              Off-market properties are homes available for sale that aren't advertised to the general public. Sellers often prefer this approach for privacy.
            </p>
            <p tabIndex={0}>
              Because a <a href="https://findandsignba.com.au/" style={{ color: "var(--primary-color, #0066cc)", textDecoration: "underline" }}>buyer's agent in Perth</a> has deep industry ties, they get "first look" at these opportunities. This allows you to purchase without competing against hundreds of other buyers—helping you secure the best possible outcome.
            </p>
            <ul>
              <li tabIndex={0}>Exclusive access before public listing</li>
              <li tabIndex={0}>Less competition, more negotiating power</li>
              <li tabIndex={0}>Greater privacy for all parties</li>
            </ul>
          </div>
        </section>

        {/* ── Auction Day ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Taking the Heat Out of Auction Day</h2>
          <div className="content-body">
            <p tabIndex={0}>
              Auctions are high-pressure environments where emotions run high. By using a professional auction bidding service in Perth, you stay disciplined.
            </p>
            <p tabIndex={0}>
              A buyer's advocate bids on your behalf with a clear strategy, ensuring you never overpay due to "auction fever" and helping you secure the best possible price.
            </p>
            <p tabIndex={0}>
              We go in with a maximum bid, a clear plan, and the composure that only comes from experience—so you can watch confidently from the sidelines.
            </p>
          </div>
        </section>

        <OurProcessBlog />

        {/* ── Why Choose Us ── */}
        <section className="why-choose-section">
          <div className="why-choose-inner">
            <h2 tabIndex={0}>Why Choose Find &amp; Sign Buyer Advocate?</h2>
            <p tabIndex={0}>
              We believe the buying process should be rewarding, not exhausting. Our end-to-end service covers every step of your journey.
            </p>
            <div className="why-tags">
              {[
                "Property Sourcing",
                "Due Diligence & Inspections",
                "Expert Negotiation & Bidding",
                "Access to Off-Market Listings",
                "100% Independent Advice",
              ].map((item, i) => (
                <div key={i} className="why-tag">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="faq-section">
          <h2 tabIndex={0}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: "Is a buyer advocate the same as a real estate agent?", a: "No. A real estate agent is a selling agent paid by the seller. A buyer's agent is paid by you to find the right property and negotiate the best possible price on your behalf." },
              { q: "How much are buyer's agent fees?", a: "Fees vary depending on the level of service. However, most clients find that money saved through expert negotiation and avoiding poor properties more than covers the cost." },
              { q: "Can they help with suburb research?", a: "Yes! Providing data-driven insights into Perth WA suburbs is a key part of the service—ensuring you buy in an area with strong future value." },
              { q: "Do I still need a building inspector?", a: "Absolutely. While an advocate will spot obvious issues during inspections, they always coordinate with professional inspectors to ensure the process is safe and thorough." },
              { q: "Can a buyer's agent help with investment properties?", a: "Yes. They don't just look for a 'nice kitchen'—they focus on capital growth, rental yield, and creating a long-term investment strategy tailored to your goals." },
            ].map((faq, i) => (
              <div key={i} className="faq-card">
                <h4 tabIndex={0}>{faq.q}</h4>
                <p tabIndex={0}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Thoughts ── */}
        <section className="final-thoughts-section">
          <div className="final-thoughts-inner">
            <div style={{ marginBottom: "40px" }}>
              <span className="quote-mark">"</span>
              <blockquote>
                You don't have to navigate the property market alone—a Buyer Advocate Perth ensures you make a confident, informed decision every step of the way.
              </blockquote>
            </div>
            <p>
              Ready to find your dream property? Reach out to the Perth team at Find &amp; Sign today and let us help you secure your future.
            </p>
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />
    </div>
    </>
  );
}