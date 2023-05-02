import { Flex, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { CalColorText, CalStyleProps, GCDTheme, GCLTheme, GCardD, GCardL } from "../Themes/Styles/ProjectPageStyles";

const GithubStats = () => {
  const { colorMode } = useColorMode();
  const GCT = useColorModeValue(GCardL, GCardD);
  return (
    <>
      <Flex {...CalColorText}>
        <GitHubCalendar {...CalStyleProps} theme={colorMode === "light" ? GCDTheme : GCLTheme} username="sayshark75" />
      </Flex>
      <Text align={"center"}>
        <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api?username=sayshark75&show_icons=true&locale=en&title_color=${GCT.titleColor}&text_color=${GCT.textColor}&icon_color=${GCT.titleColor}&bg_color=${GCT.bgColor}&custom_title=My Statistics&ring_color=${GCT.ringColor}&border_color=${GCT.bgColor}`}
            alt={"Github Card"}
          />
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://github-readme-stats-git-master-sayshark75.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=${GCT.bgColor}&title_color=${GCT.textColor}&text_color=${GCT.titleColor}&border_color=${GCT.bgColor}`}
            alt={"Github Language"}
          />
          <Image
            boxShadow={"lg"}
            transition={"750ms"}
            borderRadius={"12"}
            src={`https://streak-stats.demolab.com?user=sayshark75&hide_border=true&background=${GCT.bgColor}&ring=${GCT.ringColor}&fire=${GCT.titleColor}&currStreakLabel=${GCT.textColor}&currStreakNum=${GCT.titleColor}&sideNums=${GCT.textColor}&dates=${GCT.titleColor}&stroke=${GCT.ringColor}&sideLabels=${GCT.titleColor}`}
          />
        </Flex>
      </Text>
    </>
  );
};

export default GithubStats;
