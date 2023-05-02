
export const ContactHeading1 = {
  transition: "500ms",
  color: "DarkBlue_WTrans2",
  my: "4",
};
export const ContactHeading2 = {
  transition: "500ms",
  color: "Blue_White",
  my: "4",
};
export const ContactFlexMain = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  mt:"12"
};
export const ContactButtons = {
  borderRadius: "50%",
  size: "md",
  m: { base: "1px", sm: "2", md: "3", lg: "5", xl: "6" },
  color: "White_Black",
  bgColor: "DarkBlue_White",
  transition: "700ms",
  _hover: { bgColor: "White_Black", color: "DarkBlue_White" },
  _active: { backgroundColor: "DarkBlue_White", color: "White_Black" },
  fontSize:"24px"
};

export const ContactCopyButtons = {
  borderRadius: "30px",
  size: "xs",
  w: "300px",
  p: "5",
  gap: "3",
  justifyContent: "space-between",
  color: "White_Black",
  bgColor: "DarkBlue_White",
  transition: "500ms",
  _hover: { bgColor: "#0086FC", color: "DarkBlue_White" },
  _active: { backgroundColor: "#35FC00", color: "White_Black" },
};

export const ContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: "White_Black",
};