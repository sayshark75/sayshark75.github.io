import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { AboutHeadFlex, AboutHeadings, AboutHeadings2 } from "../Themes/Styles/AboutPageStyles";
import CarouselComp from "../Components/CarouselComp";

const Certificates = () => {
  return (
    <Flex {...AboutHeadFlex}>
      <Flex>
        <Heading {...AboutHeadings}>My&nbsp;</Heading>
        <Heading {...AboutHeadings2}>Achievements</Heading>
      </Flex>
      <CarouselComp />
    </Flex>
  );
};

export default Certificates;
