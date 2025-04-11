/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */
export const middleCharacter = (text = '') => {
    const arr = text.split('');
    if (arr.length === 0) return '';
    const middleIndex = Math.floor(arr.length / 2);
    return arr.length % 2 === 0
        ? arr[middleIndex-1] + arr[middleIndex]
        : arr[middleIndex];
};
