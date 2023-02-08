import { DarkBlue, White, WhiteTrans1, WhiteTrans3 } from "../ColorPallet";

export const LNavabrButtonStyleLaptop = {
  transition: "500ms",
  gap: 1,
  borderRadius: "0px",
  bgColor: WhiteTrans1,
  color: DarkBlue,
  _hover: {
    backgroundColor: DarkBlue,
    color: WhiteTrans3,
  },
};

export const LNavbarLaptopBar = {
  transition: "500ms",
  pos: "sticky",
  zIndex: "1",
  top: "0px",
  w: "100%",
  bgColor: White,
  color: DarkBlue,
  gap: "2",
  p: "1",
};
export const LNavbarLaptopLogoStyle = {
  transition: "500ms",
  color: DarkBlue,
  cursor: "pointer",
  _hover: { textShadow: "#616c6e 1px 1px 2px" },
  ml: 3,
  as: "b",
  fontSize: "md",
};

export const LNavbarMobileBar = {
  transition: "500ms",
  pos: "fixed",
  bottom: "0",
  alignItems: "center",
  zIndex: "1",
  h: "70px",
  w: "100%",
  bgColor: White,
  color: DarkBlue,
  justifyContent: "center",
};
export const LNavbarButtonStyleMobile = {
  transition: "500ms",
  h: "100%",
  fontSize: "sm",
  borderRadius: "0px",
  bgColor: WhiteTrans3,
  color: DarkBlue,
  _active: { backgroundColor: DarkBlue, color: WhiteTrans3 },
  _hover: { backgroundColor: WhiteTrans3, color: DarkBlue },
};
export const LNavbarButtonInsideBoxMobile = {
  transition: "500ms",
  m: 2,
  gap: 1,
  direction: "column",
  alignItems: "center",
};
export const LNavbarThemeButtonConfig = {
  transition: "500ms",
  borderRadius: "50%",
  size: "md",
  mx: { base: "3", sm: "2", md: "3", lg: "5", xl: "10" },
  color: White,
  bgColor: DarkBlue,
  _hover: { bgColor: White, color: DarkBlue },
  _active: { backgroundColor: DarkBlue, color: White },
};

