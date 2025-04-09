// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

/* -- recursion: recursive call until it reaches the base case 0 --

  1. create a base case 0 
  2. create a recursive function call, when the index is creater than 0

  return: an array with all numbers from `start` to 0

*/

const countDown = (start = 0) => start === 0 ? [0] : [start].concat(countDown(start-1));


const countDown2 = (start = 0) => {
  if (start === 0) {
    return [0]
  } else {
    return [start].concat(countDouwn2(start-1))
  }
}


// -------- your solutions --------

for (const solution of [countDown, countDown2]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(countDown()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(countDown(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(countDown(1)).toEqual([1, 0]);
    });
    it('2 -> [2, 1, 0]', () => {
      expect(countDown(2)).toEqual([2, 1, 0]);
    });
    it('3 -> [3, 2, 1, 0]', () => {
      expect(countDown(3)).toEqual([3, 2, 1, 0]);
    });

    it('5 -> [5, 4, 3, 2, 1, 0]', () => {
      expect(countDown(5)).toEqual([5, 4, 3, 2, 1, 0]);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
