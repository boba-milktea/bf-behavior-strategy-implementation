// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const findGreatestNumber = (numbers = []) =>  {
   if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('the array contains not a number');
    }
  return numbers.sort((a, b ) => b-a)[0]
} 
 
