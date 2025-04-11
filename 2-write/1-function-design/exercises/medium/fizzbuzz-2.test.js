// #todo

'use strict';

/**
 *  returns an array with length "max"
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */

// -------- your solutions --------
// describe this solution's strategy
/* iteration 
1. loop until the max
2. use a flag to count up the number, and check if it satisfied the cases
3. save the result in an array 
4. max reaches zero, return the array 
 */

const whileLoop = (max = 0) => {
    let countUp = 0;
    const result = [];
    while (max > 0) {
        const nextEntry =
            countUp % 15 === 0
                ? 'fizzbuzz'
                : countUp % 5 === 0
                ? 'buzz'
                : countUp % 3 === 0
                ? 'fizz'
                : countUp;
        result.push(nextEntry);
        countUp++;
        max--;
    }
    return result;
};

// describe this solution's strategy
/* iteration 
1. loop until the max
2  i starts at "-1" because the first number should be 0, 
3. max minus one, because we start at -1
4. create a result array  
5. for loop with no increment
6. add a prefix increment to the index
7. if the incremented index can be devided by 3, push fizz, otherwise push an empty string
8. if the  index can be devided by 5, push buzz, otherwise push an empty string
9. if both conditions returned an empty string, push the index  
 */

const oneLineforLoop = (max) => {
    const result = [];
    for (let i = -1; i < max - 1; ) {
        result.push((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
    }
    return result;

    // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};

/* describe this solution's strategy
javascript built-in method
1. create an array filed from 0 to max, retrieve the keys 
2. map through the keys (index) and check if the keys(index) fit into the cases
3. return a new array 
 */
const manySmallFunctions = (max) => {
    const threeDivides = (n) => n % 3 === 0;
    const fiveDivides = (n) => n % 5 === 0;
    const fifteenDivides = (n) => n % 15 === 0;

    const fizzbuzzOrNumber = (num) => {
        if (fifteenDivides(num)) {
            return 'fizzbuzz';
        } else if (fiveDivides(num)) {
            return 'buzz';
        } else if (threeDivides(num)) {
            return 'fizz';
        } else {
            return num;
        }
    };

    // https://stackoverflow.com/a/33352604
    const arrayOfIndexes = [...Array(max).keys()];
    const fizzBuzzedArray = arrayOfIndexes.map((index) =>
        fizzbuzzOrNumber(index),
    );
    return fizzBuzzedArray;
};

// -------- your solutions --------

for (const solution of [
    secretSolution,
    whileLoop,
    oneLineforLoop,
    manySmallFunctions,
]) {
    describe(solution.name + ': fizzbuzz', () => {
        describe('numbers divisible by 3', () => {
            it('3 should return an array with the first 3 values', () => {
                expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
            });
            it('3 should return an array with the first value', () => {
                expect(solution(1)).toEqual(['fizzbuzz']);
            });
        });
        describe('numbers divisible by neither 3 nor 5', () => {
            it('4 should return an array with the first 4 values', () => {
                expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
            });
            it('8 should return an array with the first 8 values', () => {
                expect(solution(8)).toEqual([
                    'fizzbuzz',
                    1,
                    2,
                    'fizz',
                    4,
                    'buzz',
                    'fizz',
                    7,
                ]);
            });
            // write more of these
        });
        describe('numbers divisible by 5', () => {
            it('5 should return an array with the first 5 values', () => {
                expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
            });
            // write more of these
        });
        describe('numbers divisible by 3 and 5', () => {
            it('15 should return an array with the first 15 values', () => {
                expect(solution(15)).toEqual([
                    'fizzbuzz',
                    1,
                    2,
                    'fizz',
                    4,
                    'buzz',
                    'fizz',
                    7,
                    8,
                    'fizz',
                    'buzz',
                    11,
                    'fizz',
                    13,
                    14,
                ]);
            });
            // write more of these
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
