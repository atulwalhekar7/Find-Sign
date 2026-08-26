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
      body1={`Purchasing a property is one of the most significant financial decisions you will make. Our full Perth buyer agent service is designed to provide expert guidance, personalised strategy, and complete support throughout every stage of your property buying journey.

From the initial consultation, we understand your goals, requirements, and timeline to create a tailored buying strategy. As a trusted buyer advocate Perth specialist, we search both on-market opportunities and our exclusive off-market network, with every property personally inspected before it is recommended. We believe informed decisions come from experience, local knowledge, and physically understanding the property and its surroundings.`}

body2={`Once the right property is identified, we manage due diligence, coordinate building inspections and reports, and negotiate price and contract terms to secure the best possible outcome. You remain informed and involved at every stage while we handle the complexity of the process on your behalf.

Our full buyer advocacy service is personalised to your unique circumstances, property goals, and timeline. At Find & Sign Buyer Advocate, you are not just another transaction — you receive dedicated support from a team committed to helping you make confident property decisions.

From the first conversation through to settlement and beyond, we are with you every step of the way.`}
  />

      <GetInTouch initialService="Buyer Advocate" showService={true} />
      <SimpleFooter />
    </div>
    </>
  );
}