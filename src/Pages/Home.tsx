import HeroBanner from "../components/Banner";
import OurProcess from "../components/OurProcess";
import ClientOutcomes from "../components/ClientOutcomsection";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <OurProcess />
      <ClientOutcomes/>
      <Reviews />
      <FAQ />
      <GetInTouch />
      <Footer />
    </>
  );
}