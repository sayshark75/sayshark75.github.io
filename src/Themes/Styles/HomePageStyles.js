export const homeParentFlex = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  w: "100%",
  h: "100vh",
  gap: "12",
};
export const homeButtonsTop = {
  borderRadius: "3",
  size: "sm",
  mx: { base: "1px", sm: "2", md: "3", lg: "5", xl: "6" },
  color: "iconBtn",
  bgColor: "iconBtnBg",
  transition: "700ms",
  _hover: { bgColor: "iconBtnBgHover", color: "iconBtnHover" },
  fontSize: "20px",
};

export const heading1 = {
  transition: "500ms",
  fontSize: { base: "34px", sm: "40px", md: "64px", lg: "86", xl: "108px" },
  color: "textPrimary",
};
export const heading2 = {
  transition: "500ms",
  fontSize: { base: "34px", sm: "40px", md: "64px", lg: "86", xl: "108px" },
  color: "textSecondary",
};
export const aboutFlex = {
  transition: "1000",
  w: { base: "95%", sm: "90%", md: "85%", lg: "70%" },
};
export const aboutText = {
  as: "b",
  transition: "500ms",
  color: "textPrimary",
  textAlign: "justify",
  m: ["4", "8"],
};

export const themeStyle = {
  main: {
    gap: 2,
  },
  btn: {
    fontSize: "2xl",
    borderRadius: "50%",
  },
};
