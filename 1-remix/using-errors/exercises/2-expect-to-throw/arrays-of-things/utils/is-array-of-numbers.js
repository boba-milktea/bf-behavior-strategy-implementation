// #todo

/**
 * return an array with only numbers
 *
 * @param {array} [array = []] an array of items
 * @returns {array} a filtered array with only numbers
 */

const isArrayOfNumbers = (array = []) => {
    if (array.some((item) => !item || Number.isNaN(item))) {
        throw new TypeError('array is not an array of numbers');
    }

    return array.filter((item) => Number.isNaN(item));
};

export default isArrayOfNumbers;
