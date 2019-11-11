const getColor = require('./getcolor');

test('equal rgb(255,255,255)', () => {
  expect(getColor()).toBe('rgb(255,255,255)');
});