import HeroBanner from "../components/Banner";
import OurProcess from "../components/OurProcess";
import Reviews from "../components/Reviews";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <OurProcess />
      <Reviews />
      <GetInTouch />
      <Footer />
    </>
  );
}