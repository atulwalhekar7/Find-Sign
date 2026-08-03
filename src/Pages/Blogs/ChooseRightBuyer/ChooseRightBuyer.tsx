import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import OurProcessBlog from "../../../Pages/Our-Process-Post2";
import "./ChooseRightBuyer.css";

// --- Assets ---
// Replace with the actual banner image for this blog post
import bannerImg from "../../../assets/Blog6.jpeg";

export default function ChooseRightBuyer() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    document.title = "How to Choose the Right Buyer's Agent in Perth: Complete Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how to choose the right buyer's agent in Perth. Discover the key questions to ask, services to compare, and how experts help you secure the right property."
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

  const questions = [
    {
      title: "Are You Licensed and Experienced in the Perth Property Market?",
      desc: "Always confirm that your buyer's agent is fully licensed and has extensive experience working in Perth. Local knowledge of suburbs, pricing trends, and market conditions can make a significant difference when searching for the right property.",
    },
    {
      title: "Do You Understand My Buying Goals?",
      desc: "Every buyer has different priorities. Whether you're purchasing your first home, upgrading, relocating, or investing, your buyer's agent should understand your specific requirements before recommending properties.",
    },
    {
      title: "Can You Access Off-Market Properties?",
      desc: "Many of the best properties never reach public listings. Ask whether your buyer's agent has access to off-market opportunities through their professional network, giving you more options and less competition.",
    },
    {
      title: "How Do You Conduct Property Research and Due Diligence?",
      desc: "A reliable buyer's agent should thoroughly investigate every property before recommending it. This includes reviewing comparable sales, suburb performance, council information, building reports, and any potential risks that could affect your purchase.",
    },
    {
      title: "What Is Your Negotiation Strategy?",
      desc: "Effective negotiation may help you avoid paying more than necessary for your chosen property. Ask how the agent negotiates with selling agents and how they ensure you secure the best possible purchase price and contract terms.",
    },
    {
      title: "Do You Work With Home Buyers or Property Investors?",
      desc: "Some buyer's agents specialise in owner-occupied homes, while others focus on investment properties. Choose an agent whose experience aligns with your property goals.",
    },
    {
      title: "How Transparent Are Your Fees and Services?",
      desc: "A trustworthy buyer's agent should clearly explain their pricing, services, and what's included in their package. Transparency helps you understand exactly what you're paying for without hidden surprises.",
    },
    {
      title: "How Well Do You Know Perth's Suburbs?",
      desc: "Different Perth suburbs offer different lifestyles and investment potential. An experienced buyer's agent should be able to recommend locations that suit your budget, lifestyle, and long-term plans.",
    },
    {
      title: "Can You Share Client Success Stories?",
      desc: "Past client experiences provide valuable insight into an agent's professionalism and results. Ask for testimonials or examples that demonstrate their ability to help buyers secure great properties.",
    },
    {
      title: "Why Home Buyers Trust Find & Sign Buyer Advocate?",
      desc: "Choosing Find & Sign means partnering with a team that puts your interests first. We combine local Perth market knowledge with personalised property searches, detailed due diligence, skilled negotiation, and ongoing support from property search to settlement. Our goal is to make buying property simple, transparent, and successful.",
    },
  ];

  const benefits = [
    "Access to off-market properties.",
    "Expert negotiation that may save you money.",
    "Thorough property research and due diligence.",
    "Reduced stress throughout the buying process.",
    "Professional advice tailored to your goals.",
    "Local knowledge of Perth suburbs and market trends.",
  ];

  const faqs = [
    {
      q: "How do I choose the right buyer's agent in Perth?",
      a: "Look for a licensed professional with local market knowledge, transparent fees, strong negotiation skills, and proven client success.",
    },
    {
      q: "What questions should I ask a buyer's agent?",
      a: "Ask about their experience, access to off-market properties, negotiation strategy, fees, local expertise, and previous client results.",
    },
    {
      q: "Can a buyer's agent help first-home buyers?",
      a: "Yes. Buyer's agents assist first-home buyers by simplifying the buying process, researching suitable properties, and negotiating the best possible deal.",
    },
    {
      q: "Are buyer's agent fees worth paying?",
      a: "In many cases, yes. Their expertise, negotiation skills, and market knowledge can help buyers avoid costly mistakes and secure better value.",
    },
    {
      q: "Why should I choose Find & Sign Buyer Advocate?",
      a: "Find & Sign offers personalised service, extensive Perth market knowledge, professional negotiation, thorough due diligence, and dedicated support from start to finish.",
    },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="choose-hero-section"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className={`video-loader-container${!isBannerLoading ? " hidden" : ""}`} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className={`attractive-loader${!isBannerLoading ? " hidden" : ""}`} aria-hidden="true" />
          <h1>How to Choose the Right Buyer&rsquo;s Agent in Perth: 10 Questions Every Buyer Should Ask</h1>
          <p tabIndex={0}>Your trusted Perth buyer advocate</p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Intro ── */}
        <section className="intro-section">
          <p tabIndex={0} className="intro-lead">
            Buying a home or investment property is one of the biggest financial decisions you&rsquo;ll ever make. In a competitive Perth property market, having the right buyer&rsquo;s agent by your side can make the entire process smoother, less stressful, and more successful.
          </p>
          <p tabIndex={0} className="intro-body">
            However, not all buyer&rsquo;s agents offer the same level of expertise, service, or local knowledge. If you&rsquo;re planning to hire a buyer&rsquo;s agent in Perth, it&rsquo;s important to ask the right questions before making your decision. The right professional will not only help you find the ideal property but also protect your interests throughout the buying journey.
          </p>
        </section>

        {/* ── Why Choosing the Right Buyer's Agent Matters ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Why Choosing the Right Buyer&rsquo;s Agent in Perth Matters</h2>
          <div className="content-body">
            <p tabIndex={0}>
              A buyer&rsquo;s agent works exclusively for the buyer, unlike a <a href="https://findandsignba.com.au/services/sales-agent" style={{ color: "var(--primary-color, #0066cc)", textDecoration: "underline" }}>sales agent</a> who represents the seller. Their role is to understand your goals, search for suitable properties, carry out due diligence, negotiate the purchase price, and guide you through every stage of the transaction.
            </p>
            <p tabIndex={0}>
              Choosing an experienced buyer&rsquo;s agent in Perth means gaining access to local market insights, professional negotiation skills, and opportunities that may not be available to the general public. With the right expert on your side, you can buy with confidence while avoiding costly mistakes.
            </p>

            <h3 tabIndex={0} className="sub-heading">What Makes a Good Buyer&rsquo;s Agent Different?</h3>
            <p tabIndex={0}>
              An exceptional buyer&rsquo;s agent is more than someone who finds properties. They take the time to understand your lifestyle, financial situation, and long-term objectives. They provide honest advice, conduct detailed research, and negotiate solely in your best interests.
            </p>
            <p tabIndex={0}>
              Rather than rushing you into a purchase, a trusted <a href="https://findandsignba.com.au/" style={{ color: "var(--primary-color, #0066cc)", textDecoration: "underline" }}>Perth buyer advocate</a> helps you make informed decisions based on facts, market knowledge, and careful planning. This often involves collaborating with specialized partners such as a <a href="https://findandsignba.com.au/services/quantity-surveyor" style={{ color: "var(--primary-color, #0066cc)", textDecoration: "underline" }}>quantity surveyor</a> to evaluate property depreciation and construction costs accurately.
            </p>
          </div>
        </section>

        {/* ── 10 Questions ── */}
        <section className="content-section">
          <h2 tabIndex={0}>10 Questions Every Buyer Should Ask</h2>
          <div className="questions-list">
            {questions.map((item, i) => (
              <div key={i} className="question-card">
                <span className="question-number">{String(i + 1).padStart(2, "0")}</span>
                <div className="question-content">
                  <h4 tabIndex={0}>{item.title}</h4>
                  <p tabIndex={0}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <OurProcessBlog />

        {/* ── Benefits ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Benefits of Working with the Right Buyer&rsquo;s Agent</h2>
          <div className="content-body">
            <p tabIndex={0}>
              Hiring an experienced buyer&rsquo;s agent offers several advantages, including:
            </p>
            <ul className="benefits-list">
              {benefits.map((b, i) => (
                <li tabIndex={0} key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="why-choose-section">
          <div className="why-choose-inner">
            <h2 tabIndex={0}>Why Choose Find &amp; Sign Buyer Advocate?</h2>
            <p tabIndex={0}>
              Whether you&rsquo;re buying your first home or building an investment portfolio, we customise our service to match your objectives. Whether you&rsquo;re purchasing your first home, upgrading, relocating, or investing, our experienced team works exclusively for you. We provide honest advice, independent property recommendations, detailed market research, and expert negotiation to help you secure the right property at the right price.
            </p>
            <p tabIndex={0} className="commitment-line">
              Our commitment is simple: your success is our priority.
            </p>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="faq-section">
          <h2 tabIndex={0}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
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
              <span className="quote-mark">&quot;</span>
              <blockquote>
                Choosing the right buyer&rsquo;s agent in Perth is one of the most important decisions you&rsquo;ll make during your property journey.
              </blockquote>
            </div>
            <p>
              By asking the right questions and working with an experienced professional, you&rsquo;ll enjoy greater confidence, better opportunities, and a smoother buying experience. Whether you&rsquo;re purchasing your first home or your next investment, Find &amp; Sign Buyer Advocate offers expert support throughout the buying journey.
            </p>
          </div>
        </section>

      </main>

      <SimpleGetInTouch />
      <SimpleFooter />
    </div>
  );
}