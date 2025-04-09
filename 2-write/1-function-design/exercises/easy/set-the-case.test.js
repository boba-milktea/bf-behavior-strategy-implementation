// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- strategy --------
/* Buit in javaScript method
1. empty string -> empty string
2. if lowerCase is true -> text to lower case
3. else -> text to upper case 
*/

const changeCase = (text = '', lowerCase = true) =>
    lowerCase ? text.toLowerCase() : text.toUpperCase();

// -------- strategy --------
/* iteration + javaScript method
1. if lowerCase is true -> iterate through characters and covert each character into lower case   
2. if lowerCase is false ->  iterate through characters and convert them into upper case
3. return the string 
*/

function changeCase2(text = '', lowerCase = true) {
    return Array.from(text)
        .map((char) => (lowerCase ? char.toLowerCase() : char.toUpperCase()))
        .join('');
}

// -------- your solutions --------

for (const solution of [changeCase, changeCase2]) {
    describe(solution.name + ': sets a text to lower or upper case', () => {
        describe("the function's default parameters", () => {
            it('second parameter defaults to true', () => {
                expect(solution('asdf')).toEqual('asdf');
            });
            it('first parameter defaults to an empty string', () => {
                expect(solution()).toEqual('');
            });
        });
        // write the tests indicated by the comments
        describe('when set to lower case', () => {
            // when the text is an empty string
            it('returns an empty string if the string is empty', () => {
                expect(solution('', false)).toEqual('');
            });
            // when the text is all upper case
            it('upper case text -> text in uppercase', () => {
                expect(solution('COOL', false)).toEqual('COOL');
            });
            // when the text is all lower case
            it('lower case text -> text in uppercase', () => {
                expect(solution('cool', false)).toEqual('COOL');
            });
            // when the text is mixed upper and lower case
            it('mixed case text -> text in uppercase', () => {
                expect(solution('CooL', false)).toEqual('COOL');
            });
            // when the text contains punctuation
            it('text with punctuation -> text in uppercase with punctuation', () => {
                expect(solution('CooL!', false)).toEqual('COOL!');
            });
            // when the text contains numbers
            it('text contains number -> text in uppercase with numbers', () => {
                expect(solution('cool123', false)).toEqual('COOL123');
            });
        });
        describe('when set to upper case', () => {
            // when the text is an empty string
            it('returns an empty string if the string is empty', () => {
                expect(solution('', true)).toEqual('');
            });
            // when the text is all upper case
            it('upper case text -> text in lowercase', () => {
                expect(solution('COOL', true)).toEqual('cool');
            });
            // when the text is all lower case
            it('lower case text -> text in lowercase', () => {
                expect(solution('cool', true)).toEqual('cool');
            });
            // when the text is mixed upper and lower case
            it('mixed case text -> text in lowercase', () => {
                expect(solution('CooL', true)).toEqual('cool');
            });
            // when the text contains punctuation
            it('text with punctuation -> text in lowercase with punctuation', () => {
                expect(solution('CooL!', true)).toEqual('cool!');
            });
            // when the text contains numbers
            it('text contains number -> text in lowercase with numbers', () => {
                expect(solution('COOL123', true)).toEqual('cool123');
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
