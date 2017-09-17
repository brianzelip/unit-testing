import test from 'ava';
import { getAmount } from '../index.js';

test('Check if getAmount is defined', t => {
  t.true(typeof getAmount === 'function');
});
