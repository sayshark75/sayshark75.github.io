export const NavabrButtonStyleLaptop = {
  transition: "500ms",
  gap: 1,
  borderRadius: "0px",
  bgColor: "blackAlpha.600",
  color: "white",
  _hover: {
    backgroundColor: "white",
    color: "blackAlpha.800",
  },
};

export const NavbarLaptopBar = {
  transition: "500ms",
  pos: "sticky",
  zIndex: "1",
  top: "0px",
  w: "100%",
  bgColor: "black",
  color: "white",
  gap: "2",
  p: "1",
};
export const NavbarLaptopLogoStyle = {
  transition: "500ms",
  color: "whiteAlpha.700",
  cursor: "pointer",
  _hover: { textShadow: "#CCC 1px 1px 2px" },
  ml: 3,
  as: "b",
  fontSize: "md",
};

export const NavbarMobileBar = {
  transition: "500ms",
  pos: "fixed",
  bottom: "0",
  alignItems: "center",
  zIndex: "1",
  h: "70px",
  w: "100%",
  bgColor: "black",
  color: "white",
  justifyContent: "center",
};
export const NavbarButtonStyleMobile = {
  transition: "500ms",
  h: "100%",
  fontSize: "sm",
  borderRadius: "0px",
  bgColor: "blackAlpha.800",
  color: "white",
  _active: { backgroundColor: "white", color: "blackAlpha.800" },
  _hover: { backgroundColor: "blackAlpha.800", color: "white" },
};
export const NavbarButtonInsideBoxMobile = {
  transition: "500ms",
  m: 2,
  gap: 1,
  direction: "column",
  alignItems: "center",
};
export const NavbarThemeButtonConfig = {
  transition: "500ms",
  borderRadius: "50%",
  size: "md",
  mx: { base: "3", sm: "2", md: "3", lg: "5", xl: "10" },
  color: "black",
  bgColor: "white",
  _hover: { bgColor: "black", color: "white" },
  _active: { backgroundColor: "white", color: "black" },
};

export const NavbarThemeMainFlex = {
  transition: "500ms",
  w: "100%",
  pos: "sticky",
  top: "80%",
  zIndex: "2",
  justifyContent: "flex-end",
};
