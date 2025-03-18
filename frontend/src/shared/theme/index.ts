import getContrastTextColor from "../utils/getContrastTextColor";

export const themeTextColor = {
  light: "#f0efef",
  dark: "#100f0f",
};

const theme = {
  colors: {
    primary: "#cfc3c2",
    primaryContrast: getContrastTextColor("#cfc3c2"),

    secondary: "#d9d9d9",
    secondaryContrast: getContrastTextColor("#d9d9d9"),

    background: "#f3f4f6",
    backgroundContrast: getContrastTextColor("#f3f4f6"),

    accent: "#7e2624",
    accentContrast: getContrastTextColor("#7e2624"),

    error: "#e73f34",
    errorContrast: getContrastTextColor("#e73f34"),

    textLight: themeTextColor.light,
    textDark: themeTextColor.dark,
  },
  borders: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  fontSizes: {
    sm: "clamp(0.75rem, 0.7065rem + 0.2174vw, 0.875rem)",
    md: "clamp(0.875rem, 0.8315rem + 0.2174vw, 1rem);",
    lg: "clamp(1rem, 0.913rem + 0.4348vw, 1.25rem);",
    h1: "clamp(1.625rem, 1.4511rem + 0.8696vw, 2.125rem);",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

export default theme;
