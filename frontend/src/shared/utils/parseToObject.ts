import parseString from "./parseString";

/**
 * Parses a string containing an object-like structure and converts it into a JavaScript object.
 * Supports cleaning up and handling unconventional formatting.
 *
 * @param {string} input - The input string to be parsed.
 * @returns {object} - The parsed object.
 */
function parseToObject(input: string): object {
  const cleanedData = parseString(input);
  try {
    return JSON.parse(cleanedData);
  } catch (error) {
    console.error("Failed to parse string to object:", error);
    return {};
  }
}

export default parseToObject;
