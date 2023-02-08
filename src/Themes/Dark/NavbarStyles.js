import { White, WhiteTrans2, Black, BlackTrans1,BlackTrans3 } from "../ColorPallet";

export const NavabrButtonStyleLaptop = {
  transition: "500ms",
  gap: 1,
  borderRadius: "0px",
  bgColor: BlackTrans3,
  color: White,
  _hover: {
    backgroundColor: White,
    color: BlackTrans1,
  },
};

export const NavbarLaptopBar = {
  transition: "500ms",
  pos: "sticky",
  zIndex: "1",
  top: "0px",
  w: "100%",
  bgColor: Black,
  color: White,
  gap: "2",
  p: "1",
};
export const NavbarLaptopLogoStyle = {
  transition: "500ms",
  color: WhiteTrans2,
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
  bgColor: Black,
  color: White,
  justifyContent: "center",
};
export const NavbarButtonStyleMobile = {
  transition: "500ms",
  h: "100%",
  fontSize: "sm",
  borderRadius: "0px",
  bgColor: BlackTrans1,
  color: White,
  _active: { backgroundColor: White, color: BlackTrans1 },
  _hover: { backgroundColor: BlackTrans1, color: White },
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
  color: Black,
  bgColor: White,
  _hover: { bgColor: Black, color: White },
  _active: { backgroundColor: White, color: Black },
};

export const NavbarThemeMainFlex = {
  transition: "500ms",
  w: "100%",
  pos: "sticky",
  top: "80%",
  zIndex: "2",
  justifyContent: "flex-end",
};
