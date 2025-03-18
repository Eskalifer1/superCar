// /**
//  * Determines whether a space should be added between partialMessage and chunk.
//  * @param {string} partialMessage - The current accumulated text.
//  * @param {string} chunk - The new chunk of data.
//  * @returns {boolean} Whether a space should be added.
//  */
// const shouldAddSpace = (partialMessage: string, chunk: string): boolean => {
//   const trimmedPartial = partialMessage.trim();

//   // Check if partialMessage ends with a colon
//   const endsWithColon = /:$/.test(trimmedPartial);

//   // Check if partialMessage ends with a punctuation mark
//   const endsWithPunctuation = /[.,!?:;°%)"]$/.test(trimmedPartial);

//   // Check if chunk starts with a punctuation mark
//   const startsWithPunctuation = /^[.,!?:;()'"-]/.test(chunk);

//   // Check if chunk is part of an ordinal number (e.g., "st", "nd", "rd", "th")
//   const isOrdinalNumber =
//     /\d$/.test(trimmedPartial) && /^(st|nd|rd|th)\b/.test(chunk);

//   // Check if chunk starts with a space
//   const chunkStartsWithSpace = chunk.startsWith(" ");

//   // If partialMessage ends with a colon, don't add a space
//   if (endsWithColon) {
//     return false;
//   }

//   // If partialMessage ends with punctuation and chunk starts with a letter or digit, add a space
//   if (endsWithPunctuation && /^[A-Za-z0-9]/.test(chunk)) {
//     return true;
//   }

//   // If partialMessage doesn't end with punctuation, chunk doesn't start with a space or punctuation,
//   // and it's not part of an ordinal number, add a space
//   if (
//     !endsWithPunctuation &&
//     !startsWithPunctuation &&
//     !chunkStartsWithSpace &&
//     !isOrdinalNumber &&
//     trimmedPartial
//   ) {
//     return true;
//   }

//   return false;
// };

/**
 * Determines whether a space should be added between partialMessage and chunk.
 * @param {string} partialMessage - The current accumulated text.
 * @param {string} chunk - The new chunk of data.
 * @returns {boolean} Whether a space should be added.
 */
const shouldAddSpace = (partialMessage: string, chunk: string): boolean => {
  const trimmedPartial = partialMessage.trim();

  // Check if partialMessage ends with a colon
  const endsWithColon = /:$/.test(trimmedPartial);

  // Check if partialMessage ends with a punctuation mark
  const endsWithPunctuation = /[.,!?:;°%)"]$/.test(trimmedPartial);

  // Check if chunk starts with a punctuation mark
  const startsWithPunctuation = /^[.,!?:;()'"-]/.test(chunk);

  // Check if chunk is part of an ordinal number (e.g., "st", "nd", "rd", "th")
  const isOrdinalNumber =
    /\d$/.test(trimmedPartial) && /^(st|nd|rd|th)\b/.test(chunk);

  // Check if chunk starts with a space
  const chunkStartsWithSpace = chunk.startsWith(" ");

  // Check if chunk starts with an apostrophe (i.e., part of a contraction like "check' em")
  const chunkStartsWithApostrophe = chunk.startsWith("'");

  // If partialMessage ends with a colon, don't add a space
  if (endsWithColon) {
    return false;
  }

  // If partialMessage ends with punctuation and chunk starts with a letter or digit, add a space
  if (endsWithPunctuation && /^[A-Za-z0-9]/.test(chunk)) {
    return true;
  }

  // If chunk starts with an apostrophe, do not add a space
  if (chunkStartsWithApostrophe) {
    return false;
  }

  // If partialMessage doesn't end with punctuation, chunk doesn't start with a space or punctuation,
  // and it's not part of an ordinal number, add a space
  if (
    !endsWithPunctuation &&
    !startsWithPunctuation &&
    !chunkStartsWithSpace &&
    !isOrdinalNumber &&
    trimmedPartial
  ) {
    return true;
  }

  return false;
};

export default shouldAddSpace;
