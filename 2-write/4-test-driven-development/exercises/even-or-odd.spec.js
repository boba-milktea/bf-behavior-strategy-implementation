import { evenOrOdd } from './even-or-odd.js';

describe('evenOrOdd', () => {
    test('returns correct result for mixed even and odd numbers', () => {
        expect(evenOrOdd([1, 2, 3, 4])).toEqual(['odd', 'even', 'odd', 'even']);
    });

    test('returns all "even" for an array of even numbers', () => {
        expect(evenOrOdd([2, 4, 6, 8])).toEqual([
            'even',
            'even',
            'even',
            'even',
        ]);
    });

    test('returns all "odd" for an array of odd numbers', () => {
        expect(evenOrOdd([1, 3, 5, 7])).toEqual(['odd', 'odd', 'odd', 'odd']);
    });

    test('returns an empty array for an empty input array', () => {
        expect(evenOrOdd([])).toEqual([]);
    });

    test('defaults to empty array when input is undefined', () => {
        expect(evenOrOdd()).toEqual([]);
    });

    test('handles negative numbers correctly', () => {
        expect(evenOrOdd([-1, -2, -3, -4])).toEqual([
            'odd',
            'even',
            'odd',
            'even',
        ]);
    });

    test('handles zero correctly as even', () => {
        expect(evenOrOdd([0])).toEqual(['even']);
    });
});
