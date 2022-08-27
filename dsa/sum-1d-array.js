/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (!nums.length) return;

  const sums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    sums.push(sums[i - 1] + nums[i]);
  }

  return sums;
};

console.log(runningSum([1, 2, 3]));
