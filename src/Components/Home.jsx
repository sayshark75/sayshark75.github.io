import { Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FadeIn } from "react-slide-fade-in";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@chakra-ui/react";
import { aboutFlex, aboutText, heading1, heading2, homeButtonsTop, homeParentFlex, typeImageBase } from "../Themes/Dark/HomePageStyles";
import { fadeInConfigBottom, fadeInConfigLeft } from "../Animations/Animations";
import { toolTipStyle } from "../Themes/Dark/Miscellaneous";
import { githubLink, linkedInLink, locationLink, mailLink, phoneLink, resumelink, twitterLink } from "../Sources/Links";

const Home = () => {
  return (
    <>
      <Flex {...homeParentFlex}>
        <FadeIn {...fadeInConfigLeft} delayInMilliseconds={200}>
          <Flex>
            <Heading {...heading1}>Hi, I'm &nbsp;</Heading>
            <Heading {...heading2}>Sayyed Sharuk</Heading>
          </Flex>
        </FadeIn>
        <FadeIn {...fadeInConfigLeft} delayInMilliseconds={400}>
          <Image mt={"4"} src={typeImageBase} alt="Typing SVG" />
        </FadeIn>
        <FadeIn {...fadeInConfigLeft} delayInMilliseconds={400}>
          <Flex {...aboutFlex}>
            <Text {...aboutText}>
              A Full Stack Developer who loves solving problems and building projects. Equipped with a variety of technologies and tools to help me build the best possible product.
            </Text>
          </Flex>
        </FadeIn>
        <Flex m={"3"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...toolTipStyle} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<GitHubIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...toolTipStyle} label={"Email"}>
              <a href={mailLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<EmailIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={600}>
            <Tooltip {...toolTipStyle} label={"Phone"}>
              <a href={phoneLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<CallIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={700}>
            <Tooltip {...toolTipStyle} label={"LinkedIn"}>
              <a href={linkedInLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<LinkedInIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={800}>
            <Tooltip {...toolTipStyle} label={"Resume"}>
              <a href={resumelink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<ContactPageIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={900}>
            <Tooltip {...toolTipStyle} label={"Twitter"}>
              <a href={twitterLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<TwitterIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={1000}>
            <Tooltip {...toolTipStyle} label={"Location"}>
              <a href={locationLink} target={"_blank"} rel="noreferrer">
                <IconButton {...homeButtonsTop} icon={<LocationOnIcon />} />
              </a>
            </Tooltip>
          </FadeIn>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
