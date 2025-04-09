// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

/* -- recursion: recursive call until it reaches the base case 0 --

  1. create a base case 0 
  2. create a recursive function call, when the index is creater than 0

  return: an array with all numbers from `start` to 0

*/

const countUp = (max = 0) => (max === 0 ? [0] : countUp(max - 1).concat([max]));

const countUp2 = (max = 0) => {
    if (max === 0) {
        return [0];
    } else {
        return countUp(max - 1).concat([max]);
    }
};

for (const solution of [countUp, countUp2]) {
    // the main test suite for the function
    describe(solution.name + ': counts up from 0', () => {
        it('default parameter is 0 -> [0]', () => {
            const actual = solution();
            expect(actual).toEqual([0]);
        });
        it('0 -> [0]', () => {
            expect(solution(0)).toEqual([0]);
        });
        it('1 -> [0, 1]', () => {
            expect(solution(1)).toEqual([0, 1]);
        });
        it('2 -> [0, 1, 2]', () => {
            expect(solution(2)).toEqual([0, 1, 2]);
        });
        it('3 -> [0, 1, 2, 3]', () => {
            expect(solution(3)).toEqual([0, 1, 2, 3]);
        });
        it('5 -> [0, 1, 2, 3, 4, 5]', () => {
            expect(solution(5)).toEqual([0, 1, 2, 3, 4, 5]);
        });
        // write at least 5 more tests ...
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
