/**
 * Cleans up the input string by removing unwanted characters.
 * Handles cases like extra quotes, backticks, and escaped quotes.
 *
 * @param {string} input - The raw input string.
 * @returns {string} - The cleaned string.
 */
function parseString(input: string): string {
  return input
    .replace(/^"```|```"$/g, "")
    .replace(/'/g, '"')
    .replace(/\\"/g, '"');
}

export default parseString;
