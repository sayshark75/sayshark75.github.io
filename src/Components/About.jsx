import React, { useContext } from "react";
import { Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";

import { MdOfflineBolt, MdSportsEsports, MdGrass } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";
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
import { resumeDownload, resumelink } from "../Sources/Links";

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
            <Flex flex={2}>
              <Image {...(theme ? AboutProfilePicture : LAboutProfilePicture)} src={theme ? ProfilePicBW : ProfilePicBlue} />
            </Flex>
            <Flex flex={5} direction={"column"}>
              <Text {...(theme ? AboutSummaryText : LAboutSummaryText)}>
                Hi, I'm Sayyed Sharuk from Ahmednagar, Maharashtra, currently learning Full Stack development at Masai School. I hold a Post Graduation in Master of Electronics Science from the University of Pune. Passionate about creating innovative digital solutions, I have a strong foundation in web development, including HTML, CSS, JavaScript, and React. Always eager to learn and explore new technologies, I'm excited about the future of web development and the endless possibilities it offers. Thanks for reading, and I hope to connect with you soon!
              </Text>
              <a href={resumeDownload} onClick={handleClick}>
                <Button ml={"8"} my={"4"} bgColor={"white"} boxShadow={"2xl"} _hover={{ bgColor: "black", color: "white" }} p={"6"} fontSize={"xl"}>
                  Resume
                </Button>
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
