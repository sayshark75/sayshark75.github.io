import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  TechSkillsFlexTopMain,
  TechSkillsGrid,
  TechSkillsHeading1,
  TechSkillsHeading2,
  TechSkillsIconsStyle,
  TechSkillsInGridFlex,
  TechSkillsText,
} from "../Themes/Dark/TechnicalSkillsStyles";
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
import { MyThemeContext } from "../Contexts/themeContext";
import { LTechSkillsFlexTopMain, LTechSkillsHeading1, LTechSkillsHeading2, LTechSkillsInGridFlex, LTechSkillsText } from "../Themes/Light/TechnicalSkillsStyles";

const TechnicalSkills = () => {
  const { theme } = useContext(MyThemeContext);
  const { SkillsRef } = useContext(ScrollContext);

  return (
    <Flex ref={SkillsRef} {...(theme ? TechSkillsFlexTopMain : LTechSkillsFlexTopMain)}>
      <Flex>
        <Heading {...(theme ? TechSkillsHeading1 : LTechSkillsHeading1)}>Technical&nbsp;</Heading>
        <Heading {...(theme ? TechSkillsHeading2 : LTechSkillsHeading2)}>Skills</Heading>
      </Flex>
      <Flex borderRadius={"8"} mt={"4"} px={"8"} py={"2"} boxShadow={"2xl"} bgColor={"white"} direction={"column"}>
        <Text fontSize={"2xl"}>Languages</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiHtml5 {...TechSkillsIconsStyle} color={"#FF7400"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>HTML5</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiCss3 {...TechSkillsIconsStyle} color={"#008BFF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>CSS3</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiJavascript {...TechSkillsIconsStyle} color={"#FFFB00"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>JavaScript</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiTypescript {...TechSkillsIconsStyle} color={"#0070FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Typescript</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}> Frontend Frameworks and Libraries</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiReact {...TechSkillsIconsStyle} color={"#00B2FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>React</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiVite {...TechSkillsIconsStyle} color={"#B00AFE"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Vite</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNextdotjs {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>NextJS</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiRedux {...TechSkillsIconsStyle} color={"#9700AC"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Redux</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiTailwindcss {...TechSkillsIconsStyle} color={"#0073F5"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Tailwind</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiChakraui {...TechSkillsIconsStyle} color={"#00E5DE"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Chakra UI</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiMaterialui {...TechSkillsIconsStyle} color={"#006CE5"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Material UI</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiBootstrap {...TechSkillsIconsStyle} color={"#8700FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Bootstrap</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}>Backend Frameworks and Databases</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNodedotjs {...TechSkillsIconsStyle} color={"#1F9A28"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Node</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiExpress {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Express</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiMongodb {...TechSkillsIconsStyle} color={"#0DAB09"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>MongoDB</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiFirebase {...TechSkillsIconsStyle} color={"#FFCD15"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Firebase</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiSocketdotio {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Socket.IO</Text>
          </Flex>
        </SimpleGrid>
        <Text fontSize={"2xl"}>Deployment, Coding & Testing Tools</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNetlify {...TechSkillsIconsStyle} color={"#00C5FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Netlify</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiVercel {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Vercel</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiGit {...TechSkillsIconsStyle} color={"#FE750A"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Git</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiGithub {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>GitHub</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiHeroku {...TechSkillsIconsStyle} color={"#BB60FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Heroku</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiCypress {...TechSkillsIconsStyle} color={"#009099"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Cypress</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiJest {...TechSkillsIconsStyle} color={"#A24F4D"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>JEST</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNpm {...TechSkillsIconsStyle} color={"#FE0A0A"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>NPM</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiVisualstudiocode {...TechSkillsIconsStyle} color={"#0093FF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>VS Code</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiPostman {...TechSkillsIconsStyle} color={"#FF811F"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Postman</Text>
          </Flex>
          <Flex {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiReplit {...TechSkillsIconsStyle} color={"#FFFFFF"} />
            <Text {...(theme ? TechSkillsText : LTechSkillsText)}>Replit</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default TechnicalSkills;
