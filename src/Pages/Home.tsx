import HeroBanner from "../components/Banner";
import OurProcess from "../components/OurProcess";
import ClientOutcomes from "../components/ClientOutcomsection";
import Image1 from "../components/Image1/Image1";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Image2 from "../components/Image2/Image2";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/Banner/Banner";
import OurProcess from "../components/OurProcess/OurProcess";
import ClientOutcomes from "../components/ClientOutcomeSection/ClientOutcomesection";
import Image1 from "../components/Image1";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Image2 from "../components/Image2";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
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