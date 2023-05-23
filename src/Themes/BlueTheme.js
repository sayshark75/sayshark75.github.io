import { extendTheme } from "@chakra-ui/react";

export const BlueTheme = extendTheme({
  semanticTokens: {
    colors: {
      mainBackground: {
        default: "#EBF8FF",
        _dark: "rgba(0, 0, 0, 0.92)",
      },
      textPrimary: {
        default: "#294D80",
        _dark: "#AAAAAA",
      },
      blackColor: {
        default: "#000000",
        _dark: "#000000",
      },
      textNormal: {
        default: "#000000",
        _dark: "#FFFFFF",
      },
      textSecondary: {
        default: "#3182CE",
        _dark: "#FFFFFF",
      },
      hoverText: {
        default: "#FFFFFF",
        _dark: "#294D80",
      },
      hoverBg: {
        default: "#294D80",
        _dark: "#FFFFFF",
      },
      iconBtn: {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      iconBtnBg: {
        default: "#294D80",
        _dark: "#FFFFFF",
      },
      iconBtnHover: {
        default: "#3182CE",
        _dark: "#FFFFFF",
      },
      iconBtnBgHover: {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      buttonBorder: {
        default: "#3182CE",
        _dark: "#3182CE",
      },
      buttonText: {
        default: "#FFFFFF",
        _dark: "#FFFFFF",
      },
      buttonBg: {
        default: "#3182CE",
        _dark: "#3182CE",
      },
      buttonTextHover: {
        default: "#294D80",
        _dark: "#FFFFFF",
      },
      buttonBgHover: {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      barBg: {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      cardBg: {
        default: "#FFFFFF",
        _dark: "#232323",
      },
      cardBorder: {
        default: "#167CFF",
        _dark: "#FFFFFF",
      },
      techBox: {
        default: "#232323",
        _dark: "#000000",
      },
      techBoxBg: {
        default: "#0D59BB",
        _dark: "#082E5F",
      },
      heartColor: {
        default: "#167CFF",
        _dark: "#167CFF",
      },
    },
  },
});
