import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { MyThemeContext } from "../Contexts/themeContext";
import { CalColorText, CalStyleProps, GithubCalenderTheme, GithubCard1 } from "../Themes/Dark/ProjectPageStyles";
import { LCalColorText, LGithubCalenderTheme, LGithubCard1 } from "../Themes/Light/ProjectPageStyles";

const GithubStats = () => {
  const { theme } = useContext(MyThemeContext);
  const GC1T = theme ? GithubCard1 : LGithubCard1;
  return (
    <>
      <Flex {...(theme ? CalColorText : LCalColorText)}>
        <GitHubCalendar {...CalStyleProps} theme={theme ? GithubCalenderTheme : LGithubCalenderTheme} username="sayshark75" />
      </Flex>
      <Text align={"center"}>
        <Flex w={{base:"280px",sm:"320px",md:"440px",lg:"560px"}} gap={5} mt={6} direction={"column"} justifyContent={"center"}>
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=sayshark75&show_icons=true&locale=en&title_color=${GC1T.titleColor}&text_color=${GC1T.textColor}&icon_color=${GC1T.titleColor}&bg_color=${GC1T.bgColor}&custom_title=My Statistics&ring_color=${GC1T.ringColor}&border_color=${GC1T.bgColor}`}
            alt={"Github Card"}
          />
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=sayshark75&show_icons=true&locale=en&layout=compact&bg_color=${GC1T.bgColor}&title_color=${GC1T.textColor}&text_color=${GC1T.titleColor}&border_color=${GC1T.bgColor}`}
            alt={"Github Language"}
          />
          <Image
            src={`https://streak-stats.demolab.com?user=sayshark75&hide_border=true&background=${GC1T.bgColor}&ring=${GC1T.ringColor}&fire=${GC1T.titleColor}&currStreakLabel=${GC1T.textColor}&currStreakNum=${GC1T.titleColor}&sideNums=${GC1T.textColor}&dates=${GC1T.titleColor}&stroke=${GC1T.ringColor}&sideLabels=${GC1T.titleColor}`}
          />
        </Flex>
      </Text>
    </>
  );
};

export default GithubStats;
