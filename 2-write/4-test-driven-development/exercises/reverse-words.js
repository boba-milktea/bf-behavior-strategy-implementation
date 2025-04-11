/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
// export const reverseWords = (text = '') => {
//    const arr = text.split(" "); 
//    let newStr = []
//    for (const word of arr) {
//      newStr.push([...word].reverse().join(""))
//      }
//     return newStr.join(" "); 
// } ; 


export const reverseWords = (text = "") => text.split(" ").map(word => [...word].reverse().join("")).join(" "); 