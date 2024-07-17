import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import PortfolioJS from "./components/PortfolioJS";
import PortfolioPy from "./components/PortfolioPy";
import PortfolioPHP from "./components/PortfolioPHP";
import PortfolioNR from "./components/PortfolioNR";
import PortfolioDA from "./components/PortfolioDA";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./components/Service";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Profile />
      <PortfolioJS />
      <PortfolioPy />
      <PortfolioPHP />
      <PortfolioNR />
      <PortfolioDA />
      <Service />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
