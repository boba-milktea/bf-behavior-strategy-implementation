/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */
// export const matchingBraces = (text = '') => {
//     const open = ['(', '[', '{'];
//     const close = [')', ']', '}'];
//     const stack = [];

//     for (const str of text) {
//         if (open.includes(str)) {
//             stack.push(str);
//         }
//         if (close.includes(str)) {
//             if (stack.length === 0) return false;
//             const lastOpen = stack.pop();
//             if (open.indexOf(lastOpen) !== close.indexOf(str)) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };

export const matchingBraces = (text = '') => {
    const braces = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const stack = [];
    for (const str of text) {
        if (str in braces) {
            stack.push(str);
        } else if (Object.values(braces).includes(str)) {
            if (stack.length === 0) return false;
            if (braces[stack.pop()] !== str) return false;
        }
    }
    return stack.length === 0;
};
