const Calc = require('../libs/_calc');

test('1 + 2 = 3', () => {
  expect(Calc(1, 2)).toBe(3);
});