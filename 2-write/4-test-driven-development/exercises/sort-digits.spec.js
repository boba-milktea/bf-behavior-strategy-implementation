import { sortDigits } from './sort-digits.js';

describe('sortDigits', () => {
    test('sorts digits in ascending order by default', () => {
        expect(sortDigits(2321)).toBe(1223);
    });

    test('sorts digits in ascending order when flag is true', () => {
        expect(sortDigits(2321, true)).toBe(1223);
        expect(sortDigits(654321, true)).toBe(123456);
    });

    test('sorts digits in descending order when flag is false', () => {
        expect(sortDigits(2321, false)).toBe(3221);
        expect(sortDigits(12345, false)).toBe(54321);
    });

    test('handles single-digit numbers correctly', () => {
        expect(sortDigits(5)).toBe(5);
        expect(sortDigits(9, false)).toBe(9);
    });

    test('returns 0 for input 0', () => {
        expect(sortDigits(0)).toBe(0);
    });

    test('handles repeated digits', () => {
        expect(sortDigits(1111)).toBe(1111);
        expect(sortDigits(44444, false)).toBe(44444);
    });

    test('treats undefined as 0', () => {
        expect(sortDigits()).toBe(0);
    });

    test('ignores negative signs and sorts digits of the absolute value', () => {
        expect(sortDigits(-321)).toBe(123);
        expect(sortDigits(-321, false)).toBe(321);
    });
});
