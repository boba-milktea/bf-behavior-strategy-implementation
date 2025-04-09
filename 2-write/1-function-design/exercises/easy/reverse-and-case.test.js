// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
// -------- strategy --------
/* Buit in javaScript method
1. reverse the string -> split, reverse and join
2. lowerCase is true -> toLowerCase 
3. else toUpperCase
4. empty string -> empty string
*/

// -------- your solutions --------

const reverseToLowerCase = (text = '', lowerCase = true) => {
    let reversedText = text.split('').reverse().join('');
    return lowerCase ? reversedText.toLowerCase() : reversedText.toUpperCase();
};

for (const solution of [reverseCase]) {
    describe(
        solution.name + ': reverses a string then sets to lower or upper case',
        () => {
            describe("the function's default parameters", () => {
                it('second parameter defaults to true', () => {
                    expect(solution('asdf')).toEqual('fdsa');
                });
                it('first parameter defaults to an empty string', () => {
                    expect(solution()).toEqual('');
                });
            });
            // write the tests indicated by the comments
            describe('when set to lower case', () => {
                // when the text is an empty string
                it('returns an empty string if the string is empty', () => {
                    expect(solution('', true)).toEqual('');
                });
                // when the text is all upper case
                it('upper case text -> reversed string in lowercases', () => {
                    expect(solution('COOL', true)).toEqual('looc');
                });
                // when the text is all lower case
                it('lower case text -> reversed string in lowercases', () => {
                    expect(solution('day', true)).toEqual('yad');
                });
                // when the text is mixed upper and lower case
                it('mixed upper and lower case text -> reversed string in lowercases', () => {
                    expect(solution('GooD', true)).toEqual('doog');
                });
                // when the text contains punctuation
                it('contains punctuation -> reversed string in lowercases with punctuation', () => {
                    expect(solution('Eat!', true)).toEqual('!tae');
                });
                // when the text contains numbers
                it('contains numbers -> reversed string in lowercases with numbers', () => {
                    expect(solution('spy007', true)).toEqual('700yps');
                });
            });
            describe('when set to upper case', () => {
                // when the text is an empty string
                it('returns an empty string if the string is empty', () => {
                    expect(solution('', false)).toEqual('');
                });
                // when the text is all upper case
                it('upper case text -> reversed string in uppercase', () => {
                    expect(solution('COOL', false)).toEqual('LOOC');
                });
                // when the text is all lower case
                it('lower case text -> reversed string in uppercase', () => {
                    expect(solution('day', false)).toEqual('YAD');
                });
                // when the text is mixed upper and lower case
                it('mixed upper and lower case text -> reversed string in uppercase', () => {
                    expect(solution('GooD', false)).toEqual('DOOG');
                });
                // when the text contains punctuation
                it('contains punctuation -> reversed string in uppercase with punctuation', () => {
                    expect(solution('tea!', false)).toEqual('!AET');
                });
                // when the text contains numbers
                it('contains numbers -> reversed string in uppercase with numbers', () => {
                    expect(solution('spy007', false)).toEqual('700YPS');
                });
            });
        },
    );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
