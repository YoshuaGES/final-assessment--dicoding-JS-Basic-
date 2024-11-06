import { sum } from "./index.js";
import { test } from 'node:test'; 
import assert from 'node:assert';

test('should first', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(1, 7), 8);
    assert.strictEqual(sum(1, -1), 0);
})