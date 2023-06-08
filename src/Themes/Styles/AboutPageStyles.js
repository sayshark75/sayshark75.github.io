export const aboutButtonsTop = {
  borderRadius: "3",
  size: "xs",
  ml: "8",
  mr: "2",
  gap: "3",
  color: "whiteBlack",
  bgColor: "darkBlueWhite",
  transition: "500ms",
  _hover: { bgColor: "#0086FC", color: "darkBlueWhite" },
};
export const AboutResumeButton = {
  ml: "8",
  my: "4",
  bgColor: "buttonBg",
  color: "buttonText",
  boxShadow: "2xl",
  _hover: { bgColor: "buttonBgHover", color: "buttonTextHover" },
  border: "3px solid",
  borderColor: "buttonBorder",
  p: "6",
  fontSize: "xl",
};

export const AboutHeadFlex = {
  transition: "500ms",
  direction: "column",
  w: "100%",
  minH: "100vh",
  h: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export const AboutHeadings = {
  transition: "500ms",
  color: "textPrimary",
  my: "4",
  mt: "12",
};
export const AboutHeadings2 = {
  transition: "500ms",
  color: "textSecondary",
  my: "4",
  mt: "12",
};
export const AboutAfterHeading = {
  transition: "500ms",
  m: "4",
  w: { base: "100%", sm: "90%", md: "80%", lg: "80%" },
  justifyContent: "center",
  alignItems: "center",
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
export const AboutPicSideData = {
  alignSelf: "center",
  direction: "column",
};
export const AboutSummaryText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  textAlign: "left",
  color: "textPrimary",
  mx: ["2", "8"],
};
export const AboutContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: "iconBtnBg",
  mx: "8",
};
export const AboutIconText = {
  transition: "500ms",
  as: "b",
  fontSize: "md",
  color: "iconBtn",
};

export const AboutStatStyle = {
  grid: {
    templateColumns: ["repeat(2,140px)", "repeat(2,140px)", "repeat(2,200px)", "repeat(4,200px)"],
    color: "textPrimary",
    width: "100%",
    gridGap: ["2", "8", "12"],
    placeContent: "center",
  },
  card: {
    direction: "column",
    bgColor: "cardBg",
    borderRadius: "25px",
    boxShadow: "lg",
    p: ["4", "4", "8"],
    justifyContent: "center",
    alignItems: "center",
    gap: "3",
    textAlign: "center",
    transition: "500ms",
    _hover: { boxShadow: "xl", borderTop: "5px solid", borderTopColor: "heartColor" },
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
