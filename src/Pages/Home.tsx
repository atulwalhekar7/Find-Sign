import HeroBanner from "../components/Banner";
import OurProcess from "../components/OurProcess";
import ClientOutcomes from "../components/ClientOutcomsection";
import Reviews from "../components/Reviews";
import GetInTouch from "../components/GetInTouch";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <OurProcess />
      <ClientOutcomes/>
      <Reviews />
      <GetInTouch />
    </>
  );
}