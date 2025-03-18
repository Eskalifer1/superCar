import { themeTextColor } from "../theme";
import getLuminance from "./getLuminance";

/**
 * Determines a contrasting text color (black or white) based on the luminance of the given background color.
 * If the background color is light (luminance > 0.5), the function returns black text for better contrast.
 * If the background color is dark (luminance <= 0.5), the function returns white text.
 *
 * @param {string} color - The background color in hex format (e.g., '#RRGGBB').
 * @returns {string} The contrasting text color ('#000000' for black or '#FFFFFF' for white).
 */
const getContrastTextColor = (color: string): string => {
  const luminance = getLuminance(color);
  return luminance > 0.5 ? themeTextColor.dark : themeTextColor.light;
};

export default getContrastTextColor;
