/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  if (arr[0] > arr[1]) return false;

  const maxIndex = arr.indexOf(Math.max(...arr));

  if (maxIndex === arr.length - 1 || maxIndex === 0) return false;

  for (let i = maxIndex; i >= 0; i--) {
    if (arr[i - 1] && arr[i] < arr[i - 1]) return false;
    if (arr[i - 1] && arr[i] === arr[i - 1]) return false;
  }

  for (let i = maxIndex; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] < arr[i + 1]) return false;
    if (arr[i - 1] && arr[i] === arr[i + 1]) return false;
  }

  return true;
};

// https://leetcode.com/problems/valid-mountain-array/
