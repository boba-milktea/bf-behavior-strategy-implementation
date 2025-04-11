import { countCharacters } from './count-characters.js';

describe('countCharacters', () => {
    test('returns correct count for a simple string', () => {
        expect(countCharacters('hi')).toEqual({ h: 1, i: 1 });
    });

    test('counts repeated characters correctly', () => {
        expect(countCharacters('hiiii')).toEqual({ h: 1, i: 4 });
    });

    test('returns empty object for an empty string', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('is case-sensitive', () => {
        expect(countCharacters('aA')).toEqual({ a: 1, A: 1 });
    });

    test('handles special characters and whitespace', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });

    test('handles undefined input with default value', () => {
        expect(countCharacters()).toEqual({});
    });
});
