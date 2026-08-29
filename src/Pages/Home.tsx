
import HeroBanner from "../components/Banner/Banner";
import OurProcess from "../components/OurProcess/OurProcess";
import ClientOutcomes from "../components/ClientOutcomeSection/ClientOutcomesection";
import Image1 from "../components/Image1/Image1";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Image2 from "../components/Image2/Image2";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";


export default function Home() {
  return (
    <>
    <SEO
  title="Perth Buyer Advocate | Trusted Buyer Advocate Perth | Find & Sign"
  description="Work with a trusted Perth Buyer's Advocate to find, negotiate and secure the right property. Find & Sign Buyer Advocate Perth provides expert guidance, market insights and access to quality opportunities."
/>
      <HeroBanner />
<OurProcess />
      <ClientOutcomes/>
      <Image1/>
      <Reviews />
      <FAQ />
      <Image2/>
      <GetInTouch />
      <Footer />
    </>
  );
}