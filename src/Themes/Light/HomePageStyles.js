import { Blue, DarkBlue, White } from "../ColorPallet";

  export const LhomeParentFlex = {
    mt: { base: "30px", md: "80px" },
    transition: "500ms",
    direction: "column",
    alignItems: "center",
    w: "100%",
    pt:"50px",
    justifyContent: "center",
  };

  export const LhomeButtonsTop = {
    borderRadius: "3",
    size: "sm",
    m:{base:"1px",sm:"2",md:"3",lg:"5",xl:"6"},
    color: White,
    bgColor: DarkBlue,
    transition: "700ms",
    _hover: { bgColor: White, color: Blue },
    _active: { backgroundColor: Blue, color: White },
    fontSize:"20px",
  };
  
  export const Lheading1 = {
    // size: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
    transition: "500ms",
    fontSize:{ base: "34px", sm: "40px", md: "64px", lg: "86",xl:"108px" },
    color: DarkBlue,
  };

  export const Lheading2 = {
    // size: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
    transition: "500ms",
    fontSize:{ base: "34px", sm: "40px", md: "64px", lg: "86",xl:"108px" },
    color: Blue,
  };

  export const LaboutText = {
    as: "b",
    p: "8",
    transition: "500ms",
    color: DarkBlue,
    textAlign:"justify",
  };