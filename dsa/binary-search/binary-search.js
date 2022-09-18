/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[midIndex] === target) return midIndex;

    if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
      continue;
    }

    if (nums[midIndex] > target) {
      rightIndex = midIndex - 1;
    }
  }

  return -1;
};

//https://leetcode.com/problems/binary-search/
