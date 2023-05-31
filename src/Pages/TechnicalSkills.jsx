import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  TechSkillsFlexTopMain,
  TechSkillsGrid,
  TechSkillsHeading1,
  TechSkillsHeading2,
  TechSkillsInGridFlex,
  TechSkillsMainCard,
  TechSkillsText,
} from "../Themes/Styles/TechnicalSkillsStyles";

import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";
import { backendData, fWorksLibsData, languageData, otherData } from "../Sources/TechnicalSkills";

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
          {languageData.map((el) => {
            return (
              <Flex key={el.name} {...TechSkillsInGridFlex}>
                {el.icon}
                <Text {...TechSkillsText}>{el.name}</Text>
              </Flex>
            );
          })}
        </SimpleGrid>
        <Text fontSize={"2xl"}> Frontend Frameworks and Libraries</Text>
        <SimpleGrid {...TechSkillsGrid}>
          {fWorksLibsData.map((el) => {
            return (
              <Flex key={el.name} {...TechSkillsInGridFlex}>
                {el.icon}
                <Text {...TechSkillsText}>{el.name}</Text>
              </Flex>
            );
          })}
        </SimpleGrid>
        <Text fontSize={"2xl"}>Backend Frameworks and Databases</Text>
        <SimpleGrid {...TechSkillsGrid}>
          {backendData.map((el) => {
            return (
              <Flex key={el.name} {...TechSkillsInGridFlex}>
                {el.icon}
                <Text {...TechSkillsText}>{el.name}</Text>
              </Flex>
            );
          })}
        </SimpleGrid>
        <Text fontSize={"2xl"}>Deployment, Coding & Testing Tools</Text>
        <SimpleGrid {...TechSkillsGrid}>
          {otherData.map((el) => {
            return (
              <Flex key={el.name} {...TechSkillsInGridFlex}>
                {el.icon}
                <Text {...TechSkillsText}>{el.name}</Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default TechnicalSkills;
