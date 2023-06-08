import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { certificates } from "../Sources/Certificates";

const CarouselComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box w={"90%"} direction={"row"}>
      <Slider {...settings}>
        {certificates?.map((cert, id) => {
          return (
            <Flex key={id + Date.now()}>
              <Flex
                bgColor={"cardBg"}
                boxShadow={"sm"}
                borderRadius={"25px"}
                p={4}
                mx={4}
                direction={"column"}
                transition={"500ms"}
                _hover={{ boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" }}
              >
                <Image m={"auto"} w={"300px"} maxHeight={"200px"} src={cert.image} alt={cert.tag} />
                <Text color={"textNormal"} as={"b"} textAlign={"center"}>
                  {cert.tag}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CarouselComp;
