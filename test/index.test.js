import test from 'ava';
import { getAmount } from '../index.js';

test('Check if getAmount is defined', t => {
  t.true(typeof getAmount === 'function');
});

test('Check pennies', t => {
  t.true(getAmount('p') === 1);
});

test('Check nickels', t => {
  t.true(getAmount('n') === 5);
});

test('Check dimes', t => {
  t.true(getAmount('d') === 10);
});

test('Check quarters', t => {
  t.true(getAmount('q') === 25);
});

test('Check error', t => {
  t.throws(() => {
    getAmount('x');
  });
});
