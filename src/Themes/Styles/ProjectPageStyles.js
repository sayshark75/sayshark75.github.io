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
  bgColor: "White_WTrans0",
  gap: "6",
  direction: { base: "column", sm: "column", md: "row" },
  borderRadius: "30px",
  boxShadow: "xl",
  border:"6px double",
  borderColor:"Blue_White",
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
  color: "EDBlue_White",
  fontSize: "lg",
  my: "2",
};
export const ProjectDetailsHeading2 = {
  transition: "500ms",
  fontSize: "lg",
  color: "BluePlus_WTrans2",
  my: "2",
};
export const ProjectDetailsTextSummary = {
  transition: "500ms",
  as: "b",
  textAlign: "justify",
  color: "EDBlue_White",
};
export const ProjectDetailsTextStackFlex = {
  transition: "500ms",
  mt: "8",
  justifyContent: "center",
  gap: "4",
};
export const ProjectDetailsToolTip = {
  transition: "500ms",
  bgColor: "DarkBlue_White",
  color: "White_Black",
};
export const ProjectDetailsIconButtonTop = {
  transition: "500ms",
  fontSize: "16px",
  width: "7rem",
  _hover: { bgColor: "White_Black", color: "Black_White" },
  bgColor: "LGHex_LBHex",
  border: "2px solid",
  borderColor: "LGHex_LBHex",
};
export const ProjectDetailsIconButton = {
  transition: "500ms",
  fontSize: "30px",
  _hover: { bgColor: "Black_Black", color: "White_White" },
  bgColor: "White_White",
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
  py: "8",
  mx: "12",
  justifyContent: "center",
  alignItems: "center",
  direction: "column",
};
export const MainProjectHeadlineFlex = {
  transition: "500ms",
  pb: "8",
};
export const MainProjectHeading1 = {
  transition: "500ms",
  color: "DarkBlue_WTrans2",
  my: "4",
};
export const MainProjectHeading2 = {
  transition: "500ms",
  color: "Blue_White",
  my: "4",
};
export const CalColorText = {
  color: "DarkBlue_White",
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
