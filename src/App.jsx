import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";
// import Button from "./components/Button";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <ButtonGradient />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
    </>
  );
};

export default App;
