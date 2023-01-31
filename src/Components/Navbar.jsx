import { Button, Text, Flex, Show, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsStars } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdInfo, MdDevices, MdContactPage, MdContacts, MdDarkMode, MdWbSunny } from "react-icons/md";
import { MyThemeContext } from "../Contexts/themeContext";

import {
  NavabrButtonStyleLaptop,
  NavbarLaptopBar,
  NavbarMobileBar,
  NavbarButtonInsideBoxMobile,
  NavbarButtonStyleMobile,
  NavbarLaptopLogoStyle,
  NavbarThemeButtonConfig,
  NavbarThemeMainFlex,
} from "../Themes/Dark/NavbarStyles";
import {
  LNavabrButtonStyleLaptop,
  LNavbarLaptopBar,
  LNavbarMobileBar,
  LNavbarButtonInsideBoxMobile,
  LNavbarButtonStyleMobile,
  LNavbarLaptopLogoStyle,
  LNavbarThemeButtonConfig,
} from "../Themes/Light/NavbarStyles";
import { resumelink } from "../Sources/Links.js";
import { ScrollContext } from "../Contexts/ScrollContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(MyThemeContext);
  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = useContext(ScrollContext);

  const handleClick = () => {
    window.open(resumelink, "_blank");
  };

  return (
    <>
      <Show above="md">
        <Flex {...(theme ? NavbarLaptopBar : LNavbarLaptopBar)}>
          <Show above="lg">
            <Flex alignItems={"center"} flex={1}>
              <Text {...(theme ? NavbarLaptopLogoStyle : LNavbarLaptopLogoStyle)}>Sayyed Sharuk</Text>
            </Flex>
          </Show>
          <Flex justifyContent={"flex-end"} flex={1}>
            <Button onClick={handleHomeRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <FaHome /> Home
            </Button>

            <Button onClick={handleAboutRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdInfo /> About
            </Button>

            <Button onClick={handleProjectsRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdDevices /> Projects
            </Button>

            <Button onClick={handleSkillsRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <BsStars /> Skills
            </Button>

            <Button onClick={handleContactRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdContacts /> Contact
            </Button>

            <a href="https://drive.google.com/uc?export=download&id=1JR1tvkUMpBiSejjOEKKT9B7S2XTZHtpv" onClick={handleClick}>
              <Button {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
                <MdContactPage /> Resume
              </Button>
            </a>
          </Flex>
        </Flex>
      </Show>
      {/* Theme Preferences */}
      <Flex {...NavbarThemeMainFlex}>
        {theme ? (
          <IconButton onClick={() => setTheme(!theme)} {...(theme ? NavbarThemeButtonConfig : LNavbarThemeButtonConfig)} icon={<MdDarkMode />} />
        ) : (
          <IconButton onClick={() => setTheme(!theme)} {...(theme ? NavbarThemeButtonConfig : LNavbarThemeButtonConfig)} icon={<MdWbSunny />} />
        )}
      </Flex>

      {/* Mobile Navbar */}
      <Show below="md">
        <Flex {...(theme ? NavbarMobileBar : LNavbarMobileBar)}>
          <Button onClick={handleHomeRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <FaHome style={{ fontSize: "22px" }} /> Home
            </Flex>
          </Button>
          <Button onClick={handleAboutRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdInfo style={{ fontSize: "22px" }} />
              About Me
            </Flex>
          </Button>
          <Button onClick={handleProjectsRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdDevices style={{ fontSize: "22px" }} />
              Projects
            </Flex>
          </Button>
          <Button onClick={handleSkillsRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <BsStars style={{ fontSize: "22px" }} />
              Skills
            </Flex>
          </Button>
          <Button onClick={handleContactRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdContacts style={{ fontSize: "22px" }} /> Contact
            </Flex>
          </Button>
          <Button {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <a href="https://drive.google.com/uc?export=download&id=1JR1tvkUMpBiSejjOEKKT9B7S2XTZHtpv" onClick={handleClick}>
              <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
                <MdContactPage style={{ fontSize: "22px" }} />
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
