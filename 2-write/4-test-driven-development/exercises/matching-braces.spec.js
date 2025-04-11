import { matchingBraces } from './matching-braces.js';

describe('matchingBraces', () => {
    test('returns true for empty string', () => {
        expect(matchingBraces()).toBe(true);
        expect(matchingBraces('')).toBe(true);
    });

    test('returns false for single opening bracket', () => {
        expect(matchingBraces('[')).toBe(false);
        expect(matchingBraces('(')).toBe(false);
        expect(matchingBraces('{')).toBe(false);
    });

    test('returns false for single closing bracket', () => {
        expect(matchingBraces(']')).toBe(false);
        expect(matchingBraces(')')).toBe(false);
        expect(matchingBraces('}')).toBe(false);
    });

    test('returns true for properly matched brackets', () => {
        expect(matchingBraces('()')).toBe(true);
        expect(matchingBraces('[]')).toBe(true);
        expect(matchingBraces('{}')).toBe(true);
        expect(matchingBraces('{[]}')).toBe(true);
        expect(matchingBraces('()[]{}')).toBe(true);
    });

    test('returns false for improperly matched brackets', () => {
        expect(matchingBraces('(]')).toBe(false);
        expect(matchingBraces('([)]')).toBe(false);
        expect(matchingBraces('{[}]')).toBe(false);
    });

    test('returns true for nested and ordered properly', () => {
        expect(matchingBraces('{[()()]}')).toBe(true);
        expect(matchingBraces('[[]{}]')).toBe(true);
    });

    test('returns false for nested but wrong order', () => {
        expect(matchingBraces('{[(])}')).toBe(false);
        expect(matchingBraces('([{})]')).toBe(false);
    });
});
