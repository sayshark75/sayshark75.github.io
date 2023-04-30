import { Button, Text, Flex, Show, IconButton, useColorMode } from "@chakra-ui/react";
import React, { useContext} from "react";
import { BsStars } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdInfo, MdDevices, MdContactPage, MdContacts, MdDarkMode, MdWbSunny } from "react-icons/md";

import {
  NavabrButtonStyleLaptop,
  NavbarLaptopBar,
  NavbarMobileBar,
  NavbarButtonInsideBoxMobile,
  NavbarButtonStyleMobile,
  NavbarLaptopLogoStyle,
  NavbarThemeButtonConfig,
  NavbarThemeMainFlex,
} from "../Themes/Styles/NavbarStyles";
import { resumeDownload, resumelink } from "../Sources/Links.js";
import { ScrollContext } from "../Contexts/ScrollContext";

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = useContext(ScrollContext);

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  return (
    <>
      <Show above="md">
        <Flex {...NavbarLaptopBar}>
          <Show above="lg">
            <Flex alignItems={"center"} flex={1}>
              <Text {...NavbarLaptopLogoStyle}>Sayyed Sharuk</Text>
            </Flex>
          </Show>
          <Flex justifyContent={"flex-end"} flex={1}>
            <Button onClick={handleHomeRef} {...NavabrButtonStyleLaptop}>
              <FaHome /> Home
            </Button>

            <Button onClick={handleAboutRef} {...NavabrButtonStyleLaptop}>
              <MdInfo /> About
            </Button>

            <Button onClick={handleProjectsRef} {...NavabrButtonStyleLaptop}>
              <MdDevices /> Projects
            </Button>

            <Button onClick={handleSkillsRef} {...NavabrButtonStyleLaptop}>
              <BsStars /> Skills
            </Button>

            <Button onClick={handleContactRef} {...NavabrButtonStyleLaptop}>
              <MdContacts /> Contact
            </Button>

            <a href={resumeDownload} onClick={handleClick}>
              <Button {...NavabrButtonStyleLaptop}>
                <MdContactPage /> Resume
              </Button>
            </a>
          </Flex>
        </Flex>
      </Show>
      {/* Theme Preferences */}
      <Flex {...NavbarThemeMainFlex}>
        <IconButton onClick={toggleColorMode} {...NavbarThemeButtonConfig} transition={"700ms"} icon={colorMode === "light" ? <MdDarkMode /> : <MdWbSunny />} />
      </Flex>

      {/* Mobile Navbar */}
      <Show breakpoint="(max-width: 767px)">
        <Flex {...NavbarMobileBar}>
          <Button onClick={handleHomeRef} {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <FaHome style={{fontSize:"20px"}} /> Home
            </Flex>
          </Button>
          <Button onClick={handleAboutRef} {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <MdInfo style={{fontSize:"20px"}} />
              About
            </Flex>
          </Button>
          <Button onClick={handleProjectsRef} {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <MdDevices style={{fontSize:"20px"}} />
              Projects
            </Flex>
          </Button>
          <Button onClick={handleSkillsRef} {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <BsStars style={{fontSize:"20px"}} />
              Skills
            </Flex>
          </Button>
          <Button onClick={handleContactRef} {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <MdContacts style={{fontSize:"20px"}} /> Contact
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <a href={resumeDownload} onClick={handleClick}>
              <Flex {...NavbarButtonInsideBoxMobile}>
                <MdContactPage style={{fontSize:"20px"}} />
                Resume
              </Flex>
            </a>
          </Button>
        </Flex>
      </Show>
    </>
  );
};

export default Navbar;
