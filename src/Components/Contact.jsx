import { Button, Flex, Heading, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";
import { githubLink, linkedInLink, locationLink, mailLink, phoneLink, twitterLink } from "../Sources/Links";
import { toolTipStyle } from "../Themes/Styles/Miscellaneous";

import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation, MdOutlineContentCopy } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";
import { ContactButtons, ContactFlexMain, ContactHeading1, ContactHeading2 } from "../Themes/Styles/ContactPageStyles";
import copy from "copy-to-clipboard";
import { aboutButtonsTop, AboutContactCopy } from "../Themes/Styles/AboutPageStyles";

const Contact = () => {
  const { ContactRef } = useContext(ScrollContext);

  const copyPhoneFun = () => {
    copy("7588244148");
  };
  const copyMailFun = () => {
    copy("sayyedsharuk75@gmail.com");
  };

  return (
    <Flex ref={ContactRef} {...ContactFlexMain}>
      <Flex>
        <Heading {...ContactHeading1}>Get In&nbsp;</Heading>
        <Heading {...ContactHeading2}>Touch</Heading>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }}>
        <Flex pt={2} justifyContent={"flex-start"}>
          <Button onClick={copyPhoneFun} {...aboutButtonsTop} mr={1}>
            <MdOutlineContentCopy style={{ fontSize: "16px" }} />
            Copy
          </Button>
          <Text {...AboutContactCopy} ml={1}>
            +91 7588244148
          </Text>
        </Flex>

        <Flex pt={2} justifyContent={"flex-start"}>
          <Button onClick={copyMailFun} {...aboutButtonsTop} mr={1}>
            <MdOutlineContentCopy style={{ fontSize: "16px" }} />
            Copy
          </Button>
          <Text fontSize={"sm"} {...AboutContactCopy} ml={1}>
            sayyedsharuk75@gmail.com
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex my={"8"} mx={"2"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...toolTipStyle} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<VscGithub />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...toolTipStyle} label={"Compose a Email"}>
              <a href={mailLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<MdAlternateEmail />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={600}>
            <Tooltip {...toolTipStyle} label={"Call Now"}>
              <a href={phoneLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<MdCall />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={700}>
            <Tooltip {...toolTipStyle} label={"LinkedIn"}>
              <a href={linkedInLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<BsLinkedin />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={900}>
            <Tooltip {...toolTipStyle} label={"Twitter"}>
              <a href={twitterLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<BsTwitter />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={1000}>
            <Tooltip {...toolTipStyle} label={"Location"}>
              <a href={locationLink} target={"_blank"} rel="noreferrer">
                <IconButton {...ContactButtons} icon={<MdMyLocation />} />
              </a>
            </Tooltip>
          </FadeIn>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
