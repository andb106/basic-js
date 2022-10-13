const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const controlStrings = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  const res = [];

  let flagDeleteNext = false;
  let flagDeletePrev = false;
  let flagDoubleNext = false;
  let flagDoublePrev = false;

  arr.forEach((item, i) => {
      if (!controlStrings.includes(item)) {
          res.push(item);

          if (flagDeleteNext) {
              res.pop();
              flagDeleteNext = false;
          }

          if (flagDoubleNext) {
              res.push(item);
              flagDoubleNext = false;
          }

      } else {
          switch (item) {

              case '--discard-next': 
                  flagDeleteNext = true;
                  break;

              case '--discard-prev': 
                  res.splice(i-1, 1);
                  break;

              case '--double-next': 
                  flagDoubleNext = true;
                  break;

              case '--double-prev': 
                  res.push(res[i-1]);
                  break;
          }
      }
  })

  return res.filter(item => item);
}

module.exports = {
  transform
};
