// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * The quantity of odd numbers in the array
 * @param {array[numbers]} [numbers = [] ] an array of numbers
 * @returns {number} the quantity number of odd numbers
 */
const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
    const filteredArray = numbers.filter((num) => num % 2 === 0);
    return filteredArray.length;
};

export default numberOfEvens;
