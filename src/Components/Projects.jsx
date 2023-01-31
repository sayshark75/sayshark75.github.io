import { Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ScrollContext } from "../Contexts/ScrollContext";
import { ProjectsData } from "../Sources/ProjectsData.js";
import ProjectsComp from "./Clusters/ProjectsComp.jsx";

import {
  MainProjectHeadFlex,
  MainProjectHeading1,
  MainProjectHeading2,
  MainProjectHeadlineFlex,
} from "../Themes/Dark/ProjectPageStyles";
import { LMainProjectHeading1, LMainProjectHeading2 } from "../Themes/Light/ProjectPageStyles";
import { MyThemeContext } from "../Contexts/themeContext";
import GithubStats from "./GithubStats";

const Projects = () => {
  const { ProjectsRef } = useContext(ScrollContext);
  const { theme } = useContext(MyThemeContext);

  return (
    <>
      <Flex ref={ProjectsRef} {...MainProjectHeadFlex}>
        <Flex {...MainProjectHeadlineFlex}>
          <Heading {...(theme ? MainProjectHeading1 : LMainProjectHeading1)}>My&nbsp;</Heading>
          <Heading {...(theme ? MainProjectHeading2 : LMainProjectHeading2)}>Projects</Heading>
        </Flex>
        {ProjectsData.map((el) => {
          return <ProjectsComp {...el} />;
        })}
        <Flex {...MainProjectHeadlineFlex}>
          <Heading {...(theme ? MainProjectHeading1 : LMainProjectHeading1)}>Days &nbsp;</Heading>
          <Heading {...(theme ? MainProjectHeading2 : LMainProjectHeading2)}>I Code</Heading>
        </Flex>
        <GithubStats/>
      </Flex>
    </>
  );
};

export default Projects;
