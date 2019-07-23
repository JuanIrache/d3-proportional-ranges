const proportionalRanges = require('../');

const pathDomain = proportionalRanges([4, 6], [4, 5], [0, 10], [0, 10]);

test(`x domain should remain untouched`, () => {
  expect(pathDomain.x).toEqual([4, 6]);
});

test(`x domain should be expanded`, () => {
  expect(pathDomain.y).toEqual([3.5, 5.5]);
});
