// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * The sum of the array
 * @param {array[numbers]} [numbers = [] ] an array of numbers
 * @returns {number} the sum
 */
export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
    return numbers.reduce((acc, current) => acc + current, 0);
};
