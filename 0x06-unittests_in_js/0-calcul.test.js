const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('1 and 2', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('-3.7 and -1', () => {
    assert.strictEqual(calculateNumber(-3.7, -1), -5);
  });

  it('-1 and -3.7', () => {
    assert.strictEqual(calculateNumber(-1, 3.7), 3);
  });

  it('-1 and -3.7', () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });
});
