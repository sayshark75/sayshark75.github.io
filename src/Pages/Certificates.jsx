import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { AboutHeadings, AboutHeadings2 } from "../Themes/Styles/AboutPageStyles";
import CarouselComp from "../Components/CarouselComp";
import { CertificateHeadFlex } from "../Themes/Styles/CertificatesStyles";

const Certificates = () => {
  return (
    <Flex {...CertificateHeadFlex}>
      <Flex>
        <Heading {...AboutHeadings}>My&nbsp;</Heading>
        <Heading {...AboutHeadings2}>Achievements</Heading>
      </Flex>
      <CarouselComp />
    </Flex>
  );
};

export default Certificates;
