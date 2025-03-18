import parseString from "./parseString";

/**
 * Parses a string containing values enclosed in brackets and separated by a delimiter.
 * Supports custom brackets and delimiters, making it reusable for different data formats.
 *
 * @param {string} input - The input string to be parsed.
 * @param {string} [delimiter=","] - The delimiter used to split the content (default is comma).
 * @param {string[]} [brackets=["[", "]"]] - Custom brackets to remove (default is square brackets).
 * @returns {string[]} An array of trimmed values.
 */
function parseArrayString(
  input: string,
  delimiter: string = ",",
  brackets: [string, string] = ["[", "]"]
): string[] {
  const [startBracket, endBracket] = brackets;

  const parsedString = parseString(input);

  return parsedString
    .replace(new RegExp(`\\${startBracket}|\\${endBracket}`, "g"), "")
    .split(delimiter)
    .map((item: string) => item.trim().replace(/^['"]|['"]$/g, ""));
}

export default parseArrayString;
