// #todo

/**
 * return an array with only numbers
 *
 * @param {array} [array = []] an array of items
 * @returns {array} a filtered array with only numbers
 */

const isArrayOfNumbers = (array = []) =>  array.every(item => typeof(item) === "number" && !Number.isNaN(item)); 

export default isArrayOfNumbers;
