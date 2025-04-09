// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

/* Strategy 
Built in method 
1. arrow function with explicit return 
2. use methods to return a new array
 */

const reverseAndConcate = (arrayOfStrings) =>
    [...arrayOfStrings].reverse().join('');

for (const solution of [secretSolution, reverseAndConcate]) {
    describe(`${solution.name}: joins reversed strings`, () => {
        it('returns an empty string when given an empty array', () => {
            const input = [];
            const result = solution(input);
            expect(result).toBe('');
        });

        it('returns the single string when array has one element', () => {
            const input = ['hello'];
            const result = solution(input);
            expect(result).toBe('hello');
        });

        it('joins two elements in reverse order', () => {
            const input = ['hello', 'world'];
            const result = solution(input);
            expect(result).toBe('worldhello');
        });

        it('joins multiple elements in reverse order', () => {
            const input = ['a', 'b', 'c', 'd'];
            const result = solution(input);
            expect(result).toBe('dcba');
        });

        it('handles strings with spaces and special characters', () => {
            const input = ['one ', 'two!', '@three'];
            const result = solution(input);
            expect(result).toBe('@threetwo!one ');
        });

        it('does not mutate the original array', () => {
            const input = ['x', 'y', 'z'];
            const copy = [...input];
            solution(input);
            expect(input).toEqual(copy);
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
