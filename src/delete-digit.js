const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strTest = n.toString(10);
  const arrTest = [];

  for (let char of strTest) {
      const strCut = strTest.replace(char, '');
      arrTest.push(Number(strCut));
  }
  return Math.max(...arrTest);
}

module.exports = {
  deleteDigit
};
