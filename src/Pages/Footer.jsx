import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FooterHeartIcon, FooterTextStyle, FooterTopBox } from "../Themes/Styles/FooterPageStyles";

const Footer = () => {
  return (
    <>
      <Flex {...FooterTopBox}>
        <Text {...FooterTextStyle}>Made with </Text>
        <Text {...FooterHeartIcon}>
          <BsFillHeartFill />
        </Text>
        <Text {...FooterTextStyle}>By Sayyed Sharuk</Text>
      </Flex>
    </>
  );
};

export default Footer;
