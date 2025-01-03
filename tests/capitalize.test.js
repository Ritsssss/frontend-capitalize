import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.deepEqual(capitalize('hello'),'Hello');

assert.deepEqual(capitalize(''),'');

console.log('All tests passed!');