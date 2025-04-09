// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- strategy --------
/* JavaScript syntax
1. arrow function with implicit return
2. use if...else condition
2. compare the values with strictly equal operator, if true -> return string 'strictly equal'
3. else evaluating the type, if true -> return string 'same type' 
4. else return 'totally different'
*/

const evaluatingEqual = (val1, val2) => {
    if (val1 === val2) {
        return 'strictly equal';
    } else if (typeof val1 === typeof val2) {
        return 'same type';
    }
    return 'totally different';
};

// -------- strategy --------
/* JavaScript syntax
1. arrow function with explicit return 
2. use ternary operator
*/

const evaluatingEqual2 = (val1, val2) =>
    val1 === val2
        ? 'strictly equal'
        : typeof val1 === typeof val2
        ? 'same type'
        : 'totally different';

// -------- your solutions --------

for (const solution of [evaluatingEqual, evaluatingEqual2]) {
    describe(solution.name + ': determines how similar two values are', () => {
        describe('when values are strictly equal', () => {
            it('two identical strings -> "strictly equal"', () => {
                expect(solution('hello', 'hello')).toEqual('strictly equal');
            });
            it('two identical numbers -> "strictly equal"', () => {
                expect(solution('1', '1.0')).toEqual('same type');
            });
            it('two identical booleans -> "strictly equal"', () => {});
        });
        describe('when values have the same type', () => {
            it('two different strings -> "same type"', () => {
                expect(solution('yes', 'no')).toEqual('same type');
            });
            it('two different numbers -> "same type"', () => {
                expect(solution('-1', '1')).toEqual('same type');
            });
            it('two different booleans -> "same type"', () => {
                expect(solution('true', 'false')).toEqual('same type');
            });
        });
        describe('when values are nothing alike', () => {
            it('values that are obviously different', () => {
                expect(solution(null, 4)).toEqual('totally different');
            });
            it('values that can be confusing', () => {
                // "4" and 4
                expect(solution('4', 4)).toEqual('totally different');
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
