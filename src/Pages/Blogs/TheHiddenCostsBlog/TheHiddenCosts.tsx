import React, { useEffect, useState } from "react";
import SimpleGetInTouch from "../../../components/GetInTouch/GetInTouch";
import SimpleFooter from "../../../components/Footer/Footer";
import OurProcessBlog from "../../../Pages/Our-Process-Post2";
import "./TheHiddenCosts.css";

// --- Assets ---
// Replace with the actual banner image for this blog post
import bannerImg from "../../../assets/Blog7.png";
import SEO from "../../../components/SEO";

export default function HiddenCostsBuyingProperty() {
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    document.title = "Hidden Costs of Buying Property in Western Australia | Perth Buyer’s Agent";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about the hidden costs of buying property in Western Australia and how a Perth buyer’s agent can help you plan, negotiate and buy with confidence."
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

  const costItems = [
    {
      title: "Stamp Duty & Transfer Duty",
      desc: "Transfer duty is a government charge tied to property transactions. It depends on the value of the property, the type of transaction, and the buyer's circumstances, and it's usually payable upfront — so it's important to calculate it before making an offer. Rules and concessions can change, so always verify the latest information from the Western Australian government.",
    },
    {
      title: "First Home Buyer Concessions",
      desc: "First home buyers may qualify for concessions or duty exemptions. Eligibility depends on the property value, ownership status, and whether the property will be your principal residence. Knowing what you qualify for before purchasing helps you budget accurately.",
    },
    {
      title: "Legal, Conveyancing & Settlement Fees",
      desc: "A conveyancer or settlement agent handles the transfer of the property from seller to buyer — reviewing documents, managing settlement requirements, and communicating with all parties. These fees should be budgeted from the very beginning. It's also worth having a lawyer review the contract terms before you sign.",
    },
    {
      title: "Building & Pest Inspection Costs",
      desc: "A building inspection can reveal issues, defects, and other problems that aren't visible during a viewing, helping you decide if the price is justified. Pest inspections identify termites and other pests — and if problems are found, they may influence your negotiation position.",
    },
    {
      title: "Home Loan & Finance-Related Costs",
      desc: "A mortgage's interest rate isn't the only cost. Lenders may charge application or valuation fees, and some buyers need lenders mortgage insurance depending on their deposit and loan structure. Always ask for a full breakdown of loan costs — a lower advertised rate can still end up costly once fees are added.",
    },
    {
      title: "Council Rates, Water Charges & Insurance",
      desc: "Costs continue well after settlement. Council rates fund local services and water charges are a separate ongoing expense, both varying with the property and location. Home and contents insurance is another cost to estimate before purchasing so it's included in your budget.",
    },
    {
      title: "Strata Fees & Special Levies",
      desc: "If you're buying an apartment or unit, strata fees help maintain shared areas and facilities, and the amount depends on the building and its management. Properties with more facilities often carry higher ongoing costs, so check for possible special levies before you commit.",
    },
    {
      title: "Repairs, Maintenance & Moving Costs",
      desc: "Some costs only appear after you receive the keys. Painting, replacing fixtures, and general maintenance can add up after inspections reveal what needs attention — a financial buffer helps manage this. Don't forget moving expenses either: removalists, storage, cleaning, and utility connections all add to the total.",
    },
    {
      title: "Hidden Costs for Property Investors",
      desc: "Investors need to look beyond the purchase price to management fees, insurance, maintenance, accounting, and vacancy periods, all of which affect the return on investment. Rental income isn't guaranteed, so unexpected repairs and vacancies can impact cash flow — keeping a buffer and assessing all ongoing costs is essential.",
    },
    {
      title: "How a Perth Buyer's Agent Can Help",
      desc: "Buying property involves more than finding a home you like — it means weighing location, condition, value, risk, negotiation, and overall finances together. Find & Sign is a Perth buyer's agent, also known as a buyer's advocate, helping clients from the property search through to settlement with a clear plan and support at every key stage.",
    },
  ];

  const keyTakeaways = [
    "Hidden costs go well beyond the advertised purchase price.",
    "Transfer duty is often a significant upfront expense.",
    "Building and pest inspections can uncover issues before you commit.",
    "Legal, conveyancing and settlement fees are part of the total cost.",
    "Home loans can carry fees that go beyond the interest rate.",
    "Council rates, insurance and strata fees add up as ongoing costs.",
    "First home buyers may qualify for concessions or assistance.",
    "Early planning helps you avoid financial surprises at settlement.",
  ];

  const faqs = [
    {
      q: "What are the hidden costs of buying property in Western Australia?",
      a: "Common extra costs can include transfer duty, conveyancing or settlement fees, building and pest checks, loan charges, insurance, council rates, water fees, moving costs and upkeep. The exact costs depend on the property, buyer and deal, so they should be calculated before a purchase is made.",
    },
    {
      q: "Do home buyers in Western Australia pay transfer duty?",
      a: "In most cases, yes. First home buyers may get discounts or exemptions depending on their situation and the current rules, which can change — so it's worth checking the official information before buying.",
    },
    {
      q: "Is a building inspection worth the cost?",
      a: "For buyers, a building check is a key part of careful due diligence. It can uncover faults or future repair problems that a normal inspection may miss, helping you make a more informed decision before you buy.",
    },
    {
      q: "Are strata fees a cost to consider?",
      a: "Yes. If you're buying a home with strata management, ongoing fees can become a significant regular cost. It's worth knowing what the fees cover and whether extra costs or special levies might apply.",
    },
    {
      q: "How can a buyer prepare for these costs?",
      a: "Build a property budget that lists both upfront and ongoing costs. Beyond the expected expenses, keep a reserve for surprise repairs, upkeep, or other bills that may come up after settlement.",
    },
  ];

  return (
    <>

    <SEO
  title="Hidden Costs of Buying Property in Western Australia | Perth Buyer’s Agent"
  description="Learn about the hidden costs of buying property in Western Australia and how a Perth buyer’s agent can help you plan, negotiate and buy with confidence."
/>
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
          <h1>The Hidden Costs of Buying Property in Western Australia</h1>
          <p tabIndex={0}>What every Perth buyer should budget for beyond the price tag</p>
        </div>
      </section>

      <main style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Intro ── */}
        <section className="intro-section">
          <p tabIndex={0} className="intro-lead">
            The hidden costs of buying property in Australia can catch people off guard, whether it's a first home, a larger house, or a new investment. The price on the sign is only the starting point.
          </p>
          <p tabIndex={0} className="intro-body">
            The hidden costs of buying property in Western Australia include the deposit, transfer duty, inspections, legal fees, insurance, loan costs, council rates and unexpected repairs. Understanding these costs before making an offer can help you build a realistic budget and avoid financial surprises later in the process.
          </p>
        </section>

        {/* ── Why Look Beyond the Purchase Price ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Why Property Buyers Need to Look Beyond the Purchase Price</h2>
          <div className="content-body">
            <p tabIndex={0}>
              The total cost of buying property in Western Australia isn't limited to the sale price. It spans purchase, financing, inspection, settlement and maintenance costs — some easy to predict, others that only appear later.
            </p>
            <p tabIndex={0}>
              For example, you may have saved enough for the deposit, but transfer duty, inspection fees, settlement costs, insurance and immediate repairs can still be waiting. If these extra costs aren't planned for, they can put real strain on your finances — which is why a budget covering both upfront and ongoing expenses matters so much.
            </p>

            <h3 tabIndex={0} className="sub-heading">Building a Realistic Property Budget</h3>
            <p tabIndex={0}>
              First home buyers in particular tend to focus mainly on the deposit. But a complete list should also include transfer duty, professional fees, inspections, finance costs and moving expenses — followed by ongoing items like insurance, council rates, utilities and maintenance. If you may qualify for government assistance, check your eligibility early so it can factor into your plan. Planning ahead reduces stress and keeps your finances balanced.
            </p>
          </div>
        </section>

        {/* ── 10 Hidden Costs to Plan For ── */}
        <section className="content-section">
          <h2 tabIndex={0}>10 Hidden Costs Every Buyer Should Plan For</h2>
          <div className="questions-list">
            {costItems.map((item, i) => (
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

        {/* ── Key Takeaways ── */}
        <section className="content-section">
          <h2 tabIndex={0}>Key Takeaways</h2>
          <div className="content-body">
            <p tabIndex={0}>
              Before you make an offer, keep these points in mind:
            </p>
            <ul className="benefits-list">
              {keyTakeaways.map((t, i) => (
                <li tabIndex={0} key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="why-choose-section">
          <div className="why-choose-inner">
            <h2 tabIndex={0}>How Find &amp; Sign Buyer Advocate Can Help</h2>
            <p tabIndex={0}>
              Buying property involves more than finding a home you like — it means weighing location, condition, value, risk, negotiation and overall finances together. As a Perth buyer's agent, we help clients from the property search through to settlement, giving you a clear plan and support at every key stage. If you don't need a full-service manager, our advisory service gives you focused help while you stay in control of the decisions.
            </p>
            <p tabIndex={0} className="commitment-line">
              The right level of support depends on your situation, goals and time frame — and that's exactly where we start.
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
                Buying property in Western Australia is a money decision, and the listed price is only the start.
              </blockquote>
            </div>
            <p>
              Transfer duty, legal and settlement fees, building and pest checks, finance charges, insurance, council rates, strata fees, upkeep and moving costs all add to the true cost of owning a property. The best way to avoid surprises is to plan early — know the upfront costs, add up the ongoing expenses, and keep a financial cushion in reserve. With careful planning and the right professional support, you can approach your property purchase with far more confidence.
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