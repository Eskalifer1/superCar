/**
 * Calculates the luminance of a color based on its RGB values.
 * Luminance is used to determine the brightness of the color.
 *
 * @param {string} color - The color in hex format (e.g., '#RRGGBB').
 * @returns {number} The luminance value of the color, a number between 0 and 1.
 */
const getLuminance = (color: string): number => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
};

export default getLuminance;
