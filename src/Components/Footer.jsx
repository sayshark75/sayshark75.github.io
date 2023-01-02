import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FooterTextStyle, FooterTopBox } from "../Themes/Dark/FooterPageStyles";

const Footer = () => {
  return (
    <>
      <Flex {...FooterTopBox}>
        <Text {...FooterTextStyle}>Made with </Text>
        <Text mx={"1"} color="red">
          <FavoriteIcon />
        </Text>
        <Text {...FooterTextStyle}>By Sayyed Sharuk</Text>
      </Flex>
    </>
  );
};

export default Footer;
