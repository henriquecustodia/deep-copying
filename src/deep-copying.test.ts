import { describe, test } from "node:test";
import { strictEqual, notStrictEqual } from "node:assert";
import { deepCopying } from "./deep-copying";

describe('deepCopying()', () => {
    
    test('should return a different reference than the original one', () => {
        const originalObj = {
            a: 20,
        };

        const result = deepCopying(originalObj); 

        notStrictEqual(result, originalObj, 'result and originalObj should not be equal');
    });

    test('should return the same value for primitive types', () => {
        const originalObj = {
            a: 20,
            b: 'fake-text',
            c: true
        };

        const result = deepCopying(originalObj); 

        strictEqual(result.a, originalObj.a, 'result.a and originalObj.a should be equal');
        strictEqual(result.b, originalObj.b, 'result.b and originalObj.b should be equal');
        strictEqual(result.c, originalObj.c, 'result.c and originalObj.c should be equal');
    });

    test('should return a different reference for properties typed as Object', () => {
        const originalObj = {
            a: 20,
            b: {
                c: 30,
                d: {
                    e: 40,
                    r: 'fake',
                    t: {
                        a: [1]
                    }
                }
            },
            c: 4
        };

        const result = deepCopying(originalObj); 

        console.log(originalObj, result);
        

        strictEqual(result.a, originalObj.a, 'result.a and originalObj.a should be equal');
        notStrictEqual(result.b, originalObj.b, 'result.b and originalObj.b should not be equal');
        strictEqual(result.b.c, originalObj.b.c, 'result.b.c and originalObj.b.c should be equal');
        notStrictEqual(result.b.d, originalObj.b.d, 'result.b.d and originalObj.b.d should not be equal');
        strictEqual(result.b.d.e, originalObj.b.d.e, 'result.b.e and originalObj.b.e should be equal');
        strictEqual(result.b.d.r, originalObj.b.d.r, 'result.b.r and originalObj.b.r should be equal');
        notStrictEqual(result.b.d.t, originalObj.b.d.t, 'result.b.t and originalObj.b.t should not be equal');
        strictEqual(result.c, originalObj.c, 'result.c and originalObj.c should be equal');
    });

});
