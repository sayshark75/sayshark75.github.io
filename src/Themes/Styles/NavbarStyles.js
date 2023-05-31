export const NavbarButtonStyleLaptop = {
  transition: "500ms",
  gap: 1,
  borderRadius: "0px",
  bgColor: "iconBtn",
  color: "textPrimary",
  _hover: {
    backgroundColor: "hoverBg",
    color: "hoverText",
  },
};

export const NavbarLaptopBar = {
  transition: "500ms",
  pos: "fixed",
  zIndex: "1",
  top: "0px",
  left: "0px",
  w: "100%",
  bgColor: "iconBtn",
  color: "iconBtnBg",
  gap: "2",
  py: "1",
};
export const NavbarLaptopLogoStyle = {
  transition: "500ms",
  color: "textPrimary",
  cursor: "pointer",
  _hover: { textShadow: "#CCC 1px 1px 2px" },
  ml: 3,
  as: "b",
  fontSize: "2xl",
};

export const NavbarMobileBar = {
  transition: "500ms",
  pos: "fixed",
  bottom: "0",
  alignItems: "center",
  zIndex: "1",
  h: "70px",
  w: "100%",
  bgColor: "iconBtn",
  color: "iconBtnBg",
  justifyContent: "center",
};
export const NavbarButtonStyleMobile = {
  transition: "500ms",
  h: "100%",
  fontSize: "sm",
  borderRadius: "0px",
  bgColor: "iconBtn",
  color: "textPrimary",
  _hover: { bgColor: "iconBtn", color: "textPrimary" },
};
export const NavbarButtonInsideBoxMobile = {
  transition: "500ms",
  m: 1,
  gap: 1,
  direction: "column",
  alignItems: "center",
};
export const NavbarThemeButtonConfig = {
  transition: "500ms",
  borderRadius: "50%",
  zIndex: "2",
  size: "md",
  mx: { base: "3", sm: "2", md: "3", lg: "5", xl: "10" },
  color: "iconBtn",
  bgColor: "iconBtnBg",
  _hover: { bgColor: "iconBtnBgHover", color: "iconBtnHover" },
};

export const NavbarThemeMainFlex = {
  transition: "500ms",
  pos: "sticky",
  top: "80%",
  left: "85%",
  justifyContent: "flex-end",
  zIndex: "2",
  w: "60px",
};
