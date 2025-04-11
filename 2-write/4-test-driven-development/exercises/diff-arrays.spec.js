import { diffArrays } from './diff-arrays.js';

describe('diffArrays', () => {
  test('returns items that are not in both arrays', () => {
    expect(diffArrays([2], [1, 3])).toEqual([2, 1, 3]);
  });

  test('returns empty array when both arrays are equal', () => {
    expect(diffArrays([1, 2], [1, 2])).toEqual([]);
  });

  test('returns all items when arrays have no items in common', () => {
    expect(diffArrays([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns empty array when both inputs are empty', () => {
    expect(diffArrays([], [])).toEqual([]);
  });

  test('handles one empty array correctly', () => {
    expect(diffArrays([], [1, 2])).toEqual([1, 2]);
    expect(diffArrays([1, 2], [])).toEqual([1, 2]);
  });

  test('does not mutate the input arrays', () => {
    const a = [1, 2];
    const b = [2, 3];
    const aCopy = [...a];
    const bCopy = [...b];
    diffArrays(a, b);
    expect(a).toEqual(aCopy);
    expect(b).toEqual(bCopy);
  });

  test('works with duplicate elements', () => {
    expect(diffArrays([1, 1, 2], [2, 2, 3])).toEqual([1, 1, 3]);
  });

  test('works with negative numbers', () => {
    expect(diffArrays([-1, -2], [-2, -3])).toEqual([-1, -3]);
  });
});
