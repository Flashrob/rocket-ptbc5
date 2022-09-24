// https://leetcode.com/problems/sum-of-all-odd-length-subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length; i += 2) {
            let start = 0;
            let end = start + i
        while (end <= arr.length) {
            sum += arr.slice(start, end).reduce((a, b) => a + b, 0);
            start++;
            end++;
        }
    }
    return sum;
};