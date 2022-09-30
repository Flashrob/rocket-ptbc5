// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }

    return Object.entries(obj).reduce((a, b) => {
        if (b[1] > 1) return a;
        return a + parseInt(b[0]);
    }, 0)
    
};