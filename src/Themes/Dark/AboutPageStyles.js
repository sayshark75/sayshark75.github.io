import { White, WhiteTrans3, WhiteTrans2, Black } from "../ColorPallet";

export const aboutButtonsTop = {
  borderRadius: "3",
  size: "xs",
  ml: "8",
  mr: "2",
  color: Black,
  bgColor: White,
  transition: "500ms",
  _hover: { bgColor: "#0086FC", color: White },
  _active: { backgroundColor: "#35FC00", color: Black },
};

export const AboutHeadFlex = {
  transition: "500ms",
  direction: "column",
  w: "100%",
  justifyContent: "center",
  alignItems: "center",
};
export const AboutHeadings = {
  transition: "500ms",
  color: WhiteTrans2,
  my: "4",
};
export const AboutHeadings2 = {
  transition: "500ms",
  color: White,
  my: "4",
};
export const AboutAfterHeading = {
  transition: "500ms",
  m: "4",
  w: { base: "100%", sm: "90%", md: "80%", lg: "80%" },
  justifyContent: "center",
};
export const AboutAfterHeadingMain = {
  transition: "500ms",
  direction: { base: "column", sm: "column", md: "row" },
  justifyContent: "center",
  m: "1",
  alignItems: { base: "center", md: "flex-start" },
  gap: 1,
};
export const AboutProfilePicture = {
  transition: "500ms",
  border: `8px solid ${White}`,
  w: { base: "250px", sm: "300px", md: "500px" },
};
export const AboutSummaryText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  textAlign:"justify",
  color: WhiteTrans3,
  mx: "8",
};
export const AboutContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: WhiteTrans3,
  mx: "8",
};
export const AboutSummaryInterest = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  color: WhiteTrans3,
  py: "4",
  mx: "8",
};
export const AboutIconText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  color: WhiteTrans3,
};
