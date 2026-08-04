import { useEffect } from "react";
import AboutSection from "../../components/AboutSection";
import SimpleFooter from "../../components/SimpleFooter";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AboutServiceImg from "../../assets/buyer-advocate-perth-australia-property-search.jpg";
import "./BuyerAdvocate.css";
import SEO from "../../components/SEO";

export default function BuyerAdvocate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
    
    <SEO
  title="Buyer Advocacy Services Perth | Expert Buyer Agent | Find & Sign"
  description="Find & Sign provides expert buyer advocacy services in Perth, helping clients search, negotiate, and secure the right property with professional guidance and market expertise."
/>
    <div className="buyer-advocate-page">
      {/* Hero */}
      <section className="buyer-advocate-hero">
        <div className="buyer-advocate-hero-content">
          <h1
            tabIndex={0}
            className="buyer-advocate-title"
          >
            Buyer Advocacy
          </h1>
        </div>
      </section>

      {/* About Section */}
      <AboutSection
        imageSrc={AboutServiceImg}
        imageAlt="Perth Buyer Advocate Australia helping clients secure residential and investment properties"
        imageTitle="Buyer Advocate Perth Australia | Find and Sign"
        heading="About Buyer Advocacy"
        subheading="Expert guidance for every step of your property journey."
        body1={`Purchasing a property is one of the most significant financial decisions you will ever make. Our full buyers agent service is designed to ensure that every step of that journey is handled with the expertise, care, and attention it deserves.
From the moment we begin working together, we take on the entire process on your behalf. We get to know your goals, your non-negotiables, and your timeline, and we build a strategy around them. We search both on-market listings and our off-market network, and every property we consider is physically inspected by us before it ever reaches you. We will never recommend a property we have not walked through ourselves. That is a standard we hold on every single engagement.`}
        body2={`Once the right property is identified, we manage all due diligence, coordinate building inspections and necessary reports, and negotiate the price and contract terms firmly in your favour. You are kept informed and involved at every touch point, without ever being burdened by the complexity of the process.
Our full service is deeply personal. No two clients are the same and neither is our approach. Every engagement is tailored to your specific situation, your goals, and your timeline. You are not just another transaction to us. You are someone we are genuinely invested in seeing succeed.
From the first conversation to settlement day and beyond, we are by your side every step of the way.`}
      />

      <GetInTouch initialService="Buyer Advocate" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}