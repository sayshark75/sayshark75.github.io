import { Flex } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Flex direction={"column"} bgColor={"blackAlpha.900"}>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </Flex>
  );
}

export default App;
