const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  const countTrueNeighbors = (matrix, x, y) => {
    const iArr = [-1,-1,-1,0,0,+1,+1,+1];
    const jArr = [-1,0,+1,-1,+1,-1,0,+1];
    let sum = 0;
    for(let i = 0; i < 8 ; i++) {
        if ((x - iArr[i] >= 0) && ((x - iArr[i]) < matrix.length) && (y - jArr[i] >= 0) && ((y - jArr[i]) < matrix[0].length)) {
            if (matrix[x - iArr[i]][y - jArr[i]]) {
                sum++;
            }
        }
    }
    return sum;
  }

  for (let i = 0; i <= matrix.length - 1; i++) {
    let row = [];
    for (let j = 0; j <= matrix[i].length - 1; j++) {
        matrix[i][j] ? row.push(1) : row.push(countTrueNeighbors(matrix, i, j));
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper
};
