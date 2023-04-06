
export const NavabrButtonStyleLaptop = {
  transition: "500ms",
  gap: 1,
  borderRadius: "0px",
  bgColor: "WTrans1_BTrans3",
  color: "DarkBlue_White",
  _hover: {
    backgroundColor: "DarkBlue_White",
    color: "WTrans3_BTrans1",
  },
};

export const NavbarLaptopBar = {
  transition: "500ms",
  pos: "sticky",
  zIndex: "1",
  top: "0px",
  w: "100%",
  bgColor: "White_Black",
  color: "DarkBlue_White",
  gap: "2",
  py: "1",
};
export const NavbarLaptopLogoStyle = {
  transition: "500ms",
  color: "DarkBlue_WTrans2",
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
  bgColor: "White_Black",
  color: "DarkBlue_White",
  justifyContent: "center",
};
export const NavbarButtonStyleMobile = {
  transition: "500ms",
  h: "100%",
  fontSize: "sm",
  borderRadius: "0px",
  bgColor: "WTrans3_BTrans1",
  color: "DarkBlue_White",
  _active: { backgroundColor: "DarkBlue_White", color: "WTrans3_BTrans1" },
  _hover: { backgroundColor: "WTrans3_BTrans1", color: "DarkBlue_White" },
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
  zIndex: "2",
  size: "md",
  mx: { base: "3", sm: "2", md: "3", lg: "5", xl: "10" },
  color: "White_Black",
  bgColor: "DarkBlue_White",
  _hover: { bgColor: "White_Black", color: "DarkBlue_White" },
  _active: { backgroundColor: "DarkBlue_White", color: "White_Black" },
};

export const NavbarThemeMainFlex = {
  transition: "500ms",
  pos: "sticky",
  top: "80%",
  left: "85%",
  justifyContent: "flex-end",
  zIndex:"2",
  w:"60px"
};
