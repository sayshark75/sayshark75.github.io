import { Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ScrollContext } from "../Contexts/ScrollContext";
import { ProjectsData } from "../Sources/ProjectsData.js";
import ProjectsCard from "../Components/ProjectsComp";

import { MainProjectHeadFlex, MainProjectHeading1, MainProjectHeading2, MainProjectHeadlineFlex } from "../Themes/Styles/ProjectPageStyles";
import GithubStats from "./GithubStats";

const Projects = () => {
  const { ProjectsRef } = useContext(ScrollContext);

  return (
    <>
      <Flex ref={ProjectsRef} {...MainProjectHeadFlex}>
        <Flex {...MainProjectHeadlineFlex}>
          <Heading {...MainProjectHeading1}>My&nbsp;</Heading>
          <Heading {...MainProjectHeading2}>Projects</Heading>
        </Flex>
        {ProjectsData.map((el, id) => {
          return <ProjectsCard key={id} {...el} />;
        })}
        <Flex {...MainProjectHeadlineFlex}>
          <Heading {...MainProjectHeading1}>Days &nbsp;</Heading>
          <Heading {...MainProjectHeading2}>I Code</Heading>
        </Flex>
        <GithubStats />
      </Flex>
    </>
  );
};

export default Projects;
