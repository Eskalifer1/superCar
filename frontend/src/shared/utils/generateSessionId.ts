/**
 * Generates a random string of specified length.
 * @param {number} length - Length of the string to generate.
 * @returns {string} A random alphanumeric string.
 */
const generateSessionId = (length: number = 25): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default generateSessionId;
