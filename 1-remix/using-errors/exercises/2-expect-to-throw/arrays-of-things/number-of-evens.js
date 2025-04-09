// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
const numberOfEvens = (numbers = []) => {
     if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
    const filteredArray = numbers.filter(num => num % 2 ===0)
    return filteredArray.length; 
};

export default numberOfEvens; 