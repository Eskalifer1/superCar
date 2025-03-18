/**
 * Converts a hexadecimal color code to an RGBA color string.
 *
 * @param {string} hex - The hexadecimal color code (e.g., "#RRGGBB" or "#RGB").
 * @returns {string | null} The corresponding RGBA color string (e.g., "rgba(255, 255, 255, 1)"),
 *                          or null if the input is invalid.
 */
export const hexToRgba = (hex: string): string | null => {
  let r: number, g: number, b: number;

  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    return null;
  }

  return `rgba(${r}, ${g}, ${b}, 1)`;
};
