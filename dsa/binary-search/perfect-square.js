/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  if (num === 1) return true;

  while (right - left > 1) {
    const mid = Math.floor(left + (right - left) / 2);
    const square = mid ** 2;
    if (square === num) return true;

    if (square < num) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return false;
};

// https://leetcode.com/problems/valid-perfect-square
