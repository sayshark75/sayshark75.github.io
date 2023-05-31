import React, { useContext } from "react";
import { Button, Flex, Grid, Heading, Image, List, ListIcon, ListItem, Text, useBreakpointValue } from "@chakra-ui/react";

import { MdOutlineWbSunny } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { ScrollContext } from "../Contexts/ScrollContext";

import {
  AboutAfterHeading,
  AboutAfterHeadingMain,
  AboutHeadFlex,
  AboutHeadings,
  AboutHeadings2,
  AboutPicSideData,
  AboutProfilePicture,
  AboutResumeButton,
  AboutStatStyle,
  AboutSummaryText,
} from "../Themes/Styles/AboutPageStyles";
import { ProfilePicBlue } from "../Sources/Images";
import { resumeDownload, resumelink } from "../Sources/Links";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  const summary = useBreakpointValue({
    base: true,
    sm: false,
  });

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
              <Flex borderRadius={"50%"} border={"8px dotted"} borderColor={"textPrimary"}>
                <Image {...AboutProfilePicture} src={ProfilePicBlue} />
              </Flex>
            </Flex>
            <Flex flex={5} {...AboutPicSideData}>
              <Text {...AboutSummaryText}>
                {summary ? (
                  <List spacing={3} my={"5"}>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />A Full Stack Developer.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      With a diverse skill set.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Passion for solving problems.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Collaborates well with teams.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="textPrimary" />
                      Deliver Quality products.
                    </ListItem>
                  </List>
                ) : (
                  "A Full Stack Developer who enjoys solving problems and building quality projects. With a diverse set of skills and technologies, Can develop robust and efficient products. Keep up with the latest advancements in the field, and work well with teams to deliver the best possible results."
                )}
              </Text>
              <a href={resumeDownload} onClick={handleClick}>
                <Button {...AboutResumeButton}>Resume</Button>
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Grid {...AboutStatStyle.grid}>
          <Flex {...AboutStatStyle.card}>
            <Text {...AboutStatStyle.icon}>
              <BsCodeSlash />
            </Text>
            <Heading>1400+</Heading>
            <Text {...AboutStatStyle.text}>Hours of Coding</Text>
          </Flex>
          <Flex {...AboutStatStyle.card}>
            <Text {...AboutStatStyle.icon}>
              <MdOutlineWbSunny />
            </Text>
            <Heading>800+</Heading>
            <Text {...AboutStatStyle.text}>DSA Problems</Text>
          </Flex>
          <Flex {...AboutStatStyle.card}>
            <Text {...AboutStatStyle.icon}>
              <RiPagesFill />
            </Text>
            <Heading>6+</Heading>
            <Text {...AboutStatStyle.text}>Ongoing Projects</Text>
          </Flex>
          <Flex {...AboutStatStyle.card}>
            <Text {...AboutStatStyle.icon}>
              <SiGithub />
            </Text>
            <Heading>750+</Heading>
            <Text {...AboutStatStyle.text}>Github Contributions</Text>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default About;
