import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  TechSkillsFlexTopMain,
  TechSkillsGrid,
  TechSkillsHeading1,
  TechSkillsHeading2,
  TechSkillsIconsStyle,
  TechSkillsInGridFlex,
  TechSkillsMainCard,
  TechSkillsText,
} from "../Themes/Styles/TechnicalSkillsStyles";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiVisualstudiocode,
  SiVite,
  SiNextdotjs,
  SiGit,
  SiNpm,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiSocketdotio,
  SiCypress,
  SiHeroku,
  SiJest,
  SiPostman,
  SiReplit,
} from "react-icons/si";
import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";

const TechnicalSkills = () => {
  const { SkillsRef } = useContext(ScrollContext);
  

  return (
    <Flex ref={SkillsRef} {...TechSkillsFlexTopMain}>
      <Flex>
        <Heading {...TechSkillsHeading1}>Technical&nbsp;</Heading>
        <Heading {...TechSkillsHeading2}>Skills</Heading>
      </Flex>
      <Flex {...TechSkillsMainCard}>
        <Text fontSize={"2xl"}>Languages</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...TechSkillsInGridFlex}>
            <SiHtml5 {...TechSkillsIconsStyle} color={"#FF7400"} />
            <Text {...TechSkillsText}>HTML5</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiCss3 {...TechSkillsIconsStyle} color={"#008BFF"} />
            <Text {...TechSkillsText}>CSS3</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiJavascript {...TechSkillsIconsStyle} color={"#FFFB00"} />
            <Text {...TechSkillsText}>JavaScript</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiTypescript {...TechSkillsIconsStyle} color={"#0070FF"} />
            <Text {...TechSkillsText}>Typescript</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}> Frontend Frameworks and Libraries</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...TechSkillsInGridFlex}>
            <SiReact {...TechSkillsIconsStyle} color={"#00B2FF"} />
            <Text {...TechSkillsText}>React</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiVite {...TechSkillsIconsStyle} color={"#B00AFE"} />
            <Text {...TechSkillsText}>Vite</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiNextdotjs {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...TechSkillsText}>NextJS</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiRedux {...TechSkillsIconsStyle} color={"#9700AC"} />
            <Text {...TechSkillsText}>Redux</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiTailwindcss {...TechSkillsIconsStyle} color={"#0073F5"} />
            <Text {...TechSkillsText}>Tailwind</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiChakraui {...TechSkillsIconsStyle} color={"#00E5DE"} />
            <Text {...TechSkillsText}>Chakra UI</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiMaterialui {...TechSkillsIconsStyle} color={"#006CE5"} />
            <Text {...TechSkillsText}>Material UI</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiBootstrap {...TechSkillsIconsStyle} color={"#8700FF"} />
            <Text {...TechSkillsText}>Bootstrap</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}>Backend Frameworks and Databases</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...TechSkillsInGridFlex}>
            <SiNodedotjs {...TechSkillsIconsStyle} color={"#1F9A28"} />
            <Text {...TechSkillsText}>Node</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiExpress {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...TechSkillsText}>Express</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiMongodb {...TechSkillsIconsStyle} color={"#0DAB09"} />
            <Text {...TechSkillsText}>MongoDB</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiFirebase {...TechSkillsIconsStyle} color={"#FFCD15"} />
            <Text {...TechSkillsText}>Firebase</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiSocketdotio {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...TechSkillsText}>Socket.IO</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}>Deployment, Coding & Testing Tools</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...TechSkillsInGridFlex}>
            <SiNetlify {...TechSkillsIconsStyle} color={"#00C5FF"} />
            <Text {...TechSkillsText}>Netlify</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiVercel {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...TechSkillsText}>Vercel</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiGit {...TechSkillsIconsStyle} color={"#FE750A"} />
            <Text {...TechSkillsText}>Git</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiGithub {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...TechSkillsText}>GitHub</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiHeroku {...TechSkillsIconsStyle} color={"#BB60FF"} />
            <Text {...TechSkillsText}>Heroku</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiCypress {...TechSkillsIconsStyle} color={"#009099"} />
            <Text {...TechSkillsText}>Cypress</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiJest {...TechSkillsIconsStyle} color={"#A24F4D"} />
            <Text {...TechSkillsText}>JEST</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiNpm {...TechSkillsIconsStyle} color={"#FE0A0A"} />
            <Text {...TechSkillsText}>NPM</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiVisualstudiocode {...TechSkillsIconsStyle} color={"#0093FF"} />
            <Text {...TechSkillsText}>VS Code</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiPostman {...TechSkillsIconsStyle} color={"#FF811F"} />
            <Text {...TechSkillsText}>Postman</Text>
          </Flex>
          <Flex {...TechSkillsInGridFlex}>
            <SiReplit {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...TechSkillsText}>Replit</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default TechnicalSkills;
