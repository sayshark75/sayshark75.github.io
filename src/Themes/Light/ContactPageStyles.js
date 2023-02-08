import { Blue, DarkBlue, White } from "../ColorPallet";

export const LContactHeading1 = {
  transition: "500ms",
  color: DarkBlue,
  my: "4",
};
export const LContactHeading2 = {
  transition: "500ms",
  color: Blue,
  my: "4",
};
export const LContactFlexMain = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const LContactButtons = {
  borderRadius: "50%",
  fontSize:"24px",
  size: "md",
  m: { base: "1px", sm: "2", md: "3", lg: "5", xl: "6" },
  color: White,
  bgColor: DarkBlue,
  transition: "700ms",
  _hover: { bgColor: White, color: DarkBlue },
  _active: { backgroundColor: DarkBlue, color: White },
};
