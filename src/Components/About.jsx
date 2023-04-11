import React, { useContext } from "react";
import { Button, Flex, Heading, IconButton, Image, Text, useColorMode } from "@chakra-ui/react";

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
  AboutResumeButton,
  AboutSummaryInterest,
  AboutSummaryText,
} from "../Themes/Styles/AboutPageStyles";
import { ProfilePicBlue, ProfilePicBW } from "../Sources/Images";
import { resumeDownload, resumelink } from "../Sources/Links";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);
  const { colorMode } = useColorMode();

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  return (
    <>
      <Flex ref={AboutRef} {...AboutHeadFlex}>
        <Flex>
          <Heading {...AboutHeadings}>About&nbsp;</Heading>
          <Heading {...AboutHeadings2}>Me</Heading>
        </Flex>
        <Flex {...AboutAfterHeading}>
          <Flex {...AboutAfterHeadingMain}>
            <Flex flex={2} w={"100%"} justifyContent={"center"}>
              <Image {...AboutProfilePicture} src={ProfilePicBlue} />
            </Flex>
            <Flex flex={5} direction={"column"}>
              <Text {...AboutSummaryText}>
              I am Sayyed Sharuk from Ahmednagar, Maharashtra, India. I am currently pursuing Full Stack development at Masai School. I hold a Post Graduation degree in Master of Electronics Science from the University of Pune.

              I have a passion for creating innovative digital solutions and possess a strong foundation in web development technologies such as HTML, CSS, JavaScript, and React. My enthusiasm for exploring new technologies and my eagerness to learn makes me excited about the future of web development and the limitless possibilities it offers.
              
              Thank you for taking the time to read my introduction. I look forward to connecting with you soon!
              </Text>
              <a href={resumeDownload} onClick={handleClick}>
                <Button {...AboutResumeButton}>
                  Resume
                </Button>
              </a>

              <Text {...AboutSummaryInterest}>Some of My Interest apart from Coding:</Text>
              <Flex m={"1"}>
                <IconButton {...aboutButtonsTop} icon={<MdOfflineBolt style={{ fontSize: "16px" }} />} />
                <Text {...AboutIconText}>Electronics</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...aboutButtonsTop} icon={<MdSportsEsports style={{ fontSize: "16px" }} />} />
                <Text {...AboutIconText}>E-Sports</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...aboutButtonsTop} icon={<BsFillPlayCircleFill style={{ fontSize: "16px" }} />} />
                <Text {...AboutIconText}>Movies</Text>
              </Flex>
              <Flex m={"1"}>
                <IconButton {...aboutButtonsTop} icon={<MdGrass style={{ fontSize: "16px" }} />} />
                <Text {...AboutIconText}>Growing Plants</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
