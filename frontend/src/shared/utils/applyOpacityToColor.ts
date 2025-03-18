import { hexToRgba } from "./hexToRgba";

/**
 * Adjusts the opacity of a given color.
 *
 * @param {string} color - The color in either hexadecimal (e.g., "#RRGGBB" or "#RGB") or RGBA format.
 * @param {number} opacity - The desired opacity level (0 to 1).
 * @returns {string} The RGBA color string with the specified opacity.
 *                   If the input color is invalid, it returns the original color.
 */
export const applyOpacity = (color: string, opacity: number): string => {
  let rgba = color.startsWith("#") ? hexToRgba(color) : color;

  if (!rgba || !rgba.startsWith("rgba")) return color;

  const [r, g, b] = rgba.match(/\d+/g)!.map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
