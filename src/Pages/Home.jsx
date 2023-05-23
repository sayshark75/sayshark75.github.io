import { Flex, Heading, Text, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdColorLens, MdMyLocation } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { aboutFlex, aboutText, heading1, heading2, homeButtonsTop, homeParentFlex, themeStyle } from "../Themes/Styles/HomePageStyles";
import { toolTipStyle } from "../Themes/Styles/Miscellaneous";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "../Sources/Links";
import { ScrollContext } from "../Contexts/ScrollContext";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";
import EmailModal from "../Components/EmailModal";
import { BlueTheme } from "../Themes/BlueTheme";
import { ThemeContext } from "../Contexts/ThemeContext";
import { GreenTheme } from "../Themes/GreenTheme";
import { OrangeTheme } from "../Themes/OrangeTheme";
import { PurpleTheme } from "../Themes/PurpleTheme";
import { RedTheme } from "../Themes/RedTheme";

const Home = () => {
  const { HomeRef } = useContext(ScrollContext);
  const { handleThemeChange } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex ref={HomeRef} {...homeParentFlex}>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Heading {...heading1}>Hi, I'm&nbsp;</Heading>
          <Heading {...heading2}>Sayyed Sharuk</Heading>
        </Flex>
        <Flex {...aboutFlex}>
          <Text {...aboutText}>
            A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient
            products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results.
          </Text>
        </Flex>
        <Flex {...themeStyle.main}>
          <IconButton {...themeStyle.btn} onClick={() => handleThemeChange(BlueTheme)} icon={<MdColorLens />} bgColor={"blue.500"} />
          <IconButton {...themeStyle.btn} onClick={() => handleThemeChange(GreenTheme)} icon={<MdColorLens />} bgColor={"green.500"} />
          <IconButton {...themeStyle.btn} onClick={() => handleThemeChange(OrangeTheme)} icon={<MdColorLens />} bgColor={"orange.500"} />
          <IconButton {...themeStyle.btn} onClick={() => handleThemeChange(PurpleTheme)} icon={<MdColorLens />} bgColor={"purple.500"} />
          <IconButton {...themeStyle.btn} onClick={() => handleThemeChange(RedTheme)} icon={<MdColorLens />} bgColor={"red.500"} />
        </Flex>
        <Flex my={"2"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...toolTipStyle} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<VscGithub />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...toolTipStyle} label={"Email"}>
              <IconButton {...homeButtonsTop} onClick={onOpen} icon={<MdAlternateEmail />} />
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
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Home;
