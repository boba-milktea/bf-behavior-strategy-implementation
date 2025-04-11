// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * find the greated number of the array
 * @param {array[numbers]} [numbers = [] ] an array of numbers
 * @returns {number} the biggest number of the array
 */
export const findGreatestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
    return numbers.sort((a, b) => b - a)[0];
};
