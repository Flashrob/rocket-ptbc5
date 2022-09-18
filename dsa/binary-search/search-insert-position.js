/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    const midValue = nums[midIndex];
    if (midValue === target) return midIndex;

    if (midValue < target) {
      leftIndex = midIndex + 1;
      continue;
    }
    if (midValue > target) {
      rightIndex = midIndex - 1;
    }
  }

  return nums[leftIndex] < target ? leftIndex + 1 : leftIndex;
};

// https://leetcode.com/problems/search-insert-position
