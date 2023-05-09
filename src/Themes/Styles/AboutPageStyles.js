export const aboutButtonsTop = {
  borderRadius: "3",
  size: "xs",
  ml: "8",
  mr: "2",
  gap: "3",
  color: "White_Black",
  bgColor: "DarkBlue_White",
  transition: "500ms",
  _hover: { bgColor: "#0086FC", color: "DarkBlue_White" },
  _active: { backgroundColor: "#35FC00", color: "White_Black" },
};
export const AboutResumeButton = {
  ml: "8",
  my: "4",
  bgColor: "LGHex_LBHex",
  color: "Black_White",
  boxShadow: "2xl",
  _hover: { bgColor: "White_Gray", color: "DarkBlue_White" },
  p: "6",
  fontSize: "xl",
};

export const AboutHeadFlex = {
  transition: "500ms",
  direction: "column",
  w: "100%",
  pt: "12",
  justifyContent: "center",
  alignItems: "center",
};
export const AboutHeadings = {
  transition: "500ms",
  color: "DarkBlue_WTrans2",
  my: "4",
};
export const AboutHeadings2 = {
  transition: "500ms",
  color: "Blue_White",
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
  direction: { base: "column", sm: "column", md: "column", lg: "row" },
  justifyContent: "center",
  m: "1",
  alignItems: { base: "center", md: "flex-start" },
  gap: 1,
};
export const AboutProfilePicture = {
  transition: "500ms",
  borderRadius: "50%",
  w: { base: "250px", sm: "300px", md: "500px" },
};
export const AboutSummaryText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  textAlign: "justify",
  color: "DarkBlue_WTrans3",
  mx: "8",
};
export const AboutContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: "White_Black",
  mx: "8",
};
export const AboutIconText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  color: "DarkBlue_WTrans3",
};

export const AboutStatStyle = {
  grid: {
    templateColumns: ["repeat(2,140px)", "repeat(2,140px)", "repeat(2,200px)", "repeat(4,200px)"],
    color: "DarkBlue_WTrans3",
    width: "100%",
    gridGap: ["2", "2", "12"],
    placeContent: "center",
  },
  card: {
    direction: "column",
    bgColor: "White_Gray",
    borderRadius: "25px",
    boxShadow: "lg",
    p: ["4", "4", "8"],
    justifyContent: "center",
    alignItems: "center",
    gap: "3",
    textAlign: "center",
  },
  icon: {
    as: "b",
    fontSize: "30px",
  },
  text: {
    as: "b",
    fontSize: "md",
  },
};