// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const x = nums.slice(0, n);
    const y = nums.slice(n);

for (let i = x.length; i >= 0; i--) {
    x.splice(i, 0, y[i-1]);
}

return x.filter((item) => item);
};