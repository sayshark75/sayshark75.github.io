import { Flex } from "@chakra-ui/react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigLeft } from "./Animations/Animations";
import TechnicalSkills from "./Components/TechnicalSkills";
import Contact from "./Components/Contact";
import { AppMainFlex } from "./Themes/Styles/AppPageStyles";

function App() {

  return (
    <Flex {...AppMainFlex}>
      <Navbar />
      <FadeIn {...fadeInConfigLeft} durationInMilliseconds={1000} delayInMilliseconds={500}>
        <Home />
      </FadeIn>
      <FadeIn {...fadeInConfigLeft} durationInMilliseconds={1000} delayInMilliseconds={1000}>
        <About />
      </FadeIn>
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
