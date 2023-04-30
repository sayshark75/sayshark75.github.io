import { Button, Flex, Heading, IconButton, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";
import { githubLink, linkedInLink, locationLink, phoneLink, twitterLink } from "../Sources/Links";
import { toolTipStyle } from "../Themes/Styles/Miscellaneous";

import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation, MdOutlineCheckCircleOutline, MdOutlineContentCopy } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";
import { ContactButtons, ContactCopy, ContactCopyButtons, ContactFlexMain, ContactHeading1, ContactHeading2 } from "../Themes/Styles/ContactPageStyles";
import copy from "copy-to-clipboard";
import EmailModal from "../Components/EmailModal";

const Contact = () => {
  const { ContactRef } = useContext(ScrollContext);

  const [phoneCpy, setPhoneCpy] = useState(false);
  const [emailCpy, setEmailCpy] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const copyPhoneFun = () => {
    copy("7588244148");
    setPhoneCpy(true);
    setTimeout(() => {
      setPhoneCpy(false);
    }, 2000);
  };
  const copyMailFun = () => {
    copy("sayyedsharuk75@gmail.com");
    setEmailCpy(true);
    setTimeout(() => {
      setEmailCpy(false);
    }, 2000);
  };

  return (
    <>
      <Flex ref={ContactRef} {...ContactFlexMain}>
        <Flex>
          <Heading {...ContactHeading1}>Get In&nbsp;</Heading>
          <Heading {...ContactHeading2}>Touch</Heading>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} gap={"2"}>
          <Flex pt={2} justifyContent={"flex-start"}>
            <Button onClick={copyPhoneFun} {...ContactCopyButtons}>
              <Text fontSize={"md"} {...ContactCopy}>
                +91 7588244148
              </Text>
              {!phoneCpy ? <MdOutlineContentCopy style={{ fontSize: "22px" }} /> : <MdOutlineCheckCircleOutline style={{ fontSize: "22px" }} />}
            </Button>
          </Flex>

          <Flex pt={2} justifyContent={"flex-start"}>
            <Button onClick={copyMailFun} {...ContactCopyButtons}>
              <Text fontSize={"md"} {...ContactCopy}>
              sayyedsharuk75@gmail.com
              </Text>
              {!emailCpy ? <MdOutlineContentCopy style={{ fontSize: "22px" }} /> : <MdOutlineCheckCircleOutline style={{ fontSize: "22px" }} />}
            </Button>
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
                <IconButton {...ContactButtons} onClick={onOpen} icon={<MdAlternateEmail />} />
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
      {/** Email Modal used for different parts */}
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Contact;
