// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    const obj = {}
    
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        if (obj[nums[i]] > 1) return nums[i];
    }
};