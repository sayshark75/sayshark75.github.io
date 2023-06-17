import { Button, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  ProjectDeatailsFlexMain,
  ProjectDetailsFlexHeading,
  ProjectDetailsHeading1,
  ProjectDetailsHeading2,
  ProjectDetailsIconButtonTop,
  ProjectDetailsTextStackFlex,
  ProjectDetailsTextSummary,
  ProjectDetailsViewButtons,
  ProjectHeadFlex,
  ProjectImgStyle,
} from "../Themes/Styles/ProjectPageStyles";

const ProjectsCard = ({ live, github, imgDark, imgLight, heading1, heading2, summary, TStack }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex {...ProjectHeadFlex}>
      <Flex direction={"column"}>
        <Image src={colorMode === "dark" ? imgDark : imgLight} {...ProjectImgStyle} />
        <Flex {...ProjectDetailsViewButtons}>
          <a href={live} target={"_blank"} rel="noreferrer">
            <Button {...ProjectDetailsIconButtonTop}>View Page</Button>
          </a>
          {github && (
            <a href={github} target={"_blank"} rel="noreferrer">
              <Button {...ProjectDetailsIconButtonTop}>Github</Button>
            </a>
          )}
        </Flex>
      </Flex>

      <Flex {...ProjectDeatailsFlexMain}>
        <Flex {...ProjectDetailsFlexHeading}>
          <Heading {...ProjectDetailsHeading1}>{heading1}&nbsp;</Heading>
          {heading2 ? <Heading {...ProjectDetailsHeading2}>{heading2}</Heading> : null}
        </Flex>
        <Text {...ProjectDetailsTextSummary}>{summary}</Text>
        <Flex wrap={"wrap"} {...ProjectDetailsTextStackFlex} textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"} color={"textPrimary"}>
          {TStack.map((el, id) => {
            return id < TStack.length - 1 ? el + " | " : el;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
