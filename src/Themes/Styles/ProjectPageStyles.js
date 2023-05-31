import {
  GCLLevel1,
  GCLLevel2,
  GCLLevel3,
  GCLLevel4,
  GCLBase,
  GCDLevel1,
  GCDLevel2,
  GCDLevel3,
  GCDLevel4,
  GCDBase,
  GCLBg,
  GCLTitle,
  GCLText,
  GCLRing,
  GCDBg,
  GCDTitle,
  GCDText,
  GCDRing,
} from "../ColorPallet";

export const ProjectHeadFlex = {
  transition: "500ms",
  mb: "8",
  mx: "4",
  bgColor: "cardBg",
  gap: "6",
  direction: { base: "column", sm: "column", md: "row" },
  borderRadius: "30px",
  boxShadow: "xl",
  border: "6px double",
  borderColor: "cardBorder",
  p: "5",
  justifyContent: "center",
  alignItems: "center",
};
export const ProjectImgStyle = {
  transition: "500ms",
  w: { base: "auto", sm: "auto", md: "300px", lg: "500px" },
};

export const ProjectDetailsViewButtons = {
  transition: "500ms",
  p: "2",
  borderRadius: "5",
  justifyContent: "center",
  mt: "2",
  alignItems: "center",
  gap: "4",
};
export const ProjectDeatailsFlexMain = {
  transition: "500ms",
  w: { base: "auto", sm: "auto", md: "435px" },
  direction: "column",
};
export const ProjectDetailsFlexHeading = {
  transition: "500ms",
  justifyContent: "center",
  alignItems: "center",
  direction: { base: "column", sm: "column", md: "row" },
};
export const ProjectDetailsHeading1 = {
  transition: "500ms",
  color: "textPrimary",
  fontSize: "lg",
  my: "2",
};
export const ProjectDetailsHeading2 = {
  transition: "500ms",
  fontSize: "lg",
  color: "textSecondary",
  my: "2",
};
export const ProjectDetailsTextSummary = {
  transition: "500ms",
  as: "b",
  textAlign: "justify",
  color: "textPrimary",
};
export const ProjectDetailsTextStackFlex = {
  transition: "500ms",
  mt: "8",
  justifyContent: "center",
  gap: "4",
};
export const ProjectDetailsToolTip = {
  transition: "500ms",
  bgColor: "iconBtnBg",
  color: "iconBtn",
};
export const ProjectDetailsIconButtonTop = {
  transition: "500ms",
  fontSize: "16px",
  width: "7rem",
  color: "buttonText",
  _hover: { bgColor: "buttonBgHover", color: "buttonTextHover" },
  bgColor: "buttonBg",
  border: "2px solid",
  borderColor: "buttonBorder",
};
export const ProjectDetailsIconButton = {
  transition: "500ms",
  fontSize: "30px",
  bgColor: "transparent",
  _hover: { bgColor: "transparent" },
};

export const GCLTheme = {
  level4: GCLLevel1,
  level3: GCLLevel2,
  level2: GCLLevel3,
  level1: GCLLevel4,
  level0: GCLBase,
};
export const GCDTheme = {
  level4: GCDLevel1,
  level3: GCDLevel2,
  level2: GCDLevel3,
  level1: GCDLevel4,
  level0: GCDBase,
};

export const GCardL = {
  bgColor: GCLBg,
  titleColor: GCLTitle,
  textColor: GCLText,
  ringColor: GCLRing,
  customTitle: "My Statistics",
};
export const GCardD = {
  bgColor: GCDBg,
  titleColor: GCDTitle,
  textColor: GCDText,
  ringColor: GCDRing,
  customTitle: "My Statistics",
};

export const MainProjectHeadFlex = {
  transition: "500ms",
  justifyContent: "center",
  pt: "10",
  minH: "100vh",
  alignItems: "center",
  direction: "column",
};
export const MainProjectHeadlineFlex = {
  transition: "500ms",
  pb: "8",
};
export const MainProjectHeading1 = {
  transition: "500ms",
  color: "textPrimary",
  my: "4",
};
export const MainProjectHeading2 = {
  transition: "500ms",
  color: "textSecondary",
  my: "4",
};
export const CalColorText = {
  color: "textPrimary",
  p: "6",
  borderRadius: "8",
  _hover: { boxShadow: "xl" },
  transition: "700ms",
};
export const CalStyleProps = {
  fontSize: 16,
  blockSize: 15,
  blockMargin: 5,
};
