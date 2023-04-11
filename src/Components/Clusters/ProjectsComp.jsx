import { Button, Flex, Heading, IconButton, Image, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import React from "react";
import { SiChakraui, SiFirebase, SiCss3, SiTypescript, SiRedux, SiHtml5, SiJavascript, SiReact, SiExpress, SiNodedotjs, SiMongodb } from "react-icons/si";
import {
  ProjectDeatailsFlexMain,
  ProjectDetailsFlexHeading,
  ProjectDetailsHeading1,
  ProjectDetailsHeading2,
  ProjectDetailsIconButton,
  ProjectDetailsIconButtonTop,
  ProjectDetailsTextStackFlex,
  ProjectDetailsTextSummary,
  ProjectDetailsToolTip,
  ProjectDetailsViewButtons,
  ProjectHeadFlex,
  ProjectImgStyle,
} from "../../Themes/Styles/ProjectPageStyles";

const ProjectsCard = ({ live, github, imgDark, imgLight, heading1, heading2, summary, TStack }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex {... ProjectHeadFlex}>
      <Flex direction={"column"}>
        <Image src={colorMode==="dark" ? imgDark : imgLight} {...ProjectImgStyle} />
        <Flex {... ProjectDetailsViewButtons}>
          <a href={live} target={"_blank"} rel="noreferrer">
            <Button {... ProjectDetailsIconButtonTop}>View Page</Button>
          </a>
          <a href={github} target={"_blank"} rel="noreferrer">
            <Button {... ProjectDetailsIconButtonTop}>Github</Button>
          </a>
        </Flex>
      </Flex>

      <Flex {...ProjectDeatailsFlexMain}>
        <Flex {...ProjectDetailsFlexHeading}>
          <Heading {... ProjectDetailsHeading1}>{heading1}&nbsp;</Heading>
          {heading2 ? <Heading {... ProjectDetailsHeading2}>{heading2}</Heading> : null}
        </Flex>
        <Text {... ProjectDetailsTextSummary}>{summary}</Text>
        <Flex wrap={"wrap"} {...ProjectDetailsTextStackFlex}>
          {TStack[0] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"React"}>
              <IconButton {... ProjectDetailsIconButton} color={"#00E1FC"} icon={<SiReact />} />
            </Tooltip>
          ) : null}
          {TStack[1] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"ChakraUI"}>
              <IconButton {... ProjectDetailsIconButton} color={"#00B7FC"} icon={<SiChakraui />} />
            </Tooltip>
          ) : null}
          {TStack[2] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"Javascript"}>
              <IconButton {... ProjectDetailsIconButton} color={"#FCCA00"} icon={<SiJavascript />} />
            </Tooltip>
          ) : null}
          {TStack[3] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"HTML5"}>
              <IconButton {... ProjectDetailsIconButton} color={"#FC6F00"} icon={<SiHtml5 />} />
            </Tooltip>
          ) : null}
          {TStack[4] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"CSS3"}>
              <IconButton {... ProjectDetailsIconButton} color={"#008DFC"} icon={<SiCss3 />} />
            </Tooltip>
          ) : null}
          {TStack[5] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"TypeScript"}>
              <IconButton {... ProjectDetailsIconButton} color={"#0464DF"} icon={<SiTypescript />} />
            </Tooltip>
          ) : null}
          {TStack[6] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"Redux"}>
              <IconButton {... ProjectDetailsIconButton} color={"#5A04DF"} icon={<SiRedux />} />
            </Tooltip>
          ) : null}
          {TStack[7] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"Firebase"}>
              <IconButton {... ProjectDetailsIconButton} color={"#FCD600"} icon={<SiFirebase />} />
            </Tooltip>
          ) : null}
          {TStack[8] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"Node"}>
              <IconButton {... ProjectDetailsIconButton} color={"#178221"} icon={<SiNodedotjs />} />
            </Tooltip>
          ) : null}
          {TStack[9] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"Express"}>
              <IconButton {... ProjectDetailsIconButton} color={"#000000"} icon={<SiExpress />} />
            </Tooltip>
          ) : null}
          {TStack[10] ? (
            <Tooltip {... ProjectDetailsToolTip} label={"MongoDB"}>
              <IconButton {... ProjectDetailsIconButton} color={"#13B221"} icon={<SiMongodb />} />
            </Tooltip>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
