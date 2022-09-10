// https://leetcode.com/problems/number-of-good-pairs/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let count = 0;
    const cache = {}
    
    for (let i = 0; i < nums.length; i++){
        if (cache[i]) continue;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) count++;
        }
        cache[i] = true
    }
    
    return count;
};