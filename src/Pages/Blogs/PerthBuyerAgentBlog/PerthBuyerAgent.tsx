import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import OurProcessBlog from "../../../Pages/Our-Process-Post2";
import "./PerthBuyerAgent.css";

// --- Assets ---
import bannerImg from "../../../assets/Blog5.jpg";

export default function AvoidOverpaymentBlog() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    // Updated Meta Title
    document.title = "Unlock Your Dream Home: The Role of a Buyer’s Agent in Perth.";
    
    // Updated Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover your dream home in Perth with expert buyer agents. We provide due diligence and negotiation support to help you find the right property in WA."
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
          <h1>What Does a Buyer Agent in Perth Actually Do? (A Simple Guide)</h1>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* ── Intro ── */}
        <section className="intro-section">
          <p tabIndex={0} className="intro-lead">
            Buying a dream home or an investment property in Perth should be an exciting milestone. However, the fast-moving Perth property market can make it feel like a second full-time job. Between endless home opens and the pressure of &ldquo;making the right offer,&rdquo; many home buyers feel overwhelmed.
          </p>
          <p tabIndex={0} className="intro-body">
            If you are tired of dealing with sales agents, you aren&rsquo;t alone. This is why more people are working with a buyer&rsquo;s agent in Perth to level the playing field.
          </p>
        </section>

        {/* ── Understanding the Role ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Understanding the Role of a Buyer&rsquo;s Agent in Perth</h2>
          <div className="content-body">
            <p tabIndex={0}>
              If you have been searching for a home or an investment property in Perth, you have likely spent hours talking to real estate agents at home opens. It is important to realize that those agents are working for the seller, not for you. This is where a buyer&rsquo;s agent in Perth&mdash;also known as a buyer&rsquo;s advocate&mdash;changes the dynamic of the buying process.
            </p>
            <p tabIndex={0}>
              A buyer&rsquo;s agent is a licensed real estate agent whose only job is to represent your best interests. They act as your professional partner, taking the stress out of the Perth real estate market by handling everything from finding the right property to managing the final paperwork. Essentially, they ensure you don&rsquo;t have to navigate the property world alone.
            </p>
          </div>
        </section>

        {/* ── Selling Agent vs Buyer Advocate ── */}
        <section className="content-section">
          <h3 tabIndex={0}>The Key Difference: Selling Agent vs. Buyer&rsquo;s Advocate</h3>
          <div className="content-body">
            <p tabIndex={0}>
              The biggest point of confusion for many home buyers is knowing who is on their side. To keep it simple: a selling agent is hired by the homeowner to get the best price for the seller. Their loyalty is to the person selling the house.
            </p>
            
            <div className="comparison-block">
              <div className="comparison-card comparison-card--vendor">
                <span className="comparison-label">Selling Agent</span>
                <p tabIndex={0}>Hired by the homeowner to get the highest possible price. Their loyalty is entirely to the seller.</p>
              </div>
              <div className="comparison-divider" aria-hidden="true">vs</div>
              <div className="comparison-card comparison-card--buyer">
                <span className="comparison-label">Buyer&rsquo;s Advocate</span>
                <p tabIndex={0}>Hired by you. Independent buyers experts who use their knowledge of the Perth market to ensure you pay less and get the best terms.</p>
              </div>
            </div>

            <p tabIndex={0}>
              While the selling agent wants you to pay more, your advocate uses their knowledge of the Perth market to ensure you pay less and get the best terms.
            </p>
          </div>
        </section>

        {/* ── Case Study / Real Example ── */}
        {/* <section className="content-section">
          <h2 tabIndex={0}>A Real Example: How an Expert Buyer&rsquo;s Agent Helps</h2>
          <div className="case-study-card">
            <span className="case-study-eyebrow">Case Profile</span>
            <h4 tabIndex={0}>How a Perth buyer&rsquo;s agent changes the buying process for Sarah</h4>
            <p tabIndex={0}>
              Sarah is a busy nurse looking to buy a home in the northern suburbs of Perth, WA. She has been searching the real estate market for six months. Every time she finds a house, it is sold before she can even visit.
            </p>
            
            <ol className="structured-steps-list" style={{ paddingLeft: "20px", margin: "20px 0" }}>
              <li tabIndex={0} style={{ marginBottom: "12px" }}>
                <strong>The Strategy:</strong> Instead of Sarah scrolling at midnight, her experienced buyer&rsquo;s agent defines her goals and budget.
              </li>
              <li tabIndex={0} style={{ marginBottom: "12px" }}>
                <strong>The Search:</strong> The agent uses an extensive agent network to find off-market properties Perth locals never see online. Sarah finds the perfect property before it is even advertised.
              </li>
              <li tabIndex={0} style={{ marginBottom: "12px" }}>
                <strong>The Due Diligence:</strong> The agent researches the area and checks for &ldquo;red flags.&rdquo; This ensures she is buying the right property at the best price.
              </li>
              <li tabIndex={0} style={{ marginBottom: "12px" }}>
                <strong>The Win:</strong> The agent handles the high-pressure negotiation. They know the selling agent&rsquo;s tactics and secure the home for much less than Sarah expected.
              </li>
            </ol>
          </div>
        </section> */}

        {/* ── Key Services ── */}
        <section className="why-choose-section">
          <div className="why-choose-inner">
            <h2 tabIndex={0}>Key Services Provided by a Property Buyer&rsquo;s Agency in Perth</h2>
            <p tabIndex={0}>
              A leading buyers agency in Perth like Find &amp; Sign provides more than just a list of houses. Our Perth team offers comprehensive support:
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h4 tabIndex={0}>Property Search Assistance</h4>
                <p tabIndex={0}>We find a property that fits your life and budget perfectly.</p>
              </div>
              <div className="service-card">
                <h4 tabIndex={0}>Off-Market Property Sourcing</h4>
                <p tabIndex={0}>Gain exclusive access to &ldquo;hidden&rdquo; investment properties across Perth.</p>
              </div>
              <div className="service-card">
                <h4 tabIndex={0}>Due Diligence and Inspections</h4>
                <p tabIndex={0}>We thoroughly check the details and property history so you don&rsquo;t buy a &ldquo;lemon.&rdquo;</p>
              </div>
              <div className="service-card">
                <h4 tabIndex={0}>Auction Bidding Services Perth</h4>
                <p tabIndex={0}>We stand in your place to secure the best property without the emotional stress.</p>
              </div>
              <div className="service-card">
                <h4 tabIndex={0}>Property Investment Advisory</h4>
                <p tabIndex={0}>Helping you safely invest in the Perth property market for sustainable, long-term growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Do People Use a Buyer's Advocate ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Why Do People Use a Buyer&rsquo;s Advocate in Perth?</h2>
          <div className="content-body">
            <p tabIndex={0}>
              The Perth real estate market is incredibly competitive. Discerning buyers utilize an experienced Perth agency because:
            </p>
            <ul>
              <li tabIndex={0}><strong>They are busy:</strong> Professionals and working families simply don&rsquo;t have time for 20 hours of property research a week.</li>
              <li tabIndex={0}><strong>Fear of overpaying:</strong> Without an expert buyer side advocate, it is incredibly easy to let emotions drive the purchase price too high.</li>
              <li tabIndex={0}><strong>Relocating to Perth:</strong> If you are moving to WA from interstate or overseas, you need a local with deep knowledge of the Perth suburbs.</li>
            </ul>
          </div>
        </section>

        {/* ── Common Misunderstandings ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Common Misunderstandings About Buyer&rsquo;s Agents</h2>
          <div className="content-body">
            <ul>
              <li tabIndex={0}><strong>&ldquo;They are only for the wealthy&rdquo;:</strong> Many first home buyers use an agent to safeguard their capital and avoid expensive starting mistakes.</li>
              <li tabIndex={0}><strong>&ldquo;I can find a property myself online&rdquo;:</strong> You can, but you only see a fraction of the actual Perth market. Advocates uncover premium hidden stock.</li>
              <li tabIndex={0}><strong>&ldquo;Buyer&rsquo;s agent fees are too high&rdquo;:</strong> Most clients find that the dynamic negotiation savings and asset quality more than cover the cost of the service.</li>
            </ul>
          </div>
        </section>

        <OurProcessBlog />

        {/* ── Why Choose Find & Sign ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Why Choose Find &amp; Sign Buyer Advocate?</h2>
          <div className="content-body">
            <p tabIndex={0}>
              At Find &amp; Sign, we are the best buyer&rsquo;s agents in Perth for those who value transparent, completely independent advice. We aren&rsquo;t here to push a specific development or listing. We are here to help you buy property with total confidence. From initial due diligence right through to settlement agent coordination, we support you every step of the way.
            </p>
          </div>
        </section>

        {/* ── Final Thoughts ── */}
       
        {/* ── FAQs ── */}
        <section className="faq-section">
          <h2 tabIndex={0}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { q: "1. What does a buyer agent do in Perth?", a: "They find, evaluate, perform due diligence on, and negotiate property exclusively for the buyer to ensure they get the best price and ideal contract terms." },
              { q: "2. Is a buyer advocate worth it?", a: "Yes. They save you hundreds of hours of research, help you avoid structural or regulatory layout \"lemons,\" and save you substantial money during the high-pressure negotiation process." },
              { q: "3. Can buyer agents access off-market properties?", a: "Absolutely. They use their established real estate agent network to find prime residential and investment properties in Perth before they hit public internet search portals." },
              { q: "4. How much does a buyer advocate cost in Perth?", a: "Fees vary based on scope, but they are typically structured as a transparent flat fee or a small percentage of the final property purchase price." },
              { q: "5. Do buyer agents help with auctions?", a: "Yes. They provide professional auction bidding services to ensure you stay calm, adhere strictly to data, and secure the property with the best strategic terms." },
            ].map((faq, i) => (
              <div key={i} className="faq-card">
                <h4 tabIndex={0}>{faq.q}</h4>
                <p tabIndex={0}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />
    </div>
  );
}