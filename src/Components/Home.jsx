import { Flex, Heading, Image, Text, Tooltip, IconButton, useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { aboutFlex, aboutText, heading1, heading2, homeButtonsTop, homeParentFlex } from "../Themes/Styles/HomePageStyles";
import { toolTipStyle } from "../Themes/Styles/Miscellaneous";
import { githubLink, linkedInLink, locationLink, mailLink, phoneLink, twitterLink } from "../Sources/Links";
import { ScrollContext } from "../Contexts/ScrollContext";
import { typeImageBase, typeImageBaseLite } from "../Sources/Images";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";

const Home = () => {
  const { HomeRef } = useContext(ScrollContext);
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex ref={HomeRef} {...homeParentFlex}>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Heading {...heading1}>Hi, I'm&nbsp;</Heading>
          <Heading {...heading2}>Sayyed Sharuk</Heading>
        </Flex>
        <Image mt={"8"} src={colorMode === "dark" ? typeImageBase : typeImageBaseLite} alt="Typing SVG" />
        <Flex {...aboutFlex}>
          <Text {...aboutText}>
            A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient
            products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
        </Flex>
        <Flex m={"8"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...toolTipStyle} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<VscGithub />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...toolTipStyle} label={"Email"}>
              <a href={mailLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<MdAlternateEmail />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={600}>
            <Tooltip {...toolTipStyle} label={"Phone"}>
              <a href={phoneLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<MdCall />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={700}>
            <Tooltip {...toolTipStyle} label={"LinkedIn"}>
              <a href={linkedInLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<BsLinkedin />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={900}>
            <Tooltip {...toolTipStyle} label={"Twitter"}>
              <a href={twitterLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<BsTwitter />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={1000}>
            <Tooltip {...toolTipStyle} label={"Location"}>
              <a href={locationLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<MdMyLocation />} />
              </a>
            </Tooltip>
          </FadeIn>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
