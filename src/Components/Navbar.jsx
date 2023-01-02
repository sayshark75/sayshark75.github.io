import { Button, Text, Flex, Show, Tooltip } from "@chakra-ui/react";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DevicesIcon from "@mui/icons-material/Devices";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import {
  NavabrButtonStyleLaptop,
  NavbarLaptopBar,
  NavbarMobileBar,
  NavbarButtonInsideBoxMobile,
  NavbarButtonStyleMobile,
  NavbarLaptopLogoStyle,
} from "../Themes/Dark/NavbarStyles";
import { resumelink } from "../Sources/Links.js";
import { toolTipStyle } from "../Themes/Dark/Miscellaneous";

const Navbar = () => {
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
            <Tooltip {...toolTipStyle} label="Home">
              <Button {...NavabrButtonStyleLaptop}>
                <HomeIcon />
              </Button>
            </Tooltip>
            <Tooltip {...toolTipStyle} label="About">
              <Button {...NavabrButtonStyleLaptop}>
                <InfoIcon />
              </Button>
            </Tooltip>
            <Tooltip {...toolTipStyle} label="Skills">
              <Button {...NavabrButtonStyleLaptop}>
                <AutoAwesomeIcon />
              </Button>
            </Tooltip>
            <Tooltip {...toolTipStyle} label="Projects">
              <Button {...NavabrButtonStyleLaptop}>
                <DevicesIcon />
              </Button>
            </Tooltip>
            <Tooltip {...toolTipStyle} label="Contact">
              <Button {...NavabrButtonStyleLaptop}>
                <ContactsIcon />
              </Button>
            </Tooltip>
            <Tooltip {...toolTipStyle} label="Resume">
              <a href={resumelink} target={"_blank"} rel="noreferrer">
                <Button {...NavabrButtonStyleLaptop}>
                  <ContactPageIcon />
                </Button>
              </a>
            </Tooltip>
          </Flex>
        </Flex>
      </Show>

      {/* Mobile Navbar */}
      <Show below="md">
        <Flex {...NavbarMobileBar}>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <HomeIcon /> Home
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <InfoIcon />
              About Me
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <AutoAwesomeIcon />
              Skills
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <DevicesIcon />
              Projects
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <ContactsIcon /> Contact
            </Flex>
          </Button>
          <Button {...NavbarButtonStyleMobile}>
            <Flex {...NavbarButtonInsideBoxMobile}>
              <ContactPageIcon />
              Resume
            </Flex>
          </Button>
        </Flex>
      </Show>
    </>
  );
};

export default Navbar;
