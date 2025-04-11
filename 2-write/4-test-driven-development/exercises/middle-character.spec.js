import { middleCharacter } from "./middle-character.js"

describe('middleCharacter', () => {
    test('returns empty string when input is empty', () => {
        expect(middleCharacter('')).toBe('');
        expect(middleCharacter()).toBe('');
    });

    test('returns the single character when input length is 1', () => {
        expect(middleCharacter('a')).toBe('a');
    });

    test('returns the middle character for odd length strings', () => {
        expect(middleCharacter('abc')).toBe('b');
        expect(middleCharacter('hello')).toBe('l');
        expect(middleCharacter('world')).toBe('r');
    });

    test('returns the middle two characters for even length strings', () => {
        expect(middleCharacter('test')).toBe('es');
        expect(middleCharacter('middle')).toBe('dd');
        expect(middleCharacter('abcd')).toBe('bc');
    });

    test('handles whitespace correctly', () => {
        expect(middleCharacter(' a ')).toBe('a');
        expect(middleCharacter('ab cd')).toBe(' ');
    });

    test('handles special characters and symbols', () => {
        expect(middleCharacter('!@#$')).toBe('@#');
        expect(middleCharacter('123*321')).toBe('*');
    });
});
