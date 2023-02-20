import React, { useContext } from "react";
import { Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";

import {MdOfflineBolt,MdSportsEsports,MdGrass} from "react-icons/md";
import {BsFillPlayCircleFill} from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";

import {
  AboutAfterHeading,
  AboutAfterHeadingMain,
  aboutButtonsTop,
  AboutHeadFlex,
  AboutHeadings,
  AboutHeadings2,
  AboutIconText,
  AboutProfilePicture,
  AboutSummaryInterest,
  AboutSummaryText,
} from "../Themes/Dark/AboutPageStyles";
import { ProfilePicBlue, ProfilePicBW } from "../Sources/Images";
import { LaboutButtonsTop, LAboutHeadings, LAboutHeadings2, LAboutIconText, LAboutProfilePicture, LAboutSummaryInterest, LAboutSummaryText } from "../Themes/Light/AboutPageStyles";
import { MyThemeContext } from "../Contexts/themeContext";
import { resumelink } from "../Sources/Links";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);
  const { theme } = useContext(MyThemeContext);

  

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  return (
    <>
      <Flex ref={AboutRef} {...AboutHeadFlex}>
        <Flex>
          <Heading {...(theme ? AboutHeadings : LAboutHeadings)}>About&nbsp;</Heading>
          <Heading {...(theme ? AboutHeadings2 : LAboutHeadings2)}>Me</Heading>
        </Flex>
        <Flex {...AboutAfterHeading}>
          <Flex {...AboutAfterHeadingMain}>
            <Flex>
              <Image {...(theme ? AboutProfilePicture : LAboutProfilePicture)} src={theme ? ProfilePicBW : ProfilePicBlue} />
            </Flex>
            <Flex direction={"column"}>
              <Text {...(theme ? AboutSummaryText : LAboutSummaryText)}>
                Hi Everyone, I am Sayyed Sharuk, from Ahmednagar, Maharashtra. I have completed my Post Graduation in Master of Electronics Science under University of Pune.
              </Text>
              <a href="https://drive.google.com/uc?export=download&id=1JR1tvkUMpBiSejjOEKKT9B7S2XTZHtpv" onClick={handleClick}>
                <Button ml={"8"} my={"4"} bgColor={"white"} boxShadow={"2xl"} _hover={{bgColor:"black",color:"white"}} p={"6"} fontSize={"xl"} >Resume</Button>
              </a>

              <Text {...(theme ? AboutSummaryInterest : LAboutSummaryInterest)}>Some of My Interest apart from Coding:</Text>
              <Flex m={"1"}>
                <IconButton {...(theme ? aboutButtonsTop : LaboutButtonsTop)} icon={<MdOfflineBolt style={{ fontSize: "16px" }} />} />
                <Text {...(theme ? AboutIconText : LAboutIconText)}>Electronics</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...(theme ? aboutButtonsTop : LaboutButtonsTop)} icon={<MdSportsEsports style={{ fontSize: "16px" }} />} />
                <Text {...(theme ? AboutIconText : LAboutIconText)}>E-Sports</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...(theme ? aboutButtonsTop : LaboutButtonsTop)} icon={<BsFillPlayCircleFill style={{ fontSize: "16px" }} />} />
                <Text {...(theme ? AboutIconText : LAboutIconText)}>Movies</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...(theme ? aboutButtonsTop : LaboutButtonsTop)} icon={<MdGrass style={{ fontSize: "16px" }} />} />
                <Text {...(theme ? AboutIconText : LAboutIconText)}>Growing Plants</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
