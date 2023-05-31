export const ContactHeading1 = {
  transition: "500ms",
  color: "textPrimary",
  my: "4",
};
export const ContactHeading2 = {
  transition: "500ms",
  color: "textSecondary",
  my: "4",
};
export const ContactFlexMain = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  minH: "100vh",
  gap: "10",
  pt: "12",
};
export const ContactButtons = {
  borderRadius: "50%",
  size: "md",
  mx: { base: "1px", sm: "2", md: "3", lg: "5", xl: "6" },
  color: "buttonText",
  bgColor: "buttonBg",
  transition: "700ms",
  _hover: { bgColor: "buttonBgHover", color: "buttonTextHover" },
  fontSize: "24px",
};

export const ContactCopyButtons = {
  borderRadius: "30px",
  size: "xs",
  w: "300px",
  p: "5",
  gap: "3",
  justifyContent: "space-between",
  color: "buttonText",
  bgColor: "buttonBg",
  transition: "500ms",
  _hover: { bgColor: "buttonBgHover", color: "buttonTextHover" },
};

export const ContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: "textNormal",
  _hover: { color: "iconBtnHover" },
};

export const MsgFormStyle = {
  main: {
    w: ["310px", "440px"],
    p: 4,
    m: "2",
    bgColor: "msgFormBg",
    color: "msgFormInputText",
    rounded: "xl",
    direction: "column",
    gap: 4,
  },
  input: {
    bgColor: "msgFormInput",
    outline: "none",
    border: "none",
    _placeholder: { color: "msgFormInputText" },
  },
  btn: {
    gap: "1",
    bgColor: "msgBtnBg",
    rounded: "full",
    outline: "none",
    border: "none",
    _hover: { bgColor: "msgBtnText", color: "msgBtnBg" },
  },
};
