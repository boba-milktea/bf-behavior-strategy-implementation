/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * @example
 *
 * diffArrays([2], [1, 3]); // [2, 1, 3]
 *
 * @example
 *
 * diffArrays([2, NaN], [3, 1]); // [2, NaN, 3, 1]
 *
 * @example
 *
 * diffArrays([2, 1], [1, 2]); // []
 * @example
 *
 * diffArrays([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
 */
// export const diffArrays = (a = [], b = []) => {
//     const difference = [];
//     for (const num of a) {
//         !b.includes(num) && difference.push(num);
//     }
//     for (const num of b) {
//         !a.includes(num) && difference.push(num);
//     }
//     return difference;
// };

// export const diffArrays = (a = [], b = []) => {
//   const filteredA = a.filter(num => !b.includes(num)); 
//   const filteredB = b.filter(num => !a.includes(num));
//   return [...filteredA, ...filteredB ]
//   };

export const diffArrays = (a = [], b = []) => {
  const setA = new Set(a); 
  const setB = new Set(b); 

  return [...a.filter(num => !setB.has(num)), ...b.filter(num => !setA.has(num))] 


}; 
