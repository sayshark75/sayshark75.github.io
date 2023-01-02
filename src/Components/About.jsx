import React from "react";
import { Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import ProfilePic from "../Assets/Profile6.png";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom, fadeInConfigLeft, fadeInConfigRight, fadeInConfigTop } from "../Animations/Animations";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import GrassIcon from "@mui/icons-material/Grass";

const About = () => {
  
  const aboutButtonsTop = {
    borderRadius: "50%",
    size: "xs",
    ml: "8",
    mr: "2",
    color: "black",
    bgColor: "white",
    transition: "700ms",
    _hover: { bgColor: "black", color: "white" },
    _active: { backgroundColor: "white", color: "black" },
  };
  return (
    <>
      <Flex direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"}>
        <FadeIn {...fadeInConfigTop}>
          <Flex>
            <Heading color={"whiteAlpha.700"} my={"4"}>
              About&nbsp;
            </Heading>
            <Heading color={"white"} my={"4"}>
              Me
            </Heading>
          </Flex>
        </FadeIn>
        <Flex m={"4"} w={{ base: "100%", sm: "90%", md: "80%", lg: "80%" }} justifyContent={"center"}>
          <Flex direction={{ base: "column", sm: "column", md: "row" }} justifyContent={"center"} m={"1"} alignItems={"center"} gap={1}>
            <FadeIn {...fadeInConfigBottom}>
              <Flex>
                <Image transition={"1000ms"} border={"8px solid white"} w={{ base: "250px", sm: "300px", md: "500px" }} src={ProfilePic} />
              </Flex>
            </FadeIn>
            <FadeIn {...fadeInConfigRight}>
              <Flex direction={"column"}>
                <Text as="b" fontSize={"md"} color={"whiteAlpha.800"} mx={"8"}>
                  Hi Everyone, I am Sayyed Sharuk, from Ahmednagar, Maharashtra. I have completed my Post Graduation in Master of Electronics Science under University of Pune.
                </Text>
                <Text as="b" fontSize={"md"} color={"whiteAlpha.800"} py="4" mx={"8"}>
                  Some of My Interest apart from Coding:
                </Text>
                <Flex m={"1"}>
                  <FadeIn {...fadeInConfigLeft} delayInMilliseconds={400}>
                    <IconButton {...aboutButtonsTop} icon={<OfflineBoltIcon />} />
                    <Text as="b" fontSize={"md"} color={"whiteAlpha.800"}>
                      Electronics
                    </Text>
                  </FadeIn>
                </Flex>
                <Flex m={"1"}>
                  <FadeIn {...fadeInConfigLeft} delayInMilliseconds={500}>
                    <IconButton {...aboutButtonsTop} icon={<SportsEsportsIcon />} />
                    <Text as="b" fontSize={"md"} color={"whiteAlpha.800"}>
                      E-Sports
                    </Text>
                  </FadeIn>
                </Flex>
                <Flex m={"1"}>
                  <FadeIn {...fadeInConfigLeft} delayInMilliseconds={600}>
                    <IconButton {...aboutButtonsTop} icon={<MovieCreationIcon />} />
                    <Text as="b" fontSize={"md"} color={"whiteAlpha.800"}>
                      Movies
                    </Text>
                  </FadeIn>
                </Flex>
                <Flex m={"1"}>
                  <FadeIn {...fadeInConfigLeft} delayInMilliseconds={700}>
                    <IconButton {...aboutButtonsTop} icon={<GrassIcon />} />
                    <Text as="b" fontSize={"md"} color={"whiteAlpha.800"}>
                      Growing Plants
                    </Text>
                  </FadeIn>
                </Flex>
              </Flex>
            </FadeIn>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
