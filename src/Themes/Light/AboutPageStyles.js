import { DarkBlue, Blue, White } from "../ColorPallet";

export const LaboutButtonsTop = {
  borderRadius: "3",
  size: "xs",
  ml: "8",
  mr: "2",
  color: White,
  bgColor: DarkBlue,
  transition: "500ms",
  _hover: { bgColor: White, color: DarkBlue },
  _active: { backgroundColor: "#35FC00", color: White },
};

export const LAboutHeadFlex = {
  transition: "500ms",
  direction: "column",
  w: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export const LAboutHeadings = {
  transition: "500ms",
  color: DarkBlue,
  my: "4",
};

export const LAboutHeadings2 = {
  transition: "500ms",
  color: Blue,
  my: "4",
};

export const LAboutProfilePicture = {
  transition: "500ms",
  border: "8px solid #313c4e",
  w: { base: "250px", sm: "300px", md: "500px" },
};

export const LAboutSummaryText = {
  transition: "500ms",
  fontSize: "md",
  color: DarkBlue,
  textAlign:"justify",
  as: "b",
  mx: "8",
};

export const LAboutContactCopy = {
  transition: "500ms",
  as: "b",
  fontSize: "sm",
  color: DarkBlue,
  mx: "8",
};

export const LAboutSummaryInterest = {
  transition: "500ms",
  fontSize: "md",
  color: DarkBlue,
  py: "4",
  as: "b",
  mx: "8",
};

export const LAboutIconText = {
  transition: "500ms",
  fontSize: "md",
  color: DarkBlue,
  as: "b",
};
