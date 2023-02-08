import { White, WhiteTrans2 } from "../ColorPallet";

export const TechSkillsHeading1 = {
  transition: "500ms",
  color: WhiteTrans2,
  mt: "50px",
};
export const TechSkillsHeading2 = {
  transition: "500ms",
  color: White,
  mt: "50px",
};

export const TechSkillsFlexTopMain = {
  transition: "500ms",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const TechSkillsInGridFlex = {
  transition: "500ms",
  borderRadius: "10",
  padding: "4",
  backgroundColor: "#232323",
  _hover: { boxShadow: "dark-lg" },
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1",
};
export const TechSkillsGrid = {
  transition: "500ms",
  columns: { base: 3, sm: 3, md: 5 },
  spacing: { base: 2, sm: 4, md: 6 },
  my: "5",
};

export const TechSkillsText = {
  transition: "500ms",
  as: "b",
  color: White,
  fontSize: { base: "12px", sm: "sm", md: "md" },
};

export const TechSkillsIconsStyle = {
  transition: "500ms",
  fontSize: "30px",
};
