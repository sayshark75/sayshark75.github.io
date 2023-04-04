import { Black, Blue, BluePlus, DarkBlue, ExtraDarkBlue, leafGreen, White } from "../ColorPallet";

export const LProjectHeadFlex = {
  transition: "500ms",
  mb: "8",
  _hover:{boxShadow:'2xl'},
  bgColor: White,
  gap: "6",
  direction: { base: "column", sm: "column", md: "row" },
  borderRadius: "30px",
  p: "5",
  justifyContent: "center",
  alignItems: "center",
};
export const LProjectImgStyle = {
  transition: "500ms",
  w: { base: "auto", sm: "auto", md: "300px", lg: "500px" },
};

export const LProjectDetailsViewButtons = {
  transition: "500ms",
  p: "2",
  borderRadius: "5",
  justifyContent: "center",
  mt: "2",
  alignItems: "center",
  gap: "4",
};
export const LProjectDeatailsFlexMain = {
  transition: "500ms",
  w: { base: "auto", sm: "auto", md: "500px" },
  direction: "column",
};
export const LProjectDetailsFlexHeading = {
  transition: "500ms",
  justifyContent: "center",
  alignItems: "center",
  direction: { base: "column", sm: "column", md: "row" },
};
export const LProjectDetailsHeading1 = {
  transition: "500ms",
  color: ExtraDarkBlue,
  fontSize: "lg",
  my: "2",
};
export const LProjectDetailsHeading2 = {
  transition: "500ms",
  fontSize: "lg",
  color: BluePlus,
  my: "2",
};
export const LProjectDetailsTextSummary = {
  transition: "500ms",
  as: "b",
  textAlign: "justify",
  color: ExtraDarkBlue,
};
export const LProjectDetailsTextStackFlex = {
  transition: "500ms",
  mt: "8",
  justifyContent: "center",
  gap: "4",
};
export const LProjectDetailsToolTip = {
  transition: "500ms",
  bgColor: DarkBlue,
  color: White,
};

export const LProjectDetailsIconButtonTop = {
  transition: "500ms",
  fontSize: "16px",
  width: "7rem",
  _hover: { bgColor: Black, color: White },
  bgColor: leafGreen,
  color: White,
};
export const LProjectDetailsIconButton = {
  transition: "500ms",
  fontSize: "30px",
  _hover: { bgColor: Black },
  bgColor: White,
};

export const LGithubCalenderTheme = {
  level4: "#167CFF",
  level3: "#1C68CA",
  level2: "#103769",
  level1: "#1C2E45",
  level0: "#FFFFFF",
};

export const LGithubCard1 = {
  bgColor: "FFFFFF",
  titleColor: "1C2E45FF",
  textColor: "1C68CA",
  ringColor: "00CA09FF",
  customTitle: "My Statistics",
};

export const LMainProjectHeading1 = {
  transition: "500ms",
  color: DarkBlue,
  my: "4",
};
export const LMainProjectHeading2 = {
  transition: "500ms",
  color: Blue,
  my: "4",
};
export const LCalColorText = {
  color: DarkBlue,
  p: "4",
  borderRadius: "8",
  _hover: { boxShadow: "2xl" },
  transition: "700ms",
};
export const LCalStyleProps = {
  fontSize: 16,
  blockSize: 15,
  blockMargin: 5,
};
