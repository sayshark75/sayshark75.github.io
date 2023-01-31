import React, { useContext } from "react";
import { Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import {MdOutlineContentCopy,MdOfflineBolt,MdSportsEsports,MdGrass} from "react-icons/md";
import {BsFillPlayCircleFill} from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";

import {
  AboutAfterHeading,
  AboutAfterHeadingMain,
  aboutButtonsTop,
  AboutContactCopy,
  AboutHeadFlex,
  AboutHeadings,
  AboutHeadings2,
  AboutIconText,
  AboutProfilePicture,
  AboutSummaryInterest,
  AboutSummaryText,
} from "../Themes/Dark/AboutPageStyles";
import { ProfilePicBlue, ProfilePicBW } from "../Sources/Images";
import { LaboutButtonsTop, LAboutContactCopy, LAboutHeadings, LAboutHeadings2, LAboutIconText, LAboutProfilePicture, LAboutSummaryInterest, LAboutSummaryText } from "../Themes/Light/AboutPageStyles";
import { MyThemeContext } from "../Contexts/themeContext";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);
  const { theme } = useContext(MyThemeContext);

  const copyPhoneFun = () => {
    copy("7588244148");
  };
  const copyMailFun = () => {
    copy("sayyedsharuk75@gmail.com");
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

              <Flex pt={2} justifyContent={"flex-start"}>
              <Button onClick={copyPhoneFun} {...(theme ? aboutButtonsTop : LaboutButtonsTop)} mr={1} ><MdOutlineContentCopy style={{ fontSize: "16px" }} />Copy</Button>
                <Text {...(theme ? AboutContactCopy : LAboutContactCopy)} ml={1}>
                  Phone : : +91 7588244148
                </Text>
              </Flex>

              <Flex pt={2} justifyContent={"flex-start"}>
                <Button onClick={copyMailFun} {...(theme ? aboutButtonsTop : LaboutButtonsTop)} mr={1} ><MdOutlineContentCopy style={{ fontSize: "16px" }} />Copy</Button>
                <Text fontSize={"sm"} {...(theme ? AboutContactCopy : LAboutContactCopy)} ml={1}>
                  Gmail : : sayyedsharuk75@gmail.com
                </Text>
              </Flex>

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
