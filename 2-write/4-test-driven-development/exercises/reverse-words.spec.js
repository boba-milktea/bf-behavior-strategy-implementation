import { reverseWords } from './reverse-words.js';

describe('reverseWords', () => {
    test('reverses a single word', () => {
        expect(reverseWords('hello')).toBe('olleh');
    });

    test('reverses each word in a two-word string', () => {
        expect(reverseWords('hello world!')).toBe('olleh !dlrow'); 
    });

    test('returns empty string when input is empty', () => {
        expect(reverseWords('')).toBe('');
    });

    test('handles multiple spaces between words', () => {
        expect(reverseWords('hello   world')).toBe('olleh   dlrow');
    });

    test('handles punctuation correctly', () => {
        expect(reverseWords('Hi, there!')).toBe(',iH !ereht');
    });

    test('reverses numbers and special characters within words', () => {
        expect(reverseWords('abc123 !@#')).toBe('321cba #@!');
    });

    test('defaults to empty string if no argument is passed', () => {
        expect(reverseWords()).toBe('');
    });
});
