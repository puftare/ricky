/**
 * Generate a range of page numbers for pagination.
 *
 * This function calculates the range of page numbers to display
 * in a pagination control, ensuring the current page is centered
 * (when possible) and the total number of buttons matches the
 * specified count.
 *
 * @param {number} totalPages - The total number of pages available.
 * @param {number} currentPage - The current active page (1-based index).
 * @param {number} [numButtons=5] - The total number of page buttons to display.
 *                                  Must be an odd number.
 * @throws {Error} Throws an error if `numButtons` is an even number.
 * @returns {number[]} An array of page numbers to display.
 *
 * @example
 * // Example 1: Basic usage with fewer pages than numButtons
 * getPages(3, 1, 5);
 * // Output: [1, 2, 3]
 *
 * @example
 * // Example 2: Centered pagination when current page is in the middle
 * getPages(10, 5, 5);
 * // Output: [3, 4, 5, 6, 7]
 */
export const getPages = (totalPages, currentPage, numButtons = 5) => {
  if (numButtons % 2 === 0) {
    throw new Error("numButtons should be an odd number.");
  }

  const pages = [];

  if (totalPages <= numButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const half = Math.floor(numButtons / 2);

    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 1) {
      start = 1;
      end = numButtons;
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - numButtons + 1;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
};

/**
 * Get the color associated with a character's status.
 *
 * This function maps the status of a character to a corresponding
 * color for styling purposes. If the status is unknown or does not
 * match predefined values, a default color is returned.
 *
 * @param {string} status - The status of the character.
 *                          Expected values: "Dead", "Alive", or "unknown".
 * @returns {string} The corresponding color as a string.
 *                   "red" for "Dead", "green" for "Alive",
 *                   and "purple" for "unknown" or any other value.
 *
 * @example
 * // Example 1: Status is "Dead"
 * getStatusColor("Dead");
 * // Output: "red"
 */
export const getStatusColor = (status) => {
  switch (status) {
    case "Dead":
      return "red";
    case "Alive":
      return "green";
    default:
      return "purple";
  }
};

/**
 * Truncate a string to a specified length and append an ellipsis.
 *
 * This function shortens a given string to the specified length and
 * appends an ellipsis ("...") to indicate truncation. If the input
 * string is shorter than or equal to the specified length, it is
 * returned unchanged.
 *
 * @param {string} text - The input string to be truncated.
 * @param {number} textEndIndex - The length at which the string should be truncated.
 *                                Must be a positive integer.
 * @returns {string} The truncated string with an ellipsis appended.
 *
 * @example
 * // Example 1: Truncate a long string
 * makeTextShorter("Hello, world!", 5);
 * // Output: "Hello..."
 *
 * @example
 * // Example 2: String is shorter than the truncation limit
 * makeTextShorter("Hi", 5);
 * // Output: "Hi"
 *
 * @throws {Error} Throws an error if `textEndIndex` is not a positive number.
 */
export const makeTextShorter = (text, textEndIndex) => {
  if (textEndIndex < 0 || !Number.isInteger(textEndIndex)) {
    throw new Error("textEndIndex must be a positive integer.");
  }
  return text.length > textEndIndex
    ? text.substring(0, textEndIndex) + "..."
    : text;
};

export const getPageFromQueryParam = () => {
  const queryPage = window.location.href.split("=")[1].split("&")[0];

  return Number(queryPage) || 1;
};

export const getSearchFromQueryParam = () => {
  const searchQuery = window.location.href.split("=")[2];

  return String(searchQuery) || "";
};
