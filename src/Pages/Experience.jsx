import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { MainProjectHeading1, MainProjectHeading2, MainProjectHeadlineFlex } from "../Themes/Styles/ProjectPageStyles";
const Experience = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} direction={"column"} w={"80%"} m={"auto"} gap={"4"} pt={"5"} mt={"5"}>
      <Flex {...MainProjectHeadlineFlex}>
        <Heading {...MainProjectHeading1}>My&nbsp;</Heading>
        <Heading {...MainProjectHeading2}>Experience</Heading>
      </Flex>
      <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} color={"textPrimary"}>
        &raquo;&nbsp;Freelance Fullstack Web Developer
      </Text>
      <Flex color={"textSecondary"} gap={4} justifyItems={"center"} alignItems={"center"} direction={["column", "row"]}>
        <Image w={"60px"} rounded={"full"} bgColor={"white"} src="https://www.autotron.tech/logo.png" alt="Autotron Tech Website Logo" />
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Autotron Electronics
        </Text>
      </Flex>
      <Text fontSize={["md", "xl"]} color={"textPrimary"} fontWeight={"semibold"} textAlign={["justify", "center"]}>
        Post my training at Masai School, I freelanced as a Full Stack Web Developer at Autotron Electronics. I played a key role in developing the organization's website from
        scratch and efficiently managed its operations.
      </Text>
    </Flex>
  );
};

export default Experience;
