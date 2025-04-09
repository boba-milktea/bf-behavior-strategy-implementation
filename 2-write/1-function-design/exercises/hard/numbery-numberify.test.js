// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- strategy --------
/* JavaScript Built in method
1. arrow function with explicit return
2. filter the NaN strings and convert them to numbers
*/

const numberify = (arrayOfStrings) =>
    arrayOfStrings.filter((string) => Number(!isNaN(string)));

// -------- your solutions --------

for (const solution of [numberify]) {
    describe(solution.name + ': returns a new array of numbers', () => {
        describe('when it contains NaN', () => {
            it('["a", "b", "1", "2"] -> [1, 2]', () => {
                expect(solution(['a', 'b', '1', '2'])).toEqual([1, 2]);
            });
            it('array that contains a puncuation', () => {
                expect(solution(['2', '1', '0', '.'])).toEqual([2, 1, 0]);
            });
            it('array that contains a nagative number string', () => {
                expect(solution(['-2', '-1', '-0'])).toEqual([-2, -1, -0]);
            });
            it('array with just one number string', () => {
                expect(solution(['-0'])).toEqual([-0]);
            });
            it('array with  repeated number string', () => {
                expect(
                    solution(['-9', '8', '5', '-6', '9', '10', '5']),
                ).toEqual([-9, 8, 5, -6, 9, 10, 5]);
            });
            it('array with a big number string', () => {
                expect(solution(['-999999999999999999'])).toEqual([
                    -999999999999999999,
                ]);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
