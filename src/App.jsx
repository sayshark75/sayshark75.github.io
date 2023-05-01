import { Flex } from "@chakra-ui/react";

import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigLeft } from "./Animations/Animations";
import { AppMainFlex } from "./Themes/Styles/AppPageStyles";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import TechnicalSkills from "./Pages/TechnicalSkills";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Flex {...AppMainFlex}>
      <Navbar />
        <Home />
        <About />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
