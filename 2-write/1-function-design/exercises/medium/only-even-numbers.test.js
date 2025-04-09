// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

/* Strategy 
Built in method 
1. arrow function with explicit return 
2. use methods to return a new array
 */

const removeOdd = (arrayOfNumbers) =>
    arrayOfNumbers.filter((num) => num % 2 === 0);

for (const solution of [secretSolution, removeOdd]) {
    describe(`${solution.name}: removes odd numbers`, () => {
        it('returns an empty array when given an empty array', () => {
            const input = [];
            const result = solution(input);
            expect(result).toEqual([]);
        });

        it('returns the same array if all numbers are even', () => {
            const input = [2, 4, 6, 8];
            const result = solution(input);
            expect(result).toEqual([2, 4, 6, 8]);
        });

        it('returns an empty array if all numbers are odd', () => {
            const input = [1, 3, 5, 7];
            const result = solution(input);
            expect(result).toEqual([]);
        });

        it('returns only even numbers from a mixed array', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const result = solution(input);
            expect(result).toEqual([2, 4, 6]);
        });

        it('does not mutate the original array', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const copy = [...input];
            solution(input);
            expect(input).toEqual(copy);
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
