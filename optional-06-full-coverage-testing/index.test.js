import sum from './index.js';
import { test, assert } from 'node:test';

test('sum should return the sum of two positive numbers', () => {
  assert.equal(sum(5, 3), 8, '5 + 3 should equal 8');
});

test('sum should return 0 when one of the arguments is negative', () => {
  assert.equal(sum(5, -3), 0, '5 + (-3) should return 0');
  assert.equal(sum(-5, 3), 0, '(-5) + 3 should return 0');
  assert.equal(sum(-5, -3), 0, '(-5) + (-3) should return 0');
});

test('sum should return 0 when one of the arguments is not a number', () => {
  assert.equal(sum(5, '3'), 0, '5 + "3" should return 0');
  assert.equal(sum('5', 3), 0, '"5" + 3 should return 0');
  assert.equal(sum('5', '3'), 0, '"5" + "3" should return 0');
  assert.equal(sum(undefined, 3), 0, 'undefined + 3 should return 0');
  assert.equal(sum(null, 3), 0, 'null + 3 should return 0');
});

test('sum should return 0 when both arguments are not numbers', () => {
  assert.equal(sum('a', 'b'), 0, '"a" + "b" should return 0');
  assert.equal(sum(null, undefined), 0, 'null + undefined should return 0');
  assert.equal(sum({}, []), 0, 'an object + an array should return 0');
});

test('sum should return 0 when no arguments are provided', () => {
  assert.equal(sum(), 0, 'sum() should return 0');
});
