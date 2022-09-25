// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
const vowels = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true,
};

/**
* @param {string} s
* @param {number} k
* @return {number}
*/
var maxVowels = function(s, k) {
let sum = 0;
for (let i = 0; i < k; i++) {
    if (vowels[s[i]]) sum++;
}
let currSum = sum;
const length = s.length;
for (let i = 1; i <= length - k; i++) {
    if (vowels[s[i - 1]]) currSum--;
    if (vowels[s[k + i - 1]]) currSum++;
    sum = sum > currSum ? sum : currSum;
    if (sum === k) return sum;
}
return sum;
};