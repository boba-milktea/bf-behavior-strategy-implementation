// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * find the smallest number of the array
 * @param {array[numbers]} [numbers = [] ] an array of numbers
 * @returns {number} the smallest number of the array
 */
export const findSmallestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
    return numbers.sort((a, b) => a - b)[0];
};
