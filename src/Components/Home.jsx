import { Flex, Heading, Image, Text, Tooltip, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { aboutFlex, aboutText, heading1, heading2, homeButtonsTop, homeParentFlex } from "../Themes/Dark/HomePageStyles";
import { toolTipStyle } from "../Themes/Dark/Miscellaneous";
import { githubLink, linkedInLink, locationLink, mailLink, phoneLink, twitterLink } from "../Sources/Links";
import { ScrollContext } from "../Contexts/ScrollContext";
import { typeImageBase, typeImageBaseLite } from "../Sources/Images";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";
import { Lheading1, Lheading2, LaboutText, LhomeButtonsTop } from "../Themes/Light/HomePageStyles";
import { MyThemeContext } from "../Contexts/themeContext";
import { LtoolTipStyle } from "../Themes/Light/Miscellaneous";

const Home = () => {
  const { HomeRef } = useContext(ScrollContext);
  const { theme } = useContext(MyThemeContext);
  
  return (
    <>
      <Flex ref={HomeRef} {...homeParentFlex}>
        <Flex direction={{base:"column",sm:"row"}}>
          <Heading {...(theme ? heading1 : Lheading1)}>Hi, I'm&nbsp;</Heading>
          <Heading {...(theme ? heading2 : Lheading2)}>Sayyed Sharuk</Heading>
        </Flex>
        <Image mt={"8"} src={theme ? typeImageBase : typeImageBaseLite} alt="Typing SVG" />
        <Flex {...aboutFlex}>
          <Text {...(theme ? aboutText : LaboutText)}>
          I'm a Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, I develop robust and efficient products. I keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
        </Flex>
        <Flex m={"8"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<VscGithub />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Email"}>
              <a href={mailLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<MdAlternateEmail />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={600}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Phone"}>
              <a href={phoneLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<MdCall />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={700}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"LinkedIn"}>
              <a href={linkedInLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<BsLinkedin />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={900}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Twitter"}>
              <a href={twitterLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<BsTwitter />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={1000}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Location"}>
              <a href={locationLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? homeButtonsTop : LhomeButtonsTop)} icon={<MdMyLocation />} />
              </a>
            </Tooltip>
          </FadeIn>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
