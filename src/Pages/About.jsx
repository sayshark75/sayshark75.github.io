import React, { useContext, useEffect, useState } from "react";
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
  const [git, setGit] = useState(0);

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  const summary = useBreakpointValue({
    base: true,
    sm: false,
  });
  useEffect(() => {
    const codingInterval = setInterval(() => {
      setCoding((prev) => (prev < 1400 ? prev + 5 : prev));
    }, 14);

    const dsaInterval = setInterval(() => {
      setDsa((prev) => (prev < 800 ? prev + 2 : prev));
    }, 9);

    const projInterval = setInterval(() => {
      setProj((prev) => (prev < 6 ? prev + 1 : prev));
    }, 680);

    const gitInterval = setInterval(() => {
      setGit((prev) => (prev < 750 ? prev + 2 : prev));
    }, 9);

    return () => {
      clearInterval(codingInterval);
      clearInterval(dsaInterval);
      clearInterval(projInterval);
      clearInterval(gitInterval);
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
                {summary ? (
                  <List spacing={3} my={"5"}>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="LGHex_LBHex" />A Full Stack Developer.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="LGHex_LBHex" />
                      With a diverse skill set.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="LGHex_LBHex" />
                      Passion for solving problems.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="LGHex_LBHex" />
                      Collaborates well with teams.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsCodeSlash} color="LGHex_LBHex" />
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
        <Flex {...AboutStatStyle.card}>
          <Text {...AboutStatStyle.icon}>
            <SiGithub />
          </Text>
          <Heading>{git}+</Heading>
          <Text {...AboutStatStyle.text}>Github Contributions</Text>
        </Flex>
      </Grid>
    </>
  );
};

export default About;
