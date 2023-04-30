import React, { useContext, useEffect, useState } from "react";
import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { MdOutlineWbSunny } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { ScrollContext } from "../Contexts/ScrollContext";

import {
  AboutAfterHeading,
  AboutAfterHeadingMain,
  AboutHeadFlex,
  AboutHeadings,
  AboutHeadings2,
  AboutProfilePicture,
  AboutResumeButton,
  AboutStatStyle,
  AboutSummaryText,
} from "../Themes/Styles/AboutPageStyles";
import { ProfilePicBlue } from "../Sources/Images";
import { resumeDownload, resumelink } from "../Sources/Links";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);
  const [coding, setCoding] = useState(0);
  const [dsa, setDsa] = useState(0);
  const [proj, setProj] = useState(0);

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  useEffect(() => {
    const codingInterval = setInterval(() => {
      setCoding((prev) => (prev < 1400 ? prev + 5 : prev));
    }, 10);

    const dsaInterval = setInterval(() => {
      setDsa((prev) => (prev < 800 ? prev + 2 : prev));
    }, 9);

    const projInterval = setInterval(() => {
      setProj((prev) => (prev < 7 ? prev + 1 : prev));
    }, 430);

    return () => {
      clearInterval(codingInterval);
      clearInterval(dsaInterval);
      clearInterval(projInterval);
    };
  }, []);

  

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
              <Flex borderRadius={"50%"} border={"8px dotted"} borderColor={"SuiteBlue_White"}>
                <Image {...AboutProfilePicture} src={ProfilePicBlue} />
              </Flex>
            </Flex>
            <Flex flex={5} direction={"column"}>
              <Text {...AboutSummaryText}>
                I am Sayyed Sharuk from Ahmednagar, Maharashtra, India. I am currently pursuing Full Stack development at Masai School. I hold a Post Graduation degree in Master of
                Electronics Science from the University of Pune. I have a passion for creating innovative digital solutions and possess a strong foundation in web development
                technologies such as HTML, CSS, JavaScript, and React. My enthusiasm for exploring new technologies and my eagerness to learn makes me excited about the future of
                web development and the limitless possibilities it offers. Thank you for taking the time to read my introduction. I look forward to connecting with you soon!
              </Text>
              <a href={resumeDownload} onClick={handleClick}>
                <Button {...AboutResumeButton}>Resume</Button>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Grid {...AboutStatStyle.grid}>
        <Flex {...AboutStatStyle.card}>
          <Text {...AboutStatStyle.icon}>
            <BsCodeSlash />
          </Text>
          <Heading>{coding}+</Heading>
          <Text {...AboutStatStyle.text}>Hours of Coding</Text>
        </Flex>
        <Flex {...AboutStatStyle.card}>
          <Text {...AboutStatStyle.icon}>
            <MdOutlineWbSunny />
          </Text>
          <Heading>{dsa}+</Heading>
          <Text {...AboutStatStyle.text}>DSA Problems</Text>
        </Flex>
        <Flex {...AboutStatStyle.card}>
          <Text {...AboutStatStyle.icon}>
            <RiPagesFill />
          </Text>
          <Heading>{proj}+</Heading>
          <Text {...AboutStatStyle.text}>Ongoing Projects</Text>
        </Flex>
      </Grid>
    </>
  );
};

export default About;
