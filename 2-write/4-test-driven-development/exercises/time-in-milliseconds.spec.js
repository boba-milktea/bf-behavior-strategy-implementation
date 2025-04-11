import { timeInMilliseconds } from './time-in-milliseconds.js';

describe('timeInMilliseconds', () => {
  test('returns 0 for midnight', () => {
    expect(timeInMilliseconds(0, 0, 0)).toBe(0);
  });

  test('returns 1000 for one second past midnight', () => {
    expect(timeInMilliseconds(0, 0, 1)).toBe(1000);
  });

  test('returns 61000 for one minute and one second past midnight', () => {
    expect(timeInMilliseconds(0, 1, 1)).toBe(61000);
  });

  test('returns 3600000 for one hour', () => {
    expect(timeInMilliseconds(1, 0, 0)).toBe(3600000);
  });

  test('returns 3661000 for 1 hour, 1 minute, and 1 second', () => {
    expect(timeInMilliseconds(1, 1, 1)).toBe(3661000);
  });

  test('returns correct value for max values within the range', () => {
    expect(timeInMilliseconds(23, 59, 59)).toBe((23 * 3600 + 59 * 60 + 59) * 1000);
  });

  test('defaults to 0 if no parameters are given', () => {
    expect(timeInMilliseconds()).toBe(0);
  });

  test('handles partial parameters', () => {
    expect(timeInMilliseconds(1)).toBe(3600000); // 1 hour
    expect(timeInMilliseconds(0, 1)).toBe(60000); // 1 minute
  });

  test('ignores decimal input by treating them as numbers (if needed)', () => {
    expect(timeInMilliseconds(1.5, 0, 0)).toBe(1.5 * 3600000); // Not recommended unless specified
  });

  test('handles 0 hours, 59 minutes, 59 seconds', () => {
    expect(timeInMilliseconds(0, 59, 59)).toBe((59 * 60 + 59) * 1000);
  });
});
