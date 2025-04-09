// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and pass in the correct logic
    const sumOfNumberies = arr
        .map((str) => castToNumber(str))
        .filter((num) => isNotNaN(num))
        .reduce((acc, next) => sumNumbers(acc, next), 0);

    return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [mapFilterReduce]) {
    describe(
        solution.name + ': sums all numbery strings in an array of strings',
        () => {
            describe('basic functionality', () => {
                it('sums numeric strings', () => {
                    expect(solution(['1', '2', '3'])).toEqual(6);
                });

                it('ignores non-number strings', () => {
                    expect(solution(['1', 'two', '3'])).toEqual(4);
                });

                it('ignores NaN values', () => {
                    expect(solution(['1', NaN, '3'])).toEqual(4);
                });

                it('works with negative numbers', () => {
                    expect(solution(['-1', '-2', '3'])).toEqual(0);
                });

                it('returns 0 for an empty array', () => {
                    expect(solution([])).toEqual(0);
                });

                it('returns 0 if all values are non-numbery', () => {
                    expect(solution(['a', 'b', 'c'])).toEqual(0);
                });

                it('handles mixed types and whitespace', () => {
                    expect(solution([' 1 ', '2', 'foo', '3.5', ''])).toEqual(
                        6.5,
                    );
                });
            });
        },
    );
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
