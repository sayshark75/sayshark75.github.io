import { White, WhiteTrans2, Black } from "../ColorPallet"

export const ContactHeading1 = {
  transition: "500ms",
  color: WhiteTrans2,
  my: "4",
};
export const ContactHeading2 = {
  transition: "500ms",
  color: White,
  my: "4",
};
export const ContactFlexMain = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const ContactButtons = {
  borderRadius: "50%",
  size: "md",
  m: { base: "1px", sm: "2", md: "3", lg: "5", xl: "6" },
  color: Black,
  bgColor: White,
  transition: "700ms",
  _hover: { bgColor: Black, color: White },
  _active: { backgroundColor: White, color: Black },
  fontSize:"24px"
};
