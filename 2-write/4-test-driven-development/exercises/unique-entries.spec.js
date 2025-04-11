import { uniqueEntries } from './unique-entries.js';

describe('uniqueEntries', () => {
  test('returns unique numbers in ascending order by default', () => {
    expect(uniqueEntries([3, 1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('returns unique numbers in ascending order when flag is true', () => {
    expect(uniqueEntries([3, 1, 3, 2], true)).toEqual([1, 2, 3]);
  });

  test('returns unique numbers in descending order when flag is false', () => {
    expect(uniqueEntries([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
  });

  test('returns empty array when input is empty', () => {
    expect(uniqueEntries([])).toEqual([]);
  });

  test('returns one item when all elements are the same', () => {
    expect(uniqueEntries([2, 2, 2, 2])).toEqual([2]);
  });

  test('works with negative numbers and sorts them correctly', () => {
    expect(uniqueEntries([-3, -1, -2, -1], true)).toEqual([-3, -2, -1]);
    expect(uniqueEntries([-3, -1, -2, -1], false)).toEqual([-1, -2, -3]);
  });

  test('handles mixed positive and negative numbers', () => {
    expect(uniqueEntries([5, -1, 3, 5, -1, 0], true)).toEqual([-1, 0, 3, 5]);
    expect(uniqueEntries([5, -1, 3, 5, -1, 0], false)).toEqual([5, 3, 0, -1]);
  });

  test('treats no second argument the same as `true`', () => {
    expect(uniqueEntries([7, 3, 5, 3, 7])).toEqual([3, 5, 7]);
  });

  test('does not mutate the original array', () => {
    const input = [3, 2, 2, 1];
    const copy = [...input];
    uniqueEntries(input);
    expect(input).toEqual(copy);
  });
});
