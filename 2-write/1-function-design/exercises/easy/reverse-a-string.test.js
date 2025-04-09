// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
// -------- strategy --------
/* Buit in javaScript method
1. string -> split
2. reverse -> reverse
3. join back -> join
4. empty string -> empty string

*/
// -------- your solutions --------

const reverse1 = (toReverse = '') => toReverse.split('').reverse().join('');
function reverse2(toReverse = '') {
    return toReverse.split('').reverse().join('');
}

for (const solution of [reverse1]) {
    // the main test suite for the function
    describe(solution.name + ': reverses a string', () => {
        it('default parameter is an empty string -> ""', () => {
            expect(solution()).toEqual('');
        });
        it('an empty string -> ""', () => {
            expect(solution('')).toEqual('');
        });
        it('a string with all capital letters', () => {
            expect(solution('ASDF')).toEqual('FDSA');
        });
        it('a string with all lowercase letters', () => {
            expect(solution('tee')).toEqual('eet');
        });
        it('a string with upper and lower case letters', () => {
            expect(solution('Drink')).toEqual('knirD');
        });
        it('a string with special characters', () => {
            expect(solution('**water!')).toEqual('!retaw**');
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
