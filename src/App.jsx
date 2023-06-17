import { Flex } from "@chakra-ui/react";
import { AppMainFlex } from "./Themes/Styles/AppPageStyles";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import TechnicalSkills from "./Pages/TechnicalSkills";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Certificates from "./Pages/Certificates";
import Experience from "./Pages/Experience";

function App() {
  return (
    <Flex {...AppMainFlex}>
      <Navbar />
      <Home />
      <About />
      <Certificates />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
